
// @ts-nocheck

  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  const threeRoot = document.getElementById('threeRoot');
  const scoreEl = document.getElementById('score');
  const energyEl = document.getElementById('energy');
  const foodEl = document.getElementById('food');
  const livesEl = document.getElementById('lives');
  const fragmentEl = document.getElementById('fragments');
  const objectiveEl = document.getElementById('objective');
  const messageEl = document.getElementById('message');
  const startBtn = document.getElementById('startBtn');
  const roadEventBtn = document.getElementById('roadEventBtn');
  const hintBtn = document.getElementById('hintBtn');
  const reviveBtn = document.getElementById('reviveBtn');
  const buyFoodBtn = document.getElementById('buyFoodBtn');
  const hudEl = document.querySelector('.hud');
  const missionEl = document.querySelector('.mission');
  const dockEl = document.querySelector('.dock');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');
  const landingOverlay = document.getElementById('landingOverlay');
  const playNowBtn = document.getElementById('playNowBtn');
  const landingSettingsBtn = document.getElementById('landingSettingsBtn');
  const pastGamesBtn = document.getElementById('pastGamesBtn');
  const landingHelpBtn = document.getElementById('landingHelpBtn');
  const levelCompleteOverlay = document.getElementById('levelCompleteOverlay');
  const lcEmoji = document.getElementById('lcEmoji');
  const lcCongrats = document.getElementById('lcCongrats');
  const lcTeaser = document.getElementById('lcTeaser');
  const lcBonus = document.getElementById('lcBonus');
  const lcContinueBtn = document.getElementById('lcContinueBtn');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  const superModeRow = document.getElementById('superModeRow');
  const superModeSelect = document.getElementById('superModeSelect');
  const difficultySelect = document.getElementById('difficultySelect');
  const terrain3dSelect = document.getElementById('terrain3dSelect');
  const musicToggleSelect = document.getElementById('musicToggleSelect');
  const musicVolumeRange = document.getElementById('musicVolumeRange');
  const sfxVolumeRange = document.getElementById('sfxVolumeRange');
  const pastGamesModal = document.getElementById('pastGamesModal');
  const closePastGamesBtn = document.getElementById('closePastGamesBtn');
  const pastGamesList = document.getElementById('pastGamesList');
  const helpModal = document.getElementById('helpModal');
  const closeHelpBtn = document.getElementById('closeHelpBtn');
  const walkthroughModal = document.getElementById('walkthroughModal');
  const walkthroughTitle = document.getElementById('walkthroughTitle');
  const walkthroughText = document.getElementById('walkthroughText');
  const walkthroughVisual = document.getElementById('walkthroughVisual');
  const walkthroughStep = document.getElementById('walkthroughStep');
  const walkthroughNextBtn = document.getElementById('walkthroughNextBtn');
  const walkthroughBeginBtn = document.getElementById('walkthroughBeginBtn');
  const walkthroughSkipBtn = document.getElementById('walkthroughSkipBtn');
  const characterPanel = document.getElementById('characterPanel');
  const characterTitleEl = document.querySelector('.character-title');
  const characterPower = document.getElementById('characterPower');
  const characterBackBtn = document.getElementById('characterBackBtn');
  const characterStartBtn = document.getElementById('characterStartBtn');
  const characterButtons = Array.from(document.querySelectorAll('.character-btn'));
  const clueModal = document.getElementById('clueModal');
  const puzzleModal = document.getElementById('puzzleModal');
  const closeClueBtn = document.getElementById('closeClueBtn');
  const closePuzzleBtn = document.getElementById('closePuzzleBtn');
  const puzzleTopHintBtn = document.getElementById('puzzleTopHintBtn');
  const clueTerrain = document.getElementById('clueTerrain');
  const puzzleTerrain = document.getElementById('puzzleTerrain');
  const puzzleTitle = document.getElementById('puzzleTitle');
  const puzzleInstruction = document.getElementById('puzzleInstruction');
  const puzzleQuestion = document.getElementById('puzzleQuestion');
  const puzzleAnswerInput = document.getElementById('puzzleAnswerInput');
  const puzzleCheckBtn = document.getElementById('puzzleCheckBtn');
  const puzzleStatus = document.getElementById('puzzleStatus');
  const puzzleLearnLink = document.getElementById('puzzleLearnLink');
  const clueText = document.getElementById('clueText');
  const clueSolveBtn = document.getElementById('clueSolveBtn');
  const clueHintBtn = document.getElementById('clueHintBtn');
  const puzzleSubmitBtn = document.getElementById('puzzleSubmitBtn');
  const puzzleHintBtn = document.getElementById('puzzleHintBtn');
  const puzzleSkipBtn = document.getElementById('puzzleSkipBtn');
  const foodShopModal = document.getElementById('foodShopModal');
  const closeFoodShopBtn = document.getElementById('closeFoodShopBtn');
  const foodShopList = document.getElementById('foodShopList');
  const foodCartSummary = document.getElementById('foodCartSummary');
  const foodCheckoutBtn = document.getElementById('foodCheckoutBtn');
  const clearFoodCartBtn = document.getElementById('clearFoodCartBtn');
  const hungerModal = document.getElementById('hungerModal');
  const closeHungerBtn = document.getElementById('closeHungerBtn');
  const hungerText = document.getElementById('hungerText');
  const hungerOpenShopBtn = document.getElementById('hungerOpenShopBtn');
  const RUNS_KEY = 'dawn_dashers_runs_v1';
  const WALKTHROUGH_KEY = 'dawn_dashers_walkthrough_seen';
  const DIFFICULTY_KEY = 'dawn_dashers_difficulty_v1';
  const SUPER_MODE_KEY = 'dawn_dashers_super_mode_v1';
  const MUSIC_ENABLED_KEY = 'dawn_dashers_music_enabled_v1';
  const MUSIC_VOLUME_KEY = 'dawn_dashers_music_volume_v1';
  const SFX_VOLUME_KEY = 'dawn_dashers_sfx_volume_v1';
  const TERRAIN_3D_KEY = 'dawn_dashers_terrain_3d_v1';
  const PUZZLE_BANK_UNLOCKS_KEY = 'dawn_dashers_puzzle_bank_unlocks_v1';
  const HUNGER_MODAL_RESURFACE_DELAY_MS = 5000;
  const gameSettings = globalThis.DawnDashersGameSettings || {};
  const curvatureSettings = gameSettings.curvature || {};
  const fallingObjectSettings = gameSettings.fallingObjects || {};
  const visualSettings = gameSettings.visuals || {};
  const pathGuideSettings = visualSettings.pathGuides || {};
  const difficultyMultipliers = {
    easy: Number.isFinite(gameSettings?.difficultyMultipliers?.easy) ? gameSettings.difficultyMultipliers.easy : 0.75,
    medium: Number.isFinite(gameSettings?.difficultyMultipliers?.medium) ? gameSettings.difficultyMultipliers.medium : 1,
    hard: Number.isFinite(gameSettings?.difficultyMultipliers?.hard) ? gameSettings.difficultyMultipliers.hard : 1.35
  };
  let gameDifficulty = localStorage.getItem(DIFFICULTY_KEY) || 'medium';
  if (!difficultyMultipliers[gameDifficulty]) {
    gameDifficulty = 'medium';
  }
  const appConfig = globalThis.DawnDashersAppConfig || {};
  const isLocalHost = ['localhost', '127.0.0.1', '::1'].includes(globalThis.location?.hostname || '');
  const superModeAllowed = (() => {
    const raw = appConfig.enableSuperMode;
    const flagEnabled = raw === true || raw === 'true' || raw === 1 || raw === '1' || raw === 'on';
    return isLocalHost && flagEnabled;
  })();
  let superModeEnabled = superModeAllowed && localStorage.getItem(SUPER_MODE_KEY) === 'on';
  if (!superModeAllowed) {
    localStorage.setItem(SUPER_MODE_KEY, 'off');
    superModeEnabled = false;
  }
  let musicEnabled = localStorage.getItem(MUSIC_ENABLED_KEY) !== 'off';
  let musicVolume = Number.parseFloat(localStorage.getItem(MUSIC_VOLUME_KEY) || '0.7');
  let sfxVolume = Number.parseFloat(localStorage.getItem(SFX_VOLUME_KEY) || '0.75');
  let terrain3dEnabled = localStorage.getItem(TERRAIN_3D_KEY) !== 'off';
  musicVolume = Number.isFinite(musicVolume) ? Math.max(0, Math.min(1, musicVolume)) : 0.7;
  sfxVolume = Number.isFinite(sfxVolume) ? Math.max(0, Math.min(1, sfxVolume)) : 0.75;
  const terrainTextureCache = new Map();
  const hasPerlinNoise = globalThis.noise !== undefined && typeof globalThis.noise.perlin2 === 'function';
  if (hasPerlinNoise) {
    globalThis.noise.seed(0.417);
  }
  const hasThree = globalThis.THREE !== undefined;
  const threeState = {
    ready: false,
    renderer: null,
    scene: null,
    camera: null,
    ambient: null,
    terrain: null,
    terrainGeo: null,
    terrainBase: null,
    sun: null,
    sky: null,
    t: 0,
    baseCamX: 0,
    baseCamY: 11.8,
    baseCamZ: 17.2,
    lookX: 0,
    lookY: 0,
    lookZ: -7,
    terrainType: null
  };
  const audioState = {
    ctx: null,
    master: null,
    music: null,
    sfx: null,
    padA: null,
    padB: null,
    pulse: null,
    pulseGain: null,
    started: false
  };

  function terrainTheme(terrain) {
    if (terrain === 'dunes') {
      return {
        base: 0xb47a4d,
        emissive: 0x3c2411,
        fog: 0x5f3a23,
        sky: 0x28170f,
        amp: 2.9,
        freq: 0.18,
        speed: 0.23,
        fogNear: 14,
        fogFar: 52,
        gradeTop: [242, 176, 108],
        gradeBottom: [76, 43, 25],
        gradeStrength: 0.26,
        sunIntensity: 1.22,
        ambientIntensity: 0.52
      };
    }
    if (terrain === 'forest') {
      return {
        base: 0x4b6a3d,
        emissive: 0x132014,
        fog: 0x1f3022,
        sky: 0x111c16,
        amp: 2.2,
        freq: 0.22,
        speed: 0.18,
        fogNear: 13,
        fogFar: 48,
        gradeTop: [148, 188, 126],
        gradeBottom: [31, 52, 34],
        gradeStrength: 0.22,
        sunIntensity: 1.02,
        ambientIntensity: 0.58
      };
    }
    if (terrain === 'beach') {
      return {
        base: 0x7693a0,
        emissive: 0x132633,
        fog: 0x29485f,
        sky: 0x132d40,
        amp: 1.7,
        freq: 0.16,
        speed: 0.31,
        fogNear: 15,
        fogFar: 56,
        gradeTop: [150, 198, 224],
        gradeBottom: [42, 78, 108],
        gradeStrength: 0.2,
        sunIntensity: 1.08,
        ambientIntensity: 0.62
      };
    }
    if (terrain === 'industrial') {
      return {
        base: 0x355579,
        emissive: 0x04111c,
        fog: 0x0b1f34,
        sky: 0x0a1426,
        amp: 1.4,
        freq: 0.27,
        speed: 0.37,
        fogNear: 16,
        fogFar: 62,
        gradeTop: [96, 170, 224],
        gradeBottom: [8, 19, 35],
        gradeStrength: 0.24,
        sunIntensity: 1.1,
        ambientIntensity: 0.48
      };
    }
    return {
      base: 0x6f7e9f,
      emissive: 0x0f1422,
      fog: 0x1a2439,
      sky: 0x101728,
      amp: 2.8,
      freq: 0.19,
      speed: 0.16,
      fogNear: 12,
      fogFar: 46,
      gradeTop: [176, 198, 230],
      gradeBottom: [32, 45, 72],
      gradeStrength: 0.23,
      sunIntensity: 1.16,
      ambientIntensity: 0.56
    };
  }

  function terrainTrackProfile(terrain) {
    if (terrain === 'dunes') {
      return { bendAmp: 0.058, bendFreq: 0.62, wiggleAmp: 0.012, wiggleFreq: 1.6, corridorWidth: 3.4, corridorDepth: 1.55, ridgeRamp: 0.13, waveAmp: 0.3, waveFreq: 0.2, curveAmp: 1.35, curveFreq: 0.18 };
    }
    if (terrain === 'forest') {
      return { bendAmp: 0.048, bendFreq: 0.74, wiggleAmp: 0.016, wiggleFreq: 1.9, corridorWidth: 3.15, corridorDepth: 1.35, ridgeRamp: 0.1, waveAmp: 0.26, waveFreq: 0.24, curveAmp: 1.1, curveFreq: 0.22 };
    }
    if (terrain === 'beach') {
      return { bendAmp: 0.064, bendFreq: 0.58, wiggleAmp: 0.022, wiggleFreq: 2.2, corridorWidth: 3.75, corridorDepth: 0.9, ridgeRamp: 0.07, waveAmp: 0.34, waveFreq: 0.26, curveAmp: 1.55, curveFreq: 0.16 };
    }
    if (terrain === 'industrial') {
      return { bendAmp: 0.04, bendFreq: 0.88, wiggleAmp: 0.01, wiggleFreq: 2.7, corridorWidth: 2.95, corridorDepth: 1.15, ridgeRamp: 0.09, waveAmp: 0.2, waveFreq: 0.28, curveAmp: 0.78, curveFreq: 0.25 };
    }
    return { bendAmp: 0.045, bendFreq: 0.65, wiggleAmp: 0.014, wiggleFreq: 1.8, corridorWidth: 3.05, corridorDepth: 1.2, ridgeRamp: 0.11, waveAmp: 0.24, waveFreq: 0.21, curveAmp: 1.15, curveFreq: 0.2 };
  }

  // ─── Three.js scene props registry ──────────────────────────────────────────
  // Each region populates threeState.props (array of THREE.Object3D)
  // so they can be cleared when switching regions.

  function clearThreeProps() {
    if (!threeState.scene || !threeState.props) return;
    threeState.props.forEach(p => threeState.scene.remove(p));
    threeState.props = [];
  }

  function makeMesh(geo, mat) {
    const m = new globalThis.THREE.Mesh(geo, mat);
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
  }

  function addProp(obj) {
    threeState.scene.add(obj);
    threeState.props.push(obj);
  }

  // Build a simple palm tree group
  function buildPalmTree(x, z, h) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    // Trunk
    const trunk = makeMesh(
      new THREE.CylinderGeometry(0.12, 0.22, h, 6),
      new THREE.MeshStandardMaterial({ color: 0x7a5030, roughness: 0.9 })
    );
    trunk.position.set(0, h * 0.5, 0);
    grp.add(trunk);
    // Fronds
    const frondMat = new THREE.MeshStandardMaterial({ color: 0x4a8830, roughness: 0.8, side: THREE.DoubleSide });
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const frond = makeMesh(new THREE.ConeGeometry(0.1, 1.4, 4), frondMat);
      frond.position.set(Math.cos(angle) * 0.7, h + 0.2, Math.sin(angle) * 0.7);
      frond.rotation.set(-0.6, angle, 0);
      grp.add(frond);
    }
    grp.position.set(x, 0, z);
    return grp;
  }

  // Build a eucalyptus / gum tree
  function buildGumTree(x, z, h) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const trunk = makeMesh(
      new THREE.CylinderGeometry(0.1, 0.2, h, 5),
      new THREE.MeshStandardMaterial({ color: 0x9a8060, roughness: 0.95 })
    );
    trunk.position.set(0, h * 0.5, 0);
    grp.add(trunk);
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0x6a9a4a, roughness: 0.85, transparent: true, opacity: 0.92 });
    for (let i = 0; i < 3; i++) {
      const blob = makeMesh(new THREE.SphereGeometry(0.55 + i * 0.15, 7, 5), canopyMat);
      blob.position.set((i - 1) * 0.5, h + 0.3 + i * 0.2, (i % 2 === 0 ? 0.3 : -0.2));
      grp.add(blob);
    }
    grp.position.set(x, 0, z);
    return grp;
  }

  // Build a sandstone mesa / rock
  function buildMesa(x, z, w2, h) {
    const THREE = globalThis.THREE;
    const mat = new THREE.MeshStandardMaterial({ color: 0xb46838, roughness: 1.0, metalness: 0 });
    const base = makeMesh(new THREE.BoxGeometry(w2, h * 0.7, w2 * 0.7), mat);
    base.position.set(x, h * 0.35, z);
    const cap = makeMesh(new THREE.BoxGeometry(w2 * 0.75, h * 0.32, w2 * 0.55), mat);
    cap.position.set(x + w2 * 0.05, h * 0.86, z);
    const grp = new THREE.Group();
    grp.add(base, cap);
    return grp;
  }

  // Build an iceberg / snow rock
  function buildSnowRock(x, z, r) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const rock = makeMesh(
      new THREE.DodecahedronGeometry(r, 0),
      new THREE.MeshStandardMaterial({ color: 0x8899bb, roughness: 0.9 })
    );
    rock.position.set(x, r * 0.4, z);
    const snow = makeMesh(
      new THREE.SphereGeometry(r * 0.6, 6, 5),
      new THREE.MeshStandardMaterial({ color: 0xe8f4ff, roughness: 0.7 })
    );
    snow.position.set(x, r * 1.1, z);
    grp.add(rock, snow);
    return grp;
  }

  // Build a servo pylon / antenna mast
  function buildPylon(x, z, h) {
    const THREE = globalThis.THREE;
    const mat = new THREE.MeshStandardMaterial({ color: 0x4070a0, roughness: 0.5, metalness: 0.6 });
    const grp = new THREE.Group();
    const shaft = makeMesh(new THREE.CylinderGeometry(0.08, 0.14, h, 4), mat);
    shaft.position.set(x, h * 0.5, z);
    const ring1 = makeMesh(new THREE.TorusGeometry(0.28, 0.04, 6, 12), mat);
    ring1.position.set(x, h * 0.55, z);
    ring1.rotation.x = Math.PI / 2;
    const ring2 = makeMesh(new THREE.TorusGeometry(0.18, 0.03, 6, 10), mat);
    ring2.position.set(x, h * 0.82, z);
    ring2.rotation.x = Math.PI / 2;
    grp.add(shaft, ring1, ring2);
    return grp;
  }

  // Build a simple boat hull
  function buildBoat(x, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const hull = makeMesh(
      new THREE.BoxGeometry(1.8, 0.4, 0.7),
      new THREE.MeshStandardMaterial({ color: 0x6a4828, roughness: 0.85 })
    );
    hull.position.set(x, -0.2, z);
    const mast = makeMesh(
      new THREE.CylinderGeometry(0.04, 0.04, 1.6, 4),
      new THREE.MeshStandardMaterial({ color: 0x9a7850, roughness: 0.9 })
    );
    mast.position.set(x, 0.8, z);
    const sail = makeMesh(
      new THREE.ConeGeometry(0.55, 1.1, 3),
      new THREE.MeshStandardMaterial({ color: 0xf0e8d0, roughness: 0.8, side: THREE.DoubleSide })
    );
    sail.position.set(x + 0.25, 1.0, z);
    sail.rotation.set(0, 0, 0.35);
    grp.add(hull, mast, sail);
    return grp;
  }

  // Build a realistic lighthouse
  function buildLighthouse(x, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    // Tower base (white cylinder)
    const tower = makeMesh(
      new THREE.CylinderGeometry(0.28, 0.32, 3.8, 12),
      new THREE.MeshStandardMaterial({ color: 0xf5f5f0, roughness: 0.75, metalness: 0.1 })
    );
    tower.position.set(x, 1.9, z);
    grp.add(tower);
    // Red stripe around middle
    const stripe = makeMesh(
      new THREE.CylinderGeometry(0.30, 0.30, 0.6, 12),
      new THREE.MeshStandardMaterial({ color: 0xc83a2a, roughness: 0.7 })
    );
    stripe.position.set(x, 2.0, z);
    grp.add(stripe);
    // Lantern room (glass dome)
    const lantern = makeMesh(
      new THREE.SphereGeometry(0.35, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x80b8d0, roughness: 0.4, metalness: 0.3, transparent: true, opacity: 0.7 })
    );
    lantern.position.set(x, 3.9, z);
    grp.add(lantern);
    // Light beam glow
    const light = makeMesh(
      new THREE.ConeGeometry(0.4, 1.2, 10),
      new THREE.MeshStandardMaterial({ color: 0xffff88, emissive: 0xffff44, roughness: 0.3, transparent: true, opacity: 0.4 })
    );
    light.position.set(x, 4.2, z);
    grp.add(light);
    return grp;
  }

  // Build realistic bush/shrub
  function buildBush(x, z, size) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x5a8a3a, roughness: 0.9 });
    // 3-4 overlapping spheres for organic shape
    const radii = [size * 0.6, size * 0.55, size * 0.48];
    radii.forEach((r, i) => {
      const sphere = makeMesh(new THREE.SphereGeometry(r, 6, 5), mat);
      sphere.position.set((i - 1) * size * 0.3, size * 0.4 + i * 0.15, (i % 2 === 0 ? 1 : -1) * size * 0.2);
      grp.add(sphere);
    });
    grp.position.set(x, 0, z);
    return grp;
  }

  // Build tall fern cluster
  function buildFernCluster(x, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a7a2a, roughness: 0.95, side: THREE.DoubleSide });
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const frond = makeMesh(new THREE.ConeGeometry(0.08, 1.2, 4), mat);
      frond.position.set(Math.cos(angle) * 0.3, 0.6, Math.sin(angle) * 0.3);
      frond.rotation.set(-0.7, angle, 0);
      grp.add(frond);
    }
    grp.position.set(x, 0, z);
    return grp;
  }

  function buildRegionProps(terrain) {
    clearThreeProps();
    if (!hasThree) return;

    if (terrain === 'dunes') {
      // Sandstone mesas mid-distance
      [[-8, -22, 3.2, 4.8], [5, -18, 2.4, 3.6], [-3, -30, 2.8, 4.0], [10, -26, 2.0, 3.2]].forEach(([x, z, w2, h]) => {
        const grp = buildMesa(x, z, w2, h);
        addProp(grp);
      });
      // Sparse dead scrub
      for (let i = 0; i < 14; i++) {
        const x = (i % 2 === 0 ? -1 : 1) * (5 + (i * 1.3) % 7);
        const z = -8 - (i * 2.2) % 28;
        const stump = makeMesh(
          new globalThis.THREE.CylinderGeometry(0.06, 0.12, 0.6 + (i % 3) * 0.3, 4),
          new globalThis.THREE.MeshStandardMaterial({ color: 0x6a4020, roughness: 1.0 })
        );
        stump.position.set(x, 0.3, z);
        addProp(stump);
      }
    }

    if (terrain === 'forest') {
      // Tall gum trees lining both sides
      const treePositions = [
        [-7, -10], [-9, -16], [-6, -22], [-8, -30],
        [7, -8],  [9, -14],  [7, -20],  [10, -28],
        [-5, -36], [8, -34]
      ];
      treePositions.forEach(([x, z]) => {
        const h = 4.2 + (Math.abs(x + z) % 4) * 1.1;
        addProp(buildGumTree(x, z, h));
      });
      // Dense undergrowth: bushes and shrubs
      const bushPositions = [
        [-4, -8, 0.6], [-2, -14, 0.5], [-6, -18, 0.7], [3, -10, 0.6], [5, -15, 0.55],
        [-3, -24, 0.6], [2, -22, 0.65], [-8, -26, 0.5], [6, -25, 0.7], [-1, -32, 0.6]
      ];
      bushPositions.forEach(([x, z, sz]) => addProp(buildBush(x, z, sz)));
      // Fern clusters for understory
      const fernPositions = [[0, -10], [-5, -15], [4, -18], [-2, -25], [3, -30]];
      fernPositions.forEach(([x, z]) => addProp(buildFernCluster(x, z)));
      // Fallen logs
      for (let i = 0; i < 5; i++) {
        const log = makeMesh(
          new globalThis.THREE.CylinderGeometry(0.16, 0.20, 2.8 + i * 0.5, 7),
          new globalThis.THREE.MeshStandardMaterial({ color: 0x4a2810, roughness: 1.0 })
        );
        log.rotation.set(0, 0, Math.PI / 2 + (i * 0.4));
        log.position.set(-5 + i * 2.8, 0.2, -4 - i * 5.5);
        addProp(log);
      }
    }

    if (terrain === 'beach') {
      // Palm trees on the sides
      [[-8, -12, 3.2], [-6, -20, 2.8], [8, -10, 3.0], [7, -18, 2.6]].forEach(([x, z, h]) => {
        addProp(buildPalmTree(x, z, h));
      });
      // Realistic lighthouse
      addProp(buildLighthouse(0, -26));
      // Boats on the water plane
      [[-4, -14], [3, -20]].forEach(([x, z]) => {
        addProp(buildBoat(x, z));
      });
      // Rocky outcrops and larger boulders
      const boulderPositions = [
        [-6, -10, 0.5], [-3, -12, 0.45], [2, -11, 0.4],
        [6, -16, 0.55], [-8, -22, 0.6], [5, -24, 0.48],
        [-2, -28, 0.52], [7, -30, 0.58]
      ];
      boulderPositions.forEach(([x, z, r]) => {
        const boulder = makeMesh(
          new globalThis.THREE.DodecahedronGeometry(r, 0),
          new globalThis.THREE.MeshStandardMaterial({ color: 0xa8967a, roughness: 0.98 })
        );
        boulder.position.set(x, r * 0.35, z);
        addProp(boulder);
      });
    }

    if (terrain === 'industrial') {
      // Servo pylons / antennas
      [[-7, -10, 4.5], [7, -12, 5.2], [-5, -20, 3.8], [9, -18, 4.0], [0, -28, 5.8]].forEach(([x, z, h]) => {
        addProp(buildPylon(x, z, h));
      });
      // Metal container blocks
      for (let i = 0; i < 5; i++) {
        const crate = makeMesh(
          new globalThis.THREE.BoxGeometry(1.2 + (i % 2) * 0.4, 0.7, 0.7),
          new globalThis.THREE.MeshStandardMaterial({ color: 0x2a4a6a, roughness: 0.6, metalness: 0.5 })
        );
        crate.position.set(-6 + i * 2.8, 0.35, -4 - i * 2);
        addProp(crate);
      }
    }

    if (terrain === 'mountains') {
      // Snowy rocks and pines
      [[-7, -12, 1.0], [6, -10, 0.8], [-4, -22, 1.3], [8, -20, 0.9], [-9, -30, 1.1]].forEach(([x, z, r]) => {
        addProp(buildSnowRock(x, z, r));
      });
      // Conifer silhouettes (stacked cones)
      for (let i = 0; i < 8; i++) {
        const x = (i % 2 === 0 ? -1 : 1) * (4 + (i * 1.7) % 6);
        const z = -8 - (i * 3.1) % 24;
        const grp = new globalThis.THREE.Group();
        const cMat = new globalThis.THREE.MeshStandardMaterial({ color: 0x2a4a38, roughness: 0.9 });
        [2.2, 1.5, 0.9].forEach((cr, ki) => {
          const cone = makeMesh(new globalThis.THREE.ConeGeometry(cr * 0.5, cr * 0.9, 6), cMat);
          cone.position.set(0, ki * 0.9 + cr * 0.45, 0);
          grp.add(cone);
        });
        grp.position.set(x, 0, z);
        addProp(grp);
      }
    }
  }

  function initThreeTerrain() {
    if (!hasThree || !threeRoot || threeState.ready) {
      return;
    }
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    const renderer = new globalThis.THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = globalThis.THREE.PCFSoftShadowMap;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    threeRoot.appendChild(renderer.domElement);

    const scene = new globalThis.THREE.Scene();
    const camera = new globalThis.THREE.PerspectiveCamera(56, w / h, 0.1, 260);
    camera.position.set(0, 11.8, 17.2);
    camera.lookAt(0, 0, -7);

    const ambient = new globalThis.THREE.AmbientLight(0xa8bfd6, 0.55);
    scene.add(ambient);

    const sun = new globalThis.THREE.DirectionalLight(0xffe0b8, 1.15);
    sun.position.set(9, 13, 8);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 1024;
    sun.shadow.mapSize.height = 1024;
    scene.add(sun);

    // Second fill light for depth on props
    const fillLight = new globalThis.THREE.DirectionalLight(0xb0d0ff, 0.38);
    fillLight.position.set(-8, 6, 10);
    scene.add(fillLight);

    const skyGeo = new globalThis.THREE.SphereGeometry(90, 24, 16);
    const skyMat = new globalThis.THREE.MeshBasicMaterial({ color: 0x1a2439, side: globalThis.THREE.BackSide });
    const sky = new globalThis.THREE.Mesh(skyGeo, skyMat);
    scene.add(sky);

    const terrainGeo = new globalThis.THREE.PlaneGeometry(28, 56, 96, 160);
    terrainGeo.rotateX(-Math.PI / 2.25);
    const terrainMat = new globalThis.THREE.MeshStandardMaterial({
      color: 0x6f7e9f,
      roughness: 0.92,
      metalness: 0.08,
      emissive: 0x0f1422,
      emissiveIntensity: 0.3
    });
    const terrain = new globalThis.THREE.Mesh(terrainGeo, terrainMat);
    terrain.position.set(0, -2.1, -7.8);
    terrain.receiveShadow = true;
    scene.add(terrain);

    const pos = terrainGeo.attributes.position;
    const base = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      base[i * 3] = pos.getX(i);
      base[i * 3 + 1] = pos.getY(i);
      base[i * 3 + 2] = pos.getZ(i);
    }

    threeState.ready = true;
    threeState.renderer = renderer;
    threeState.scene = scene;
    threeState.camera = camera;
    threeState.ambient = ambient;
    threeState.terrain = terrain;
    threeState.terrainGeo = terrainGeo;
    threeState.terrainBase = base;
    threeState.sun = sun;
    threeState.fillLight = fillLight;
    threeState.sky = sky;
    threeState.props = [];
    applyRegionThreeTheme(regions[state.regionIndex]);
    updateThreeVisibility();
  }

  function updateThreeVisibility() {
    if (!threeState.ready || !threeState.renderer) {
      return;
    }
    threeState.renderer.domElement.style.display = terrain3dEnabled ? 'block' : 'none';
  }

  function applyRegionThreeTheme(region) {
    if (!threeState.ready || !region) {
      return;
    }
    const theme = terrainTheme(region.terrain);
    threeState.terrain.material.color.setHex(theme.base);
    threeState.terrain.material.emissive.setHex(theme.emissive);
    threeState.scene.fog = new globalThis.THREE.Fog(theme.fog, theme.fogNear || 16, theme.fogFar || 58);
    threeState.sky.material.color.setHex(theme.sky);

    // Tune sun colour per region
    const sunColors = {
      dunes:      0xffcc80,
      forest:     0xd8f0c0,
      beach:      0x90d0ff,
      industrial: 0x8de4ff,
      mountains:  0xd0e8ff
    };
    threeState.sun.color.setHex(sunColors[region.terrain] || 0xffdfbe);
    threeState.sun.intensity = theme.sunIntensity || 1.15;
    threeState.ambient.intensity = theme.ambientIntensity || 0.55;

    // Rebuild props for the new region
    buildRegionProps(region.terrain);
    threeState.terrainType = region.terrain;
  }

  function updateThreeTerrain(dt) {
    if (!threeState.ready || !terrain3dEnabled) {
      return;
    }
    const terrain = regions[state.regionIndex]?.terrain || 'dunes';
    if (terrain !== threeState.terrainType) {
      applyRegionThreeTheme(regions[state.regionIndex]);
    }
    const theme = terrainTheme(terrain);
    const profile = terrainTrackProfile(terrain);
    const levelFactors = getCurvatureLevelFactors();
    threeState.t += dt;
    const t = threeState.t;
    const worldTrackShift = getTrackCenterDriftNorm(0.92) * 11.5;

    const pos = threeState.terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const bx = threeState.terrainBase[i * 3];
      const by = threeState.terrainBase[i * 3 + 1];
      const bz = threeState.terrainBase[i * 3 + 2];
      // Multi-octave displacement for richer detail
      const nA = octaveNoise(bx * theme.freq + t * theme.speed, bz * theme.freq - 7.7);
      const nB = octaveNoise(bx * (theme.freq * 2.4) - 11.3, bz * (theme.freq * 2.1) + t * theme.speed * 0.7);
      const nHi = theme.freqHi ? octaveNoise(bx * theme.freqHi + 43.2, bz * theme.freqHi + 11.8) : 0;
      const curveOffset = Math.sin(t * 0.42 * levelFactors.freqScale + bz * profile.curveFreq) * profile.curveAmp * levelFactors.bendScale;
      const relX = bx - curveOffset - worldTrackShift * 0.36;
      const absRelX = Math.abs(relX);
      const laneMask = Math.max(0, 1 - absRelX / profile.corridorWidth);
      const laneCarve = Math.pow(laneMask, 1.9) * profile.corridorDepth;
      const sideRise = Math.max(0, absRelX - profile.corridorWidth) * profile.ridgeRamp;
      const runWave = Math.sin((bz + t * (2 + theme.speed * 12) * levelFactors.freqScale) * profile.waveFreq + relX * 0.18) * profile.waveAmp * levelFactors.wiggleScale;
      const lift = (nA * 0.65 + nB * 0.25 + nHi * 0.1) * theme.amp
        + (theme.ampHi ? nHi * theme.ampHi * 0.4 : 0)
        - laneCarve
        + sideRise
        + runWave * (0.35 + laneMask * 0.65);
      pos.setXYZ(i, bx, by + lift, bz);
    }
    pos.needsUpdate = true;
    threeState.terrainGeo.computeVertexNormals();

    // Animate props
    if (threeState.props) {
      threeState.props.forEach((p, idx) => {
        if (terrain === 'beach') {
          // Boats bob on water
          if (p.children && p.children.length > 1) {
            p.position.y = Math.sin(t * 1.1 + idx) * 0.12;
            p.rotation.z = Math.sin(t * 0.8 + idx * 0.7) * 0.04;
          }
        }
        if (terrain === 'mountains') {
          // Very slight sway on conifers
          p.rotation.z = Math.sin(t * 0.6 + idx * 1.3) * 0.02;
        }
        if (terrain === 'industrial') {
          // Pylons pulse emissive
          p.traverse(child => {
            if (child.material && child.material.emissive) {
              const pulse = 0.12 + Math.sin(t * 2.4 + idx) * 0.08;
              child.material.emissiveIntensity = pulse;
              child.material.emissive.setHex(0x5be7ff);
            }
          });
        }
      });
    }

    // Subtle camera sway
    const camSwayX = Math.sin(t * 0.22) * 0.18;
    const camSwayY = Math.cos(t * 0.17) * 0.08 + 11.8;
    const trackCameraX = worldTrackShift * 0.68;
    threeState.camera.position.set(trackCameraX + camSwayX, camSwayY, 17.2);
    threeState.camera.lookAt(trackCameraX * 0.92, 0.12, -7.4);

    threeState.renderer.render(threeState.scene, threeState.camera);
  }

  function buildAuroraAustral() {
    const THREE = globalThis.THREE;
    if (!THREE) return null;
    // Create rippling aurora shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x00ff88) },
        color2: { value: new THREE.Color(0x00ffdd) },
        color3: { value: new THREE.Color(0x0088ff) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vY;
        void main() {
          vUv = uv;
          vY = position.y;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        varying vec2 vUv;
        varying float vY;
        
        float wave(float x, float t) {
          return sin(x * 3.0 + t) * cos(x * 1.5 - t * 0.7);
        }
        
        void main() {
          float w1 = wave(vUv.x * 2.0, time * 0.4);
          float w2 = wave(vUv.x * 1.2 - 2.0, time * 0.3);
          float w3 = wave(vUv.x * 1.8 + 1.5, time * 0.5);
          
          float height = vY / 90.0 + 0.3;
          float alpha = height * (0.4 + w1 * 0.2 + w2 * 0.15 + w3 * 0.2);
          
          vec3 col = mix(color1, color2, sin(vUv.x * 2.0 + time * 0.2) * 0.5 + 0.5);
          col = mix(col, color3, sin(vUv.x * 0.8 - time * 0.15) * 0.5 + 0.5);
          
          gl_FragColor = vec4(col, alpha * 0.5);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    
    const geometry = new THREE.SphereGeometry(85, 32, 24);
    const aurora = new THREE.Mesh(geometry, material);
    aurora.userData.isAurora = true;
    return aurora;
  }

  function updateAurora(dt) {
    if (!threeState.scene || !threeState.ready) return;
    const terrain = regions[state.regionIndex]?.terrain || 'dunes';
    const auroraObj = threeState.scene.getObjectByProperty('userData.isAurora', true);
    
    if (terrain === 'mountains') {
      if (!auroraObj) {
        const aurora = buildAuroraAustral();
        if (aurora) {
          threeState.scene.add(aurora);
          threeState.aurora = aurora;
        }
      }
      if (threeState.aurora && threeState.aurora.material.uniforms) {
        threeState.aurora.material.uniforms.time.value += dt * 0.6;
      }
    } else {
      if (auroraObj) {
        threeState.scene.remove(auroraObj);
        threeState.aurora = null;
      }
    }
  }

  function resizeThreeTerrain() {
    if (!threeState.ready) {
      return;
    }
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    threeState.renderer.setSize(w, h);
    threeState.camera.aspect = w / h;
    threeState.camera.updateProjectionMatrix();
  }

  function ensureAudioContext() {
    if (audioState.ctx) {
      return;
    }
    const ACtx = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!ACtx) {
      return;
    }
    const ctx = new ACtx();
    const master = ctx.createGain();
    const music = ctx.createGain();
    const sfx = ctx.createGain();

    master.gain.value = 0.9;
    music.gain.value = musicVolume * (musicEnabled ? 1 : 0);
    sfx.gain.value = sfxVolume;

    music.connect(master);
    sfx.connect(master);
    master.connect(ctx.destination);

    audioState.ctx = ctx;
    audioState.master = master;
    audioState.music = music;
    audioState.sfx = sfx;
  }

  function startAmbientAudio() {
    ensureAudioContext();
    if (!audioState.ctx || audioState.started) {
      return;
    }
    // Ambient hum layer intentionally disabled; keep only gameplay SFX.
    audioState.started = true;
    syncAudioToRegion();
  }

  function ensureAudioStarted() {
    ensureAudioContext();
    if (!audioState.ctx) {
      return;
    }
    if (audioState.ctx.state === 'suspended') {
      audioState.ctx.resume();
    }
    startAmbientAudio();
  }

  function syncAudioToRegion() {
    if (!audioState.ctx || !audioState.started) {
      return;
    }
    const now = audioState.ctx.currentTime;
    const musicGainTarget = 0;
    audioState.music.gain.cancelScheduledValues(now);
    audioState.music.gain.linearRampToValueAtTime(musicGainTarget, now + 0.18);
    audioState.sfx.gain.cancelScheduledValues(now);
    audioState.sfx.gain.linearRampToValueAtTime(sfxVolume, now + 0.1);
  }

  function playSfx(kind) {
    if (!audioState.ctx || !audioState.sfx) {
      return;
    }
    const now = audioState.ctx.currentTime;

    // Helper to play a shaped tone
    function tone(type, freqStart, freqEnd, durSec, gainPeak, freqMidTime) {
      const osc = audioState.ctx.createOscillator();
      const env = audioState.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freqStart, now);
      if (freqMidTime !== undefined) {
        osc.frequency.exponentialRampToValueAtTime(freqEnd, now + freqMidTime);
        osc.frequency.exponentialRampToValueAtTime(freqStart * 0.7, now + durSec);
      } else {
        osc.frequency.exponentialRampToValueAtTime(freqEnd, now + durSec * 0.6);
      }
      env.gain.setValueAtTime(0.001, now);
      env.gain.exponentialRampToValueAtTime(gainPeak, now + 0.012);
      env.gain.exponentialRampToValueAtTime(0.001, now + durSec);
      osc.connect(env);
      env.connect(audioState.sfx);
      osc.start(now);
      osc.stop(now + durSec + 0.01);
    }

    // Helper for bird chirp (two quick notes)
    function chirp(f1, f2, gap) {
      tone('triangle', f1, f1 * 1.6, 0.09, 0.1);
      const osc2 = audioState.ctx.createOscillator();
      const env2 = audioState.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(f2, now + gap);
      osc2.frequency.exponentialRampToValueAtTime(f2 * 1.4, now + gap + 0.08);
      env2.gain.setValueAtTime(0.001, now + gap);
      env2.gain.exponentialRampToValueAtTime(0.12, now + gap + 0.01);
      env2.gain.exponentialRampToValueAtTime(0.001, now + gap + 0.1);
      osc2.connect(env2);
      env2.connect(audioState.sfx);
      osc2.start(now + gap);
      osc2.stop(now + gap + 0.12);
    }

    // Character-specific sounds per action
    const charSounds = {
      emu: {
        jump:    () => tone('sawtooth', 180, 320, 0.18, 0.09),      // low drumming boom
        collect: () => tone('triangle', 360, 640, 0.14, 0.1),
        hit:     () => { tone('square', 140, 80, 0.18, 0.14); tone('sawtooth', 90, 60, 0.12, 0.08); }
      },
      kookaburra: {
        jump:    () => chirp(780, 900, 0.06),                        // kookaburra laugh fragment
        collect: () => chirp(920, 1100, 0.05),
        hit:     () => tone('square', 300, 140, 0.16, 0.12)
      },
      cockatoo: {
        jump:    () => chirp(640, 820, 0.04),                        // cockatoo screech pair
        collect: () => chirp(800, 1000, 0.045),
        hit:     () => tone('square', 260, 100, 0.16, 0.13)
      },
      kangaroo: {
        jump:    () => tone('triangle', 90, 200, 0.22, 0.13),        // heavy thump + spring
        collect: () => tone('triangle', 440, 720, 0.13, 0.1),
        hit:     () => { tone('square', 160, 80, 0.2, 0.15); tone('triangle', 80, 50, 0.15, 0.08); }
      },
      wallaby: {
        jump:    () => tone('triangle', 120, 240, 0.18, 0.11),
        collect: () => tone('triangle', 480, 760, 0.12, 0.1),
        hit:     () => tone('square', 180, 90, 0.18, 0.13)
      },
      wombat: {
        jump:    () => tone('sawtooth', 100, 160, 0.2, 0.14),        // chunky thud
        collect: () => tone('triangle', 380, 580, 0.14, 0.1),
        hit:     () => tone('square', 130, 72, 0.22, 0.16)
      },
      koala: {
        jump:    () => tone('triangle', 140, 220, 0.16, 0.1),        // soft low grunt
        collect: () => tone('triangle', 440, 680, 0.12, 0.1),
        hit:     () => tone('square', 160, 82, 0.18, 0.13)
      },
      possum: {
        jump:    () => tone('triangle', 300, 520, 0.15, 0.1),        // light quick hop
        collect: () => chirp(560, 720, 0.06),
        hit:     () => tone('square', 220, 100, 0.15, 0.12)
      },
      echidna: {
        jump:    () => tone('sawtooth', 160, 260, 0.17, 0.1),        // shuffling scratch
        collect: () => tone('triangle', 400, 660, 0.13, 0.1),
        hit:     () => tone('square', 140, 75, 0.2, 0.14)
      },
      platypus: {
        jump:    () => tone('triangle', 200, 340, 0.16, 0.1),        // splashing plop
        collect: () => tone('triangle', 480, 760, 0.13, 0.1),
        hit:     () => tone('square', 170, 88, 0.18, 0.12)
      },
      dingo: {
        jump:    () => tone('sawtooth', 220, 380, 0.18, 0.12),       // dog yelp
        collect: () => tone('triangle', 460, 720, 0.13, 0.1),
        hit:     () => { tone('square', 200, 90, 0.18, 0.14); tone('sawtooth', 100, 60, 0.14, 0.09); }
      },
      bilby: {
        jump:    () => tone('triangle', 340, 560, 0.14, 0.09),       // light scurry
        collect: () => chirp(600, 780, 0.05),
        hit:     () => tone('square', 200, 95, 0.15, 0.11)
      },
      tasdevil: {
        jump:    () => { tone('sawtooth', 180, 280, 0.16, 0.13); tone('square', 120, 70, 0.1, 0.08); }, // growl
        collect: () => tone('triangle', 360, 600, 0.14, 0.1),
        hit:     () => { tone('square', 160, 70, 0.24, 0.18); tone('sawtooth', 100, 55, 0.2, 0.1); }
      },
      quokka: {
        jump:    () => tone('triangle', 280, 460, 0.14, 0.1),        // cute soft hop
        collect: () => chirp(640, 820, 0.05),
        hit:     () => tone('square', 210, 100, 0.15, 0.11)
      },
      numbat: {
        jump:    () => tone('triangle', 320, 520, 0.14, 0.09),       // quick dart
        collect: () => chirp(560, 740, 0.055),
        hit:     () => tone('square', 190, 92, 0.16, 0.12)
      }
    };

    const charSfx = charSounds[selectedCharacter] || charSounds.emu;
    if (kind === 'collect' && charSfx.collect) {
      charSfx.collect();
    } else if (kind === 'jump' && charSfx.jump) {
      charSfx.jump();
    } else if (kind === 'hit' && charSfx.hit) {
      charSfx.hit();
    } else {
      // Fallback generic
      const osc = audioState.ctx.createOscillator();
      const gain = audioState.ctx.createGain();
      osc.type = kind === 'hit' ? 'square' : 'triangle';
      if (kind === 'collect') {
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(760, now + 0.08);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.11, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
      } else if (kind === 'jump') {
        osc.frequency.setValueAtTime(210, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.09);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      } else {
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(92, now + 0.12);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      }
      osc.connect(gain);
      gain.connect(audioState.sfx);
      osc.start(now);
      osc.stop(now + 0.18);
    }
  }
  let walkthroughIndex = 0;
  let levelCompleteTimer = null;
  const walkthroughSteps = [
    {
      title: 'These Are Your Lives',
      text: 'Hearts on the left are your lives. Each level starts with 3 hearts. If they drop to 0, one revive challenge can restore all 3 once per level.',
      visuals: []
    },
    {
      title: 'Choose Your Character',
      text: 'Each level gives exactly 2 dashers: one fast (full-width, higher energy use) and one slow (restricted lanes, lower energy use). Special dashers unlock when you collect 3 treasure chests in one run for that level.',
      visuals: []
    },
    {
      title: 'Movement Controls',
      text: 'Use left/right to switch lanes, up/space to jump, and down to slide. Every move consumes energy.',
      visuals: []
    },
    {
      title: 'Collectibles And Hazards',
      text: 'Catch shards and score tokens (+100/+500). Avoid bombs and negative tokens (-100/-500).',
      visuals: [
        { kind: 'shard', icon: '◆', label: 'Shard' },
        { kind: 'treasure', icon: '+', label: 'Score Token' },
        { kind: 'hazard', icon: '▲', label: 'Hazard' }
      ]
    },
    {
      title: 'Energy And Food',
      text: 'If energy is empty, movement stops. Buy food with points (F key or Buy Food button) and food auto-recovers energy.',
      visuals: [
        { kind: 'core', icon: '□', label: 'Puzzle Core' }
      ]
    },
    {
      title: 'Mission Goal',
      text: 'Score comes only from score tokens and level clear bonuses. Survive, collect shards, and progress terrain levels.',
      visuals: []
    }
  ];

  const globalGameData = globalThis.DawnDashersGameData;
  const scriptGameData = typeof DawnDashersGameData === 'undefined' ? null : DawnDashersGameData;
  const gameData = globalGameData || scriptGameData || {};
  const palette = gameData.palette || {
    bgTop: '#08101d',
    bgBottom: '#1f1332',
    gold: '#ffd166',
    orange: '#ff6b35',
    paper: '#f3e5c0',
    dark: '#151515',
    aurora: '#52b788',
    cyan: '#8be9ff',
    violet: '#b58cff'
  };

  // Quirky congrats shown when advancing to the next level
  const levelTransitionMsgs = gameData.levelTransitionMsgs || [
    null, // placeholder — level 0 is the start, no incoming transition
    {
      congrats: 'Wowww!! Outback: CLEARED! 🌵🔥',
      teaser: 'Heading into the Bushland — eucalyptus as far as the beak can see, wombat tunnels underfoot, and a 100% chance something rustles right behind you.'
    },
    {
      congrats: 'AYY!! Bushland: SMASHED! 🌿✨',
      teaser: "Next: Servo — part ancient emu trading post, part glitchy AI hub. The circuits are dusty. The emus are absolutely suspicious."
    },
    {
      congrats: 'Unreal!! Servo: CONQUERED! ⚡🎉',
      teaser: 'Coastline Lighthouse awaits — salty air, crashing waves, and a lighthouse that blinks in binary. Coincidence? Doubt it.'
    },
    {
      congrats: 'LEGENDARY!! Coastline: OBLITERATED! 🌊🏆',
      teaser: 'Tasmania — misty peaks, ancient trails, and the terrain where the Halting Problem lives. Will this run ever truly end? (Spoiler: yes. Probably.)'
    }
  ];

  const regions = gameData.regions || [
    {
      name: 'Outback Ruins',
      top: '#d4a373',
      bottom: '#8b5e3c',
      accent: '#ffd166',
      terrain: 'dunes'
    },
    {
      name: 'Bushland',
      top: '#8fae66',
      bottom: '#4a6a3f',
      accent: '#52b788',
      terrain: 'forest'
    },
    {
      name: 'Servo',
      top: '#23364f',
      bottom: '#0d1728',
      accent: '#5be7ff',
      terrain: 'industrial'
    },
    {
      name: 'Coastline Lighthouse',
      top: '#9fd0e3',
      bottom: '#3f80a8',
      accent: '#4ea8de',
      terrain: 'beach'
    },
    {
      name: 'Tasmania',
      top: '#8395b7',
      bottom: '#3f4c75',
      accent: '#52b788',
      terrain: 'mountains'
    }
  ];

  const lanes = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const laneCenterIndex = Math.floor(lanes.length / 2);
  const laneSpread = 0.11;

  const templeLanePatterns = [
    [-2, -1, 0, 1, 2, 1, 0, -1],
    [2, 1, 0, -1, -2, -1, 0, 1],
    [0, 1, 0, -1, 0, 1, 2, 1],
    [0, -1, 0, 1, 0, -1, -2, -1],
    [-1, 0, 1, 0, -1, 0, 1, 2],
    [1, 0, -1, 0, 1, 0, -1, -2]
  ];

  function clamp01(value) {
    return Math.max(0, Math.min(1, value));
  }

  function getCurrentLevelIndex() {
    return Math.max(state.progressLevel || 0, state.regionIndex || 0);
  }

  function getDifficultyCurveScales() {
    const configured = curvatureSettings.difficultyScale || {};
    const fallback = { bend: 1, wiggle: 1, freq: 1, fall: 1 };
    const raw = configured[gameDifficulty] || configured.medium || fallback;
    return {
      bend: Number.isFinite(raw.bend) ? raw.bend : fallback.bend,
      wiggle: Number.isFinite(raw.wiggle) ? raw.wiggle : fallback.wiggle,
      freq: Number.isFinite(raw.freq) ? raw.freq : fallback.freq,
      fall: Number.isFinite(raw.fall) ? raw.fall : fallback.fall
    };
  }

  function getCurvatureLevelFactors() {
    const levelIndex = getCurrentLevelIndex();
    const maxLevelIndex = Number.isFinite(curvatureSettings.maxLevelIndex) ? curvatureSettings.maxLevelIndex : 4;
    const clamped = Math.max(0, Math.min(maxLevelIndex, levelIndex));
    const diff = getDifficultyCurveScales();
    const bendBase = Number.isFinite(curvatureSettings.bendBase) ? curvatureSettings.bendBase : 0.72;
    const bendPerLevel = Number.isFinite(curvatureSettings.bendPerLevel) ? curvatureSettings.bendPerLevel : 0.16;
    const wiggleBase = Number.isFinite(curvatureSettings.wiggleBase) ? curvatureSettings.wiggleBase : 0.68;
    const wigglePerLevel = Number.isFinite(curvatureSettings.wigglePerLevel) ? curvatureSettings.wigglePerLevel : 0.22;
    const freqBase = Number.isFinite(curvatureSettings.freqBase) ? curvatureSettings.freqBase : 0.95;
    const freqPerLevel = Number.isFinite(curvatureSettings.freqPerLevel) ? curvatureSettings.freqPerLevel : 0.05;
    return {
      bendScale: (bendBase + clamped * bendPerLevel) * diff.bend,
      wiggleScale: (wiggleBase + clamped * wigglePerLevel) * diff.wiggle,
      freqScale: (freqBase + clamped * freqPerLevel) * diff.freq
    };
  }

  function getFallingObjectSpeedScale() {
    const shardDeficit = Math.max(0, 7 - state.fragments);
    const levelIndex = getCurrentLevelIndex();
    const levelScalePerLevel = Number.isFinite(fallingObjectSettings.levelScalePerLevel) ? fallingObjectSettings.levelScalePerLevel : 0.17;
    const shardDeficitPerShard = Number.isFinite(fallingObjectSettings.shardDeficitPerShard) ? fallingObjectSettings.shardDeficitPerShard : 0.05;
    const pressurePerDifficultyPoint = Number.isFinite(fallingObjectSettings.pressurePerDifficultyPoint) ? fallingObjectSettings.pressurePerDifficultyPoint : 0.08;
    const levelScale = 1 + levelIndex * levelScalePerLevel;
    const deficitScale = 1 + shardDeficit * shardDeficitPerShard;
    const pressureScale = 1 + Math.max(0, state.difficulty - 1) * pressurePerDifficultyPoint;
    const diff = getDifficultyCurveScales();
    return levelScale * deficitScale * pressureScale * diff.fall;
  }

  function getTrackCenterDriftNorm(depth01 = 1) {
    const terrain = regions[state.regionIndex]?.terrain || 'dunes';
    const profile = terrainTrackProfile(terrain);
    const levelFactors = getCurvatureLevelFactors();
    const t = performance.now() * 0.001;
    const depth = clamp01(depth01);
    const depthInfluence = 0.22 + Math.pow(depth, 1.28) * 0.88;
    const phase = (t * profile.bendFreq + state.distance * 0.014) * levelFactors.freqScale;
    const main = Math.sin(phase + depth * 2.8) * profile.bendAmp * levelFactors.bendScale;
    const wiggle = Math.sin(phase * profile.wiggleFreq - depth * 5.3) * profile.wiggleAmp * levelFactors.wiggleScale;
    return (main + wiggle) * depthInfluence;
  }

  function getTrackXNorm(baseNorm, depth01 = 1) {
    return Math.max(0.04, Math.min(0.96, baseNorm + getTrackCenterDriftNorm(depth01)));
  }

  function laneToXNorm(laneIndex) {
    const safeIndex = Math.max(0, Math.min(lanes.length - 1, laneIndex));
    return 0.5 + lanes[safeIndex] * laneSpread;
  }

  const state = {
    running: false,
    ended: false,
    score: 0,
    energy: 1000,
    maxEnergy: 1000,
    health: 3,
    maxLives: 3,
    fragments: 0,
    objective: 'Tap Start and keep moving.',
    player: {
      lane: laneCenterIndex,
      y: 0,
      jump: 0,
      sliding: 0,
      invincible: 0
    },
    items: [],
    events: [],
    message: '',
    difficulty: 1,
    distance: 0,
    regionIndex: 0,
    progressLevel: 0,
    hintsUsed: 0,
    paused: false,
    hungerPaused: false,
    hungerModalDismissedUntil: 0,
    activeBoostMoves: {
      slowFullWidth: 0,
      fastEfficiency: 0
    },
    foodCartByCharacter: {},
    spawnTimer: 0,
    spawnPattern: null,
    spawnPatternStep: 0,
    lastSpawnLane: laneCenterIndex,
    fragmentTimer: 9,
    continueFromLevelUnlock: false,
    lastTime: 0,
    swipeStart: null,
    apiOnline: false,
    pendingReviveOffer: null,
    heartReviveUsedByLevel: {},
    chestCollectsByLevelRun: {},
    puzzleBankUnlocks: (() => {
      try {
        const raw = globalThis.localStorage.getItem(PUZZLE_BANK_UNLOCKS_KEY);
        if (!raw) {
          return {};
        }
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : {};
      } catch {
        return {};
      }
    })()
  };

  const characters = gameData.characters || {
    emu: { name: 'Elder Emu', emoji: '🦅', power: 'Dust Sprint', quirk: 'Fast lane weave, moderate hop drain.', unlockAt: 0, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Emu' },
    wombat: { name: 'Digger Wombat', emoji: '🦫', power: 'Burrow Dodge', quirk: 'Cheaper slides in dunes/forest.', unlockAt: 0, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Wombat' },
    wallaby: { name: 'Spinifex Wallaby', emoji: '🦘', power: 'Spring Drift', quirk: 'Lower jump drain, slightly higher move drain.', unlockAt: 0, role: 'fast', puzzleUnlockLevel: 0, wikiUrl: 'https://en.wikipedia.org/wiki/Wallaby' },
    kangaroo: { name: 'Red Kangaroo', emoji: '🦘', power: 'Sky Hop', quirk: 'Jumps are most energy-efficient.', unlockAt: 1, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Red_kangaroo' },
    koala: { name: 'River Koala', emoji: '🐨', power: 'Grip Glide', quirk: 'Balanced and steady movement.', unlockAt: 1, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Koala' },
    platypus: { name: 'Cipher Platypus', emoji: '🦆', power: 'River Sense', quirk: 'Food restores more and slide is efficient.', unlockAt: 1, role: 'slow', puzzleUnlockLevel: 1, wikiUrl: 'https://en.wikipedia.org/wiki/Platypus' },
    possum: { name: 'Lantern Possum', emoji: '🌟', power: 'Night Glide', quirk: 'Quick reactions at higher levels.', unlockAt: 2, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Possum' },
    echidna: { name: 'Spike Echidna', emoji: '🦔', power: 'Quill Barrier', quirk: 'Stable lane control with low drift.', unlockAt: 2, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Echidna' },
    cockatoo: { name: 'Signal Cockatoo', emoji: '🦜', power: 'Aerial Relay', quirk: 'Great movement efficiency on all actions.', unlockAt: 2, role: 'fast', puzzleUnlockLevel: 2, wikiUrl: 'https://en.wikipedia.org/wiki/Cockatoo' },
    dingo: { name: 'Coastal Dingo', emoji: '🐕', power: 'Tide Dash', quirk: 'Aggressive full-width lane cuts.', unlockAt: 3, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Dingo' },
    bilby: { name: 'Desert Bilby', emoji: '🐇', power: 'Tunnel Pace', quirk: 'Short lane window, low energy burn.', unlockAt: 3, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Bilby' },
    tasdevil: { name: 'Storm Tassie Devil', emoji: '😈', power: 'Charge Burst', quirk: 'High movement speed with expensive jumps.', unlockAt: 3, role: 'fast', puzzleUnlockLevel: 3, wikiUrl: 'https://en.wikipedia.org/wiki/Tasmanian_devil' },
    kookaburra: { name: 'Aurora Kookaburra', emoji: '🐦', power: 'Light Call', quirk: 'Fast top-tier lane traversal.', unlockAt: 4, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Kookaburra' },
    quokka: { name: 'Summit Quokka', emoji: '🐹', power: 'Calm Climb', quirk: 'Highest efficiency but restricted lanes.', unlockAt: 4, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Quokka' },
    numbat: { name: 'Logic Numbat', emoji: '🦝', power: 'Pattern Focus', quirk: 'Very low move drain and cheap food cost.', unlockAt: 4, role: 'slow', puzzleUnlockLevel: 4, wikiUrl: 'https://en.wikipedia.org/wiki/Numbat' }
  };
  const levelCharacterPairs = gameData.levelCharacterPairs || {
    0: { fast: 'emu', slow: 'wombat' },
    1: { fast: 'kangaroo', slow: 'koala' },
    2: { fast: 'possum', slow: 'echidna' },
    3: { fast: 'dingo', slow: 'bilby' },
    4: { fast: 'kookaburra', slow: 'quokka' }
  };
  const characterFood = gameData.characterFood || {
    emu: { name: 'Seed Mix', icon: '🌾', cost: 220, restore: 250, moveCost: 50, jumpCost: 68, slideCost: 42 },
    wombat: { name: 'Root Pack', icon: '🥕', cost: 190, restore: 230, moveCost: 30, jumpCost: 48, slideCost: 24 },
    wallaby: { name: 'Spinifex Shoots', icon: '🌱', cost: 210, restore: 260, moveCost: 46, jumpCost: 52, slideCost: 30 },
    kangaroo: { name: 'Grass Bundle', icon: '🥬', cost: 235, restore: 270, moveCost: 48, jumpCost: 60, slideCost: 38 },
    koala: { name: 'Eucalyptus', icon: '🍃', cost: 200, restore: 250, moveCost: 28, jumpCost: 44, slideCost: 22 },
    platypus: { name: 'River Cray Pack', icon: '🦐', cost: 205, restore: 285, moveCost: 30, jumpCost: 42, slideCost: 20 },
    possum: { name: 'Berry Pouch', icon: '🍓', cost: 245, restore: 300, moveCost: 44, jumpCost: 56, slideCost: 34 },
    echidna: { name: 'Ant Cluster', icon: '🐜', cost: 210, restore: 275, moveCost: 26, jumpCost: 42, slideCost: 20 },
    cockatoo: { name: 'Wattle Fruit', icon: '🍇', cost: 230, restore: 315, moveCost: 38, jumpCost: 50, slideCost: 28 },
    dingo: { name: 'Fish Strip', icon: '🐟', cost: 260, restore: 325, moveCost: 42, jumpCost: 54, slideCost: 34 },
    bilby: { name: 'Herb Bundle', icon: '🥦', cost: 225, restore: 300, moveCost: 24, jumpCost: 40, slideCost: 18 },
    tasdevil: { name: 'Protein Haunch', icon: '🥩', cost: 285, restore: 360, moveCost: 41, jumpCost: 68, slideCost: 29 },
    kookaburra: { name: 'Worm Satchel', icon: '🪱', cost: 280, restore: 350, moveCost: 40, jumpCost: 50, slideCost: 30 },
    quokka: { name: 'Summit Greens', icon: '🥗', cost: 230, restore: 330, moveCost: 22, jumpCost: 36, slideCost: 18 },
    numbat: { name: 'Termite Trail Mix', icon: '🫘', cost: 210, restore: 345, moveCost: 20, jumpCost: 34, slideCost: 16 }
  };
  state.foodStocks = Object.keys(characterFood).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});
  const characterRegionMap = gameData.characterRegionMap || {
    emu: 0,
    wombat: 0,
    wallaby: 0,
    kangaroo: 1,
    koala: 1,
    platypus: 1,
    possum: 2,
    echidna: 2,
    cockatoo: 2,
    dingo: 3,
    bilby: 3,
    tasdevil: 3,
    kookaburra: 4,
    quokka: 4,
    numbat: 4
  };
  let selectedCharacter = 'emu';
  const puzzleState = {
    hintIndex: 0,
    currentIndex: 0,
    activeCorePuzzleId: null,
    hintsUsedThisPuzzle: 0,
    hintRewardGrantedThisPuzzle: false,
    pendingAdvance: null,
    pendingTreasure: null,
    pendingHeartRevive: null,
    seenTreasureIds: [],
    lastTreasureId: null,
    solvedByLevel: {},
    usedCorePuzzleIds: []
  };

  const puzzleData = globalThis.DawnDashersPuzzleData || {};
  const levelPuzzlePools = puzzleData.levelPuzzlePools || {
    0: [0, 2],
    1: [3, 4],
    2: [8, 5],
    3: [1, 7],
    4: [6, 9]
  };
  const turingPuzzles = Array.isArray(puzzleData.turingPuzzles) && puzzleData.turingPuzzles.length
    ? puzzleData.turingPuzzles
    : [
      {
        title: 'Outback Reversed Message',
        instruction: 'A dusty radio near an outback roadhouse reverses the name of the thinker who inspired this machine. Decode: N A L A.',
        answer: 'ALAN',
        acceptedAnswers: ['alan'],
        hints: ['Read the signal backward from right to left.'],
        rightExplain: 'Correct. Reversing N A L A gives A L A N, the Turing clue hidden in the outback static.',
        wrongExplain: 'Oops. This outback radio trick is a straight reversal, right-to-left.',
        learnUrl: 'https://en.wikipedia.org/wiki/Turing_machine'
      }
    ];
  const levelTreasurePools = puzzleData.levelTreasurePools || {
    0: [0],
    1: [1],
    2: [2],
    3: [3],
    4: [3]
  };
  const treasurePuzzles = Array.isArray(puzzleData.treasurePuzzles) ? puzzleData.treasurePuzzles : [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    terrainTextureCache.clear();
    resizeThreeTerrain();
    syncMobileControlVisibility();
  }

  function clampColorChannel(value) {
    return Math.max(0, Math.min(255, Math.round(value)));
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function smoothStep(t) {
    return t * t * (3 - 2 * t);
  }

  function hash2(x, y) {
    const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
    return s - Math.floor(s);
  }

  function valueNoise2(x, y) {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const x1 = x0 + 1;
    const y1 = y0 + 1;
    const tx = smoothStep(x - x0);
    const ty = smoothStep(y - y0);

    const n00 = hash2(x0, y0);
    const n10 = hash2(x1, y0);
    const n01 = hash2(x0, y1);
    const n11 = hash2(x1, y1);
    const nx0 = lerp(n00, n10, tx);
    const nx1 = lerp(n01, n11, tx);
    return lerp(nx0, nx1, ty) * 2 - 1;
  }

  function mixRgb(a, b, t) {
    return [
      clampColorChannel(lerp(a[0], b[0], t)),
      clampColorChannel(lerp(a[1], b[1], t)),
      clampColorChannel(lerp(a[2], b[2], t))
    ];
  }

  function octaveNoise(x, y) {
    let amp = 0.5;
    let freq = 1;
    let total = 0;
    let norm = 0;
    for (let i = 0; i < 4; i++) {
      const n = hasPerlinNoise
        ? globalThis.noise.perlin2(x * freq, y * freq)
        : valueNoise2(x * freq * 1.37, y * freq * 1.37);
      total += n * amp;
      norm += amp;
      amp *= 0.5;
      freq *= 2;
    }
    return total / norm;
  }

  function biomePalette(terrain) {
    if (terrain === 'dunes') {
      return {
        low: [74, 52, 38],
        mid: [118, 88, 62],
        high: [158, 128, 94],
        tint: [188, 162, 124]
      };
    }
    if (terrain === 'forest') {
      return {
        low: [30, 44, 30],
        mid: [54, 76, 52],
        high: [88, 112, 78],
        tint: [124, 146, 102]
      };
    }
    if (terrain === 'beach') {
      return {
        low: [82, 78, 66],
        mid: [122, 114, 94],
        high: [160, 150, 122],
        tint: [170, 182, 174]
      };
    }
    if (terrain === 'industrial') {
      return {
        low: [18, 26, 38],
        mid: [34, 48, 66],
        high: [62, 82, 104],
        tint: [88, 140, 166]
      };
    }
    return {
      low: [46, 54, 68],
      mid: [74, 86, 106],
      high: [112, 126, 148],
      tint: [154, 168, 184]
    };
  }

  function getTerrainTexture(terrain, targetW, targetH) {
    const texW = Math.max(280, Math.floor(targetW * 0.55));
    const texH = Math.max(180, Math.floor(targetH * 0.6));
    const key = `${terrain}:${texW}x${texH}`;
    if (terrainTextureCache.has(key)) {
      return terrainTextureCache.get(key);
    }

    const off = document.createElement('canvas');
    off.width = texW;
    off.height = texH;
    const offCtx = off.getContext('2d');
    const image = offCtx.createImageData(texW, texH);
    const px = image.data;
    const pal = biomePalette(terrain);

    for (let y = 0; y < texH; y++) {
      for (let x = 0; x < texW; x++) {
        const nx = x / texW;
        const ny = y / texH;
        const ridge = Math.abs(octaveNoise(nx * 2.4 + 11.2, ny * 2 + 7.6));
        const detail = octaveNoise(nx * 9.5 + 25.1, ny * 8.7 + 33.4);
        const macro = octaveNoise(nx * 1.2 + 3.7, ny * 1.35 + 4.3);
        const strata = Math.sin((ny * 44 + macro * 6) * Math.PI) * 0.03;
        const grain = valueNoise2(nx * 42 + 31.7, ny * 46 + 19.4) * 0.08;
        let heightMix = 0.46 + macro * 0.3 + ridge * 0.24 + detail * 0.13 + strata + grain;
        heightMix = Math.max(0, Math.min(1, heightMix));

        let color = mixRgb(pal.low, pal.mid, Math.min(1, heightMix * 1.08));
        if (heightMix > 0.62) {
          color = mixRgb(color, pal.high, (heightMix - 0.62) / 0.38);
        }

        // Distance haze and soft ambient occlusion to avoid posterized paint look.
        const ao = 0.9 - Math.abs(detail) * 0.09;
        const haze = 0.8 + ny * 0.18;
        color = [
          color[0] * ao * haze,
          color[1] * ao * haze,
          color[2] * ao * haze
        ];

        if (terrain === 'industrial') {
          const trace = octaveNoise(nx * 28 + 90, ny * 5 + 120);
          if (trace > 0.63) {
            color = mixRgb(color, pal.tint, 0.22);
          }
        }

        const lighting = 0.72 + ny * 0.22 + Math.max(0, detail) * 0.05;
        const i = (y * texW + x) * 4;
        px[i] = clampColorChannel(color[0] * lighting);
        px[i + 1] = clampColorChannel(color[1] * lighting);
        px[i + 2] = clampColorChannel(color[2] * lighting);
        px[i + 3] = 255;
      }
    }

    offCtx.putImageData(image, 0, 0);
    terrainTextureCache.set(key, off);
    return off;
  }

  function drawProceduralTerrainTexture(terrain, w, h, horizonY, t) {
    const groundH = h - horizonY;
    const tex = getTerrainTexture(terrain, w, groundH);
    const shiftA = (t * 13) % tex.width;
    const shiftB = (t * 6) % tex.width;

    ctx.save();
    ctx.globalAlpha = terrain === 'industrial' ? 0.72 : 0.66;
    ctx.drawImage(tex, -shiftA, horizonY, w + tex.width, groundH);
    ctx.globalAlpha = terrain === 'industrial' ? 0.22 : 0.2;
    ctx.drawImage(tex, -shiftB, horizonY - 5, w + tex.width, groundH + 8);
    ctx.restore();
  }

  function resetGame(options = {}) {
    const keepProgress = Boolean(options.keepProgress);
    state.running = true;
    state.ended = false;
    state.paused = false;
    if (!keepProgress) {
      state.score = 0;
      state.heartReviveUsedByLevel = {};
      state.chestCollectsByLevelRun = {};
    }
    state.pendingReviveOffer = null;
    state.health = state.maxLives;
    state.fragments = 0;
    syncAdminProgressToSelectedCharacter();
    const tier = Math.max(0, characters[selectedCharacter]?.unlockAt || 0);
    const role = characters[selectedCharacter]?.role || 'fast';
    state.maxEnergy = 1000 + tier * 120 + (role === 'slow' ? 80 : 30);
    state.energy = state.maxEnergy;
    state.objective = keepProgress
      ? 'Continue your expedition and recover the next shard set.'
      : 'Traverse the expedition map and collect shards.';
    state.player = { lane: laneCenterIndex, y: 0, jump: 0, sliding: 0, invincible: 0, expression: 'run', expressionTimer: 0 };
    state.items = [];
    state.events = [];
    state.hintsUsed = 0;
    state.message = keepProgress ? 'New level started. Hearts reset to 3.' : 'Go!';
    state.difficulty = 1 + state.progressLevel * 0.45;
    state.distance = 0;
    state.regionIndex = characterRegionMap[selectedCharacter] ?? 0;
    state.spawnTimer = 0;
    state.spawnPattern = null;
    state.spawnPatternStep = 0;
    state.lastSpawnLane = laneCenterIndex;
    state.fragmentTimer = 7;
    state.continueFromLevelUnlock = false;
    puzzleState.pendingAdvance = null;
    puzzleState.pendingTreasure = null;
    puzzleState.pendingHeartRevive = null;
    puzzleState.activeCorePuzzleId = null;
    closeModal(puzzleModal);
    setCharacterSelectionOpen(false);
    setLanding(false);
    setGameplayChrome(true);
    applyRegionThreeTheme(regions[state.regionIndex]);
    syncAudioToRegion();
    syncHud();
    syncPlaybackButton();
  }

  function hasSeenWalkthrough() {
    return globalThis.localStorage.getItem(WALKTHROUGH_KEY) === '1';
  }

  function markWalkthroughSeen() {
    globalThis.localStorage.setItem(WALKTHROUGH_KEY, '1');
  }

  function launchRunFromStartButton(keepProgress = false) {
    resetGame({ keepProgress });
  }

  function syncPlaybackButton() {
    if (!startBtn) {
      return;
    }
    const shouldShowPlay = !state.running || state.ended || state.paused || state.hungerPaused;
    startBtn.innerHTML = shouldShowPlay
      ? '<span class="icon-play"></span>'
      : '<span class="icon-pause"></span>';
    startBtn.setAttribute('aria-label', shouldShowPlay ? 'Play run' : 'Pause run');
    startBtn.title = shouldShowPlay ? 'Play' : 'Pause';
  }

  function hydrateWalkthroughStep() {
    const step = walkthroughSteps[walkthroughIndex];
    if (!step) {
      return;
    }
    if (walkthroughTitle) walkthroughTitle.textContent = step.title;
    if (walkthroughText) walkthroughText.textContent = step.text;
    if (walkthroughVisual) {
      walkthroughVisual.innerHTML = '';
      if (Array.isArray(step.visuals) && step.visuals.length) {
        step.visuals.forEach((visual) => {
          const chip = document.createElement('div');
          chip.className = 'walk-chip';
          chip.innerHTML = `<span class="walk-icon ${visual.kind}">${visual.icon}</span><span>${visual.label}</span>`;
          walkthroughVisual.appendChild(chip);
        });
      }
    }
    if (walkthroughStep) walkthroughStep.textContent = `Step ${walkthroughIndex + 1}/${walkthroughSteps.length}`;
    const onLastStep = walkthroughIndex === walkthroughSteps.length - 1;
    if (walkthroughNextBtn) walkthroughNextBtn.style.display = onLastStep ? 'none' : '';
    if (walkthroughBeginBtn) walkthroughBeginBtn.style.display = onLastStep ? '' : 'none';
  }

  function openWalkthrough() {
    walkthroughIndex = 0;
    hydrateWalkthroughStep();
    if (!walkthroughModal) {
      launchRunFromStartButton(false);
      return;
    }
    walkthroughModal.classList.add('open');
    walkthroughModal.setAttribute('aria-hidden', 'false');
  }

  function closeWalkthroughAndStart() {
    closeModal(walkthroughModal);
    markWalkthroughSeen();
    launchRunFromStartButton(false);
  }

  function onStartButtonPressed(keepProgress = false) {
    ensureAudioStarted();
    if (state.pendingReviveOffer) {
      activateReviveOffer();
      return;
    }
    if (state.running && !state.ended) {
      togglePause();
      return;
    }
    if (!keepProgress && !state.running) {
      openWalkthrough();
      return;
    }
    launchRunFromStartButton(keepProgress);
  }

  function setLanding(open) {
    if (!landingOverlay) {
      return;
    }
    landingOverlay.classList.toggle('open', open);
    landingOverlay.setAttribute('aria-hidden', String(!open));
  }

  function setGameplayChrome(visible) {
    const display = visible ? '' : 'none';
    if (hudEl) hudEl.style.display = display;
    if (missionEl) missionEl.style.display = display;
    if (dockEl) dockEl.style.display = display;
    if (livesEl) livesEl.style.display = display;
    syncMobileControlVisibility();
  }

  function syncMobileControlVisibility() {
    if (!dockEl) {
      return;
    }
    const gameplayVisible = hudEl?.style.display !== 'none';
    const isMobileViewport = globalThis.matchMedia?.('(max-width: 720px)')?.matches;

    if (!isMobileViewport || !gameplayVisible) {
      dockEl.classList.remove('mobile-hidden');
      updateMobileMenuButton(false, false);
      return;
    }

    const hideDockDuringRun = state.running && !state.paused && !state.ended;
    dockEl.classList.toggle('mobile-hidden', hideDockDuringRun);
    updateMobileMenuButton(hideDockDuringRun, hideDockDuringRun);
  }

  function updateMobileMenuButton(visible, runningActive) {
    if (!mobileMenuBtn) {
      return;
    }
    if (!visible) {
      mobileMenuBtn.classList.remove('show', 'state-pause', 'state-resume');
      return;
    }

    mobileMenuBtn.classList.add('show');
    mobileMenuBtn.classList.toggle('state-pause', runningActive);
    mobileMenuBtn.classList.toggle('state-resume', !runningActive);
    const isResumeState = !runningActive;
    mobileMenuBtn.setAttribute('aria-label', isResumeState ? 'Resume run' : 'Pause and open menu');
    mobileMenuBtn.setAttribute('title', isResumeState ? 'Resume run' : 'Pause and open menu');
    if (mobileMenuIcon) {
      mobileMenuIcon.textContent = isResumeState ? '▶' : '⏸';
    }
  }

  function drawScoreToken(item) {
    const isBonus = item.type === 'scoreBonus';
    ctx.fillStyle = isBonus ? 'rgba(79, 214, 131, .95)' : 'rgba(233, 92, 92, .95)';
    ctx.beginPath();
    ctx.roundRect(-28, -16, 56, 32, 10);
    ctx.fill();
    ctx.strokeStyle = isBonus ? 'rgba(222, 255, 232, .9)' : 'rgba(255, 225, 225, .9)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#08110b';
    ctx.font = '700 14px Nunito';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${isBonus ? '+' : '-'}${item.value}`, 0, 1);
  }

  function drawTreasureOrb(item) {
    ctx.fillStyle = item.type === 'relic' ? palette.cyan : palette.orange;
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.paper;
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawBombHazard() {
    // Bomb icon for hazards.
    ctx.fillStyle = '#121317';
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255, 228, 186, .9)';
    ctx.fillRect(-2, -18, 4, 8);
    ctx.strokeStyle = 'rgba(255, 196, 96, .9)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -18);
    ctx.quadraticCurveTo(8, -26, 12, -18);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255, 126, 64, .8)';
    ctx.beginPath();
    ctx.arc(13, -18, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  function setCharacterSelectionOpen(open) {
    if (!characterPanel) {
      return;
    }
    if (open && !superModeEnabled && !isCharacterAvailableForCurrentLevel(selectedCharacter)) {
      const pair = getPairForLevel(state.progressLevel);
      selectedCharacter = pair.fast;
      state.regionIndex = characterRegionMap[selectedCharacter] ?? 0;
    }
    characterPanel.classList.toggle('open', open);
    characterPanel.setAttribute('aria-hidden', String(!open));
    if (open) {
      updateCharacterAvailability();
      refreshCharacterBio();
    }
  }

  function getSavedRuns() {
    try {
      const raw = globalThis.localStorage.getItem(RUNS_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveRunSnapshot() {
    const runs = getSavedRuns();
    runs.unshift({
      id: Date.now(),
      score: state.score,
      fragments: state.fragments,
      health: state.health,
      regionIndex: state.regionIndex,
      progressLevel: state.progressLevel,
      distance: state.distance,
      character: selectedCharacter,
      ts: new Date().toISOString()
    });
    globalThis.localStorage.setItem(RUNS_KEY, JSON.stringify(runs.slice(0, 8)));
  }

  function setSelectedCharacter(id) {
    if (!id || !characters[id]) {
      return;
    }
    if (!superModeEnabled && !isCharacterAvailableForCurrentLevel(id)) {
      const puzzleUnlockLevel = characters[id]?.puzzleUnlockLevel;
      if (Number.isInteger(puzzleUnlockLevel)) {
        pushMessage(`Unlock ${characters[id].name} by collecting 3 treasure chests in one run at level ${puzzleUnlockLevel + 1}.`);
        return;
      }
      const lvl = Math.max(0, Math.min(regions.length - 1, state.progressLevel));
      const pair = levelCharacterPairs[lvl] || levelCharacterPairs[0];
      pushMessage(`Level ${lvl + 1} uses ${characters[pair.fast].name} (fast) or ${characters[pair.slow].name} (slow).`);
      return;
    }
    selectedCharacter = id;
    syncAdminProgressToSelectedCharacter();
    state.regionIndex = characterRegionMap[selectedCharacter] ?? 0;
    applyRegionThreeTheme(regions[state.regionIndex]);
    syncAudioToRegion();
    characterButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.character === id));
    applyCharacterSelectionTheme();
    refreshCharacterBio();
  }

  function syncAdminProgressToSelectedCharacter() {
    if (!superModeEnabled || !characters[selectedCharacter]) {
      return;
    }
    const targetLevel = Math.max(0, Math.min(regions.length - 1, characters[selectedCharacter].unlockAt || 0));
    state.progressLevel = targetLevel;
    state.regionIndex = characterRegionMap[selectedCharacter] ?? targetLevel;
    puzzleState.pendingAdvance = null;
  }

  function applyCharacterSelectionTheme() {
    if (!characterTitleEl) {
      return;
    }
    const region = regions[state.regionIndex] || regions[0];
    characterTitleEl.style.setProperty('--terrain-top', region.top);
    characterTitleEl.style.setProperty('--terrain-bottom', region.bottom);
    characterTitleEl.style.setProperty('--terrain-accent', region.accent);
    characterTitleEl.textContent = `Choose Your Dasher - ${region.name}`;
  }

  function decorateCharacterButtons() {
    characterButtons.forEach((button) => {
      const id = button.dataset.character;
      const role = characters[id]?.role;
      if (!role) {
        return;
      }
      button.classList.toggle('role-fast', role === 'fast');
      button.classList.toggle('role-slow', role === 'slow');
      let pill = button.querySelector('.role-pill');
      if (!pill) {
        pill = document.createElement('span');
        pill.className = 'role-pill';
        button.appendChild(pill);
      }
      pill.textContent = role.toUpperCase();
    });
  }

  function getPairForLevel(level) {
    const safe = Math.max(0, Math.min(regions.length - 1, level));
    return levelCharacterPairs[safe] || levelCharacterPairs[0];
  }

  function isCharacterAvailableForCurrentLevel(id) {
    const pair = getPairForLevel(state.progressLevel);
    if (id === pair.fast || id === pair.slow) {
      return true;
    }
    const puzzleUnlockLevel = characters[id]?.puzzleUnlockLevel;
    if (!Number.isInteger(puzzleUnlockLevel)) {
      return false;
    }
    return state.progressLevel >= puzzleUnlockLevel && state.puzzleBankUnlocks[puzzleUnlockLevel];
  }

  function persistPuzzleBankUnlocks() {
    globalThis.localStorage.setItem(PUZZLE_BANK_UNLOCKS_KEY, JSON.stringify(state.puzzleBankUnlocks));
  }

  function unlockPuzzleBankCharactersForLevel(level) {
    if (state.puzzleBankUnlocks[level]) {
      return;
    }
    const unlockedIds = Object.keys(characters)
      .filter((id) => characters[id]?.puzzleUnlockLevel === level);
    if (!unlockedIds.length) {
      return;
    }
    state.puzzleBankUnlocks[level] = true;
    persistPuzzleBankUnlocks();
    const names = unlockedIds.map((id) => characters[id].name).join(', ');
    pushMessage(`Treasure scout milestone reached! New character unlocked: ${names}`);
  }

  function registerTreasureChestCollect(level) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    state.chestCollectsByLevelRun[safeLevel] = (state.chestCollectsByLevelRun[safeLevel] || 0) + 1;
    const chestCount = state.chestCollectsByLevelRun[safeLevel];
    if (!state.puzzleBankUnlocks[safeLevel] && chestCount >= 3) {
      unlockPuzzleBankCharactersForLevel(safeLevel);
    }
  }

  function registerPuzzleBankSolve(puzzle) {
    if (puzzleState.pendingAdvance || puzzleState.pendingTreasure) {
      return;
    }
    const level = getPuzzleDifficultyLevel();
    const puzzleId = turingPuzzles.indexOf(puzzle);
    if (puzzleId < 0) {
      return;
    }
    if (!Array.isArray(puzzleState.solvedByLevel[level])) {
      puzzleState.solvedByLevel[level] = [];
    }
    if (!puzzleState.solvedByLevel[level].includes(puzzleId)) {
      puzzleState.solvedByLevel[level].push(puzzleId);
    }
  }

  function getCurrentFoodSpec() {
    return characterFood[selectedCharacter] || characterFood.emu;
  }

  function getSpecialFoodForCharacter() {
    const role = characters[selectedCharacter]?.role || 'fast';
    if (role === 'slow') {
      return {
        id: 'slow-wide-lane-tonic',
        type: 'special',
        icon: '🍵',
        name: 'Wide-Lane Tonic',
        description: 'For 5 moves, slow dashers can access full lane width.',
        cost: 520,
        effect: 'slowFullWidth',
        moves: 5
      };
    }
    return {
      id: 'fast-efficiency-nectar',
      type: 'special',
      icon: '🧃',
      name: 'Efficiency Nectar',
      description: 'For 6 actions, fast dashers consume less energy.',
      cost: 560,
      effect: 'fastEfficiency',
      moves: 6
    };
  }

  function getFoodShopItemsForCharacter() {
    const food = getCurrentFoodSpec();
    return [
      {
        id: 'base-food',
        type: 'food',
        icon: food.icon || '🍽️',
        name: food.name,
        description: `Restores ${food.restore} energy when consumed.`,
        cost: food.cost
      },
      getSpecialFoodForCharacter()
    ];
  }

  function getCartForSelectedCharacter() {
    if (!state.foodCartByCharacter[selectedCharacter]) {
      state.foodCartByCharacter[selectedCharacter] = {};
    }
    return state.foodCartByCharacter[selectedCharacter];
  }

  function renderFoodShop() {
    if (!foodShopList || !foodCartSummary || !foodCheckoutBtn) {
      return;
    }
    const items = getFoodShopItemsForCharacter();
    const cart = getCartForSelectedCharacter();
    foodShopList.innerHTML = '';

    items.forEach((item) => {
      const qty = cart[item.id] || 0;
      const card = document.createElement('div');
      card.className = 'food-item-card';
      card.innerHTML = `
        <div class="food-icon">${item.icon}</div>
        <div class="food-meta">
          <div class="food-name">${item.name}</div>
          <div class="food-desc">${item.description}</div>
          <div class="food-cost">Cost ${item.cost}</div>
        </div>
        <div class="food-qty">In cart: <strong>${qty}</strong></div>
        <div class="food-actions">
          <button class="food-add" data-item="${item.id}">Add</button>
          <button class="food-remove" data-item="${item.id}" ${qty <= 0 ? 'disabled' : ''}>Remove</button>
        </div>`;
      foodShopList.appendChild(card);
    });

    const total = items.reduce((sum, item) => sum + (cart[item.id] || 0) * item.cost, 0);
    const totalCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    foodCartSummary.textContent = `Cart: ${totalCount} items | Total: ${total} score | Balance: ${state.score}`;
    foodCheckoutBtn.disabled = totalCount === 0;
    if (totalCount > 0 && total > state.score) {
      foodCheckoutBtn.textContent = `Need +${total - state.score}`;
    } else {
      foodCheckoutBtn.textContent = 'Checkout';
    }

    foodShopList.querySelectorAll('.food-add').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.item;
        cart[id] = (cart[id] || 0) + 1;
        renderFoodShop();
      });
    });

    foodShopList.querySelectorAll('.food-remove').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.item;
        cart[id] = Math.max(0, (cart[id] || 0) - 1);
        if (cart[id] === 0) {
          delete cart[id];
        }
        renderFoodShop();
      });
    });
  }

  function openFoodShop() {
    if (!foodShopModal) {
      return;
    }
    hideHungerModal();
    renderFoodShop();
    foodShopModal.classList.add('open');
    foodShopModal.setAttribute('aria-hidden', 'false');
  }

  function showHungerModal() {
    if (!hungerModal) {
      return;
    }
    state.hungerModalDismissedUntil = 0;
    if (hungerText && characters[selectedCharacter]) {
      const currentName = characters[selectedCharacter].name;
      hungerText.textContent = `Oho! ${currentName} is hungry. You are out of food and energy is too low. Collect score tokens, open Food Cart, and buy supplies to continue.`;
    }
    hungerModal.classList.add('open');
    hungerModal.setAttribute('aria-hidden', 'false');
  }

  function hideHungerModal(manualDismiss = false) {
    if (!hungerModal) {
      return;
    }
    if (manualDismiss) {
      state.hungerModalDismissedUntil = Date.now() + HUNGER_MODAL_RESURFACE_DELAY_MS;
    }
    hungerModal.classList.remove('open');
    hungerModal.setAttribute('aria-hidden', 'true');
  }

  function checkoutFoodCart() {
    const cart = getCartForSelectedCharacter();
    const items = getFoodShopItemsForCharacter();
    const total = items.reduce((sum, item) => sum + (cart[item.id] || 0) * item.cost, 0);
    if (total <= 0) {
      pushMessage('Your cart is empty.');
      return;
    }
    if (total > state.score) {
      pushMessage(`Need ${total - state.score} more score for this cart.`);
      return;
    }

    state.score -= total;
    let purchasedFoodQty = 0;
    items.forEach((item) => {
      const qty = cart[item.id] || 0;
      if (!qty) {
        return;
      }
      if (item.type === 'food') {
        state.foodStocks[selectedCharacter] = (state.foodStocks[selectedCharacter] || 0) + qty;
        purchasedFoodQty += qty;
      } else if (item.effect === 'slowFullWidth') {
        state.activeBoostMoves.slowFullWidth += item.moves * qty;
      } else if (item.effect === 'fastEfficiency') {
        state.activeBoostMoves.fastEfficiency += item.moves * qty;
      }
    });

    state.foodCartByCharacter[selectedCharacter] = {};
    renderFoodShop();
    closeModal(foodShopModal);
    syncHud();
    const foodCount = state.foodStocks[selectedCharacter] || 0;
    pushMessage(`Purchased. +${purchasedFoodQty} food added (stock ${foodCount}).`);
  }

  function getMovementLaneBounds() {
    const role = characters[selectedCharacter]?.role || 'fast';
    if (role === 'slow' && state.activeBoostMoves.slowFullWidth > 0) {
      return [0, lanes.length - 1];
    }
    return role === 'slow' ? [2, 6] : [0, lanes.length - 1];
  }

  function getEnergyCost(action) {
    const food = getCurrentFoodSpec();
    let base = food.moveCost;
    if (action === 'jump') {
      base = food.jumpCost;
    } else if (action === 'slide') {
      base = food.slideCost;
    }
    const role = characters[selectedCharacter]?.role || 'fast';
    const roleMult = role === 'fast' ? 1.16 : 0.82;
    const tier = Math.max(0, characters[selectedCharacter]?.unlockAt || 0);
    const tierMult = Math.max(0.75, 1 - tier * 0.05);
    let cost = Math.max(8, Math.round(base * getEnergyScaleForLevel() * roleMult * tierMult));
    if (role === 'fast' && state.activeBoostMoves.fastEfficiency > 0) {
      cost = Math.max(6, Math.round(cost * 0.55));
    }
    return cost;
  }

  function consumeFoodFromStock() {
    const stock = state.foodStocks[selectedCharacter] || 0;
    const food = getCurrentFoodSpec();
    if (stock <= 0) {
      return false;
    }
    state.foodStocks[selectedCharacter] = stock - 1;
    state.energy = Math.min(state.maxEnergy, state.energy + food.restore);
    pushMessage(`${food.name} used: +${food.restore} energy`);
    syncHud();
    return true;
  }

  function spendEnergyForAction(action) {
    const cost = getEnergyCost(action);
    if (state.energy < cost && !consumeFoodFromStock()) {
      pushMessage('Out of energy. Buy food with points (F).');
      return false;
    }
    if (state.energy < cost) {
      pushMessage('Still low energy. Buy more food.');
      return false;
    }
    state.energy = Math.max(0, state.energy - cost);
    const role = characters[selectedCharacter]?.role || 'fast';
    if (role === 'fast' && state.activeBoostMoves.fastEfficiency > 0) {
      state.activeBoostMoves.fastEfficiency = Math.max(0, state.activeBoostMoves.fastEfficiency - 1);
    }
    if (role === 'slow' && action === 'move' && state.activeBoostMoves.slowFullWidth > 0) {
      state.activeBoostMoves.slowFullWidth = Math.max(0, state.activeBoostMoves.slowFullWidth - 1);
    }
    syncHud();
    return true;
  }

  function hasEnoughEnergyForAnyAction() {
    const minCost = Math.min(getEnergyCost('move'), getEnergyCost('jump'), getEnergyCost('slide'));
    return state.energy >= minCost;
  }

  function shouldPauseForHunger() {
    const stock = state.foodStocks[selectedCharacter] || 0;
    return !hasEnoughEnergyForAnyAction() && stock <= 0;
  }

  function buyFoodForCurrentCharacter() {
    openFoodShop();
  }

  function getEnergyScaleForLevel() {
    return Math.max(0.5, 1.25 - state.progressLevel * 0.18);
  }

  function refreshCharacterBio() {
    if (!characterPower || !characters[selectedCharacter]) {
      return;
    }
    const current = characters[selectedCharacter];
    const food = getCurrentFoodSpec();
    const [minLane, maxLane] = getMovementLaneBounds();
    const laneMode = current.role === 'slow' ? `Restricted lanes ${minLane + 1}-${maxLane + 1}` : 'Full-width lanes';
    const energyScale = getEnergyScaleForLevel();
    const puzzleUnlockLevel = Number.isInteger(current.puzzleUnlockLevel) ? current.puzzleUnlockLevel + 1 : null;
    characterPower.innerHTML = `
      <div class="spec-card role-${current.role}">
        <div class="spec-head">
          <span class="spec-name">${current.name}</span>
          <span class="spec-role">${current.role.toUpperCase()}</span>
        </div>
        <div class="spec-grid">
          <div class="spec-item"><span>Power</span><strong>${current.power}</strong></div>
          <div class="spec-item"><span>Food</span><strong>${food.name}</strong></div>
          <div class="spec-item"><span>Food Cost</span><strong>${food.cost}</strong></div>
          <div class="spec-item"><span>Food Restore</span><strong>${food.restore}</strong></div>
          <div class="spec-item"><span>Energy Move</span><strong>${getEnergyCost('move')}</strong></div>
          <div class="spec-item"><span>Energy Jump</span><strong>${getEnergyCost('jump')}</strong></div>
          <div class="spec-item"><span>Energy Slide</span><strong>${getEnergyCost('slide')}</strong></div>
          <div class="spec-item"><span>Lanes</span><strong>${laneMode}</strong></div>
          <div class="spec-item"><span>Level Scale</span><strong>x${energyScale.toFixed(2)}</strong></div>
          <div class="spec-item"><span>Special Unlock</span><strong>${puzzleUnlockLevel ? `Collect 3 chests in one run at Level ${puzzleUnlockLevel}` : 'Standard'}</strong></div>
        </div>
        <a id="characterWikiLink" class="small character-wiki-link" href="${current.wikiUrl || 'https://en.wikipedia.org/wiki/Australian_fauna'}" target="_blank" rel="noopener noreferrer">Learn more about ${current.name}</a>
      </div>`;
    characterPower.style.height = 'auto';
    characterPower.style.height = `${characterPower.scrollHeight}px`;
  }

  function resumeSavedRun(run) {
    ensureAudioStarted();
    resetGame();
    state.score = run.score || 0;
    state.fragments = run.fragments || 0;
    state.health = Math.max(1, Math.min(state.maxLives, run.health || 3));
    state.regionIndex = Math.max(0, Math.min(regions.length - 1, run.regionIndex || 0));
    state.progressLevel = Math.max(state.progressLevel, Math.min(regions.length - 1, run.progressLevel ?? state.regionIndex));
    state.distance = run.distance || state.regionIndex * 145;
    setSelectedCharacter(run.character || 'emu');
    state.message = 'Resumed previous expedition.';
    state.objective = `Continue through ${regions[state.regionIndex].name}`;
    applyRegionThreeTheme(regions[state.regionIndex]);
    syncAudioToRegion();
    syncHud();
    closeModal(pastGamesModal);
    setLanding(false);
    setGameplayChrome(true);
    setCharacterSelectionOpen(false);
  }

  function renderPastGames() {
    if (!pastGamesList) {
      return;
    }
    const runs = getSavedRuns();
    if (!runs.length) {
      pastGamesList.innerHTML = '<div class="panel-item"><span>No saved runs yet.</span><strong>Play one run first</strong></div>';
      return;
    }

    pastGamesList.innerHTML = '';
    runs.forEach((run) => {
      const row = document.createElement('div');
      row.className = 'panel-item';

      const info = document.createElement('span');
      const regionName = regions[Math.min(regions.length - 1, run.regionIndex || 0)].name;
      info.textContent = `${regionName} | Score ${run.score} | Shards ${run.fragments}/7`;

      const btn = document.createElement('button');
      btn.textContent = 'Resume';
      btn.className = 'modal-close';
      btn.addEventListener('click', () => resumeSavedRun(run));

      row.appendChild(info);
      row.appendChild(btn);
      pastGamesList.appendChild(row);
    });
  }

  function syncHud() {
    scoreEl.textContent = state.score;
    if (energyEl) {
      energyEl.textContent = `${Math.round(state.energy)}/${Math.round(state.maxEnergy)}`;
    }
    if (foodEl) {
      foodEl.textContent = String(state.foodStocks[selectedCharacter] || 0);
    }
    fragmentEl.textContent = `${state.fragments}/7`;
    objectiveEl.textContent = state.objective;
    messageEl.textContent = state.message;
    if (reviveBtn) {
      const canReviveNow = Boolean(state.pendingReviveOffer);
      reviveBtn.style.display = canReviveNow ? 'grid' : 'none';
      reviveBtn.disabled = !canReviveNow;
      reviveBtn.classList.toggle('revive-ready', canReviveNow);
      reviveBtn.title = canReviveNow ? 'Use revive option' : 'Revive';
      reviveBtn.setAttribute('aria-label', canReviveNow ? 'Use revive option' : 'Revive unavailable');
    }
    renderLives();
    updateCharacterAvailability();
    refreshCharacterBio();
    syncMobileControlVisibility();
  }

  function renderLives() {
    if (!livesEl) {
      return;
    }
    livesEl.innerHTML = '';
    for (let i = 0; i < state.maxLives; i += 1) {
      const heart = document.createElement('span');
      heart.className = `heart${i < state.health ? '' : ' off'}`;
      heart.textContent = '❤';
      livesEl.appendChild(heart);
    }
  }

  function updateCharacterAvailability() {
    decorateCharacterButtons();
    applyCharacterSelectionTheme();
    characterButtons.forEach((button) => {
      const id = button.dataset.character;
      if (!id || !characters[id]) {
        return;
      }
      const isUnlocked = superModeEnabled || isCharacterAvailableForCurrentLevel(id);
      button.classList.remove('terrain-hidden');
      button.classList.toggle('locked', !isUnlocked);
      button.setAttribute('aria-disabled', String(!isUnlocked));
      if (isUnlocked) {
        button.title = superModeEnabled
          ? `${characters[id].power} (Super Mode unlocked)`
          : `${characters[id].power}`;
      } else {
        const puzzleUnlockLevel = characters[id].puzzleUnlockLevel;
        if (Number.isInteger(puzzleUnlockLevel)) {
          button.title = `Unlock by collecting 3 treasure chests in one run at level ${puzzleUnlockLevel + 1}`;
        } else {
          button.title = `Available in level ${characters[id].unlockAt + 1}`;
        }
      }
    });
  }

  function pushMessage(text) {
    state.message = text;
    syncHud();
    clearTimeout(pushMessage._t);
    pushMessage._t = setTimeout(() => {
      if (!state.ended) {
        state.message = '';
        syncHud();
      }
    }, 1500);
  }

  function addScore(amount) {
    state.score += amount;
    syncHud();
  }

  function getLevelClearBonus(nextLevel) {
    return 500 * (2 ** Math.max(0, nextLevel - 1));
  }

  function endGame(victory = false) {
    saveRunSnapshot();
    state.paused = false;
    state.pendingReviveOffer = null;

    // Hard safety: level-unlock puzzle can only start after collecting all shards.
    if (victory && state.fragments < 7) {
      victory = false;
    }

    if (victory && state.progressLevel < regions.length - 1) {
      const nextLevel = state.progressLevel + 1;
      state.running = false;
      state.ended = false;
      const levelBonus = getLevelClearBonus(nextLevel);
      const unlockedNames = Object.keys(characters)
        .filter((id) => characters[id].unlockAt === nextLevel && !Number.isInteger(characters[id].puzzleUnlockLevel))
        .map((id) => characters[id].name)
        .join(', ');

      // Hard gate: solve one puzzle to unlock next level transition.
      puzzleState.pendingAdvance = {
        nextLevel,
        levelBonus,
        unlockedNames
      };

      setLanding(false);
      setGameplayChrome(false);
      setCharacterSelectionOpen(false);
      if (puzzleModal) {
        puzzleModal.classList.add('open');
        puzzleModal.setAttribute('aria-hidden', 'false');
      }
      if (puzzleTerrain) {
        puzzleTerrain.textContent = `${regions[nextLevel].name} Unlock Puzzle`;
      }
      hydratePuzzlePanel();
      if (puzzleStatus) {
        puzzleStatus.textContent = 'Solve this puzzle to unlock the next level.';
      }
      state.message = 'Level clear! Solve the puzzle to continue.';
      syncHud();
      syncPlaybackButton();
      return;
    }

    state.running = false;
    state.ended = true;
    state.objective = victory ? 'Sunrise restored. The expedition is complete.' : 'The night won this run. Try again.';
    state.message = victory ? 'Victory!' : 'Game Over';
    syncHud();
    syncPlaybackButton();
  }

  function spawnItem() {
    const roll = Math.random();
    const lane = getNextSpawnLane();
    const shardDeficit = Math.max(0, 7 - state.fragments);
    const fragChance = Math.max(.26, .38 - state.progressLevel * .014 - shardDeficit * .008);
    const treasureChestChance = Math.min(0.09, 0.04 + state.progressLevel * 0.01);
    const plus100Chance = 0.16;
    const plus500Chance = 0.08;
    const minus100Chance = 0.12;
    const minus500Chance = 0.05;

    if (roll < fragChance) {
      // Shards only: reward values stay simple (+100 / +500).
      const shardValue = Math.random() < 0.7 ? 100 : 500;
      state.items.push({ type: 'fragment', lane, xNorm: 0.08 + Math.random() * 0.84, z: 1, value: shardValue });
      return;
    }

    if (roll < fragChance + treasureChestChance) {
      const bonusFood = Math.max(1, Math.min(4, 1 + Math.floor(state.progressLevel / 2) + Math.floor(Math.random() * 2)));
      state.items.push({ type: 'treasureChest', lane, xNorm: 0.12 + Math.random() * 0.76, z: 1, foodReward: bonusFood });
      return;
    }

    if (roll < fragChance + treasureChestChance + plus100Chance) {
      state.items.push({ type: 'scoreBonus', lane, xNorm: 0.1 + Math.random() * 0.8, z: 1, value: 100 });
      return;
    }

    if (roll < fragChance + treasureChestChance + plus100Chance + plus500Chance) {
      state.items.push({ type: 'scoreBonus', lane, xNorm: 0.1 + Math.random() * 0.8, z: 1, value: 500 });
      return;
    }

    if (roll < fragChance + treasureChestChance + plus100Chance + plus500Chance + minus100Chance) {
      state.items.push({ type: 'scorePenalty', lane, xNorm: 0.1 + Math.random() * 0.8, z: 1, value: 100 });
      return;
    }

    if (roll < fragChance + treasureChestChance + plus100Chance + plus500Chance + minus100Chance + minus500Chance) {
      state.items.push({ type: 'scorePenalty', lane, xNorm: 0.1 + Math.random() * 0.8, z: 1, value: 500 });
      return;
    }

    // Bombs only: penalty values stay simple (-100 / -500).
    const bombPenalty = Math.random() < 0.75 ? 100 : 500;
    state.items.push({ type: 'obstacle', lane, z: 1, hit: 1, penalty: bombPenalty });

    // Occasionally spawn a second hazard to force quick lane commitment.
    if (Math.random() < Math.min(0.46, 0.2 + state.progressLevel * 0.06)) {
      const [minLane, maxLane] = getMovementLaneBounds();
      const side = Math.random() < 0.5 ? -1 : 1;
      const lane2 = Math.max(minLane, Math.min(maxLane, lane + side));
      if (lane2 !== lane) {
        state.items.push({ type: 'obstacle', lane: lane2, z: 1.12, hit: 1, penalty: bombPenalty });
      }
    }
  }

  function getNextSpawnLane() {
    const [minLane, maxLane] = getMovementLaneBounds();
    if (!state.spawnPattern || state.spawnPatternStep >= state.spawnPattern.length) {
      state.spawnPattern = templeLanePatterns[Math.floor(Math.random() * templeLanePatterns.length)];
      state.spawnPatternStep = 0;
    }
    const profileOffset = Math.round(getTrackCenterDriftNorm(0.24) / laneSpread * 0.35);
    const baseCenter = Math.max(minLane, Math.min(maxLane, laneCenterIndex + profileOffset));
    const nextOffset = state.spawnPattern[state.spawnPatternStep] || 0;
    state.spawnPatternStep += 1;

    let lane = Math.max(minLane, Math.min(maxLane, baseCenter + nextOffset));
    if (lane === state.lastSpawnLane && Math.random() < 0.58) {
      lane += Math.random() < 0.5 ? -1 : 1;
      lane = Math.max(minLane, Math.min(maxLane, lane));
    }
    state.lastSpawnLane = lane;
    return lane;
  }

  function shiftLane(dir) {
    const [minLane, maxLane] = getMovementLaneBounds();
    const nextLane = Math.max(minLane, Math.min(maxLane, state.player.lane + dir));
    if (nextLane === state.player.lane) {
      return;
    }
    if (!spendEnergyForAction('move')) {
      return;
    }
    state.player.lane = nextLane;
  }

  function jump() {
    if (state.player.jump === 0 && state.player.sliding === 0) {
      if (!spendEnergyForAction('jump')) {
        return;
      }
      state.player.jump = .9;
      state.player.invincible = Math.max(state.player.invincible, .3);
      setExpression('jump', 0.5);
      playSfx('jump');
      pushMessage('Jump!');
    }
  }

  function slide() {
    if (state.player.sliding === 0) {
      if (!spendEnergyForAction('slide')) {
        return;
      }
      state.player.sliding = .75;
      pushMessage('Slide!');
    }
  }

  function requestRoadEvent() {
    if (clueModal) {
      clueModal.classList.add('open');
      clueModal.setAttribute('aria-hidden', 'false');
      if (clueTerrain) {
        clueTerrain.textContent = `${regions[state.regionIndex].name} Clue`;
      }
      if (clueText) {
        clueText.textContent = [
          'Two ancient stone pillars stand at the Sun Gate. Legend says the gate only opens when both the Dawn and Dusk pillars are lit together. The old keepers\' riddle: "neither alone, but both as one."',
          'A firefly elder guards the Rune Tree. She whispers: "Only the middle branches remember the old light. The outer ones have forgotten." Two branches. That\'s all you need.',
          'The Servo pump house has been dry for decades. Someone taped a note to the fuse box: "A is dead — don\'t touch it. Run the relay from B through to F but skip D. In that order." Old electrician wisdom.',
          'The lighthouse keeper\'s logbook washed ashore. The last entry: "Anchor, skip Buoy (it\'s gone), Coral, Depth, skip Echo, end at Fog. If you read this — please, light the beacon."',
          'The radio tower\'s signal has looped for 73 years. A Tasmanian physicist taped a diagram to the base: "Four switches break the loop. Skip the ones inside it or you\'ll just restart it. A, then jump to D, E, F."'
        ][state.regionIndex] || 'Follow the clue and recover the next fragment.';
      }
      return;
    }

    const events = [
      { title: 'Trail Boost', description: 'A burst of speed ripples ahead.', reward_tokens: 1 },
      { title: 'Map Cache', description: 'A bright charge lifts your run.', reward_tokens: 2 },
      { title: 'Signal Drift', description: 'A weak signal clears the path.', reward_tokens: 1 }
    ];
    const fallback = events[Math.floor(Math.random() * events.length)];
    state.objective = fallback.description;
    pushMessage(fallback.title + ' (local)');
    syncHud();
  }

  function requestHint() {
    const getPuzzleTerrainLabel = () => {
      if (puzzleState.pendingAdvance) {
        return `${regions[state.regionIndex].name} Unlock Puzzle`;
      }
      if (puzzleState.pendingTreasure) {
        return `${regions[puzzleState.pendingTreasure.level].name} Treasure Case`;
      }
      if (puzzleState.pendingHeartRevive) {
        return `${regions[puzzleState.pendingHeartRevive.level].name} Heart Revival Challenge`;
      }
      return `${regions[state.regionIndex].name} Puzzle Core`;
    };

    if (puzzleModal) {
      puzzleModal.classList.add('open');
      puzzleModal.setAttribute('aria-hidden', 'false');
      if (puzzleTerrain) {
        puzzleTerrain.textContent = getPuzzleTerrainLabel();
      }
      hydratePuzzlePanel();
      return;
    }

    revealPuzzleHint();
  }

  function registerHintUsage() {
    state.hintsUsed += 1;
    if (state.hintsUsed % 3 !== 0) {
      const left = 3 - (state.hintsUsed % 3);
      pushMessage(`Hint used (${state.hintsUsed}). ${left} more for +1 heart.`);
      return;
    }

    if (state.health < state.maxLives) {
      state.health = Math.min(state.maxLives, state.health + 1);
      pushMessage(`Hint streak! +1 heart (${state.hintsUsed} hints used)`);
      syncHud();
      return;
    }

    pushMessage(`Hint streak reached (${state.hintsUsed}) but hearts are full.`);
  }

  function getPuzzleDifficultyLevel() {
    if (superModeEnabled && characters[selectedCharacter]) {
      return Math.max(0, Math.min(regions.length - 1, characters[selectedCharacter].unlockAt || 0));
    }
    return Math.max(0, Math.min(regions.length - 1, state.progressLevel));
  }

  function getPuzzlePoolForLevel(level) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    const ids = levelPuzzlePools[safeLevel] || levelPuzzlePools[0] || [];
    const pool = ids.map((id) => turingPuzzles[id]).filter(Boolean);
    return pool;
  }

  function getPuzzlePoolIdsForLevel(level) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    const ids = levelPuzzlePools[safeLevel] || levelPuzzlePools[0] || [];
    return ids.filter((id) => Number.isInteger(id) && turingPuzzles[id]);
  }

  function getSolvedPuzzleIdsForLevel(level) {
    if (!Array.isArray(puzzleState.solvedByLevel[level])) {
      puzzleState.solvedByLevel[level] = [];
    }
    return puzzleState.solvedByLevel[level];
  }

  function getAdvancePuzzlePoolIdsForLevel(level) {
    const ids = getPuzzlePoolIdsForLevel(level);
    return ids.length ? [ids[0]] : [];
  }

  function getHeartPuzzlePoolIdsForLevel(level) {
    const ids = getPuzzlePoolIdsForLevel(level);
    if (ids.length > 1) {
      return ids.slice(1);
    }
    return ids;
  }

  function getHeartReviveProgress(level) {
    const poolIds = getHeartPuzzlePoolIdsForLevel(level);
    const solvedIds = getSolvedPuzzleIdsForLevel(level);
    const solvedCount = poolIds.filter((id) => solvedIds.includes(id)).length;
    return { poolIds, solvedCount, totalCount: poolIds.length, solvedAll: solvedCount >= poolIds.length };
  }

  function pickNextHeartRevivePuzzleId(level) {
    const poolIds = getHeartPuzzlePoolIdsForLevel(level);
    const solvedIds = getSolvedPuzzleIdsForLevel(level);
    const unsolved = poolIds.filter((id) => !solvedIds.includes(id) && !puzzleState.usedCorePuzzleIds.includes(id));
    if (!unsolved.length) {
      return null;
    }
    const puzzleId = unsolved[Math.floor(Math.random() * unsolved.length)];
    puzzleState.activeCorePuzzleId = puzzleId;
    if (!puzzleState.usedCorePuzzleIds.includes(puzzleId)) {
      puzzleState.usedCorePuzzleIds.push(puzzleId);
    }
    return puzzleId;
  }

  function pickNextAdvancePuzzleId(level) {
    const levelIds = getPuzzlePoolIdsForLevel(level);
    let candidates = getAdvancePuzzlePoolIdsForLevel(level)
      .filter((id) => !puzzleState.usedCorePuzzleIds.includes(id));
    if (!candidates.length) {
      candidates = levelIds.filter((id) => !puzzleState.usedCorePuzzleIds.includes(id));
    }
    if (!candidates.length) {
      return null;
    }
    const puzzleId = candidates[Math.floor(Math.random() * candidates.length)];
    puzzleState.activeCorePuzzleId = puzzleId;
    puzzleState.usedCorePuzzleIds.push(puzzleId);
    return puzzleId;
  }

  function beginHeartReviveChallenge(level) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    if (state.heartReviveUsedByLevel[safeLevel]) {
      return false;
    }

    state.pendingReviveOffer = null;
    state.running = true;
    state.ended = false;

    const progress = getHeartReviveProgress(safeLevel);
    if (progress.solvedAll) {
      state.heartReviveUsedByLevel[safeLevel] = true;
      state.health = state.maxLives;
      state.paused = false;
      state.hungerPaused = false;
      pushMessage(`Heart revival triggered. ${state.maxLives} hearts restored.`);
      syncHud();
      syncPlaybackButton();
      return true;
    }

    puzzleState.pendingHeartRevive = { level: safeLevel };
    puzzleState.pendingTreasure = null;
    puzzleState.pendingAdvance = null;
    puzzleState.activeCorePuzzleId = null;
    state.paused = true;
    state.hungerPaused = false;

    if (puzzleModal) {
      puzzleModal.classList.add('open');
      puzzleModal.setAttribute('aria-hidden', 'false');
    }
    if (puzzleTerrain) {
      puzzleTerrain.textContent = `${regions[safeLevel].name} Heart Revival Challenge`;
    }
    hydratePuzzlePanel();
    if (puzzleStatus) {
      const left = Math.max(0, progress.totalCount - progress.solvedCount);
      puzzleStatus.textContent = `Hearts depleted. Solve all level puzzles to revive. ${left} left.`;
    }
    state.message = 'Hearts at zero. Solve the heart revival challenge to continue.';
    syncHud();
    syncPlaybackButton();
    return true;
  }

  function activateReviveOffer() {
    if (!state.pendingReviveOffer) {
      return false;
    }
    const level = state.pendingReviveOffer.level;
    state.pendingReviveOffer = null;
    const started = beginHeartReviveChallenge(level);
    if (!started) {
      endGame(false);
      return false;
    }
    return true;
  }

  function pickNextCorePuzzleId(level) {
    const levelIds = getHeartPuzzlePoolIdsForLevel(level);
    const candidates = levelIds.filter((id) => !puzzleState.usedCorePuzzleIds.includes(id));

    if (!candidates.length) {
      return null;
    }

    const puzzleId = candidates[Math.floor(Math.random() * candidates.length)];
    puzzleState.usedCorePuzzleIds.push(puzzleId);
    puzzleState.activeCorePuzzleId = puzzleId;
    return puzzleId;
  }

  function getTreasurePoolForLevel(level) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    const ids = levelTreasurePools[safeLevel] || levelTreasurePools[0] || [];
    const pool = ids.map((id) => treasurePuzzles[id]).filter(Boolean);
    return pool;
  }

  function chooseTreasurePuzzleId(level) {
    const pool = getTreasurePoolForLevel(level);
    const poolIds = pool
      .map((puzzle) => treasurePuzzles.indexOf(puzzle))
      .filter((id) => id >= 0);

    let candidates = poolIds.filter((id) => !puzzleState.seenTreasureIds.includes(id));
    if (!candidates.length) {
      return null;
    }

    if (candidates.length > 1 && Number.isInteger(puzzleState.lastTreasureId)) {
      const nonRepeat = candidates.filter((id) => id !== puzzleState.lastTreasureId);
      if (nonRepeat.length) {
        candidates = nonRepeat;
      }
    }

    const puzzleId = candidates[Math.floor(Math.random() * candidates.length)];
    if (!puzzleState.seenTreasureIds.includes(puzzleId)) {
      puzzleState.seenTreasureIds.push(puzzleId);
    }
    puzzleState.lastTreasureId = puzzleId;
    return puzzleId;
  }

  function openTreasurePuzzleFromChest(item) {
    const rewardFood = Math.max(1, item.foodReward || 1);
    const level = getPuzzleDifficultyLevel();
    registerTreasureChestCollect(level);
    if (!treasurePuzzles.length) {
      state.foodStocks[selectedCharacter] = (state.foodStocks[selectedCharacter] || 0) + rewardFood;
      pushMessage(`Supply chest opened! +${rewardFood} food for ${characters[selectedCharacter].name}.`);
      syncHud();
      return;
    }

    const puzzleId = chooseTreasurePuzzleId(level);
    if (!Number.isInteger(puzzleId)) {
      state.foodStocks[selectedCharacter] = (state.foodStocks[selectedCharacter] || 0) + rewardFood;
      pushMessage(`Chest opened. Treasure puzzle bank exhausted this session, +${rewardFood} food granted.`);
      syncHud();
      return;
    }
    puzzleState.pendingTreasure = { level, puzzleId, foodReward: rewardFood };
    state.paused = true;
    state.hungerPaused = false;

    if (puzzleModal) {
      puzzleModal.classList.add('open');
      puzzleModal.setAttribute('aria-hidden', 'false');
    }
    if (puzzleTerrain) {
      puzzleTerrain.textContent = `${regions[level].name} Treasure Case`;
    }
    hydratePuzzlePanel();
    if (puzzleStatus) {
      puzzleStatus.textContent = 'Treasure chest found. Solve this case to claim food supplies.';
    }
    pushMessage('Treasure chest found! Solve the case to claim supplies.');
    syncPlaybackButton();
  }

  function getHintLimitForLevel(level) {
    return Math.max(1, 3 - Math.floor(level / 2));
  }

  function getHintPoolForPuzzle(puzzle) {
    const pool = Array.isArray(puzzle?.hints)
      ? puzzle.hints.filter((hint) => typeof hint === 'string' && hint.trim().length > 0)
      : [];
    return pool.length ? pool : ['Think carefully about the clue words.'];
  }

  function getHintLimitForPuzzle(puzzle, level) {
    return Math.max(1, Math.min(getHintLimitForLevel(level), getHintPoolForPuzzle(puzzle).length));
  }

  function formatHintCountLabel(count) {
    return count === 1 ? '1 hint' : `${count} hints`;
  }

  function consumePuzzleHint(puzzle, level) {
    const pool = getHintPoolForPuzzle(puzzle);
    if (puzzleState.hintIndex >= pool.length) {
      return null;
    }
    const rawHint = pool[puzzleState.hintIndex];
    puzzleState.hintIndex += 1;
    return formatHintForLevel(rawHint, level);
  }

  function formatHintForLevel(text, level) {
    if (level <= 1) {
      return text;
    }
    if (level === 2) {
      return `Focus clue: ${text}`;
    }
    if (level === 3) {
      return `Cryptic clue: ${text.replace(/[aeiou]/gi, '•')}`;
    }
    const compact = text.split(' ').slice(0, 5).join(' ');
    return `Elite clue: ${compact}...`;
  }

  function revealPuzzleHint() {
    const puzzle = getCurrentPuzzle();
    if (!puzzle) {
      pushMessage('No unique puzzle left for this challenge.');
      return;
    }
    const level = getPuzzleDifficultyLevel();
    const hintLimit = getHintLimitForPuzzle(puzzle, level);
    if (puzzleState.hintsUsedThisPuzzle >= hintLimit) {
      if (puzzleStatus) {
        puzzleStatus.textContent = `No more hints for this puzzle at level ${level + 1}.`;
      }
      pushMessage(`Hint limit reached (${hintLimit}) for this level.`);
      return;
    }

    const hint = consumePuzzleHint(puzzle, level) || 'Think carefully about the puzzle rules.';
    puzzleState.hintsUsedThisPuzzle += 1;

    if (puzzleState.hintsUsedThisPuzzle >= hintLimit && !puzzleState.hintRewardGrantedThisPuzzle) {
      puzzleState.hintRewardGrantedThisPuzzle = true;
      if (state.health < state.maxLives) {
        state.health = Math.min(state.maxLives, state.health + 1);
        pushMessage(`All level hints used. +1 heart (${state.health}/${state.maxLives})`);
        syncHud();
      } else {
        pushMessage('All level hints used, but hearts are already full.');
      }
    }

    if (puzzleStatus) {
      const remaining = Math.max(0, hintLimit - puzzleState.hintsUsedThisPuzzle);
      puzzleStatus.textContent = hintLimit === 1
        ? hint
        : `${hint} (${formatHintCountLabel(remaining)} left)`;
    }
    pushMessage('Hint revealed.');
  }

  function getCurrentPuzzle() {
    if (puzzleState.pendingTreasure) {
      return treasurePuzzles[puzzleState.pendingTreasure.puzzleId] || null;
    }
    if (puzzleState.pendingAdvance) {
      const level = Math.max(0, Math.min(regions.length - 1, puzzleState.pendingAdvance.nextLevel || state.progressLevel));
      if (!Number.isInteger(puzzleState.activeCorePuzzleId)) {
        pickNextAdvancePuzzleId(level);
      }
      if (Number.isInteger(puzzleState.activeCorePuzzleId)) {
        return turingPuzzles[puzzleState.activeCorePuzzleId] || null;
      }
      return null;
    }
    if (puzzleState.pendingHeartRevive) {
      const level = puzzleState.pendingHeartRevive.level;
      if (!Number.isInteger(puzzleState.activeCorePuzzleId)) {
        pickNextHeartRevivePuzzleId(level);
      }
      if (Number.isInteger(puzzleState.activeCorePuzzleId)) {
        return turingPuzzles[puzzleState.activeCorePuzzleId] || null;
      }
      return null;
    }
    if (!Number.isInteger(puzzleState.activeCorePuzzleId)) {
      const level = getPuzzleDifficultyLevel();
      pickNextCorePuzzleId(level);
    }
    if (Number.isInteger(puzzleState.activeCorePuzzleId)) {
      return turingPuzzles[puzzleState.activeCorePuzzleId] || null;
    }
    return null;
  }

  function normalizeAnswer(value) {
    return String(value || '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replaceAll('.', '')
      .replace(/\band\b/g, ' ')
      .replace(/\s*,\s*/g, ',')
      .trim();
  }

  function hydratePuzzlePanel() {
    const puzzle = getCurrentPuzzle();
    if (!puzzle) {
      if (puzzleStatus) {
        puzzleStatus.textContent = 'No unique puzzle left in this pool.';
      }
      if (puzzleInstruction) {
        puzzleInstruction.textContent = 'This challenge has no unused puzzle left in the current level pool.';
      }
      if (puzzleQuestion) {
        puzzleQuestion.textContent = 'All puzzles in this pool were already used this session.';
      }
      if (puzzleAnswerInput) {
        puzzleAnswerInput.value = '';
      }
      if (puzzleLearnLink) {
        puzzleLearnLink.href = 'https://en.wikipedia.org/wiki/Alan_Turing';
      }
      if (puzzleState.pendingAdvance) {
        setTimeout(() => {
          handleSolvedAdvancePuzzle();
        }, 0);
      }
      return;
    }
    const isTreasureCase = Boolean(puzzleState.pendingTreasure);
    const isHeartRevive = Boolean(puzzleState.pendingHeartRevive);
    const level = getPuzzleDifficultyLevel();
    const levelPoolIds = getPuzzlePoolIdsForLevel(level);
    const seenInLevelCount = levelPoolIds.filter((id) => puzzleState.usedCorePuzzleIds.includes(id)).length;
    const reviveProgress = isHeartRevive ? getHeartReviveProgress(puzzleState.pendingHeartRevive.level) : null;
    puzzleState.hintIndex = 0;
    puzzleState.hintsUsedThisPuzzle = 0;
    puzzleState.hintRewardGrantedThisPuzzle = false;
    if (puzzleTitle) {
      puzzleTitle.textContent = isTreasureCase
        ? `Treasure Case: ${puzzle.title}`
        : isHeartRevive
          ? `Heart Revival: ${puzzle.title} (${reviveProgress.solvedCount + 1}/${reviveProgress.totalCount})`
        : `${puzzle.title} (${Math.max(1, seenInLevelCount)}/${levelPoolIds.length})`;
    }
    if (puzzleInstruction) puzzleInstruction.textContent = puzzle.instruction;
    if (puzzleQuestion) {
      const chapter = isTreasureCase
        ? 'Treasure Case Brief'
        : isHeartRevive
          ? 'Heart Revival Brief'
          : 'Junior Codebreaker Brief';
      const regionName = regions[state.regionIndex]?.name || 'Outback Sector';
      puzzleQuestion.textContent = `${chapter} - ${regionName}: ${puzzle.instruction} Enter your decoded result in the field below to continue the expedition.`;
    }
    if (puzzleAnswerInput) {
      puzzleAnswerInput.value = '';
      puzzleAnswerInput.focus();
    }
    if (puzzleLearnLink) puzzleLearnLink.href = puzzle.learnUrl;
    if (puzzleStatus) {
      const hintLimit = getHintLimitForPuzzle(puzzle, level);
      puzzleStatus.textContent = isTreasureCase
        ? `Treasure case loaded. ${hintLimit === 1 ? 'Hint available.' : `${formatHintCountLabel(hintLimit)} available.`}`
        : isHeartRevive
          ? `Revive challenge: solve all level puzzles to restore 3 hearts. ${Math.max(0, reviveProgress.totalCount - reviveProgress.solvedCount)} left.`
        : `Level ${level + 1} puzzle loaded. ${hintLimit === 1 ? 'Hint available.' : `${formatHintCountLabel(hintLimit)} available.`}`;
    }
  }

  function handleSolvedTreasureCase() {
    if (!puzzleState.pendingTreasure) {
      return false;
    }
    const rewardFood = Math.max(1, puzzleState.pendingTreasure.foodReward || 1);
    state.foodStocks[selectedCharacter] = (state.foodStocks[selectedCharacter] || 0) + rewardFood;
    puzzleState.pendingTreasure = null;
    state.paused = false;
    state.objective = `Treasure solved in ${regions[state.regionIndex].name}. Supplies secured.`;
    pushMessage(`Case solved! +${rewardFood} food supplies for ${characters[selectedCharacter].name}.`);
    closeModal(puzzleModal);
    syncHud();
    syncPlaybackButton();
    return true;
  }

  function handleSolvedAdvancePuzzle() {
    if (!puzzleState.pendingAdvance) {
      return false;
    }
    const next = puzzleState.pendingAdvance;
    if (state.fragments < 7) {
      puzzleState.pendingAdvance = null;
      if (puzzleStatus) {
        puzzleStatus.textContent = 'Collect all 7 shards first to unlock the next level.';
      }
      pushMessage('Need 7 shards before level unlock.');
      return true;
    }

    puzzleState.pendingAdvance = null;
    state.progressLevel = next.nextLevel;
    state.score += next.levelBonus;
    triggerLevelCelebrate(next.nextLevel, next.levelBonus, next.unlockedNames);
    closeModal(puzzleModal);
    syncHud();
    return true;
  }

  function handleSolvedHeartRevivePuzzle() {
    if (!puzzleState.pendingHeartRevive) {
      return false;
    }

    const level = puzzleState.pendingHeartRevive.level;
    const progress = getHeartReviveProgress(level);
    if (progress.solvedAll) {
      puzzleState.pendingHeartRevive = null;
      state.heartReviveUsedByLevel[level] = true;
      state.health = state.maxLives;
      state.paused = false;
      state.hungerPaused = false;
      state.objective = `Heart revival completed in ${regions[state.regionIndex].name}. Continue the run.`;
      pushMessage(`Heart revival complete. ${state.maxLives} hearts restored.`);
      closeModal(puzzleModal);
      syncHud();
      syncPlaybackButton();
      return true;
    }

    puzzleState.activeCorePuzzleId = null;
    if (puzzleStatus) {
      puzzleStatus.textContent = `Great! ${progress.totalCount - progress.solvedCount} puzzles left to restore hearts.`;
    }
    setTimeout(() => {
      if (puzzleModal?.classList.contains('open')) {
        hydratePuzzlePanel();
      }
    }, 700);
    return true;
  }

  function submitPuzzle() {
    const puzzle = getCurrentPuzzle();
    if (!puzzle) {
      if (puzzleState.pendingAdvance) {
        handleSolvedAdvancePuzzle();
      } else if (puzzleStatus) {
        puzzleStatus.textContent = 'No unique puzzle left for this pool.';
      }
      return;
    }
    const guess = normalizeAnswer(puzzleAnswerInput ? puzzleAnswerInput.value : '');
    const validAnswers = Array.isArray(puzzle.acceptedAnswers)
      ? puzzle.acceptedAnswers.map(normalizeAnswer)
      : [normalizeAnswer(puzzle.answer)];
    const matches = validAnswers.includes(guess);

    if (matches) {
      pushMessage('Correct! Next puzzle unlocked.');
      if (puzzleStatus) {
        puzzleStatus.textContent = `Correct! ${puzzle.rightExplain}`;
      }
      registerPuzzleBankSolve(puzzle);
      syncHud();

      if (handleSolvedTreasureCase()) {
        return;
      }

      if (handleSolvedAdvancePuzzle()) {
        return;
      }

      if (handleSolvedHeartRevivePuzzle()) {
        return;
      }

      puzzleState.activeCorePuzzleId = null;
      setTimeout(() => {
          if (puzzleModal?.classList.contains('open')) {
          hydratePuzzlePanel();
        }
      }, 900);
      return;
    }

    const level = getPuzzleDifficultyLevel();
    const hint = consumePuzzleHint(puzzle, level);
    if (puzzleStatus) {
      puzzleStatus.textContent = hint
        ? `Oops, not quite. ${puzzle.wrongExplain} Hint: ${hint}`
        : `Oops, not quite. ${puzzle.wrongExplain}`;
    }
    pushMessage('Oops, try again. Hint updated.');
  }

  function checkPuzzleAnswer() {
    const puzzle = getCurrentPuzzle();
    if (!puzzle) {
      if (puzzleStatus) {
        puzzleStatus.textContent = 'No unique puzzle left for this pool.';
      }
      return;
    }
    const guess = normalizeAnswer(puzzleAnswerInput ? puzzleAnswerInput.value : '');
    const validAnswers = Array.isArray(puzzle.acceptedAnswers)
      ? puzzle.acceptedAnswers.map(normalizeAnswer)
      : [normalizeAnswer(puzzle.answer)];

    if (!validAnswers.includes(guess)) {
      const level = getPuzzleDifficultyLevel();
      const hint = consumePuzzleHint(puzzle, level);
      if (puzzleStatus) {
        puzzleStatus.textContent = hint
          ? `Oops, not quite. ${puzzle.wrongExplain} Hint: ${hint}`
          : `Oops, not quite. ${puzzle.wrongExplain}`;
      }
      pushMessage('Not correct yet. Try again or use a hint.');
      return;
    }

    if (puzzleStatus) {
      if (puzzleState.pendingTreasure) {
        puzzleStatus.textContent = `Correct answer. ${puzzle.rightExplain} Tap Submit to claim the chest reward.`;
      } else if (puzzleState.pendingAdvance) {
        puzzleStatus.textContent = `Correct answer. ${puzzle.rightExplain} Tap Submit to unlock the next level.`;
      } else if (puzzleState.pendingHeartRevive) {
        puzzleStatus.textContent = `Correct answer. ${puzzle.rightExplain} Tap Submit to continue the heart revival challenge.`;
      } else {
        puzzleStatus.textContent = `Correct answer. ${puzzle.rightExplain} Tap Submit to continue.`;
      }
    }
    pushMessage('Answer is correct. Press Submit to continue.');
  }

  function skipPuzzle() {
    if (puzzleState.pendingAdvance) {
      if (puzzleStatus) {
        puzzleStatus.textContent = 'Cannot skip this one. Solve it to unlock the next level.';
      }
      pushMessage('Solve required to continue.');
      return;
    }
    if (puzzleState.pendingTreasure) {
      if (puzzleStatus) {
        puzzleStatus.textContent = 'Cannot skip this treasure case. Solve it to claim supplies.';
      }
      pushMessage('Treasure case must be solved to claim food supplies.');
      return;
    }
    if (puzzleState.pendingHeartRevive) {
      if (puzzleStatus) {
        puzzleStatus.textContent = 'Cannot skip this one. Solve all level puzzles to restore hearts.';
      }
      pushMessage('Heart revival puzzle cannot be skipped.');
      return;
    }
    puzzleState.activeCorePuzzleId = null;
    pushMessage('Puzzle skipped. Next puzzle queued in Puzzle Core.');
    if (puzzleStatus) {
      puzzleStatus.textContent = 'Skipped. Opening the next puzzle...';
    }
    setTimeout(() => {
      if (puzzleModal?.classList.contains('open')) {
        hydratePuzzlePanel();
      }
    }, 700);
  }

  function triggerLevelCelebrate(nextLevel, levelBonus, unlockedNames) {
    const tMsg = levelTransitionMsgs[nextLevel];
    const unlockLine = unlockedNames ? `New dashers unlocked: ${unlockedNames}!` : '';
    const levelEmojis = ['', '🌿', '⚡', '🌊', '❄️'];
    if (lcEmoji) lcEmoji.textContent = levelEmojis[nextLevel] || '🎉';
    if (lcCongrats) lcCongrats.textContent = tMsg ? tMsg.congrats : `Level ${nextLevel} unlocked! 🎉`;
    if (lcTeaser) lcTeaser.textContent = tMsg ? tMsg.teaser : `Now entering ${regions[nextLevel].name}.`;
    if (lcBonus) lcBonus.textContent = `${unlockLine ? unlockLine + '  ' : ''}+${levelBonus} level clear bonus · next level starts at 3 hearts`;
    if (levelCompleteOverlay) {
      levelCompleteOverlay.classList.add('open');
      levelCompleteOverlay.setAttribute('aria-hidden', 'false');
    }
    if (levelCompleteTimer) {
      clearTimeout(levelCompleteTimer);
    }
    levelCompleteTimer = setTimeout(() => {
      if (levelCompleteOverlay) {
        levelCompleteOverlay.classList.remove('open');
        levelCompleteOverlay.setAttribute('aria-hidden', 'true');
      }
      state.continueFromLevelUnlock = true;
      setCharacterSelectionOpen(true);
      state.objective = 'Choose your character for the next level.';
      state.message = 'Next level unlocked! Pick your dasher.';
      syncHud();
    }, 2600);
  }

  function update(dt) {
    if (!state.running) {
      render();
      return;
    }

    const hungryNow = shouldPauseForHunger();
    if (hungryNow && !state.paused) {
      state.paused = true;
      state.hungerPaused = true;
      state.message = 'Out of energy and food. Run paused. Buy food to continue.';
      showHungerModal();
      syncHud();
      syncPlaybackButton();
    }

    if (state.hungerPaused && hungryNow && hungerModal && !hungerModal.classList.contains('open')
      && Date.now() >= state.hungerModalDismissedUntil
      && !foodShopModal?.classList.contains('open')) {
      showHungerModal();
    }

    if (state.hungerPaused && !hungryNow) {
      state.hungerPaused = false;
      state.paused = false;
      state.hungerModalDismissedUntil = 0;
      hideHungerModal();
      state.message = 'Food restored. Run resumed.';
      syncHud();
      syncPlaybackButton();
    }

    if (state.paused) {
      render();
      return;
    }

    advanceDifficulty(dt);
    updateSpawnTimers(dt);
    updatePlayerTimers(dt);
    updateItems(dt);
    updateEvents(dt);
    state.distance += dt * (60 + state.difficulty * 8);
    updateRegion();
    render();
  }

  function advanceDifficulty(dt) {
    const shardDeficit = Math.max(0, 7 - state.fragments);
    state.difficulty += dt * (.04 + state.progressLevel * .018 + shardDeficit * .006) * difficultyMultipliers[gameDifficulty];
  }

  function updateRegion() {
    const fixedIndex = characterRegionMap[selectedCharacter] ?? 0;
    if (state.regionIndex !== fixedIndex) {
      state.regionIndex = fixedIndex;
      state.objective = `Running in ${regions[state.regionIndex].name}`;
      applyRegionThreeTheme(regions[state.regionIndex]);
      syncAudioToRegion();
      syncHud();
    }
  }

  function updateSpawnTimers(dt) {
    const speedMult = difficultyMultipliers[gameDifficulty];
    state.spawnTimer -= dt;
    const shardDeficit = Math.max(0, 7 - state.fragments);

    if (state.spawnTimer <= 0) {
      spawnItem();
      const nextSpawn = .92 - state.difficulty * .06 - state.progressLevel * .08 - shardDeficit * .025;
      state.spawnTimer = Math.max(.28, nextSpawn / speedMult);
    }
  }

  function updatePlayerTimers(dt) {
    state.player.invincible = Math.max(0, state.player.invincible - dt);
    state.player.jump = Math.max(0, state.player.jump - dt * 1.8);
    state.player.sliding = Math.max(0, state.player.sliding - dt * 1.6);
    if (state.player.expressionTimer > 0) {
      state.player.expressionTimer = Math.max(0, state.player.expressionTimer - dt);
      if (state.player.expressionTimer === 0) state.player.expression = 'run';
    }
  }

  function setExpression(expr, duration) {
    state.player.expression = expr;
    state.player.expressionTimer = duration;
  }

  function getExpression() {
    if (state.player.expressionTimer > 0) return state.player.expression;
    if (state.player.sliding > 0) return 'slide';
    if (state.player.jump > 0.1) return 'jump';
    return 'run';
  }

  function updateItems(dt) {
    const speedScale = getFallingObjectSpeedScale();
    const baseZSpeed = Number.isFinite(fallingObjectSettings.baseZSpeed) ? fallingObjectSettings.baseZSpeed : 0.9;
    const difficultyZSpeed = Number.isFinite(fallingObjectSettings.difficultyZSpeed) ? fallingObjectSettings.difficultyZSpeed : 0.07;
    for (let i = state.items.length - 1; i >= 0; i--) {
      const item = state.items[i];
      item.z -= dt * (baseZSpeed + state.difficulty * difficultyZSpeed) * speedScale;
      if (item.z < .1) {
        resolveItem(item);
        state.items.splice(i, 1);
      }
    }
  }

  function isHazardItemType(type) {
    return type === 'obstacle' || type === 'shadow';
  }

  function handleHazardResolution(item, collision) {
    if (!collision.isTouching || collision.airborne || collision.sliding || state.player.invincible > 0) {
      return;
    }
    if (collision.wombatBurrowDodge) {
      pushMessage('Burrow dodge!');
      return;
    }
    const penalty = Math.abs(item.penalty || 100);
    state.health -= 1;
    state.player.invincible = .7;
    setExpression('hurt', 0.8);
    playSfx('hit');
    addScore(-penalty);
    pushMessage(`Bomb hit! -${penalty}`);
    if (state.health <= 0) {
      const level = getPuzzleDifficultyLevel();
      if (!state.heartReviveUsedByLevel[level]) {
        state.health = 0;
        state.running = false;
        state.ended = true;
        state.paused = false;
        state.hungerPaused = false;
        state.pendingReviveOffer = { level };
        state.objective = 'Game over, but one revive is still available.';
        state.message = 'Game over. You have 1 revive option left. Tap Revive.';
        syncHud();
        syncPlaybackButton();
      } else {
        endGame(false);
      }
    }
  }

  function handleCollectedItem(item) {
    if (item.type === 'fragment') {
      state.fragments += 1;
      setExpression('happy', 0.7);
      playSfx('collect');
      addScore(item.value);
      pushMessage(`+${item.value} Shard`);
      if (state.fragments >= 7) {
        endGame(true);
      }
      return;
    }

    if (item.type === 'scoreBonus') {
      playSfx('collect');
      addScore(item.value);
      pushMessage(`+${item.value}`);
      return;
    }

    if (item.type === 'scorePenalty') {
      playSfx('hit');
      addScore(-item.value);
      pushMessage(`-${item.value}`);
      return;
    }

    if (item.type === 'treasureChest') {
      playSfx('collect');
      openTreasurePuzzleFromChest(item);
      return;
    }

    addScore(item.value);
    playSfx('collect');
    pushMessage(`+${item.value}`);
  }

  function resolveItem(item) {
    const isWombat = selectedCharacter === 'wombat';
    const role = characters[selectedCharacter]?.role || 'fast';
    const terrain = regions[state.regionIndex].terrain;
    const playerXNorm = getTrackXNorm(laneToXNorm(state.player.lane), 0.96);
    const itemBaseXNorm = typeof item.xNorm === 'number' ? item.xNorm : laneToXNorm(item.lane);
    const itemXNorm = getTrackXNorm(itemBaseXNorm, clamp01(1 - item.z));
    const hitboxX = role === 'slow' ? 0.085 : 0.1;
    const isTouching = Math.abs(itemXNorm - playerXNorm) <= hitboxX;
    const airborne = state.player.jump > .15;
    const sliding = state.player.sliding > .15;
    const wombatBurrowDodge = isWombat && (terrain === 'dunes' || terrain === 'forest') && sliding;
    const collision = { isTouching, airborne, sliding, wombatBurrowDodge };

    if (isHazardItemType(item.type)) {
      handleHazardResolution(item, collision);
      return;
    }

    if (!collision.isTouching) {
      return;
    }

    handleCollectedItem(item);
  }

  function updateEvents(dt) {
    // Simple mode: no falling text/event boxes.
    if (state.events.length) {
      state.events.length = 0;
    }
  }

  function drawBackground() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const region = regions[state.regionIndex];

    if (terrain3dEnabled && threeState.ready) {
      // Keep gameplay legible on top of 3D pass.
      const grad3d = ctx.createLinearGradient(0, 0, 0, h);
      grad3d.addColorStop(0, hexToRgba(region.top, 0.2));
      grad3d.addColorStop(1, hexToRgba(region.bottom, 0.26));
      ctx.fillStyle = grad3d;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(10, 7, 5, .12)';
      ctx.fillRect(0, 0, w, h);
      return;
    }

    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, region.top);
    grad.addColorStop(1, region.bottom);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    if (region.terrain === 'dunes') {
      drawOutbackScene(w, h);
    } else if (region.terrain === 'forest') {
      drawBushlandScene(w, h);
    } else if (region.name === 'Servo') {
      drawServoScene(w, h);
    } else if (region.terrain === 'beach') {
      drawCoastlineScene(w, h);
    } else {
      drawTasmaniaScene(w, h);
    }

    // Keep mood but avoid over-darkening the avatar.
    ctx.fillStyle = 'rgba(12, 8, 5, .16)';
    ctx.fillRect(0, 0, w, h);

    drawCinematicGrade(w, h, region.terrain);

    drawRunnerTrack(w, h, region);
  }

  function drawRunnerTrack(w, h, region) {
    const t = performance.now() * 0.001;
    const terrain = region.terrain;
    const horizonY = h * 0.58;
    const frontY = h * 0.8;

    const midGrad = ctx.createLinearGradient(0, horizonY, 0, frontY);
    if (terrain === 'dunes') {
      midGrad.addColorStop(0, 'rgba(160, 120, 84, .35)');
      midGrad.addColorStop(1, 'rgba(112, 74, 44, .52)');
    } else if (terrain === 'forest') {
      midGrad.addColorStop(0, 'rgba(88, 102, 72, .34)');
      midGrad.addColorStop(1, 'rgba(48, 64, 38, .58)');
    } else if (terrain === 'beach') {
      midGrad.addColorStop(0, 'rgba(125, 143, 148, .3)');
      midGrad.addColorStop(1, 'rgba(169, 149, 112, .54)');
    } else if (terrain === 'industrial') {
      midGrad.addColorStop(0, 'rgba(36, 61, 91, .38)');
      midGrad.addColorStop(1, 'rgba(15, 28, 44, .62)');
    } else {
      midGrad.addColorStop(0, 'rgba(98, 112, 132, .3)');
      midGrad.addColorStop(1, 'rgba(62, 72, 92, .6)');
    }
    ctx.fillStyle = midGrad;
    ctx.fillRect(0, horizonY, w, frontY - horizonY);

    const frontGrad = ctx.createLinearGradient(0, frontY, 0, h);
    if (terrain === 'dunes') {
      frontGrad.addColorStop(0, 'rgba(96, 58, 34, .74)');
      frontGrad.addColorStop(1, 'rgba(62, 34, 20, .88)');
    } else if (terrain === 'forest') {
      frontGrad.addColorStop(0, 'rgba(52, 66, 39, .78)');
      frontGrad.addColorStop(1, 'rgba(30, 43, 24, .9)');
    } else if (terrain === 'beach') {
      frontGrad.addColorStop(0, 'rgba(158, 137, 98, .76)');
      frontGrad.addColorStop(1, 'rgba(116, 96, 72, .9)');
    } else if (terrain === 'industrial') {
      frontGrad.addColorStop(0, 'rgba(20, 38, 62, .82)');
      frontGrad.addColorStop(1, 'rgba(10, 21, 35, .94)');
    } else {
      frontGrad.addColorStop(0, 'rgba(78, 88, 108, .8)');
      frontGrad.addColorStop(1, 'rgba(44, 54, 76, .9)');
    }
    ctx.fillStyle = frontGrad;
    ctx.fillRect(0, frontY, w, h - frontY);

    drawProceduralTerrainTexture(terrain, w, h, horizonY, t);

    const showPathGuides = pathGuideSettings.enabled === true;
    const laneTopY = h * 0.585;
    const laneBottomY = h * 0.845;
    if (showPathGuides) {
      for (let laneIndex = 0; laneIndex < lanes.length; laneIndex += 1) {
        const baseNorm = laneToXNorm(laneIndex);
        const farNorm = getTrackXNorm(baseNorm, 0.08);
        const nearNorm = getTrackXNorm(baseNorm, 0.96);
        const controlNormA = getTrackXNorm(baseNorm, 0.36);
        const controlNormB = getTrackXNorm(baseNorm, 0.72);
        const laneAlphaCenter = Number.isFinite(pathGuideSettings.laneAlphaCenter) ? pathGuideSettings.laneAlphaCenter : 0.11;
        const laneAlphaSide = Number.isFinite(pathGuideSettings.laneAlphaSide) ? pathGuideSettings.laneAlphaSide : 0.05;
        const laneWidthCenter = Number.isFinite(pathGuideSettings.laneWidthCenter) ? pathGuideSettings.laneWidthCenter : 1.15;
        const laneWidthSide = Number.isFinite(pathGuideSettings.laneWidthSide) ? pathGuideSettings.laneWidthSide : 0.7;
        const alpha = laneIndex === laneCenterIndex ? laneAlphaCenter : laneAlphaSide;
        ctx.strokeStyle = `rgba(222, 214, 198, ${alpha})`;
        ctx.lineWidth = laneIndex === laneCenterIndex ? laneWidthCenter : laneWidthSide;
        ctx.beginPath();
        ctx.moveTo(w * farNorm, laneTopY);
        ctx.bezierCurveTo(
          w * controlNormA,
          h * 0.67,
          w * controlNormB,
          h * 0.77,
          w * nearNorm,
          laneBottomY
        );
        ctx.stroke();
      }

      // Wheel/foot ruts.
      const rutOffsets = [-0.12, 0.12];
      rutOffsets.forEach((offset) => {
        const far = getTrackXNorm(0.5 + offset, 0.12);
        const near = getTrackXNorm(0.5 + offset, 0.98);
        const rutAlpha = Number.isFinite(pathGuideSettings.rutAlpha) ? pathGuideSettings.rutAlpha : 0.17;
        const rutWidth = Number.isFinite(pathGuideSettings.rutWidth) ? pathGuideSettings.rutWidth : 0.85;
        ctx.strokeStyle = `rgba(24, 20, 16, ${rutAlpha})`;
        ctx.lineWidth = rutWidth;
        ctx.beginPath();
        ctx.moveTo(w * far, laneTopY + 4);
        ctx.bezierCurveTo(w * far, h * 0.69, w * near, h * 0.78, w * near, laneBottomY + 2);
        ctx.stroke();
      });
    }

    const showIndustrialSeams = visualSettings.industrialGroundSeams === true;
    if (terrain === 'industrial' && showIndustrialSeams) {
      // Keep Servo panel seams over texture for a synthetic ground read.
      ctx.strokeStyle = 'rgba(112, 146, 190, .2)';
      ctx.lineWidth = 1.4;
      for (let i = 0; i < 8; i++) {
        const y = h * (0.62 + i * 0.05);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y + Math.sin(t * 0.45 + i) * 2);
        ctx.stroke();
      }
    }

    ctx.fillStyle = hexToRgba(region.accent, 0.78);
    ctx.font = '700 28px Nunito';
    ctx.textAlign = 'left';
    ctx.fillText(region.name.toUpperCase(), 16, h - 40);
  }

  function drawCinematicGrade(w, h, terrain) {
    // Vignette and grain to unify scenes into a less cartoon, more filmic frame.
    const vignette = ctx.createRadialGradient(w * 0.5, h * 0.56, Math.min(w, h) * 0.22, w * 0.5, h * 0.56, Math.max(w, h) * 0.8);
    vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignette.addColorStop(1, terrain === 'industrial' ? 'rgba(4, 7, 10, 0.36)' : 'rgba(8, 7, 5, 0.28)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, w, h);

    if (visualSettings.cinematicScanlines === true) {
      const t = performance.now() * 0.001;
      ctx.save();
      ctx.globalAlpha = terrain === 'industrial' ? 0.09 : 0.07;
      for (let i = 0; i < 38; i++) {
        const y = (i * 23 + t * 42) % h;
        ctx.fillStyle = i % 3 === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)';
        ctx.fillRect(0, y, w, 1);
      }
      ctx.restore();
    }
  }

  function drawOutbackScene(w, h) {
    const t = performance.now() * 0.001;

    // Larger, cinematic sun and bloom core.
    const sunX = w * (0.52 + Math.sin(t * 0.08) * 0.01);
    const sunY = h * 0.17;
    const bloom = ctx.createRadialGradient(sunX, sunY, 16, sunX, sunY, 220);
    bloom.addColorStop(0, 'rgba(255, 240, 188, .38)');
    bloom.addColorStop(0.38, 'rgba(255, 209, 102, .18)');
    bloom.addColorStop(1, 'rgba(255, 175, 104, 0)');
    ctx.fillStyle = bloom;
    ctx.fillRect(0, 0, w, h * 0.6);

    // Distant mesas with subtle parallax drift.
    ctx.fillStyle = 'rgba(118, 79, 56, .38)';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.55);
    for (let i = 0; i <= 8; i++) {
      const x = (w / 8) * i;
      const y = h * (0.49 + Math.sin(i * 0.75 + t * 0.12) * 0.018);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h * 0.64);
    ctx.lineTo(0, h * 0.64);
    ctx.closePath();
    ctx.fill();

    // Heat shimmer strips (screen-space mirage effect).
    for (let i = 0; i < 12; i++) {
      const yy = h * (0.34 + i * 0.037);
      const wobble = Math.sin(t * 2.6 + i * 0.7) * 6;
      ctx.strokeStyle = `rgba(255, 226, 181, ${0.05 + (i % 3) * 0.03})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, yy + wobble);
      ctx.bezierCurveTo(w * 0.25, yy - 8 + wobble, w * 0.65, yy + 10 + wobble, w, yy + wobble);
      ctx.stroke();
    }

    // Rolling dune ridges in multiple moving layers.
    for (let band = 0; band < 5; band++) {
      const baseY = h * (0.52 + band * 0.065);
      ctx.strokeStyle = `rgba(242, 201, 144, ${0.18 - band * 0.02})`;
      ctx.lineWidth = 2.2 - band * 0.2;
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      for (let x = 0; x <= w; x += 28) {
        const nx = x / w;
        const n = octaveNoise(nx * (2.6 + band * 0.5) + 12.4 + t * (0.12 + band * 0.03), band * 3.1);
        const y = baseY + n * (12 - band * 1.5) + Math.sin(nx * 8 + t * (0.2 + band * 0.04)) * 3;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Gusting dust sheets crossing screen.
    for (let i = 0; i < 54; i++) {
      const lane = i % 9;
      const speed = 52 + lane * 10;
      const x = ((t * speed + i * 48) % (w + 240)) - 120;
      const y = h * (0.28 + (i / 54) * 0.56) + Math.sin(t * 1.6 + i * 0.3) * 9;
      const len = 18 + (i % 6) * 5;
      const alpha = 0.06 + (i % 5) * 0.02;
      ctx.strokeStyle = `rgba(245, 214, 168, ${alpha})`;
      ctx.lineWidth = 1 + (i % 3) * 0.35;
      ctx.beginPath();
      ctx.moveTo(x - len, y - 1.2);
      ctx.lineTo(x + len, y + 1.2);
      ctx.stroke();
    }

    // Foreground scrub silhouettes for depth.
    ctx.fillStyle = 'rgba(74, 46, 28, .44)';
    for (let i = 0; i < 9; i++) {
      const x = w * (0.05 + i * 0.11) + Math.sin(t * 0.4 + i) * 6;
      const y = h * (0.72 + (i % 3) * 0.045);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x - 8, y - 24, x + 2, y - 42);
      ctx.quadraticCurveTo(x + 11, y - 26, x + 6, y);
      ctx.closePath();
      ctx.fill();
    }

    // Sparse fence posts and old station wire for a more believable outback edge.
    ctx.strokeStyle = 'rgba(96, 62, 38, .42)';
    ctx.lineWidth = 1.6;
    for (let i = 0; i < 7; i++) {
      const x = w * (0.08 + i * 0.13);
      const postY = h * (0.76 + (i % 2) * 0.018);
      ctx.beginPath();
      ctx.moveTo(x, postY);
      ctx.lineTo(x, postY - 28);
      ctx.stroke();
      if (i < 6) {
        const nextX = w * (0.08 + (i + 1) * 0.13);
        ctx.beginPath();
        ctx.moveTo(x, postY - 18);
        ctx.lineTo(nextX, postY - 20 + Math.sin(i + t * 0.3) * 2);
        ctx.stroke();
      }
    }

    // Rusted water tank and broken sign silhouette.
    ctx.fillStyle = 'rgba(86, 56, 40, .38)';
    ctx.fillRect(w * 0.82, h * 0.5, 10, h * 0.12);
    ctx.beginPath();
    ctx.ellipse(w * 0.825, h * 0.47, 22, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(w * 0.14, h * 0.56, 6, 42);
    ctx.save();
    ctx.translate(w * 0.14, h * 0.56);
    ctx.rotate(-0.16);
    ctx.fillRect(0, 0, 52, 16);
    ctx.restore();

    // Rolling tumbleweeds for more readable wind motion.
    ctx.strokeStyle = 'rgba(118, 84, 48, .45)';
    ctx.lineWidth = 1.3;
    for (let i = 0; i < 4; i++) {
      const x = ((t * (36 + i * 8) + i * 210) % (w + 80)) - 40;
      const y = h * (0.79 + (i % 2) * 0.035);
      const radius = 10 + (i % 2) * 3;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - radius * 0.8, y - 2);
      ctx.lineTo(x + radius * 0.7, y + 3);
      ctx.moveTo(x - 2, y - radius * 0.8);
      ctx.lineTo(x + 2, y + radius * 0.8);
      ctx.stroke();
    }

    // Sparse highway silhouettes: a few distant cars and utes crossing the flats.
    for (let i = 0; i < 3; i++) {
      const dir = i % 2 === 0 ? 1 : -1;
      const speed = 18 + i * 7;
      const x = ((t * speed * dir + i * 260) % (w + 220)) - 110;
      const y = h * (0.64 + i * 0.05);
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(0.9 + i * 0.12, 0.9 + i * 0.12);
      ctx.fillStyle = 'rgba(62, 44, 32, 0.52)';
      ctx.beginPath();
      ctx.moveTo(-18, 0);
      ctx.lineTo(18, 0);
      ctx.lineTo(12, 8);
      ctx.lineTo(-14, 8);
      ctx.closePath();
      ctx.fill();
      ctx.fillRect(-8, -5, 12, 5);
      ctx.fillStyle = 'rgba(28, 22, 18, 0.56)';
      ctx.beginPath();
      ctx.arc(-10, 8, 3, 0, Math.PI * 2);
      ctx.arc(10, 8, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function drawBushlandScene(w, h) {
    const t = performance.now() * 0.001;

    // Broad atmospheric haze and god-rays for depth.
    const haze = ctx.createLinearGradient(0, h * 0.06, 0, h * 0.7);
    haze.addColorStop(0, 'rgba(220, 240, 188, .12)');
    haze.addColorStop(0.55, 'rgba(123, 166, 97, .1)');
    haze.addColorStop(1, 'rgba(56, 92, 54, .08)');
    ctx.fillStyle = haze;
    ctx.fillRect(0, h * 0.06, w, h * 0.66);

    for (let i = 0; i < 7; i++) {
      const beamX = w * (0.08 + i * 0.14) + Math.sin(t * 0.2 + i) * 22;
      const beam = ctx.createLinearGradient(beamX, h * 0.1, beamX + 90, h * 0.8);
      beam.addColorStop(0, 'rgba(232, 249, 204, .12)');
      beam.addColorStop(1, 'rgba(232, 249, 204, 0)');
      ctx.fillStyle = beam;
      ctx.beginPath();
      ctx.moveTo(beamX, h * 0.12);
      ctx.lineTo(beamX + 34, h * 0.12);
      ctx.lineTo(beamX + 124, h * 0.82);
      ctx.lineTo(beamX + 68, h * 0.82);
      ctx.closePath();
      ctx.fill();
    }

    // Distant canopy silhouette layer.
    ctx.fillStyle = 'rgba(32, 55, 34, .48)';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.45);
    for (let x = 0; x <= w; x += 20) {
      const nx = x / w;
      const y = h * (0.43 + octaveNoise(nx * 3.4 + 8.2 + t * 0.03, 3.1) * 0.04);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h * 0.62);
    ctx.lineTo(0, h * 0.62);
    ctx.closePath();
    ctx.fill();

    // Mid-tree layer with irregular canopy blobs and varied trunk widths.
    for (let i = 0; i < 18; i++) {
      const baseX = w * (i / 17) + Math.sin(t * 0.4 + i) * 8;
      const rootY = h * (0.52 + (i % 4) * 0.03);
      const trunkH = h * (0.17 + ((i % 5) * 0.014));
      const trunkW = 8 + (i % 3) * 4;
      const sway = Math.sin(t * 0.9 + i * 0.7) * 3;

      ctx.fillStyle = 'rgba(47, 30, 20, .54)';
      ctx.fillRect(baseX, rootY - trunkH, trunkW, trunkH);

      const crownY = rootY - trunkH - 8;
      ctx.fillStyle = `rgba(${58 + (i % 4) * 8}, ${98 + (i % 5) * 10}, ${58 + (i % 3) * 6}, .58)`;
      for (let k = 0; k < 4; k++) {
        const radius = 18 + (k % 2) * 8 + (i % 3) * 2;
        ctx.beginPath();
        ctx.arc(baseX + sway + 6 + (k - 1.5) * 10, crownY - k * 4, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Ground litter: twigs, fern fans, and stones.
    for (let i = 0; i < 34; i++) {
      const x = ((i * 47 + t * 6) % (w + 30)) - 15;
      const y = h * (0.67 + (i % 6) * 0.042);
      ctx.strokeStyle = 'rgba(60, 42, 26, .34)';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(x - 10, y + 5);
      ctx.lineTo(x + 12, y - 3);
      ctx.stroke();

      ctx.fillStyle = 'rgba(76, 108, 58, .3)';
      ctx.beginPath();
      ctx.ellipse(x + 6, y + 3, 5 + (i % 2), 11, -0.22, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(96, 88, 72, .26)';
      ctx.beginPath();
      ctx.ellipse(x - 4, y + 8, 3 + (i % 2), 1.8, 0.1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Wind-borne leaves and pollen.
    for (let i = 0; i < 90; i++) {
      const speed = 10 + (i % 8) * 3;
      const x = ((t * speed + i * 39) % (w + 120)) - 60;
      const y = h * (0.14 + (i / 90) * 0.78) + Math.sin(t * 1.3 + i * 0.6) * 8;
      const size = 1.4 + (i % 4) * 0.9;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.sin(t * 2 + i * 0.4) * 0.8);
      ctx.fillStyle = `rgba(146, 184, 102, ${0.12 + (i % 5) * 0.04})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 1.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    for (let i = 0; i < 50; i++) {
      const x = ((t * (7 + (i % 5)) + i * 31) % (w + 20)) - 10;
      const y = h * (0.18 + (i / 50) * 0.64) + Math.sin(t * 0.9 + i) * 4;
      ctx.fillStyle = `rgba(234, 246, 194, ${0.06 + (i % 4) * 0.04})`;
      ctx.beginPath();
      ctx.arc(x, y, 0.7 + (i % 3) * 0.45, 0, Math.PI * 2);
      ctx.fill();
    }

    // Fallen logs and stones on the forest floor.
    ctx.fillStyle = 'rgba(73, 49, 30, .44)';
    for (let i = 0; i < 5; i++) {
      const x = w * (0.12 + i * 0.18);
      const y = h * (0.78 + (i % 2) * 0.03);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-0.14 + (i % 3) * 0.08);
      ctx.fillRect(-24, -5, 48, 10);
      ctx.restore();
    }
    ctx.fillStyle = 'rgba(92, 86, 74, .28)';
    for (let i = 0; i < 14; i++) {
      const x = w * (0.05 + i * 0.07);
      const y = h * (0.82 + (i % 3) * 0.016);
      ctx.beginPath();
      ctx.ellipse(x, y, 6 + (i % 2) * 2, 3.5, 0.12, 0, Math.PI * 2);
      ctx.fill();
    }

    // Simple stump silhouettes to break up the foreground.
    ctx.fillStyle = 'rgba(66, 44, 28, .5)';
    for (let i = 0; i < 4; i++) {
      const x = w * (0.18 + i * 0.22);
      const y = h * (0.75 + (i % 2) * 0.025);
      ctx.fillRect(x, y, 12, 18);
      ctx.beginPath();
      ctx.ellipse(x + 6, y, 8, 4, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Swaying hanging vines to make the forest feel alive.
    ctx.strokeStyle = 'rgba(78, 110, 66, .34)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 8; i++) {
      const x = w * (0.06 + i * 0.12);
      const sway = Math.sin(t * 1.4 + i * 0.9) * 9;
      ctx.beginPath();
      ctx.moveTo(x, h * 0.12);
      ctx.bezierCurveTo(x + sway * 0.3, h * 0.24, x + sway, h * 0.38, x + sway * 0.5, h * 0.56);
      ctx.stroke();
    }

    // Snakes weaving through low shrub clusters.
    for (let i = 0; i < 3; i++) {
      const baseX = w * (0.2 + i * 0.27) + Math.sin(t * (0.6 + i * 0.15)) * 10;
      const baseY = h * (0.79 + (i % 2) * 0.028);
      ctx.strokeStyle = 'rgba(58, 74, 38, 0.62)';
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(baseX - 18, baseY + 4);
      ctx.bezierCurveTo(baseX - 8, baseY - 6, baseX + 6, baseY + 8, baseX + 16, baseY - 2);
      ctx.stroke();
      ctx.fillStyle = 'rgba(74, 96, 50, 0.58)';
      ctx.beginPath();
      ctx.ellipse(baseX + 16, baseY - 2, 3.6, 2.2, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawServoScene(w, h) {
    const t = performance.now() * 0.001;

    // Atmospheric glow behind the station.
    const halo = ctx.createRadialGradient(w * 0.5, h * 0.3, 10, w * 0.5, h * 0.3, w * 0.42);
    halo.addColorStop(0, 'rgba(91, 231, 255, .22)');
    halo.addColorStop(0.45, 'rgba(116, 123, 255, .12)');
    halo.addColorStop(1, 'rgba(15, 25, 40, 0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, w, h * 0.72);

    // Station silhouette blocks.
    ctx.fillStyle = 'rgba(20, 32, 48, .72)';
    const blocks = [
      { x: 0.06, y: 0.26, bw: 0.16, bh: 0.24 },
      { x: 0.24, y: 0.2, bw: 0.14, bh: 0.3 },
      { x: 0.41, y: 0.24, bw: 0.18, bh: 0.26 },
      { x: 0.62, y: 0.18, bw: 0.13, bh: 0.32 },
      { x: 0.77, y: 0.23, bw: 0.17, bh: 0.27 }
    ];
    blocks.forEach((b) => {
      ctx.fillRect(w * b.x, h * b.y, w * b.bw, h * b.bh);
    });

    // Neon windows and data strips.
    for (let i = 0; i < 70; i++) {
      const col = i % 14;
      const row = Math.floor(i / 14);
      const x = w * (0.08 + col * 0.06) + Math.sin(t * 0.7 + i) * 2;
      const y = h * (0.24 + row * 0.055);
      const on = ((i + Math.floor(t * 2)) % 3) !== 0;
      ctx.fillStyle = on ? 'rgba(91, 231, 255, .5)' : 'rgba(61, 78, 102, .35)';
      ctx.fillRect(x, y, 10, 3);
    }

    // Hologrid sweep lines.
    ctx.strokeStyle = 'rgba(111, 173, 255, .24)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 10; i++) {
      const y = h * (0.2 + i * 0.04) + Math.sin(t * 1.3 + i) * 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.04, y);
      ctx.lineTo(w * 0.96, y);
      ctx.stroke();
    }

    // Falling data rain.
    for (let i = 0; i < 52; i++) {
      const x = (i * 29 + t * (36 + (i % 4) * 8)) % (w + 50) - 25;
      const y = (i * 19 + t * 145) % (h * 0.58 + 40) - 20;
      const len = 8 + (i % 4) * 3;
      ctx.strokeStyle = `rgba(113, 238, 255, ${0.14 + (i % 5) * 0.06})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + len);
      ctx.stroke();
    }

    // Occasional horizontal glitch bars to sell a digital atmosphere.
    const glitchPulse = Math.max(0, Math.sin(t * 6.2) - 0.72);
    if (glitchPulse > 0) {
      const bands = 3 + Math.floor(glitchPulse * 6);
      for (let i = 0; i < bands; i++) {
        const y = h * (0.18 + ((i * 0.13 + t * 0.27) % 0.38));
        const bandW = w * (0.25 + ((i * 0.17 + t * 0.5) % 0.45));
        const x = w * (0.08 + ((i * 0.11 + t * 0.37) % 0.75));
        const alpha = 0.08 + glitchPulse * 0.24;
        ctx.fillStyle = `rgba(146, 248, 255, ${alpha})`;
        ctx.fillRect(x - bandW * 0.5, y, bandW, 3 + (i % 2));
      }
    }

    // Animated title glow.
    const glow = 0.28 + (Math.sin(t * 3) + 1) * 0.12;
    ctx.fillStyle = `rgba(130, 242, 255, ${glow})`;
    ctx.font = '700 24px ui-monospace, SFMono-Regular, Menlo, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SERVO NET HUB', w * 0.5, h * 0.38);

    // Transmission mast silhouettes and hanging cable runs.
    ctx.strokeStyle = 'rgba(97, 142, 176, .36)';
    ctx.lineWidth = 2;
    const mastXs = [w * 0.14, w * 0.52, w * 0.88];
    mastXs.forEach((x, index) => {
      const mastTop = h * (0.16 + (index % 2) * 0.04);
      const mastBase = h * 0.54;
      ctx.beginPath();
      ctx.moveTo(x, mastBase);
      ctx.lineTo(x, mastTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - 12, mastTop + 18);
      ctx.lineTo(x + 12, mastTop + 18);
      ctx.moveTo(x - 8, mastTop + 36);
      ctx.lineTo(x + 8, mastTop + 36);
      ctx.stroke();
    });
    ctx.beginPath();
    ctx.moveTo(mastXs[0], h * 0.24);
    ctx.bezierCurveTo(w * 0.28, h * 0.28, w * 0.44, h * 0.2, mastXs[1], h * 0.28);
    ctx.bezierCurveTo(w * 0.66, h * 0.34, w * 0.76, h * 0.24, mastXs[2], h * 0.26);
    ctx.stroke();

    // Foreground pipes and service barrels.
    ctx.fillStyle = 'rgba(31, 46, 64, .62)';
    ctx.fillRect(w * 0.1, h * 0.73, w * 0.22, 10);
    ctx.fillRect(w * 0.58, h * 0.76, w * 0.26, 10);
    for (let i = 0; i < 4; i++) {
      const x = w * (0.22 + i * 0.15);
      const y = h * (0.7 + (i % 2) * 0.04);
      ctx.fillRect(x, y, 12, 28);
      ctx.beginPath();
      ctx.ellipse(x + 6, y, 6, 3, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Rotating beacon sweeps over the station.
    for (let i = 0; i < 2; i++) {
      const baseX = w * (0.28 + i * 0.34);
      const baseY = h * 0.24;
      const sweep = Math.sin(t * 1.8 + i) * 0.7;
      ctx.save();
      ctx.translate(baseX, baseY);
      ctx.rotate(sweep);
      const beam = ctx.createLinearGradient(0, 0, 0, h * 0.4);
      beam.addColorStop(0, 'rgba(111, 238, 255, .24)');
      beam.addColorStop(1, 'rgba(111, 238, 255, 0)');
      ctx.fillStyle = beam;
      ctx.beginPath();
      ctx.moveTo(-8, 0);
      ctx.lineTo(8, 0);
      ctx.lineTo(48, h * 0.34);
      ctx.lineTo(-48, h * 0.34);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Servo-specific forecourt: canopy, pumps, price board, and parked utility vehicle.
    ctx.fillStyle = 'rgba(26, 42, 58, 0.74)';
    ctx.fillRect(w * 0.64, h * 0.58, w * 0.24, 10);
    ctx.fillRect(w * 0.66, h * 0.58, 8, h * 0.12);
    ctx.fillRect(w * 0.84, h * 0.58, 8, h * 0.12);

    ctx.fillStyle = 'rgba(45, 74, 98, 0.72)';
    for (let i = 0; i < 2; i++) {
      const px = w * (0.71 + i * 0.08);
      const py = h * 0.67;
      ctx.fillRect(px, py, 16, 28);
      ctx.fillStyle = 'rgba(128, 234, 248, 0.44)';
      ctx.fillRect(px + 3, py + 4, 10, 7);
      ctx.fillStyle = 'rgba(45, 74, 98, 0.72)';
      ctx.strokeStyle = 'rgba(126, 194, 220, 0.42)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(px + 15, py + 7);
      ctx.quadraticCurveTo(px + 22, py + 9, px + 18, py + 20);
      ctx.stroke();
    }

    ctx.fillStyle = 'rgba(36, 58, 78, 0.7)';
    ctx.fillRect(w * 0.58, h * 0.62, 20, 52);
    ctx.fillStyle = 'rgba(140, 240, 255, 0.42)';
    ctx.fillRect(w * 0.582, h * 0.635, 16, 8);

    const uteX = w * (0.38 + Math.sin(t * 0.4) * 0.03);
    const uteY = h * 0.73;
    ctx.fillStyle = 'rgba(30, 49, 66, 0.74)';
    ctx.beginPath();
    ctx.moveTo(uteX - 26, uteY);
    ctx.lineTo(uteX + 28, uteY);
    ctx.lineTo(uteX + 20, uteY + 11);
    ctx.lineTo(uteX - 22, uteY + 11);
    ctx.closePath();
    ctx.fill();
    ctx.fillRect(uteX - 6, uteY - 8, 18, 8);
    ctx.fillStyle = 'rgba(14, 20, 26, 0.7)';
    ctx.beginPath();
    ctx.arc(uteX - 14, uteY + 11, 4.5, 0, Math.PI * 2);
    ctx.arc(uteX + 16, uteY + 11, 4.5, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawCoastlineScene(w, h) {
    const t = performance.now() * 0.001;

    // Distant coastal cliffs and headland silhouettes.
    ctx.fillStyle = 'rgba(58, 74, 88, 0.34)';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.47);
    ctx.lineTo(w * 0.18, h * 0.43);
    ctx.lineTo(w * 0.34, h * 0.48);
    ctx.lineTo(w * 0.52, h * 0.44);
    ctx.lineTo(w * 0.72, h * 0.49);
    ctx.lineTo(w, h * 0.46);
    ctx.lineTo(w, h * 0.58);
    ctx.lineTo(0, h * 0.58);
    ctx.closePath();
    ctx.fill();

    // Sea band
    const sea = ctx.createLinearGradient(0, h * .42, 0, h * .76);
    sea.addColorStop(0, 'rgba(78, 168, 222, .22)');
    sea.addColorStop(1, 'rgba(22, 98, 150, .45)');
    ctx.fillStyle = sea;
    ctx.fillRect(0, h * .42, w, h * .34);

    // Surf lines
    ctx.strokeStyle = 'rgba(232, 249, 255, .52)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      const y = h * (.48 + i * .05) + Math.sin(t * 1.6 + i) * 4;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.quadraticCurveTo(w * .25, y - 10, w * .5, y);
      ctx.quadraticCurveTo(w * .75, y + 10, w, y);
      ctx.stroke();
    }

    // Rainfall across full scene.
    for (let i = 0; i < 120; i++) {
      const x = (i * 19 + t * 180) % (w + 40) - 20;
      const y = (i * 13 + t * 380) % (h + 60) - 30;
      const len = 8 + (i % 3) * 3;
      ctx.strokeStyle = `rgba(180, 225, 255, ${0.12 + (i % 5) * 0.08})`;
      ctx.lineWidth = 1 + (i % 2) * 0.4;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 3, y + len);
      ctx.stroke();
    }

    // Moving foam clusters near shoreline.
    for (let i = 0; i < 24; i++) {
      const x = ((t * (24 + (i % 5) * 4) + i * 49) % (w + 80)) - 40;
      const y = h * (0.62 + (i % 4) * 0.045) + Math.sin(t * 1.6 + i) * 4;
      ctx.fillStyle = `rgba(238, 249, 255, ${0.18 + (i % 3) * 0.1})`;
      ctx.beginPath();
      ctx.ellipse(x, y, 10 + (i % 3) * 3, 3, 0.1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Pebble strip and dune grass silhouettes for beach realism.
    ctx.fillStyle = 'rgba(136, 118, 91, .44)';
    for (let i = 0; i < 50; i++) {
      const x = w * (i / 50) + Math.sin(i * 0.7) * 2;
      const y = h * (0.78 + (i % 4) * 0.02);
      ctx.beginPath();
      ctx.ellipse(x, y, 2 + (i % 2), 1.2, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(104, 122, 92, .36)';
    for (let i = 0; i < 10; i++) {
      const x = w * (0.06 + i * 0.09) + Math.sin(t * 0.5 + i) * 6;
      const y = h * 0.76;
      ctx.beginPath();
      ctx.moveTo(x, y + 8);
      ctx.quadraticCurveTo(x - 4, y - 12, x + 2, y - 28);
      ctx.quadraticCurveTo(x + 6, y - 14, x + 5, y + 8);
      ctx.closePath();
      ctx.fill();
    }

    // Lighthouse tower with rotating beam and coastal haze.
    ctx.fillStyle = 'rgba(223, 214, 188, 0.62)';
    ctx.fillRect(w * 0.78, h * 0.24, 15, h * 0.24);
    ctx.fillStyle = 'rgba(186, 178, 156, 0.58)';
    ctx.fillRect(w * 0.777, h * 0.265, 21, 5);
    ctx.beginPath();
    ctx.arc(w * 0.787, h * 0.24, 13, 0, Math.PI * 2);
    ctx.fill();

    const beamAngle = Math.sin(t * 0.85) * 0.48 - 0.16;
    ctx.save();
    ctx.translate(w * 0.787, h * 0.24);
    ctx.rotate(beamAngle);
    const coastBeam = ctx.createLinearGradient(0, 0, w * 0.36, 0);
    coastBeam.addColorStop(0, 'rgba(246, 243, 216, 0.34)');
    coastBeam.addColorStop(1, 'rgba(246, 243, 216, 0)');
    ctx.fillStyle = coastBeam;
    ctx.beginPath();
    ctx.moveTo(0, -4);
    ctx.lineTo(w * 0.3, -36);
    ctx.lineTo(w * 0.34, -8);
    ctx.lineTo(w * 0.34, 8);
    ctx.lineTo(w * 0.3, 36);
    ctx.lineTo(0, 4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Jetty posts and planks.
    ctx.fillStyle = 'rgba(88, 65, 48, .44)';
    for (let i = 0; i < 5; i++) {
      const x = w * (0.12 + i * 0.035);
      ctx.fillRect(x, h * 0.6, 8, h * 0.12);
    }
    ctx.fillRect(w * 0.1, h * 0.58, w * 0.19, 10);

    // Small fishing boats on the waterline.
    for (let i = 0; i < 2; i++) {
      const boatX = w * (0.22 + i * 0.33) + Math.sin(t * 0.7 + i) * 8;
      const boatY = h * (0.52 + i * 0.03) + Math.sin(t * 1.1 + i) * 2;
      ctx.fillStyle = 'rgba(86, 68, 55, .52)';
      ctx.beginPath();
      ctx.moveTo(boatX - 26, boatY);
      ctx.lineTo(boatX + 24, boatY);
      ctx.lineTo(boatX + 16, boatY + 10);
      ctx.lineTo(boatX - 18, boatY + 10);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = 'rgba(232, 245, 252, .46)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(boatX - 2, boatY);
      ctx.lineTo(boatX - 2, boatY - 24);
      ctx.lineTo(boatX + 16, boatY - 8);
      ctx.stroke();
    }

    // Palm trees and dune shrubs.
    ctx.fillStyle = 'rgba(92, 67, 42, .42)';
    for (let i = 0; i < 3; i++) {
      const baseX = w * (0.68 + i * 0.08);
      const baseY = h * (0.72 + (i % 2) * 0.03);
      ctx.save();
      ctx.translate(baseX, baseY);
      ctx.rotate(-0.12 + i * 0.06);
      ctx.fillRect(-3, -54, 6, 54);
      ctx.restore();
      ctx.fillStyle = 'rgba(84, 120, 82, .42)';
      for (let k = 0; k < 5; k++) {
        ctx.save();
        ctx.translate(baseX, baseY - 54);
        ctx.rotate(-0.9 + k * 0.42);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(18, -3, 28, -14);
        ctx.quadraticCurveTo(12, -11, 0, 0);
        ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = 'rgba(92, 67, 42, .42)';
    }

    // Bobbing buoy markers and seabirds over water.
    for (let i = 0; i < 3; i++) {
      const x = w * (0.18 + i * 0.21);
      const y = h * (0.56 + i * 0.03) + Math.sin(t * 1.8 + i) * 4;
      ctx.fillStyle = 'rgba(204, 86, 62, .65)';
      ctx.fillRect(x - 3, y - 10, 6, 12);
      ctx.beginPath();
      ctx.arc(x, y - 11, 5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = 'rgba(245, 249, 252, .48)';
    ctx.lineWidth = 1.4;
    for (let i = 0; i < 6; i++) {
      const x = ((t * 26 + i * 120) % (w + 80)) - 40;
      const y = h * (0.18 + (i % 3) * 0.06) + Math.sin(t * 1.2 + i) * 5;
      ctx.beginPath();
      ctx.moveTo(x - 10, y);
      ctx.quadraticCurveTo(x - 4, y - 5, x, y);
      ctx.quadraticCurveTo(x + 4, y - 5, x + 10, y);
      ctx.stroke();
    }

    const seaMist = ctx.createLinearGradient(0, h * 0.46, 0, h * 0.7);
    seaMist.addColorStop(0, 'rgba(206, 226, 236, 0.02)');
    seaMist.addColorStop(1, 'rgba(206, 226, 236, 0.14)');
    ctx.fillStyle = seaMist;
    ctx.fillRect(0, h * 0.46, w, h * 0.24);
  }

  function drawTasmaniaScene(w, h) {
    const t = performance.now() * 0.001;

    ctx.fillStyle = 'rgba(230, 240, 255, .14)';
    ctx.fillRect(0, h * .14, w, h * .62);

    // Dark mountain silhouettes.
    ctx.fillStyle = 'rgba(60, 74, 106, .78)';
    ctx.beginPath();
    ctx.moveTo(0, h * .7);
    ctx.lineTo(w * .18, h * .54);
    ctx.lineTo(w * .32, h * .72);
    ctx.lineTo(w * .5, h * .52);
    ctx.lineTo(w * .66, h * .72);
    ctx.lineTo(w * .82, h * .56);
    ctx.lineTo(w, h * .72);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // Animated aurora curtains.
    const shift = Math.sin(t * 0.9) * 0.12;
    const aurora = ctx.createLinearGradient(0, h * .04, w, h * .36);
    aurora.addColorStop(0, 'rgba(82, 183, 136, .0)');
    aurora.addColorStop(.2 + shift, 'rgba(82, 183, 136, .32)');
    aurora.addColorStop(.5, 'rgba(120, 220, 255, .34)');
    aurora.addColorStop(.78 - shift, 'rgba(150, 255, 210, .24)');
    aurora.addColorStop(1, 'rgba(82, 183, 136, .0)');
    ctx.fillStyle = aurora;
    ctx.fillRect(0, h * .03, w, h * .34);

    // Snowfall across entire screen.
    for (let i = 0; i < 90; i++) {
      const x = (i * 27 + t * (18 + (i % 7) * 3)) % (w + 40) - 20;
      const y = (i * 19 + t * (38 + (i % 5) * 6)) % (h + 60) - 30;
      const r = 1.1 + (i % 4) * 0.55;
      ctx.fillStyle = `rgba(245, 252, 255, ${0.2 + (i % 4) * 0.12})`;
      ctx.beginPath();
      ctx.arc(x + Math.sin(t * 1.4 + i) * 3, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Foreground rocky ridges.
    ctx.fillStyle = 'rgba(42, 53, 74, .62)';
    for (let i = 0; i < 6; i++) {
      const x = w * (0.02 + i * 0.18);
      const peak = h * (0.78 - (i % 2) * 0.04);
      ctx.beginPath();
      ctx.moveTo(x, h);
      ctx.lineTo(x + w * 0.08, peak);
      ctx.lineTo(x + w * 0.16, h);
      ctx.closePath();
      ctx.fill();
    }

    // Snow drift streaks across ground.
    ctx.strokeStyle = 'rgba(232, 243, 255, .28)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 16; i++) {
      const y = h * (0.73 + i * 0.018);
      ctx.beginPath();
      ctx.moveTo(0, y + Math.sin(t * 0.6 + i) * 2.5);
      ctx.quadraticCurveTo(w * 0.45, y - 6, w, y + Math.cos(t * 0.7 + i) * 2.5);
      ctx.stroke();
    }

    // Pine silhouettes and a small cabin to ground the snowy scene.
    ctx.fillStyle = 'rgba(28, 44, 42, .55)';
    for (let i = 0; i < 5; i++) {
      const x = w * (0.08 + i * 0.18);
      const baseY = h * (0.77 + (i % 2) * 0.025);
      ctx.beginPath();
      ctx.moveTo(x, baseY - 48);
      ctx.lineTo(x - 16, baseY - 16);
      ctx.lineTo(x - 9, baseY - 16);
      ctx.lineTo(x - 22, baseY + 8);
      ctx.lineTo(x - 7, baseY + 8);
      ctx.lineTo(x - 26, baseY + 30);
      ctx.lineTo(x + 26, baseY + 30);
      ctx.lineTo(x + 7, baseY + 8);
      ctx.lineTo(x + 22, baseY + 8);
      ctx.lineTo(x + 9, baseY - 16);
      ctx.lineTo(x + 16, baseY - 16);
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(76, 60, 52, .48)';
    ctx.fillRect(w * 0.76, h * 0.7, 54, 34);
    ctx.beginPath();
    ctx.moveTo(w * 0.755, h * 0.7);
    ctx.lineTo(w * 0.785, h * 0.67);
    ctx.lineTo(w * 0.83, h * 0.67);
    ctx.lineTo(w * 0.86, h * 0.7);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgba(232, 243, 255, .42)';
    ctx.fillRect(w * 0.775, h * 0.715, 12, 9);

    // Frozen puddle / ice patches in foreground.
    ctx.fillStyle = 'rgba(198, 226, 248, .18)';
    for (let i = 0; i < 4; i++) {
      const x = w * (0.18 + i * 0.17);
      const y = h * (0.86 + (i % 2) * 0.02);
      ctx.beginPath();
      ctx.ellipse(x, y, 34, 10, -0.08, 0, Math.PI * 2);
      ctx.fill();
    }

    // Low drifting snow fog crossing the foreground.
    for (let i = 0; i < 10; i++) {
      const x = ((t * (18 + i * 2) + i * 130) % (w + 140)) - 70;
      const y = h * (0.68 + (i % 4) * 0.05);
      const fog = ctx.createLinearGradient(x - 40, y, x + 40, y);
      fog.addColorStop(0, 'rgba(235, 245, 255, 0)');
      fog.addColorStop(0.5, 'rgba(235, 245, 255, .1)');
      fog.addColorStop(1, 'rgba(235, 245, 255, 0)');
      ctx.fillStyle = fog;
      ctx.beginPath();
      ctx.ellipse(x, y, 44, 10, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Penguin colony silhouettes along icy shore.
    for (let i = 0; i < 6; i++) {
      const px = w * (0.12 + i * 0.11) + Math.sin(t * 0.7 + i) * 4;
      const py = h * (0.84 + (i % 2) * 0.016);
      ctx.fillStyle = 'rgba(28, 36, 48, 0.76)';
      ctx.beginPath();
      ctx.ellipse(px, py, 8, 13, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(214, 224, 234, 0.58)';
      ctx.beginPath();
      ctx.ellipse(px, py + 2, 3.2, 6.4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(214, 168, 92, 0.62)';
      ctx.beginPath();
      ctx.moveTo(px + 3, py - 1);
      ctx.lineTo(px + 8, py + 1);
      ctx.lineTo(px + 3, py + 3);
      ctx.closePath();
      ctx.fill();
    }
  }

  function drawExpeditionMap(w, h, region) {
    const centerX = w * .5;
    const centerY = h * .54;
    const scale = Math.min(w, h) * .42;

    ctx.save();
    ctx.translate(centerX, centerY);

    drawAustraliaSilhouette(scale, region);
    drawRouteLine(scale);
    drawRegionLabels(scale);
    drawCompassRose(-scale * .68, -scale * .55, scale * .13);

    ctx.restore();
  }

  function drawAustraliaSilhouette(scale, region) {
    ctx.save();
    ctx.scale(scale, scale);

    ctx.beginPath();
    ctx.moveTo(-1.08, -.08);
    ctx.lineTo(-.98, -.36);
    ctx.lineTo(-.78, -.54);
    ctx.lineTo(-.46, -.64);
    ctx.lineTo(-.18, -.56);
    ctx.lineTo(.1, -.66);
    ctx.lineTo(.4, -.58);
    ctx.lineTo(.72, -.4);
    ctx.lineTo(.94, -.1);
    ctx.lineTo(1, .22);
    ctx.lineTo(.88, .5);
    ctx.lineTo(.66, .72);
    ctx.lineTo(.42, .84);
    ctx.lineTo(.16, .8);
    ctx.lineTo(-.06, .86);
    ctx.lineTo(-.28, .78);
    ctx.lineTo(-.5, .82);
    ctx.lineTo(-.76, .66);
    ctx.lineTo(-.94, .4);
    ctx.lineTo(-1.02, .12);
    ctx.closePath();

    ctx.fillStyle = 'rgba(243, 229, 192, .2)';
    ctx.fill();
    ctx.lineWidth = .03;
    ctx.strokeStyle = 'rgba(43, 43, 43, .85)';
    ctx.stroke();

    ctx.clip();

    const zones = [
      { x: -1.1, w: .62, color: '#c97d43' },
      { x: -.48, w: .56, color: '#567c4a' },
      { x: .08, w: .52, color: '#5c8fb8' },
      { x: .6, w: .44, color: '#4b5ea8' }
    ];

    zones.forEach((zone, index) => {
      ctx.fillStyle = index === state.regionIndex ? zone.color : hexToRgba(zone.color, .68);
      ctx.fillRect(zone.x, -.72, zone.w, 1.58);
    });

    if (region.terrain === 'dunes') {
      drawDunes();
    } else if (region.terrain === 'forest') {
      drawBushland();
    } else if (region.terrain === 'beach') {
      drawBeaches();
    } else {
      drawMountains();
    }

    ctx.restore();

    if (state.regionIndex === regions.length - 1) {
      ctx.save();
      ctx.translate(.34, .9);
      ctx.fillStyle = 'rgba(82, 183, 136, .25)';
      ctx.beginPath();
      ctx.ellipse(0, 0, .28, .18, -.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function drawRouteLine(scale) {
    ctx.save();
    ctx.scale(scale, scale);
    ctx.strokeStyle = 'rgba(255, 209, 102, .92)';
    ctx.lineWidth = .06;
    ctx.setLineDash([.14, .12]);
    ctx.beginPath();
    ctx.moveTo(-.78, .44);
    ctx.quadraticCurveTo(-.48, .12, -.18, .22);
    ctx.quadraticCurveTo(.18, .34, .46, .12);
    ctx.quadraticCurveTo(.68, -.04, .86, -.02);
    ctx.stroke();
    ctx.setLineDash([]);

    const markers = [
      [-.76, .42],
      [-.36, .18],
      [-.02, .26],
      [.32, .24],
      [.64, .02]
    ];

    markers.forEach((marker, index) => {
      ctx.fillStyle = index <= state.regionIndex ? 'rgba(255, 209, 102, 1)' : 'rgba(255, 209, 102, .35)';
      ctx.beginPath();
      ctx.arc(marker[0], marker[1], .05, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  }

  function drawRegionLabels(scale) {
    ctx.save();
    ctx.scale(scale, scale);
    ctx.fillStyle = 'rgba(43, 43, 43, .7)';
    ctx.font = 'bold .12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('OUTBACK', -.96, -.64);
    ctx.fillText('BUSHLAND', -.36, -.64);
    ctx.fillText('BEACHES', .24, -.64);
    ctx.fillText('MOUNTAINS', .14, .54);
    ctx.fillStyle = 'rgba(255, 209, 102, .9)';
    ctx.font = 'bold .14px sans-serif';
    ctx.fillText(regions[state.regionIndex].name.toUpperCase(), -.98, .92);
    ctx.restore();
  }

  function drawCompassRose(x, y, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = 'rgba(255, 209, 102, .55)';
    ctx.fillStyle = 'rgba(255, 209, 102, .22)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size * .22, -size * .22);
    ctx.lineTo(0, 0);
    ctx.lineTo(-size * .22, -size * .22);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function drawDunes() {
    ctx.strokeStyle = 'rgba(255, 235, 200, .2)';
    ctx.lineWidth = .02;
    for (let i = -2; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(-1, -.34 + i * .16);
      ctx.quadraticCurveTo(-.72, -.46 + i * .16, -.42, -.32 + i * .16);
      ctx.quadraticCurveTo(-.12, -.18 + i * .16, .16, -.3 + i * .16);
      ctx.stroke();
    }
  }

  function drawBushland() {
    ctx.fillStyle = 'rgba(19, 41, 24, .52)';
    for (let i = -2; i < 3; i++) {
      const x = -.32 + i * .22;
      ctx.fillRect(x, .02, .03, .26);
      ctx.beginPath();
      ctx.arc(x + .015, -.04, .08, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x - .03, 0, .06, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawBeaches() {
    ctx.strokeStyle = 'rgba(232, 249, 255, .35)';
    ctx.lineWidth = .02;
    for (let i = -2; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(.04, -.42 + i * .13);
      ctx.quadraticCurveTo(.24, -.36 + i * .13, .46, -.42 + i * .13);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(255, 229, 189, .44)';
    ctx.fillRect(.62, -.2, .22, .54);

    ctx.fillStyle = 'rgba(92, 64, 51, .35)';
    ctx.fillRect(.72, -.06, .02, .3);

    ctx.fillStyle = 'rgba(243, 229, 192, .45)';
    ctx.beginPath();
    ctx.moveTo(.68, -.28);
    ctx.lineTo(.74, -.1);
    ctx.lineTo(.8, -.28);
    ctx.closePath();
    ctx.fill();
  }

  function drawMountains() {
    ctx.fillStyle = 'rgba(120, 132, 152, .6)';
    ctx.beginPath();
    ctx.moveTo(.22, .84);
    ctx.lineTo(.32, .64);
    ctx.lineTo(.42, .84);
    ctx.lineTo(.52, .6);
    ctx.lineTo(.62, .84);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgba(230, 240, 255, .55)';
    ctx.beginPath();
    ctx.moveTo(.3, .68);
    ctx.lineTo(.32, .64);
    ctx.lineTo(.35, .68);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(.5, .64);
    ctx.lineTo(.52, .6);
    ctx.lineTo(.55, .64);
    ctx.closePath();
    ctx.fill();
  }

  function hexToRgba(hex, alpha) {
    const value = hex.replace('#', '');
    const red = Number.parseInt(value.slice(0, 2), 16);
    const green = Number.parseInt(value.slice(2, 4), 16);
    const blue = Number.parseInt(value.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function drawPlayerMotionEffects(charKey, terrain, gait) {
    const isBird = charKey === 'emu' || charKey === 'kookaburra' || charKey === 'cockatoo';
    const isWombat = charKey === 'wombat';
    const isPlatypus = charKey === 'platypus';
    const isEchidna = charKey === 'echidna';
    const isKangaroo = charKey === 'kangaroo' || charKey === 'wallaby';
    const isFastBird = charKey === 'kookaburra' || charKey === 'cockatoo';

    if (isBird) {
      // Wing flutter streaks behind bird characters - intensity varies by species
      const opacity = isFastBird ? 0.35 : 0.28;
      ctx.strokeStyle = `rgba(255, 245, 220, ${opacity})`;
      ctx.lineWidth = isFastBird ? 2.5 : 2;
      ctx.beginPath();
      ctx.moveTo(-22, -8);
      ctx.quadraticCurveTo(-36, -16 - Math.abs(gait * (isFastBird ? 8 : 5)), -16, -22);
      ctx.moveTo(22, -8);
      ctx.quadraticCurveTo(36, -16 - Math.abs(gait * (isFastBird ? 8 : 5)), 16, -22);
      ctx.stroke();
      return;
    }

    // Footstep pulses for land animals - size based on weight
    const footRadius = isWombat ? 8 : isKangaroo ? 7 : 5;
    const pulseAlpha = isWombat ? 0.25 : 0.2;
    ctx.fillStyle = `rgba(255, 209, 102, ${pulseAlpha})`;
    ctx.beginPath();
    ctx.ellipse(-12, 22 + Math.abs(gait * (isKangaroo ? 3 : 2)), footRadius, footRadius * 0.5, 0, 0, Math.PI * 2);
    ctx.ellipse(12, 22 + Math.abs(gait * (isKangaroo ? 3 : 2)), footRadius, footRadius * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Platypus water ripples
    if (isPlatypus) {
      ctx.strokeStyle = 'rgba(180, 220, 255, 0.3)';
      ctx.lineWidth = 1.5;
      const rippleSpread = Math.abs(gait) * 8;
      ctx.beginPath();
      ctx.ellipse(0, 24, 10 + rippleSpread, 3 + rippleSpread * 0.5, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Echidna shuffle dust
    if (isEchidna) {
      ctx.fillStyle = 'rgba(160, 120, 80, 0.18)';
      for (let i = 0; i < 3; i++) {
        const offset = Math.sin(gait * 2 + i) * 4;
        ctx.beginPath();
        ctx.ellipse(-10 + offset, 28 + i * 2, 4, 2, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Wombat burrow behavior in dunes/forest while sliding.
    if (isWombat && (terrain === 'dunes' || terrain === 'forest')) {
      const burrowDepth = 13;
      ctx.fillStyle = 'rgba(30, 18, 10, .42)';
      ctx.beginPath();
      ctx.ellipse(0, 22 + burrowDepth, 22, 8, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Kangaroo/Wallaby tail swish effect
    if (isKangaroo) {
      ctx.strokeStyle = 'rgba(200, 150, 100, 0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(8, 10);
      ctx.quadraticCurveTo(16 + gait * 8, 20, 20, 35 - Math.abs(gait) * 4);
      ctx.stroke();
    }
  }

  function drawPlayerAura(charKey, regionAccent) {
    const t = performance.now() * 0.001;
    const sliding = state.player.sliding > 0;
    const isBird = charKey === 'emu' || charKey === 'kookaburra' || charKey === 'cockatoo';
    const isKangaroo = charKey === 'kangaroo' || charKey === 'wallaby';
    const isWombat = charKey === 'wombat';

    // Character-specific aura size and pulsation
    let baseSize = 34;
    let pulseAmount = 0;
    let pulseSpeed = 1;

    if (isBird) {
      baseSize = 28;
      pulseAmount = Math.sin(t * 3.2) * 8;  // Rapid flutter pulse
      pulseSpeed = 1.2;
    } else if (isKangaroo) {
      baseSize = 40;
      pulseAmount = Math.sin(t * 1.8) * 12;  // Powerful rhythmic pulse
      pulseSpeed = 0.8;
    } else if (isWombat) {
      baseSize = 32;
      pulseAmount = Math.sin(t * 1.2) * 5;   // Slow steady pulse
      pulseSpeed = 0.6;
    } else if (charKey === 'platypus' || charKey === 'possum') {
      baseSize = 30;
      pulseAmount = Math.sin(t * 2.4) * 6;   // Medium undulating pulse
      pulseSpeed = 1;
    } else {
      pulseAmount = Math.sin(t * pulseSpeed) * 4;
    }

    const innerSize = sliding ? 26 : (baseSize - 8 + pulseAmount);
    const midSize = sliding ? 34 : (baseSize + 10 + pulseAmount * 0.5);
    const outerSize = sliding ? 38 : (baseSize + 15 + pulseAmount * 0.3);

    // Inner colour band - character accent
    ctx.fillStyle = hexToRgba(regionAccent, 0.32 + Math.sin(t * pulseSpeed) * 0.08);
    ctx.beginPath();
    ctx.arc(0, 0, innerSize, 0, Math.PI * 2);
    ctx.fill();

    // Mid glow
    ctx.fillStyle = 'rgba(255, 255, 255, ' + (0.18 + Math.sin(t * pulseSpeed * 0.7) * 0.06) + ')';
    ctx.beginPath();
    ctx.arc(0, 0, midSize, 0, Math.PI * 2);
    ctx.fill();

    // Outer rim glow
    const rimAlpha = isBird ? 0.55 : (isWombat ? 0.35 : 0.45);
    ctx.strokeStyle = 'rgba(255, 245, 220, ' + (rimAlpha + Math.sin(t * 1.5) * 0.15) + ')';
    ctx.lineWidth = isBird ? 2.5 : (isKangaroo ? 3 : 2);
    ctx.beginPath();
    ctx.arc(0, 0, outerSize, 0, Math.PI * 2);
    ctx.stroke();

    // Character-specific aura effect sparkles/shimmer
    if (isBird) {
      // Fast twinkling for birds
      for (let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2 + t * 2;
        const sparkle = Math.sin(t * 3.5 + i) * 0.5 + 0.5;
        const sx = Math.cos(angle) * (baseSize + 20) * sparkle;
        const sy = Math.sin(angle) * (baseSize + 20) * sparkle;
        ctx.fillStyle = `rgba(255, 240, 180, ${sparkle * 0.3})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 3 + sparkle * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (isKangaroo) {
      // Power aura for kangaroo
      ctx.strokeStyle = `rgba(255, 200, 100, ${0.2 + Math.sin(t * 1.8) * 0.15})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, midSize * 1.2, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  // ─── Vector character sprite system ─────────────────────────────────────────

  const CHAR_COLORS = {
    emu:        { body: '#7a6548', neck: '#8a7558', beak: '#c89040', eye: '#1a0e06', legs: '#6b5438' },
    kookaburra: { body: '#7a5c18', wings: '#3a2808', beak: '#d09828', eye: '#1a0e06', chest: '#f0e0a0' },
    cockatoo:   { body: '#f0ece0', wings: '#d8c880', crest: '#ffd000', beak: '#c09048', eye: '#2a1808' },
    kangaroo:   { body: '#c08050', belly: '#e0b880', ear: '#d09060', eye: '#2a1808' },
    wallaby:    { body: '#a07040', belly: '#c89870', ear: '#b08060', eye: '#2a1808' },
    wombat:     { body: '#5a4030', belly: '#7a6050', eye: '#2a1808', nose: '#321a10' },
    koala:      { body: '#888080', belly: '#d0c0b8', ear: '#a09090', nose: '#382030', eye: '#281820' },
    possum:     { body: '#706858', tail: '#605848', belly: '#c0b8a0', eye: '#281820' },
    echidna:    { body: '#483020', spine: '#a08048', nose: '#3a2018', eye: '#180c08' },
    platypus:   { body: '#608060', bill: '#c09048', tail: '#406048', eye: '#181008' },
    dingo:      { body: '#c08840', belly: '#e0c070', muzzle: '#d0a058', eye: '#281808' },
    bilby:      { body: '#706860', ear: '#e8c0b8', belly: '#c0b0a0', eye: '#281820', nose: '#322020' },
    tasdevil:   { body: '#201818', chest: '#f0e8e0', jaw: '#302020', eye: '#e02010' },
    quokka:     { body: '#b08840', belly: '#d0b068', ear: '#c09860', eye: '#281808' },
    numbat:     { body: '#c08848', stripe: '#381e08', belly: '#e0c080', tail: '#a06828', eye: '#180e08' }
  };

  function drawEyeSet(ex, ey, r, expression, eyeColor) {
    // Whites / base
    ctx.fillStyle = expression === 'hurt' ? '#ff4040' : '#f8f4e8';
    ctx.beginPath();
    ctx.ellipse(ex, ey, r, r * (expression === 'slide' ? 0.3 : 0.9), 0, 0, Math.PI * 2);
    ctx.fill();
    if (expression !== 'slide') {
      // Pupil
      ctx.fillStyle = eyeColor || '#1a0e06';
      const pupilX = ex + (expression === 'hurt' ? 0 : r * 0.2);
      const pupilY = ey + (expression === 'jump' ? -r * 0.2 : r * 0.1);
      ctx.beginPath();
      ctx.ellipse(pupilX, pupilY, r * 0.52, r * 0.52, 0, 0, Math.PI * 2);
      ctx.fill();
      // Shine dot
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.beginPath();
      ctx.arc(ex - r * 0.15, ey - r * 0.2, r * 0.22, 0, Math.PI * 2);
      ctx.fill();
      if (expression === 'happy') {
        ctx.strokeStyle = '#ffd060';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ex, ey, r * 1.4, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  function drawSmileOrFrown(mx, my, w2, expression) {
    ctx.strokeStyle = expression === 'hurt' ? '#c03020' : (expression === 'happy' ? '#8a5028' : '#5a3818');
    ctx.lineWidth = 2;
    ctx.beginPath();
    if (expression === 'hurt') {
      ctx.moveTo(mx - w2, my + 3);
      ctx.quadraticCurveTo(mx, my + 8, mx + w2, my + 3);
    } else if (expression === 'happy') {
      ctx.moveTo(mx - w2, my);
      ctx.quadraticCurveTo(mx, my - 7, mx + w2, my);
    } else {
      ctx.moveTo(mx - w2 * 0.6, my);
      ctx.lineTo(mx + w2 * 0.6, my);
    }
    ctx.stroke();
  }

  function drawEmuSprite(gait, expression, sliding) {
    const c = CHAR_COLORS.emu;
    const legSwing = gait * (sliding ? 0 : 12);
    const bodySquish = sliding ? 1.4 : 1;
    const bodyY = sliding ? 14 : 0;

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath();
    ctx.ellipse(0, 36 + bodyY, 18, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs
    ctx.strokeStyle = c.legs;
    ctx.lineWidth = 5;
    if (!sliding) {
      ctx.beginPath();
      ctx.moveTo(-4, 18); ctx.lineTo(-4 + legSwing * 0.6, 36); ctx.lineTo(-4 + legSwing, 46);
      ctx.moveTo(4, 18);  ctx.lineTo(4 - legSwing * 0.6, 36);  ctx.lineTo(4 - legSwing, 46);
      ctx.stroke();
      // Feet
      ctx.strokeStyle = c.beak;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-4 + legSwing, 46); ctx.lineTo(-4 + legSwing - 6, 50); ctx.moveTo(-4 + legSwing, 46); ctx.lineTo(-4 + legSwing + 4, 50);
      ctx.moveTo(4 - legSwing, 46);  ctx.lineTo(4 - legSwing - 4, 50); ctx.moveTo(4 - legSwing, 46);  ctx.lineTo(4 - legSwing + 6, 50);
      ctx.stroke();
    }

    // Body
    ctx.fillStyle = c.body;
    ctx.beginPath();
    ctx.ellipse(0, 10 + bodyY, 16 * bodySquish, 22 / bodySquish, 0, 0, Math.PI * 2);
    ctx.fill();

    // Fluffy texture strokes on body
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 5; i++) {
      const bx = -10 + i * 4;
      ctx.beginPath();
      ctx.moveTo(bx + bodyY * 0.1, -5 + bodyY);
      ctx.quadraticCurveTo(bx + 5, 5 + bodyY, bx + 2, 18 + bodyY);
      ctx.stroke();
    }

    // Small wings
    ctx.fillStyle = 'rgba(100,80,50,0.5)';
    ctx.beginPath();
    ctx.ellipse(-16, 4 + bodyY + gait * 2, 8, 4, -0.4, 0, Math.PI * 2);
    ctx.ellipse(16, 4 + bodyY - gait * 2, 8, 4, 0.4, 0, Math.PI * 2);
    ctx.fill();

    if (!sliding) {
      // Neck
      ctx.fillStyle = c.neck;
      ctx.beginPath();
      ctx.moveTo(-5, -10 + bodyY); ctx.quadraticCurveTo(-6, -22, -3, -32);
      ctx.quadraticCurveTo(3, -22, 5, -10 + bodyY); ctx.closePath();
      ctx.fill();

      // Head
      ctx.fillStyle = c.neck;
      ctx.beginPath();
      ctx.ellipse(-1, -36, 9, 8, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // Beak
      ctx.fillStyle = c.beak;
      ctx.beginPath();
      ctx.moveTo(-8, -36); ctx.lineTo(-16, -34); ctx.lineTo(-8, -32); ctx.closePath();
      ctx.fill();

      // Eyes
      drawEyeSet(3, -38, 4, expression, c.eye);
    }
  }

  function drawFlyingBirdSprite(charKey, gait, expression, sliding) {
    const c = CHAR_COLORS[charKey];
    const wingFlap = Math.sin(gait * 3) * (sliding ? 5 : 18);
    const isKookaburra = charKey === 'kookaburra';
    const isCockatoo = charKey === 'cockatoo';

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.beginPath();
    ctx.ellipse(0, 28, 20, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tail
    ctx.fillStyle = isKookaburra ? '#5a4010' : c.wings;
    ctx.beginPath();
    ctx.moveTo(0, 10); ctx.lineTo(20, 18 + wingFlap * 0.3); ctx.lineTo(14, 8); ctx.closePath();
    ctx.fill();

    // Left wing
    ctx.fillStyle = c.wings || c.body;
    ctx.beginPath();
    ctx.moveTo(-4, 0);
    ctx.bezierCurveTo(-20, -wingFlap, -36, -wingFlap * 1.2, -32, 8);
    ctx.bezierCurveTo(-18, 14, -8, 8, -4, 0);
    ctx.fill();
    // Wing highlight stripe
    ctx.strokeStyle = 'rgba(255,255,220,0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-8, 2); ctx.bezierCurveTo(-20, -wingFlap + 4, -30, -wingFlap * 1.1 + 4, -28, 10);
    ctx.stroke();

    // Right wing
    ctx.fillStyle = c.wings || c.body;
    ctx.beginPath();
    ctx.moveTo(4, 0);
    ctx.bezierCurveTo(20, -wingFlap, 36, -wingFlap * 1.2, 32, 8);
    ctx.bezierCurveTo(18, 14, 8, 8, 4, 0);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(8, 2); ctx.bezierCurveTo(20, -wingFlap + 4, 30, -wingFlap * 1.1 + 4, 28, 10);
    ctx.stroke();

    // Body
    ctx.fillStyle = c.body;
    ctx.beginPath();
    ctx.ellipse(0, 2, 10, 14, 0, 0, Math.PI * 2);
    ctx.fill();

    // Chest patch
    ctx.fillStyle = c.chest || 'rgba(255,255,220,0.3)';
    ctx.beginPath();
    ctx.ellipse(0, 6, 6, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Cockatoo crest
    if (isCockatoo) {
      ctx.strokeStyle = c.crest;
      ctx.lineWidth = 3;
      for (let i = 0; i < 4; i++) {
        const cx = -4 + i * 2.5;
        const cy = -12 + gait * (2 + i);
        ctx.beginPath();
        ctx.moveTo(cx, -10); ctx.quadraticCurveTo(cx + (i - 1.5) * 3, cy - 10, cx + (i - 1.5) * 2, cy - 18);
        ctx.stroke();
      }
    }

    // Head
    ctx.fillStyle = c.body;
    ctx.beginPath();
    ctx.ellipse(0, -12, 9, 9, 0, 0, Math.PI * 2);
    ctx.fill();

    // Beak
    ctx.fillStyle = c.beak;
    ctx.beginPath();
    if (isKookaburra) {
      ctx.moveTo(-8, -13); ctx.lineTo(-20, -10); ctx.lineTo(-20, -14); ctx.lineTo(-8, -17);
    } else {
      ctx.moveTo(-7, -13); ctx.lineTo(-14, -11); ctx.lineTo(-14, -14); ctx.lineTo(-7, -16);
    }
    ctx.closePath();
    ctx.fill();

    // Eyes
    drawEyeSet(4, -14, 4.5, expression, c.eye);

    // Feet when not flying high
    if (!sliding) {
      ctx.strokeStyle = c.beak;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-5, 16); ctx.lineTo(-5, 26); ctx.moveTo(5, 16); ctx.lineTo(5, 26);
      ctx.moveTo(-5, 26); ctx.lineTo(-9, 30); ctx.moveTo(-5, 26); ctx.lineTo(-1, 30);
      ctx.moveTo(5, 26);  ctx.lineTo(1, 30);  ctx.moveTo(5, 26);  ctx.lineTo(9, 30);
      ctx.stroke();
    }
  }

  function drawKangarooSprite(charKey, gait, expression, sliding) {
    const c = CHAR_COLORS[charKey];
    const isWallaby = charKey === 'wallaby';
    const legSwing = gait * (sliding ? 0 : (isWallaby ? 10 : 14));
    const bodyY = sliding ? 12 : 0;
    const lean = sliding ? 0.5 : gait * 0.08;

    if (isWallaby) {
      // ── WALLABY: compact, rounded, short legs, stubby tail, wide small ears ──

      // Shadow – smaller footprint
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.beginPath();
      ctx.ellipse(0, 30 + bodyY, 13, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Short stubby tail (nearly horizontal, low)
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.moveTo(6, 14 + bodyY);
      ctx.quadraticCurveTo(20, 20 + bodyY, 22, 28 + bodyY);
      ctx.quadraticCurveTo(14, 26 + bodyY, 4, 18 + bodyY);
      ctx.closePath();
      ctx.fill();

      // Short thick back legs
      ctx.strokeStyle = c.body;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(-3, 12 + bodyY); ctx.lineTo(-3 + legSwing * 0.5, 22 + bodyY); ctx.lineTo(-3 + legSwing, 30 + bodyY);
      ctx.moveTo(3, 12 + bodyY);  ctx.lineTo(3 - legSwing * 0.5, 22 + bodyY);  ctx.lineTo(3 - legSwing, 30 + bodyY);
      ctx.stroke();

      // Body – rounder and lower than kangaroo
      ctx.save();
      ctx.rotate(lean);
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.ellipse(0, 4 + bodyY, 14, 16, 0, 0, Math.PI * 2);
      ctx.fill();

      // Belly – lighter, more oval
      ctx.fillStyle = c.belly;
      ctx.beginPath();
      ctx.ellipse(0, 8 + bodyY, 9, 11, 0, 0, Math.PI * 2);
      ctx.fill();

      // Short arms (wallabies hold arms closer in)
      ctx.strokeStyle = c.body;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-10, -2 + bodyY); ctx.quadraticCurveTo(-14, 4 + bodyY, -11, 10 + bodyY);
      ctx.moveTo(10, -2 + bodyY);  ctx.quadraticCurveTo(14, 4 + bodyY, 11, 10 + bodyY);
      ctx.stroke();
      ctx.restore();

      if (!sliding) {
        ctx.save();
        ctx.rotate(lean * 0.4);

        // Head – noticeably rounder and wider than kangaroo
        ctx.fillStyle = c.body;
        ctx.beginPath();
        ctx.ellipse(0, -13, 11, 11, 0, 0, Math.PI * 2);
        ctx.fill();

        // Short wide snout (unlike kangaroo's longer elongated one)
        ctx.fillStyle = c.belly;
        ctx.beginPath();
        ctx.ellipse(-4, -9, 7, 4, 0.1, 0, Math.PI * 2);
        ctx.fill();

        // Wide rounded ears set farther apart and shorter than kangaroo
        ctx.fillStyle = c.body;
        ctx.beginPath();
        ctx.ellipse(-10, -21, 5, 7, -0.35, 0, Math.PI * 2);
        ctx.ellipse(6, -21, 4.5, 6, 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = c.ear;
        ctx.beginPath();
        ctx.ellipse(-10, -21, 3, 4.5, -0.35, 0, Math.PI * 2);
        ctx.ellipse(6, -21, 2.8, 4, 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Dark nose
        ctx.fillStyle = '#2a1008';
        ctx.beginPath();
        ctx.ellipse(-8, -8, 2.5, 2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Eyes – set wider apart on the rounder head
        drawEyeSet(-4, -15, 3.5, expression, c.eye);
        drawEyeSet(5, -15, 3.5, expression, c.eye);
        ctx.restore();
      }

    } else {
      // ── KANGAROO: tall, muscular, long angular face, big upright ears ──

      // Shadow – larger footprint
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.beginPath();
      ctx.ellipse(0, 44 + bodyY, 16, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Long powerful tail (thick at base, tapers)
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.moveTo(8, 22 + bodyY);
      ctx.quadraticCurveTo(32, 30 + bodyY - legSwing * 0.3, 36, 46 + bodyY);
      ctx.quadraticCurveTo(24, 44 + bodyY, 6, 28 + bodyY);
      ctx.closePath();
      ctx.fill();
      // Tail shading
      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.beginPath();
      ctx.moveTo(8, 22 + bodyY);
      ctx.quadraticCurveTo(26, 34 + bodyY, 34, 46 + bodyY);
      ctx.quadraticCurveTo(28, 45 + bodyY, 6, 28 + bodyY);
      ctx.closePath();
      ctx.fill();

      // Long powerful back legs
      ctx.strokeStyle = c.body;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(-3, 18 + bodyY); ctx.lineTo(-3 + legSwing * 0.4, 34 + bodyY); ctx.lineTo(-3 + legSwing, 46 + bodyY);
      ctx.moveTo(4, 18 + bodyY);  ctx.lineTo(4 - legSwing * 0.4, 34 + bodyY);  ctx.lineTo(4 - legSwing, 46 + bodyY);
      ctx.stroke();
      // Ankle joint
      ctx.fillStyle = c.ear;
      ctx.beginPath();
      ctx.arc(-3 + legSwing * 0.4, 34 + bodyY, 3.5, 0, Math.PI * 2);
      ctx.arc(4 - legSwing * 0.4, 34 + bodyY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Body – tall oval, slight forward lean
      ctx.save();
      ctx.rotate(lean);
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.ellipse(0, 6 + bodyY, 12, 22, 0.15, 0, Math.PI * 2);
      ctx.fill();

      // Chest muscle definition
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.beginPath();
      ctx.ellipse(-5, 0 + bodyY, 5, 10, 0.2, 0, Math.PI * 2);
      ctx.ellipse(5, 0 + bodyY, 5, 10, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // Belly pouch
      ctx.fillStyle = c.belly;
      ctx.beginPath();
      ctx.ellipse(2, 14 + bodyY, 8, 12, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Long arms (held up, more alert)
      ctx.strokeStyle = c.body;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(-8, -6 + bodyY); ctx.quadraticCurveTo(-20, 2 + bodyY, -16, 10 + bodyY);
      ctx.moveTo(8, -6 + bodyY);  ctx.quadraticCurveTo(20, 2 + bodyY, 16, 10 + bodyY);
      ctx.stroke();
      ctx.restore();

      if (!sliding) {
        ctx.save();
        ctx.rotate(lean * 0.5);

        // Head – longer, narrower, more angular than wallaby
        ctx.fillStyle = c.body;
        ctx.beginPath();
        ctx.ellipse(-1, -18, 8, 12, -0.12, 0, Math.PI * 2);
        ctx.fill();

        // Distinctive long narrow snout
        ctx.fillStyle = c.ear;
        ctx.beginPath();
        ctx.moveTo(-3, -12);
        ctx.quadraticCurveTo(-10, -10, -16, -8);
        ctx.quadraticCurveTo(-10, -14, -3, -14);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.12)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-3, -13); ctx.lineTo(-14, -11);
        ctx.stroke();

        // Tall pointed ears (distinctly upright, different from wallaby's)
        ctx.fillStyle = c.body;
        ctx.beginPath();
        ctx.ellipse(-7, -28, 3.5, 10, -0.15, 0, Math.PI * 2);
        ctx.ellipse(2, -28, 3, 9, 0.18, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = c.ear;
        ctx.beginPath();
        ctx.ellipse(-7, -28, 2, 7, -0.15, 0, Math.PI * 2);
        ctx.ellipse(2, -28, 1.8, 6, 0.18, 0, Math.PI * 2);
        ctx.fill();

        // Dark nose
        ctx.fillStyle = '#2a1008';
        ctx.beginPath();
        ctx.ellipse(-14, -8, 2, 1.5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Eyes – set on the longer angular head
        drawEyeSet(1, -20, 4, expression, c.eye);
        ctx.restore();
      }
    }
  }

  function drawCompactMarsupialSprite(charKey, gait, expression, sliding) {
    const c = CHAR_COLORS[charKey];
    const waddle = gait * (sliding ? 0 : 8);
    const bodyY = sliding ? 10 : 0;
    const isKoala = charKey === 'koala';
    const isEchidna = charKey === 'echidna';

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath();
    ctx.ellipse(0, 32 + bodyY, 18, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs
    ctx.strokeStyle = c.body;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-8, 18 + bodyY); ctx.lineTo(-8 + waddle, 32 + bodyY);
    ctx.moveTo(8, 18 + bodyY);  ctx.lineTo(8 - waddle, 32 + bodyY);
    ctx.stroke();

    // Body
    ctx.fillStyle = c.body;
    ctx.beginPath();
    ctx.ellipse(0, 8 + bodyY, 18, 18, 0, 0, Math.PI * 2);
    ctx.fill();

    // Echidna spines
    if (isEchidna) {
      ctx.strokeStyle = c.spine;
      ctx.lineWidth = 2;
      for (let i = 0; i < 10; i++) {
        const angle = -0.8 + i * 0.18;
        const bx = Math.cos(angle) * 18;
        const by = Math.sin(angle) * 18 + 8 + bodyY;
        ctx.beginPath();
        ctx.moveTo(bx * 0.7, by + 8 * (1 - 0.7));
        ctx.lineTo(bx + Math.cos(angle) * 10, by + Math.sin(angle) * 10);
        ctx.stroke();
      }
    }

    // Belly
    ctx.fillStyle = c.belly;
    ctx.beginPath();
    ctx.ellipse(0, 12 + bodyY, 11, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Arms
    ctx.strokeStyle = c.body;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-16, 2 + bodyY); ctx.lineTo(-22, 12 + bodyY + waddle * 0.5);
    ctx.moveTo(16, 2 + bodyY);  ctx.lineTo(22, 12 + bodyY - waddle * 0.5);
    ctx.stroke();

    if (!sliding) {
      // Head
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.ellipse(0, -14, isKoala ? 14 : 10, isKoala ? 12 : 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Koala big ears
      if (isKoala) {
        ctx.fillStyle = c.ear;
        ctx.beginPath();
        ctx.ellipse(-14, -22, 9, 9, 0, 0, Math.PI * 2);
        ctx.ellipse(14, -22, 9, 9, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(200,160,150,0.6)';
        ctx.beginPath();
        ctx.ellipse(-14, -22, 5, 5, 0, 0, Math.PI * 2);
        ctx.ellipse(14, -22, 5, 5, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Echidna long snout
      if (isEchidna) {
        ctx.fillStyle = c.nose;
        ctx.beginPath();
        ctx.moveTo(-10, -12); ctx.quadraticCurveTo(-22, -14, -26, -10); ctx.lineTo(-10, -8);
        ctx.closePath();
        ctx.fill();
      }

      // Nose
      if (!isEchidna) {
        ctx.fillStyle = c.nose;
        ctx.beginPath();
        ctx.ellipse(0, -10, isKoala ? 5 : 3, isKoala ? 4 : 2.5, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Eyes
      drawEyeSet(isEchidna ? 2 : -5, -17, 4, expression, c.eye);
      if (!isEchidna) drawEyeSet(5, -17, 4, expression, c.eye);
    }
  }

  function drawDingoSprite(gait, expression, sliding) {
    const c = CHAR_COLORS.dingo;
    const legSwing = gait * (sliding ? 0 : 13);
    const bodyY = sliding ? 12 : 0;

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath();
    ctx.ellipse(0, 36 + bodyY, 18, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tail
    ctx.strokeStyle = c.body;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(12, 4 + bodyY);
    ctx.quadraticCurveTo(28, -8 + bodyY - legSwing * 0.5, 24, -18 + bodyY);
    ctx.stroke();

    // Back legs
    ctx.strokeStyle = c.body;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-6, 14 + bodyY); ctx.lineTo(-6 + legSwing, 28 + bodyY); ctx.lineTo(-6 + legSwing * 1.2, 38 + bodyY);
    ctx.moveTo(6, 14 + bodyY);  ctx.lineTo(6 - legSwing, 28 + bodyY);  ctx.lineTo(6 - legSwing * 1.2, 38 + bodyY);
    ctx.stroke();

    // Body
    ctx.fillStyle = c.body;
    ctx.beginPath();
    ctx.ellipse(0, 6 + bodyY, 13, 18, 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = c.belly;
    ctx.beginPath();
    ctx.ellipse(0, 10 + bodyY, 8, 12, 0.1, 0, Math.PI * 2);
    ctx.fill();

    // Front legs
    ctx.strokeStyle = c.body;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-8, -6 + bodyY); ctx.lineTo(-8 - legSwing * 0.6, 10 + bodyY); ctx.lineTo(-8 - legSwing * 0.8, 22 + bodyY);
    ctx.moveTo(8, -6 + bodyY);  ctx.lineTo(8 + legSwing * 0.6, 10 + bodyY);  ctx.lineTo(8 + legSwing * 0.8, 22 + bodyY);
    ctx.stroke();

    if (!sliding) {
      // Neck
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.moveTo(-6, -10 + bodyY); ctx.lineTo(-6, -22); ctx.lineTo(6, -22); ctx.lineTo(6, -10 + bodyY); ctx.closePath();
      ctx.fill();

      // Head
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.ellipse(0, -28, 11, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Ears
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.moveTo(-8, -34); ctx.lineTo(-12, -44); ctx.lineTo(-4, -36);
      ctx.moveTo(8, -34);  ctx.lineTo(12, -44);  ctx.lineTo(4, -36);
      ctx.fill();

      // Muzzle
      ctx.fillStyle = c.muzzle;
      ctx.beginPath();
      ctx.ellipse(-6, -26, 8, 6, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#1a0c08';
      ctx.beginPath();
      ctx.ellipse(-10, -24, 2, 1.5, 0, 0, Math.PI * 2);
      ctx.fill();

      drawEyeSet(4, -30, 4, expression, c.eye);
    }
  }

  function drawGenericRunnerSprite(charKey, gait, expression, sliding) {
    // Fallback for platypus, possum, bilby, quokka, numbat, tasdevil
    const c = CHAR_COLORS[charKey] || CHAR_COLORS.wombat;
    const waddle = gait * (sliding ? 0 : 10);
    const bodyY = sliding ? 10 : 0;
    const isTasDevil = charKey === 'tasdevil';
    const isPlatypus = charKey === 'platypus';
    const isBilby = charKey === 'bilby';
    const isQuokka = charKey === 'quokka';
    const isNumbat = charKey === 'numbat';

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath();
    ctx.ellipse(0, 32 + bodyY, 15, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tail
    if (charKey === 'possum' || isNumbat || charKey === 'platypus') {
      ctx.strokeStyle = c.tail || c.body;
      ctx.lineWidth = isNumbat ? 5 : 3;
      ctx.beginPath();
      ctx.moveTo(10, 10 + bodyY);
      ctx.quadraticCurveTo(24, 16 + bodyY - waddle * 0.4, 28 + waddle * 0.3, 26 + bodyY);
      ctx.stroke();
    }

    // Legs
    ctx.strokeStyle = c.body;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-7, 14 + bodyY); ctx.lineTo(-7 + waddle, 26 + bodyY);
    ctx.moveTo(7, 14 + bodyY);  ctx.lineTo(7 - waddle, 26 + bodyY);
    ctx.stroke();

    // Body
    ctx.fillStyle = c.body;
    ctx.beginPath();
    ctx.ellipse(0, 4 + bodyY, 13, 16, 0, 0, Math.PI * 2);
    ctx.fill();

    // Numbat stripes
    if (isNumbat) {
      ctx.strokeStyle = c.stripe;
      ctx.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        const sy = -4 + i * 5 + bodyY;
        ctx.beginPath();
        ctx.moveTo(-12, sy); ctx.lineTo(12, sy + 2);
        ctx.stroke();
      }
    }

    // Belly
    ctx.fillStyle = c.belly;
    ctx.beginPath();
    ctx.ellipse(0, 8 + bodyY, 8, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Platypus bill
    if (isPlatypus) {
      ctx.fillStyle = c.bill;
      ctx.beginPath();
      ctx.ellipse(-18, -14, 12, 5, 0.2, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!sliding) {
      // Head
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.ellipse(0, -14, isTasDevil ? 13 : 10, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tas devil white chest
      if (isTasDevil) {
        ctx.fillStyle = c.chest;
        ctx.beginPath();
        ctx.ellipse(0, -8, 8, 12, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Bilby big ears
      if (isBilby) {
        ctx.fillStyle = c.body;
        ctx.beginPath();
        ctx.ellipse(-8, -26, 4, 14, -0.3, 0, Math.PI * 2);
        ctx.ellipse(6, -26, 3.5, 12, 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = c.ear;
        ctx.beginPath();
        ctx.ellipse(-8, -26, 2, 10, -0.3, 0, Math.PI * 2);
        ctx.ellipse(6, -26, 2, 8, 0.25, 0, Math.PI * 2);
        ctx.fill();
      }

      // Quokka rounded ears + smile
      if (isQuokka) {
        ctx.fillStyle = c.ear;
        ctx.beginPath();
        ctx.ellipse(-10, -22, 6, 6, 0, 0, Math.PI * 2);
        ctx.ellipse(10, -22, 6, 6, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Nose
      ctx.fillStyle = c.nose || '#2a1808';
      ctx.beginPath();
      ctx.ellipse(isPlatypus ? -16 : 0, -10, isPlatypus ? 2 : 3, 2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Eyes
      drawEyeSet(-4, -16, 4, expression, c.eye);
      drawEyeSet(4, -16, 4, expression, c.eye);

      // Quokka smile
      if (isQuokka && expression !== 'hurt') {
        ctx.strokeStyle = '#5a3018';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-5, -10);
        ctx.quadraticCurveTo(0, -6, 5, -10);
        ctx.stroke();
      }
    }
  }

  function drawCharacterSprite(charKey, gait, expression, sliding, jumping) {
    const c = CHAR_COLORS[charKey] || CHAR_COLORS.emu;
    const hurtFlash = expression === 'hurt';
    const happyGlow = expression === 'happy';

    ctx.save();

    // Expression glow
    if (hurtFlash) {
      ctx.shadowColor = 'rgba(255,60,40,0.95)';
      ctx.shadowBlur = 22;
    } else if (happyGlow) {
      ctx.shadowColor = 'rgba(255,220,60,0.9)';
      ctx.shadowBlur = 20;
    } else {
      ctx.shadowColor = 'rgba(255,245,210,0.7)';
      ctx.shadowBlur = 16;
    }

    // Hurt flash tint overlay (applied via globalAlpha flicker)
    if (hurtFlash && Math.floor(performance.now() / 80) % 2 === 0) {
      ctx.globalAlpha = 0.65;
    }

    const s = sliding > 0;
    const j = jumping > 0;

    if (charKey === 'emu') {
      drawEmuSprite(gait, expression, s);
    } else if (charKey === 'cockatoo' || charKey === 'kookaburra') {
      drawFlyingBirdSprite(charKey, gait, expression, s);
    } else if (charKey === 'kangaroo' || charKey === 'wallaby') {
      drawKangarooSprite(charKey, gait, expression, s);
    } else if (charKey === 'wombat' || charKey === 'koala' || charKey === 'echidna') {
      drawCompactMarsupialSprite(charKey, gait, expression, s);
    } else if (charKey === 'dingo') {
      drawDingoSprite(gait, expression, s);
    } else {
      // possum, bilby, quokka, platypus, numbat, tasdevil
      drawGenericRunnerSprite(charKey, gait, expression, s);
    }

    ctx.restore();
  }

  // ─── Character-specific gait/animation functions ───────────────────────────
  function getCharacterGait(t, charKey) {
    // Each character gets its own unique running animation signature
    const s = Math.sin(t);
    const c = Math.cos(t);
    const s2 = Math.sin(t * 2);

    if (charKey === 'emu') {
      // Fast, bouncy, bird-like - high frequency fluttering bounce
      return s * (0.8 + Math.sin(t * 3) * 0.4);
    }
    if (charKey === 'kookaburra' || charKey === 'cockatoo') {
      // Flying birds - rapid wing beats with slight height undulation
      return Math.sin(t * 2.8) * 0.9 + Math.sin(t * 0.6) * 0.3;
    }
    if (charKey === 'kangaroo') {
      // Powerful hops with long pauses (characteristic kangaroo bound)
      return Math.pow(Math.sin(t * 1.2) * 0.5 + 0.5, 1.5) * 1.1 - 0.4;
    }
    if (charKey === 'wallaby') {
      // Compact waddle, faster and more even than kangaroo
      return Math.sin(t * 1.8) * 0.7 + Math.sin(t * 3.6) * 0.15;
    }
    if (charKey === 'wombat') {
      // Heavy, chunky waddle - low frequency, powerful
      return Math.sin(t * 0.9) * 0.5 + Math.sin(t * 1.8) * 0.25;
    }
    if (charKey === 'koala') {
      // Slow, steady climb-like motion
      return Math.sin(t * 0.8) * 0.35 + Math.sin(t * 1.6) * 0.15;
    }
    if (charKey === 'possum') {
      // Gliding, smooth undulation with slight shimmy
      return Math.sin(t * 1.5) * 0.65 + Math.sin(t * 3.2) * 0.2;
    }
    if (charKey === 'echidna') {
      // Shuffle/waddle - stiff, deliberate
      return (Math.sin(t * 1.1) * 0.5 + Math.sin(t * 2.2) * 0.2) * 0.7;
    }
    if (charKey === 'platypus') {
      // Swimming-like side-to-side undulation
      return Math.sin(t * 1.4) * 0.7 + Math.sin(t * 2.8) * 0.25;
    }
    if (charKey === 'dingo') {
      // Canine trot - balanced, ground-covering
      return Math.sin(t * 1.6) * 0.6 + Math.sin(t * 3.2) * 0.18;
    }
    if (charKey === 'bilby') {
      // Fast scurry with head bob
      return Math.sin(t * 2.4) * 0.7 + Math.sin(t * 4.8) * 0.25;
    }
    if (charKey === 'tasdevil') {
      // Aggressive, jittery dash (slight chaos)
      return (Math.sin(t * 2) * 0.6 + Math.sin(t * 4.3) * 0.3 + Math.random() * 0.1);
    }
    if (charKey === 'quokka') {
      // Cute bouncy hop - compact and steady
      return Math.sin(t * 1.5) * 0.65 + Math.sin(t * 3) * 0.2;
    }
    if (charKey === 'numbat') {
      // Quick focused trot
      return Math.sin(t * 1.9) * 0.6 + Math.sin(t * 3.8) * 0.22;
    }

    // Fallback
    return s;
  }

  function getCharacterVerticalBob(t, charKey) {
    // How much the character bobs up/down based on gait
    if (charKey === 'emu') return Math.abs(Math.sin(t * 1.4)) * 2.5;
    if (charKey === 'kangaroo') return Math.pow(Math.sin(t * 1.2) + 1, 1.4) * 1.8 - 1.5;
    if (charKey === 'kookaburra' || charKey === 'cockatoo') return Math.sin(t * 2.8) * 2.2;
    if (charKey === 'wallaby') return Math.abs(Math.sin(t * 1.8)) * 1.8;
    if (charKey === 'bilby') return Math.abs(Math.sin(t * 2.4)) * 2;
    return Math.abs(Math.sin(t)) * 1.5;
  }

  function drawPlayer() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const x = w * getTrackXNorm(laneToXNorm(state.player.lane), 0.96);
    const yBase = h * .72;
    const jumpOffset = state.player.jump > 0 ? Math.sin((.9 - state.player.jump) * Math.PI) * 55 : 0;
    const y = yBase - jumpOffset + (state.player.sliding > 0 ? 20 : 0);
    const regionAccent = regions[state.regionIndex].accent;
    const terrain = regions[state.regionIndex].terrain;
    const t = performance.now() * 0.01;
    const isBird = selectedCharacter === 'emu' || selectedCharacter === 'kookaburra' || selectedCharacter === 'cockatoo';
    const isWombat = selectedCharacter === 'wombat';
    
    // Character-specific gait
    const gait = getCharacterGait(t, selectedCharacter);
    const bobAmount = getCharacterVerticalBob(t, selectedCharacter);
    const expression = getExpression();

    ctx.save();
    ctx.translate(x, y + bobAmount * (state.player.sliding > 0 ? 0.3 : 1));

    drawPlayerMotionEffects(selectedCharacter, terrain, gait);
    drawCharacterSprite(selectedCharacter, gait, expression, state.player.sliding, state.player.jump);
    ctx.restore();
  }

  function drawItem(item) {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const terrain = regions[state.regionIndex].terrain;
    const isServoTech = terrain === 'industrial';
    const depth = clamp01(1 - item.z);
    const baseXNorm = typeof item.xNorm === 'number' ? item.xNorm : laneToXNorm(item.lane);
    const x = w * getTrackXNorm(baseXNorm, depth);
    const y = h * .15 + (1 - item.z) * h * .65;
    ctx.save();
    ctx.translate(x, y);
    if (item.type === 'fragment') {
      ctx.fillStyle = palette.gold;
      ctx.beginPath();
      ctx.moveTo(0, -20);
      ctx.lineTo(16, 0);
      ctx.lineTo(0, 20);
      ctx.lineTo(-16, 0);
      ctx.closePath();
      ctx.fill();
      ctx.shadowColor = 'rgba(255, 209, 102, .6)';
      ctx.shadowBlur = 10;
      ctx.fillStyle = palette.paper;
      ctx.fillRect(-3, -9, 6, 18);
      ctx.shadowBlur = 0;
    } else if (item.type === 'scoreBonus' || item.type === 'scorePenalty') {
      drawScoreToken(item);
    } else if (item.type === 'treasureChest') {
      drawTreasureChestIcon();
    } else if (item.type === 'treasure' || item.type === 'relic') {
      drawTreasureOrb(item);
    } else {
      drawBombHazard();
    }

    if (isServoTech && (item.type === 'fragment' || item.type === 'treasure' || item.type === 'relic' || item.type === 'treasureChest')) {
      drawServoPickupGlow(item);
    }

    ctx.restore();
  }

  function drawTreasureChestIcon() {
    ctx.fillStyle = '#7a4d22';
    ctx.beginPath();
    ctx.roundRect(-20, -14, 40, 28, 7);
    ctx.fill();
    ctx.strokeStyle = '#f5d27b';
    ctx.lineWidth = 3;
    ctx.strokeRect(-18, -2, 36, 4);
    ctx.fillStyle = '#e9bf63';
    ctx.fillRect(-4, -6, 8, 12);
    ctx.strokeStyle = 'rgba(255, 234, 176, .8)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-4, -6, 8, 12);
  }

  function drawServoPickupGlow(item) {
    const phase = performance.now() * 0.006;
    const pulse = 0.22 + (Math.sin(phase + item.z * 9) + 1) * 0.14;
    ctx.strokeStyle = `rgba(108, 243, 255, ${pulse})`;
    ctx.lineWidth = 1.6;

    // Circuit bracket ring around collectible pickups in Servo only.
    ctx.beginPath();
    ctx.arc(0, 0, 22, 0.3, 1.1);
    ctx.arc(0, 0, 22, 2, 2.8);
    ctx.arc(0, 0, 22, 3.45, 4.25);
    ctx.arc(0, 0, 22, 5.1, 5.9);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-26, 0);
    ctx.lineTo(-16, 0);
    ctx.moveTo(26, 0);
    ctx.lineTo(16, 0);
    ctx.moveTo(0, -26);
    ctx.lineTo(0, -16);
    ctx.moveTo(0, 26);
    ctx.lineTo(0, 16);
    ctx.stroke();
  }

  function drawEvent(ev) {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const x = w * getTrackXNorm(laneToXNorm(ev.lane), clamp01(1 - ev.z));
    const y = h * .15 + (1 - ev.z) * h * .65;
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = palette.cyan;
    ctx.lineWidth = 4;
    ctx.strokeRect(-30, -20, 60, 40);
    ctx.fillStyle = palette.paper;
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(ev.type === 'puzzle' ? 'PUZZLE' : 'SHARD GATE', 0, 5);
    ctx.restore();
  }

  function drawVictorySunrise(w, h) {
    const t = performance.now() * 0.001;

    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#fff8cc');
    sky.addColorStop(0.38, '#ffd991');
    sky.addColorStop(0.72, '#ffba72');
    sky.addColorStop(1, '#f08a4b');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    // Horizon glow to make the entire finale feel bright and triumphant.
    const glow = ctx.createRadialGradient(w * 0.5, h * 0.62, 20, w * 0.5, h * 0.62, h * 0.8);
    glow.addColorStop(0, 'rgba(255, 251, 210, 0.9)');
    glow.addColorStop(0.45, 'rgba(255, 224, 142, 0.42)');
    glow.addColorStop(1, 'rgba(255, 199, 118, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);

    // Rising smiling sun.
    const sunX = w * 0.5;
    const sunY = h * 0.42 + Math.sin(t * 1.2) * 4;
    const sunR = Math.min(w, h) * 0.16;

    const sunAura = ctx.createRadialGradient(sunX, sunY, sunR * 0.2, sunX, sunY, sunR * 2.1);
    sunAura.addColorStop(0, 'rgba(255, 252, 212, 0.95)');
    sunAura.addColorStop(0.5, 'rgba(255, 218, 117, 0.45)');
    sunAura.addColorStop(1, 'rgba(255, 191, 83, 0)');
    ctx.fillStyle = sunAura;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#ffe88f';
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
    ctx.fill();

    // Sun face.
    ctx.fillStyle = '#7b4e22';
    ctx.beginPath();
    ctx.arc(sunX - sunR * 0.28, sunY - sunR * 0.1, sunR * 0.08, 0, Math.PI * 2);
    ctx.arc(sunX + sunR * 0.28, sunY - sunR * 0.1, sunR * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = Math.max(3, sunR * 0.06);
    ctx.strokeStyle = '#7b4e22';
    ctx.beginPath();
    ctx.arc(sunX, sunY + sunR * 0.1, sunR * 0.36, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // Rays.
    ctx.strokeStyle = 'rgba(255, 214, 122, 0.88)';
    ctx.lineWidth = Math.max(2, sunR * 0.04);
    for (let i = 0; i < 14; i += 1) {
      const angle = (Math.PI * 2 * i) / 14 + t * 0.16;
      const inner = sunR * 1.14;
      const outer = sunR * 1.44 + Math.sin(t * 2.1 + i) * sunR * 0.05;
      ctx.beginPath();
      ctx.moveTo(sunX + Math.cos(angle) * inner, sunY + Math.sin(angle) * inner);
      ctx.lineTo(sunX + Math.cos(angle) * outer, sunY + Math.sin(angle) * outer);
      ctx.stroke();
    }

    // Soft ground strip.
    const ground = ctx.createLinearGradient(0, h * 0.72, 0, h);
    ground.addColorStop(0, 'rgba(165, 96, 56, 0.25)');
    ground.addColorStop(1, 'rgba(102, 52, 31, 0.5)');
    ctx.fillStyle = ground;
    ctx.fillRect(0, h * 0.72, w, h * 0.28);
  }

  function render() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    drawBackground();

    state.items.forEach(drawItem);
    drawPlayer();

    if (!state.running && !state.ended) {
      ctx.fillStyle = 'rgba(13, 27, 42, .72)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = palette.paper;
      ctx.textAlign = 'center';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText('Dawn Dashers', w / 2, h / 2 - 30);
      ctx.font = '18px sans-serif';
      ctx.fillText('Traverse Australia, collect shards, and outrun the dark', w / 2, h / 2 + 2);
      ctx.fillText('Swipe or use arrow keys. Follow the expedition route.', w / 2, h / 2 + 28);
    }

    if (state.ended) {
      if (state.fragments >= 7) {
        drawVictorySunrise(w, h);
        ctx.fillStyle = 'rgba(44, 25, 13, .2)';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#3f240f';
        ctx.textAlign = 'center';
        ctx.font = '700 40px Cinzel Decorative';
        ctx.fillText('Sunrise Restored', w / 2, h * 0.69);
        ctx.font = '700 24px Cinzel Decorative';
        ctx.fillText('Chosen One', w / 2, h * 0.75);
        ctx.font = '700 17px Nunito';
        ctx.fillText(`Final Score ${state.score}  •  Shards ${state.fragments}/7`, w / 2, h * 0.82);
        ctx.fillText('Press Restart to play again.', w / 2, h * 0.865);
        return;
      }

      ctx.fillStyle = 'rgba(26, 20, 16, .66)';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = 'rgba(15, 11, 9, .72)';
      ctx.strokeStyle = 'rgba(255, 209, 102, .3)';
      ctx.lineWidth = 2;
      const panelW = Math.min(560, w * 0.82);
      const panelH = 200;
      const panelX = (w - panelW) / 2;
      const panelY = (h - panelH) / 2 - 12;
      ctx.beginPath();
      ctx.roundRect(panelX, panelY, panelW, panelH, 14);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = palette.paper;
      ctx.textAlign = 'center';
      ctx.font = '700 34px Cinzel Decorative';
      ctx.fillText(state.fragments >= 7 ? 'Expedition Complete!' : 'Game Over', w / 2, h / 2 - 58);
      ctx.font = '18px sans-serif';
      if (state.pendingReviveOffer) {
        ctx.fillText('You still have 1 revive option in this level.', w / 2, h / 2 - 26);
        ctx.fillText('Tap Revive below to enter the heart revival challenge.', w / 2, h / 2 + 2);
      } else {
        ctx.fillText(state.fragments >= 7 ? 'Sunrise restored. The expedition is complete.' : 'The night won this run. Try again.', w / 2, h / 2 - 26);
        ctx.fillText(state.fragments >= 7 ? 'Expedition Complete!' : 'Run Ended', w / 2, h / 2 + 2);
      }
      ctx.fillText(`Score ${state.score} | Shards ${state.fragments}/7`, w / 2, h / 2 + 30);
      ctx.fillText(state.pendingReviveOffer ? 'Revive can be used only once in this level.' : 'Press Restart to play again.', w / 2, h / 2 + 58);
    }
  }

  function onKeyDown(e) {
    if (landingOverlay?.classList.contains('open')) {
      return;
    }
    if (e.key === 'p' || e.key === 'P' || e.key === 'Escape') {
      togglePause();
      return;
    }
    if (!state.running && (e.key === 'Enter' || e.key === ' ')) {
      if (state.pendingReviveOffer) {
        activateReviveOffer();
      } else {
        resetGame();
      }
      return;
    }
    if (!state.running) return;
    if (state.paused) {
      if (e.key === 'f' || e.key === 'F') openFoodShop();
      return;
    }
    if (e.key === 'ArrowLeft' || e.key === 'a') shiftLane(-1);
    if (e.key === 'ArrowRight' || e.key === 'd') shiftLane(1);
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') jump();
    if (e.key === 'ArrowDown' || e.key === 's') slide();
    if (e.key === 'f' || e.key === 'F') openFoodShop();
  }

  function closeModal(modal) {
    if (!modal) {
      return;
    }
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  function getTapAction(touchX, touchY) {
    const width = Math.max(1, canvas.clientWidth || globalThis.innerWidth || 1);
    const xRatio = touchX / width;
    if (xRatio <= 0.35) {
      return 'left';
    }
    if (xRatio >= 0.65) {
      return 'right';
    }
    return touchY < canvas.clientHeight * 0.52 ? 'jump' : 'slide';
  }

  function getTouchAction(dx, dy, touchX, touchY) {
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const swipeThreshold = 16;
    const tapThreshold = 18;

    if (absDx < tapThreshold && absDy < tapThreshold) {
      return getTapAction(touchX, touchY);
    }
    if (absDx > absDy) {
      if (dx < -swipeThreshold) return 'left';
      if (dx > swipeThreshold) return 'right';
      return null;
    }
    if (dy < -swipeThreshold) return 'jump';
    if (dy > swipeThreshold) return 'slide';
    return null;
  }

  function bindTouchControls() {
    canvas.addEventListener('touchstart', (e) => {
      if (state.paused) return;
      const t = e.touches[0];
      state.swipeStart = { x: t.clientX, y: t.clientY };
    }, { passive: true });

    canvas.addEventListener('touchend', (e) => {
      if (!state.swipeStart || !state.running || state.paused) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - state.swipeStart.x;
      const dy = t.clientY - state.swipeStart.y;
      const action = getTouchAction(dx, dy, t.clientX, t.clientY);
      if (action === 'left') shiftLane(-1);
      if (action === 'right') shiftLane(1);
      if (action === 'jump') jump();
      if (action === 'slide') slide();
      state.swipeStart = null;
    }, { passive: true });
  }

  function bindGameplayControls() {
    startBtn.addEventListener('click', onStartButtonPressed);
    if (roadEventBtn) {
      roadEventBtn.addEventListener('click', requestRoadEvent);
    }
    if (hintBtn) {
      hintBtn.addEventListener('click', requestHint);
    }
    if (reviveBtn) {
      reviveBtn.addEventListener('click', () => {
        if (!state.pendingReviveOffer) {
          pushMessage('Revive is not available right now.');
          return;
        }
        activateReviveOffer();
      });
    }
    if (buyFoodBtn) {
      buyFoodBtn.addEventListener('click', openFoodShop);
    }
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        if (state.running) {
          togglePause();
          return;
        }
        if (!state.running) {
          onStartButtonPressed();
        }
      });
    }
  }

  function togglePause() {
    if (!state.running || state.ended) {
      return;
    }
    if (state.hungerPaused && shouldPauseForHunger()) {
      state.paused = true;
      state.message = 'Your dasher is still hungry. Buy food to continue.';
      showHungerModal();
      syncHud();
      syncPlaybackButton();
      return;
    }
    state.paused = !state.paused;
    state.message = state.paused
      ? 'Game paused. Food shop and puzzles are still available.'
      : 'Game resumed.';
    syncHud();
    syncPlaybackButton();
  }

  function bindCharacterControls() {
    characterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.character;
        if (!id || !characters[id]) {
          return;
        }
        if (!superModeEnabled && !isCharacterAvailableForCurrentLevel(id)) {
          const pair = getPairForLevel(state.progressLevel);
          pushMessage(`Pick ${characters[pair.fast].name} (fast) or ${characters[pair.slow].name} (slow).`);
          return;
        }
        setSelectedCharacter(id);
        refreshCharacterBio();
        pushMessage(`${characters[id].name} selected - ${characters[id].power}`);
      });
    });
  }

  function bindPuzzleControls() {
    if (puzzleAnswerInput) {
      puzzleAnswerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitPuzzle();
        }
      });
    }
    if (puzzleCheckBtn) {
      puzzleCheckBtn.addEventListener('click', checkPuzzleAnswer);
    }
    if (puzzleSubmitBtn) {
      puzzleSubmitBtn.addEventListener('click', submitPuzzle);
    }
    if (puzzleHintBtn) {
      puzzleHintBtn.addEventListener('click', () => {
        revealPuzzleHint();
      });
    }
    if (puzzleTopHintBtn) {
      puzzleTopHintBtn.addEventListener('click', () => {
        revealPuzzleHint();
      });
    }
    if (puzzleSkipBtn) {
      puzzleSkipBtn.addEventListener('click', skipPuzzle);
    }
  }

  function bindClick(element, handler) {
    if (!element) {
      return;
    }
    let lastTouchAt = 0;
    element.addEventListener('touchend', (event) => {
      lastTouchAt = Date.now();
      event.preventDefault();
      handler(event);
    }, { passive: false });
    element.addEventListener('click', (event) => {
      if (Date.now() - lastTouchAt < 500) {
        return;
      }
      handler(event);
    });
  }

  function bindSelectChange(selectEl, initialValue, handler) {
    if (!selectEl) {
      return;
    }
    selectEl.value = initialValue;
    selectEl.addEventListener('change', handler);
  }

  function bindRangeInput(rangeEl, initialValue, handler) {
    if (!rangeEl) {
      return;
    }
    rangeEl.value = String(initialValue);
    rangeEl.addEventListener('input', handler);
  }

  function bindModalControls() {
    bindClick(closeClueBtn, () => closeModal(clueModal));
    bindClick(closePuzzleBtn, () => closeModal(puzzleModal));
    bindClick(clueHintBtn, requestHint);
    bindClick(clueSolveBtn, () => {
      closeModal(clueModal);
      requestHint();
    });
    bindClick(landingSettingsBtn, () => {
      if (!settingsModal) {
        return;
      }
      settingsModal.classList.add('open');
      settingsModal.setAttribute('aria-hidden', 'false');
    });
    bindClick(closeSettingsBtn, () => closeModal(settingsModal));

    bindSelectChange(difficultySelect, gameDifficulty, () => {
      const nextDifficulty = difficultySelect.value;
      gameDifficulty = difficultyMultipliers[nextDifficulty] ? nextDifficulty : 'medium';
      localStorage.setItem(DIFFICULTY_KEY, gameDifficulty);
      pushMessage(`Difficulty: ${gameDifficulty[0].toUpperCase()}${gameDifficulty.slice(1)}`);
    });
    if (superModeRow) {
      superModeRow.style.display = superModeAllowed ? '' : 'none';
    }
    if (superModeSelect && !superModeAllowed) {
      superModeSelect.value = 'off';
      superModeSelect.disabled = true;
    }
    bindSelectChange(superModeSelect, superModeEnabled ? 'on' : 'off', () => {
      if (!superModeAllowed) {
        superModeEnabled = false;
        if (superModeSelect) {
          superModeSelect.value = 'off';
        }
        localStorage.setItem(SUPER_MODE_KEY, 'off');
        updateCharacterAvailability();
        syncHud();
        return;
      }
      superModeEnabled = superModeSelect.value === 'on';
      localStorage.setItem(SUPER_MODE_KEY, superModeEnabled ? 'on' : 'off');
      syncAdminProgressToSelectedCharacter();
      updateCharacterAvailability();
      syncHud();
      pushMessage(superModeEnabled
        ? 'Super Mode enabled: all dashers and terrains unlocked.'
        : 'Super Mode disabled. Normal unlock rules restored.');
    });
    bindSelectChange(terrain3dSelect, terrain3dEnabled ? 'on' : 'off', () => {
      terrain3dEnabled = terrain3dSelect.value !== 'off';
      localStorage.setItem(TERRAIN_3D_KEY, terrain3dEnabled ? 'on' : 'off');
      updateThreeVisibility();
      pushMessage(`3D Terrain: ${terrain3dEnabled ? 'On' : 'Off'}`);
    });
    bindSelectChange(musicToggleSelect, musicEnabled ? 'on' : 'off', () => {
      musicEnabled = musicToggleSelect.value !== 'off';
      localStorage.setItem(MUSIC_ENABLED_KEY, musicEnabled ? 'on' : 'off');
      ensureAudioStarted();
      syncAudioToRegion();
      pushMessage(`Music: ${musicEnabled ? 'On' : 'Off'}`);
    });
    bindRangeInput(musicVolumeRange, Math.round(musicVolume * 100), () => {
      musicVolume = Math.max(0, Math.min(1, Number(musicVolumeRange.value) / 100));
      localStorage.setItem(MUSIC_VOLUME_KEY, String(musicVolume));
      syncAudioToRegion();
    });
    bindRangeInput(sfxVolumeRange, Math.round(sfxVolume * 100), () => {
      sfxVolume = Math.max(0, Math.min(1, Number(sfxVolumeRange.value) / 100));
      localStorage.setItem(SFX_VOLUME_KEY, String(sfxVolume));
      syncAudioToRegion();
    });
    bindClick(pastGamesBtn, () => {
      if (!pastGamesModal) {
        return;
      }
      renderPastGames();
      pastGamesModal.classList.add('open');
      pastGamesModal.setAttribute('aria-hidden', 'false');
    });
    bindClick(closePastGamesBtn, () => closeModal(pastGamesModal));
    bindClick(closeFoodShopBtn, () => closeModal(foodShopModal));
    bindClick(closeHungerBtn, () => hideHungerModal(true));
    bindClick(foodCheckoutBtn, checkoutFoodCart);
    bindClick(hungerOpenShopBtn, openFoodShop);
    bindClick(clearFoodCartBtn, () => {
      state.foodCartByCharacter[selectedCharacter] = {};
      renderFoodShop();
    });
    bindClick(landingHelpBtn, () => {
      if (!helpModal) {
        return;
      }
      helpModal.classList.add('open');
      helpModal.setAttribute('aria-hidden', 'false');
    });
    bindClick(closeHelpBtn, () => closeModal(helpModal));
    bindClick(walkthroughNextBtn, () => {
      walkthroughIndex = Math.min(walkthroughIndex + 1, walkthroughSteps.length - 1);
      hydrateWalkthroughStep();
    });
    bindClick(walkthroughBeginBtn, closeWalkthroughAndStart);
    bindClick(walkthroughSkipBtn, closeWalkthroughAndStart);
  }

  function bindLandingFlowControls() {
    if (lcContinueBtn) {
      lcContinueBtn.addEventListener('click', () => {
        if (levelCompleteTimer) {
          clearTimeout(levelCompleteTimer);
          levelCompleteTimer = null;
        }
        if (levelCompleteOverlay) {
          levelCompleteOverlay.classList.remove('open');
          levelCompleteOverlay.setAttribute('aria-hidden', 'true');
        }
        setCharacterSelectionOpen(true);
        state.objective = 'Choose your character for the next level.';
        state.message = 'Pick your dasher!';
        syncHud();
      });
    }
    if (playNowBtn) {
      playNowBtn.addEventListener('click', () => {
        state.continueFromLevelUnlock = false;
        setLanding(false);
        setGameplayChrome(false);
        setCharacterSelectionOpen(true);
        state.objective = 'Choose your character, then tap Start Run.';
        state.message = 'Select your dasher power first.';
        syncHud();
      });
    }
    if (characterBackBtn) {
      characterBackBtn.addEventListener('click', () => {
        setCharacterSelectionOpen(false);
        setLanding(true);
        setGameplayChrome(false);
      });
    }
    if (characterStartBtn) {
      characterStartBtn.addEventListener('click', () => {
        const keepProgress = state.continueFromLevelUnlock;
        state.continueFromLevelUnlock = false;
        setCharacterSelectionOpen(false);
        setGameplayChrome(true);
        onStartButtonPressed(keepProgress);
      });
    }
  }

  function bindSystemEvents() {
    globalThis.addEventListener('keydown', onKeyDown);
    globalThis.addEventListener('resize', resize);
    globalThis.addEventListener('pointerdown', ensureAudioStarted, { passive: true });
  }

  function checkApi() {
    state.apiOnline = false;
  }

  function tick(time) {
    if (!state.lastTime) state.lastTime = time;
    const dt = Math.min((time - state.lastTime) / 1000, .033);
    state.lastTime = time;
    update(dt);
    updateThreeTerrain(dt);
    updateAurora(dt);
    requestAnimationFrame(tick);
  }

  function initializeGame() {
    initThreeTerrain();
    bindTouchControls();
    bindGameplayControls();
    bindCharacterControls();
    bindPuzzleControls();
    bindModalControls();
    bindLandingFlowControls();
    bindSystemEvents();

    resize();
    render();
    setLanding(true);
    setGameplayChrome(false);
    setCharacterSelectionOpen(false);
    checkApi();
    decorateCharacterButtons();
    applyCharacterSelectionTheme();
    syncPlaybackButton();
    syncAudioToRegion();
    requestAnimationFrame(tick);
  }

  initializeGame();
