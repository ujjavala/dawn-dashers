# Dawn Dashers

Browser-first runner + puzzle adventure inspired by the June Solstice.

![Dawn Dashers Gameplay](web/dawn-dashers.gif)

## Current Stack

- Runtime: JavaScript in [web/game.js](web/game.js)
- Rendering: Three.js world + Canvas/HUD overlays
- Terrain and biome styling: [web/terrain-styles.js](web/terrain-styles.js)
- Character config: [web/character-config.js](web/character-config.js)
- Puzzle tracking/filter helpers: [web/puzzle-tracker.js](web/puzzle-tracker.js), [web/puzzle-filter.js](web/puzzle-filter.js)
- Local hosting: Docker + Nginx via [docker-compose.yml](docker-compose.yml)

## Puzzle System (Current)

Puzzle content is now grouped by difficulty in three files:

- [web/puzzles/questions-easy.js](web/puzzles/questions-easy.js)
- [web/puzzles/questions-medium.js](web/puzzles/questions-medium.js)
- [web/puzzles/questions-hard.js](web/puzzles/questions-hard.js)

Each question includes:

- `id`: globally unique numeric ID (1..115)
- `difficulty`: `easy`, `medium`, or `hard`
- `type`: `heartPuzzles`, `levelPuzzles`, or `treasurePuzzles`
- `seen`: runtime flag persisted via localStorage

Puzzle orchestration is handled in [web/puzzle-data.js](web/puzzle-data.js):

- Builds role-specific flat arrays (`heartPuzzles`, `levelPuzzles`, `treasurePuzzles`)
- Builds per-level pools from a level-to-difficulty map
- Picks unseen puzzles first
- Auto-resets pool seen flags only after full pool exhaustion

Current difficulty progression by level index:

- Levels 0-1: easy
- Levels 2-3: medium
- Levels 4-8: hard

## Level-Complete Flow

After a level unlock puzzle is solved:

- Congratulatory overlay appears
- On timeout or Continue, the game advances directly into the next level run
- Character selection is not forced in this transition path

## World Biomes

Current region set in runtime:

- Outback Ruins
- Bushland
- Servo
- Coastline Lighthouse
- Mangroves
- Blue Mountains
- Nullarbor
- Observatory
- Tasmania

## Local Development

1. Run: `docker compose up --build`
2. Open: `http://localhost:8080`

Compose currently runs a static `web` service only.

## Controls

- Move lanes: `A/D` or `Left/Right`
- Jump: `W`, `Up`, or `Space`
- Slide: `S`, `Down`
- Pause/Resume: `P` or `Escape`

## Notes

- Visual effects degrade gracefully if advanced rendering features are unavailable.
- Audio starts after first user interaction to satisfy autoplay policies.