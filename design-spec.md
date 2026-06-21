# Dawn Dashers Design Spec (Current)

This document reflects the active runtime and data flow in the current web codebase.

## Runtime Platform

- Primary runtime: Browser JavaScript
- Rendering: Three.js scene + Canvas/HUD overlays
- Local hosting: Docker + Nginx (`docker compose up --build`)
- No Unity runtime in active project
- No backend API dependency in active project

## Core Experience

- Fast lane-runner movement with constant forward pressure
- June Solstice mood: long night shifting toward dawn
- Australian biome identity with clear regional visual signatures
- Puzzle interruptions framed as in-world discoveries, not detached quiz screens

## Current Region Progression

1. Outback Ruins
2. Bushland
3. Servo
4. Coastline Lighthouse
5. Mangroves
6. Blue Mountains
7. Nullarbor
8. Observatory
9. Tasmania

## Puzzle Architecture (Current)

Questions are no longer stored in many per-level files.

Current source files:

- `web/puzzles/questions-easy.js`
- `web/puzzles/questions-medium.js`
- `web/puzzles/questions-hard.js`

Each question object includes:

- `id`: globally unique numeric ID (`1..115`)
- `difficulty`: `easy`, `medium`, `hard`
- `type`: one of `heartPuzzles`, `levelPuzzles`, `treasurePuzzles`
- `seen`: runtime seen state

`web/puzzle-data.js` builds runtime pools from those files and keeps role separation:

- `heartPuzzles`: revive challenges
- `levelPuzzles`: next-level unlock/progression challenges
- `treasurePuzzles`: treasure chest challenges

Seen IDs are persisted in localStorage and unseen-first selection is enforced. A pool resets only when fully exhausted.

## Difficulty Scaling Rules

Level-to-difficulty mapping is currently defined in `web/puzzle-data.js`:

- Levels 1-2: easy
- Levels 3-4: medium
- Levels 5-9: hard

Design intent:

- Difficulty increases level-wise
- Any level still prefers unseen questions from its mapped difficulty tier
- Role pools remain distinct while sharing one global question catalog

## Progression and Transition Behavior

Level-clear flow:

- Player clears level objective
- Unlock puzzle is solved
- Congratulatory popup appears
- On timer expiry or Continue, run advances directly to next level

Expected behavior:

- Player should not be bounced back to landing/character flow during this transition
- Next run starts with keep-progress semantics

## Narrative Tone Requirements

- Adventurous, optimistic, mysterious
- Australian setting details in puzzle text
- Include either June Solstice motifs or computing/Turing motifs in each puzzle
- Avoid repetitive template phrasing

## Puzzle Copy Rules

- Puzzle modal should present one primary instruction block
- Secondary brief panel should remain contextual, not duplicate full prompt
- Hint copy should guide without revealing full answers
- Preserve logic fields unless explicitly requested:
  - `answer`
  - `acceptedAnswers`
  - `learnUrl`

## Biome Art Direction

### Outback Ruins

- Heat haze and open red-earth distance
- Sparse hardy vegetation
- Ancient marker ruins and relay traces

### Bushland

- Dense trail vegetation
- Fireflies and glow insects
- Roots, natural obstacles, hidden ruins

### Servo (Hub Area)

- Warm roadside diner lighting
- Dusty service station aesthetic
- Friendly explorer camp details
- Map boards and clue surfaces

### Coastline Lighthouse

- Windy cliffs and wave energy
- Weathered lighthouse materials
- Driftwood, seabird silhouettes, salt haze

### Mangroves

- Dense tree population and canopy layering
- Rooted waterline silhouettes
- Organic haze/reflection (avoid synthetic line-grid look)

### Blue Mountains

- Layered mountain silhouettes
- Mist/fog depth with natural movement
- Cliff and ridgeline contrast

### Nullarbor

- Flat expansive limestone/desert read
- Long-horizon tension
- Sparse structure silhouettes

### Observatory

- Night-sky technical atmosphere
- Signal beams and celestial instrumentation accents

### Tasmania (Final Zone)

- Cold misty mountains
- Aurora Australis skies
- Ancient signal tower ruins
- Magical light reveal moments

## VFX Direction

Core effects:

- Dust trails
- Sand particles
- Ember sparks
- Golden light shards
- Heat haze in desert

Collectibles (Sun Fragments):

- Floating relic shard form
- Pulsing glow
- Pickup light streaks

Movement readability:

- Sprint dust bursts
- Jump arc streaks
- Landing impact rings

## Audio Direction

Music:

- Adventure orchestral-percussion base
- Subtle Australian tonal texture
- Cinematic expedition momentum

SFX:

- Artifact chimes
- Sand/crunch foot layers
- Wind gust beds
- Light-touch comedic animal accents

## Turing-Inspired Mechanics

The Turing Engine is framed as an ancient logic system controlling darkness.

Puzzle mechanics should be visual and fast:

- Pattern completion
- Binary switches
- Signal routing
- Light circuit alignment

Rules:

- 15-30 seconds target per challenge
- Do not stall forward momentum for long
- Should feel like gameplay, not detached exam screens

## TM Corridors — "Turing's Run" (Bonus Mode)

Three times per run (progress levels 2, 4, 7) the runner gives way to a standalone bonus mode where
the player physically operates a small Turing machine. Implemented in `web/corridor.js` (logic +
renderer) and `web/corridor-programs.js` (the three machine definitions).

Narrative framing:

- Told as three chapters of **Alan Turing bypassing three sealed gates** ("Corridor I/II/III of III").
- Each gate is a deterministic Turing machine: Bit Flipper, Parity Checker, Even-Length Protocol.
- An animated Alan Turing sprite is the running read/write head.

Core mechanic (the reasoning loop):

- A symbol streaks out of a vanishing-point portal down the centre — that is what the head READS.
- Three lanes represent the symbol to WRITE (`0` left · `B` middle · `1` right).
- The player reads δ(state, read) from an on-screen rule table, then runs to the WRITE lane before
  the symbol lands. Looking up and applying the rule IS the gameplay — no answer is highlighted.

Isolation requirements:

- Corridor is a separate FSM state (`q_corridor`); the level game must not render underneath.
- Score/heart HUD is hidden; Three.js terrain is gated off; only the corridor renderer runs.
- Any open popup pauses the corridor (universal pause), same as the level game.

Visual direction:

- Sci-fi tunnel in one-point perspective (ceiling/floor/two walls converging on a glowing portal).
- Scrolling depth seams, ceiling light bars, neon corner edge beams, runway chevrons.
- Falling symbols carry a comet motion-trail back toward the portal.

Scoring (deferred, pure bonus):

- Correct steps are tracked live but do not change the score mid-corridor.
- On exit: `correctSteps × 100`, plus `+750` if the machine accepts.
- Three wrong reads → reject, but earned step points still pay out. No heart penalty, ever.

## Gameplay Feel Rules

- Always forward motion
- Always readable at speed
- Always meaningful events every few seconds
- Always clear reward feedback

## Performance Requirements

- 60 FPS target
- WebGL optimized
- Low draw-call pressure
- Lightweight assets
- Fast initial load

## Success Criteria

Within 30 seconds:

- Player is running
- Player collects something
- Player experiences immediate movement feedback

Within 5 minutes:

- Player unlocks an animal
- Player solves at least one treasure clue
- Player collects a Sun Fragment

Within 15 minutes:

- Player restores all fragments
- Player defeats the Turing Engine
- Sunrise returns over Australia

## Final Design Goal

A cinematic Australian treasure-run adventure where movement, discovery, and light restoration drive constant excitement.

Fun first. Always.
