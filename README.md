# Dawn Dashers

Browser-first runner + puzzle adventure inspired by Alan Turing and the June Solstice.

![Dawn Dashers Gameplay](web/dawn-dashers.gif)

---

## The Alan Turing Connection

Dawn Dashers is a love letter to Alan Turing — the mathematician, codebreaker, and father of
theoretical computer science who was born on 23 June 1912.

### Why Turing?

Alan Turing spent his life asking one question: *can a machine think?*
He answered it by inventing the theoretical model we now call the **Turing Machine** — a
deceptively simple device that reads symbols from a tape, transitions between states, and
writes new symbols back. Every computer program ever written is, at its heart, a Turing Machine.

Turing also broke the Enigma cipher at Bletchley Park, saving an estimated 14 million lives.
He later proposed the **Turing Test** — the idea that intelligence should be judged by behaviour,
not biology. For this work he was prosecuted and chemically castrated by the British government
for being gay. He died in 1954 at age 41. He was pardoned posthumously in 2013.

Dawn Dashers honours him through gameplay, narrative, and engineering:

### In the puzzles

Every in-game challenge is a **Turing-style codebreaking puzzle** — the kind of lateral, symbolic
reasoning that Turing and his team used at Bletchley Park. Puzzles involve ciphers, logic gates,
prime numbers, finite-state sketches, and pattern recognition. Each puzzle links to a Wikipedia
article so players can follow the rabbit hole.

The puzzle IDs use a naming convention (`l1_tp01`, `l2_hp01`, …) that mirrors how Bletchley
catalogued intercepts — level, type, sequence.

### In the characters

The 27 playable dashers are all Australian animals  and each character's **power** and **quirk** are inspired by
concepts from Turing's work:

