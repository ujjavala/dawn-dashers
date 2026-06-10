# Dawn Dashers

Unity WebGL + Mobile adventure runner for the DEV June Solstice Game Jam.

## Current Status

This repository includes a production-style gameplay framework with:

- Core game flow (menu -> character select -> exploration -> puzzles -> boss -> victory)
- Character abilities and role profiles (fast vs slow dashers)
- Sun Fragment progression and region unlock logic
- Five puzzle archetypes inspired by Turing-style logic
- Boss phase controller for Turing Engine fight
- HUD, map, upgrade, and victory UI controllers
- Mobile-safe responsive UI helpers
- Audio and VFX event pipeline for game-feel polish
- API client integration for dialogue, puzzle hints, and road events
- Docker Compose stack for local web + backend runtime
- Standalone mobile deployment folders and build scripts for Android/iOS

## Web Runtime Update (Latest)

The current browser build in `web/` now includes a visual/audio realism pass on top of the existing gameplay loop:

- Three.js 3D terrain pass behind gameplay HUD/entities
- Dynamic terrain deformation with lighting, fog, and biome-tinted materials
- Noise-driven procedural ground texturing for each biome
- Screensaver-style dynamic background motion (heat shimmer, layered dunes, drifting haze, parallax silhouettes)
- Added terrain micro-details per biome (bush underbrush, branches, pollen motes, surf foam, pebbles, alpine ridges, snow drifts)
- Bushland realism pass: irregular tree silhouettes, layered canopy depth, volumetric haze/god-rays, and organic forest-floor clutter
- WebAudio ambient soundtrack with biome-aware tone shaping
- Centered end-of-run result card (Game Over / Run Ended / Restart prompt) for clearer UX
- Super Mode (admin toggle): unlock all characters/terrains immediately via character selection
- Simplified core loop option: shard pickups and bomb hazards with explicit score popups (+500 / -100)
- Per-level character pairing: each level offers exactly 2 choices (1 fast, 1 slow)
- Expanded roster in web runtime: Emu, Wombat, Kangaroo, Koala, Possum, Echidna, Dingo, Bilby, Kookaburra, Quokka
- Energy and food economy:
   - Every lane move, jump, and slide consumes energy
   - Movement is blocked when energy is insufficient
   - Food is purchased using score and auto-consumed to restore energy when needed
   - Food type/cost/restore values are character-specific
- Fast vs slow behavior tuning:
   - Fast dashers can navigate full lane width but consume more energy
   - Slow dashers are lane-restricted but consume less energy and need cheaper food
- Character selection UI overhaul:
   - Terrain-tinted selection title
   - Visual FAST/SLOW role badges on cards
   - Structured spec card for each character (power, food, costs, energy rates, lane profile, level scale)
- Gameplay controls UI refresh:
   - Compact icon controls instead of text-heavy dock buttons
   - Food cart remains an icon action in the right-side dock
   - Main run controls moved to a right-side vertical rail similar to the heart rail
   - Single media-style play/pause control that changes icon by run state
- Mobile controls and HUD pass:
   - Region and Mode HUD chips removed from the web runtime to reduce clutter
   - Mobile HUD now uses denser chip sizing and spacing on narrow screens
   - During active runs on mobile, the full control dock auto-hides and a single quick-menu button is shown
   - Tapping the quick-menu button pauses the run and reveals the full dock controls
   - Swipe thresholds are reduced and short taps now map to jump/slide for better Android responsiveness
- Pause behavior update:
   - Pausing freezes movement and falling items
   - Food shopping and puzzle interactions remain usable while paused
- Food shop update:
   - Cart-based purchasing flow instead of one-click buy
   - Character-specific food icons and special buff foods
   - Special foods can temporarily reduce fast-character energy use or give slow characters wider lane access
- Puzzle content refresh:
   - Puzzle bank rewritten with an Australian setting/tone while preserving Alan Turing/computation themes
   - Puzzle pools and hint strictness now scale with level/character tier
- Finale update:
   - Expedition completion now ends with a full-page smiling sunrise celebration screen
- Landing Help modal now fully wired and interactive from menu
- Runtime SFX for jump, hit, and collectible feedback
- Broader terrain realism pass:
   - Outback: fence posts, station remnants, tank/sign silhouettes, sand motion
   - Bushland: logs, stumps, stones, drifting leaves/pollen
   - Servo: towers, cabling, service pipes, data rain/glitch motion
   - Coastline: jetty, fishing boats, palms, shoreline realism, rain/surf foam
   - Tasmania: pines, cabin, frozen patches, snow drift motion
- Settings panel controls for:
   - Difficulty (Easy/Medium/Hard)
   - 3D Terrain Pass (On/Off)
   - Music (On/Off)
   - Music volume
   - SFX volume

Notes:

- 3D terrain gracefully falls back to the 2D terrain renderer if WebGL/Three.js is unavailable.
- Audio starts after user interaction to comply with browser autoplay policies.

## One-Command Local Stack (Web + API)

Run from repository root:

1. `docker compose up --build`
2. Open `http://localhost:8080` for the playable browser demo.
3. API endpoints are available at `http://localhost:8000` and proxied at `http://localhost:8080/api`.

Included services:

- `api`: FastAPI service (`/health`, `/dialogue`, `/hint`, `/road-event`)
- `web`: Nginx static host and API reverse proxy

Files:

- `docker-compose.yml`
- `backend/Dockerfile`
- `backend/app/main.py`
- `web/nginx.conf`

## Requirements

