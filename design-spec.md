# Dawn Dashers Design Spec (Current)

This document reflects the active codebase.

## Runtime Platform

- Primary runtime: Browser JavaScript
- Rendering: Three.js + Canvas/HUD layers
- Local hosting: Docker + Nginx (`docker compose up --build`)
- No Unity runtime in active project
- No backend API dependency in active project

## Core Experience

- Fast lane-runner movement
- June Solstice mood: long night shifting toward dawn
- Australian terrain identities (Outback, Bushland, Servo, Coastline, Tasmania)
- Puzzle interruptions that feel like discoveries on route, not detached quiz screens

## Puzzle Architecture

Per level, puzzle pools are fixed and role-specific:

- `heartPuzzles` (8): used for revive challenges
- `levelPuzzles` (8): used for standard progression/next-level gating
- `treasurePuzzles` (7): used for chest encounters

Each puzzle object includes `seen` state. Seen IDs are persisted in localStorage and pooled selection auto-resets after full exhaustion.

## Narrative Tone Requirements

- Adventurous, optimistic, mysterious
- Australian setting details in every puzzle
- Include either June Solstice motifs or computing/Turing motifs in every puzzle
- Avoid repetitive narrative templates and stock phrases

## UI/UX Rules

- Puzzle modal shows one primary instruction block (no duplicate question text)
- Secondary brief panel is context only
- Next-level puzzles should not display `(x/20)` style counters
- Hint copy should guide without revealing direct answers

## Content Constraints

- Preserve puzzle logic, answers, acceptedAnswers, and learnUrl values unless explicitly requested
- Narrative rewrites affect only text fields: title, instruction, hints, rightExplain, wrongExplain

## Technical Constraints

- Keep docs and prompts aligned with actual runtime (`web/`)
- Remove or archive references to obsolete Unity/backend flows

* Dense forest trails
* Fireflies and glow insects
* Hidden ruins
* Natural obstacles and roots

---

## Servo (Hub Area)

* Warm roadside diner lighting
* Dusty service station aesthetic
* Friendly NPC explorers
* Map tables and clue boards

---

## Coastline Lighthouse

* Windy cliffs
* Crashing waves
* Weathered lighthouse
* Seagulls and driftwood

---

## Tasmania (Final Zone)

* Cold misty mountains
* Aurora Australis skies
* Ancient signal tower ruins
* Magical light reveal moments

---

# VFX Direction

Core Effects:

* Dust trails
* Sand particles
* Ember sparks
* Golden light shards
* Heat haze in desert

Collectibles:

Sun Fragments:

* Floating golden relic shards
* Pulsing glow
* Light trails on pickup

Movement:

* Sprint dust bursts
* Jump arc streaks
* Landing impact rings

---

# Audio Direction

Music Style:

* Adventure orchestral percussion
* Subtle Australian tonal textures
* Cinematic expedition energy

Sound Effects:

* Artifact chimes
* Sand crunch footsteps
* Wind gusts
* Comedic animal sounds (light touch)

---

# Turing Inspired Mechanics

The Turing Engine appears as an ancient logic system controlling darkness.

Mechanics should be visual and fast:

Examples:

* Pattern completion
* Binary switches
* Signal routing
* Light circuit alignment

Rules:

* Max 15–30 seconds per challenge
* Never stop forward momentum for long
* Always feel like gameplay, not a quiz

---

# Gameplay Feel Rules

* Always forward motion
* Always readable at speed
* Always something happening every few seconds
* Always clear reward feedback

---

# Performance Requirements

* 60 FPS target
* WebGL optimized
* Low draw calls
* Lightweight assets
* Fast initial load

---

# Success Criteria

Within 30 seconds:

* Player is running
* Player collects something
* Player experiences movement and feedback

Within 5 minutes:

* Player unlocks an animal
* Player solves a treasure clue
* Player collects a Sun Fragment

Within 15 minutes:

* Player restores all fragments
* Player defeats the Turing Engine
* Sunrise returns over Australia

---

# Final Design Goal

The game should feel like:

> A cinematic Australian treasure-run adventure where movement, discovery, and light restoration drive constant excitement.

Fun first. Always.
