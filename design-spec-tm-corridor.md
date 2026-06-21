# TM Corridor — Technical Design Specification

**Feature**: TM Corridor (cipher-run mode)  
**Target levels**: 4, 6, 8 (0-indexed: `progressLevel` 3, 5, 7)  
**Codebase**: Dawn Dashers — vanilla JS, no bundler  
**Date**: 2026-06-17  

---

## 1. Overview

The TM Corridor is a timed optional mini-mode that interrupts the normal endless-runner loop at the opening of specific levels. For 15–30 seconds the world geometry stays the same, but gameplay logic transforms into a live Turing Machine simulation: the player IS the read/write head, the three-lane road becomes a symbolic tape, and objects flying down the track are tape symbols to be *read* (standing in the correct lane) rather than dodged or collected.

Clearing the corridor awards a score bonus and a narrative beat. Failing drops back into normal `q_run` with no penalty beyond the lost bonus.

---

## 2. Design Decisions

| Decision | Choice | Rationale |
|---|---|---|
| FSM integration | Sub-state flag inside `q_run` | Zero disruption to `DELTA` table; `state.corridor` object tracks everything |
| Lane mapping | Restrict to 3 canonical lanes (1, 4, 7) during corridor | Keeps existing lane-index system intact; only `getMovementLaneBounds` needs a corridor branch |
| Symbols-per-step | One symbol object per step, not a swarm | Keeps timing readable; one correct lane per step |
| Wrong-read penalty | -1 lives, not instant fail | Maintains normal game feel; second wrong-read ends corridor |
| Timeout behaviour | Corridor fails gracefully, normal run resumes | Preserves flow-game pacing |
| TM programs | Defined in new `corridor-programs.js`, loaded before `game.js` | Separation of data from engine; easy for future levels |
| Render hook | `drawCorridorOverlay(ctx, w, h)` called at end of `draw()` | No Three.js changes needed; pure Canvas 2D HUD |
| Spawn hook | `updateCorridor(dt)` called at top of `update(dt)` | Corridor takes over spawning loop via early-return guard |

---

## 3. Trigger Conditions

### 3.1 When to trigger

```
TRIGGER_LEVELS = new Set([3, 5, 7])  // progressLevel (0-indexed)
```

The corridor fires **once per run per level**, at the very start of a level, before any normal objects spawn.

### 3.2 Where to check

At the bottom of `resetGame()`, after `state.distance = 0` is set, add:

```js
if (TRIGGER_LEVELS.has(state.progressLevel)) {
  initCorridor(state.progressLevel);
}
```

`initCorridor` is exported from `corridor-programs.js` (see §8).

### 3.3 Guard: do not re-trigger

```js
state.corridor.completedByLevel ??= {};
if (state.corridor.completedByLevel[state.progressLevel]) return; // already ran
```

### 3.4 How it ends

| Condition | Outcome |
|---|---|
| TM reaches `q_accept` | **Win** — bonus score, HUD celebration |
| Player takes 2 wrong-lane hits | **Fail** — corridor dismissed, game continues |
| 30-second wall-clock timeout | **Fail** — same |
| Player triggers a puzzle modal or food modal | Corridor pauses (via `state.paused` check in `updateCorridor`) |

---

## 4. Lane-to-Symbol Mapping

### 4.1 Canonical corridor lanes

During the corridor, player movement is constrained to exactly three **corridor lanes** — physical lane indices 1, 4, 7 (out of the existing 9-lane array `[-4,-3,-2,-1,0,1,2,3,4]`):

| Corridor position | Physical lane index | Game X offset | TM symbol |
|---|---|---|---|
| Left | 1 (lanes[1] = −3) | −3 × 0.11 = −0.33 | **`0`** |
| Center | 4 (lanes[4] = 0) | 0 | **`B`** (blank) |
| Right | 7 (lanes[7] = 3) | 3 × 0.11 = +0.33 | **`1`** |

### 4.2 Movement override

Add a branch to `getMovementLaneBounds()`:

