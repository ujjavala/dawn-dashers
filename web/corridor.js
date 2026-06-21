// @ts-nocheck
// Dawn Dashers — TM Corridor Module
//
// Self-contained IIFE. Exposes globalThis.DawnDashersCorridor.
// game.js calls this module at six hook points; all corridor logic lives here.
//
// Visual design:
//   • Full-scrim overlay with amber TM aesthetic
//   • Tape strip at top showing written cells with head cursor
//   • State + active transition rule displayed centre-top
//   • Three lane columns labelled 0 / B / 1 with glow columns
//   • Falling corridor-symbol items rendered as glowing tape cells
//   • Timer bar and step counter

(() => {
  // ── Constants ──────────────────────────────────────────────────────────────
  const CORRIDOR_TRIGGER_LEVELS = new Set([2, 4, 7]);
  const WIN_BONUS              = 750;
  const STEP_BONUS             = 100;   // per correct read
  const SYMBOL_INTERVAL_SEC    = 2.0;   // time between symbol sets
  const TIMEOUT_SEC            = 90;
  const MAX_WRONG_READS        = 3;
  const SPEED_Z_PER_SEC        = 0.22;  // how fast items fall toward camera

  // Lane-index ↔ symbol (9-lane system: indices 0-8)
  // The three lanes now represent the symbol you must WRITE.
  // Player reads the incoming symbol, applies δ(state, read) → (write, dir, next),
  // and must stand in the lane of the WRITE symbol when the read tile arrives.
  const SYM_TO_LANE = { '0': 1, 'B': 4, '1': 7 };
  const LANE_TO_SYM = { 1: '0', 4: 'B', 7: '1' };
  const CORRIDOR_LANES = [1, 4, 7];
  // Offset multipliers matching lanes[1]=-3, lanes[4]=0, lanes[7]=3
  const LANE_OFFSETS  = [-3, 0, 3];

  // Amber / TM colour palette
  const CLR = {
    amber:     '#ffb300',
    amberDim:  '#9a6e00',
    amberGlow: 'rgba(255, 179, 0, 0.18)',
    tape:      '#1a1200',
    tapeCell:  '#241a00',
    tapeBorder:'#ffb300',
    cellWrite: '#00e5ff',
    correct:   '#00e676',
    wrong:     '#ff1744',
    scrim:     'rgba(8, 6, 0, 0.78)',
    laneCol:   ['rgba(255,179,0,0.06)', 'rgba(0,229,255,0.06)', 'rgba(255,179,0,0.06)'],
    laneColHot:['rgba(255,179,0,0.22)', 'rgba(0,229,255,0.22)', 'rgba(255,179,0,0.22)'],
    symbols:   { '0': '#ffb300', '1': '#00e5ff', 'B': '#76ff03' },
  };

  // ── Module-level state ────────────────────────────────────────────────────
  let _b = null;       // bindings object (set once by init())
  let _c = null;       // corridor runtime (null when inactive)

  // ── Public interface ──────────────────────────────────────────────────────

  /**
   * Called once from game.js after sendFlow and helpers are defined.
   * bindings: {
   *   getState, getCtx, getCanvas,
   *   sendFlow, pushMessage, addScore, syncHud, decrementHealth,
   *   laneToXNorm, getTrackXNorm,
   *   openBriefing   // fn(prog) — shows corridorModal then calls startAfterBriefing()
   * }
   */
  function init(bindings) {
    _b = bindings;
  }

  function isActive() {
    return _b?.getState()?.flowMode === 'q_corridor';
  }

  function reset() {
    if (_c) { _removeSymbolItems(); }
    _c = null;
  }

  /** Called from syncFlowLevelState / resetGame when a new level is set. */
  function tryActivate(progressLevel) {
    if (!_b) return;
    if (!CORRIDOR_TRIGGER_LEVELS.has(progressLevel)) return;
    const prog = globalThis.DawnDashersCorridorPrograms?.cloneProgram(progressLevel);
    if (!prog) return;
    if (typeof _b.openBriefing === 'function') {
      _b.openBriefing(prog);   // modal calls startAfterBriefing on dismiss
    } else {
      _activate(progressLevel, prog);
    }
  }

  /** Called by game.js corridorModalStartBtn click after briefing is dismissed. */
  function startAfterBriefing(progressLevel, prog) {
    if (!prog) return;
    _activate(progressLevel, prog);
  }

  /** Called at the top of game.js update(dt). */
  function update(dt) {
    if (!isActive() || !_c) return;
    _c.animTime += dt;
    _c.elapsed  += dt;
    if (_c.flashTimer > 0) _c.flashTimer = Math.max(0, _c.flashTimer - dt);

    if (_c.elapsed >= TIMEOUT_SEC) {
      _end(false, 'Time expired');
      return;
    }

    // Advance falling corridor-symbol z values (shared items array)
    const state = _b.getState();
    state.items.forEach((item) => {
      if (item.type === 'corridorSymbol') {
        item.z = Math.max(0, item.z - SPEED_Z_PER_SEC * dt);
      }
    });

    // When a symbol reaches the player zone (z <= 0.12), resolve it here.
    // We separate find/remove/process to avoid filter + mutation conflicts.
    const toResolve = state.items.filter(
      (it) => it.type === 'corridorSymbol' && it.z <= 0.12
    );
    state.items = state.items.filter(
      (it) => it.type !== 'corridorSymbol' || it.z > 0.12
    );
    for (const item of toResolve) {
      if (!isActive() || !_c) break;  // corridor may have ended mid-loop
      const playerLane    = state.player?.lane ?? 4;
      const expectedLane  = _expectedWriteLane();
      if (expectedLane == null || playerLane === expectedLane) {
        _correctRead();
      } else {
        _wrongRead();
      }
    }

    // Spawn next symbol set if nothing is on track
    _c.spawnTimer += dt;
    const hasSymbolsOnTrack = state.items.some((i) => i.type === 'corridorSymbol');
    if (!hasSymbolsOnTrack && _c.active) {
      if (_c.phase === 'idle' || _c.spawnTimer >= SYMBOL_INTERVAL_SEC) {
        _spawnSymbolSet();
      }
    }
  }

  /**
   * Called BEFORE items/player are drawn (after drawBackground).
   * Draws the scrim + lane columns so symbols render on top.
   */
  function drawBackground(w, h) {
    if (!isActive() || !_c) return;
    const ctx = _b.getCtx();
    ctx.save();
    _drawScrim(ctx, w, h);
    _drawLaneColumns(ctx, w, h);
    _drawStandingPads(ctx, w, h);
    ctx.restore();
  }

  /**
   * Called AFTER player is drawn.
   * Draws tape strip, state panel, timer, labels — always on top.
   */
  function drawForeground(w, h) {
    if (!isActive() || !_c) return;
    const ctx = _b.getCtx();
    ctx.save();
    _drawTapeStrip(ctx, w, h);
    _drawStatePanel(ctx, w, h);
    _drawTimerBar(ctx, w, h);
    _drawLaneLabels(ctx, w, h);
    _drawWrongReadIndicators(ctx, w, h);
    ctx.restore();
  }

  /**
   * Called from game.js drawItem() when item.type === 'corridorSymbol'.
   * ctx is already save()/translated to item centre — we get raw coords.
   */
  function drawSymbol(item, ctx, x, y) {
    if (!_c) return;
    const t      = _c.animTime;
    const sym    = item.corridorSymbol;
    const colour = CLR.symbols[sym] || CLR.amber;
    const pulse  = 0.5 + 0.5 * Math.sin(t * 4);
    // Scale up as item approaches camera (z goes 1→0)
    const depth  = Math.max(0, Math.min(1, 1 - item.z));
    const scale  = 0.55 + depth * 0.85;  // 0.55x when spawned, 1.4x when close

    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    const ring = 28 + pulse * 6;
    const grd = ctx.createRadialGradient(0, 0, ring * 0.3, 0, 0, ring);
    grd.addColorStop(0, colour + '44');
    grd.addColorStop(1, colour + '00');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(0, 0, ring, 0, Math.PI * 2);
    ctx.fill();

    // Tape-cell box
    const sz = 26;
    ctx.fillStyle = CLR.tapeCell;
    ctx.strokeStyle = colour;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(-sz, -sz, sz * 2, sz * 2, 6);
    ctx.fill();
    ctx.stroke();

    // Top bracket ⊤
    ctx.strokeStyle = colour + 'aa';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-sz + 4, -sz + 4); ctx.lineTo(sz - 4, -sz + 4);
    ctx.stroke();

    // Symbol character (the symbol being READ)
    ctx.fillStyle = colour;
    ctx.shadowColor = colour;
    ctx.shadowBlur = 12 + pulse * 8;
    ctx.font = 'bold 24px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(sym, 0, 1);
    ctx.shadowBlur = 0;

    // "READ" label above the tile — reminds the player this is the input symbol,
    // NOT where to go. They must decide the WRITE lane themselves.
    ctx.fillStyle = colour + 'cc';
    ctx.font = `bold ${Math.round(10 * 1)}px monospace`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('READ', 0, -sz - 8);

    ctx.restore();
  }

  /**
   * Called from game.js handleCollectedItem() for corridorSymbol items.
   * Returns true if handled (caller should return early).
   */
  function handleSymbolCollected(item) {
    if (!isActive() || !_c) return false;
    if (item.type !== 'corridorSymbol') return false;

    const state = _b.getState();
    const playerLane = state.player?.lane ?? 4;
    const expectedLane = _expectedWriteLane();

    if (expectedLane == null || playerLane === expectedLane) {
      _correctRead();
    } else {
      _wrongRead();
    }
    return true;
  }

  /**
   * Returns lane bounds when corridor is active; null otherwise.
   * game.js getMovementLaneBounds() checks this.
   */
  function getCorridorLaneBounds() {
    if (!isActive()) return null;
    return [1, 7];
  }

  /**
   * The discrete lanes the player may occupy in a corridor (left / centre / right).
   * Movement must snap between these — intermediate lanes have no WRITE meaning.
   */
  function getCorridorLanes() {
    if (!isActive()) return null;
    return CORRIDOR_LANES.slice();
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  function _activate(level, prog) {
    _c = {
      active: true,
      level,
      program: prog,
      currentState: prog.startState,
      headPos: 0,
      writtenTape: [],
      wrongReads: 0,
      correctSteps: 0,
      elapsed: 0,
      spawnTimer: SYMBOL_INTERVAL_SEC,
      phase: 'idle',
      animTime: 0,
      flashMsg: null,
      flashTimer: 0,
      lastCorrectRule: null,
    };

    // Clear any pre-existing falling items so nothing can damage the player mid-corridor
    const _st = _b.getState();
    _st.items = _st.items.filter(it => it.type === 'corridorSymbol');

    // Start the head on the centre lane so the player begins on a valid WRITE lane.
    if (_st.player) _st.player.lane = 4;

    // FSM transition: q_run → q_corridor
    _b.sendFlow('σ_corridor_start', { level, program: prog.id });
    _b.pushMessage(`⊢ TM CORRIDOR: ${prog.name} | Read the symbol, apply δ, run to the WRITE lane!`);
    _b.syncHud();
  }

  // Rule for the symbol currently being read in the current state.
  function _currentRule() {
    if (!_c) return null;
    const sym = _c.program.input[_c.headPos];
    return _c.program.transitions[`${_c.currentState},${sym}`] || null;
  }

  // Lane the player must stand in = lane of the WRITE symbol of the current rule.
  function _expectedWriteLane() {
    const rule = _currentRule();
    return rule ? SYM_TO_LANE[rule.write] : null;
  }

  function _spawnSymbolSet() {
    if (!isActive() || !_c) return;
    if (_c.headPos >= _c.program.input.length) return;

    const sym = _c.program.input[_c.headPos];
    const state = _b.getState();

    // The READ tile descends down the CENTRE — neutral, no lane hint.
    // The player must reason out the WRITE lane via δ(state, read).
    state.items.push({
      type: 'corridorSymbol',
      corridorSymbol: sym,   // the READ symbol
      lane: 4,               // centre channel — not the answer
      xNorm: 0.5,
      z: 1.0,
      _corridorStep: _c.headPos,
    });

    _c.phase = 'spawned';
    _c.spawnTimer = 0;
  }

  function _correctRead() {
    if (!isActive() || !_c) return;
    const prog     = _c.program;
    const sym      = prog.input[_c.headPos];
    const key      = `${_c.currentState},${sym}`;
    const rule     = prog.transitions[key];

    if (!rule) {
      _end(false, 'No transition');
      return;
    }

    const prevState = _c.currentState;

    // Record write to tape
    _c.writtenTape.push({ read: sym, written: rule.write, state: prevState });
    _c.lastCorrectRule = { from: prevState, read: sym, write: rule.write, dir: rule.dir, next: rule.next };

    _c.currentState = rule.next;
    _c.headPos += 1;
    _c.correctSteps += 1;
    _c.phase = 'idle';

    // Score is NOT applied live — it's tallied and awarded when the corridor ends.

    // Remove all corridor symbols (clean slate for next step)
    _removeSymbolItems();

    // Flash
    _c.flashMsg = `✓ ${prevState} →[${sym}/${rule.write},${rule.dir}]→ ${rule.next}`;
    _c.flashTimer = 1.8;

    // Send TM step to game-state FSM
    _b.sendFlow('σ_corridor_step', {
      fromState: prevState, read: sym, write: rule.write, dir: rule.dir, toState: rule.next
    });

    // Check for halt
    if (rule.next === 'q_accept') {
      setTimeout(() => _end(true), 900);
    } else if (rule.next === 'q_reject') {
      setTimeout(() => _end(false, 'Machine rejected'), 900);
    } else if (_c.headPos >= prog.input.length) {
      // Ran off end of input — look for blank transition
      const blankKey = `${_c.currentState},B`;
      const blankRule = prog.transitions[blankKey];
      if (blankRule) {
        // Trigger blank symbol immediately
        _c.program.input.push('B');
      } else {
        _end(false, 'Input exhausted');
      }
    }
  }

  function _wrongRead() {
    if (!isActive() || !_c) return;
    _c.wrongReads += 1;
    _c.flashMsg = `✗ Missed! (${_c.wrongReads}/${MAX_WRONG_READS} attempts)`;
    _c.flashTimer = 1.0;
    _removeSymbolItems();
    _c.phase = 'idle';

    _b.sendFlow('σ_corridor_wrong', { wrongReads: _c.wrongReads });
    // No heart penalty — corridor is a bonus event, not a punishment

    if (_c.wrongReads >= MAX_WRONG_READS) {
      setTimeout(() => _end(false, 'Too many misses'), 600);
    }
  }

  function _end(win, reason) {
    if (!_c) return;
    _removeSymbolItems();
    _c.active = false;

    // Tally all points now — nothing was applied to the score during play
    const stepPoints = _c.correctSteps * STEP_BONUS;

    if (win) {
      // FSM: q_corridor → q_run (accept path)
      _b.sendFlow('σ_corridor_accept', { program: _c.program.id });
      const total = stepPoints + WIN_BONUS;
      _b.addScore(total);
      _b.pushMessage(`⊢ ACCEPTED — ${_c.correctSteps} reads ×${STEP_BONUS} + ${WIN_BONUS} bonus = +${total} pts`);
    } else {
      // FSM: q_corridor → q_run (reject path) — still award the correct reads earned
      _b.sendFlow('σ_corridor_reject', { program: _c.program.id, reason });
      if (stepPoints > 0) {
        _b.addScore(stepPoints);
        _b.pushMessage(`⊣ REJECTED${reason ? ': ' + reason : ''} — ${_c.correctSteps} correct reads = +${stepPoints} pts`);
      } else {
        _b.pushMessage(`⊣ REJECTED${reason ? ': ' + reason : ''}`);
      }
    }
    _b.syncHud();
    _c = null;
  }

  function _removeSymbolItems() {
    if (!_b) return;
    const state = _b.getState();
    if (!state || !Array.isArray(state.items)) return;
    state.items = state.items.filter((i) => i.type !== 'corridorSymbol');
  }

  // ── Rendering helpers ──────────────────────────────────────────────────────

  // ── Perspective sci-fi corridor environment (the "tunnel") ─────────────────
  // A real hallway in 1-point perspective: four surfaces (floor / ceiling / two
  // walls) converge on a glowing vanishing point near the top, where the tape
  // symbols emerge. Scrolling depth seams + ceiling lights create the sensation
  // of charging forward down the corridor.
  function _drawScrim(ctx, w, h) {
    const t   = _c?.animTime ?? 0;
    const vpX = w * 0.5;
    const vpY = h * 0.14;                 // vanishing point near top-centre
    const VP  = [vpX, vpY];
    const TL = [0, 0], TR = [w, 0], BR = [w, h], BL = [0, h];
    const lerp = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];

    // 1 ── Deep-space base with a luminous well at the vanishing point
    const bg = ctx.createRadialGradient(vpX, vpY, 6, vpX, vpY, h * 1.15);
    bg.addColorStop(0,    '#0c3a59');
    bg.addColorStop(0.16, '#06283f');
    bg.addColorStop(0.5,  '#03121f');
    bg.addColorStop(1,    '#01060d');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // 2 ── The four corridor surfaces, each a triangle meeting at the VP
    const surface = (a, b, fill) => {
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.lineTo(VP[0], VP[1]);
      ctx.closePath();
      ctx.fill();
    };
    // Ceiling — darkest, recedes upward
    const ceil = ctx.createLinearGradient(0, 0, 0, vpY);
    ceil.addColorStop(0, 'rgba(2,12,22,0.92)');
    ceil.addColorStop(1, 'rgba(6,30,48,0)');
    surface(TL, TR, ceil);
    // Floor — lighter near the camera, cool steel
    const floor = ctx.createLinearGradient(0, h, 0, vpY);
    floor.addColorStop(0, 'rgba(8,26,40,0.95)');
    floor.addColorStop(1, 'rgba(4,18,30,0)');
    surface(BL, BR, floor);
    // Left wall — brighter at the screen edge, darkens toward centre
    const lw = ctx.createLinearGradient(0, 0, vpX, 0);
    lw.addColorStop(0, 'rgba(6,22,36,0.85)');
    lw.addColorStop(1, 'rgba(3,12,22,0)');
    surface(TL, BL, lw);
    // Right wall
    const rw = ctx.createLinearGradient(w, 0, vpX, 0);
    rw.addColorStop(0, 'rgba(6,22,36,0.85)');
    rw.addColorStop(1, 'rgba(3,12,22,0)');
    surface(TR, BR, rw);

    // 3 ── Scrolling depth seams (cross-sections rushing toward the camera)
    const RINGS = 18;
    const speed = 0.26;
    for (let i = 0; i < RINGS; i++) {
      const p = ((t * speed) + i / RINGS) % 1;       // 0 at VP → 1 at camera
      const f = 1 - Math.pow(p, 2.3);                 // perspective easing
      const a = lerp(TL, VP, f), b = lerp(TR, VP, f);
      const c = lerp(BR, VP, f), d = lerp(BL, VP, f);
      const fade = Math.sin(p * Math.PI);             // fade in/out at the ends

      // Seam rectangle
      ctx.strokeStyle = `rgba(0,200,235,${(fade * 0.22).toFixed(3)})`;
      ctx.lineWidth   = 1 + (1 - f) * 1.2;
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
      ctx.lineTo(c[0], c[1]); ctx.lineTo(d[0], d[1]);
      ctx.closePath();
      ctx.stroke();

      // Ceiling light bar — the bright top span of every other seam
      if (i % 2 === 0) {
        ctx.strokeStyle = `rgba(130,240,255,${(fade * 0.5).toFixed(3)})`;
        ctx.lineWidth   = 1.5 + (1 - f) * 2.5;
        ctx.shadowColor = '#7ef5ff';
        ctx.shadowBlur  = 10 * fade;
        ctx.beginPath();
        ctx.moveTo(a[0] + (b[0] - a[0]) * 0.32, a[1] + (b[1] - a[1]) * 0.32);
        ctx.lineTo(a[0] + (b[0] - a[0]) * 0.68, a[1] + (b[1] - a[1]) * 0.68);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    // 4 ── Neon edge beams along the four corridor corners
    ctx.save();
    ctx.shadowColor = '#00e5ff';
    ctx.shadowBlur  = 18;
    [TL, TR, BR, BL].forEach((corner) => {
      const eg = ctx.createLinearGradient(corner[0], corner[1], vpX, vpY);
      eg.addColorStop(0, 'rgba(0,229,255,0.6)');
      eg.addColorStop(1, 'rgba(120,245,255,0.95)');
      ctx.strokeStyle = eg;
      ctx.lineWidth   = 2;
      ctx.beginPath();
      ctx.moveTo(corner[0], corner[1]);
      ctx.lineTo(vpX, vpY);
      ctx.stroke();
    });
    ctx.restore();

    // 5 ── Vanishing-point portal — symbols emerge from here
    const portalR = 24 + 5 * Math.sin(t * 2.2);
    const pg = ctx.createRadialGradient(vpX, vpY, 2, vpX, vpY, portalR * 2.4);
    pg.addColorStop(0,   'rgba(150,250,255,0.6)');
    pg.addColorStop(0.45,'rgba(0,229,255,0.2)');
    pg.addColorStop(1,   'rgba(0,229,255,0)');
    ctx.fillStyle = pg;
    ctx.beginPath();
    ctx.arc(vpX, vpY, portalR * 2.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.strokeStyle = 'rgba(170,252,255,0.85)';
    ctx.lineWidth   = 2;
    ctx.shadowColor = '#7ef5ff';
    ctx.shadowBlur  = 14;
    ctx.beginPath();
    ctx.arc(vpX, vpY, portalR, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 6 ── CRT scanlines + vignette for that cathode glow
    ctx.fillStyle = 'rgba(0,0,0,0.10)';
    for (let y = 0; y < h; y += 3) ctx.fillRect(0, y, w, 1);
    const vig = ctx.createRadialGradient(w / 2, h * 0.55, h * 0.25, w / 2, h * 0.55, h * 0.98);
    vig.addColorStop(0, 'transparent');
    vig.addColorStop(1, 'rgba(0,0,0,0.5)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, w, h);
  }

  // ── Perspective floor lanes (channels racing toward the vanishing point) ────
  function _drawLaneColumns(ctx, w, h) {
    const t          = _c?.animTime ?? 0;
    const state      = _b.getState();
    const playerLane = state?.player?.lane ?? 4;
    const vpX        = w * 0.5;
    const vpY        = h * 0.14;
    const floorY     = h;
    const farF       = 0.84;     // how close to the VP the lane converges

    CORRIDOR_LANES.forEach((laneIdx, i) => {
      const xNorm = 0.5 + LANE_OFFSETS[i] * 0.11;
      const nearX = xNorm * w;
      const colW  = w * 0.13;
      const sym   = LANE_TO_SYM[laneIdx];
      const clr   = CLR.symbols[sym] || CLR.amber;
      const isHot = playerLane === laneIdx;

      // Near + far edges of the channel
      const nLx = nearX - colW / 2, nRx = nearX + colW / 2;
      const fLx = nLx + (vpX - nLx) * farF;
      const fRx = nRx + (vpX - nRx) * farF;
      const fY  = floorY + (vpY - floorY) * farF;

      // Channel fill — glows up from the floor
      const g = ctx.createLinearGradient(0, fY, 0, floorY);
      g.addColorStop(0, clr + '00');
      g.addColorStop(1, clr + (isHot ? '3c' : '1e'));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(nLx, floorY);
      ctx.lineTo(fLx, fY);
      ctx.lineTo(fRx, fY);
      ctx.lineTo(nRx, floorY);
      ctx.closePath();
      ctx.fill();

      // Converging edge rails
      ctx.save();
      ctx.strokeStyle = clr + (isHot ? 'ee' : '88');
      ctx.lineWidth   = isHot ? 2.5 : 1.5;
      if (isHot) { ctx.shadowColor = clr; ctx.shadowBlur = 14; }
      ctx.beginPath();
      ctx.moveTo(nLx, floorY); ctx.lineTo(fLx, fY);
      ctx.moveTo(nRx, floorY); ctx.lineTo(fRx, fY);
      ctx.stroke();
      ctx.restore();

      // Runway chevrons scrolling toward the camera
      const chevN = 7;
      for (let k = 0; k < chevN; k++) {
        const p  = ((t * 0.42) + k / chevN) % 1;
        const f  = 1 - Math.pow(p, 2.0);
        const cy = floorY + (vpY - floorY) * f;
        const cx = nearX + (vpX - nearX) * f;
        const cw = colW * (1 - f);
        const a  = Math.sin(p * Math.PI) * (isHot ? 0.75 : 0.3);
        ctx.strokeStyle = clr + Math.round(a * 255).toString(16).padStart(2, '0');
        ctx.lineWidth   = isHot ? 2 : 1;
        ctx.beginPath();
        ctx.moveTo(cx - cw * 0.34, cy - cw * 0.16);
        ctx.lineTo(cx,             cy);
        ctx.lineTo(cx + cw * 0.34, cy - cw * 0.16);
        ctx.stroke();
      }
    });
  }

  // ── Standing pads — three glowing foot markers showing WHERE to stand ───────
  // Drawn at the player's foot depth and aligned to the player's exact x so it's
  // unmistakable which of the three lanes you currently occupy.
  function _drawStandingPads(ctx, w, h) {
    if (!_c) return;
    const t          = _c.animTime;
    const state      = _b.getState();
    const playerLane = state?.player?.lane ?? 4;
    const padY       = h * 0.72;     // matches drawCharacter foot level

    CORRIDOR_LANES.forEach((laneIdx) => {
      // Use the player's exact x-formula so the pad sits under the character.
      const x    = w * _b.getTrackXNorm(_b.laneToXNorm(laneIdx), 0.96);
      const sym  = LANE_TO_SYM[laneIdx];
      const clr  = CLR.symbols[sym] || CLR.amber;
      const isHot = playerLane === laneIdx;
      const padW = isHot ? 64 : 50;
      const padH = isHot ? 20 : 15;
      const pulse = isHot ? 0.7 + 0.3 * Math.sin(t * 6) : 0.4;

      ctx.save();
      ctx.globalAlpha = pulse;

      // Filled disc
      const grd = ctx.createRadialGradient(x, padY, 2, x, padY, padW);
      grd.addColorStop(0, clr + (isHot ? 'aa' : '55'));
      grd.addColorStop(1, clr + '00');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.ellipse(x, padY, padW, padH, 0, 0, Math.PI * 2);
      ctx.fill();

      // Ring outline
      ctx.globalAlpha = isHot ? 1 : 0.7;
      ctx.strokeStyle = clr + (isHot ? 'ff' : 'aa');
      ctx.lineWidth   = isHot ? 3 : 1.5;
      if (isHot) { ctx.shadowColor = clr; ctx.shadowBlur = 18; }
      ctx.beginPath();
      ctx.ellipse(x, padY, padW, padH, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // The lane's WRITE symbol stamped on the pad (so you know what standing
      // here means you'll write)
      ctx.globalAlpha = isHot ? 1 : 0.85;
      ctx.fillStyle   = clr;
      ctx.font        = `bold ${isHot ? 16 : 13}px monospace`;
      ctx.textAlign   = 'center';
      ctx.textBaseline = 'middle';
      if (isHot) { ctx.shadowColor = clr; ctx.shadowBlur = 10; }
      ctx.fillText(sym, x, padY + padH + 12);
      ctx.shadowBlur = 0;

      // "YOU ARE HERE" caret above the active pad
      if (isHot) {
        ctx.globalAlpha = 0.85 + 0.15 * Math.sin(t * 6);
        ctx.fillStyle = clr;
        ctx.beginPath();
        const cyTop = padY - padH - 10 - 3 * Math.sin(t * 6);
        ctx.moveTo(x, cyTop + 10);
        ctx.lineTo(x - 7, cyTop);
        ctx.lineTo(x + 7, cyTop);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    });
  }

  // ── Rolling film-reel tape strip ──────────────────────────────────────────
  function _drawTapeStrip(ctx, w, h) {
    if (!_c) return;
    const prog     = _c.program;
    const tape     = _c.writtenTape;
    const headP    = _c.headPos;
    const cells    = prog.input;
    const total    = cells.length;
    const t        = _c.animTime;

    // Layout
    const CELL_W   = 56;
    const CELL_H   = 42;
    const REEL_H   = CELL_H + 20;     // includes sprocket holes above+below
    const HOLE_R   = 5;
    const HOLE_GAP = CELL_W;
    const STRIP_Y  = 6;               // top of reel
    const STRIP_W  = w;

    // ── Film reel background ─────────────────────────────────────────────
    // Dark backing spanning full width
    ctx.fillStyle = '#080608';
    ctx.fillRect(0, STRIP_Y, STRIP_W, REEL_H);
    // Top + bottom edge lines
    ctx.strokeStyle = '#00e5ff33';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, STRIP_Y);               ctx.lineTo(STRIP_W, STRIP_Y);
    ctx.moveTo(0, STRIP_Y + REEL_H);      ctx.lineTo(STRIP_W, STRIP_Y + REEL_H);
    ctx.stroke();

    // Sprocket holes — scrolling animation
    const scrollX = -(t * 28) % HOLE_GAP; // scroll continuously leftward
    ctx.fillStyle = '#1a1a2e';
    ctx.strokeStyle = '#00e5ff44';
    ctx.lineWidth = 0.8;
    for (let hx = scrollX - HOLE_GAP; hx < STRIP_W + HOLE_GAP; hx += HOLE_GAP) {
      // top hole
      ctx.beginPath(); ctx.arc(hx, STRIP_Y + 6,      HOLE_R, 0, Math.PI*2); ctx.fill(); ctx.stroke();
      // bottom hole
      ctx.beginPath(); ctx.arc(hx, STRIP_Y + REEL_H - 6, HOLE_R, 0, Math.PI*2); ctx.fill(); ctx.stroke();
    }

    // ── Cells ─────────────────────────────────────────────────────────────
    // Centre tape so current head cell is at screen centre, cells scroll as head advances
    const cellScrollOffset = headP * CELL_W; // px head has advanced
    const baseX = w/2 - headP * CELL_W;      // x of cell 0

    // Clip to tape region so cells don't spill
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, STRIP_Y + 8, STRIP_W, REEL_H - 16);
    ctx.clip();

    for (let i = -2; i < total + 2; i++) {
      const cx = baseX + i * CELL_W;
      if (cx + CELL_W < 0 || cx > STRIP_W) continue;
      const cy = STRIP_Y + 9;

      const isWritten  = i >= 0 && i < tape.length;
      const isCurrent  = i === headP;
      const isFuture   = i >= 0 && i < total && !isWritten && !isCurrent;
      const isPad      = i < 0 || i >= total;

      // Cell box
      let bgClr, borderClr, borderW;
      if (isCurrent) {
        bgClr = '#002030'; borderClr = '#00e5ff'; borderW = 2.5;
      } else if (isWritten) {
        const w2 = tape[i]?.written;
        bgClr = '#0a1508'; borderClr = (CLR.symbols[w2] || CLR.amber) + '88'; borderW = 1;
      } else if (isFuture) {
        bgClr = '#0d0d0d'; borderClr = '#ffffff22'; borderW = 0.5;
      } else {
        bgClr = '#050505'; borderClr = '#ffffff11'; borderW = 0.5;
      }

      ctx.fillStyle   = bgClr;
      ctx.strokeStyle = borderClr;
      ctx.lineWidth   = borderW;
      ctx.beginPath();
      ctx.rect(cx + 1, cy, CELL_W - 2, CELL_H);
      ctx.fill();
      ctx.stroke();

      // Cell index
      if (!isPad) {
        ctx.fillStyle = '#ffffff22';
        ctx.font = '8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(String(i), cx + CELL_W/2, cy + 9);
      }

      // Symbol
      if (isWritten) {
        const written = tape[i].written;
        const symClr  = CLR.symbols[written] || CLR.amber;
        ctx.fillStyle   = symClr;
        ctx.shadowColor = symClr;
        ctx.shadowBlur  = 10;
        ctx.font        = 'bold 18px monospace';
        ctx.textAlign   = 'center';
        ctx.fillText(written, cx + CELL_W/2, cy + CELL_H - 8);
        ctx.shadowBlur  = 0;
      } else if (isCurrent) {
        const sym   = cells[i] || 'B';
        const symClr = CLR.symbols[sym] || CLR.amber;
        const blink = 0.4 + 0.6 * Math.abs(Math.sin(t * 4));
        ctx.globalAlpha = blink;
        ctx.fillStyle   = symClr;
        ctx.shadowColor = symClr;
        ctx.shadowBlur  = 16;
        ctx.font        = 'bold 18px monospace';
        ctx.textAlign   = 'center';
        ctx.fillText(sym, cx + CELL_W/2, cy + CELL_H - 8);
        ctx.shadowBlur  = 0;
        ctx.globalAlpha = 1;
      } else if (isFuture) {
        ctx.fillStyle = '#ffffff18';
        ctx.font      = '13px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(cells[i] === 'B' ? '□' : cells[i], cx + CELL_W/2, cy + CELL_H - 8);
      }
    }

    ctx.restore();

    // ── Head cursor arm pointing down from below strip ────────────────────
    const headX  = w/2;
    const armTop = STRIP_Y + REEL_H + 2;
    const armBot = STRIP_Y + REEL_H + 14;
    const bob    = Math.sin(t * 3) * 2;

    // Vertical arm
    ctx.strokeStyle = '#00e5ff';
    ctx.shadowColor = '#00e5ff';
    ctx.shadowBlur  = 10;
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.moveTo(headX, armTop + bob);
    ctx.lineTo(headX, armBot + bob);
    ctx.stroke();
    // Triangle
    ctx.fillStyle = '#00e5ff';
    ctx.beginPath();
    ctx.moveTo(headX,      armBot + bob);
    ctx.lineTo(headX - 7,  armBot - 6 + bob);
    ctx.lineTo(headX + 7,  armBot - 6 + bob);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;

    // HEAD label
    ctx.fillStyle = '#00e5ff88';
    ctx.font      = '9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('HEAD', headX, armBot + 12 + bob);

    // TAPE label top-left
    ctx.fillStyle = '#00e5ff44';
    ctx.font      = '9px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('⊢ TAPE', 8, STRIP_Y + 11);
  }

  // ── State / rule / incoming banner ────────────────────────────────────────
  function _drawStatePanel(ctx, w, h) {
    if (!_c) return;
    const prog   = _c.program;
    const cur    = _c.currentState;
    const step   = _c.headPos;
    const total  = prog.input.length;
    const t      = _c.animTime;
    const panelY = 78;
    const panelX = w / 2;

    // ── Program name ──────────────────────────────────────────────────────
    ctx.save();
    ctx.font        = 'bold 16px monospace';
    ctx.textAlign   = 'center';
    ctx.fillStyle   = '#00e5ff';
    ctx.shadowColor = '#00e5ff';
    ctx.shadowBlur  = 20;
    ctx.fillText(`⊢ TM: ${prog.name}`, panelX, panelY);
    ctx.shadowBlur  = 0;
    ctx.restore();

    // ── Current state pill ────────────────────────────────────────────────
    const stateIsHalt = cur === 'q_accept' || cur === 'q_reject';
    const stateClr    = cur === 'q_accept' ? CLR.correct
                      : cur === 'q_reject'  ? CLR.wrong
                      : '#00e5ff';
    ctx.save();
    ctx.font = 'bold 13px monospace';
    ctx.textAlign = 'center';
    const stateLabel = `q = ${cur}`;
    const pillW = ctx.measureText(stateLabel).width + 24;
    // Pill background
    ctx.fillStyle   = 'rgba(0,20,30,0.85)';
    ctx.strokeStyle = stateClr;
    ctx.lineWidth   = stateIsHalt ? 3 : 1.5;
    ctx.shadowColor = stateClr;
    ctx.shadowBlur  = stateIsHalt ? 20 : 8;
    ctx.beginPath();
    ctx.roundRect(panelX - pillW/2, panelY + 8, pillW, 24, 12);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.fillStyle  = stateClr;
    ctx.fillText(stateLabel, panelX, panelY + 24);
    ctx.restore();

    // ── Last δ-rule ───────────────────────────────────────────────────────
    if (_c.lastCorrectRule) {
      const r = _c.lastCorrectRule;
      ctx.save();
      ctx.font        = '11px monospace';
      ctx.textAlign   = 'center';
      ctx.fillStyle   = '#00e5ff55';
      ctx.fillText(`δ(${r.from}, ${r.read}) = (${r.next}, ${r.write}, ${r.dir})`, panelX, panelY + 42);
      ctx.restore();
    }

    // ── Step counter (top-right) ──────────────────────────────────────────
    ctx.save();
    ctx.font      = '10px monospace';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#00e5ff44';
    ctx.fillText(`STEP ${step} / ${total - 1}`, w - 10, panelY + 10);
    ctx.restore();

    // ── Current-state rule reference (left side) ──────────────────────────
    // Shows only the rules for the CURRENT state. The player must match the read
    // symbol to a row and read its write symbol — that is the reasoning step.
    if (!stateIsHalt) {
      const rules = Object.keys(prog.transitions)
        .filter((k) => k.startsWith(`${cur},`))
        .map((k) => ({ read: k.split(',')[1], r: prog.transitions[k] }));
      const boxX = 12;
      const boxY = panelY + 6;
      const rowH = 16;
      const boxW = 196;
      const boxH = 22 + rules.length * rowH;
      ctx.save();
      ctx.fillStyle   = 'rgba(0,18,28,0.82)';
      ctx.strokeStyle = '#00e5ff44';
      ctx.lineWidth   = 1;
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, boxW, boxH, 6);
      ctx.fill();
      ctx.stroke();
      ctx.textAlign = 'left';
      ctx.fillStyle = '#ffb300';
      ctx.font      = 'bold 9px monospace';
      ctx.fillText(`RULES FOR ${cur}`, boxX + 8, boxY + 14);
      rules.forEach((rr, idx) => {
        const ry = boxY + 28 + idx * rowH;
        ctx.fillStyle = '#7fd4e8';
        ctx.font      = '11px monospace';
        ctx.fillText(`read ${rr.read}  →  write ${rr.r.write}, go ${rr.r.dir}`, boxX + 8, ry);
      });
      ctx.restore();
    }

    // ── INCOMING SYMBOL — big centred banner ─────────────────────────────
    const hasIncoming = _b.getState().items.some((i) => i.type === 'corridorSymbol');
    if (hasIncoming && step < total) {
      const sym     = prog.input[step];
      const symClr  = CLR.symbols[sym] || CLR.amber;
      const blink   = 0.72 + 0.28 * Math.sin(t * 7);
      const bx      = panelX;
      const by      = h * 0.45;

      ctx.save();
      ctx.globalAlpha = blink;
      // Big symbol box
      const boxW = 120; const boxH = 56;
      const grad2 = ctx.createLinearGradient(bx - boxW/2, by - boxH, bx + boxW/2, by + 8);
      grad2.addColorStop(0, 'rgba(0,20,30,0.9)');
      grad2.addColorStop(1, 'rgba(0,10,15,0.7)');
      ctx.fillStyle   = grad2;
      ctx.strokeStyle = symClr;
      ctx.lineWidth   = 2;
      ctx.shadowColor = symClr;
      ctx.shadowBlur  = 20;
      ctx.beginPath();
      ctx.roundRect(bx - boxW/2, by - boxH + 4, boxW, boxH, 8);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle   = symClr;
      ctx.shadowColor = symClr;
      ctx.shadowBlur  = 30;
      ctx.font        = 'bold 32px monospace';
      ctx.textAlign   = 'center';
      ctx.fillText(`[ ${sym} ]`, bx, by);
      ctx.shadowBlur  = 0;

      // Prompt the DECISION — do NOT reveal the lane. Player applies δ themselves.
      ctx.fillStyle = '#ffffffcc';
      ctx.font      = 'bold 11px monospace';
      ctx.fillText(`q=${_c.currentState}  reads  ${sym}   →   WRITE  =  ?`, bx, by + 16);
      ctx.globalAlpha = 1;
      ctx.restore();
    }

    // ── Flash message ─────────────────────────────────────────────────────
    if (_c.flashMsg && _c.flashTimer > 0) {
      const alpha  = Math.min(1, _c.flashTimer);
      const isOk   = _c.flashMsg.startsWith('✓');
      const msgClr = isOk ? CLR.correct : CLR.wrong;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = msgClr;
      ctx.shadowColor = msgClr;
      ctx.shadowBlur  = 18;
      ctx.font        = 'bold 15px monospace';
      ctx.textAlign   = 'center';
      ctx.fillText(_c.flashMsg, panelX, panelY + 64);
      ctx.shadowBlur  = 0;
      ctx.globalAlpha = 1;
      ctx.restore();
    }
  }

  // ── Timer bar ─────────────────────────────────────────────────────────────
  function _drawTimerBar(ctx, w, h) {
    if (!_c) return;
    const ratio   = Math.max(0, 1 - _c.elapsed / TIMEOUT_SEC);
    const barW    = w * 0.58;
    const barH    = 6;
    const barX    = (w - barW) / 2;
    const barY    = h - 22;
    const fillClr = ratio > 0.4 ? '#00e5ff' : (ratio > 0.2 ? '#ff9800' : CLR.wrong);

    // Track
    ctx.fillStyle = 'rgba(0,20,30,0.7)';
    ctx.strokeStyle = '#00e5ff22';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(barX, barY, barW, barH, 3);
    ctx.fill();
    ctx.stroke();

    // Fill
    if (ratio > 0) {
      ctx.fillStyle   = fillClr;
      ctx.shadowColor = fillClr;
      ctx.shadowBlur  = 8;
      ctx.beginPath();
      ctx.roundRect(barX, barY, barW * ratio, barH, 3);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Tick marks
    ctx.strokeStyle = '#ffffff11';
    ctx.lineWidth   = 0.5;
    for (let i = 1; i < 10; i++) {
      const tx = barX + barW * (i / 10);
      ctx.beginPath(); ctx.moveTo(tx, barY); ctx.lineTo(tx, barY + barH); ctx.stroke();
    }

    ctx.fillStyle = ratio > 0.4 ? '#00e5ff88' : (ratio > 0.2 ? '#ff980088' : CLR.wrong + '88');
    ctx.font      = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`TIME  ${Math.ceil(TIMEOUT_SEC - _c.elapsed)}s`, w/2, barY - 5);
  }

  // ── Lane labels at bottom ─────────────────────────────────────────────────
  function _drawLaneLabels(ctx, w, h) {
    const labelY       = h * 0.88;
    const playerLane   = _b.getState()?.player?.lane ?? 4;
    const t            = _c?.animTime ?? 0;

    // Header above the lanes explaining they are WRITE choices
    ctx.save();
    ctx.globalAlpha = 0.6;
    ctx.fillStyle   = '#00e5ff';
    ctx.font        = 'bold 10px monospace';
    ctx.textAlign   = 'center';
    ctx.fillText('↓ STAND IN THE LANE OF THE SYMBOL YOU WRITE ↓', w / 2, labelY - 32);
    ctx.restore();

    CORRIDOR_LANES.forEach((laneIdx, i) => {
      const xNorm    = 0.5 + LANE_OFFSETS[i] * 0.11;
      const xC       = w * xNorm;
      const sym      = LANE_TO_SYM[laneIdx];
      const baseClr  = CLR.symbols[sym] || CLR.amber;
      const isHot    = laneIdx === playerLane;  // highlight where the player stands
      const pulse    = isHot
        ? 0.85 + 0.15 * Math.sin(t * 7)
        : 0.45 + 0.12 * Math.sin(t * 1.8 + i * 2);

      ctx.save();
      ctx.globalAlpha = pulse;

      // Glowing badge box
      const lblW = 52; const lblH = 28;
      ctx.fillStyle   = isHot ? 'rgba(0,20,30,0.9)' : 'rgba(0,0,0,0.6)';
      ctx.strokeStyle = baseClr + (isHot ? 'dd' : '44');
      ctx.lineWidth   = isHot ? 2 : 1;
      ctx.shadowColor = baseClr;
      ctx.shadowBlur  = isHot ? 20 : 6;
      ctx.beginPath();
      ctx.roundRect(xC - lblW/2, labelY - 20, lblW, lblH, 6);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle   = baseClr;
      ctx.shadowColor = baseClr;
      ctx.shadowBlur  = isHot ? 16 : 4;
      ctx.font        = `bold ${isHot ? 18 : 15}px monospace`;
      ctx.textAlign   = 'center';
      ctx.fillText(sym === 'B' ? 'B' : sym, xC, labelY - 2);
      ctx.shadowBlur  = 0;

      // small “WRITE” caption
      ctx.globalAlpha = pulse * 0.7;
      ctx.fillStyle = baseClr;
      ctx.font      = 'bold 8px monospace';
      ctx.fillText('WRITE', xC, labelY + 12);

      ctx.globalAlpha = 1;
      ctx.restore();
    });
  }

  // ── Error indicators ──────────────────────────────────────────────────────
  function _drawWrongReadIndicators(ctx, w, h) {
    if (!_c) return;
    const total  = MAX_WRONG_READS;
    const sz     = 11;
    const startX = 14;
    const y      = h - 20;
    const t      = _c.animTime;

    ctx.save();
    ctx.font      = '9px monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ff174488';
    ctx.fillText('MISS', startX, y - 5);

    for (let i = 0; i < total; i++) {
      const x    = startX + i * (sz + 8) + 44;
      const used = i < _c.wrongReads;
      const pulse = used ? 0.6 + 0.4 * Math.abs(Math.sin(t * 5 + i)) : 1;
      ctx.strokeStyle = used ? CLR.wrong : '#ffffff22';
      ctx.fillStyle   = used ? CLR.wrong + '99' : 'transparent';
      ctx.lineWidth   = used ? 2 : 1;
      ctx.shadowColor = used ? CLR.wrong : 'transparent';
      ctx.shadowBlur  = used ? 10 * pulse : 0;
      ctx.beginPath();
      // X shape for used, circle for remaining
      if (used) {
        ctx.arc(x, y, sz/2, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.font      = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('✕', x, y + 3);
        ctx.textAlign = 'left';
      } else {
        ctx.arc(x, y, sz/2, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
    }
    ctx.restore();
  }

  // ── Per-symbol falling tile ───────────────────────────────────────────────
  function drawSymbol(item, ctx, x, y) {
    if (!_c) return;
    const t      = _c.animTime;
    const sym    = item.corridorSymbol;
    const colour = CLR.symbols[sym] || CLR.amber;
    const pulse  = 0.5 + 0.5 * Math.sin(t * 5);
    const depth  = Math.max(0, Math.min(1, 1 - item.z));
    const scale  = 0.45 + depth * 1.05;   // 0.45x far → 1.5x close

    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    // Motion trail — a comet streak back toward the portal (upward), growing as
    // the symbol rushes out of the corridor depth toward the player.
    const trailLen = 60 + depth * 120;
    const trail = ctx.createLinearGradient(0, 0, 0, -trailLen);
    trail.addColorStop(0,   colour + Math.round((0.35 + depth * 0.4) * 255).toString(16).padStart(2, '0'));
    trail.addColorStop(1,   colour + '00');
    ctx.fillStyle = trail;
    ctx.beginPath();
    ctx.moveTo(-10 - depth * 6, 0);
    ctx.lineTo(10 + depth * 6, 0);
    ctx.lineTo(2, -trailLen);
    ctx.lineTo(-2, -trailLen);
    ctx.closePath();
    ctx.fill();

    // Outer glow halo
    const ring = 36 + pulse * 8;
    const halo = ctx.createRadialGradient(0, 0, ring * 0.2, 0, 0, ring);
    halo.addColorStop(0, colour + '55');
    halo.addColorStop(0.6, colour + '22');
    halo.addColorStop(1,   colour + '00');
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(0, 0, ring, 0, Math.PI * 2); ctx.fill();

    // Sci-fi hex-ish cell
    const sz = 28;
    // Corner clips = octagon feel
    ctx.fillStyle   = 'rgba(0,10,20,0.92)';
    ctx.strokeStyle = colour;
    ctx.lineWidth   = 2.5;
    ctx.shadowColor = colour;
    ctx.shadowBlur  = 14 + pulse * 10;
    ctx.beginPath();
    ctx.moveTo(-sz + 8, -sz);
    ctx.lineTo( sz - 8, -sz);
    ctx.lineTo( sz,     -sz + 8);
    ctx.lineTo( sz,      sz - 8);
    ctx.lineTo( sz - 8,  sz);
    ctx.lineTo(-sz + 8,  sz);
    ctx.lineTo(-sz,      sz - 8);
    ctx.lineTo(-sz,     -sz + 8);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Inner corner accent lines
    ctx.strokeStyle = colour + '66';
    ctx.lineWidth   = 1;
    const cs = 8; // corner size
    [[-sz,-sz],[sz,-sz],[sz,sz],[-sz,sz]].forEach(([cx2,cy2]) => {
      const dx = cx2 < 0 ? 1 : -1;
      const dy = cy2 < 0 ? 1 : -1;
      ctx.beginPath();
      ctx.moveTo(cx2 + dx*cs, cy2);
      ctx.lineTo(cx2, cy2);
      ctx.lineTo(cx2, cy2 + dy*cs);
      ctx.stroke();
    });

    // Top scan-line
    ctx.strokeStyle = colour + '44';
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.moveTo(-sz + 6, -sz + 7); ctx.lineTo(sz - 6, -sz + 7);
    ctx.stroke();

    // Symbol character
    ctx.fillStyle   = colour;
    ctx.shadowColor = colour;
    ctx.shadowBlur  = 18 + pulse * 10;
    ctx.font        = 'bold 26px monospace';
    ctx.textAlign   = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(sym, 0, 1);
    ctx.shadowBlur  = 0;
    ctx.textBaseline = 'alphabetic';

    // "READ" badge above the tile — this is the INPUT symbol, not a destination.
    // The player must apply δ(state, read) to decide which WRITE lane to run to.
    ctx.fillStyle   = colour + 'cc';
    ctx.shadowColor = colour;
    ctx.shadowBlur  = 6;
    ctx.font        = `bold ${Math.round(11 * scale)}px monospace`;
    ctx.fillText('READ', 0, -sz - 10);
    ctx.shadowBlur  = 0;

    ctx.restore();
  }

  // ── Alan Turing — the corridor traveller ────────────────────────────────────
  // A small animated 1940s scholar who runs the machine. He only appears inside
  // corridors: the story is Turing himself stepping through each logic gate,
  // bypassing the corridors one transition at a time.
  function drawCharacter(w, h) {
    if (!isActive() || !_c) return;
    const ctx   = _b.getCtx();
    const state = _b.getState();
    const lane  = state.player?.lane ?? 4;

    const x = w * _b.getTrackXNorm(_b.laneToXNorm(lane), 0.96);
    const jump = state.player?.jump ?? 0;
    const jumpOffset = jump > 0 ? Math.sin((1 - jump) * Math.PI) * 46 : 0;
    const yFeet = h * 0.72 - jumpOffset;

    const t      = _c.animTime;
    const stride = Math.sin(t * 11);        // leg / arm swing
    const bob    = Math.abs(Math.sin(t * 11)) * 2.5;
    const skin   = '#e9c9a8';
    const coat   = '#16323f';
    const coatLt = '#1f4a5c';
    const cyan    = '#00e5ff';

    ctx.save();
    ctx.translate(x, yFeet - bob);

    // Ground glow / shadow
    ctx.save();
    ctx.globalAlpha = 0.5;
    const grd = ctx.createRadialGradient(0, 6, 2, 0, 6, 26);
    grd.addColorStop(0, cyan + '55');
    grd.addColorStop(1, cyan + '00');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.ellipse(0, 8 + bob, 22, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Faint data aura
    ctx.save();
    ctx.globalAlpha = 0.18 + 0.06 * Math.sin(t * 4);
    const aura = ctx.createRadialGradient(0, -22, 4, 0, -22, 36);
    aura.addColorStop(0, cyan + '66');
    aura.addColorStop(1, cyan + '00');
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(0, -22, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // ── Legs (trousers) ──
    ctx.strokeStyle = '#0e2630';
    ctx.lineCap     = 'round';
    ctx.lineWidth   = 5;
    const hipY = -16;
    // back leg
    ctx.beginPath();
    ctx.moveTo(0, hipY);
    ctx.lineTo(-stride * 7, 4);
    ctx.stroke();
    // front leg
    ctx.beginPath();
    ctx.moveTo(0, hipY);
    ctx.lineTo(stride * 7, 4);
    ctx.stroke();
    // shoes
    ctx.fillStyle = '#0a1a22';
    ctx.beginPath(); ctx.ellipse(-stride * 7, 5, 4, 2.2, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse( stride * 7, 5, 4, 2.2, 0, 0, Math.PI * 2); ctx.fill();

    // ── Torso / tweed coat ──
    ctx.fillStyle = coat;
    ctx.strokeStyle = coatLt;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(-9, -34, 18, 20, 4);
    ctx.fill();
    ctx.stroke();
    // coat lapel highlight
    ctx.strokeStyle = coatLt;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, -33);
    ctx.lineTo(0, -16);
    ctx.stroke();
    // collar / tie
    ctx.fillStyle = cyan;
    ctx.beginPath();
    ctx.moveTo(0, -33);
    ctx.lineTo(-2.4, -29);
    ctx.lineTo(0, -22);
    ctx.lineTo(2.4, -29);
    ctx.closePath();
    ctx.fill();

    // ── Arms (swing opposite the legs) ──
    ctx.strokeStyle = coat;
    ctx.lineWidth = 4.5;
    const shY = -31;
    ctx.beginPath();
    ctx.moveTo(-7, shY);
    ctx.lineTo(-7 - stride * 5, shY + 13);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(7, shY);
    ctx.lineTo(7 + stride * 5, shY + 13);
    ctx.stroke();
    // hands
    ctx.fillStyle = skin;
    ctx.beginPath(); ctx.arc(-7 - stride * 5, shY + 13, 2.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc( 7 + stride * 5, shY + 13, 2.2, 0, Math.PI * 2); ctx.fill();

    // ── Head ──
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(0, -42, 6.5, 0, Math.PI * 2);
    ctx.fill();
    // hair (side-parted, dark)
    ctx.fillStyle = '#3a2a1d';
    ctx.beginPath();
    ctx.arc(0, -44, 6.6, Math.PI * 1.04, Math.PI * 2.02);
    ctx.lineTo(6, -42);
    ctx.lineTo(-6.4, -42);
    ctx.closePath();
    ctx.fill();
    // glasses
    ctx.strokeStyle = '#10222b';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(-2.4, -42, 1.8, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc( 2.4, -42, 1.8, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-0.6, -42); ctx.lineTo(0.6, -42); ctx.stroke();
    // subtle smile
    ctx.strokeStyle = '#9a6b4f';
    ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.arc(0, -39.5, 2, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke();

    ctx.restore();
  }

  // ── Export ────────────────────────────────────────────────────────────────
  globalThis.DawnDashersCorridor = {
    init,
    isActive,
    reset,
    tryActivate,
    startAfterBriefing,
    update,
    drawBackground,
    drawForeground,
    drawSymbol,
    drawCharacter,
    handleSymbolCollected,
    getCorridorLaneBounds,
    getCorridorLanes,
  };
})();
