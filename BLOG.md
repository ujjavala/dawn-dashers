*This is a submission for the [June Solstice Game Jam](https://dev.to/challenges/june-game-jam-2026-06-03)*

## What I Built

I built **_Dawn Dashers_**, a fast-paced 3D treasure-run adventure set during the **June Solstice — the longest night of the year in Australia**.

On this night, daylight should be at its weakest… but something is wrong.

A rogue machine known as the **Turing Engine** has stolen the sunrise and scattered seven **Sun Fragments** across Australia, trapping the world in an unnatural extended night.

The game takes place during the solstice’s critical turning point. As players progress, the world shifts from deep darkness toward the first signs of returning dawn. The player’s journey actively pushes the world back toward light.

At its core, *Dawn Dashers* is a hybrid of:

- Temple Run-style endless running  
- Crash Bandicoot-inspired arcade platforming  
- Treasure hunt exploration  
- Two challenge layers inspired by Alan Turing: fast **Chosen Trials** during runs and medium **Tests of the Chosen One** for level unlocks  

The goal was simple: **make something instantly fun, readable, and playable within seconds**, while grounding it in the emotional arc of the solstice — the shift from longest night back toward sunrise.

---

## June Solstice Mechanic (Core Theme Integration)

The June Solstice is not just background — it is the **core world system**.

### Core Idea

The entire game exists inside the longest night of the year.

As the player progresses, the solstice shifts:

- Deep night → unstable darkness  
- Mid progression → twilight instability  
- Late game → early dawn emergence  
- Final boss → full sunrise restoration  

The player is not just completing levels — they are actively changing the state of the world from solstice night back into daylight.

---

### Solstice Light Cycle System

The world has a hidden “Light Cycle” that evolves based on progression:

- Early game → near-total darkness, limited visibility  
- Mid game → aurora activity begins, clues become visible  
- Late game → horizon glow appears, environments warm up  
- Final stage → sunrise fully breaks through  

This creates a visible emotional progression tied directly to the theme of the solstice.

---

### Gameplay Impact

The solstice state directly affects gameplay:

- Lighting and visibility of obstacles  
- Enemy aggression (stronger during peak darkness)  
- Treasure clue readability  
- Music intensity and rhythm  
- Environmental effects like aurora and dust storms  

---

### Narrative Meaning

The Turing Engine believes:

> “The solstice proves darkness is the most stable state of existence.”

The player proves otherwise by restoring movement, light, and change through action.

---

## Video Demo

🎥 *Demo video coming soon — showcasing gameplay across Outback Ruins, Servo checkpoints, Lighthouse Coast, and the final Aurora Australis sequence.*

The demo includes:

- Full gameplay loop (run → dodge → collect → solve → upgrade)  
- Treasure clue discovery  
- Quick Chosen Trial interactions (3 solved trials = +1 heart)  
- Medium Tests of the Chosen One that gate level progression after collecting all 7 shards  
- Sun Fragment recovery system  
- World transitioning from night → dawn  
- Final sunrise restoration moment  

---

## Code

GitHub Repository:  
👉 *(replace with your repo link)*

Core systems include:

- Unity 6 (URP) WebGL project  
- Player runner controller system  
- Region-based level progression system  
- Treasure clue system (environmental + NPC-driven)  
- Two-tier challenge framework (Chosen Trials for survival rewards + Chosen One Tests for level unlock)  
- Score + combo system  
- Solstice light cycle system (world state progression)  
- Game state machine (menu → play → pause → victory)  

Architecture is built around:

> A continuous forward-motion runner layered with modular “adventure events” and a global solstice world state system.

---

## How I Built It

The game was built in **Unity 6 using C# and URP**, with a focus on fast iteration, readability, and modular systems.

---

### 1. Core Gameplay First

Everything started with a simple loop:

> Run → Dodge → Collect → Prove Worth → Survive

Once that felt responsive and fun, everything else was layered on top:
- treasure clues  
- fragments  
- Chosen Trials (quick skill checks for run rewards)  
- Tests of the Chosen One (medium logic gates for level progression)  
- animal abilities  
- world state (solstice cycle)  

This ensured the game always stayed a *game first*, not a system simulation.

---

### 2. Australia as a Treasure Adventure Track

Instead of a generic endless runner, the game is structured as a cinematic journey across Australia:

- **Outback Ruins** — desert traversal and solar relics  
- **Bushland** — hidden paths and platforming  
- **Servo** — logic relay pressure and dusty machine checkpoints  
- **Coastline Lighthouse** — wind, rain energy, and beacon-route deciphering  
- **Tasmania** — final aurora-lit region  

Each region introduces new mechanics while maintaining constant forward motion.

Character roster currently used in-game:

- **Elder Emu** (Dust Sprint)  
- **Digger Wombat** (Burrow Dodge)  
- **Red Kangaroo** (Sky Hop)  
- **River Koala** (Grip Glide)  
- **Lantern Possum** (Night Glide)  
- **Spike Echidna** (Quill Barrier)  
- **Coastal Dingo** (Tide Dash)  
- **Desert Bilby** (Tunnel Pace)  
- **Aurora Kookaburra** (Light Call)  
- **Summit Quokka** (Calm Climb)  

Latest character-system pass in the web runtime:

- Every level now presents exactly **2 dasher options**:
	- one **FAST** option (full-width movement, higher energy burn)
	- one **SLOW** option (restricted lane window, lower energy burn)
- Characters scale by progression tier so later-level options feel stronger while preserving role identity.
- Character profiles now include explicit per-action energy rates and food economy stats.
- Super/admin character selection now also syncs the effective gameplay tier/level so choosing a late-game dasher plays like that level immediately.

---

### 3. Treasure Clues + Chosen Trials + Chosen One Tests

To connect with Alan Turing’s legacy without slowing the action, I split logic content into two layers:

- **Chosen Trials (in-run):** short challenges tied to survival. Solving **3 trials grants +1 heart**, so puzzle skill directly supports combat/endurance.
- **Tests of the Chosen One (progression gates):** medium-difficulty ciphers/logic tests (Vigenere shifts, halting-loop reasoning, Enigma constraints, binary arithmetic, state transitions, frequency logic) that appear after all 7 shards are collected and must be solved to unlock the next level.

This keeps momentum high during the run while making level progression feel earned.

Latest puzzle-content refinement:

- Every logic/puzzle prompt now carries a clear Australian twist while preserving Alan Turing themes.
- Examples now reference outback radios, bush telegraph clues, Bondi/Bush/Tasman/Servo settings, and Australian field gear.
- Puzzle pools and hint strictness now scale by level, so later terrain tiers feel more demanding.

---

### 4. Score + Progression System

To maintain arcade energy:

- Real-time score system  
- Combo multipliers for continuous movement  
- Fragment-based progression system  
- Level unlocks gated by solving a Test of the Chosen One after shard completion  
- Heart carry-over between levels so rewards from trials remain meaningful  
- Dynamic difficulty scaling (higher level = faster lane/object movement; low shard state = higher pressure)  
- Strong visual feedback (glow bursts, UI pops, screen shake)  

Recent economy + control tuning:

- Energy now depletes on **every movement action** (lane shift, jump, slide).
- If energy runs out, movement halts until food is available.
- Food is bought using score and consumed automatically when required.
- Food is character-specific (different cost/restore), reinforcing fast-vs-slow strategy choices.
- Food buying now uses a dedicated cart/shop flow with character-specific food icons and special buff foods.
- Pausing the run now freezes falling items and movement while still allowing shop and puzzle interactions.

Each Sun Fragment recovered visibly restores light to the world, reinforcing the solstice transformation.

---

### 5. Art Direction

The game adopts an **Indiana Jones-style treasure expedition aesthetic** rather than neon sci-fi.

Visual direction includes:

- Dusty deserts and warm earth tones  
- Ancient ruins and relics  
- Golden god rays and cinematic lighting  
- Parchment-style UI  
- Firelight and ember effects  
- Terrain-specific motion quirks (e.g., visible Outback dust sweep and particle drift, coast rain energy, aurora-driven final atmosphere)  

As the solstice progresses, the world naturally transitions from darkness into sunrise.

Latest visual upgrade applied in the playable web build:

- Procedural biome texture synthesis (noise-driven terrain materials)
- Optional Three.js 3D terrain pass with real lights/fog/shadows under gameplay
- Servo-specific industrial styling with digital skyline, glitch accents, and neon traces
- Outback cinematic motion pass (heat haze, layered dune flow, dynamic dust sheets, parallax mesas)
- Extra biome detail pass (bush undergrowth/branches/pollen, coast foam+pebbles+dune grass, tasmania ridges+snow-drift layers)
- Bushland overhaul: replaced repetitive tree circles with layered canopy silhouettes, depth haze, light shafts, and natural debris scatter
- Reduced "road" look in favor of open terrain surfaces
- End-state UX polish: centered game-over/results card now combines narrative line + run-ended/restart guidance
- Victory finale pass: expedition completion now fills the screen with a bright smiling sunrise celebration
- Temporary Super Mode added for admin playtesting: all character locks bypassed so any terrain can be entered by selecting its mapped dasher
- Simplified run loop pass for readability: shard and bomb focus with direct score feedback (+500 shard, -100 bomb hit)
- Character select UX upgrade: terrain-themed title bar, explicit FAST/SLOW role badges, and a structured spec-card layout for character stats
- Gameplay control refresh: icon-based controls, HUD cart icon, and right-side vertical control rail instead of a bottom-heavy dock
- Terrain realism pass expanded across all major biomes with more grounded scene props and moving ambient elements:
	- Outback: posts, station remnants, tanks, signs, drifting sand
	- Bushland: logs, stumps, rocks, leaves, pollen
	- Servo: masts, cables, barrels, pipes, glitch/data motion
	- Coastline: jetty, fishing boats, palms, surf/rain layers
	- Tasmania: pines, cabin silhouettes, frozen ground patches, snow drift motion

Latest audio upgrade:

- Adaptive ambient music generated at runtime using WebAudio
- Biome-reactive tonal shifts (dunes/forest/coast/servo/mountains)
- SFX feedback layer for movement, hits, and collectible moments
- User controls for music on/off, music volume, and SFX volume

---

### 6. Tech Stack

- Unity 6 (URP)  
- C#  
- WebGL build target  
- Browser runtime prototype: HTML5 Canvas + JavaScript + Three.js + NoiseJS + WebAudio API
- GitHub Copilot (agent-assisted development)  
- Optional MCP + Gemini integration for dynamic content generation  
- Deployment via itch.io / GitHub Pages  

---

### 7. Game Feel Philosophy

A core rule throughout development:

> If the player is not running, collecting, or reacting within a few seconds, something is wrong.

Everything is tuned for:
- speed  
- clarity  
- responsiveness  
- constant feedback  

---

## Prize Category

### 🧠 Best Ode to Alan Turing

The **Turing Engine** represents a corrupted logic system that interprets the solstice incorrectly:

> “The longest night proves darkness is the optimal state.”

Players defeat it using computational thinking-inspired mechanics:
- pattern recognition  
- binary logic  
- cryptographic reasoning (including Enigma-style constraints and Vigenere-style shifts)  
- state-machine / halting-style logic checks  

This directly connects gameplay to Alan Turing’s legacy in computation and symbolic reasoning.

---

## Closing Thoughts

*Dawn Dashers* is built around one idea:

> The June Solstice is not just a moment of darkness — it is the turning point where light returns.

The game transforms that idea into a fast, cinematic Australian treasure-run where movement, discovery, and progression actively bring the sunrise back.

Thanks for playing!