```js
function getMovementLaneBounds() {
  if (state.corridor?.active) {
    return [1, 7];           // min and max of corridor set
  }
  return getMovementLaneBoundsForCharacter(selectedCharacter);
}
```

Then override `changeLane(dir)` to step only to the next corridor lane:

```js
function changeLane(dir) {
  if (!state.corridor?.active) { /* existing logic */ return; }
  const CORRIDOR_LANES = [1, 4, 7];
  const curIdx = CORRIDOR_LANES.indexOf(state.player.lane);
  if (curIdx === -1) { state.player.lane = 4; return; }
  const nextIdx = Math.max(0, Math.min(2, curIdx + dir));
  state.player.lane = CORRIDOR_LANES[nextIdx];
}
```

### 4.3 Visual labelling

In `drawCorridorOverlay()`, render three persistent lane badges just above the vanishing point:

```
          ┌───┐      ┌───┐      ┌───┐
          │ 0 │      │ B │      │ 1 │
          └───┘      └───┘      └───┘
```

Color coding: `0` = gold (`#ffd166`), `B` = cyan (`#8be9ff`), `1` = violet (`#b58cff`).

---

## 5. Transition Table UI

The HUD overlay is rendered on top of the canvas at all times during the corridor. It consists of three areas:

```
╔══════════════════════════════════════════════════════════════╗
║  TM CORRIDOR — TAPE HEAD RUN          [TIMER ████████░░]  30s ║
╠══════════════════════════════════════════════════════════════╣
║  STATE: q_even                                               ║
║  NEXT:  δ(q_even, 0) → (q_even, 0, R)   → STAY IN q_even   ║
║         ↳ Be in the 0-lane when the symbol arrives!          ║
╠══════════════════════════════════════════════════════════════╣
║  TAPE: [0] [1] [_1_] [0] [B]    head at position 2          ║
╚══════════════════════════════════════════════════════════════╝
```

### 5.1 Layout zones

| Zone | Canvas coordinates | Content |
|---|---|---|
| Title bar | top 40 px | "TM CORRIDOR" label + timer bar |
| State panel | y: 50–110 | Current state + active transition rule |
| Tape strip | bottom 60 px | Mini-cells of input tape |

### 5.2 Sketch of render function

```js
function drawCorridorOverlay(ctx, w, h) {
  const c = state.corridor;
  if (!c?.active) return;

  // --- Background scrim
  ctx.save();
  ctx.fillStyle = 'rgba(8, 16, 29, 0.72)';
  ctx.fillRect(0, 0, w, 120);
  ctx.fillRect(0, h - 70, w, 70);

  // --- Timer bar
  const elapsed = (Date.now() - c.startedAt) / 1000;
  const remaining = Math.max(0, c.durationSec - elapsed);
  const timerW = w * 0.36;
  const timerH = 10;
  const timerX = w - timerW - 20;
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fillRect(timerX, 16, timerW, timerH);
  ctx.fillStyle = remaining > 8 ? '#52b788' : '#ff6b35';
  ctx.fillRect(timerX, 16, timerW * (remaining / c.durationSec), timerH);

  // --- State label
  ctx.fillStyle = '#8be9ff';
  ctx.font = 'bold 15px Nunito';
  ctx.textBaseline = 'top';
  ctx.fillText(`STATE: ${c.currentState}`, 20, 14);

  // --- Active transition
  const rule = getActiveCorridorRule(c);
  if (rule) {
    ctx.fillStyle = '#ffd166';
    ctx.font = '13px Nunito';
    ctx.fillText(
      `δ(${c.currentState}, ${rule.readSymbol}) → (${rule.next}, ${rule.write}, ${rule.dir})`,
      20, 38
    );
    const lanesMap = { '0': 'LEFT-LANE (0)', 'B': 'CENTER-LANE (B)', '1': 'RIGHT-LANE (1)' };
    ctx.fillStyle = '#f3e5c0';
    ctx.font = 'italic 12px Nunito';
    ctx.fillText(`→ position yourself in the ${lanesMap[rule.readSymbol]}`, 20, 60);
  } else {
    ctx.fillStyle = '#52b788';
    ctx.font = 'bold 15px Nunito';
    ctx.fillText('q_accept reached! CORRIDOR CLEARED!', 20, 38);
  }

  // --- Tape mini-strip
  const tape = c.program.input;
  const cellW = 28; const cellH = 28;
  const stripX = 20;
  const stripY = h - 56;
  ctx.font = 'bold 13px Nunito';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  tape.forEach((sym, idx) => {
    const cx = stripX + idx * (cellW + 4) + cellW / 2;
    const active = idx === c.headPos;
    ctx.fillStyle = active ? '#ffd166' : 'rgba(255,255,255,0.12)';
    ctx.fillRect(stripX + idx * (cellW + 4), stripY, cellW, cellH);
    ctx.fillStyle = active ? '#08101d' : '#f3e5c0';
    ctx.fillText(sym, cx, stripY + cellH / 2);
  });
  // head pointer
  const hx = stripX + c.headPos * (cellW + 4) + cellW / 2;
  ctx.fillStyle = '#ffd166';
  ctx.font = '10px Nunito';
  ctx.fillText('▲', hx, stripY + cellH + 10);

  ctx.restore();
}
```