- *Emu* — relentless forward motion (Turing's unstoppable curiosity)
- *Wombat* — burrow-dodge (evasion, steganography)
- *Echidna* — spiny defence (cryptographic hardening)
- *Cassowary* — apex predator speed (Colossus, the world's first electronic computer)

The "special" dashers can only be unlocked by solving enough treasure puzzles — a direct nod to
the idea that Turing's deeper insights were hidden behind layers of prior work.

### In the world

The nine biomes map a spiritual journey from Turing's birthplace to his vindication:

| Biome | Turing parallel |
|---|---|
| Outback Ruins | Raw wilderness — pre-war mathematics |
| Bushland | Dense complexity — Bletchley Park |
| Servo | Industrial machinery — the Bombe |
| Coastline Lighthouse | Signal and noise — Shannon's information theory |
| Mangroves | Hidden paths — steganography and hidden messages |
| Blue Mountains | High altitude thinking — abstract computation |
| Nullarbor | The long plain — the grinding post-war prosecution |
| Observatory | Looking outward — morphogenesis and artificial life |
| Tasmania | Sanctuary — posthumous pardon and legacy |

### In the engine

The game's lifecycle is modelled as a **real Turing Machine** (see *Architecture* below).
States are labelled `q_*`, input symbols `σ_*`, and every transition is written to a **tape**
with a head that advances `R`, stays `S`, or — on a level abort — rewinds `L`.
This isn't just a metaphor: the implementation is a literal δ(q, σ) → (q′, dir) transition table.

---

## Architecture

### Module map

| File | Purpose |
|---|---|
| [web/game.js](web/game.js) | Main game loop, rendering, input, run logic |
| [web/game-state.js](web/game-state.js) | **Turing Machine** state engine (see below) |
| [web/game-ui.js](web/game-ui.js) | All UI helpers — modals, HUD, overlays, chrome |
| [web/character-config.js](web/character-config.js) | Character definitions, food, visual presets, region map |
| [web/puzzle-tracker.js](web/puzzle-tracker.js) | Seen-puzzle tracking + `DawnDashersPuzzleUtils` (signature dedup, pool resolution) |
| [web/puzzle-filter.js](web/puzzle-filter.js) | Query helpers over `DawnDashersPuzzleData` |
| [web/puzzle-data.js](web/puzzle-data.js) | Puzzle pool assembly and unseen-picker |
| [web/terrain-styles.js](web/terrain-styles.js) | Biome palettes and track profiles |
| [web/game-data.js](web/game-data.js) | Base region, level-transition message data |
| [web/game-settings.js](web/game-settings.js) | Tunable difficulty / spawn / visual constants |

Rendering: Three.js 3D terrain + Canvas 2D HUD overlays.  
Local hosting: Docker + Nginx via [docker-compose.yml](docker-compose.yml).

---

## Turing Machine State Engine

`game-state.js` models the game lifecycle as a **deterministic Turing Machine**:

```
Q  — machine states      (q_* identifiers)
Σ  — input alphabet      (σ_* event symbols)
δ  — transition table    δ(q, σ) → (q′, dir)
q₀ — initial state       q_land  (landing screen)
HALT-ACCEPT              q_accept  (expedition complete)
HALT-REJECT              q_reject  (game over)
```

Each `sendFlow(event)` call reads one symbol σ, looks up δ(q, σ), writes a
timestamped cell to the **tape**, moves the head (R / L / S), and updates
derived boolean flags (`state.running`, `state.paused`, etc.).

### State register Q

| State | q identifier | Meaning |
|---|---|---|
| Landing screen | `q_land` | Pre-game, no run active |
| Character select | `q_select` | Dasher picker open |
| Running | `q_run` | Active expedition |
| Paused (manual) | `q_pause` | Player pressed pause |
| Paused (popup) | `q_popup` | Settings / history modal open |
| Paused (hunger) | `q_hunger` | Food depleted |
| Puzzle | `q_puzzle` | Puzzle modal open (level, treasure, heart-revive) |
| Level transition | `q_level_end` | Level-clear overlay showing |
| HALT-REJECT | `q_reject` | Game over |
| HALT-ACCEPT | `q_accept` | Final level complete |

### Input alphabet Σ (event symbols)

`σ_land`, `σ_select`, `σ_start`, `σ_manual`, `σ_hunger`, `σ_fed`,
`σ_popup_open`, `σ_popup_close`, `σ_puzzle_open`, `σ_puzzle_close`,
`σ_level_clear`, `σ_level_abort`, `σ_level_set`, `σ_reject`, `σ_accept`

### Tape

Every transition is written as a cell `{ symbol, from, to, dir, payload, ts }`.
The tape rolls at 256 cells. `σ_level_abort` is the only **L** (left) move —
the machine rewinds its narrative when a level transition is aborted.

`getTape()` and `getHead()` are exposed on the runtime for debugging.

---

## Puzzle System

Puzzle content lives in three difficulty files:

- [web/puzzles/questions-easy.js](web/puzzles/questions-easy.js)
- [web/puzzles/questions-medium.js](web/puzzles/questions-medium.js)
- [web/puzzles/questions-hard.js](web/puzzles/questions-hard.js)

Each puzzle has: `id` (unique string like `l1_tp01` or legacy numeric), `difficulty`, `type` (`heartPuzzles` / `levelPuzzles` / `treasurePuzzles`).

### De-duplication

Seen state is **session-scoped** (`sessionStorage`) — clears on page refresh so old IDs never pollute a new run. Cross-pool dedup is enforced via content signatures: if puzzle `17` appears in both `treasurePuzzles` and `levelPuzzles`, showing it in one pool marks it seen in both.

### Difficulty progression by level

| Levels | Difficulty |
|---|---|
| 0 – 1 | easy |
| 2 – 3 | medium |
| 4 – 8 | hard |

---

## World Biomes

| Index | Region |
|---|---|
| 0 | Outback Ruins |
| 1 | Bushland |
| 2 | Servo |
| 3 | Coastline Lighthouse |
| 4 | Mangroves |
| 5 | Blue Mountains |
| 6 | Nullarbor |
| 7 | Observatory |
| 8 | Tasmania |

---

## Local Development

```bash
docker compose up --build
# Open http://localhost:8080
```

## Controls

| Action | Keys |
|---|---|
| Move lanes | `A` / `D` · `← →` |
| Jump | `W` · `↑` · `Space` |
| Slide | `S` · `↓` |
| Pause / Resume | `P` · `Escape` |

## Notes

- Visual effects degrade gracefully if Three.js or advanced rendering features are unavailable.
- Audio starts after first user interaction to satisfy browser autoplay policies.