- Unity 6 (recommended: 6000.0.40f1)
- Universal Render Pipeline (URP)
- TextMeshPro package
- Input System package (already included in manifest)

## Open the Project

1. Open Unity Hub.
2. Add project from disk: this repository root.
3. Open with Unity 6.
4. Let Unity import packages and compile scripts.

## Scene Setup (One-time)

Create these scenes under Assets/Scenes:

- MainMenu
- CharacterSelect
- OutbackRunner
- ServoCheckpoint
- AuroraFlight
- TuringBoss
- Victory

In each gameplay scene, add these foundational objects:

- GameBootstrap (attach GameManager, ObjectiveSystem, PlatformBootstrap, AudioDirector)
- UI Canvas (attach ResponsiveSafeArea on root safe-area panel)
- Player (tag Player, attach PlayerCharacterController + ability components)
- Directional Light (used by DaylightSystem)

Recommended UI wiring:

- HUD text labels -> HUDController (Score, Health, Lantern, Fragments, Objective, Ability Cooldown)
- Character select buttons -> CharacterSelectController.SelectCharacter(characterId)
- Start button -> CharacterSelectController.StartAdventure
- Region travel buttons -> RegionMapController.TravelToRegion(regionId, sceneName)

API/UI wiring:

- Add `ApiServiceClient` in scene and assign `ApiConfig` ScriptableObject.
- Wire NPC dialogue button -> `NpcDialoguePanelController.RequestDialogue(region)`.
- Wire hint button -> `PuzzleHintPanelController.RequestHint(puzzleType)`.
- Wire road event button -> `RoadEventPanelController.RollRoadEvent()`.
- Add `ApiStatusIndicator` with TMP label for runtime health state.

Optional tooling helper:

- Run Unity menu command `Tools > Dawn Dashers > Generate Jam Content` to create scenes, character assets, and starter prefabs.

## Controls

Desktop/Web:

- Move lanes: A/D or Left/Right
- Jump: W, Up, or Space
- Slide: S or Down
- Pause/Resume: P or Escape
- Open food cart: F

Mobile:

- On-screen controls use icon-only actions and compact HUD chips for smaller displays
- During active runs, controls collapse into a single quick-menu button
- Quick-menu button pauses to reveal full controls, then switches to resume action while paused
- Swipe and tap gestures are tuned for responsive Android play

## Run in Editor

1. Open MainMenu scene.
2. Press Play.
3. Verify flow: Menu -> CharacterSelect -> OutbackRunner.

## Build for WebGL

1. File -> Build Profiles.
2. Select Web.
3. Platform: WebGL.
4. Add all scenes in the intended order.
5. Player Settings recommendations:
   - Color Space: Linear
   - Compression Format: Brotli
   - Texture Compression: ASTC/ETC2 fallback as needed
   - Managed Stripping Level: Medium
6. Build to Build/WebGL.

Deploy options:

- itch.io: upload Build/WebGL folder (or zipped output)
- GitHub Pages: host generated WebGL build via static site workflow

## Web Demo for Laptop Testing

- `docker compose up --build`
- Open `http://localhost:8080`
- This is a browser-playable Dawn Dashers runner for quick desktop testing.

## Build for Android

1. Install Android Build Support in Unity Hub.
2. File -> Build Profiles -> Android.
3. Player Settings:
   - Scripting Backend: IL2CPP
   - ARM64 enabled
   - Target API level per current Play requirements
4. Build APK/AAB.

Recommended mobile deploy folder:

- `deploy/android/`

Build options:

- Unity menu: `Tools > Dawn Dashers > Build Android`
- Output APK is designed to run standalone on the phone with offline fallback content.

## Build for iOS

1. Install iOS Build Support in Unity Hub.
2. File -> Build Profiles -> iOS.
3. Player Settings:
   - Scripting Backend: IL2CPP
   - Target minimum iOS version for your test devices
4. Build Xcode project.
5. Open in Xcode, set signing team, archive, and deploy.

Recommended mobile deploy folder:

- `deploy/ios/`

Build options:

- Unity menu: `Tools > Dawn Dashers > Build iOS`
- Output Xcode project is designed to run standalone on the phone with offline fallback content.

## Responsive + Performance Notes

- ResponsiveSafeArea prevents notches/cutouts overlap on mobile.
- TouchControlsVisibility toggles touch UI root based on platform.
- PlatformBootstrap sets target frame rate and disables vSync for WebGL/mobile consistency.
- Keep atlases compressed and avoid large uncompressed textures for WebGL memory safety.

## Optional Backend / AI Integration

The game runs fully without backend services and degrades gracefully when API is offline.

Optional MCP/Gemini integration can be added for:

- Dynamic NPC dialogue
- Dynamic clue generation
- Puzzle hints

Keep AI features optional and non-blocking for core gameplay.

## Mobile + Web Responsiveness

- `ResponsiveSafeArea` applies notch-safe anchors on iOS/Android.
- `TouchControlsVisibility` toggles touch input UI on mobile.
- `PlatformBootstrap` sets frame targets for WebGL and mobile.
- `ApiConfig` supports separate base URLs for editor vs WebGL/mobile proxy mode.
- Android and iOS installs use offline local content automatically so the app stays self-sufficient on device.
- For mobile installs, use Unity-built APK/Xcode output; Expo is not used because this is a Unity project.

## Suggested Next Production Steps

- Create low-poly prefab kit (player, enemies, region modules).
- Connect Animator controllers for run/jump/hit/celebrate loops.
- Author audio clips and assign AudioCueLibrary.
- Add a CI pipeline for WebGL builds and smoke tests.