---

## 6. Symbol Spawning

### 6.1 Object type: `corridorSymbol`

Add to `state.items` like any other falling object, with additional fields:

```js
{
  type: 'corridorSymbol',
  lane: 1 | 4 | 7,         // which corridor lane
  symbol: '0' | '1' | 'B', // TM tape symbol
  isTarget: true | false,   // true = the lane player must be in
  y: 0,                     // 2D canvas Y (starts near vanishing pt)
  z: -18,                   // 3D world Z (starts far)
  stepIndex: number,        // which tape position this represents
  speed: 1.2                // multiplied by normal zSpeed
}
```

### 6.2 Spawn timing

One `corridorSymbol` set (3 objects, one per corridor lane) is spawned every **2.8 seconds** (tunable via `CORRIDOR_SYMBOL_INTERVAL_SEC`). Of the three, exactly one has `isTarget: true`.

The target lane for step `i` is determined by `getCorridorTarget(program, corridor.headPos)`:
```js
function getCorridorTarget(program, headPos) {
  const symbol = program.input[headPos] ?? 'B';
  const rule = program.transitions[`${corridor.currentState},${symbol}`];
  if (!rule) return null;               // no rule → reject
  return { symbol, rule };
}
```

All three symbols for a step spawn simultaneously:
```js
['0', 'B', '1'].forEach(sym => {
  state.items.push({
    type: 'corridorSymbol',
    lane: SYM_TO_LANE[sym],            // { '0': 1, 'B': 4, '1': 7 }
    symbol: sym,
    isTarget: (sym === targetSymbol),
    y: 0,
    z: -20,
    stepIndex: c.headPos,
    speed: 1.2
  });
});
```

### 6.3 Collision detection

In the normal `update(dt)` collision loop, add a branch for `corridorSymbol`:

```js
if (item.type === 'corridorSymbol') {
  if (!hitTestItem(item)) continue;
  const playerLaneSym = LANE_TO_SYM[state.player.lane]; // { 1: '0', 4: 'B', 7: '1' }
  if (item.isTarget && playerLaneSym === item.symbol) {
    advanceCorridorStep(item.stepIndex);
  } else if (!item.isTarget && playerLaneSym === item.symbol) {
    corridorWrongRead();
  }
  state.items.splice(state.items.indexOf(item), 1);
  continue;
}
```

### 6.4 Visual appearance

In `draw()`, for `corridorSymbol` items, render a glowing tile instead of the normal shard/bomb:

```js
function drawCorridorSymbol(item) {
  const SYM_COLORS = { '0': '#ffd166', 'B': '#8be9ff', '1': '#b58cff' };
  const col = SYM_COLORS[item.symbol] ?? '#f3e5c0';
  ctx.fillStyle = item.isTarget
    ? col
    : 'rgba(180, 180, 180, 0.55)';        // dim decoys
  ctx.strokeStyle = item.isTarget ? '#ffffff' : 'rgba(120,120,120,0.4)';
  ctx.lineWidth = item.isTarget ? 2.5 : 1.2;
  ctx.beginPath();
  ctx.roundRect(-22, -22, 44, 44, 8);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = item.isTarget ? '#08101d' : 'rgba(80,80,80,0.7)';
  ctx.font = 'bold 20px Nunito';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(item.symbol, 0, 1);

  if (item.isTarget) {
    // Pulsing glow ring
    ctx.strokeStyle = `${col}88`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 26 + Math.sin(Date.now() * 0.006) * 3, 0, Math.PI * 2);
    ctx.stroke();
  }
}
```

---

## 7. State Progression

### 7.1 `initCorridor(level)`

```js
function initCorridor(level) {
  const program = TM_CORRIDOR_PROGRAMS[level];
  if (!program) return;
  state.corridor = {
    active: true,
    level,
    program,
    currentState: program.startState,
    headPos: 0,
    wrongReads: 0,
    maxWrongReads: 2,
    startedAt: Date.now(),
    durationSec: 30,
    stepsPending: 0,      // steps waiting for player to hit
    lastSpawnAt: 0,
    completedByLevel: state.corridor?.completedByLevel ?? {}
  };
  // Freeze normal spawning
  state.spawnTimer = 999;
  // Announce
  pushMessage('TM CORRIDOR ACTIVATED — become the read/write head!');
}
```

### 7.2 `advanceCorridorStep(stepIndex)`

Called when player correctly reads the target symbol:

```js
function advanceCorridorStep(stepIndex) {
  const c = state.corridor;
  if (!c?.active || stepIndex !== c.headPos) return;

  const symbol = c.program.input[c.headPos] ?? 'B';
  const key = `${c.currentState},${symbol}`;
  const rule = c.program.transitions[key];
  if (!rule) { endCorridor(false); return; }

  // Write to tape (mutate the input copy)
  c.program.input[c.headPos] = rule.write;
  // Advance head
  if (rule.dir === 'R') c.headPos++;
  else if (rule.dir === 'L') c.headPos = Math.max(0, c.headPos - 1);
  // Transition state
  c.currentState = rule.next;

  playSfx('collect');                 // reuse collect sfx

  // Check halt
  if (c.currentState === 'q_accept') {
    endCorridor(true);
  } else if (c.currentState === 'q_reject') {
    endCorridor(false);
  } else if (c.headPos >= c.program.input.length) {
    // Ran off tape end without explicit accept — treat as reject
    endCorridor(false);
  }
}
```

### 7.3 `corridorWrongRead()`

```js
function corridorWrongRead() {
  const c = state.corridor;
  if (!c?.active) return;
  c.wrongReads++;
  state.health = Math.max(0, state.health - 1);
  playSfx('hit');
  syncHud();
  pushMessage(`Wrong lane! (${c.maxWrongReads - c.wrongReads} miss${c.maxWrongReads - c.wrongReads !== 1 ? 'es' : ''} left)`);
  if (c.wrongReads >= c.maxWrongReads) {
    endCorridor(false);
  }
}
```

### 7.4 `endCorridor(win)`

```js
function endCorridor(win) {
  const c = state.corridor;
  if (!c?.active) return;

  c.active = false;
  c.completedByLevel[c.level] = win ? 'win' : 'fail';
  state.corridor.completedByLevel = c.completedByLevel;

  // Remove all lingering corridor symbols
  state.items = state.items.filter(i => i.type !== 'corridorSymbol');

  // Restore normal spawning
  state.spawnTimer = 0;

  if (win) {
    const bonus = CORRIDOR_WIN_BONUS;
    addScore(bonus);
    pushMessage(`CORRIDOR CLEARED! +${bonus} score — ${c.program.name}`);
    // Write a tape cell recording the victory
    sendFlow('LEVEL_SET', { level: state.progressLevel, payload: { corridorWin: c.program.id } });
  } else {
    pushMessage('Corridor failed. Run continues.');
  }
}
```

### 7.5 `updateCorridor(dt)`

Placed at the **top** of `update(dt)`, before any other logic:

```js
function updateCorridor(dt) {
  const c = state.corridor;
  if (!c?.active) return false;   // false = don't short-circuit update

  // Timeout check
  const elapsed = (Date.now() - c.startedAt) / 1000;
  if (elapsed >= c.durationSec) {
    endCorridor(false);
    return false;
  }

  // Spawn next symbol set
  c.lastSpawnAt = c.lastSpawnAt ?? 0;
  const sinceSpawn = (Date.now() - c.lastSpawnAt) / 1000;
  if (sinceSpawn >= CORRIDOR_SYMBOL_INTERVAL_SEC) {
    spawnCorridorSymbolSet();
    c.lastSpawnAt = Date.now();
  }

  return false;   // do NOT block the rest of update — player movement still runs
}
```

Call at the very start of the main `update(dt)`:
```js
function update(dt) {
  updateCorridor(dt);   // ← ADD THIS
  if (!state.running || state.paused) return;
  // ... rest of existing update ...
}
```

---

## 8. Win / Lose Conditions

| Event | Health | Score | State change | Normal run |
|---|---|---|---|---|
| `q_accept` reached in time | No change | `+CORRIDOR_WIN_BONUS` (750) | `corridorWin` recorded on tape | Resumes immediately |
| 2 wrong-lane hits | −2 total (−1 each hit) | No bonus | `corridorFail` noted | Resumes immediately |
| 30s timeout | No change | No bonus | `corridorFail` noted | Resumes immediately |
| `q_reject` reached explicitly | −1 | No bonus | `corridorFail` noted | Resumes immediately |

The corridor NEVER ends the game — even taking all remaining lives via wrong reads stops the corridor and puts the player into the normal `q_reject` / revive flow.

---

## 9. Integration with Existing Game State

### 9.1 No new FSM states

`state.flowMode` stays `q_run`. The corridor is a sub-flag:

```js
state.corridor = {
  active: Boolean,
  level: Number,
  program: Object,
  currentState: String,
  headPos: Number,
  wrongReads: Number,
  ...
}
```

The `game-state.js` tape still records the corridor outcome as a `σ_level_set` event with a `payload`:
```js
writeTape('σ_corridor_end', q, q, DIR.S, { level, win, program: program.id });
```
(This is handled inside `endCorridor` via `sendFlow`.)

### 9.2 Pause compatibility

`updateCorridor` checks `state.paused` indirectly because `update(dt)` bails early when paused. The corridor simply stops ticking. The timer is wall-clock based (`Date.now()`), so technically it keeps counting while paused — freeze it properly:

```js
// In updateCorridor:
if (state.paused) return false;
const elapsed = (Date.now() - c.startedAt - (c.pausedMs ?? 0)) / 1000;
```

Track `c.pausedMs` by recording `c.pauseStart = Date.now()` when entering `q_pause`, then adding `Date.now() - c.pauseStart` to `c.pausedMs` on resume.

### 9.3 Energy / food

Normal energy drain from movement continues during the corridor. The player can still eat food. The corridor has no separate energy cost.

### 9.4 Hunger modal

If `shouldPauseForHunger()` fires during the corridor, the corridor timer is frozen (see above). On resume from hunger, `state.corridor.active` is still `true` and the corridor continues.

---

## 10. Data Format

### 10.1 TM Program schema

```js
// corridor-programs.js
(() => {
  /**
   * @typedef {Object} CorridorTransition
   * @property {string} next   - target state
   * @property {string} write  - symbol to write ('0' | '1' | 'B')
   * @property {'R'|'L'|'S'} dir
   */

  /**
   * @typedef {Object} CorridorProgram
   * @property {string}   id          - unique identifier
   * @property {string}   name        - display name
   * @property {string}   description - shown before corridor starts
   * @property {string[]} states      - all states including q_accept / q_reject
   * @property {string}   startState
   * @property {string[]} input       - mutable tape array (copied at init)
   * @property {Object.<string, CorridorTransition>} transitions
   *   - keys formatted as "state,symbol", e.g. "q_even,0"
   */

  const TM_CORRIDOR_PROGRAMS = {
    // level 4 (progressLevel === 3)
    3: {
      id: 'corridor_l4_flip',
      name: 'Bit Flipper',
      description: 'Invert every bit until the blank. Simple, but you ARE the head.',
      states: ['q0', 'q_accept', 'q_reject'],
      startState: 'q0',
      input: ['0', '1'],          // 2-symbol tape → 3 steps
      transitions: {
        'q0,0':  { next: 'q0',       write: '1', dir: 'R' },
        'q0,1':  { next: 'q0',       write: '0', dir: 'R' },
        'q0,B':  { next: 'q_accept', write: 'B', dir: 'S' }
      }
    },

    // level 6 (progressLevel === 5)
    5: {
      id: 'corridor_l6_parity',
      name: 'Parity Checker',
      description: 'Track whether you\'ve seen an even number of 1s. Two states, four steps.',
      states: ['q_even', 'q_odd', 'q_accept', 'q_reject'],
      startState: 'q_even',
      input: ['0', '1', '1', '0'],  // 4-symbol tape → 5 steps (4 + blank)
      transitions: {
        'q_even,0': { next: 'q_even', write: '0', dir: 'R' },
        'q_even,1': { next: 'q_odd',  write: '1', dir: 'R' },
        'q_even,B': { next: 'q_accept', write: 'B', dir: 'S' },
        'q_odd,0':  { next: 'q_odd',  write: '0', dir: 'R' },
        'q_odd,1':  { next: 'q_even', write: '1', dir: 'R' },
        'q_odd,B':  { next: 'q_reject', write: 'B', dir: 'S' }
      }
    },

    // level 8 (progressLevel === 7)
    7: {
      id: 'corridor_l8_even_length',
      name: 'Even-Length Protocol',
      description: 'Accept binary strings of even length. Two states alternate with every symbol.',
      states: ['q_A', 'q_B', 'q_accept', 'q_reject'],
      startState: 'q_A',
      input: ['0', '1', '0', '1'],  // 4-symbol tape (even) → q_accept after blank
      transitions: {
        'q_A,0': { next: 'q_B', write: '0', dir: 'R' },
        'q_A,1': { next: 'q_B', write: '1', dir: 'R' },
        'q_A,B': { next: 'q_accept', write: 'B', dir: 'S' },
        'q_B,0': { next: 'q_A', write: '0', dir: 'R' },
        'q_B,1': { next: 'q_A', write: '1', dir: 'R' },
        'q_B,B': { next: 'q_reject', write: 'B', dir: 'S' }
      }
    }
  };

  // Make a deep copy of the input tape at runtime so re-runs start fresh
  function initCorridor(level) {
    const prog = TM_CORRIDOR_PROGRAMS[level];
    if (!prog) return null;
    return {
      ...prog,
      input: [...prog.input, 'B']   // append blank sentinel
    };
  }

  globalThis.DawnDashersCorridorPrograms = { TM_CORRIDOR_PROGRAMS, initCorridor };
})();
```

### 10.2 TM logic verification

**Level 4 — Bit Flipper** on input `01`:
| Step | State | Head | Read | Write | Dir | New state |
|---|---|---|---|---|---|---|
| 1 | q0 | 0 | `0` | `1` | R | q0 |
| 2 | q0 | 1 | `1` | `0` | R | q0 |
| 3 | q0 | 2 | `B` | `B` | S | **q_accept** ✓ |

**Level 6 — Parity Checker** on input `0110` (two 1s = even → accept):
| Step | State | Head | Read | Write | Dir | New state |
|---|---|---|---|---|---|---|
| 1 | q_even | 0 | `0` | `0` | R | q_even |
| 2 | q_even | 1 | `1` | `1` | R | q_odd |
| 3 | q_odd | 2 | `1` | `1` | R | q_even |
| 4 | q_even | 3 | `0` | `0` | R | q_even |
| 5 | q_even | 4 | `B` | `B` | S | **q_accept** ✓ |

**Level 8 — Even-Length Protocol** on input `0101` (length 4 = even → accept):
| Step | State | Head | Read | Write | Dir | New state |
|---|---|---|---|---|---|---|
| 1 | q_A | 0 | `0` | `0` | R | q_B |
| 2 | q_B | 1 | `1` | `1` | R | q_A |
| 3 | q_A | 2 | `0` | `0` | R | q_B |
| 4 | q_B | 3 | `1` | `1` | R | q_A |
| 5 | q_A | 4 | `B` | `B` | S | **q_accept** ✓ |

All three TMs are provably correct for the given inputs.

---

## 11. Example TM Programs — Detail

### Level 4 — Bit Flipper

**Concept**: A single-state TM that reads every symbol and writes its complement, moving right until it hits the blank. Maps cleanly to 3 player actions: dodge-left → dodge-right → dodge-center.

**Player experience**: First symbol is `0` → stand in left lane. Next is `1` → switch to right lane. Then blank → switch to center. Three quick lane changes, intro to the format.

**State graph**:
```
        0 → (q0, 1, R)
  q0 ──┤
        1 → (q0, 0, R)
        B → q_accept
```

---

### Level 6 — Parity Checker

**Concept**: Two states track whether an even or odd number of `1`s have been seen. Blanks and zeros leave state unchanged; a `1` flips parity. Accept if even at blank, reject if odd.

**Player experience**: Player must track which state they're in mentally — the HUD shows it — and match the displayed rule, not just the symbol. State changes after each `1`.

**State graph**:
```
              0 → (q_even, 0, R)         0 → (q_odd, 0, R)
  q_even ────┤                 q_odd ────┤
              1 → (q_odd,  1, R)         1 → (q_even, 1, R)
              B → q_accept               B → q_reject
```

---

### Level 8 — Even-Length Protocol

**Concept**: Two states alternate on every symbol regardless of its value. The binary value is irrelevant — only the *count* matters. Accept if blank is encountered in q_A (even position).

**Player experience**: The correct lane alternates L→R→L→R (for input `0101`). The state alternates A→B→A→B, giving the highest mechanical complexity in the trio. The rule shown always toggles state, keeping the player focused on rhythm.

**State graph**:
```
              0,1 → (q_B, ·, R)          0,1 → (q_A, ·, R)
  q_A ────────┤                 q_B ──────┤
              B → q_accept                B → q_reject
```

---

## 12. Implementation Roadmap

### Phase 1 — Data and scaffolding (est. ~2h)

**`web/corridor-programs.js`** *(NEW)*
- Define `TM_CORRIDOR_PROGRAMS` object for levels 3, 5, 7
- Export `initCorridor(level)` that returns a deep-copied runtime program object
- Expose via `globalThis.DawnDashersCorridorPrograms`

**`web/index.html`**
- Add `<script src="corridor-programs.js">` immediately before `game.js`

---

### Phase 2 — Corridor state wiring (est. ~3h)

**`web/game.js`** — state init
- Add `corridor: null` to the `state` object initializer (around line 5089 area)
- Add `CORRIDOR_WIN_BONUS = 750` and `CORRIDOR_SYMBOL_INTERVAL_SEC = 2.8` constants near other gameplay constants

**`web/game.js`** — `resetGame()`
- At the end of `resetGame()`, after `state.spawnTimer = 0`, add:
  ```js
  if (globalThis.DawnDashersCorridorPrograms && TRIGGER_LEVELS.has(state.progressLevel)) {
    const prog = globalThis.DawnDashersCorridorPrograms.initCorridor(state.progressLevel);
    if (prog && !state.corridor?.completedByLevel?.[state.progressLevel]) {
      initCorridorState(prog, state.progressLevel);
    }
  }
  ```

**`web/game.js`** — add `initCorridorState(prog, level)`, `advanceCorridorStep(stepIndex)`, `corridorWrongRead()`, `endCorridor(win)` functions (see §7 for bodies)

---

### Phase 3 — Update loop (est. ~2h)

**`web/game.js`** — `update(dt)`
- Add `updateCorridor(dt)` call at the very top of the function (see §7.5 for body)
- In the item collision loop (`update` body around line 6049 area), add the `corridorSymbol` collision branch (see §6.3)
- Add `spawnCorridorSymbolSet()` function called by `updateCorridor` (spawns 3 items with `type: 'corridorSymbol'`)

**`web/game.js`** — `changeLane(dir)`
- Add corridor branch to step only through `[1, 4, 7]` (see §4.2)

**`web/game.js`** — `getMovementLaneBounds()`
- Return `[1, 7]` when `state.corridor?.active` (see §4.2)

---

### Phase 4 — Render (est. ~2h)

**`web/game.js`** — `draw()`
- In the item draw dispatch block, add:
  ```js
  case 'corridorSymbol': drawCorridorSymbol(item); break;
  ```
- At the very end of `draw()`, after the standard HUD layer:
  ```js
  drawCorridorOverlay(ctx, w, h);
  ```

**`web/game.js`** — add `drawCorridorSymbol(item)` and `drawCorridorOverlay(ctx, w, h)` (see §5.2 and §6.4 for bodies)

---

### Phase 5 — Polish and tuning (est. ~1h)

**`web/game-settings.js`**
- Add `corridor` section to defaults:
  ```js
  corridor: {
    winBonus: 750,
    symbolIntervalSec: 2.8,
    durationSec: 30,
    maxWrongReads: 2
  }
  ```

**`web/game.js`** — wire constants from `gameSettings.corridor` with fallbacks

**Manual test matrix**:
- [ ] Level 4 corridor fires on first entry, skips on re-entry
- [ ] Correct lane reads advance headPos and update state label
- [ ] Wrong lane decrements health + displays miss count
- [ ] 2 wrong reads = corridor ends, normal run resumes
- [ ] Timer reaches 0 = corridor ends, normal run resumes
- [ ] q_accept reached = bonus applied, tape strip shows all cells processed
- [ ] Pausing mid-corridor freezes timer correctly
- [ ] Food purchase during corridor does not break corridor state
- [ ] All three programs accept for their provided inputs (verified in §10.2)

---

## 13. Constants Summary

```js
const TRIGGER_LEVELS          = new Set([3, 5, 7]); // progressLevel (0-indexed)
const CORRIDOR_WIN_BONUS      = 750;                // score
const CORRIDOR_SYMBOL_INTERVAL_SEC = 2.8;           // seconds between symbol sets
const CORRIDOR_DURATION_SEC   = 30;                 // wall-clock timeout
const CORRIDOR_MAX_WRONG_READS = 2;                 // hits before fail
const SYM_TO_LANE             = { '0': 1, 'B': 4, '1': 7 };  // symbol → lane index
const LANE_TO_SYM             = { 1: '0', 4: 'B',  7: '1' }; // lane index → symbol
const SYM_COLORS              = { '0': '#ffd166', 'B': '#8be9ff', '1': '#b58cff' };
```

---

## 14. File Checklist

| File | Action | What changes |
|---|---|---|
| `web/corridor-programs.js` | **CREATE** | Full TM program data + `initCorridor()` |
| `web/index.html` | **EDIT** | One `<script>` tag before `game.js` |
| `web/game.js` | **EDIT** | `state` init, `resetGame`, `update`, `draw`, `changeLane`, `getMovementLaneBounds`, +5 new functions |
| `web/game-settings.js` | **EDIT** | Add `corridor` settings block |

No changes to `game-state.js`, `game-ui.js`, `puzzle-data.js`, `puzzle-tracker.js`, or any backend file.

---

*End of spec.*
