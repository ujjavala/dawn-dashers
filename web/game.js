
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
  const PUZZLE_HISTORY_KEY = 'dawn_dashers_puzzle_history_v1';
  const SUPER_MODE_KEY = 'dawn_dashers_super_mode_v1';
  const MUSIC_ENABLED_KEY = 'dawn_dashers_music_enabled_v1';
  const MUSIC_VOLUME_KEY = 'dawn_dashers_music_volume_v1';
  const SFX_VOLUME_KEY = 'dawn_dashers_sfx_volume_v1';
  const TERRAIN_3D_KEY = 'dawn_dashers_terrain_3d_v1';
  const PUZZLE_BANK_UNLOCKS_KEY = 'dawn_dashers_puzzle_bank_unlocks_v1';
  const BG_MUSIC_CANDIDATE_SRCS = ['../bg-music.mp3', '/bg-music.mp3', 'bg-music.mp3'];
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
  // Keep gameplay in the original 2D style (triangular mountains + round trees).
  let terrain3dEnabled = false;
  localStorage.setItem(TERRAIN_3D_KEY, 'off');
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
    terrainType: null,
    props: [],
    leafAlphaTexture: null,
    toonGradients: null,
    loadingManager: null,
    gltfLoader: null,
    dracoLoader: null,
    rgbeLoader: null,
    pmremGenerator: null,
    gltfCache: new Map(),
    mixers: [],
    composer: null,
    renderPass: null,
    outlinePass: null,
    colorGradePass: null,
    regionRoot: null,
    dashersRoot: null,
    activeDasherId: null,
    activeDasherModel: null,
    regionLoadToken: 0,
    dasherLoadToken: 0,
    environmentReady: false,
    regionAnimated: []
  };
  const audioState = {
    ctx: null,
    master: null,
    music: null,
    sfx: null,
    bgMusicEl: null,
    bgMusicSrc: '',
    started: false
  };

  // ─── Three.js scene props registry ──────────────────────────────────────────
  // Each region populates threeState.props (array of THREE.Object3D)
  // so they can be cleared when switching regions.

  function clearThreeProps() {
    if (!threeState.scene || !threeState.props) return;
    threeState.props.forEach(p => threeState.scene.remove(p));
    threeState.props = [];
  }

  function getToonGradientMap(levels) {
    const THREE = globalThis.THREE;
    if (!threeState.toonGradients) {
      threeState.toonGradients = {};
    }
    const key = String(levels || 4);
    if (threeState.toonGradients[key]) {
      return threeState.toonGradients[key];
    }
    const size = Math.max(3, Math.min(8, Number(levels) || 4));
    const data = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
      data[i] = Math.round((i / (size - 1)) * 255);
    }
    const format = THREE.RedFormat || THREE.LuminanceFormat;
    const gradient = new THREE.DataTexture(data, size, 1, format);
    gradient.minFilter = THREE.NearestFilter;
    gradient.magFilter = THREE.NearestFilter;
    gradient.generateMipmaps = false;
    gradient.needsUpdate = true;
    threeState.toonGradients[key] = gradient;
    return gradient;
  }

  function makeToonMaterial(opts = {}) {
    const THREE = globalThis.THREE;
    const config = {
      color: opts.color ?? 0xffffff,
      emissive: opts.emissive ?? 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 0,
      transparent: Boolean(opts.transparent),
      opacity: opts.opacity ?? 1,
      alphaMap: opts.alphaMap || null,
      side: opts.side || THREE.FrontSide,
      roughness: opts.roughness ?? 0.82,
      metalness: opts.metalness ?? 0.06
    };
    const mat = new THREE.MeshStandardMaterial(config);
    if (opts.depthWrite === false) {
      mat.depthWrite = false;
    }
    if (opts.depthTest === false) {
      mat.depthTest = false;
    }
    return mat;
  }

  function addInvertedHull(mesh, thickness = 0.028, color = 0x16161f) {
    // Realistic mode: disable cartoon ink outlines.
    return;
  }

  function applyInvertedHullToObject(obj, thickness, color) {
    if (!obj?.traverse) {
      return;
    }
    obj.traverse(child => {
      if (child?.isMesh && !child.userData?.isOutlineHull) {
        addInvertedHull(child, thickness, color);
      }
    });
  }

  function getLeafAlphaTexture() {
    const THREE = globalThis.THREE;
    if (threeState.leafAlphaTexture) {
      return threeState.leafAlphaTexture;
    }
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 128;
    const g = c.getContext('2d');
    g.clearRect(0, 0, 128, 128);
    const radial = g.createRadialGradient(64, 56, 10, 64, 64, 62);
    radial.addColorStop(0, 'rgba(255,255,255,1)');
    radial.addColorStop(0.62, 'rgba(255,255,255,0.92)');
    radial.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = radial;
    g.beginPath();
    g.ellipse(64, 64, 56, 40, 0, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = 'rgba(255,255,255,0.35)';
    g.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
      g.beginPath();
      const x = 24 + i * 16;
      g.moveTo(x, 84);
      g.quadraticCurveTo(x + 8, 52, x + 4, 34);
      g.stroke();
    }
    const texture = new THREE.CanvasTexture(c);
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    threeState.leafAlphaTexture = texture;
    return texture;
  }

  function makeMesh(geo, mat, withOutline = true, outlineThickness = 0.028, outlineColor = 0x16161f) {
    const m = new globalThis.THREE.Mesh(geo, mat);
    m.castShadow = true;
    m.receiveShadow = true;
    if (withOutline) {
      addInvertedHull(m, outlineThickness, outlineColor);
    }
    return m;
  }

  function addProp(obj) {
    threeState.scene.add(obj);
    threeState.props.push(obj);
  }

  // Build a stylized palm tree group
  function buildPalmTree(x, z, h) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const trunk = makeMesh(
      new THREE.CylinderGeometry(0.12, 0.22, h, 6),
      makeToonMaterial({ color: 0x7a5030, gradientLevels: 4 })
    );
    trunk.position.set(0, h * 0.5, 0);
    grp.add(trunk);
    const frondMat = makeToonMaterial({ color: 0x4f9942, side: THREE.DoubleSide, gradientLevels: 3 });
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

  // Stylized eucalyptus cluster with anime foliage cards.
  function buildGumTree(x, z, h) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const trunk = makeMesh(
      new THREE.CylinderGeometry(0.1, 0.2, h, 5),
      makeToonMaterial({ color: 0x9a8060, gradientLevels: 4 })
    );
    trunk.position.set(0, h * 0.5, 0);
    grp.add(trunk);
    for (let b = 0; b < 4; b++) {
      const branch = makeMesh(
        new THREE.CylinderGeometry(0.04, 0.06, 0.9 + b * 0.08, 5),
        makeToonMaterial({ color: 0x876e4f, gradientLevels: 4 })
      );
      const angle = (b / 4) * Math.PI * 2 + 0.2;
      branch.position.set(Math.cos(angle) * 0.16, h * (0.66 + (b % 2) * 0.05), Math.sin(angle) * 0.16);
      branch.rotation.z = 0.82;
      branch.rotation.y = angle;
      grp.add(branch);
    }
    const tuftMat = makeToonMaterial({
      color: 0x80bc66,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      alphaMap: getLeafAlphaTexture(),
      depthWrite: false,
      gradientLevels: 3
    });
    const clumps = [
      [0, h + 0.45, 0, 1.2],
      [0.42, h + 0.68, 0.18, 1],
      [-0.4, h + 0.74, -0.16, 0.95],
      [0.08, h + 1.05, 0.34, 0.88],
      [-0.14, h + 1.08, -0.28, 0.92]
    ];
    clumps.forEach(([cx, cy, cz, scale], ci) => {
      for (let i = 0; i < 6; i++) {
        const width = (1.18 - (i % 3) * 0.14) * scale;
        const card = makeMesh(new THREE.PlaneGeometry(width, width * 0.72), tuftMat, false);
        const angle = (i / 6) * Math.PI * 2 + ci * 0.31;
        const ring = 0.14 + (i % 3) * 0.1;
        card.position.set(cx + Math.cos(angle) * ring, cy + (i % 2) * 0.08, cz + Math.sin(angle) * ring);
        card.rotation.y = angle + Math.PI * 0.5;
        card.rotation.x = -0.06 + (i % 3) * 0.04;
        addInvertedHull(card, 0.016, 0x233121);
        grp.add(card);
      }
      const core = makeMesh(
        new THREE.DodecahedronGeometry(0.34 * scale, 0),
        makeToonMaterial({ color: 0x73a95a, gradientLevels: 3 }),
        true,
        0.016,
        0x243523
      );
      core.position.set(cx, cy, cz);
      grp.add(core);
    });
    for (let i = 0; i < 4; i++) {
      const shrub = makeMesh(
        new THREE.DodecahedronGeometry(0.16 + i * 0.03, 0),
        makeToonMaterial({ color: 0x679851, gradientLevels: 3 }),
        true,
        0.012,
        0x243523
      );
      const ang = (i / 4) * Math.PI * 2 + 0.34;
      shrub.position.set(Math.cos(ang) * 0.33, h * 0.42 + (i % 2) * 0.06, Math.sin(ang) * 0.24);
      grp.add(shrub);
    }
    grp.position.set(x, 0, z);
    return grp;
  }

  // Build a sandstone mesa / rock
  function buildMesa(x, z, w2, h) {
    const THREE = globalThis.THREE;
    const mat = makeToonMaterial({ color: 0xcc7b2e, emissive: 0x2f1203, emissiveIntensity: 0.12, gradientLevels: 4 });
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
      makeToonMaterial({ color: 0x7f91bb, gradientLevels: 4 })
    );
    rock.position.set(x, r * 0.4, z);
    const snow = makeMesh(
      new THREE.SphereGeometry(r * 0.6, 6, 5),
      makeToonMaterial({ color: 0xe8f4ff, gradientLevels: 3 })
    );
    snow.position.set(x, r * 1.1, z);
    grp.add(rock, snow);
    return grp;
  }

  // Build a servo pylon / antenna mast
  function buildPylon(x, z, h) {
    const THREE = globalThis.THREE;
    const mat = makeToonMaterial({ color: 0x4a7fb2, emissive: 0x11406d, emissiveIntensity: 0.12, gradientLevels: 4 });
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

  function buildBoat(x, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const hull = makeMesh(
      new THREE.BoxGeometry(1.8, 0.4, 0.7),
      makeToonMaterial({ color: 0x6a4828, gradientLevels: 4 })
    );
    hull.position.set(x, -0.2, z);
    const mast = makeMesh(
      new THREE.CylinderGeometry(0.04, 0.04, 1.6, 4),
      makeToonMaterial({ color: 0x9a7850, gradientLevels: 4 })
    );
    mast.position.set(x, 0.8, z);
    const sail = makeMesh(
      new THREE.ConeGeometry(0.55, 1.1, 3),
      makeToonMaterial({ color: 0xf0e8d0, side: THREE.DoubleSide, gradientLevels: 3 })
    );
    sail.position.set(x + 0.25, 1, z);
    sail.rotation.set(0, 0, 0.35);
    grp.add(hull, mast, sail);
    return grp;
  }

  function buildLighthouse(x, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const tower = makeMesh(
      new THREE.CylinderGeometry(0.28, 0.32, 3.8, 12),
      makeToonMaterial({ color: 0xf5f5f0, gradientLevels: 4 })
    );
    tower.position.set(x, 1.9, z);
    grp.add(tower);
    const stripe = makeMesh(
      new THREE.CylinderGeometry(0.3, 0.3, 0.6, 12),
      makeToonMaterial({ color: 0xc83a2a, gradientLevels: 4 })
    );
    stripe.position.set(x, 2, z);
    grp.add(stripe);
    const lantern = makeMesh(
      new THREE.SphereGeometry(0.35, 10, 8),
      makeToonMaterial({ color: 0x9fd2e8, transparent: true, opacity: 0.72, gradientLevels: 3 })
    );
    lantern.position.set(x, 3.9, z);
    grp.add(lantern);
    const light = makeMesh(
      new THREE.ConeGeometry(0.4, 1.2, 10),
      makeToonMaterial({ color: 0xffff88, emissive: 0xffff66, emissiveIntensity: 0.9, transparent: true, opacity: 0.4, gradientLevels: 3 })
    );
    light.position.set(x, 4.2, z);
    grp.add(light);
    return grp;
  }

  function buildBush(x, z, size) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const mat = makeToonMaterial({ color: 0x5a8a3a, gradientLevels: 3 });
    const radii = [size * 0.6, size * 0.55, size * 0.48];
    radii.forEach((r, i) => {
      const sphere = makeMesh(new THREE.SphereGeometry(r, 6, 5), mat);
      sphere.position.set((i - 1) * size * 0.3, size * 0.4 + i * 0.15, (i % 2 === 0 ? 1 : -1) * size * 0.2);
      grp.add(sphere);
    });
    grp.position.set(x, 0, z);
    return grp;
  }

  function buildFernCluster(x, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const mat = makeToonMaterial({ color: 0x4a7a2a, side: THREE.DoubleSide, gradientLevels: 3 });
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

  function buildServoStore(x, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const wallMat = makeToonMaterial({ color: 0x35546f, gradientLevels: 4 });
    const roofMat = makeToonMaterial({ color: 0x6d3f2c, gradientLevels: 4 });
    const neonMat = makeToonMaterial({ color: 0x5be7ff, emissive: 0x5be7ff, emissiveIntensity: 1.4, gradientLevels: 3 });

    const body = makeMesh(new THREE.BoxGeometry(3.2, 1.6, 2.4), wallMat);
    body.position.set(0, 0.8, 0);
    grp.add(body);

    const roof = makeMesh(new THREE.ConeGeometry(2.5, 1.1, 4), roofMat);
    roof.position.set(0, 2, 0);
    roof.rotation.y = Math.PI * 0.25;
    grp.add(roof);

    const sign = makeMesh(new THREE.BoxGeometry(2.2, 0.42, 0.08), neonMat);
    sign.position.set(0, 1.4, 1.24);
    grp.add(sign);

    const porch = makeMesh(new THREE.BoxGeometry(2.6, 0.2, 1.2), makeToonMaterial({ color: 0x2c3a46, gradientLevels: 4 }));
    porch.position.set(0, 0.1, 1.8);
    grp.add(porch);

    const neonGlow = new THREE.PointLight(0x7ef3ff, 1.25, 10, 2);
    neonGlow.position.set(0, 1.45, 1.9);
    grp.add(neonGlow);

    grp.position.set(x, 0, z);
    return grp;
  }

  function buildStylizedWaterPlane(x, z) {
    const THREE = globalThis.THREE;
    const geometry = new THREE.PlaneGeometry(34, 34, 120, 120);
    geometry.rotateX(-Math.PI / 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color(0x2ec7d1) },
        colorB: { value: new THREE.Color(0x1657a8) }
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vWave;
        void main() {
          vUv = uv;
          vec3 p = position;
          float swell = sin((p.x * 0.52 + time * 1.6)) * 0.16;
          swell += cos((p.z * 0.66 - time * 1.3)) * 0.13;
          swell += sin((p.x * 1.6 + p.z * 1.1 + time * 2.1)) * 0.06;
          p.y += swell;
          vWave = swell;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorA;
        uniform vec3 colorB;
        varying vec2 vUv;
        varying float vWave;
        void main() {
          float mixV = clamp(vUv.y * 0.88 + 0.08 + vWave * 0.2, 0.0, 1.0);
          vec3 col = mix(colorA, colorB, mixV);
          float highlight = smoothstep(0.1, 0.26, abs(vWave));
          col += vec3(0.12, 0.16, 0.22) * highlight;
          gl_FragColor = vec4(col, 0.84);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
    const water = makeMesh(geometry, material, false);
    water.position.set(x, -1.45, z);
    water.userData.isWaterPlane = true;
    water.userData.waterMaterial = material;
    addInvertedHull(water, 0.014, 0x12384f);
    return water;
  }

  function buildMountainRange() {
    const THREE = globalThis.THREE;
    const group = new THREE.Group();
    const ridgeDefs = [
      { w: 52, d: 16, ox: -4, oz: -42, oy: -2.6, lift: 8.8, seed: 17.4, color: 0x8799bf },
      { w: 44, d: 14, ox: 7, oz: -37, oy: -2.4, lift: 7.4, seed: 31.9, color: 0x7a8eb2 },
      { w: 36, d: 12, ox: -8, oz: -33, oy: -2.2, lift: 6.2, seed: 49.2, color: 0x7285aa }
    ];
    ridgeDefs.forEach((ridge) => {
      const geo = new THREE.PlaneGeometry(ridge.w, ridge.d, 80, 30);
      geo.rotateX(-Math.PI / 2.35);
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const nx = x * 0.1;
        const nz = z * 0.14;
        const primary = Math.abs(octaveNoise(nx * 1.25 + ridge.seed, nz * 1.1 + ridge.seed * 0.5));
        const jag = Math.abs(octaveNoise(nx * 3.8 + ridge.seed * 1.7, nz * 2.9 + ridge.seed * 0.8));
        const striation = octaveNoise(nx * 5.6 + ridge.seed * 2.3, nz * 1.8 + ridge.seed * 1.4);
        const y = primary * ridge.lift + jag * 2.1 + striation * 0.7 - 1.4;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
      geo.computeVertexNormals();
      const mesh = makeMesh(
        geo,
        makeToonMaterial({ color: ridge.color, emissive: 0x1d2442, emissiveIntensity: 0.2, gradientLevels: 4 }),
        true,
        0.022,
        0x141b2e
      );
      mesh.position.set(ridge.ox, ridge.oy, ridge.oz);
      group.add(mesh);

      const snowCap = makeMesh(
        new THREE.PlaneGeometry(ridge.w * 0.74, ridge.d * 0.34, 50, 12),
        makeToonMaterial({ color: 0xe4eefc, emissive: 0x6a7896, emissiveIntensity: 0.08, gradientLevels: 3 }),
        true,
        0.012,
        0x31405a
      );
      snowCap.rotation.x = -Math.PI / 2.35;
      snowCap.position.set(ridge.ox + 1.2, ridge.oy + ridge.lift * 0.54, ridge.oz - ridge.d * 0.06);
      group.add(snowCap);
    });
    return group;
  }

  function buildOutbackDuneField() {
    const THREE = globalThis.THREE;
    const geo = new THREE.PlaneGeometry(36, 40, 46, 46);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dune = octaveNoise(x * 0.24 + 7.4, z * 0.22 + 11.1);
      const crag = Math.abs(octaveNoise(x * 1.18 + 33.6, z * 1.32 + 14.2));
      const highFreq = octaveNoise(x * 2.2 + 77.1, z * 2.5 + 43.7);
      const y = dune * 2.8 + crag * 1.6 + highFreq * 0.55;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    const mesh = makeMesh(
      geo,
      makeToonMaterial({ color: 0xcd7e33, emissive: 0x4c2312, emissiveIntensity: 0.2, gradientLevels: 3 }),
      true,
      0.02,
      0x20150f
    );
    mesh.position.set(0, -2.2, -26);
    return mesh;
  }

  // ─── PROCEDURAL REGION SCENE BUILDERS ──────────────────────────────────────
  // These build full animated Three.js scenes for each region when GLTF assets
  // are not available. Every solid object uses MeshToonMaterial + inverted hull
  // via makeMesh(). Animated elements (water, aurora, snow, creatures) use
  // custom ShaderMaterials and store update callbacks in threeState.regionAnimated.

  function buildSkyGradientSphere(colorTop, colorHorizon) {
    const THREE = globalThis.THREE;
    const geo = new THREE.SphereGeometry(170, 32, 16);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        colorTop: { value: new THREE.Color(colorTop) },
        colorHorizon: { value: new THREE.Color(colorHorizon) }
      },
      vertexShader: `
        varying float vY;
        void main() {
          vY = normalize(position).y;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorTop;
        uniform vec3 colorHorizon;
        varying float vY;
        void main() {
          float t = clamp((vY + 0.15) / 1.15, 0.0, 1.0);
          gl_FragColor = vec4(mix(colorHorizon, colorTop, t * t), 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false
    });
    return new THREE.Mesh(geo, mat);
  }

  function buildCurvedPalmTree(x, z, h) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const trunkMat = makeToonMaterial({ color: 0x8a5c2c, gradientLevels: 4 });
    const segments = 7;
    let prevY = 0;
    for (let s = 0; s < segments; s++) {
      const st = s / segments;
      const segH = h / segments;
      const cx = Math.sin(st * 1.1) * 0.9;
      const nx = Math.sin((st + 1 / segments) * 1.1) * 0.9;
      const seg = makeMesh(
        new THREE.CylinderGeometry(0.07 + (1 - st) * 0.12, 0.09 + (1 - st) * 0.12, segH, 6),
        trunkMat, false
      );
      seg.position.set(cx, prevY + segH * 0.5, 0);
      seg.rotation.z = (nx - cx) * 0.38;
      grp.add(seg);
      prevY += segH;
    }
    const crownX = Math.sin(1.1) * 0.9;
    const frondMat = makeToonMaterial({ color: 0x3aa832, side: THREE.DoubleSide, gradientLevels: 3 });
    for (let i = 0; i < 9; i++) {
      const angle = (i / 9) * Math.PI * 2;
      const fLen = 1.8 + (i % 2) * 0.5;
      const frond = new THREE.Group();
      const shaft = makeMesh(new THREE.CylinderGeometry(0.025, 0.04, fLen, 4), frondMat, false);
      shaft.position.y = fLen * 0.5;
      frond.add(shaft);
      for (let lf = 0; lf < 5; lf++) {
        const lt = (lf + 1) / 6;
        const leafW = 0.42 - lt * 0.12;
        const leaf = makeMesh(new THREE.PlaneGeometry(leafW, leafW * 0.5), frondMat, false);
        leaf.position.set(0, fLen * lt - fLen * 0.1, 0);
        leaf.rotation.set(0, angle + lf * 0.18, 0.3 + lt * 0.15);
        frond.add(leaf);
      }
      frond.position.set(crownX + Math.cos(angle) * 0.5, prevY + 0.2, Math.sin(angle) * 0.5);
      frond.rotation.set(-0.62 - Math.cos(angle * 0.5) * 0.18, angle, 0);
      grp.add(frond);
    }
    grp.position.set(x, 0, z);
    return grp;
  }

  function buildPenguin(x, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const blackMat = makeToonMaterial({ color: 0x181820, gradientLevels: 4 });
    const whiteMat = makeToonMaterial({ color: 0xeef4fc, gradientLevels: 3 });
    const orangeMat = makeToonMaterial({ color: 0xf09228, gradientLevels: 3 });
    // body
    const body = makeMesh(new THREE.CylinderGeometry(0.3, 0.26, 0.78, 8), blackMat);
    body.position.y = 0.52;
    grp.add(body);
    // belly
    const belly = makeMesh(new THREE.SphereGeometry(0.2, 8, 6), whiteMat, false);
    belly.scale.set(1, 1.4, 0.65);
    belly.position.set(0, 0.56, 0.14);
    grp.add(belly);
    // head
    const head = makeMesh(new THREE.SphereGeometry(0.24, 8, 7), blackMat);
    head.position.y = 1.08;
    grp.add(head);
    // white face patch
    const face = makeMesh(new THREE.SphereGeometry(0.17, 7, 6), whiteMat, false);
    face.scale.set(1, 0.9, 0.55);
    face.position.set(0, 1.09, 0.15);
    grp.add(face);
    // eyes
    for (const ex of [-0.09, 0.09]) {
      const eye = makeMesh(new THREE.SphereGeometry(0.055, 5, 5), whiteMat, false);
      eye.position.set(ex, 1.14, 0.2);
      const pupil = makeMesh(new THREE.SphereGeometry(0.032, 4, 4), blackMat, false);
      pupil.position.set(ex * 1.05, 1.14, 0.25);
      grp.add(eye, pupil);
    }
    // beak
    const beak = makeMesh(new THREE.ConeGeometry(0.055, 0.16, 4), orangeMat);
    beak.rotation.x = Math.PI / 2;
    beak.position.set(0, 1.07, 0.28);
    grp.add(beak);
    // flippers
    for (const side of [-1, 1]) {
      const flipper = makeMesh(new THREE.BoxGeometry(0.12, 0.48, 0.07), blackMat);
      flipper.position.set(side * 0.4, 0.6, 0);
      flipper.rotation.z = side * 0.28;
      flipper.rotation.x = 0.25;
      grp.add(flipper);
    }
    // feet
    for (const fx of [-0.1, 0.1]) {
      const foot = makeMesh(new THREE.BoxGeometry(0.14, 0.055, 0.22), orangeMat);
      foot.position.set(fx, 0.05, 0.06);
      grp.add(foot);
    }
    grp.position.set(x, 0, z);
    grp.userData.animPhase = Math.random() * Math.PI * 2;
    return grp;
  }

  function buildSnake3D(x, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const snakeMat = makeToonMaterial({ color: 0x3a7825, gradientLevels: 4 });
    const headMat = makeToonMaterial({ color: 0x286018, gradientLevels: 4 });
    const eyeMat = makeToonMaterial({ color: 0xf0c030, gradientLevels: 2 });
    const parts = [];
    for (let i = 0; i < 18; i++) {
      const r = i === 0 ? 0.13 : Math.max(0.038, 0.11 - i * 0.005);
      const seg = makeMesh(new THREE.SphereGeometry(r, 5, 4), i === 0 ? headMat : snakeMat, i < 2);
      grp.add(seg);
      parts.push(seg);
    }
    // eyes
    for (const ex of [-0.055, 0.055]) {
      const eye = makeMesh(new THREE.SphereGeometry(0.028, 4, 4), eyeMat, false);
      eye.position.set(ex, 0.075, 0.1);
      parts[0].add(eye);
    }
    // forked tongue
    const tongMat = makeToonMaterial({ color: 0xcc1818, gradientLevels: 2 });
    const tongue = makeMesh(new THREE.BoxGeometry(0.022, 0.012, 0.14), tongMat, false);
    tongue.position.set(0, 0, 0.13);
    parts[0].add(tongue);
    grp.position.set(x, 0, z);
    grp.userData.snakeParts = parts;
    grp.userData.animPhase = Math.random() * Math.PI * 2;
    return grp;
  }

  function buildFirefly(x, y, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const glow = makeMesh(
      new THREE.SphereGeometry(0.055, 5, 4),
      makeToonMaterial({ color: 0xb8ff50, emissive: 0xb8ff50, emissiveIntensity: 2.2, transparent: true, opacity: 0.92, gradientLevels: 2 }),
      false
    );
    grp.add(glow);
    const light = new THREE.PointLight(0xb8ff50, 0.9, 3.8, 2);
    grp.add(light);
    grp.position.set(x, y, z);
    grp.userData.orbitBaseX = x;
    grp.userData.orbitBaseZ = z;
    grp.userData.orbitY = y;
    grp.userData.light = light;
    grp.userData.animPhase = Math.random() * Math.PI * 2;
    return grp;
  }

  function buildSeagull(x, y, z) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const featherMat = makeToonMaterial({ color: 0xf4f0ea, side: THREE.DoubleSide, gradientLevels: 3 });
    const bodyMat = makeToonMaterial({ color: 0xe8e4de, gradientLevels: 4 });
    const body = makeMesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.06, 0.28, 3, 6) : new THREE.BoxGeometry(0.13, 0.13, 0.38), bodyMat, false);
    grp.add(body);
    const wingL = new THREE.Group();
    const wMeshL = makeMesh(new THREE.PlaneGeometry(0.72, 0.24), featherMat, false);
    wMeshL.position.x = 0.36;
    wingL.add(wMeshL);
    wingL.position.set(0.1, 0, 0);
    grp.add(wingL);
    const wingR = new THREE.Group();
    const wMeshR = makeMesh(new THREE.PlaneGeometry(0.72, 0.24), featherMat, false);
    wMeshR.position.x = -0.36;
    wingR.add(wMeshR);
    wingR.position.set(-0.1, 0, 0);
    grp.add(wingR);
    const head = makeMesh(new THREE.SphereGeometry(0.08, 6, 5), bodyMat, false);
    head.position.set(0, 0.06, 0.2);
    grp.add(head);
    grp.userData.wingL = wingL;
    grp.userData.wingR = wingR;
    grp.userData.animPhase = Math.random() * Math.PI * 2;
    grp.userData.orbitRadius = 8 + Math.random() * 6;
    grp.userData.orbitSpeed = 0.2 + Math.random() * 0.12;
    grp.userData.orbitY = y;
    grp.position.set(x, y, z);
    return grp;
  }

  function buildFirTree(x, z, h) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const trunkMat = makeToonMaterial({ color: 0x3a2518, gradientLevels: 4 });
    const needleMat = makeToonMaterial({ color: 0x264830, gradientLevels: 4 });
    const snowCapMat = makeToonMaterial({ color: 0xe2eef8, gradientLevels: 3 });
    const trunk = makeMesh(new THREE.CylinderGeometry(0.07, 0.14, h * 0.3, 5), trunkMat);
    trunk.position.y = h * 0.15;
    grp.add(trunk);
    const layers = 4;
    for (let i = 0; i < layers; i++) {
      const t = i / layers;
      const layerH = h * (0.32 - t * 0.06);
      const layerR = h * 0.22 * (1 - t * 0.5);
      const baseY = h * (0.25 + t * 0.22);
      const cone = makeMesh(new THREE.ConeGeometry(layerR, layerH, 7), needleMat);
      cone.position.y = baseY + layerH * 0.5;
      grp.add(cone);
      const snowCap = makeMesh(new THREE.ConeGeometry(layerR * 0.82, layerH * 0.2, 7), snowCapMat, false);
      snowCap.position.y = baseY + layerH;
      grp.add(snowCap);
    }
    grp.position.set(x, 0, z);
    return grp;
  }

  function buildDustDevil(x, z) {
    const THREE = globalThis.THREE;
    const mat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, color: { value: new THREE.Color(0xd4a870) } },
      vertexShader: `
        uniform float time;
        varying float vAlpha;
        void main() {
          vAlpha = (1.0 - uv.y) * 0.48;
          vec3 p = position;
          float spin = time * 4.2 + uv.y * 7.0;
          p.x += sin(spin) * 0.14 * (1.0 - uv.y * 0.6);
          p.z += cos(spin) * 0.14 * (1.0 - uv.y * 0.6);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vAlpha;
        void main() { gl_FragColor = vec4(color, vAlpha); }
      `,
      transparent: true, side: THREE.DoubleSide, depthWrite: false
    });
    const mesh = new THREE.Mesh(new THREE.ConeGeometry(1.3, 6.5, 18, 10, true), mat);
    mesh.position.y = 3;
    const grp = new THREE.Group();
    grp.add(mesh);
    grp.position.set(x, 0, z);
    grp.userData.dustDevilMat = mat;
    return grp;
  }

  function buildNeonSign(x, y, z, colorHex) {
    const THREE = globalThis.THREE;
    const grp = new THREE.Group();
    const col = colorHex || 0x5be7ff;
    const signMat = makeToonMaterial({ color: col, emissive: col, emissiveIntensity: 1.9, transparent: true, opacity: 0.96, gradientLevels: 2 });
    const board = makeMesh(new THREE.BoxGeometry(2.8, 0.42, 0.06), signMat, false);
    grp.add(board);
    const border = makeMesh(new THREE.BoxGeometry(3.0, 0.62, 0.04), makeToonMaterial({ color: 0x1e2838, gradientLevels: 3 }), false);
    grp.add(border);
    const glow = new THREE.PointLight(col, 1.6, 9, 2);
    grp.add(glow);
    grp.userData.neonLight = glow;
    grp.userData.animPhase = Math.random() * Math.PI * 2;
    grp.position.set(x, y, z);
    return grp;
  }

  function buildServoPipeline(x1, y1, z1, x2, y2, z2) {
    const THREE = globalThis.THREE;
    const dir = new THREE.Vector3(x2 - x1, y2 - y1, z2 - z1);
    const len = dir.length();
    const mid = new THREE.Vector3((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
    const pipe = makeMesh(
      new THREE.CylinderGeometry(0.1, 0.1, len, 6),
      makeToonMaterial({ color: 0x4a6275, gradientLevels: 4 })
    );
    pipe.position.copy(mid);
    const up = new THREE.Vector3(0, 1, 0);
    pipe.quaternion.setFromUnitVectors(up, dir.clone().normalize());
    return pipe;
  }

  // ─── COAST SCENE ─────────────────────────────────────────────────────────────
  function buildProceduralCoastScene(root) {
    const THREE = globalThis.THREE;
    root.add(buildSkyGradientSphere(0x5898d4, 0xa8c8e8));

    // Sandy beach floor
    const beachGeo = new THREE.PlaneGeometry(58, 52, 70, 70);
    beachGeo.rotateX(-Math.PI / 2);
    const bPos = beachGeo.attributes.position;
    for (let i = 0; i < bPos.count; i++) {
      const xv = bPos.getX(i), zv = bPos.getZ(i);
      bPos.setY(i, Math.sin(xv * 0.28 + zv * 0.42) * 0.06 + Math.cos(xv * 0.65) * 0.03);
    }
    bPos.needsUpdate = true;
    beachGeo.computeVertexNormals();
    const beach = makeMesh(beachGeo, makeToonMaterial({ color: 0xd4b87a, gradientLevels: 4 }));
    beach.position.set(0, -2.42, -20);
    root.add(beach);

    // Deep animated ocean
    const oceanMat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorShallow: { value: new THREE.Color(0x38c8d0) },
        colorDeep: { value: new THREE.Color(0x0e5898) },
        foamCol: { value: new THREE.Color(0xdaf4ff) }
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv; varying float vWave;
        void main() {
          vUv = uv; vec3 p = position;
          float w = sin(p.x * 0.42 + time * 1.5) * 0.24
                  + cos(p.z * 0.56 - time * 1.2) * 0.19
                  + sin(p.x * 1.3 + p.z * 0.95 + time * 2.3) * 0.09
                  + cos(p.x * 2.2 - p.z * 1.7 + time * 3.2) * 0.04;
          p.y += w; vWave = w;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorShallow; uniform vec3 colorDeep; uniform vec3 foamCol; uniform float time;
        varying vec2 vUv; varying float vWave;
        void main() {
          float d = clamp(vUv.y * 1.3, 0.0, 1.0);
          vec3 col = mix(colorShallow, colorDeep, d);
          float foam = smoothstep(0.09, 0.2, abs(vWave));
          col = mix(col, foamCol, foam * 0.58);
          float shimmer = 0.5 + 0.5 * sin(vUv.x * 16.0 + time * 3.2) * sin(vUv.y * 11.0 - time * 2.2);
          col += vec3(0.05, 0.08, 0.12) * shimmer * foam;
          gl_FragColor = vec4(col, 0.93);
        }
      `,
      transparent: true, side: THREE.DoubleSide
    });
    const oceanMesh = new THREE.Mesh(new THREE.PlaneGeometry(90, 65, 130, 90), oceanMat);
    oceanMesh.rotation.x = -Math.PI / 2;
    oceanMesh.position.set(0, -2.25, -36);
    root.add(oceanMesh);
    threeState.regionAnimated.push({ type: 'mat', material: oceanMat });

    // Shore foam
    const foamMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, color: { value: new THREE.Color(0xd8f2ff) } },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float time; uniform vec3 color; varying vec2 vUv;
        void main() {
          float f = sin(vUv.x * 14.0 + time * 2.2) * 0.5 + 0.5;
          f *= smoothstep(0.0, 0.4, vUv.y) * (1.0 - smoothstep(0.6, 1.0, vUv.y));
          gl_FragColor = vec4(color, f * 0.72);
        }
      `,
      transparent: true, side: THREE.DoubleSide, depthWrite: false
    });
    const foam = new THREE.Mesh(new THREE.PlaneGeometry(55, 2.8, 44, 4), foamMat);
    foam.rotation.x = -Math.PI / 2;
    foam.position.set(0, -2.4, -14);
    root.add(foam);
    threeState.regionAnimated.push({ type: 'mat', material: foamMat });

    // Palm trees
    [[-10, -8, 3.4], [-12, -15, 3.8], [-9, -23, 3.2], [10, -10, 3.5], [12, -18, 3.1], [11, -27, 3.6], [-6, -32, 3.3], [8, -30, 3.9]].forEach(([px, pz, ph]) => {
      root.add(buildCurvedPalmTree(px, pz, ph));
    });

    // Lighthouse
    root.add(buildLighthouse(9, -32));

    // Rotating lighthouse beacon point light
    const beacon = new THREE.SpotLight(0xffff80, 3.5, 45, 0.18, 0.4, 1.2);
    beacon.position.set(9, 2.2, -32);
    root.add(beacon);
    threeState.regionAnimated.push({ type: 'beaconRotate', obj: beacon, cx: 9, cz: -32 });

    // Boats with bobbing
    [[-6, -30, 0], [3, -36, 1.4], [-2, -42, 0.7]].forEach(([bx, bz, ph]) => {
      const boat = buildBoat(bx, bz);
      boat.userData.bobPhase = ph;
      root.add(boat);
      threeState.regionAnimated.push({ type: 'bob', obj: boat, baseY: -2.1, amp: 0.14, speed: 0.65, phase: ph });
    });

    // Shore rocks
    for (let i = 0; i < 12; i++) {
      const rx = (i % 2 === 0 ? -1 : 1) * (3 + (i * 1.4) % 7);
      const rz = -8 - (i * 2.6) % 26;
      const rr = 0.28 + (i % 3) * 0.22;
      const rock = makeMesh(new THREE.DodecahedronGeometry(rr, 0), makeToonMaterial({ color: 0xa89870, gradientLevels: 4 }));
      rock.position.set(rx, -2.42 + rr * 0.35, rz);
      root.add(rock);
    }

    // Seagulls
    for (let i = 0; i < 7; i++) {
      const sg = buildSeagull(
        (i % 2 === 0 ? -1 : 1) * (5 + i * 1.8),
        3.5 + i * 0.7,
        -16 - i * 3
      );
      root.add(sg);
      threeState.regionAnimated.push({ type: 'seagull', obj: sg });
    }
  }

  // ─── BUSHLAND SCENE ───────────────────────────────────────────────────────────
  function buildProceduralBushlandScene(root) {
    const THREE = globalThis.THREE;
    root.add(buildSkyGradientSphere(0x486a40, 0x8ab878));

    // Rolling green terrain
    const terrGeo = new THREE.PlaneGeometry(65, 58, 88, 88);
    terrGeo.rotateX(-Math.PI / 2);
    const tPos = terrGeo.attributes.position;
    for (let i = 0; i < tPos.count; i++) {
      const xv = tPos.getX(i), zv = tPos.getZ(i);
      const roll = (octaveNoise ? octaveNoise(xv * 0.17 + 5, zv * 0.15 + 3) : Math.sin(xv * 0.18) * 0.5) * 1.05;
      tPos.setY(i, roll);
    }
    tPos.needsUpdate = true;
    terrGeo.computeVertexNormals();
    const terrain = makeMesh(terrGeo, makeToonMaterial({ color: 0x5a7a38, gradientLevels: 4 }));
    terrain.position.set(0, -2.2, -25);
    root.add(terrain);

    // Eucalyptus trees
    [[-8, -10], [-10, -18], [-7, -26], [-9, -34], [8, -8], [10, -16], [9, -24], [11, -32], [-5, -38], [6, -40], [-7, -12], [8, -36]].forEach(([tx, tz]) => {
      root.add(buildGumTree(tx, tz, 4 + Math.abs((tx * tz) % 4)));
    });
    for (let i = 0; i < 10; i++) {
      const x = -12 + i * 2.6;
      const z = -46 - Math.sin(i * 0.8) * 1.4;
      root.add(buildGumTree(x, z, 2.8 + (i % 3) * 0.45));
    }

    // Dense bushes and ferns
    for (let i = 0; i < 20; i++) {
      const bx = (i % 2 === 0 ? -1 : 1) * (2 + (i * 1.6) % 8);
      const bz = -6 - (i * 2.3) % 38;
      root.add(buildBush(bx, bz, 0.48 + (i % 3) * 0.22));
    }
    for (let i = 0; i < 10; i++) {
      root.add(buildFernCluster((i % 2 === 0 ? -1 : 1) * (2 + (i * 1.3) % 6), -7 - (i * 3.2) % 34));
    }

    // Fallen logs with mushrooms
    for (let i = 0; i < 6; i++) {
      const log = makeMesh(
        new THREE.CylinderGeometry(0.17, 0.22, 3 + i * 0.4, 7),
        makeToonMaterial({ color: 0x4a2e14, gradientLevels: 4 })
      );
      log.rotation.set(0.06, i * 0.65, Math.PI / 2 + i * 0.28);
      log.position.set(-4 + i * 2, -2.1, -4 - i * 5.5);
      root.add(log);
      for (let m = 0; m < 3; m++) {
        const cap = makeMesh(new THREE.SphereGeometry(0.08, 6, 4), makeToonMaterial({ color: [0xc84a28, 0xd06030, 0xb8401a][m], gradientLevels: 3 }), false);
        cap.scale.set(1, 0.58, 1);
        cap.position.set(-0.5 + m * 0.5, 0.23, m % 2 === 0 ? 0.12 : -0.1);
        log.add(cap);
        const stem = makeMesh(new THREE.CylinderGeometry(0.025, 0.035, 0.11, 4), makeToonMaterial({ color: 0xd8c890, gradientLevels: 3 }), false);
        stem.position.set(-0.5 + m * 0.5, 0.1, m % 2 === 0 ? 0.12 : -0.1);
        log.add(stem);
      }
    }

    // Animated snakes
    for (let s = 0; s < 3; s++) {
      const snake = buildSnake3D((s % 2 === 0 ? -1 : 1) * (3 + s * 2.4), -8 - s * 9);
      root.add(snake);
      threeState.regionAnimated.push({ type: 'snake', obj: snake });
    }

    // Fireflies
    for (let f = 0; f < 12; f++) {
      const ff = buildFirefly(
        (f % 2 === 0 ? -1 : 1) * (1.5 + (f * 1.8) % 9),
        0.6 + (f % 3) * 1.1,
        -5 - (f * 2.9) % 32
      );
      root.add(ff);
      threeState.regionAnimated.push({ type: 'firefly', obj: ff });
    }

    // Perched cockatoos on tree branches
    for (let i = 0; i < 5; i++) {
      const bird = buildSeagull(
        (i % 2 === 0 ? -1 : 1) * (5 + i * 1.6),
        3.8 + i * 0.7,
        -10 - i * 5.5
      );
      bird.scale.set(0.78, 0.78, 0.78);
      root.add(bird);
      threeState.regionAnimated.push({ type: 'seagull', obj: bird, perched: true });
    }

    // Ambient dappled light patches on ground
    for (let i = 0; i < 5; i++) {
      const patch = new THREE.Mesh(
        new THREE.CircleGeometry(0.6 + i * 0.2, 8),
        new THREE.MeshBasicMaterial({ color: 0x9acc70, transparent: true, opacity: 0.18, depthWrite: false })
      );
      patch.rotation.x = -Math.PI / 2;
      patch.position.set((i % 2 === 0 ? -1 : 1) * (2 + i * 1.5), -2.15, -8 - i * 4);
      root.add(patch);
    }
  }

  // ─── OUTBACK SCENE ────────────────────────────────────────────────────────────
  function buildProceduralOutbackScene(root) {
    const THREE = globalThis.THREE;
    root.add(buildSkyGradientSphere(0x3668a0, 0xe88038));

    // Sand dune terrain
    const duneGeo = new THREE.PlaneGeometry(72, 62, 110, 110);
    duneGeo.rotateX(-Math.PI / 2);
    const dPos = duneGeo.attributes.position;
    for (let i = 0; i < dPos.count; i++) {
      const xv = dPos.getX(i), zv = dPos.getZ(i);
      const d = (octaveNoise ? octaveNoise(xv * 0.19 + 8, zv * 0.17 + 11) : Math.sin(xv * 0.2) * 0.5) * 1.35;
      const c = Math.abs(octaveNoise ? octaveNoise(xv * 1.1 + 33, zv * 1.2 + 14) : Math.cos(xv * 0.8) * 0.3) * 0.72;
      dPos.setY(i, d + c * 0.45);
    }
    dPos.needsUpdate = true;
    duneGeo.computeVertexNormals();
    const dune = makeMesh(duneGeo, makeToonMaterial({ color: 0xcc7a32, emissive: 0x4a2212, emissiveIntensity: 0.18, gradientLevels: 3 }));
    dune.position.set(0, -2.2, -26);
    root.add(dune);

    // Red-rock mesas
    [[-9, -22, 2.4, 4.8], [5, -18, 2.0, 3.8], [-3, -30, 2.8, 5.2], [10, -26, 1.8, 3.2], [-12, -15, 2.2, 4.1]].forEach(([mx, mz, mw, mh]) => {
      root.add(buildMesa(mx, mz, mw, mh));
    });
    [[-15, -42, 1.8, 3.8], [-6, -46, 1.4, 2.9], [4, -44, 1.5, 3.1], [14, -40, 1.7, 3.4]].forEach(([mx, mz, mw, mh]) => {
      root.add(buildMesa(mx, mz, mw, mh));
    });

    // Dead stumps and bare branches
    for (let i = 0; i < 14; i++) {
      const sx = (i % 2 === 0 ? -1 : 1) * (4 + (i * 1.4) % 9);
      const sz = -8 - (i * 2.5) % 30;
      const sh = 0.7 + (i % 3) * 0.55;
      const stump = makeMesh(new THREE.CylinderGeometry(0.04, 0.11, sh, 5), makeToonMaterial({ color: 0x5a3818, gradientLevels: 4 }));
      stump.position.set(sx, sh * 0.5 - 2.2, sz);
      root.add(stump);
      if (i % 3 === 0) {
        for (let b = 0; b < 2; b++) {
          const branch = makeMesh(new THREE.CylinderGeometry(0.018, 0.038, 0.55 + b * 0.2, 4), makeToonMaterial({ color: 0x4a2e10, gradientLevels: 4 }), false);
          branch.rotation.z = b === 0 ? 0.72 : -0.65;
          branch.rotation.y = b * 1.2;
          branch.position.set(sx + (b === 0 ? 0.2 : -0.16), sh * 0.82 - 2.2, sz);
          root.add(branch);
        }
      }
    }

    // Windmill
    const wmMat = makeToonMaterial({ color: 0x6a7880, gradientLevels: 4 });
    const wmGrp = new THREE.Group();
    const wmTower = makeMesh(new THREE.CylinderGeometry(0.09, 0.18, 4.8, 4), wmMat);
    wmTower.position.y = 2.4;
    wmGrp.add(wmTower);
    const blades = new THREE.Group();
    for (let b = 0; b < 4; b++) {
      const blade = makeMesh(new THREE.BoxGeometry(0.11, 1.3, 0.04), wmMat, false);
      blade.position.y = 0.65;
      blade.rotation.z = (b / 4) * Math.PI * 2;
      blades.add(blade);
    }
    blades.position.set(0, 4.8, 0.12);
    wmGrp.add(blades);
    wmGrp.position.set(-13, -2.2, -19);
    root.add(wmGrp);
    threeState.regionAnimated.push({ type: 'windmill', blades });

    // Dust devil (animated shader cone)
    const dustDevil = buildDustDevil(-7, -13);
    root.add(dustDevil);
    threeState.regionAnimated.push({ type: 'mat', material: dustDevil.userData.dustDevilMat });

    // Heat shimmer
    const shimmerMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, color: { value: new THREE.Color(0xf5d8a0) } },
      vertexShader: `
        uniform float time; varying float vAlpha;
        void main() {
          vec3 p = position;
          p.x += sin(p.z * 0.5 + time * 2.8) * 0.18;
          vAlpha = 0.055 + 0.04 * sin(p.x * 1.8 + time * 2.2);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color; varying float vAlpha;
        void main() { gl_FragColor = vec4(color, vAlpha); }
      `,
      transparent: true, side: THREE.DoubleSide, depthWrite: false
    });
    const shimmer = new THREE.Mesh(new THREE.PlaneGeometry(44, 32, 32, 22), shimmerMat);
    shimmer.rotation.x = -Math.PI / 2;
    shimmer.position.set(0, -1.85, -20);
    root.add(shimmer);
    threeState.regionAnimated.push({ type: 'mat', material: shimmerMat });
  }

  // ─── SERVO / ROADHOUSE SCENE ──────────────────────────────────────────────────
  function buildProceduralServoScene(root) {
    const THREE = globalThis.THREE;
    root.add(buildSkyGradientSphere(0x0c1a2e, 0x1e3050));

    // Dark asphalt ground
    const asphalt = makeMesh(
      new THREE.PlaneGeometry(62, 52, 10, 10),
      makeToonMaterial({ color: 0x1c2430, gradientLevels: 4 })
    );
    asphalt.rotation.x = -Math.PI / 2;
    asphalt.position.set(0, -2.32, -20);
    root.add(asphalt);

    // Road markings
    for (let i = 0; i < 7; i++) {
      const mark = makeMesh(new THREE.BoxGeometry(0.18, 0.02, 2.4), makeToonMaterial({ color: 0xd0c880, gradientLevels: 2 }), false);
      mark.position.set(-5.5 + i * 1.8, -2.29, -15 - i * 1.4);
      root.add(mark);
    }

    // Servo store (main building)
    root.add(buildServoStore(0, -22));

    // Warehouse
    const whMat = makeToonMaterial({ color: 0x283848, gradientLevels: 4 });
    const wh = makeMesh(new THREE.BoxGeometry(6.5, 3.2, 4), whMat);
    wh.position.set(-11, -0.72, -25);
    root.add(wh);
    const whRoof = makeMesh(new THREE.BoxGeometry(7, 0.3, 4.5), makeToonMaterial({ color: 0x1e2c3c, gradientLevels: 4 }), false);
    whRoof.position.set(-11, 0.98, -25);
    root.add(whRoof);

    // Fuel tanks
    [[8, -18, 1.5], [-6, -28, 1.2], [10, -28, 1.6], [6, -32, 1.0]].forEach(([tx, tz, tr]) => {
      const tank = makeMesh(new THREE.CylinderGeometry(tr, tr, tr * 2.6, 12), makeToonMaterial({ color: 0x3a5265, gradientLevels: 4 }));
      tank.position.set(tx, -2.32 + tr * 1.3, tz);
      root.add(tank);
      const dome = makeMesh(new THREE.SphereGeometry(tr, 10, 6), makeToonMaterial({ color: 0x304460, gradientLevels: 3 }), false);
      dome.scale.y = 0.5;
      dome.position.set(tx, -2.32 + tr * 2.6 + tr * 0.5, tz);
      root.add(dome);
      const stripe = makeMesh(new THREE.CylinderGeometry(tr + 0.03, tr + 0.03, 0.2, 12), makeToonMaterial({ color: 0xf0a010, gradientLevels: 3 }), false);
      stripe.position.set(tx, -2.32 + tr * 1.3, tz);
      root.add(stripe);
    });

    // Power pylons
    [[-8, -10, 4.5], [7, -12, 5.2], [-5, -20, 3.8], [9, -18, 4.2], [0, -28, 5.5]].forEach(([px, pz, ph]) => {
      root.add(buildPylon(px, pz, ph));
    });
    for (let i = 0; i < 7; i++) {
      const bx = -14 + i * 4.6;
      const bh = 2.2 + (i % 3) * 1.4;
      const block = makeMesh(new THREE.BoxGeometry(2.1 + (i % 2) * 0.7, bh, 1.6 + (i % 3) * 0.5), makeToonMaterial({ color: 0x202d3e + (i % 2) * 0x030508, gradientLevels: 4 }));
      block.position.set(bx, -2.32 + bh * 0.5, -38 - (i % 2) * 2.2);
      root.add(block);
    }

    // Cables between pylons
    [
      [[-8, 4.5 * 0.8, -10], [7, 5.2 * 0.8, -12]],
      [[7, 5.2 * 0.8, -12], [-5, 3.8 * 0.8, -20]],
      [[-5, 3.8 * 0.8, -20], [9, 4.2 * 0.8, -18]]
    ].forEach(([[ax, ay, az], [bx, by, bz]]) => {
      root.add(buildServoPipeline(ax, ay, az, bx, by, bz));
    });

    // Neon signs with flicker animation
    const signs = [
      { pos: [-4, 1.55, -14], col: 0x5be7ff },
      { pos: [5, 2.1, -20], col: 0xff6a22 },
      { pos: [-11, 1.05, -22], col: 0x52ff98 },
      { pos: [3, 1.0, -30], col: 0xff3a80 }
    ];
    signs.forEach(s => {
      const sign = buildNeonSign(...s.pos, s.col);
      root.add(sign);
      threeState.regionAnimated.push({ type: 'neon', obj: sign });
    });

    // Stacked crates
    for (let i = 0; i < 9; i++) {
      const cx = -4 + (i % 3) * 1.45;
      const cy = -2.32 + Math.floor(i / 3) * 0.72 + 0.36;
      const cz = -10 - (i % 2) * 1.3;
      const crate = makeMesh(new THREE.BoxGeometry(1.1 + (i % 2) * 0.14, 0.66, 0.66), makeToonMaterial({ color: 0x2a4a6a, gradientLevels: 4 }));
      crate.position.set(cx, cy, cz);
      root.add(crate);
      const mark = makeMesh(new THREE.BoxGeometry(0.42, 0.28, 0.02), makeToonMaterial({ color: 0xf0a010, gradientLevels: 2 }), false);
      mark.position.set(cx, cy, cz + 0.35);
      root.add(mark);
    }

    // Security camera mast
    const mastMat = makeToonMaterial({ color: 0x28384a, gradientLevels: 4 });
    const mast = makeMesh(new THREE.CylinderGeometry(0.055, 0.08, 3.6, 5), mastMat);
    mast.position.set(4, -0.52, -14);
    root.add(mast);
    const camHead = makeMesh(new THREE.BoxGeometry(0.26, 0.14, 0.4), makeToonMaterial({ color: 0x1c2c3c, gradientLevels: 4 }));
    camHead.position.set(4.14, 1.38, -13.8);
    camHead.rotation.y = -0.32;
    root.add(camHead);

    // Steam vents
    [[6, -26], [-4, -24], [10, -20]].forEach(([vx, vz]) => {
      const ventBase = makeMesh(new THREE.CylinderGeometry(0.13, 0.17, 0.5, 6), makeToonMaterial({ color: 0x2a3a4a, gradientLevels: 4 }), false);
      ventBase.position.set(vx, -2.08, vz);
      root.add(ventBase);
      const steamMat = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 }, color: { value: new THREE.Color(0x7ab0c0) } },
        vertexShader: `
          uniform float time; varying float vAlpha;
          void main() {
            vec3 p = position; float r = uv.y;
            p.x += sin(r * 3.2 + time * 2.6) * 0.32 * r;
            p.z += cos(r * 2.8 - time * 2.1) * 0.26 * r;
            p.y += r * 0.6;
            vAlpha = (1.0 - r) * 0.52;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color; varying float vAlpha;
          void main() { gl_FragColor = vec4(color, vAlpha); }
        `,
        transparent: true, side: THREE.DoubleSide, depthWrite: false
      });
      const steam = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.05, 3.2, 8, 8, true), steamMat);
      steam.position.set(vx, 0.22, vz);
      root.add(steam);
      threeState.regionAnimated.push({ type: 'mat', material: steamMat });
    });

    // Data-stream tube along cable path
    const streamMat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color(0x5be7ff) },
        colorB: { value: new THREE.Color(0x52ff98) }
      },
      vertexShader: `
        uniform float time; varying float vT;
        void main() {
          vT = fract(uv.x - time * 0.65);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorA; uniform vec3 colorB; varying float vT;
        void main() {
          float p = smoothstep(0.0, 0.06, vT) * (1.0 - smoothstep(0.06, 0.18, vT));
          vec3 col = mix(colorA, colorB, vT);
          gl_FragColor = vec4(col, p * 0.92);
        }
      `,
      transparent: true, depthWrite: false
    });
    if (THREE.CatmullRomCurve3 && THREE.TubeGeometry) {
      const pts = [
        new THREE.Vector3(-8, 4.5 * 0.8, -10),
        new THREE.Vector3(-2, 3.2, -14),
        new THREE.Vector3(7, 5.2 * 0.8, -12),
        new THREE.Vector3(9, 4.2 * 0.8, -18)
      ];
      const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 44, 0.055, 6, false), streamMat);
      root.add(tube);
    }
    threeState.regionAnimated.push({ type: 'mat', material: streamMat });
  }

  // ─── TASMANIA SCENE ───────────────────────────────────────────────────────────
  function buildProceduralTasmaniaScene(root) {
    const THREE = globalThis.THREE;
    root.add(buildSkyGradientSphere(0x080d1a, 0x162040));

    // Stars
    const starCount = 500;
    const starPos = new Float32Array(starCount * 3);
    for (let s = 0; s < starCount; s++) {
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(Math.random() * 2 - 1);
      const r = 160;
      starPos[s * 3] = r * Math.sin(ph) * Math.cos(th);
      starPos[s * 3 + 1] = Math.abs(r * Math.cos(ph));
      starPos[s * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    root.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xddeeff, size: 0.48, transparent: true, opacity: 0.85, sizeAttenuation: true })));

    // Snow terrain
    const snowGeo = new THREE.PlaneGeometry(72, 62, 95, 95);
    snowGeo.rotateX(-Math.PI / 2);
    const sPos = snowGeo.attributes.position;
    for (let i = 0; i < sPos.count; i++) {
      const xv = sPos.getX(i), zv = sPos.getZ(i);
      const base = (octaveNoise ? octaveNoise(xv * 0.15 + 4, zv * 0.13 + 7) : Math.sin(xv * 0.15) * 0.5) * 2.6;
      const fine = (octaveNoise ? octaveNoise(xv * 0.78 + 20, zv * 0.88 + 15) : Math.cos(xv) * 0.15) * 0.45;
      sPos.setY(i, base + fine);
    }
    sPos.needsUpdate = true;
    snowGeo.computeVertexNormals();
    const snowTerrain = makeMesh(snowGeo, makeToonMaterial({ color: 0xd2e8f8, emissive: 0x283050, emissiveIntensity: 0.14, gradientLevels: 3 }));
    snowTerrain.position.set(0, -2.5, -25);
    root.add(snowTerrain);

    // Mountain ridges
    root.add(buildMountainRange());

    // Frozen lake with crack/glint shader
    const lakeMat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color(0x7aaac8) },
        colorB: { value: new THREE.Color(0xbad8f0) }
      },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float time; uniform vec3 colorA; uniform vec3 colorB; varying vec2 vUv;
        void main() {
          float crack = smoothstep(0.48, 0.5, sin(vUv.x * 9.0) * sin(vUv.y * 13.0));
          vec3 col = mix(colorA, colorB, vUv.y + sin(time * 0.28) * 0.05);
          col = mix(col, vec3(0.9, 0.95, 1.0), crack * 0.42);
          float glint = smoothstep(0.86, 1.0, sin(vUv.x * 22.0 + time) * sin(vUv.y * 18.0 + time * 0.8));
          col += vec3(0.28, 0.38, 0.52) * glint;
          gl_FragColor = vec4(col, 0.88);
        }
      `,
      transparent: true, side: THREE.DoubleSide
    });
    const lake = new THREE.Mesh(new THREE.PlaneGeometry(20, 14, 22, 22), lakeMat);
    lake.rotation.x = -Math.PI / 2;
    lake.position.set(2, -2.5, -30);
    root.add(lake);
    threeState.regionAnimated.push({ type: 'mat', material: lakeMat });

    // Fir/pine trees
    [[-11, -8], [-13, -15], [-12, -22], [-10, -30], [-14, -37], [11, -10], [13, -18], [12, -26], [14, -33], [11, -40]].forEach(([fx, fz]) => {
      root.add(buildFirTree(fx, fz, 4 + Math.abs((fx * fz) % 3.5)));
    });

    // Snow rocks
    for (let i = 0; i < 10; i++) {
      root.add(buildSnowRock((i % 2 === 0 ? -1 : 1) * (3 + (i * 1.6) % 8), -7 - (i * 3.0) % 30, 0.45 + (i % 3) * 0.42));
    }

    // Penguins
    [[-4, -20], [1, -24], [-1, -28], [3, -18], [-6, -26]].forEach(([px, pz]) => {
      const pen = buildPenguin(px, pz);
      root.add(pen);
      threeState.regionAnimated.push({ type: 'penguin', obj: pen });
    });

    // Aurora borealis – three multi-layer ribbon planes with additive blending
    [
      { ca: 0x52ff9a, cb: 0xa34dff, ph: 0, oy: 7.0, oz: -38 },
      { ca: 0x5af7ff, cb: 0x7b6eff, ph: 0.9, oy: 8.2, oz: -41 },
      { ca: 0x4df2a0, cb: 0xc160ff, ph: 1.7, oy: 6.4, oz: -35 }
    ].forEach(cfg => {
      const aMat = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          colorA: { value: new THREE.Color(cfg.ca) },
          colorB: { value: new THREE.Color(cfg.cb) },
          phase: { value: cfg.ph }
        },
        vertexShader: `
          uniform float time; uniform float phase;
          varying vec2 vUv; varying float vAlpha;
          void main() {
            vUv = uv; vec3 p = position;
            float w = sin(p.x * 0.155 + time * 1.22 + phase) * 1.5
                    + cos(p.x * 0.31 - time * 0.70 + phase * 1.5) * 1.0;
            p.y += w * (0.28 + uv.y * 0.72);
            p.z += sin(p.x * 0.22 + time * 0.88 + phase) * 0.72;
            vAlpha = smoothstep(0.02, 0.4, uv.y) * (1.0 - smoothstep(0.65, 1.0, uv.y)) * 0.75;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 colorA; uniform vec3 colorB; uniform float time; uniform float phase;
          varying vec2 vUv; varying float vAlpha;
          void main() {
            float t = vUv.x + sin(vUv.y * 3.2 + time * 0.42 + phase) * 0.14;
            vec3 col = mix(colorA, colorB, clamp(t, 0.0, 1.0));
            float shimmer = 0.68 + 0.32 * sin(vUv.x * 9.0 + time * 2.6 + phase);
            gl_FragColor = vec4(col * shimmer, vAlpha);
          }
        `,
        transparent: true, side: THREE.DoubleSide,
        depthWrite: false, blending: THREE.AdditiveBlending
      });
      const aurora = new THREE.Mesh(new THREE.PlaneGeometry(54, 15, 145, 30), aMat);
      aurora.position.set(cfg.ph * 1.4, cfg.oy, cfg.oz);
      aurora.rotation.x = -0.14;
      root.add(aurora);
      threeState.regionAnimated.push({ type: 'mat', material: aMat });
    });

    // Snowfall particles
    const snowCount = 350;
    const snowPosArr = new Float32Array(snowCount * 3);
    const snowVelArr = new Float32Array(snowCount);
    for (let s = 0; s < snowCount; s++) {
      snowPosArr[s * 3] = (Math.random() - 0.5) * 44;
      snowPosArr[s * 3 + 1] = Math.random() * 22 - 2;
      snowPosArr[s * 3 + 2] = (Math.random() - 0.5) * 44 - 15;
      snowVelArr[s] = 0.45 + Math.random() * 0.85;
    }
    const snowGeo2 = new THREE.BufferGeometry();
    snowGeo2.setAttribute('position', new THREE.BufferAttribute(snowPosArr, 3));
    const snowMesh = new THREE.Points(snowGeo2, new THREE.PointsMaterial({ color: 0xdcedff, size: 0.17, transparent: true, opacity: 0.78, sizeAttenuation: true }));
    root.add(snowMesh);
    threeState.regionAnimated.push({ type: 'snow', geo: snowGeo2, vel: snowVelArr });
  }

  function setRegionAtmosphere(backgroundHex, fogHex, fogDensity) {
    const THREE = globalThis.THREE;
    if (!threeState.scene) {
      return;
    }
    threeState.scene.background = new THREE.Color(backgroundHex);
    threeState.scene.fog = fogDensity !== null && fogDensity !== undefined
      ? new THREE.FogExp2(fogHex, fogDensity)
      : null;
    if (threeState.sun) {
      threeState.sun.intensity = 0;
    }
    if (threeState.fillLight) {
      threeState.fillLight.intensity = 0;
    }
  }

  function buildOutbackDustSystem(root) {
    const THREE = globalThis.THREE;
    const count = 7000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 130;
      positions[i * 3 + 1] = Math.random() * 24 - 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120 - 8;
      velocities[i] = 0.012 + Math.random() * 0.024;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSpeed', new THREE.BufferAttribute(velocities, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        dustColor: { value: new THREE.Color(0xe67e22) }
      },
      vertexShader: `
        attribute float aSpeed;
        uniform float time;
        varying float vGlow;
        void main() {
          vec3 p = position;
          float rise = mod(time * (1.7 + aSpeed * 26.0), 20.0);
          p.y = -4.0 + rise;
          p.x += sin(time * 2.1 + p.z * 0.08) * (0.5 + aSpeed * 14.0);
          p.z += cos(time * 0.8 + p.x * 0.04) * 0.35;
          vGlow = 0.55 + aSpeed * 18.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = 1.8 + aSpeed * 28.0;
        }
      `,
      fragmentShader: `
        uniform vec3 dustColor;
        varying float vGlow;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = 1.0 - smoothstep(0.0, 0.5, length(uv));
          gl_FragColor = vec4(dustColor * (0.82 + vGlow * 0.2), d * 0.68);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });
    const particles = new THREE.Points(geometry, material);
    particles.position.set(0, -2.1, -12);
    root.add(particles);
    return { particles, material, geometry };
  }

  function buildBushlandLeafSystem(root) {
    const THREE = globalThis.THREE;
    const count = 140;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const drift = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 92;
      positions[i * 3 + 1] = Math.random() * 13 + 1.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 92 - 8;
      speeds[i] = 0.01 + Math.random() * 0.014;
      drift[i] = Math.random() * Math.PI * 2;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
    geometry.setAttribute('aDrift', new THREE.BufferAttribute(drift, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        map: { value: getLeafAlphaTexture() }
      },
      vertexShader: `
        attribute float aSpeed;
        attribute float aDrift;
        uniform float time;
        varying float vAlpha;
        varying float vAngle;
        void main() {
          vec3 p = position;
          float fall = mod(time * (2.2 + aSpeed * 40.0) + aDrift * 1.7, 16.0);
          p.y = 12.0 - fall;
          p.x += sin(time * 1.8 + aDrift) * 0.9;
          p.z += cos(time * 1.2 + aDrift) * 0.4;
          vAlpha = 0.4;
          vAngle = time * 2.4 + aDrift;
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = 16.0;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        varying float vAlpha;
        varying float vAngle;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float c = cos(vAngle);
          float s = sin(vAngle);
          vec2 rot = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c);
          vec2 sampleUv = rot + vec2(0.5);
          float body = texture2D(map, sampleUv).a;
          gl_FragColor = vec4(vec3(0.33, 0.43, 0.24), body * vAlpha * 0.7);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });
    const particles = new THREE.Points(geometry, material);
    particles.position.set(0, -1.9, -10);
    root.add(particles);
    return { particles, material, geometry };
  }

  function buildServoSparkSystem(root) {
    const THREE = globalThis.THREE;
    const count = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    const hue = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 72;
      positions[i * 3 + 1] = Math.random() * 9 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 86 - 8;
      velocities[i] = 0.04 + Math.random() * 0.08;
      hue[i] = i % 2 === 0 ? 0 : 1;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSpeed', new THREE.BufferAttribute(velocities, 1));
    geometry.setAttribute('aHue', new THREE.BufferAttribute(hue, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float aSpeed;
        attribute float aHue;
        uniform float time;
        varying float vHue;
        void main() {
          vec3 p = position;
          float rise = mod(time * (5.8 + aSpeed * 20.0), 14.0);
          p.y = -2.0 + rise;
          p.x += sin(time * 8.0 + p.z * 0.9) * 0.32;
          p.z += cos(time * 5.6 + p.x * 1.1) * 0.14;
          vHue = aHue;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = 2.2 + aSpeed * 12.0;
        }
      `,
      fragmentShader: `
        varying float vHue;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = 1.0 - smoothstep(0.0, 0.5, length(uv));
          vec3 col = mix(vec3(0.22, 0.76, 0.82), vec3(0.9, 0.46, 0.56), vHue);
          gl_FragColor = vec4(col, d * 0.72);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(geometry, material);
    particles.position.set(0, 0.8, -10);
    root.add(particles);
    return { particles, material, geometry };
  }

  function buildCoastRainSystem(root) {
    const THREE = globalThis.THREE;
    const count = 14000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    const offsets = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 260;
      positions[i * 3 + 1] = Math.random() * 44 + 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 170 - 10;
      velocities[i] = 0.55 + Math.random() * 0.65;
      offsets[i] = Math.random() * Math.PI * 2;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSpeed', new THREE.BufferAttribute(velocities, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(offsets, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        tint: { value: new THREE.Color(0xa6cde2) }
      },
      vertexShader: `
        attribute float aSpeed;
        attribute float aPhase;
        uniform float time;
        varying float vAlpha;
        void main() {
          vec3 p = position;
          float cycle = mod(time * (14.0 + aSpeed * 9.0) + aPhase * 7.0, 56.0);
          p.y = 26.0 - cycle;
          p.x += sin(time * 3.5 + aPhase) * 0.16;
          p.z += cos(time * 2.0 + aPhase) * 0.08;
          vAlpha = 0.56 + aSpeed * 0.42;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = 1.8 + aSpeed * 2.6;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform vec3 tint;
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = length(uv);
          float droplet = 1.0 - smoothstep(0.15, 0.5, d);
          gl_FragColor = vec4(tint, droplet * vAlpha * 0.9);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });
    const rain = new THREE.Points(geometry, material);
    rain.position.set(0, -2, -8);
    root.add(rain);
    return { rain, material, geometry };
  }

  function buildTasmaniaSnowSystem(root) {
    const THREE = globalThis.THREE;
    const count = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const drift = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 128;
      positions[i * 3 + 1] = Math.random() * 30 + 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 130 - 10;
      speeds[i] = 0.015 + Math.random() * 0.02;
      drift[i] = Math.random() * Math.PI * 2;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
    geometry.setAttribute('aDrift', new THREE.BufferAttribute(drift, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float aSpeed;
        attribute float aDrift;
        uniform float time;
        void main() {
          vec3 p = position;
          float fall = mod(time * (3.1 + aSpeed * 60.0) + aDrift * 0.9, 36.0);
          p.y = 30.0 - fall;
          p.x += cos(time * 0.8 + aDrift) * 0.55;
          p.z += sin(time * 0.45 + aDrift) * 0.2;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = 2.6;
        }
      `,
      fragmentShader: `
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = 1.0 - smoothstep(0.0, 0.5, length(uv));
          gl_FragColor = vec4(vec3(1.0), d * 0.82);
        }
      `,
      transparent: true,
      depthWrite: false
    });
    const snow = new THREE.Points(geometry, material);
    snow.position.set(0, -0.6, -10);
    root.add(snow);
    return { snow, material, geometry };
  }

  function buildOutbackEcosystem(root) {
    const THREE = globalThis.THREE;
    const tufts = [];
    const boulders = [];
    const dust = buildOutbackDustSystem(root);
    setRegionAtmosphere(0x7ab0d6, 0xc9d8c8, 0.009);

    const sun = new THREE.DirectionalLight(0xffefcc, 1.5);
    sun.position.set(90, 15, -20);
    sun.castShadow = true;
    root.add(sun);
    root.add(new THREE.AmbientLight(0x8f7a5f, 0.52));

    const terrainGeo = new THREE.PlaneGeometry(124, 108, 220, 220);
    terrainGeo.rotateX(-Math.PI / 2);
    const terrainPos = terrainGeo.attributes.position;
    for (let i = 0; i < terrainPos.count; i++) {
      const x = terrainPos.getX(i);
      const z = terrainPos.getZ(i);
      const dunes = (octaveNoise ? octaveNoise(x * 0.065 + 5, z * 0.048 + 9) : Math.sin(x * 0.06) * 0.4) * 7.2;
      const swale = Math.abs(octaveNoise ? octaveNoise(x * 0.11 + 27, z * 0.1 + 11) : Math.cos(z * 0.18) * 0.25) * 4.2;
      const ripple = Math.sin(x * 0.11 + z * 0.045) * 1.2 + Math.cos(z * 0.12) * 0.7;
      let y = dunes - swale + ripple;
      if (y > 8.5) y = 8.5;
      if (y < -10.5) y -= Math.abs(Math.sin(x * 0.26 + z * 0.22)) * 1.1;
      terrainPos.setY(i, y);
    }
    terrainPos.needsUpdate = true;
    terrainGeo.computeVertexNormals();
    const terrain = makeMesh(terrainGeo, makeToonMaterial({ color: 0x9a6d43, emissive: 0x2f2118, emissiveIntensity: 0.018, roughness: 0.95, metalness: 0.02, gradientLevels: 3 }));
    terrain.position.set(0, -2.2, -28);
    root.add(terrain);

    const road = makeMesh(new THREE.PlaneGeometry(13, 90, 1, 28), new THREE.MeshStandardMaterial({ color: 0x5a5d62, roughness: 0.93, metalness: 0.05 }), false);
    road.rotation.x = -Math.PI / 2;
    road.rotation.z = -0.18;
    road.position.set(2, -1.62, -28);
    root.add(road);

    const centerLine = makeMesh(new THREE.PlaneGeometry(0.35, 66, 1, 24), new THREE.MeshBasicMaterial({ color: 0xf1d17a, transparent: true, opacity: 0.72, side: THREE.DoubleSide }), false);
    centerLine.rotation.x = -Math.PI / 2;
    centerLine.rotation.z = -0.18;
    centerLine.position.set(2.2, -1.59, -28);
    root.add(centerLine);

    const gorgeRibbon = makeMesh(new THREE.PlaneGeometry(18, 86, 1, 44), new THREE.MeshBasicMaterial({ color: 0x7e5c3d, transparent: true, opacity: 0.22, side: THREE.DoubleSide }));
    gorgeRibbon.rotation.x = -Math.PI / 2;
    gorgeRibbon.rotation.z = 0.26;
    gorgeRibbon.position.set(-10, -1.8, -34);
    root.add(gorgeRibbon);

    for (let i = 0; i < 20; i++) {
      const x = -22 + i * 2.25;
      const z = -14 - (i % 7) * 5.2;
      const tuft = makeMesh(new THREE.ConeGeometry(0.16 + (i % 3) * 0.03, 0.68 + (i % 4) * 0.08, 5), makeToonMaterial({ color: 0xb89b68, gradientLevels: 4 }), false);
      tuft.position.set(x, -1.8 + (i % 2) * 0.05, z);
      tuft.rotation.y = i * 0.43;
      root.add(tuft);
      tufts.push(tuft);
    }

    for (let i = 0; i < 22; i++) {
      const x = (i % 2 === 0 ? -1 : 1) * (6 + (i * 1.5) % 18);
      const z = -6 - (i * 3.1) % 44;
      const boulder = makeMesh(new THREE.DodecahedronGeometry(0.28 + (i % 4) * 0.12, 0), makeToonMaterial({ color: 0x85705d, emissive: 0x241d18, emissiveIntensity: 0.015, roughness: 0.9, metalness: 0.03, gradientLevels: 3 }));
      boulder.position.set(x, -1.85 + (i % 3) * 0.1, z);
      boulder.rotation.set(i * 0.14, i * 0.19, i * 0.08);
      root.add(boulder);
      boulders.push(boulder);
    }

    const chassis = new THREE.Group();
    const rustMat = makeToonMaterial({ color: 0x6d3d22, emissive: 0x7f4218, emissiveIntensity: 0.16, gradientLevels: 3 });
    const darkMat = makeToonMaterial({ color: 0x2a1a18, gradientLevels: 3 });
    const chassisBase = makeMesh(new THREE.BoxGeometry(3.8, 0.44, 1.8), rustMat);
    chassis.add(chassisBase);
    const chassisCabin = makeMesh(new THREE.BoxGeometry(3.2, 0.24, 1.45), darkMat, false);
    chassisCabin.position.set(0, 0.34, 0);
    chassis.add(chassisCabin);
    [[-1.42, -0.32], [1.42, -0.32], [-1.42, 0.32], [1.42, 0.32]].forEach(([x, z]) => {
      const wheel = makeMesh(new THREE.CylinderGeometry(0.34, 0.34, 0.24, 10), makeToonMaterial({ color: 0x3a2018, gradientLevels: 2 }), false);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, -0.2, z);
      chassis.add(wheel);
    });
    chassis.position.set(11, -1.3, -27);
    chassis.rotation.y = -0.55;
    root.add(chassis);

    const glowRim = makeMesh(new THREE.TorusGeometry(1.8, 0.08, 6, 22), makeToonMaterial({ color: 0xd98b3b, emissive: 0xd96b1d, emissiveIntensity: 0.26, gradientLevels: 2 }), false);
    glowRim.rotation.x = Math.PI / 2;
    glowRim.position.set(11, -0.7, -27);
    root.add(glowRim);

    threeState.regionSceneController = {
      update(t) {
        gorgeRibbon.position.y = -1.8 + Math.sin(t * 1.8) * 0.14;
        glowRim.rotation.z = t * 0.8;
        dust.material.uniforms.time.value = t;
        tufts.forEach((tuft, index) => {
          tuft.rotation.z = Math.sin(t * 2.2 + index) * 0.09;
        });
        boulders.forEach((boulder, index) => {
          boulder.rotation.x += 0.001 + index * 0.00004;
        });
      }
    };
  }

  function buildBushlandEcosystem(root) {
    const THREE = globalThis.THREE;
    const outlined = [];
    const snakes = [];
    const leafTexture = getLeafAlphaTexture();
    const leaves = buildBushlandLeafSystem(root);
    setRegionAtmosphere(0x87ab75, 0x6d8a60, 0.014);

    const canopySun = new THREE.DirectionalLight(0xffe5b0, 0.9);
    canopySun.position.set(-10, 24, 10);
    root.add(canopySun);

    const komorebi = new THREE.SpotLight(0xf1e3b4, 1.1, 72, 0.34, 0.55, 1.1);
    komorebi.position.set(0, 28, -8);
    komorebi.target.position.set(0, -2.2, -22);
    komorebi.map = leafTexture;
    komorebi.map.center.set(0.5, 0.5);
    komorebi.castShadow = true;
    root.add(komorebi);
    root.add(komorebi.target);

    const terrainGeo = new THREE.PlaneGeometry(92, 88, 176, 176);
    terrainGeo.rotateX(-Math.PI / 2);
    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const roll = (octaveNoise ? octaveNoise(x * 0.06 + 2, z * 0.06 + 4) : Math.sin(x * 0.12)) * 1.8;
      const undergrowth = Math.cos(x * 0.18 + z * 0.11) * 0.45 + Math.sin(z * 0.15) * 0.28;
      pos.setY(i, roll + undergrowth);
    }
    pos.needsUpdate = true;
    terrainGeo.computeVertexNormals();
    const terrain = makeMesh(terrainGeo, makeToonMaterial({ color: 0x718159, emissive: 0x1f2f1e, emissiveIntensity: 0.035, roughness: 0.93, metalness: 0.01, gradientLevels: 4 }));
    terrain.position.set(0, -2.2, -30);
    root.add(terrain);

    for (let i = 0; i < 72; i++) {
      let x = -30 + (i % 15) * 4.2 + Math.sin(i * 0.61) * 1.5;
      const z = -6 - Math.floor(i / 15) * 8.6 - Math.cos(i * 0.49) * 2;
      if (Math.abs(x) < 1.1 && z > -30 && z < -8) {
        x += x >= 0 ? 1.6 : -1.6;
      }
      const trunk = new THREE.Group();
      const trunkH = 4.2 + (i % 4) * 1.05;
      const bark = makeMesh(
        new THREE.CylinderGeometry(0.11 + (i % 2) * 0.02, 0.25, trunkH, 7),
        makeToonMaterial({ color: 0x6a665e, roughness: 0.96, metalness: 0.01, gradientLevels: 4 })
      );
      bark.rotation.z = Math.sin(i * 0.8) * 0.09;
      bark.position.y = trunkH * 0.5;
      trunk.add(bark);

      // Branch fork near crown avoids the "lollipop" trunk-through-sphere look.
      const branchMat = makeToonMaterial({ color: 0x605d55, roughness: 0.95, metalness: 0.01, gradientLevels: 4 });
      const branchL = makeMesh(new THREE.CylinderGeometry(0.05, 0.08, 1.35, 6), branchMat, false);
      branchL.position.set(-0.32, trunkH - 0.28, 0.04);
      branchL.rotation.z = 0.48;
      trunk.add(branchL);
      const branchR = makeMesh(new THREE.CylinderGeometry(0.05, 0.08, 1.28, 6), branchMat, false);
      branchR.position.set(0.34, trunkH - 0.32, -0.05);
      branchR.rotation.z = -0.44;
      trunk.add(branchR);

      const leafMatA = makeToonMaterial({ color: 0x4f7440, emissive: 0x1b3018, emissiveIntensity: 0.03, roughness: 0.96, metalness: 0.01, gradientLevels: 4 });
      const leafMatB = makeToonMaterial({ color: 0x5f834d, emissive: 0x1f3a1b, emissiveIntensity: 0.03, roughness: 0.96, metalness: 0.01, gradientLevels: 4 });
      const crown = new THREE.Group();
      const crownY = trunkH - 0.55;
      const clumps = [
        [0, 0, 0, 0.74, 0.56, 0.66],
        [-0.52, 0.18, 0.08, 0.58, 0.46, 0.52],
        [0.54, 0.14, -0.1, 0.56, 0.44, 0.52],
        [0.1, 0.38, -0.22, 0.5, 0.4, 0.44],
        [-0.16, 0.52, 0.16, 0.42, 0.34, 0.38]
      ];
      clumps.forEach(([cx, cy, cz, sx, sy, sz], idx) => {
        const clump = makeMesh(new THREE.SphereGeometry(1, 8, 7), idx % 2 === 0 ? leafMatA : leafMatB, false);
        clump.scale.set(sx, sy, sz);
        clump.position.set(cx, crownY + cy, cz);
        crown.add(clump);
      });
      trunk.add(crown);

      trunk.position.set(x, -2.1, z);
      trunk.rotation.y = i * 0.43;
      root.add(trunk);
      outlined.push(trunk);
    }

    // Fill the center run corridor with thinner young trees so the area is not barren.
    for (let i = 0; i < 18; i++) {
      const sapling = new THREE.Group();
      const x = (i % 2 === 0 ? -1 : 1) * (0.75 + (i % 4) * 0.55);
      const z = -8 - i * 2.1;
      const trunkH = 2.8 + (i % 3) * 0.55;
      const bark = makeMesh(
        new THREE.CylinderGeometry(0.07, 0.12, trunkH, 6),
        makeToonMaterial({ color: 0x666259, roughness: 0.96, metalness: 0.01, gradientLevels: 4 })
      );
      bark.position.y = trunkH * 0.5;
      bark.rotation.z = (i % 2 === 0 ? -1 : 1) * 0.08;
      sapling.add(bark);

      const top = makeMesh(
        new THREE.SphereGeometry(0.5 + (i % 2) * 0.08, 8, 7),
        makeToonMaterial({ color: 0x5f834e, emissive: 0x1d3219, emissiveIntensity: 0.025, roughness: 0.96, metalness: 0.01, gradientLevels: 4 }),
        false
      );
      top.scale.set(1, 0.75, 0.92);
      top.position.set((i % 2 === 0 ? -1 : 1) * 0.08, trunkH - 0.25, 0);
      sapling.add(top);

      sapling.position.set(x, -2.1, z);
      sapling.rotation.y = i * 0.37;
      root.add(sapling);
      outlined.push(sapling);
    }

    for (let i = 0; i < 180; i++) {
      const shrub = makeMesh(new THREE.IcosahedronGeometry(0.24 + (i % 4) * 0.07, 0), makeToonMaterial({ color: 0x587944, emissive: 0x1a2f17, emissiveIntensity: 0.025, gradientLevels: 3 }), false);
      let sx = -31 + (i % 30) * 2.15 + Math.sin(i * 1.37) * 0.8;
      const sz = -6 - Math.floor(i / 30) * 4.7 - (i % 3) * 0.7;
      if (Math.abs(sx) < 1.0 && sz > -30 && sz < -8) {
        sx += sx >= 0 ? 1.2 : -1.2;
      }
      shrub.position.set(sx, -1.96 + (i % 3) * 0.03, sz);
      root.add(shrub);
      outlined.push(shrub);
    }

    for (let i = 0; i < 260; i++) {
      const tuft = makeMesh(new THREE.ConeGeometry(0.12 + (i % 2) * 0.05, 0.52 + (i % 3) * 0.1, 5), makeToonMaterial({ color: 0x6a9053, roughness: 0.96, metalness: 0.01, gradientLevels: 3 }), false);
      let tx = -32 + (i % 32) * 2.05 + Math.sin(i * 1.8) * 0.6;
      const tz = -6 - Math.floor(i / 32) * 3.9 - (i % 4) * 0.35;
      if (Math.abs(tx) < 1.5 && tz > -28 && tz < -8) {
        tx += tx >= 0 ? 2.2 : -2.2;
      }
      tuft.position.set(tx, -1.95, tz);
      tuft.rotation.y = i * 0.42;
      root.add(tuft);
    }

    for (let i = 0; i < 4; i++) {
      const snake = buildSnake3D((i % 2 === 0 ? -1 : 1) * (4 + i * 3.1), -14 - i * 6.2);
      snake.scale.set(0.76, 0.76, 0.76);
      snake.position.y = -2.02;
      root.add(snake);
      snakes.push(snake);
    }

    for (let i = 0; i < 8; i++) {
      const log = makeMesh(new THREE.CylinderGeometry(0.11, 0.14, 2.8 + i * 0.16, 6), makeToonMaterial({ color: 0x5c3f24, gradientLevels: 4 }), false);
      log.rotation.set(0.08, i * 0.52, Math.PI / 2);
      log.position.set(-7 + i * 2.4, -2.0, -10 - i * 4.8);
      root.add(log);
      outlined.push(log);
    }

    const shack = new THREE.Group();
    const wallMat = makeToonMaterial({ color: 0x8a6c50, emissive: 0x2f1e14, emissiveIntensity: 0.06, gradientLevels: 4 });
    const roofMat = makeToonMaterial({ color: 0x6e6f73, gradientLevels: 4 });
    const porchMat = makeToonMaterial({ color: 0x5a402f, gradientLevels: 4 });
    shack.add(makeMesh(new THREE.BoxGeometry(3.8, 2.3, 2.8), wallMat));
    const roof = makeMesh(new THREE.CylinderGeometry(2.8, 2.8, 0.62, 4), roofMat, false);
    roof.rotation.y = Math.PI / 4;
    roof.position.y = 1.6;
    shack.add(roof);
    const porch = makeMesh(new THREE.BoxGeometry(2.1, 0.18, 1.2), porchMat, false);
    porch.position.set(0.9, -1.15, 1.2);
    shack.add(porch);
    const door = makeMesh(new THREE.BoxGeometry(0.72, 1.52, 0.08), makeToonMaterial({ color: 0x35251b, gradientLevels: 3 }), false);
    door.position.set(0.02, -0.12, 1.43);
    shack.add(door);
    const window = makeMesh(new THREE.BoxGeometry(0.55, 0.45, 0.04), makeToonMaterial({ color: 0xe8d79d, emissive: 0xcdbb68, emissiveIntensity: 0.22, gradientLevels: 2 }), false);
    window.position.set(-1.1, 0.2, 1.43);
    shack.add(window);
    shack.position.set(15, -0.95, -22);
    shack.rotation.y = -0.18;
    root.add(shack);
    outlined.push(shack);

    const sandals = new THREE.Group();
    [[-0.18, 0, 0], [0.18, 0, 0]].forEach(([x, y, z], index) => {
      const sole = makeMesh(new THREE.BoxGeometry(0.34, 0.05, 0.9), makeToonMaterial({ color: 0x5c3a22, gradientLevels: 3 }), false);
      sole.position.set(x, y, z);
      sole.rotation.z = index === 0 ? 0.1 : -0.08;
      sandals.add(sole);
      const strap = makeMesh(new THREE.TorusGeometry(0.12, 0.02, 4, 10), makeToonMaterial({ color: 0x38261c, gradientLevels: 3 }), false);
      strap.rotation.x = Math.PI / 2;
      strap.position.set(x, 0.08, z + 0.14);
      sandals.add(strap);
    });
    sandals.position.set(0.9, -1.0, 1.45);
    sandals.rotation.y = 0.24;
    shack.add(sandals);
    outlined.push(sandals);

    for (const item of outlined) {
      applyInvertedHullToObject(item, 0.02, 0x101010);
    }

    threeState.regionSceneController = {
      update(t) {
        komorebi.map.rotation = t * 0.08;
        komorebi.intensity = 1.05 + Math.sin(t * 1.8) * 0.12;
        leaves.material.uniforms.time.value = t;
        snakes.forEach((snake, index) => {
          snake.position.x += Math.sin(t * 1.3 + index) * 0.008;
          snake.rotation.y += Math.sin(t * 0.9 + index) * 0.002;
        });
      }
    };
  }

  function buildServoEcosystem(root) {
    const THREE = globalThis.THREE;
    const sparks = buildServoSparkSystem(root);
    const walkers = [];
    setRegionAtmosphere(0x96c7e8, 0xc7d8e3, 0.008);

    root.add(new THREE.AmbientLight(0xc8c7be, 0.6));
    const sun = new THREE.DirectionalLight(0xfff2d5, 1.2);
    sun.position.set(14, 22, 10);
    root.add(sun);

    const asphalt = makeMesh(new THREE.PlaneGeometry(96, 72, 1, 1), new THREE.MeshStandardMaterial({ color: 0x686f75, roughness: 0.96, metalness: 0.06 }));
    asphalt.rotation.x = -Math.PI / 2;
    asphalt.position.set(0, -2.3, -26);
    root.add(asphalt);

    const canopy = new THREE.Group();
    const canopyTop = makeMesh(new THREE.BoxGeometry(24, 0.35, 10), new THREE.MeshStandardMaterial({ color: 0xf3f5f4, roughness: 0.82, metalness: 0.08 }));
    canopyTop.position.y = 4.8;
    canopy.add(canopyTop);
    const canopyTrim = makeMesh(new THREE.BoxGeometry(24.2, 0.26, 10.2), new THREE.MeshStandardMaterial({ color: 0xd7392f, roughness: 0.75, metalness: 0.08 }), false);
    canopyTrim.position.y = 4.5;
    canopy.add(canopyTrim);
    for (let i = 0; i < 4; i++) {
      const post = makeMesh(new THREE.CylinderGeometry(0.16, 0.2, 5.2, 8), new THREE.MeshStandardMaterial({ color: 0xd8dbdd, roughness: 0.9, metalness: 0.12 }));
      post.position.set(-10 + i * 6.8, 2.2, -2.2);
      canopy.add(post);
    }
    canopy.position.set(0, -2.0, -18);
    root.add(canopy);

    const shop = new THREE.Group();
    const shopMat = new THREE.MeshStandardMaterial({ color: 0xe9ecee, roughness: 0.72, metalness: 0.08, emissive: 0x1a2026, emissiveIntensity: 0.02 });
    shop.add(makeMesh(new THREE.BoxGeometry(8.2, 4.2, 5.2), shopMat));
    const roof = makeMesh(new THREE.BoxGeometry(8.7, 0.32, 5.7), new THREE.MeshStandardMaterial({ color: 0x2f3b47, roughness: 0.84, metalness: 0.14 }), false);
    roof.position.y = 2.4;
    shop.add(roof);
    const windowMat = new THREE.MeshStandardMaterial({ color: 0x88a2b4, roughness: 0.22, metalness: 0.02, emissive: 0xd2e2ef, emissiveIntensity: 0.18 });
    const frontWindow = makeMesh(new THREE.BoxGeometry(5.5, 1.6, 0.08), windowMat, false);
    frontWindow.position.set(0, 0.3, 2.62);
    shop.add(frontWindow);
    const sideWindow = makeMesh(new THREE.BoxGeometry(0.08, 1.4, 2.4), windowMat, false);
    sideWindow.position.set(-4.12, 0.25, -0.1);
    shop.add(sideWindow);
    shop.position.set(0, -0.5, -29);
    root.add(shop);

    const prices = makeMesh(new THREE.BoxGeometry(2.8, 6.8, 0.5), new THREE.MeshStandardMaterial({ color: 0x314557, roughness: 0.82, metalness: 0.08 }));
    prices.position.set(12, 0.9, -14);
    root.add(prices);
    const pricesFace = makeMesh(new THREE.BoxGeometry(2.3, 5.8, 0.08), new THREE.MeshBasicMaterial({ color: 0xf3f5f6, transparent: true, opacity: 0.96 }), false);
    pricesFace.position.set(12, 0.9, -13.74);
    root.add(pricesFace);

    const signHeader = makeMesh(new THREE.BoxGeometry(2.26, 1.2, 0.09), new THREE.MeshBasicMaterial({ color: 0xd8342f }), false);
    signHeader.position.set(12, 3.1, -13.68);
    root.add(signHeader);

    const forecourtMark = makeMesh(new THREE.PlaneGeometry(18, 6, 1, 1), new THREE.MeshBasicMaterial({ color: 0xb8c0c8, transparent: true, opacity: 0.22, side: THREE.DoubleSide }), false);
    forecourtMark.rotation.x = -Math.PI / 2;
    forecourtMark.position.set(0, -2.26, -13);
    root.add(forecourtMark);

    const pumpColors = [0x2f8a4f, 0x2f3c56];
    for (let i = 0; i < 2; i++) {
      const bowser = new THREE.Group();
      bowser.add(makeMesh(new THREE.BoxGeometry(1.0, 2.1, 0.9), new THREE.MeshStandardMaterial({ color: 0xeef1f2, roughness: 0.74, metalness: 0.1 })));
      const top = makeMesh(new THREE.BoxGeometry(1.05, 0.24, 1.05), new THREE.MeshStandardMaterial({ color: pumpColors[i], emissive: pumpColors[i], emissiveIntensity: 0.05 }));
      top.position.y = 1.2;
      bowser.add(top);
      const label = makeMesh(new THREE.BoxGeometry(0.64, 0.38, 0.08), new THREE.MeshBasicMaterial({ color: i === 0 ? 0x2f8a4f : 0xffcc35 }), false);
      label.position.set(0, 0.25, 0.5);
      bowser.add(label);
      bowser.position.set(-3 + i * 6, -1.25, -12);
      root.add(bowser);
    }

    const pointA = new THREE.PointLight(0xffe8bf, 0.8, 14, 2);
    pointA.position.set(-2, 0.9, -27.5);
    root.add(pointA);
    const pointB = new THREE.PointLight(0xe8f0f7, 0.7, 14, 2);
    pointB.position.set(2, 0.9, -27.5);
    root.add(pointB);

    const lightning = new THREE.PointLight(0xbfe9ff, 0, 80, 2);
    lightning.position.set(-2, 10, -16);
    root.add(lightning);

    const stormCount = 4200;
    const stormGeo = new THREE.BufferGeometry();
    const stormPos = new Float32Array(stormCount * 2 * 3);
    const stormSpeed = new Float32Array(stormCount);
    const stormPhase = new Float32Array(stormCount);
    for (let i = 0; i < stormCount; i++) {
      const x = (Math.random() - 0.5) * 190;
      const y = Math.random() * 34 + 8;
      const z = (Math.random() - 0.5) * 130 - 10;
      const idx = i * 6;
      stormPos[idx] = x;
      stormPos[idx + 1] = y;
      stormPos[idx + 2] = z;
      stormPos[idx + 3] = x - 0.1;
      stormPos[idx + 4] = y - 0.85;
      stormPos[idx + 5] = z - 0.02;
      stormSpeed[i] = 0.58 + Math.random() * 0.56;
      stormPhase[i] = Math.random() * Math.PI * 2;
    }
    stormGeo.setAttribute('position', new THREE.BufferAttribute(stormPos, 3));
    stormGeo.setAttribute('aSpeed', new THREE.BufferAttribute(stormSpeed, 1));
    stormGeo.setAttribute('aPhase', new THREE.BufferAttribute(stormPhase, 1));
    const stormMat = new THREE.LineBasicMaterial({ color: 0x8fb0c6, transparent: true, opacity: 0.3, blending: THREE.NormalBlending, depthWrite: false });
    const storm = new THREE.LineSegments(stormGeo, stormMat);
    storm.position.set(0, -2, -10);
    root.add(storm);

    const spawnWalker = (x, z, phase, speed) => {
      const person = new THREE.Group();
      const body = makeMesh(new THREE.CapsuleGeometry(0.12, 0.52, 4, 8), new THREE.MeshStandardMaterial({ color: 0x2f4254, roughness: 0.92, metalness: 0.04 }));
      person.add(body);
      const head = makeMesh(new THREE.SphereGeometry(0.11, 10, 8), new THREE.MeshStandardMaterial({ color: 0xd9c0a2, roughness: 0.9, metalness: 0.02 }), false);
      head.position.y = 0.45;
      person.add(head);
      person.position.set(x, -1.72, z);
      root.add(person);
      walkers.push({ person, x, z, phase, speed });
    };

    spawnWalker(-5.2, -13.8, 0.2, 1.2);
    spawnWalker(4.4, -14.6, 1.6, 1.05);
    spawnWalker(8.2, -16.1, 2.7, 1.35);

    threeState.regionSceneController = {
      update(t) {
        sparks.material.uniforms.time.value = t;
        pointA.intensity = 0.68 + Math.sin(t * 1.4) * 0.08;
        pointB.intensity = 0.62 + Math.cos(t * 1.6) * 0.07;
        const thunderPulse = Math.max(0, Math.sin(t * 1.7) - 0.78);
        lightning.intensity = thunderPulse * 8.5;

        const pos = storm.geometry.attributes.position;
        const spd = storm.geometry.attributes.aSpeed;
        const ph = storm.geometry.attributes.aPhase;
        for (let i = 0; i < spd.count; i++) {
          let x = pos.getX(i * 2);
          let y = pos.getY(i * 2);
          let z = pos.getZ(i * 2);
          y -= spd.getX(i) * 2.1;
          x += Math.sin(t * 2.2 + ph.getX(i)) * 0.04;
          if (y < -2.3) {
            y = 34 + Math.random() * 10;
            x = (Math.random() - 0.5) * 190;
            z = (Math.random() - 0.5) * 130 - 10;
          }
          pos.setXYZ(i * 2, x, y, z);
          pos.setXYZ(i * 2 + 1, x - 0.1, y - 0.85, z - 0.02);
        }
        pos.needsUpdate = true;

        walkers.forEach((entry) => {
          entry.person.position.x = entry.x + Math.sin(t * entry.speed + entry.phase) * 1.6;
          entry.person.position.y = -1.72 + Math.abs(Math.sin(t * (entry.speed * 2.2) + entry.phase)) * 0.05;
          entry.person.rotation.y = Math.sin(t * entry.speed + entry.phase) > 0 ? Math.PI * 0.25 : -Math.PI * 0.25;
        });
      }
    };
  }

  function buildCoastlineEcosystem(root) {
    const THREE = globalThis.THREE;
    const boats = [];
    const palms = [];
    const fish = [];
    const rain = buildCoastRainSystem(root);
    rain.rain.visible = true;
    setRegionAtmosphere(0x5e8aab, 0x7ea3b9, 0.012);

    const sun = new THREE.DirectionalLight(0xffe9c8, 0.72);
    sun.position.set(-6, 28, 12);
    root.add(sun);

    const shoreGeo = new THREE.PlaneGeometry(90, 18, 120, 40);
    shoreGeo.rotateX(-Math.PI / 2);
    const shorePos = shoreGeo.attributes.position;
    for (let i = 0; i < shorePos.count; i++) {
      const x = shorePos.getX(i);
      const z = shorePos.getZ(i);
      const dunes = Math.sin(x * 0.13) * 0.16 + Math.cos(z * 0.2) * 0.1;
      shorePos.setY(i, -0.38 - z * 0.016 + dunes * 0.62);
    }
    shorePos.needsUpdate = true;
    shoreGeo.computeVertexNormals();
    const shore = makeMesh(shoreGeo, makeToonMaterial({ color: 0x9c7348, emissive: 0x12100c, emissiveIntensity: 0.003, roughness: 0.98, metalness: 0.01, gradientLevels: 4 }));
    shore.position.set(0, -2.46, -38);
    root.add(shore);

    const waterGeo = new THREE.PlaneGeometry(260, 220, 280, 280);
    waterGeo.rotateX(-Math.PI / 2);
    const waterMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vWave;
        void main() {
          vUv = uv;
          vec3 p = position;
          float swell = sin(p.x * 0.085 + time * 1.35) * cos(p.z * 0.09 + time * 1.28) * 3.5;
          float ripples = sin(p.x * 0.62 + time * 2.9) * 0.56 + cos(p.z * 0.54 - time * 2.2) * 0.44;
          p.y = swell + ripples;
          vWave = swell + ripples * 0.6;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vWave;
        void main() {
          vec3 deep = vec3(0.03, 0.14, 0.29);
          vec3 shallow = vec3(0.13, 0.41, 0.58);
          vec3 col = mix(shallow, deep, smoothstep(-0.7, 0.9, vUv.y));
          float foam = smoothstep(0.58, 2.15, abs(vWave));
          float crest = smoothstep(0.78, 1.0, sin(vUv.x * 46.0 + vUv.y * 28.0 + vWave * 5.0));
          col += vec3(0.1, 0.13, 0.16) * foam;
          col += vec3(0.16, 0.2, 0.22) * crest * 0.35;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, -2.46, -18);
    root.add(water);

    const lagoon = new THREE.Mesh(
      new THREE.PlaneGeometry(176, 90, 180, 96),
      new THREE.MeshStandardMaterial({ color: 0x245f80, roughness: 0.22, metalness: 0.02, transparent: true, opacity: 0.56, side: THREE.DoubleSide })
    );
    lagoon.rotation.x = -Math.PI / 2;
    lagoon.position.set(0, -2.44, -4);
    root.add(lagoon);

    const foamBand = new THREE.Mesh(
      new THREE.PlaneGeometry(150, 14, 80, 12),
      new THREE.MeshBasicMaterial({ color: 0x6b9bb0, transparent: true, opacity: 0.04, side: THREE.DoubleSide })
    );
    foamBand.rotation.x = -Math.PI / 2;
    foamBand.position.set(0, -2.46, -2.2);
    root.add(foamBand);

    const createPalm = (x, z, scale, lean = 0) => {
      const palm = new THREE.Group();
      const trunk = makeMesh(new THREE.CylinderGeometry(0.16 * scale, 0.28 * scale, 5.2 * scale, 7), makeToonMaterial({ color: 0x7b5b3a, gradientLevels: 4 }));
      trunk.position.y = 2.4 * scale;
      trunk.rotation.z = lean;
      palm.add(trunk);
      const crown = new THREE.Group();
      crown.position.y = 5.0 * scale;
      for (let i = 0; i < 7; i++) {
        const frond = makeMesh(new THREE.ConeGeometry(0.18 * scale, 2.3 * scale, 5, 1, true), makeToonMaterial({ color: 0x5f7e3e, emissive: 0x25371a, emissiveIntensity: 0.04, gradientLevels: 4 }), false);
        frond.rotation.z = Math.PI / 2;
        frond.rotation.y = i * (Math.PI * 2 / 7);
        frond.rotation.x = -0.82 + Math.sin(i * 1.3) * 0.16;
        frond.position.x = 0.92 * scale;
        crown.add(frond);
      }
      const coconuts = makeMesh(new THREE.SphereGeometry(0.12 * scale, 6, 6), makeToonMaterial({ color: 0x5a4028, gradientLevels: 3 }), false);
      coconuts.position.set(0, -0.2 * scale, 0);
      crown.add(coconuts);
      palm.add(crown);
      palm.position.set(x, -2.35, z);
      palm.rotation.y = -0.2 + x * 0.02;
      root.add(palm);
      palms.push(palm);
    };

    [
      [-30, -10, 0.9, -0.06],
      [-24, -11, 0.94, 0.01],
      [-18, -12, 1.06, 0.03],
      [-10, -12, 0.98, -0.02],
      [10, -11, 0.98, -0.02],
      [16, -12, 1.08, 0.08],
      [22, -12, 1.16, 0.06],
      [28, -14, 0.86, -0.04],
      [34, -16, 0.95, 0.03],
      [-34, -18, 0.88, -0.01],
      [4, -13, 0.96, 0.02],
      [-2, -12, 0.9, 0.01],
      [38, -20, 0.9, 0.02],
      [-38, -20, 0.92, -0.03]
    ].forEach(([x, z, scale, lean]) => createPalm(x, z, scale, lean));

    for (let i = 0; i < 4; i++) {
      const fishBody = makeMesh(new THREE.ConeGeometry(0.24 + i * 0.03, 1.2 + i * 0.15, 5), makeToonMaterial({ color: i === 3 ? 0x262e35 : 0x4d6d7b, gradientLevels: 3 }), false);
      fishBody.rotation.z = Math.PI / 2;
      fishBody.position.set(-18 + i * 10, -4.5 - i * 0.35, -58 - i * 4);
      root.add(fishBody);
      fish.push({ obj: fishBody, phase: i * 1.3, speed: 0.18 + i * 0.04, depth: -58 - i * 4, seaLane: -18 + i * 10 });
    }

    for (let i = 0; i < 7; i++) {
      const boat = new THREE.Group();
      boat.add(makeMesh(new THREE.BoxGeometry(2 + i * 0.16, 0.32, 0.82), makeToonMaterial({ color: i % 3 === 2 ? 0x7a6b58 : 0x8c5a36, gradientLevels: 4 })));
      const deck = makeMesh(new THREE.BoxGeometry(1.4, 0.08, 0.56), makeToonMaterial({ color: 0xc2ae8e, gradientLevels: 3 }), false);
      deck.position.y = 0.22;
      boat.add(deck);
      if (i % 2 !== 0) {
        const mast = makeMesh(new THREE.CylinderGeometry(0.03, 0.03, 1.3 + i * 0.2, 6), makeToonMaterial({ color: 0x5a4028, gradientLevels: 3 }), false);
        mast.position.set(0.18, 0.82, 0);
        boat.add(mast);
        const sail = makeMesh(new THREE.PlaneGeometry(0.72, 0.86 + i * 0.08), new THREE.MeshBasicMaterial({ color: i === 1 ? 0xd8d0be : 0x9ec7d6, transparent: true, opacity: 0.74, side: THREE.DoubleSide }), false);
        sail.position.set(0.34, 0.9, 0);
        boat.add(sail);
      }
      boat.position.set(-28 + i * 9.5, -1.95, -10 - i * 4.5);
      boat.rotation.y = -0.5 + i * 0.28;
      root.add(boat);
      boats.push({ obj: boat, x: boat.position.x, z: boat.position.z, phase: i * 0.7 });
    }

    for (let i = 0; i < 8; i++) {
      const surfboard = makeMesh(
        new THREE.CapsuleGeometry(0.12 + (i % 2) * 0.02, 1 + (i % 3) * 0.16, 4, 8),
        new THREE.MeshStandardMaterial({ color: i % 3 === 0 ? 0xff6d4d : i % 3 === 1 ? 0x4dd2ff : 0xffd166, roughness: 0.62, metalness: 0.03 }),
        false
      );
      surfboard.rotation.set(Math.PI / 2, 0.2 + i * 0.24, 0.1 + i * 0.08);
      surfboard.position.set(-22 + i * 6, -2.12, -6 - (i % 4) * 2.6);
      root.add(surfboard);
    }

    for (let i = 0; i < 18; i++) {
      const umbrella = new THREE.Group();
      const pole = makeMesh(new THREE.CylinderGeometry(0.03, 0.03, 1.2, 6), makeToonMaterial({ color: 0x8e7149, gradientLevels: 3 }), false);
      pole.position.y = 0.6;
      umbrella.add(pole);
      const cap = makeMesh(new THREE.ConeGeometry(0.42, 0.26, 10), makeToonMaterial({ color: i % 2 === 0 ? 0xff9f7a : 0x5ec8ff, gradientLevels: 3 }), false);
      cap.position.y = 1.24;
      cap.rotation.y = i * 0.31;
      umbrella.add(cap);
      umbrella.position.set(-36 + (i % 9) * 8.6, -2.18, -9 - Math.floor(i / 9) * 6);
      root.add(umbrella);
    }

    const buoy = makeMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.7, 8), makeToonMaterial({ color: 0xffc66a, emissive: 0xff8d2b, emissiveIntensity: 0.26, gradientLevels: 3 }));
    buoy.position.set(-6, -1.2, -19);
    root.add(buoy);

    const watchTower = new THREE.Group();
    const towerLegMat = new THREE.MeshStandardMaterial({ color: 0xb68f56, roughness: 0.86, metalness: 0.08 });
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([x, z]) => {
      const leg = makeMesh(new THREE.CylinderGeometry(0.09, 0.12, 5.4, 6), towerLegMat, false);
      leg.position.set(x * 0.9, 2.6, z * 0.9);
      watchTower.add(leg);
    });
    const deck = makeMesh(new THREE.BoxGeometry(3.2, 0.2, 3.2), new THREE.MeshStandardMaterial({ color: 0xbd945f, roughness: 0.84, metalness: 0.04 }), false);
    deck.position.y = 5.2;
    watchTower.add(deck);
    const hut = makeMesh(new THREE.BoxGeometry(2.2, 1.3, 2.2), new THREE.MeshStandardMaterial({ color: 0xc7a247, roughness: 0.76, metalness: 0.05 }), false);
    hut.position.y = 6.0;
    watchTower.add(hut);
    const roof = makeMesh(new THREE.ConeGeometry(1.7, 1.0, 4), new THREE.MeshStandardMaterial({ color: 0xf0c93a, roughness: 0.74, metalness: 0.04 }), false);
    roof.position.y = 7.0;
    roof.rotation.y = Math.PI / 4;
    watchTower.add(roof);
    watchTower.position.set(16, -2.1, -13);
    root.add(watchTower);

    threeState.regionSceneController = {
      update(t) {
        waterMat.uniforms.time.value = t;
        rain.material.uniforms.time.value = t;
        lagoon.position.y = -2.5 + Math.sin(t * 1.35) * 0.06;
        foamBand.position.y = -2.46 + Math.sin(t * 2.2 + 0.6) * 0.05;
        fish.forEach((creature, index) => {
          const swim = t * creature.speed + creature.phase;
          const wave = Math.sin(swim * 1.7) * 1.1;
          creature.obj.position.x = creature.seaLane + Math.sin(swim) * 12;
          creature.obj.position.y = -4.3 - index * 0.32 + Math.sin(swim * 2.4) * 0.35;
          creature.obj.position.z = creature.depth + Math.cos(swim * 1.2) * 10;
          creature.obj.rotation.y = Math.atan2(Math.cos(swim), Math.sin(swim)) + Math.PI / 2;
          creature.obj.rotation.z = Math.PI / 2 + wave * 0.05;
        });
        boats.forEach((boat) => {
          const wave = Math.sin(boat.x * 0.08 + t) * Math.cos(boat.z * 0.08 + t) * 1.5;
          boat.obj.position.y = -1.8 + wave * 0.65;
          boat.obj.rotation.z = Math.sin(t + boat.phase) * 0.05;
        });
        buoy.position.y = -1.2 + Math.sin(t * 2.4) * 0.18;
        palms.forEach((palm, index) => {
          palm.rotation.z = Math.sin(t * 0.9 + index) * 0.035;
        });
      }
    };
  }

  function buildTasmaniaEcosystem(root) {
    const THREE = globalThis.THREE;
    const ribbons = [];
    const snow = buildTasmaniaSnowSystem(root);
    setRegionAtmosphere(0x020306, 0x020306, null);

    const starsGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      const a = Math.random() * Math.PI * 2;
      const b = Math.acos(Math.random() * 2 - 1);
      const r = 170;
      starPositions[i * 3] = r * Math.sin(b) * Math.cos(a);
      starPositions[i * 3 + 1] = Math.abs(r * Math.cos(b));
      starPositions[i * 3 + 2] = r * Math.sin(b) * Math.sin(a);
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    root.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xe8f4ff, size: 0.42, transparent: true, opacity: 0.88, sizeAttenuation: true })));

    const peaksGeo = new THREE.PlaneGeometry(92, 78, 220, 220);
    peaksGeo.rotateX(-Math.PI / 2);
    const peakPos = peaksGeo.attributes.position;
    const peakColor = new Float32Array(peakPos.count * 3);
    for (let i = 0; i < peakPos.count; i++) {
      const x = peakPos.getX(i);
      const z = peakPos.getZ(i);
      const high = (octaveNoise ? octaveNoise(x * 0.18 + 6, z * 0.18 + 9) : Math.sin(x * 0.22)) * 10.5;
      const sharp = (octaveNoise ? octaveNoise(x * 0.54 + 21, z * 0.58 + 12) : Math.cos(z * 0.6)) * 4.8;
      const crest = Math.sin(x * 0.45) * 1.8 + Math.cos(z * 0.31) * 1.3;
      const y = high + sharp + crest;
      peakPos.setY(i, y);
      const snow = y > 15;
      const c = snow ? [0.96, 0.98, 1.0] : [0.55 + y * 0.01, 0.66 + y * 0.006, 0.72 + y * 0.004];
      peakColor[i * 3] = c[0];
      peakColor[i * 3 + 1] = c[1];
      peakColor[i * 3 + 2] = c[2];
    }
    peakPos.needsUpdate = true;
    peaksGeo.setAttribute('color', new THREE.BufferAttribute(peakColor, 3));
    peaksGeo.computeVertexNormals();
    const peaks = makeMesh(peaksGeo, new THREE.MeshToonMaterial({ color: 0xffffff, vertexColors: true, gradientMap: null }));
    peaks.position.set(0, -2.6, -32);
    root.add(peaks);

    for (let i = 0; i < 6; i++) {
      const log = makeMesh(new THREE.CylinderGeometry(0.1, 0.15, 2.6 + i * 0.24, 6), makeToonMaterial({ color: 0x4f4237, gradientLevels: 4 }), false);
      log.rotation.set(0.12, i * 0.7, Math.PI / 2);
      log.position.set(-12 + i * 4.2, -1.95, -8 - i * 5.8);
      root.add(log);
      const shrub = makeMesh(new THREE.IcosahedronGeometry(0.36 + (i % 2) * 0.08, 0), makeToonMaterial({ color: 0x70856c, gradientLevels: 4 }), false);
      shrub.position.set(-10 + i * 4.0, -1.9, -12 - i * 4.8);
      root.add(shrub);
    }

    [[0x39ff14, 0xd300c5], [0x31fff1, 0x6a59ff], [0x12f7a3, 0xff6bd7]].forEach((pair, index) => {
      const ribbonMat = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          colorA: { value: new THREE.Color(pair[0]) },
          colorB: { value: new THREE.Color(pair[1]) },
          band: { value: index * 0.17 }
        },
        vertexShader: `
          uniform float time;
          uniform float band;
          varying vec2 vUv;
          varying float vGlow;
          void main() {
            vUv = uv;
            vec3 p = position;
            float curve = sin(p.y * 0.24 + time * 0.8 + band) * 2.3 + cos(p.y * 0.52 - time * 0.4 + band) * 1.1;
            p.x += curve * (0.2 + uv.x * 0.8);
            p.z += sin(p.y * 0.4 + time * 0.6 + band) * 0.55;
            vGlow = smoothstep(0.0, 0.6, uv.x) * (1.0 - smoothstep(0.45, 1.0, uv.x));
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          varying vec2 vUv;
          varying float vGlow;
          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
          }
          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
          }
          void main() {
            vec2 uv = vUv;
            float drift = noise(vec2(uv.y * 6.0 + time * 0.55, uv.x * 3.0));
            float bands = smoothstep(0.0, 0.3, uv.x) * (1.0 - smoothstep(0.62, 1.0, uv.x));
            vec3 col = mix(colorA, colorB, clamp(uv.y + drift * 0.35, 0.0, 1.0));
            col += vec3(0.14, 0.18, 0.22) * drift;
            gl_FragColor = vec4(col, bands * vGlow * 0.82);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      const ribbon = new THREE.Mesh(new THREE.PlaneGeometry(12, 36, 34, 90), ribbonMat);
      ribbon.position.set(-10 + index * 8.5, 13 + index * 0.8, -38 - index * 2.2);
      ribbon.rotation.x = -0.06;
      ribbon.rotation.z = 0.14 - index * 0.08;
      root.add(ribbon);
      const ribbonLight = new THREE.PointLight(pair[0], 1.15, 24, 2);
      ribbonLight.position.set(ribbon.position.x, ribbon.position.y - 2.8, ribbon.position.z + 1.2);
      ribbons.push({ mesh: ribbon, mat: ribbonMat, light: ribbonLight });
      root.add(ribbonLight);
    });

    threeState.regionSceneController = {
      update(t) {
        ribbons.forEach((entry, index) => {
          entry.mat.uniforms.time.value = t;
          entry.light.intensity = 0.7 + Math.sin(t * 1.6 + index) * 0.25;
          entry.light.position.y = entry.mesh.position.y - 2.8 + Math.sin(t * 0.8 + index) * 0.4;
        });
        snow.material.uniforms.time.value = t;
      }
    };
  }

  // ─── DISPATCHER ──────────────────────────────────────────────────────────────
  const REGION_ECOSYSTEM_BUILDERS = {
    dunes: buildOutbackEcosystem,
    forest: buildBushlandEcosystem,
    industrial: buildServoEcosystem,
    beach: buildCoastlineEcosystem,
    mountains: buildTasmaniaEcosystem
  };

  function buildProceduralRegionScene(terrain, root) {
    threeState.regionAnimated = [];
    threeState.regionSceneController = null;
    const builder = REGION_ECOSYSTEM_BUILDERS[terrain] || REGION_ECOSYSTEM_BUILDERS.mountains;
    builder(root);
  }

  // ─── PER-FRAME PROCEDURAL ANIMATION ─────────────────────────────────────────
  function updateProceduralRegionScene(t, dt) {
    if (threeState.regionSceneController?.update) {
      threeState.regionSceneController.update(t, dt);
    }
    if (!threeState.regionAnimated?.length) return;
    for (const anim of threeState.regionAnimated) {
      if (anim.type === 'mat') {
        if (anim.material?.uniforms?.time) anim.material.uniforms.time.value = t;
      } else if (anim.type === 'bob') {
        if (anim.obj) anim.obj.position.y = anim.baseY + Math.sin(t * anim.speed + anim.phase) * anim.amp;
      } else if (anim.type === 'beaconRotate') {
        if (anim.obj) {
          anim.obj.position.x = anim.cx + Math.cos(t * 1.2) * 18;
          anim.obj.position.z = anim.cz + Math.sin(t * 1.2) * 18;
          anim.obj.target.position.set(anim.cx + Math.cos(t * 1.2 + 0.1) * 20, 0, anim.cz + Math.sin(t * 1.2 + 0.1) * 20);
        }
      } else if (anim.type === 'seagull') {
        const obj = anim.obj;
        if (!obj) continue;
        if (!anim.perched) {
          const r = obj.userData.orbitRadius || 8;
          const sp = obj.userData.orbitSpeed || 0.22;
          const ph = obj.userData.animPhase || 0;
          obj.position.x = Math.cos(t * sp + ph) * r;
          obj.position.z = Math.sin(t * sp + ph) * r - 16;
          obj.position.y = (obj.userData.orbitY || 4) + Math.sin(t * 1.9 + ph) * 0.38;
          obj.rotation.y = -(t * sp + ph) + Math.PI * 0.5;
        } else {
          obj.rotation.y = Math.sin(t * 0.4 + (obj.userData.animPhase || 0)) * 0.12;
        }
        const flap = Math.sin(t * 4.8 + (obj.userData.animPhase || 0)) * 0.52;
        if (obj.userData.wingL) obj.userData.wingL.rotation.x = flap;
        if (obj.userData.wingR) obj.userData.wingR.rotation.x = flap;
      } else if (anim.type === 'snake') {
        const obj = anim.obj;
        if (!obj?.userData?.snakeParts) continue;
        const ph = obj.userData.animPhase || 0;
        const parts = obj.userData.snakeParts;
        for (let i = 0; i < parts.length; i++) {
          const st = i / parts.length;
          parts[i].position.x = Math.sin(t * 0.85 + ph + st * 3.6) * (1.3 - st * 0.65);
          parts[i].position.z = i * 0.18;
          parts[i].position.y = -2.05 + Math.abs(Math.sin(t * 0.85 + ph + st * 3.6)) * 0.09;
          if (i === 0) {
            const nx = Math.sin(t * 0.85 + ph + 0.12) * (1.3 - 0.06);
            parts[0].rotation.y = Math.atan2(nx - parts[0].position.x, 0.18);
          }
        }
      } else if (anim.type === 'firefly') {
        const obj = anim.obj;
        if (!obj) continue;
        const ph = obj.userData.animPhase || 0;
        obj.position.x = (obj.userData.orbitBaseX || 0) + Math.sin(t * 1.15 + ph) * 0.8;
        obj.position.y = (obj.userData.orbitY || 1) + Math.sin(t * 0.72 + ph) * 0.5;
        const brightness = 0.35 + 0.65 * Math.abs(Math.sin(t * 1.9 + ph));
        if (obj.userData.light) obj.userData.light.intensity = brightness;
      } else if (anim.type === 'penguin') {
        const obj = anim.obj;
        if (!obj) continue;
        const ph = obj.userData.animPhase || 0;
        obj.rotation.y = Math.sin(t * 0.55 + ph) * 0.32;
        obj.position.y = Math.abs(Math.sin(t * 1.1 + ph)) * 0.07;
      } else if (anim.type === 'windmill') {
        if (anim.blades) anim.blades.rotation.z += dt * 1.4;
      } else if (anim.type === 'neon') {
        const obj = anim.obj;
        if (!obj?.userData?.neonLight) continue;
        const ph = obj.userData.animPhase || 0;
        const flicker = Math.random() < 0.02 ? 0.2 : 1;
        obj.userData.neonLight.intensity = flicker * (1.4 + 0.22 * Math.sin(t * 4.0 + ph));
      } else if (anim.type === 'snow') {
        const { geo, vel } = anim;
        if (!geo?.attributes?.position) continue;
        const positions = geo.attributes.position;
        for (let s = 0; s < vel.length; s++) {
          let y = positions.getY(s) - vel[s] * dt;
          if (y < -3.0) y = 20;
          positions.setY(s, y);
          positions.setX(s, positions.getX(s) + Math.sin(t + s * 0.52) * 0.006);
        }
        positions.needsUpdate = true;
      }
    }
  }

  function buildRegionProps(terrain) {
    clearThreeProps();
    if (!hasThree) return;

    if (terrain === 'dunes') {
      addProp(buildOutbackDuneField());
      [[-8, -22, 3.2, 4.8], [5, -18, 2.4, 3.6], [-3, -30, 2.8, 4], [10, -26, 2, 3.2]].forEach(([x, z, w2, h]) => {
        const grp = buildMesa(x, z, w2, h);
        addProp(grp);
      });
      for (let i = 0; i < 14; i++) {
        const x = (i % 2 === 0 ? -1 : 1) * (5 + (i * 1.3) % 7);
        const z = -8 - (i * 2.2) % 28;
        const stump = makeMesh(
          new globalThis.THREE.CylinderGeometry(0.06, 0.12, 0.6 + (i % 3) * 0.3, 4),
          makeToonMaterial({ color: 0x6a4020, gradientLevels: 4 })
        );
        stump.position.set(x, 0.3, z);
        addProp(stump);
      }
    }

    if (terrain === 'forest') {
      const treePositions = [
        [-7, -10], [-9, -16], [-6, -22], [-8, -30],
        [7, -8],  [9, -14],  [7, -20],  [10, -28],
        [-5, -36], [8, -34]
      ];
      treePositions.forEach(([x, z]) => {
        const h = 4.2 + (Math.abs(x + z) % 4) * 1.1;
        addProp(buildGumTree(x, z, h));
      });
      const bushPositions = [
        [-4, -8, 0.6], [-2, -14, 0.5], [-6, -18, 0.7], [3, -10, 0.6], [5, -15, 0.55],
        [-3, -24, 0.6], [2, -22, 0.65], [-8, -26, 0.5], [6, -25, 0.7], [-1, -32, 0.6]
      ];
      bushPositions.forEach(([x, z, sz]) => addProp(buildBush(x, z, sz)));
      const fernPositions = [[0, -10], [-5, -15], [4, -18], [-2, -25], [3, -30]];
      fernPositions.forEach(([x, z]) => addProp(buildFernCluster(x, z)));
      for (let i = 0; i < 5; i++) {
        const log = makeMesh(
          new globalThis.THREE.CylinderGeometry(0.16, 0.2, 2.8 + i * 0.5, 7),
          makeToonMaterial({ color: 0x4a2810, gradientLevels: 4 })
        );
        log.rotation.set(0, 0, Math.PI / 2 + (i * 0.4));
        log.position.set(-5 + i * 2.8, 0.2, -4 - i * 5.5);
        addProp(log);
      }
    }

    if (terrain === 'beach') {
      [[-8, -12, 3.2], [-6, -20, 2.8], [8, -10, 3], [7, -18, 2.6]].forEach(([x, z, h]) => {
        addProp(buildPalmTree(x, z, h));
      });
      addProp(buildLighthouse(0, -26));
      [[-4, -14], [3, -20]].forEach(([x, z]) => {
        const boat = buildBoat(x, z);
        boat.userData.isBoat = true;
        addProp(boat);
      });
      addProp(buildStylizedWaterPlane(0, -23));
      const boulderPositions = [
        [-6, -10, 0.5], [-3, -12, 0.45], [2, -11, 0.4],
        [6, -16, 0.55], [-8, -22, 0.6], [5, -24, 0.48],
        [-2, -28, 0.52], [7, -30, 0.58]
      ];
      boulderPositions.forEach(([x, z, r]) => {
        const boulder = makeMesh(
          new globalThis.THREE.DodecahedronGeometry(r, 0),
          makeToonMaterial({ color: 0xa8967a, gradientLevels: 4 })
        );
        boulder.position.set(x, r * 0.35, z);
        addProp(boulder);
      });
    }

    if (terrain === 'industrial') {
      [[-7, -10, 4.5], [7, -12, 5.2], [-5, -20, 3.8], [9, -18, 4], [0, -28, 5.8]].forEach(([x, z, h]) => {
        addProp(buildPylon(x, z, h));
      });
      addProp(buildServoStore(0, -22));
      for (let i = 0; i < 5; i++) {
        const crate = makeMesh(
          new globalThis.THREE.BoxGeometry(1.2 + (i % 2) * 0.4, 0.7, 0.7),
          makeToonMaterial({ color: 0x2a4a6a, gradientLevels: 4 })
        );
        crate.position.set(-6 + i * 2.8, 0.35, -4 - i * 2);
        addProp(crate);
      }
    }

    if (terrain === 'mountains') {
      addProp(buildMountainRange());
      [[-7, -12, 1], [6, -10, 0.8], [-4, -22, 1.3], [8, -20, 0.9], [-9, -30, 1.1]].forEach(([x, z, r]) => {
        addProp(buildSnowRock(x, z, r));
      });
      for (let i = 0; i < 8; i++) {
        const x = (i % 2 === 0 ? -1 : 1) * (4 + (i * 1.7) % 6);
        const z = -8 - (i * 3.1) % 24;
        const grp = new globalThis.THREE.Group();
        const cMat = makeToonMaterial({ color: 0x2a4a38, gradientLevels: 4 });
        [2.2, 1.5, 0.9].forEach((cr, ki) => {
          const cone = makeMesh(new globalThis.THREE.ConeGeometry(cr * 0.5, cr * 0.9, 6), cMat);
          cone.position.set(0, ki * 0.9 + cr * 0.45, 0);
          grp.add(cone);
        });
        grp.position.set(x, 0, z);
        addProp(grp);
      }
      addProp(buildAuroraAustral());
    }

    if (threeState.props) {
      threeState.props.forEach(p => applyInvertedHullToObject(p, 0.022, 0x171923));
    }
  }

  const DEFAULT_REGION_GLTF_MANIFEST = {
    dunes: [
      { url: '/Assets/GLTF/outback/outback_cliffs.glb', position: [0, -2.4, -26], scale: 5.8 },
      { url: '/Assets/GLTF/outback/outback_dunes.glb', position: [0, -2.2, -16], scale: 5.2 }
    ],
    forest: [
      { url: '/Assets/GLTF/bushland/eucalyptus_cluster_a.glb', position: [-8, -1.8, -16], scale: 3.2 },
      { url: '/Assets/GLTF/bushland/eucalyptus_cluster_b.glb', position: [8, -1.8, -22], scale: 3.1 },
      { url: '/Assets/GLTF/bushland/forest_floor.glb', position: [0, -2.4, -18], scale: 4.6 }
    ],
    industrial: [
      { url: '/Assets/GLTF/servo/servo_station.glb', position: [0, -2.3, -21], scale: 4.5 },
      { url: '/Assets/GLTF/servo/industrial_props.glb', position: [0, -2.3, -19], scale: 4.1 }
    ],
    beach: [
      { url: '/Assets/GLTF/coast/coastline_cliffs.glb', position: [0, -2.6, -27], scale: 5.1 },
      { url: '/Assets/GLTF/coast/lighthouse_set.glb', position: [0, -2.1, -23], scale: 4.3 },
      { url: '/Assets/GLTF/coast/water_plane_stylized.glb', position: [0, -2.6, -18], scale: 4.9 }
    ],
    mountains: [
      { url: '/Assets/GLTF/tasmania/tasmania_ridges.glb', position: [0, -2.7, -30], scale: 5.7 },
      { url: '/Assets/GLTF/tasmania/tasmania_firline.glb', position: [0, -2.5, -20], scale: 4.8 },
      { url: '/Assets/GLTF/tasmania/aurora_ribbons.glb', position: [0, 6, -33], scale: 4.2 }
    ]
  };

  const DEFAULT_DASHER_GLTF_MANIFEST = {
    emu: '/Assets/GLTF/animals/emu.glb',
    wombat: '/Assets/GLTF/animals/wombat.glb',
    kangaroo: '/Assets/GLTF/animals/kangaroo.glb',
    koala: '/Assets/GLTF/animals/koala.glb',
    platypus: '/Assets/GLTF/animals/platypus.glb',
    possum: '/Assets/GLTF/animals/possum.glb',
    echidna: '/Assets/GLTF/animals/echidna.glb',
    cockatoo: '/Assets/GLTF/animals/cockatoo.glb',
    dingo: '/Assets/GLTF/animals/dingo.glb',
    bilby: '/Assets/GLTF/animals/bilby.glb',
    tasdevil: '/Assets/GLTF/animals/tasdevil.glb',
    kookaburra: '/Assets/GLTF/animals/kookaburra.glb',
    quokka: '/Assets/GLTF/animals/quokka.glb',
    numbat: '/Assets/GLTF/animals/numbat.glb'
  };

  const DEFAULT_ASSET_MANIFEST = {
    environment: {
      hdri: '/Assets/HDRI/terrain_master.hdr'
    },
    regions: DEFAULT_REGION_GLTF_MANIFEST,
    dashers: DEFAULT_DASHER_GLTF_MANIFEST
  };

  function buildAssetManifest() {
    const externalManifest = globalThis.DawnDashersAssetManifest;
    if (!externalManifest || typeof externalManifest !== 'object') {
      return DEFAULT_ASSET_MANIFEST;
    }
    const externalRegions = externalManifest.regions && typeof externalManifest.regions === 'object'
      ? externalManifest.regions
      : {};
    const externalDashers = externalManifest.dashers && typeof externalManifest.dashers === 'object'
      ? externalManifest.dashers
      : {};
    const hdri = typeof externalManifest.environment?.hdri === 'string'
      ? externalManifest.environment.hdri
      : DEFAULT_ASSET_MANIFEST.environment.hdri;

    return {
      environment: { hdri },
      regions: { ...DEFAULT_REGION_GLTF_MANIFEST, ...externalRegions },
      dashers: { ...DEFAULT_DASHER_GLTF_MANIFEST, ...externalDashers }
    };
  }

  const ASSET_MANIFEST = buildAssetManifest();

  function buildDefaultHdrTexture() {
    const THREE = globalThis.THREE;
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 512;
    const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 0, c.height);
    grad.addColorStop(0, '#f6e6cc');
    grad.addColorStop(0.45, '#9eb9d7');
    grad.addColorStop(1, '#4d5d80');
    g.fillStyle = grad;
    g.fillRect(0, 0, c.width, c.height);
    const tex = new THREE.CanvasTexture(c);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    if (THREE.SRGBColorSpace !== undefined) { tex.colorSpace = THREE.SRGBColorSpace; }
    return tex;
  }

  function ensureThreePipeline() {
    const THREE = globalThis.THREE;
    if (!threeState.loadingManager) {
      threeState.loadingManager = new THREE.LoadingManager();
    }
    if (!threeState.gltfLoader && THREE.GLTFLoader) {
      threeState.gltfLoader = new THREE.GLTFLoader(threeState.loadingManager);
    }
    if (!threeState.pmremGenerator && threeState.renderer) {
      threeState.pmremGenerator = new THREE.PMREMGenerator(threeState.renderer);
      threeState.pmremGenerator.compileEquirectangularShader();
    }
  }

  function loadGltfWithCache(url) {
    if (!url || !threeState.gltfLoader) {
      return Promise.resolve(null);
    }
    if (threeState.gltfCache.has(url)) {
      return threeState.gltfCache.get(url);
    }
    const promise = new Promise(resolve => {
      threeState.gltfLoader.load(
        url,
        gltf => resolve(gltf),
        undefined,
        () => resolve(null)
      );
    });
    threeState.gltfCache.set(url, promise);
    return promise;
  }

  function cloneGltfScene(scene) {
    const THREE = globalThis.THREE;
    if (THREE.SkeletonUtils?.clone) {
      return THREE.SkeletonUtils.clone(scene);
    }
    return scene.clone(true);
  }

  function registerModelShadows(root) {
    root.traverse(child => {
      if (child?.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  const DASHER_VISUAL_PRESETS = globalThis.DawnDashersCharacterVisualPresets || {};
  const DEFAULT_DASHER_PRESET = { rig: 'birdTall', fast: true, body: 0x8c6c4d, accent: 0x5a3824, glow: 0xf4d6a2, trail: 0xd7c0a2, speed: 8.6, bob: 0.09, hop: 0.06 };

  function getDasherVisualPreset(charKey) {
    return DASHER_VISUAL_PRESETS[charKey] || DASHER_VISUAL_PRESETS.emu || DEFAULT_DASHER_PRESET;
  }

  function makeDasherTrail(root, colorHex = 0xffffff) {
    const THREE = globalThis.THREE;
    const trailGroup = new THREE.Group();
    const trailColor = colorHex || 0xffffff;
    const trailMaterials = [];
    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: trailColor,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.9 - i * 0.14, 0.5 + i * 0.04), mat);
      plane.position.set(-0.65 - i * 0.18, 0.18 + i * 0.03, -0.16 - i * 0.06);
      plane.rotation.y = -0.2 - i * 0.04;
      trailGroup.add(plane);
      trailMaterials.push(mat);
    }
    trailGroup.visible = false;
    root.add(trailGroup);
    root.userData.trailGroup = trailGroup;
    root.userData.trailMaterials = trailMaterials;
  }

  function buildStylizedDasherModel(charKey) {
    const THREE = globalThis.THREE;
    const preset = getDasherVisualPreset(charKey);
    const root = new THREE.Group();
    const bodyMat = makeToonMaterial({ color: preset.body, emissive: preset.accent, emissiveIntensity: preset.fast ? 0.12 : 0.06, gradientLevels: 2 });
    const accentMat = makeToonMaterial({ color: preset.accent, gradientLevels: 2 });
    const lightMat = makeToonMaterial({ color: preset.glow, emissive: preset.glow, emissiveIntensity: 0.8, transparent: true, opacity: 0.95, gradientLevels: 2 });
    const darkMat = makeToonMaterial({ color: 0x16131b, gradientLevels: 2 });

    root.userData.dasherKey = charKey;
    root.userData.motionProfile = preset;
    root.userData.animPhase = Math.random() * Math.PI * 2;
    root.userData.baseY = -2.1;
    root.userData.baseX = -6.8;
    root.userData.baseZ = -6.6;
    root.userData.baseScale = 2.2;
    root.position.set(root.userData.baseX, root.userData.baseY, root.userData.baseZ);
    root.rotation.set(0, 0.72, 0);
    root.scale.setScalar(root.userData.baseScale);

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.58, 24),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.26, depthWrite: false })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -0.98;
    root.add(shadow);

    const parts = {};
    const addPart = (mesh, name, x, y, z, rx = 0, ry = 0, rz = 0) => {
      mesh.position.set(x, y, z);
      mesh.rotation.set(rx, ry, rz);
      parts[name] = mesh;
      root.add(mesh);
      return mesh;
    };

    const makeLimb = (radiusTop, radiusBottom, len, mat, segs = 6) => makeMesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, len, segs), mat, true, 0.014, 0x1c1620);
    const makeBall = (radius, mat) => makeMesh(new THREE.SphereGeometry(radius, 10, 8), mat, true, 0.014, 0x1c1620);
    const makeBox = (w, h, d, mat) => makeMesh(new THREE.BoxGeometry(w, h, d), mat, true, 0.014, 0x1c1620);

    if (preset.rig === 'birdTall' || preset.rig === 'birdCrest' || preset.rig === 'birdPerch') {
      const neck = makeLimb(0.08, 0.12, 0.92, bodyMat, 6);
      addPart(neck, 'neck', 0, 0.95, 0, -0.18, 0, 0);
      const body = makeBall(0.38, bodyMat);
      addPart(body, 'body', 0, 0.62, 0);
      const chest = makeBall(0.24, lightMat);
      chest.scale.set(1.0, 1.25, 0.9);
      addPart(chest, 'chest', 0, 0.58, 0.15);
      const head = makeBall(0.18, bodyMat);
      addPart(head, 'head', 0.02, 1.22, 0.08);
      const beak = makeMesh(new THREE.ConeGeometry(0.06, 0.24, 4), accentMat, true, 0.01, 0x28190f);
      addPart(beak, 'beak', 0.0, 1.16, 0.28, Math.PI / 2, 0, 0);
      const wingL = makeBox(0.12, 0.5, 0.44, accentMat);
      const wingR = makeBox(0.12, 0.5, 0.44, accentMat);
      addPart(wingL, 'wingL', -0.35, 0.56, 0.02, 0.16, 0.04, -0.35);
      addPart(wingR, 'wingR', 0.35, 0.56, 0.02, -0.16, -0.04, 0.35);
      const tail = makeMesh(new THREE.ConeGeometry(0.14, 0.42, 4), accentMat, true, 0.01, 0x28190f);
      addPart(tail, 'tail', 0, 0.34, -0.22, -Math.PI / 2.6, 0, 0);
      if (preset.rig === 'birdCrest' || preset.crest) {
        const crest = makeMesh(new THREE.ConeGeometry(0.06, 0.34, 4), lightMat, false);
        addPart(crest, 'crest', 0.0, 1.38, 0.03, -0.2, 0, 0.2);
      }
      if (charKey === 'emu') {
        const thighL = makeLimb(0.08, 0.11, 0.72, darkMat, 5);
        const thighR = makeLimb(0.08, 0.11, 0.72, darkMat, 5);
        addPart(thighL, 'thighL', -0.14, 0.12, 0.0, 0.08, 0, 0.14);
        addPart(thighR, 'thighR', 0.14, 0.12, 0.0, -0.08, 0, -0.14);
      }
    } else if (preset.rig === 'hopper') {
      const body = makeBall(0.34, bodyMat);
      body.scale.set(1.15, 1.0, 1.0);
      addPart(body, 'body', 0, 0.72, 0);
      const head = makeBall(0.18, bodyMat);
      addPart(head, 'head', 0.18, 1.1, 0.06);
      const muzzle = makeMesh(new THREE.ConeGeometry(0.08, 0.2, 5), accentMat, true, 0.01, 0x28190f);
      addPart(muzzle, 'muzzle', 0.31, 1.07, 0.18, Math.PI / 2, 0, 0);
      const armL = makeLimb(0.06, 0.05, 0.42, accentMat, 5);
      const armR = makeLimb(0.06, 0.05, 0.42, accentMat, 5);
      addPart(armL, 'armL', -0.2, 0.42, 0.12, 0.22, 0, -0.28);
      addPart(armR, 'armR', 0.18, 0.42, 0.12, -0.22, 0, 0.28);
      const legL = makeLimb(0.11, 0.08, 0.78, darkMat, 5);
      const legR = makeLimb(0.11, 0.08, 0.78, darkMat, 5);
      addPart(legL, 'legL', -0.16, 0.07, -0.02, -0.88, 0, -0.14);
      addPart(legR, 'legR', 0.16, 0.07, -0.02, -0.88, 0, 0.14);
      const tail = makeLimb(0.06, 0.1, 1.1, accentMat, 5);
      addPart(tail, 'tail', 0, 0.28, -0.52, 0.1, 0, 1.3);
      if (charKey === 'kangaroo') {
        const pouch = makeMesh(new THREE.SphereGeometry(0.14, 8, 6), lightMat, false);
        pouch.scale.set(1.0, 0.82, 0.7);
        addPart(pouch, 'pouch', 0.02, 0.55, 0.2);
      }
    } else if (preset.rig === 'platypus') {
      const body = makeBall(0.3, bodyMat);
      body.scale.set(1.15, 0.9, 1.0);
      addPart(body, 'body', 0, 0.55, 0.02);
      const head = makeBall(0.16, bodyMat);
      addPart(head, 'head', 0.15, 0.62, 0.16);
      const bill = makeMesh(new THREE.ConeGeometry(0.12, 0.28, 5), accentMat, true, 0.01, 0x28190f);
      addPart(bill, 'bill', 0.22, 0.6, 0.31, Math.PI / 2, 0, 0);
      const tail = makeBox(0.42, 0.12, 0.28, bodyMat);
      addPart(tail, 'tail', -0.32, 0.45, -0.12, 0.1, 0.1, -0.22);
      const feetL = makeBox(0.12, 0.05, 0.2, accentMat);
      const feetR = makeBox(0.12, 0.05, 0.2, accentMat);
      addPart(feetL, 'feetL', -0.1, 0.06, 0.12);
      addPart(feetR, 'feetR', 0.12, 0.06, 0.12);
    } else if (preset.rig === 'spine') {
      const body = makeBall(0.36, bodyMat);
      addPart(body, 'body', 0, 0.64, 0);
      const head = makeBall(0.18, bodyMat);
      addPart(head, 'head', 0.1, 0.92, 0.18);
      const snout = makeMesh(new THREE.ConeGeometry(0.08, 0.22, 5), accentMat, true, 0.01, 0x28190f);
      addPart(snout, 'snout', 0.12, 0.88, 0.3, Math.PI / 2, 0, 0);
      for (let i = 0; i < 15; i++) {
        const spike = makeMesh(new THREE.ConeGeometry(0.035, 0.22 + (i % 3) * 0.05, 5), lightMat, false);
        const angle = (i / 15) * Math.PI * 2;
        spike.position.set(Math.cos(angle) * 0.22, 0.72 + ((i % 4) * 0.04), Math.sin(angle) * 0.22);
        spike.rotation.set(-0.7, angle, 0);
        root.add(spike);
      }
    } else if (preset.rig === 'tailClimber') {
      const body = makeBall(0.3, bodyMat);
      body.scale.set(1.08, 0.92, 0.95);
      addPart(body, 'body', 0, 0.7, 0);
      const head = makeBall(0.17, bodyMat);
      addPart(head, 'head', 0.18, 1.02, 0.12);
      const tail = makeMesh(new THREE.CylinderGeometry(0.04, 0.08, 1.2, 5), accentMat, true, 0.01, 0x28190f);
      addPart(tail, 'tail', -0.25, 0.46, -0.48, 0.22, 0, 1.2);
      const earL = makeMesh(new THREE.ConeGeometry(0.06, 0.28, 4), accentMat, false);
      const earR = makeMesh(new THREE.ConeGeometry(0.06, 0.28, 4), accentMat, false);
      addPart(earL, 'earL', 0.02, 1.18, 0.02, -0.16, 0, -0.36);
      addPart(earR, 'earR', 0.18, 1.18, 0.08, -0.16, 0, 0.36);
    } else if (preset.rig === 'canine') {
      const body = makeBall(0.34, bodyMat);
      body.scale.set(1.25, 0.92, 0.82);
      addPart(body, 'body', 0, 0.62, 0);
      const head = makeBall(0.2, bodyMat);
      addPart(head, 'head', 0.24, 0.96, 0.08);
      const snout = makeMesh(new THREE.ConeGeometry(0.1, 0.28, 5), accentMat, true, 0.01, 0x28190f);
      addPart(snout, 'snout', 0.38, 0.92, 0.16, Math.PI / 2, 0, 0);
      const earL = makeMesh(new THREE.ConeGeometry(0.07, 0.24, 4), accentMat, false);
      const earR = makeMesh(new THREE.ConeGeometry(0.07, 0.24, 4), accentMat, false);
      addPart(earL, 'earL', 0.1, 1.1, 0.0, -0.18, 0, -0.28);
      addPart(earR, 'earR', 0.27, 1.1, 0.06, -0.18, 0, 0.28);
      const tail = makeMesh(new THREE.CylinderGeometry(0.04, 0.07, 0.95, 5), accentMat, true, 0.01, 0x28190f);
      addPart(tail, 'tail', -0.32, 0.7, -0.18, 0.15, 0, 1.0);
    } else if (preset.rig === 'striped') {
      const body = makeBall(0.32, bodyMat);
      body.scale.set(1.1, 0.9, 0.92);
      addPart(body, 'body', 0, 0.62, 0);
      const head = makeBall(0.16, bodyMat);
      addPart(head, 'head', 0.16, 0.94, 0.1);
      const snout = makeMesh(new THREE.ConeGeometry(0.08, 0.24, 5), accentMat, true, 0.01, 0x28190f);
      addPart(snout, 'snout', 0.3, 0.91, 0.18, Math.PI / 2, 0, 0);
      const tail = makeMesh(new THREE.CylinderGeometry(0.05, 0.1, 0.92, 5), accentMat, true, 0.01, 0x28190f);
      addPart(tail, 'tail', -0.28, 0.5, -0.34, 0.1, 0, 1.0);
      for (let i = 0; i < 4; i++) {
        const stripe = makeMesh(new THREE.BoxGeometry(0.36, 0.04, 0.08), darkMat, false);
        stripe.position.set(-0.04 + i * 0.08, 0.7 + i * 0.02, -0.02);
        root.add(stripe);
      }
    } else {
      const body = makeBall(0.34, bodyMat);
      addPart(body, 'body', 0, 0.62, 0);
      const head = makeBall(0.18, bodyMat);
      addPart(head, 'head', 0.12, 0.98, 0.08);
    }

    if (charKey === 'tasdevil') {
      const eyeGlow = makeMesh(new THREE.SphereGeometry(0.04, 6, 5), lightMat, false);
      addPart(eyeGlow, 'eyeGlow', 0.12, 0.98, 0.2);
      const eyeGlow2 = makeMesh(new THREE.SphereGeometry(0.04, 6, 5), lightMat, false);
      addPart(eyeGlow2, 'eyeGlow2', 0.18, 0.98, 0.2);
    }

    makeDasherTrail(root, preset.trail || preset.glow);
    root.userData.parts = parts;
    root.userData.glowParts = [lightMat];
    root.userData.baseBodyScale = root.scale.clone();
    return root;
  }

  function animateStylizedDasher(model, t, dt) {
    if (!model) {
      return;
    }
    const preset = model.userData.motionProfile || getDasherVisualPreset(model.userData.dasherKey || selectedCharacter);
    const phase = model.userData.animPhase || 0;
    const frameTime = preset.fast ? t : Math.floor(t * (preset.frameRate || 8)) / (preset.frameRate || 8);
    const speed = preset.speed || (preset.fast ? 8 : 2.2);
    const bob = Math.sin(frameTime * speed + phase);
    const snap = Math.sin(frameTime * speed * 1.9 + phase * 1.4);
    const hop = preset.hop ? Math.max(0, Math.sin(frameTime * 5.6 + phase)) : 0;

    model.position.y = model.userData.baseY + bob * (preset.bob || 0.08) + hop * 0.15;
    model.rotation.y = 0.72 + Math.sin(frameTime * 0.8 + phase) * (preset.fast ? 0.08 : 0.04);
    model.rotation.z = (preset.roll || 0) * Math.sin(frameTime * 2.4 + phase) + (preset.fast ? snap * 0.03 : 0);

    const squash = preset.fast ? 1 - hop * 0.14 : 1 - Math.abs(bob) * 0.04;
    const stretch = preset.fast ? 1 + hop * 0.18 : 1 + Math.abs(bob) * 0.05;
    const baseScale = model.userData.baseScale || 2.2;
    model.scale.set(baseScale * (1 + Math.abs(snap) * 0.03), baseScale * squash * stretch, baseScale * (1 - hop * 0.04));

    if (model.userData.parts?.tail) {
      model.userData.parts.tail.rotation.y = Math.sin(frameTime * 3.8 + phase) * 0.2;
    }
    if (model.userData.parts?.wingL) {
      const flap = Math.sin(frameTime * 8.0 + phase) * (preset.fast ? 0.52 : 0.22);
      model.userData.parts.wingL.rotation.x = flap;
      model.userData.parts.wingR.rotation.x = flap;
    }
    if (model.userData.parts?.earL) {
      const earWiggle = Math.sin(frameTime * 2.0 + phase) * 0.12;
      model.userData.parts.earL.rotation.z = -0.28 + earWiggle;
      model.userData.parts.earR.rotation.z = 0.28 - earWiggle;
    }
    if (model.userData.parts?.head && preset.breathe) {
      const breathe = 1 + Math.sin(t * 1.2 + phase) * 0.025;
      model.userData.parts.head.scale.setScalar(breathe);
      if (model.userData.parts.body) {
        model.userData.parts.body.scale.y = breathe;
      }
    }
    if (model.userData.parts?.eyeGlow && preset.pulseGlow) {
      const pulse = 0.45 + 0.55 * Math.abs(Math.sin(t * 4.2 + phase));
      model.userData.parts.eyeGlow.material.opacity = 0.45 + pulse * 0.45;
      model.userData.parts.eyeGlow2.material.opacity = 0.45 + pulse * 0.45;
    }
    if (model.userData.trailGroup) {
      const trailVisible = Boolean(preset.fast) && Math.abs(snap) > 0.12;
      model.userData.trailGroup.visible = trailVisible;
      const intensity = trailVisible ? 0.15 + Math.abs(snap) * 0.22 : 0;
      model.userData.trailMaterials.forEach((mat, index) => {
        mat.opacity = intensity * (0.7 - index * 0.16);
      });
    }
    if (model.userData.glowParts?.length && (preset.auroraGlow || preset.pulseGlow)) {
      model.userData.glowParts.forEach((mat) => {
        if (mat?.emissiveIntensity !== undefined) {
          mat.emissiveIntensity = 0.75 + Math.abs(Math.sin(t * 3.4 + phase)) * (preset.auroraGlow ? 1.0 : 1.4);
        }
      });
    }
  }

  async function setupEnvironmentLighting() {
    const THREE = globalThis.THREE;
    ensureThreePipeline();
    let envTexture = null;
    if (THREE.RGBELoader) {
      const loader = new THREE.RGBELoader(threeState.loadingManager);
      envTexture = await new Promise(resolve => {
        loader.load(ASSET_MANIFEST.environment.hdri, resolve, undefined, () => resolve(null));
      });
    }
    if (!envTexture) {
      envTexture = buildDefaultHdrTexture();
    }
    const envMap = threeState.pmremGenerator.fromEquirectangular(envTexture).texture;
    threeState.scene.environment = envMap;
    threeState.scene.background = null;
    if (envTexture.dispose) {
      envTexture.dispose();
    }
    threeState.environmentReady = true;
  }

  function setupPostProcessing(w, h) {
    const THREE = globalThis.THREE;
    if (!THREE.EffectComposer || !THREE.RenderPass) {
      threeState.composer = null;
      return;
    }
    const composer = new THREE.EffectComposer(threeState.renderer);
    const renderPass = new THREE.RenderPass(threeState.scene, threeState.camera);
    composer.addPass(renderPass);

    let outlinePass = null;

    if (THREE.ShaderPass) {
      const colorGradeShader = {
        uniforms: {
          tDiffuse: { value: null },
          gain: { value: 0.99 },
          saturation: { value: 0.88 },
          contrast: { value: 1.05 }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D tDiffuse;
          uniform float gain;
          uniform float saturation;
          uniform float contrast;
          varying vec2 vUv;
          vec3 sat(vec3 c, float s) {
            float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
            return mix(vec3(l), c, s);
          }
          void main() {
            vec4 col = texture2D(tDiffuse, vUv);
            col.rgb *= gain;
            col.rgb = sat(col.rgb, saturation);
            col.rgb = (col.rgb - 0.5) * contrast + 0.5;
            gl_FragColor = col;
          }
        `
      };
      const gradePass = new THREE.ShaderPass(colorGradeShader);
      composer.addPass(gradePass);
      threeState.colorGradePass = gradePass;
    }

    threeState.composer = composer;
    threeState.renderPass = renderPass;
    threeState.outlinePass = outlinePass;
  }

  function refreshOutlineSelection() {
    if (!threeState.outlinePass) {
      return;
    }
    const selected = [];
    if (threeState.regionRoot) {
      selected.push(threeState.regionRoot);
    }
    if (threeState.activeDasherModel) {
      selected.push(threeState.activeDasherModel);
    }
    threeState.outlinePass.selectedObjects = selected;
  }

  function removeRootObject(obj) {
    if (!obj || !threeState.scene) {
      return;
    }
    threeState.scene.remove(obj);
  }

  async function instantiateManifestItems(manifest, root, mixerScope) {
    const THREE = globalThis.THREE;
    if (!Array.isArray(manifest)) {
      return { loaded: 0, failedUrls: [] };
    }
    let loaded = 0;
    const failedUrls = [];
    for (const item of manifest) {
      const gltf = await loadGltfWithCache(item.url);
      if (!gltf?.scene) {
        failedUrls.push(item.url || '(missing-url)');
        continue;
      }
      const model = cloneGltfScene(gltf.scene);
      const s = Number(item.scale || 1);
      model.position.set(item.position?.[0] || 0, item.position?.[1] || 0, item.position?.[2] || 0);
      model.rotation.set(item.rotation?.[0] || 0, item.rotation?.[1] || 0, item.rotation?.[2] || 0);
      model.scale.set(s, s, s);
      registerModelShadows(model);
      root.add(model);
      loaded += 1;
      if (Array.isArray(gltf.animations) && gltf.animations.length) {
        const mixer = new THREE.AnimationMixer(model);
        const clip = gltf.animations.find(a => /run|idle|loop|walk/i.test(a.name || '')) || gltf.animations[0];
        const action = mixer.clipAction(clip);
        action.enabled = true;
        action.play();
        threeState.mixers.push({ scope: mixerScope, mixer });
      }
    }
    return { loaded, failedUrls };
  }

  async function loadRegionEnvironment(region) {
    if (!region || !threeState.ready) {
      return;
    }

    // Character-selected terrain must be isolated: clear old region immediately
    // so async loads never visually blend two biomes together.
    threeState.mixers = threeState.mixers.filter(m => m.scope !== 'region');
    threeState.regionAnimated = [];
    threeState.regionSceneController = null;
    clearThreeProps();
    removeRootObject(threeState.regionRoot);
    threeState.regionRoot = null;

    const token = ++threeState.regionLoadToken;
    const root = new globalThis.THREE.Group();
    root.name = `region-${region.terrain}-${token}`;
    threeState.scene.add(root);

    const manifest = ASSET_MANIFEST.regions[region.terrain] || [];
    const loadResult = await instantiateManifestItems(manifest, root, 'region');
    if (!loadResult.loaded && manifest.length) {
      console.warn(`[3D] Failed to load all region assets for ${region.terrain}:`, loadResult.failedUrls);
    }
    if (!loadResult.loaded) {
      buildProceduralRegionScene(region.terrain, root);
    }
    if (token !== threeState.regionLoadToken) {
      removeRootObject(root);
      return;
    }

    threeState.regionRoot = root;
    refreshOutlineSelection();
  }

  async function syncSelectedDasherModel() {
    if (!threeState.ready) {
      return;
    }
    // Keep only the 2D player renderer active; remove the optional 3D dasher actor.
    if (threeState.activeDasherModel) {
      removeRootObject(threeState.activeDasherModel);
      threeState.activeDasherModel = null;
      threeState.activeDasherId = null;
      threeState.mixers = threeState.mixers.filter(m => m.scope !== 'dasher');
      refreshOutlineSelection();
    }
  }

  function initThreeTerrain() {
    if (!hasThree || !threeRoot || threeState.ready) {
      return;
    }
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    const THREE = globalThis.THREE;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    if (THREE.SRGBColorSpace === undefined) {
      renderer.outputEncoding = 3001;
    } else {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    threeRoot.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(56, w / h, 0.1, 300);
    camera.position.set(0, 10.8, 17.2);
    camera.lookAt(0, 0, -8);

    const sun = new THREE.DirectionalLight(0xffe9cc, 1.38);
    sun.position.set(11, 18, 10);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 120;
    scene.add(sun);

    const bounce = new THREE.DirectionalLight(0xa7c4e7, 0.38);
    bounce.position.set(-10, 8, 9);
    scene.add(bounce);

    threeState.ready = true;
    threeState.renderer = renderer;
    threeState.scene = scene;
    threeState.camera = camera;
    threeState.sun = sun;
    threeState.fillLight = bounce;
    ensureThreePipeline();
    setupPostProcessing(w, h);
    void setupEnvironmentLighting();
    applyRegionThreeTheme(regions[state.regionIndex]);
    void syncSelectedDasherModel();
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
    threeState.scene.fog = new globalThis.THREE.FogExp2(theme.fog, theme.fogDensity || 0.025);

    const sunColors = {
      dunes:      0xffcc80,
      forest:     0xd8f0c0,
      beach:      0x90d0ff,
      industrial: 0x8de4ff,
      mountains:  0xd0e8ff
    };
    const gradeProfiles = {
      dunes:      { gain: 0.95, saturation: 0.84, contrast: 1.02 },
      forest:     { gain: 0.93, saturation: 0.82, contrast: 1.02 },
      beach:      { gain: 0.74, saturation: 0.84, contrast: 1.03 },
      industrial: { gain: 0.92, saturation: 0.84, contrast: 1.03 },
      mountains:  { gain: 0.9, saturation: 0.86, contrast: 1.01 }
    };
    threeState.sun.color.setHex(sunColors[region.terrain] || 0xffdfbe);
    threeState.sun.intensity = theme.sunIntensity || 1.15;
    if (threeState.colorGradePass?.uniforms) {
      const grade = gradeProfiles[region.terrain] || { gain: 0.94, saturation: 0.84, contrast: 1.02 };
      threeState.colorGradePass.uniforms.gain.value = grade.gain;
      threeState.colorGradePass.uniforms.saturation.value = grade.saturation;
      threeState.colorGradePass.uniforms.contrast.value = grade.contrast;
    }
    void loadRegionEnvironment(region);
    void syncSelectedDasherModel();
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
    threeState.t += dt;
    const t = threeState.t;
    const worldTrackShift = getTrackCenterDriftNorm(0.92) * 11.5;

    if (threeState.mixers?.length) {
      for (const entry of threeState.mixers) {
        entry.mixer.update(dt);
      }
    }
    animateStylizedDasher(threeState.activeDasherModel, t, dt);
    updateProceduralRegionScene(t, dt);

    if (threeState.activeDasherId !== selectedCharacter) {
      void syncSelectedDasherModel();
    }

    const camSwayX = Math.sin(t * 0.22) * 0.18;
    const camSwayY = Math.cos(t * 0.17) * 0.08 + 10.8;
    const trackCameraX = worldTrackShift * 0.68;
    threeState.camera.position.set(trackCameraX + camSwayX, camSwayY, 17.2);
    threeState.camera.lookAt(trackCameraX * 0.92, 0.12, -7.4);

    if (threeState.composer) {
      threeState.composer.render();
    } else {
      threeState.renderer.render(threeState.scene, threeState.camera);
    }
  }

  function buildAuroraAustral() {
    const THREE = globalThis.THREE;
    if (!THREE) return null;
    const group = new THREE.Group();
    const baseGeo = new THREE.PlaneGeometry(44, 13, 120, 24);
    const colors = [
      [0x52ff9a, 0xa34dff],
      [0x5af7ff, 0x7b6eff],
      [0x4df2a0, 0xc160ff]
    ];

    colors.forEach((pair, idx) => {
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          colorA: { value: new THREE.Color(pair[0]) },
          colorB: { value: new THREE.Color(pair[1]) },
          phase: { value: idx * 0.8 }
        },
        vertexShader: `
          uniform float time;
          uniform float phase;
          varying vec2 vUv;
          varying float vAlpha;
          void main() {
            vUv = uv;
            vec3 p = position;
            float warp = sin((p.x * 0.18) + time * 1.25 + phase) * 1.2;
            warp += cos((p.x * 0.35) - time * 0.72 + phase * 1.3) * 0.8;
            p.y += warp * (0.32 + uv.y * 0.68);
            p.z += sin((p.x * 0.22) + time * 0.9 + phase) * 0.65;
            vAlpha = smoothstep(0.02, 0.45, uv.y) * (1.0 - smoothstep(0.72, 1.0, uv.y));
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 colorA;
          uniform vec3 colorB;
          varying vec2 vUv;
          varying float vAlpha;
          void main() {
            vec3 col = mix(colorA, colorB, vUv.x);
            float stripe = sin(vUv.x * 22.0) * 0.08 + 0.92;
            gl_FragColor = vec4(col * stripe, vAlpha * 0.44);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
      });
      const ribbon = makeMesh(baseGeo, mat, false);
      ribbon.position.set(0, 15.4 + idx * 1.25, -52 - idx * 2.4);
      ribbon.rotation.x = -0.23;
      ribbon.userData.isAuroraRibbon = true;
      ribbon.userData.auroraMaterial = mat;
      group.add(ribbon);
    });

    group.userData.isAurora = true;
    return group;
  }

  function updateAurora(dt) {
    if (!threeState.ready || !threeState.regionRoot) return;
    threeState.regionRoot.traverse(child => {
      if (child.userData?.auroraMaterial?.uniforms) {
        child.userData.auroraMaterial.uniforms.time.value += dt * 0.85;
      }
    });
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
    if (threeState.composer) {
      threeState.composer.setSize(w, h);
    }
    if (threeState.outlinePass) {
      threeState.outlinePass.resolution.set(w, h);
    }
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
    if (!audioState.bgMusicEl) {
      const bgMusicEl = new Audio();
      bgMusicEl.loop = true;
      bgMusicEl.preload = 'auto';
      bgMusicEl.volume = 0;
      audioState.bgMusicEl = bgMusicEl;

      let bgMusicSrcIndex = 0;
      const setBgMusicSource = (index) => {
        const nextIndex = Math.max(0, Math.min(BG_MUSIC_CANDIDATE_SRCS.length - 1, index));
        bgMusicSrcIndex = nextIndex;
        audioState.bgMusicSrc = BG_MUSIC_CANDIDATE_SRCS[nextIndex];
        bgMusicEl.src = audioState.bgMusicSrc;
      };

      bgMusicEl.addEventListener('error', () => {
        if (bgMusicSrcIndex < BG_MUSIC_CANDIDATE_SRCS.length - 1) {
          setBgMusicSource(bgMusicSrcIndex + 1);
        }
      });

      setBgMusicSource(0);
    }
    if (audioState.started) {
      return;
    }
    audioState.started = true;
    syncAudioToRegion();
  }

  function ensureAudioStarted() {
    startAmbientAudio();
    if (audioState.ctx && audioState.ctx.state === 'suspended') {
      audioState.ctx.resume().catch(() => {});
    }
    syncAudioToRegion();
  }

  function syncAudioToRegion() {
    if (!audioState.started) {
      return;
    }
    const shouldPlayOutsideRunMusic = !state.running;
    const musicGainTarget = shouldPlayOutsideRunMusic && musicEnabled ? musicVolume * 0.62 : 0;
    if (audioState.ctx && audioState.music?.gain) {
      const now = audioState.ctx.currentTime;
      // Keep the WebAudio music bus silent; bg-music.mp3 is played via HTMLAudioElement.
      audioState.music.gain.cancelScheduledValues(now);
      audioState.music.gain.linearRampToValueAtTime(0, now + 0.18);
    }
    if (audioState.bgMusicEl) {
      audioState.bgMusicEl.volume = musicGainTarget;
      if (musicGainTarget > 0) {
        audioState.bgMusicEl.play().catch(() => {});
      } else {
        audioState.bgMusicEl.pause();
      }
    }
    if (audioState.ctx && audioState.sfx?.gain) {
      const now = audioState.ctx.currentTime;
      audioState.sfx.gain.cancelScheduledValues(now);
      audioState.sfx.gain.linearRampToValueAtTime(sfxVolume, now + 0.1);
    }
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
      text: 'Hearts on the left are your lives. Each level starts with 3 hearts. If they drop to 0, one revive challenge can restore all 3 once per run by solving 1 puzzle.',
      visuals: []
    },
    {
      title: 'Choose Your Character',
      text: 'Each level gives exactly 2 dashers: one fast (full-width, higher energy use) and one slow (restricted lanes, lower energy use). Treasure chests are capped to 1 per level each run. Collect that chest in a level, then clear into the next level to wake that next level\'s special dasher.',
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
  const defaultLevelTransitionMsgs = [
    null, // placeholder — level 0 is the start, no incoming transition
    {
      congrats: 'Wowww!! Outback: CLEARED! 🌵🔥',
      teaser: 'Heading into the Bushland — eucalyptus as far as the beak can see, wombat tunnels underfoot, and a 100% chance something rustles right behind you.'
    },
    {
      congrats: 'AYY!! Bushland: SMASHED! 🌿✨',
      teaser: 'Next: Servo — a classic Aussie petrol stop with bright bowsers, hot snacks, and convenience-store buzz under stormy skies.'
    },
    {
      congrats: 'Unreal!! Servo: CONQUERED! ⚡🎉',
      teaser: 'Coastline Lighthouse awaits — salty air, crashing waves, and a lighthouse that blinks in binary. Coincidence? Doubt it.'
    },
    {
      congrats: 'LEGENDARY!! Coastline: OBLITERATED! 🌊🏆',
      teaser: 'Tasmania — misty peaks, ancient trails, and the terrain where the Halting Problem lives. Will this run ever truly end? (Spoiler: yes. Probably.)'
    },
    {
      congrats: 'WILD!! Mangroves: MAPPED! 🌿🧭',
      teaser: 'Blue Mountains next: fog belts, cliff drafts, and razor-thin ridge lanes.'
    },
    {
      congrats: 'CLEAN!! Blue Mountains: CLEARED! ⛰️✨',
      teaser: 'Nullarbor incoming: wide horizons, heat shimmer, and relentless crosswinds.'
    },
    {
      congrats: 'BRUTAL!! Nullarbor: SURVIVED! 🏜️⚡',
      teaser: 'Observatory comes alive at nightfall. Track stars, avoid orbital hazards, stay centered.'
    },
    {
      congrats: 'COSMIC!! Observatory: DECIPHERED! 🔭🌌',
      teaser: 'Final stretch: Tasmania. Aurora turbulence and the last dawn protocol.'
    }
  ];

  const levelTransitionMsgs = Array.isArray(gameData.levelTransitionMsgs)
    && gameData.levelTransitionMsgs.length >= defaultLevelTransitionMsgs.length
    ? gameData.levelTransitionMsgs
    : defaultLevelTransitionMsgs;

  const defaultRegions = [
    {
      name: 'Outback Ruins',
      top: '#d4a373',
      bottom: '#8b5e3c',
      accent: '#ffd166',
      terrain: 'dunes',
      acts: [
        { title: 'Act I', tagline: 'Heat & Distance' },
        { title: 'Act II', tagline: 'Mirage Logic' },
        { title: 'Act III', tagline: 'Solstice Burnline' }
      ]
    },
    {
      name: 'Bushland',
      top: '#8fae66',
      bottom: '#4a6a3f',
      accent: '#52b788',
      terrain: 'forest',
      acts: [
        { title: 'Act I', tagline: 'Dense Navigation' },
        { title: 'Act II', tagline: 'Lost Paths' },
        { title: 'Act III', tagline: 'Echo Forest' }
      ]
    },
    {
      name: 'Servo',
      top: '#23364f',
      bottom: '#0d1728',
      accent: '#5be7ff',
      terrain: 'industrial',
      acts: [
        { title: 'Act I', tagline: 'Rest Stop Flow' },
        { title: 'Act II', tagline: 'Forecourt Rush' },
        { title: 'Act III', tagline: 'Night Shift Run' }
      ]
    },
    {
      name: 'Coastline Lighthouse',
      top: '#9fd0e3',
      bottom: '#3f80a8',
      accent: '#4ea8de',
      terrain: 'beach',
      acts: [
        { title: 'Act I', tagline: 'Stable Tide' },
        { title: 'Act II', tagline: 'Shifting Currents' },
        { title: 'Act III', tagline: 'Storm Signal' }
      ]
    },
    {
      name: 'Mangroves',
      top: '#3a5845',
      bottom: '#162f27',
      accent: '#7ccf9a',
      terrain: 'forest',
      acts: [
        { title: 'Act I', tagline: 'Root Paths' },
        { title: 'Act II', tagline: 'Hidden Water Logic' },
        { title: 'Act III', tagline: 'Submerged Network' }
      ]
    },
    {
      name: 'Blue Mountains',
      top: '#5f7898',
      bottom: '#293b57',
      accent: '#b8d8ff',
      terrain: 'mountains',
      acts: [
        { title: 'Act I', tagline: 'Ascent' },
        { title: 'Act II', tagline: 'Fog & Echo' },
        { title: 'Act III', tagline: 'Reconstruction' }
      ]
    },
    {
      name: 'Nullarbor',
      top: '#b88c55',
      bottom: '#6b4a2c',
      accent: '#f2d085',
      terrain: 'dunes',
      acts: [
        { title: 'Act I', tagline: 'Endless Road' },
        { title: 'Act II', tagline: 'Compression' },
        { title: 'Act III', tagline: 'Optimization State' }
      ]
    },
    {
      name: 'Observatory',
      top: '#1c244a',
      bottom: '#0a0f24',
      accent: '#9fb9ff',
      terrain: 'industrial',
      acts: [
        { title: 'Act I', tagline: 'Star Navigation' },
        { title: 'Act II', tagline: 'Pattern Mapping' },
        { title: 'Act III', tagline: 'Code Sky' }
      ]
    },
    {
      name: 'Tasmania',
      top: '#93a7cf',
      bottom: '#41507f',
      accent: '#82ffe0',
      terrain: 'mountains',
      acts: [
        { title: 'Act I', tagline: 'Cold Descent' },
        { title: 'Act II', tagline: 'Signal Tower Ruins' },
        { title: 'Act III', tagline: 'Turing Engine Awakening' }
      ]
    }
  ];

  const regions = Array.isArray(gameData.regions)
    && gameData.regions.length >= defaultRegions.length
    ? gameData.regions
    : defaultRegions;

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

  const defaultActTuningByIndex = [
    { difficultyScale: 0.86, spawnRate: 0.9, driftScale: 0.82, laneGuideAlphaScale: 1.2, sceneDarkenOffset: -0.03, scanlineAlphaScale: 0.82, hazardRate: 0.88, heavyHazardBias: 0.14 },
    { difficultyScale: 1, spawnRate: 1, driftScale: 1.06, laneGuideAlphaScale: 1, sceneDarkenOffset: 0, scanlineAlphaScale: 1, hazardRate: 1, heavyHazardBias: 0.24 },
    { difficultyScale: 1.16, spawnRate: 1.15, driftScale: 1.24, laneGuideAlphaScale: 0.82, sceneDarkenOffset: 0.05, scanlineAlphaScale: 1.18, hazardRate: 1.2, heavyHazardBias: 0.34 }
  ];

  const biomeActTuningByName = {
    'outback ruins': [
      { difficultyScale: 0.84, spawnRate: 0.88, driftScale: 0.9, hazardRate: 0.86 },
      { difficultyScale: 1.02, spawnRate: 1.02, driftScale: 1.18, hazardRate: 1.05 },
      { difficultyScale: 1.18, spawnRate: 1.18, driftScale: 1.32, hazardRate: 1.28 }
    ],
    bushland: [
      { difficultyScale: 0.87, spawnRate: 0.9, driftScale: 0.86, hazardRate: 0.94 },
      { difficultyScale: 1.01, spawnRate: 1.02, driftScale: 1.05, hazardRate: 1.08 },
      { difficultyScale: 1.14, spawnRate: 1.14, driftScale: 1.2, hazardRate: 1.22 }
    ],
    servo: [
      { difficultyScale: 0.9, spawnRate: 0.96, driftScale: 0.9, hazardRate: 0.98, heavyHazardBias: 0.22 },
      { difficultyScale: 1.06, spawnRate: 1.08, driftScale: 1.08, hazardRate: 1.16, heavyHazardBias: 0.34 },
      { difficultyScale: 1.22, spawnRate: 1.2, driftScale: 1.18, hazardRate: 1.34, heavyHazardBias: 0.44 }
    ],
    'coastline lighthouse': [
      { difficultyScale: 0.86, spawnRate: 0.9, driftScale: 0.84, hazardRate: 0.92 },
      { difficultyScale: 1.03, spawnRate: 1.04, driftScale: 1, hazardRate: 1.08 },
      { difficultyScale: 1.18, spawnRate: 1.16, driftScale: 1.16, hazardRate: 1.24 }
    ],
    mangroves: [
      { difficultyScale: 0.9, spawnRate: 0.92, driftScale: 0.88, hazardRate: 1.02 },
      { difficultyScale: 1.05, spawnRate: 1.06, driftScale: 1.06, hazardRate: 1.2 },
      { difficultyScale: 1.2, spawnRate: 1.2, driftScale: 1.2, hazardRate: 1.36, heavyHazardBias: 0.48 }
    ],
    'blue mountains': [
      { difficultyScale: 0.88, spawnRate: 0.9, driftScale: 0.8, hazardRate: 0.94 },
      { difficultyScale: 1.02, spawnRate: 1.02, driftScale: 0.96, hazardRate: 1.1 },
      { difficultyScale: 1.16, spawnRate: 1.14, driftScale: 1.08, hazardRate: 1.26 }
    ],
    nullarbor: [
      { difficultyScale: 0.9, spawnRate: 0.9, driftScale: 0.92, hazardRate: 0.96 },
      { difficultyScale: 1.06, spawnRate: 1.04, driftScale: 1.18, hazardRate: 1.12 },
      { difficultyScale: 1.23, spawnRate: 1.18, driftScale: 1.32, hazardRate: 1.32, heavyHazardBias: 0.46 }
    ],
    observatory: [
      { difficultyScale: 0.92, spawnRate: 0.94, driftScale: 0.82, hazardRate: 1.02 },
      { difficultyScale: 1.08, spawnRate: 1.08, driftScale: 1, hazardRate: 1.16 },
      { difficultyScale: 1.24, spawnRate: 1.22, driftScale: 1.18, hazardRate: 1.34, heavyHazardBias: 0.5 }
    ],
    tasmania: [
      { difficultyScale: 0.92, spawnRate: 0.92, driftScale: 0.84, hazardRate: 1.04 },
      { difficultyScale: 1.09, spawnRate: 1.08, driftScale: 1.02, hazardRate: 1.2 },
      { difficultyScale: 1.24, spawnRate: 1.2, driftScale: 1.14, hazardRate: 1.38, heavyHazardBias: 0.52 }
    ]
  };

  function normalizeBiomeName(name) {
    return String(name || '').trim().toLowerCase();
  }

  function getCurrentActIndex() {
    if (state.fragments >= 6) {
      return 2;
    }
    if (state.fragments >= 3) {
      return 1;
    }
    return 0;
  }

  function getRegionActDefinition(region, actIndex) {
    const acts = Array.isArray(region?.acts) ? region.acts : [];
    if (acts.length) {
      const clampedIndex = Math.max(0, Math.min(acts.length - 1, actIndex));
      return acts[clampedIndex] || acts[acts.length - 1];
    }
    const fallback = [
      { title: 'Act I', tagline: 'Introduction' },
      { title: 'Act II', tagline: 'Distortion' },
      { title: 'Act III', tagline: 'Revelation' }
    ];
    return fallback[Math.max(0, Math.min(fallback.length - 1, actIndex))];
  }

  function getCurrentActProfile() {
    const region = regions[state.regionIndex] || regions[0] || {};
    const index = getCurrentActIndex();
    const baseTuning = defaultActTuningByIndex[index] || defaultActTuningByIndex.at(-1);
    const biomeName = normalizeBiomeName(region.name);
    const biomeTuning = biomeActTuningByName[biomeName]?.[index] || {};
    const tuning = {
      ...baseTuning,
      ...biomeTuning
    };
    const def = getRegionActDefinition(region, index);
    return {
      index,
      title: def?.title || 'Act',
      tagline: def?.tagline || '',
      ...tuning
    };
  }

  function getCurrentActDisplayLabel() {
    const act = getCurrentActProfile();
    return `${act.title}: ${act.tagline}`;
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
    const act = getCurrentActProfile();
    const t = performance.now() * 0.001;
    const depth = clamp01(depth01);
    const depthInfluence = 0.22 + Math.pow(depth, 1.28) * 0.88;
    const phase = (t * profile.bendFreq + state.distance * 0.014) * levelFactors.freqScale;
    const main = Math.sin(phase + depth * 2.8) * profile.bendAmp * levelFactors.bendScale;
    const wiggle = Math.sin(phase * profile.wiggleFreq - depth * 5.3) * profile.wiggleAmp * levelFactors.wiggleScale;
    return (main + wiggle) * depthInfluence * act.driftScale;
  }

  function getTrackXNorm(baseNorm, depth01 = 1) {
    return Math.max(0.04, Math.min(0.96, baseNorm + getTrackCenterDriftNorm(depth01)));
  }

  function laneToXNorm(laneIndex) {
    const safeIndex = Math.max(0, Math.min(lanes.length - 1, laneIndex));
    return 0.5 + lanes[safeIndex] * laneSpread;
  }

  const state = {
    flowMode: 'idle',
    flowLastEvent: 'INIT',
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
    flowLevelState: 'level_1',
    maxUnlockedLevel: 0,
    hintsUsed: 0,
    paused: false,
    hungerPaused: false,
    hungerModalDismissedUntil: 0,
    hungerStuckSince: 0,
    popupPaused: false,
    pauseBeforePopup: false,
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
    pendingLevelUnlockTarget: null,
    lastTime: 0,
    swipeStart: null,
    apiOnline: false,
    pendingReviveOffer: null,
    heartReviveUsedByLevel: {},
    heartReviveOfferedByLevel: {},
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

  const flowStateModule = globalThis.DawnDashersFlowMachine;
  const flowRuntime = flowStateModule && typeof flowStateModule.create === 'function'
    ? flowStateModule.create(state)
    : null;
  const sendFlow = flowRuntime && typeof flowRuntime.sendFlow === 'function'
    ? flowRuntime.sendFlow
    : () => false;

  function syncFlowLevelState(level = state.progressLevel) {
    sendFlow('LEVEL_SET', { level });
  }

  syncFlowLevelState(state.progressLevel);
  const gameUiModule = globalThis.DawnDashersGameUi || {};

  function getGameUiContext() {
    return {
      state,
      HUNGER_MODAL_RESURFACE_DELAY_MS,
      localStorage,
      selectedCharacter,
      characters,
      scoreEl,
      startBtn,
      energyEl,
      foodEl,
      fragmentEl,
      objectiveEl,
      messageEl,
      reviveBtn,
      livesEl,
      foodShopModal,
      hungerModal,
      hungerText,
      foodShopList,
      foodCheckoutBtn,
      foodCartSummary,
      clueModal,
      puzzleModal,
      clueTerrain,
      clueText,
      puzzleTerrain,
      puzzleStatus,
      settingsModal,
      pastGamesModal,
      helpModal,
      closeClueBtn,
      closePuzzleBtn,
      clueHintBtn,
      clueSolveBtn,
      landingSettingsBtn,
      closeSettingsBtn,
      difficultySelect,
      difficultyMultipliers,
      DIFFICULTY_KEY,
      superModeRow,
      superModeSelect,
      superModeAllowed,
      SUPER_MODE_KEY,
      terrain3dSelect,
      TERRAIN_3D_KEY,
      musicToggleSelect,
      MUSIC_ENABLED_KEY,
      musicVolumeRange,
      MUSIC_VOLUME_KEY,
      sfxVolumeRange,
      SFX_VOLUME_KEY,
      pastGamesBtn,
      closePastGamesBtn,
      closeFoodShopBtn,
      closeHungerBtn,
      hungerOpenShopBtn,
      clearFoodCartBtn,
      landingHelpBtn,
      closeHelpBtn,
      walkthroughModal,
      walkthroughTitle,
      walkthroughText,
      walkthroughVisual,
      walkthroughStep,
      walkthroughNextBtn,
      walkthroughBeginBtn,
      walkthroughSkipBtn,
      walkthroughSteps,
      playNowBtn,
      characterBackBtn,
      characterStartBtn,
      lcContinueBtn,
      levelCompleteOverlay,
      lcEmoji,
      lcCongrats,
      lcTeaser,
      lcBonus,
      landingOverlay,
      hudEl,
      missionEl,
      dockEl,
      mobileMenuBtn,
      mobileMenuIcon,
      renderFoodShop,
      canAffordAnyFood,
      puzzleState,
      updateCharacterAvailability,
      refreshCharacterBio,
      syncMobileControlVisibility,
      bindClick,
      bindSelectChange,
      bindRangeInput,
      requestHint,
      pushMessage,
      resumeFromPuzzleModal,
      syncAdminProgressToSelectedCharacter,
      updateThreeVisibility,
      ensureAudioStarted,
      syncAudioToRegion,
      renderPastGames,
      checkoutFoodCart,
      hydrateWalkthroughStep,
      closeWalkthroughAndStart,
      setCharacterSelectionOpen,
      setLanding,
      setGameplayChrome,
      isCharacterAvailableForCurrentLevel,
      syncCharacterStartButtonState,
      setSelectedCharacter,
      onStartButtonPressed,
      launchRunFromStartButton,
      markWalkthroughSeen,
      gameDifficulty,
      setGameDifficulty: (value) => {
        gameDifficulty = value;
      },
      gameDifficultyRef: () => gameDifficulty,
      superModeEnabledRef: () => superModeEnabled,
      setSuperModeEnabled: (value) => {
        superModeEnabled = value;
      },
      terrain3dEnabledRef: () => terrain3dEnabled,
      setTerrain3dEnabled: (value) => {
        terrain3dEnabled = value;
      },
      musicEnabledRef: () => musicEnabled,
      setMusicEnabled: (value) => {
        musicEnabled = value;
      },
      musicVolumeRef: () => musicVolume,
      setMusicVolume: (value) => {
        musicVolume = value;
      },
      sfxVolumeRef: () => sfxVolume,
      setSfxVolume: (value) => {
        sfxVolume = value;
      },
      walkthroughIndexRef: () => walkthroughIndex,
      setWalkthroughIndex: (value) => {
        walkthroughIndex = value;
      },
      previewCharacterRef: () => previewCharacter,
      levelCompleteTimerRef: () => levelCompleteTimer,
      setLevelCompleteTimer: (value) => {
        levelCompleteTimer = value;
      }
    };
  }

  const defaultCharacters = globalThis.DawnDashersCharacterDefaults || {};

  const configuredCharacters = gameData.characters && typeof gameData.characters === 'object'
    ? gameData.characters
    : {};
  const characters = Object.keys(configuredCharacters).length >= Object.keys(defaultCharacters).length
    ? configuredCharacters
    : { ...configuredCharacters, ...defaultCharacters };

  const defaultLevelCharacterPairs = globalThis.DawnDashersLevelCharacterPairsDefaults || {};
  const configuredLevelCharacterPairs = gameData.levelCharacterPairs && typeof gameData.levelCharacterPairs === 'object'
    ? gameData.levelCharacterPairs
    : null;
  const levelCharacterPairs = configuredLevelCharacterPairs
    && Object.keys(configuredLevelCharacterPairs).length >= Object.keys(defaultLevelCharacterPairs).length
    ? configuredLevelCharacterPairs
    : defaultLevelCharacterPairs;

  const defaultCharacterFood = globalThis.DawnDashersCharacterFoodDefaults || {};
  const configuredCharacterFood = gameData.characterFood && typeof gameData.characterFood === 'object'
    ? gameData.characterFood
    : null;
  const characterFood = configuredCharacterFood
    && Object.keys(configuredCharacterFood).length >= Object.keys(defaultCharacterFood).length
    ? configuredCharacterFood
    : defaultCharacterFood;
  state.foodStocks = Object.keys(characterFood).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});
  const defaultCharacterRegionMap = globalThis.DawnDashersCharacterRegionMapDefaults || {};
  const configuredCharacterRegionMap = gameData.characterRegionMap && typeof gameData.characterRegionMap === 'object'
    ? gameData.characterRegionMap
    : null;
  const characterRegionMap = configuredCharacterRegionMap
    && Object.keys(configuredCharacterRegionMap).length >= Object.keys(defaultCharacterRegionMap).length
    ? configuredCharacterRegionMap
    : defaultCharacterRegionMap;

  function ensureCharacterDefinitionsForButtons() {
    characterButtons.forEach((button) => {
      const id = button.dataset.character;
      if (!id || characters[id]) {
        return;
      }
      const unlockAt = Number.isFinite(Number(button.dataset.unlock)) ? Number(button.dataset.unlock) : 0;
      const rawName = String(button.textContent || '').replace(/\s+/g, ' ').trim();
      characters[id] = {
        name: rawName || id,
        emoji: button.dataset.emoji || '🧭',
        power: 'Adaptive Dash',
        quirk: 'Stable movement profile while this entry is being mapped.',
        unlockAt,
        role: 'fast',
        wikiUrl: 'https://en.wikipedia.org/wiki/Australian_fauna'
      };
      if (!characterFood[id]) {
        characterFood[id] = characterFood.emu;
      }
      if (!Number.isInteger(characterRegionMap[id])) {
        characterRegionMap[id] = Math.max(0, Math.min(regions.length - 1, unlockAt));
      }
    });
  }
  ensureCharacterDefinitionsForButtons();

  let selectedCharacter = 'emu';
  let previewCharacter = null;
  const puzzleState = {
    hintIndex: 0,
    currentIndex: 0,
    activePuzzle: null,
    hintsUsedThisPuzzle: 0,
    hintRewardGrantedThisPuzzle: false,
    pendingAdvance: null,
    pendingTreasure: null,
    pendingHeartRevive: null,
    seenTreasureRefs: [],
    lastTreasureRefKey: null,
    solvedByLevel: {},
    usedCorePuzzleIds: [],
    usedPuzzleSignatures: [],
    puzzleQueues: null,
    sessionShownIds: new Set()
  };

  const puzzleHistory = (() => {
    try {
      const raw = globalThis.localStorage.getItem(PUZZLE_HISTORY_KEY);
      if (!raw) {
        return {};
      }
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  })();

  const puzzleUtils = globalThis.DawnDashersPuzzleUtils || {};
  const shownPuzzleSignatures = typeof puzzleUtils.loadShownSignatures === 'function'
    ? puzzleUtils.loadShownSignatures()
    : [];

  const puzzleData = globalThis.DawnDashersPuzzleData || {};
  const levelPuzzlePools = puzzleData.levelPuzzlePools || {
    0: [0, 2],
    1: [3, 4],
    2: [8, 5],
    3: [1, 7],
    4: [6, 9]
  };
  // Role-specific flat puzzle arrays from puzzle-data.js
  const heartPuzzles    = Array.isArray(puzzleData.heartPuzzles)    ? puzzleData.heartPuzzles    : [];
  const levelPuzzles    = Array.isArray(puzzleData.levelPuzzles)    ? puzzleData.levelPuzzles    : [];
  const treasurePuzzles = Array.isArray(puzzleData.treasurePuzzles) ? puzzleData.treasurePuzzles : [];

  // Legacy alias so other code that still reads turingPuzzles keeps working
  const turingPuzzles = Array.isArray(puzzleData.turingPuzzles) ? puzzleData.turingPuzzles : [...heartPuzzles, ...levelPuzzles];

  const heartPoolsByLevel    = puzzleData.heartPoolsByLevel    || {};
  const levelPoolsByLevel    = puzzleData.levelPoolsByLevel    || {};
  const treasurePoolsByLevel = puzzleData.treasurePoolsByLevel || {};

  // pickUnseen — prefers puzzle-data.js impl, falls back to puzzleUtils module
  function pickUnseenPuzzleFallback(flatArray, poolIds) {
    if (typeof puzzleUtils.pickUnseenPuzzle === 'function') {
      return puzzleUtils.pickUnseenPuzzle(flatArray, poolIds, puzzleState.usedPuzzleSignatures, shownPuzzleSignatures);
    }
    for (const id of poolIds) {
      const p = flatArray[id];
      if (p && !p.seen) { p.seen = true; return p; }
    }
    return null;
  }
  const pickUnseenPuzzle = typeof puzzleData.pickUnseen === 'function'
    ? puzzleData.pickUnseen
    : pickUnseenPuzzleFallback;

  // resetSeen from puzzle-data.js
  const resetSeenPuzzles = typeof puzzleData.resetSeen === 'function'
    ? puzzleData.resetSeen
    : function(flatArray, poolIds) {
        for (const id of poolIds) { if (flatArray[id]) flatArray[id].seen = false; }
      };

  const TREASURE_CHEST_LIMIT_PER_LEVEL = 1;

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
    ctx.globalAlpha = terrain === 'industrial' ? 0.16 : 0.24;
    ctx.drawImage(tex, -shiftA, horizonY, w + tex.width, groundH);
    ctx.globalAlpha = terrain === 'industrial' ? 0.05 : 0.08;
    ctx.drawImage(tex, -shiftB, horizonY - 5, w + tex.width, groundH + 8);
    ctx.restore();
  }

  function initializeStartingFood() {
    // Give starting food based on level: early levels get more, higher levels get less
    // Level 0-1: 10 food, Level 2: 8 food, Level 3+: 6 food
    let startingFood = 10;
    if (state.progressLevel >= 3) {
      startingFood = 6;
    } else if (state.progressLevel >= 2) {
      startingFood = 8;
    }
    state.foodStocks[selectedCharacter] = startingFood;
  }

  function resetGame(options = {}) {
    const keepProgress = Boolean(options.keepProgress);
    sendFlow('START_RUN');
    if (!keepProgress) {
      state.score = 0;
      state.heartReviveUsedByLevel = {};
      state.heartReviveOfferedByLevel = {};
      state.chestCollectsByLevelRun = {};
      state.pendingLevelUnlockTarget = null;
      puzzleState.seenTreasureRefs = [];
      puzzleState.lastTreasureRefKey = null;
      puzzleState.solvedByLevel = {};
      puzzleState.usedCorePuzzleIds = [];
      puzzleState.usedPuzzleSignatures = [];
      initPuzzleQueues();
    }
    state.pendingReviveOffer = null;
    state.health = state.maxLives;
    state.fragments = 0;
    if (!keepProgress) {
      syncAdminProgressToSelectedCharacter();
    } else if (Number.isInteger(state.pendingLevelUnlockTarget)) {
      state.progressLevel = Math.max(0, Math.min(regions.length - 1, state.pendingLevelUnlockTarget));
      state.pendingLevelUnlockTarget = null;
    }
    state.maxUnlockedLevel = Math.max(state.maxUnlockedLevel || 0, state.progressLevel || 0);
    const tier = Math.max(0, characters[selectedCharacter]?.unlockAt || 0);
    const role = characters[selectedCharacter]?.role || 'fast';
    state.maxEnergy = 1000 + tier * 120 + (role === 'slow' ? 80 : 30);
    state.energy = state.maxEnergy;
    initializeStartingFood();
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
    state.regionIndex = Math.max(0, Math.min(regions.length - 1, state.progressLevel));
    syncFlowLevelState(state.progressLevel);
    state.spawnTimer = 0;
    state.spawnPattern = null;
    state.spawnPatternStep = 0;
    state.lastSpawnLane = laneCenterIndex;
    state.fragmentTimer = 7;
    state.continueFromLevelUnlock = false;
    puzzleState.pendingAdvance = null;
    puzzleState.pendingTreasure = null;
    puzzleState.pendingHeartRevive = null;
    puzzleState.activePuzzle = null;
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
    if (typeof gameUiModule.syncPlaybackButton === 'function') {
      gameUiModule.syncPlaybackButton(getGameUiContext());
    }
  }

  function hydrateWalkthroughStep() {
    if (typeof gameUiModule.hydrateWalkthroughStep === 'function') {
      gameUiModule.hydrateWalkthroughStep(getGameUiContext());
    }
  }

  function openWalkthrough() {
    if (typeof gameUiModule.openWalkthrough === 'function') {
      gameUiModule.openWalkthrough(getGameUiContext());
    }
  }

  function closeWalkthroughAndStart() {
    if (typeof gameUiModule.closeWalkthroughAndStart === 'function') {
      gameUiModule.closeWalkthroughAndStart(getGameUiContext());
    }
  }

  function onStartButtonPressed(keepProgress = false) {
    ensureAudioStarted();
    syncAudioToRegion();
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
    if (typeof gameUiModule.setLanding === 'function') {
      gameUiModule.setLanding(getGameUiContext(), open);
    }
    if (open) sendFlow('SHOW_LANDING');
  }

  function setGameplayChrome(visible) {
    if (typeof gameUiModule.setGameplayChrome === 'function') {
      gameUiModule.setGameplayChrome(getGameUiContext(), visible);
    }
  }

  function syncMobileControlVisibility() {
    if (typeof gameUiModule.syncMobileControlVisibility === 'function') {
      gameUiModule.syncMobileControlVisibility(getGameUiContext());
    }
  }

  function updateMobileMenuButton(visible, runningActive) {
    if (typeof gameUiModule.updateMobileMenuButton === 'function') {
      gameUiModule.updateMobileMenuButton(getGameUiContext(), visible, runningActive);
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
      const pair = getPairForLevel(getHighestUnlockedLevel());
      selectedCharacter = pair.fast;
      const fallbackLevel = Math.max(0, Math.min(getHighestUnlockedLevel(), characters[selectedCharacter]?.unlockAt || 0));
      state.progressLevel = fallbackLevel;
      state.regionIndex = fallbackLevel;
      syncFlowLevelState(state.progressLevel);
    }
    characterPanel.classList.toggle('open', open);
    characterPanel.setAttribute('aria-hidden', String(!open));
    if (open) {
      previewCharacter = null;
      updateCharacterAvailability();
      refreshCharacterBio();
      syncCharacterStartButtonState();
      sendFlow('SHOW_CHARACTER_SELECT');
    }
    syncAudioToRegion();
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
        const requirement = getSpecialUnlockRequirement(puzzleUnlockLevel);
        if (requirement) {
          pushMessage(`Unlock ${characters[id].name} by collecting ${TREASURE_CHEST_LIMIT_PER_LEVEL} chest in Level ${requirement.sourceLevel + 1} and clearing to Level ${requirement.targetLevel + 1}.`);
        }
        return;
      }
      const lvl = getHighestUnlockedLevel();
      const pair = levelCharacterPairs[lvl] || levelCharacterPairs[0];
      pushMessage(`Level ${lvl + 1} uses ${characters[pair.fast].name} (fast) or ${characters[pair.slow].name} (slow).`);
      return;
    }
    selectedCharacter = id;
    previewCharacter = null;
    if (!superModeEnabled) {
      const unlockedTop = getHighestUnlockedLevel();
      const characterLevel = getCharacterLevelIndex(id);
      const targetLevel = Math.max(0, Math.min(unlockedTop, characterLevel));
      state.progressLevel = targetLevel;
      state.regionIndex = targetLevel;
      syncFlowLevelState(state.progressLevel);
    }
    syncAdminProgressToSelectedCharacter();
    state.regionIndex = Math.max(0, Math.min(regions.length - 1, state.progressLevel));
    applyRegionThreeTheme(regions[state.regionIndex]);
    void syncSelectedDasherModel();
    syncAudioToRegion();
    characterButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.character === id));
    applyCharacterSelectionTheme();
    refreshCharacterBio();
    syncCharacterStartButtonState();
  }

  function syncAdminProgressToSelectedCharacter() {
    if (!superModeEnabled || !characters[selectedCharacter]) {
      return;
    }
    const targetLevel = Math.max(0, Math.min(regions.length - 1, characters[selectedCharacter].unlockAt || 0));
    state.progressLevel = targetLevel;
    state.regionIndex = targetLevel;
    puzzleState.pendingAdvance = null;
  }

  function applyCharacterSelectionTheme() {
    if (!characterTitleEl) {
      return;
    }
    const region = regions[state.regionIndex] || regions[0];
    if (characterPanel) {
      characterPanel.style.setProperty('--terrain-top', region.top);
      characterPanel.style.setProperty('--terrain-bottom', region.bottom);
      characterPanel.style.setProperty('--terrain-accent', region.accent);
    }
    characterTitleEl.style.setProperty('--terrain-top', region.top);
    characterTitleEl.style.setProperty('--terrain-bottom', region.bottom);
    characterTitleEl.style.setProperty('--terrain-accent', region.accent);
    characterTitleEl.textContent = `CHOOSE YOUR DASHER - ${String(region.name || '').toUpperCase()}`;

    // Tint each character tile by its own biome so trios are easy to identify at a glance.
    characterButtons.forEach((button) => {
      const id = button.dataset.character;
      if (!id) {
        return;
      }
      let mappedRegionIndex = 0;
      if (Number.isInteger(characterRegionMap[id])) {
        mappedRegionIndex = characterRegionMap[id];
      } else if (Number.isInteger(characters[id]?.unlockAt)) {
        mappedRegionIndex = characters[id].unlockAt;
      }
      const tileRegion = regions[Math.max(0, Math.min(regions.length - 1, mappedRegionIndex))] || regions[0];
      button.style.setProperty('--tile-top', tileRegion.top);
      button.style.setProperty('--tile-bottom', tileRegion.bottom);
      button.style.setProperty('--tile-accent', tileRegion.accent);
    });
  }

  function isSpecialDasher(id) {
    return Number.isInteger(characters[id]?.puzzleUnlockLevel) && characters[id].puzzleUnlockLevel > 0;
  }

  function getCharacterDisplayLabel(id) {
    if (isSpecialDasher(id)) {
      return 'SPECIAL';
    }
    return (characters[id]?.role || 'fast').toUpperCase();
  }

  function decorateCharacterButtons() {
    characterButtons.forEach((button) => {
      const id = button.dataset.character;
      const role = characters[id]?.role;
      if (!role) {
        return;
      }
      button.setAttribute('aria-label', `${characters[id].name} (${getCharacterDisplayLabel(id)})`);
      const special = isSpecialDasher(id);
      button.classList.toggle('role-fast', !special && role === 'fast');
      button.classList.toggle('role-slow', !special && role === 'slow');
      button.classList.toggle('role-special', special);
      let pill = button.querySelector('.role-pill');
      if (!pill) {
        pill = document.createElement('span');
        pill.className = 'role-pill';
        button.appendChild(pill);
      }
      pill.textContent = getCharacterDisplayLabel(id);

      let unlockPill = button.querySelector('.unlock-pill');
      if (!unlockPill) {
        unlockPill = document.createElement('span');
        unlockPill.className = 'unlock-pill';
        button.appendChild(unlockPill);
      }
    });
  }

  function getPairForLevel(level) {
    const safe = Math.max(0, Math.min(regions.length - 1, level));
    return levelCharacterPairs[safe] || levelCharacterPairs[0];
  }

  function getHighestUnlockedLevel() {
    const unlocked = Number.isInteger(state.maxUnlockedLevel) ? state.maxUnlockedLevel : 0;
    const progress = Number.isInteger(state.progressLevel) ? state.progressLevel : 0;
    return Math.max(0, Math.min(regions.length - 1, Math.max(unlocked, progress)));
  }

  function getCharacterLevelIndex(id) {
    if (Number.isInteger(characterRegionMap[id])) {
      return Math.max(0, Math.min(regions.length - 1, characterRegionMap[id]));
    }
    if (Number.isInteger(characters[id]?.unlockAt)) {
      return Math.max(0, Math.min(regions.length - 1, characters[id].unlockAt));
    }
    return 0;
  }

  function getSpecialUnlockRequirement(puzzleUnlockLevel) {
    if (!Number.isInteger(puzzleUnlockLevel) || puzzleUnlockLevel <= 0) {
      return null;
    }
    return {
      sourceLevel: puzzleUnlockLevel - 1,
      targetLevel: puzzleUnlockLevel
    };
  }

  function getSpecialUnlockText(puzzleUnlockLevel) {
    const requirement = getSpecialUnlockRequirement(puzzleUnlockLevel);
    if (!requirement) {
      return 'Standard';
    }
    const chestWord = TREASURE_CHEST_LIMIT_PER_LEVEL === 1 ? 'chest' : 'chests';
    return `Collect ${TREASURE_CHEST_LIMIT_PER_LEVEL} ${chestWord} in Level ${requirement.sourceLevel + 1} and clear to Level ${requirement.targetLevel + 1}`;
  }

  function getCharacterUnlockHint(id) {
    if (isSpecialDasher(id)) {
      return getSpecialUnlockText(characters[id]?.puzzleUnlockLevel);
    }
    const unlockAt = Number.isInteger(characters[id]?.unlockAt) ? characters[id].unlockAt : 0;
    return `Reach Level ${unlockAt + 1}`;
  }

  function isCharacterAvailableForCurrentLevel(id) {
    const highestUnlockedLevel = getHighestUnlockedLevel();
    const unlockAt = Number.isInteger(characters[id]?.unlockAt) ? characters[id].unlockAt : 0;
    const puzzleUnlockLevel = characters[id]?.puzzleUnlockLevel;
    if (!Number.isInteger(puzzleUnlockLevel) || puzzleUnlockLevel <= 0) {
      return highestUnlockedLevel >= unlockAt;
    }
    return highestUnlockedLevel >= puzzleUnlockLevel && state.puzzleBankUnlocks[puzzleUnlockLevel];
  }

  function persistPuzzleBankUnlocks() {
    globalThis.localStorage.setItem(PUZZLE_BANK_UNLOCKS_KEY, JSON.stringify(state.puzzleBankUnlocks));
  }

  function unlockPuzzleBankCharactersForLevel(level, announce = true) {
    if (state.puzzleBankUnlocks[level]) {
      return '';
    }
    const unlockedIds = Object.keys(characters)
      .filter((id) => characters[id]?.puzzleUnlockLevel === level);
    if (!unlockedIds.length) {
      return '';
    }
    state.puzzleBankUnlocks[level] = true;
    persistPuzzleBankUnlocks();
    const names = unlockedIds.map((id) => characters[id].name).join(', ');
    if (announce) {
      pushMessage(`Turing solstice milestone reached! New dashers unlocked: ${names}`);
    }
    return names;
  }

  function registerTreasureChestCollect(level) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    state.chestCollectsByLevelRun[safeLevel] = (state.chestCollectsByLevelRun[safeLevel] || 0) + 1;
    const chestCount = state.chestCollectsByLevelRun[safeLevel];
    if (chestCount === TREASURE_CHEST_LIMIT_PER_LEVEL) {
      const targetLevel = safeLevel + 1;
      if (targetLevel <= regions.length - 1 && !state.puzzleBankUnlocks[targetLevel]) {
        pushMessage(`Solstice chest milestone ready. Clear to Level ${targetLevel + 1} to unlock that next level's special dasher.`);
      }
    }
  }

  function hasReachedTreasureChestLimitForLevel(level) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    return (state.chestCollectsByLevelRun[safeLevel] || 0) >= TREASURE_CHEST_LIMIT_PER_LEVEL;
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
    if (typeof gameUiModule.openFoodShop === 'function') {
      gameUiModule.openFoodShop(getGameUiContext());
      return;
    }
  }

  function showHungerModal() {
    if (typeof gameUiModule.showHungerModal === 'function') {
      gameUiModule.showHungerModal(getGameUiContext());
      return;
    }
  }

  function hideHungerModal(manualDismiss = false) {
    if (typeof gameUiModule.hideHungerModal === 'function') {
      gameUiModule.hideHungerModal(getGameUiContext(), manualDismiss);
      return;
    }
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
    state.hungerStuckSince = 0;
    syncHud();
    const foodCount = state.foodStocks[selectedCharacter] || 0;
    pushMessage(`Purchased. +${purchasedFoodQty} food added (stock ${foodCount}).`);
  }

  function getMovementLaneBounds() {
    return getMovementLaneBoundsForCharacter(selectedCharacter);
  }

  function getMovementLaneBoundsForCharacter(characterId) {
    const role = characters[characterId]?.role || 'fast';
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

  function canAffordAnyFood() {
    const items = getFoodShopItemsForCharacter();
    const minCost = Math.min(...items.map(item => item.cost || 0));
    return state.score >= minCost;
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
    const focusId = previewCharacter || selectedCharacter;
    if (!characterPower || !characters[focusId]) {
      return;
    }
    const current = characters[focusId];
    const food = characterFood[focusId] || characterFood.emu;
    const [minLane, maxLane] = getMovementLaneBoundsForCharacter(focusId);
    const laneMode = current.role === 'slow' ? `Restricted lanes ${minLane + 1}-${maxLane + 1}` : 'Full-width lanes';
    const energyScale = getEnergyScaleForLevel();
    const unlockHint = getCharacterUnlockHint(focusId);
    const displayLabel = getCharacterDisplayLabel(focusId);
    const isAvailableNow = superModeEnabled || isCharacterAvailableForCurrentLevel(focusId);
    const lockHint = isAvailableNow ? 'Ready to run in this level.' : `Locked for now. ${unlockHint}`;
    characterPower.innerHTML = `
      <div class="spec-card ${isSpecialDasher(focusId) ? 'role-special' : `role-${current.role}`}">
        <div class="spec-head">
          <span class="spec-name">${current.name}</span>
          <span class="spec-role">${displayLabel}</span>
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
          <div class="spec-item"><span>Status</span><strong>${lockHint}</strong></div>
        </div>
        <a id="characterWikiLink" class="small character-wiki-link" href="${current.wikiUrl || 'https://en.wikipedia.org/wiki/Australian_fauna'}" target="_blank" rel="noopener noreferrer">Learn more about ${current.name}</a>
      </div>`;
    characterPower.style.height = 'auto';
    characterPower.style.height = `${characterPower.scrollHeight}px`;
  }

  function syncCharacterStartButtonState() {
    if (!characterStartBtn) {
      return;
    }
    const focusId = previewCharacter || selectedCharacter;
    const canStartWithFocus = superModeEnabled || isCharacterAvailableForCurrentLevel(focusId);
    characterStartBtn.disabled = !canStartWithFocus;
    characterStartBtn.title = canStartWithFocus ? 'Start Run' : 'Pick an unlocked dasher to start';
  }

  function resumeSavedRun(run) {
    ensureAudioStarted();
    resetGame();
    state.score = run.score || 0;
    state.fragments = run.fragments || 0;
    state.health = Math.max(1, Math.min(state.maxLives, run.health || 3));
    state.regionIndex = Math.max(0, Math.min(regions.length - 1, run.regionIndex || 0));
    state.progressLevel = Math.max(state.progressLevel, Math.min(regions.length - 1, run.progressLevel ?? state.regionIndex));
    state.maxUnlockedLevel = Math.max(state.maxUnlockedLevel || 0, state.progressLevel || 0);
    syncFlowLevelState(state.progressLevel);
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
    if (typeof gameUiModule.syncHud === 'function') {
      gameUiModule.syncHud(getGameUiContext());
      return;
    }
  }

  function renderLives() {
    if (typeof gameUiModule.renderLives === 'function') {
      gameUiModule.renderLives(getGameUiContext());
      return;
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
      const unlockPill = button.querySelector('.unlock-pill');
      if (unlockPill) {
        unlockPill.textContent = isUnlocked ? 'UNLOCKED' : `LOCKED L${(characters[id]?.unlockAt || 0) + 1}`;
      }
      if (isUnlocked) {
        button.title = superModeEnabled
          ? `${characters[id].power} (Super Mode unlocked)`
          : `${characters[id].power}`;
      } else {
        button.title = getCharacterUnlockHint(id);
      }
    });
    syncCharacterStartButtonState();
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
    state.pendingReviveOffer = null;

    // Hard safety: level-unlock puzzle can only start after collecting all shards.
    if (victory && state.fragments < 7) {
      victory = false;
    }

    if (victory && state.progressLevel < regions.length - 1) {
      const nextLevel = state.progressLevel + 1;
      sendFlow('PUZZLE_OPEN');
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
        if (typeof gameUiModule.openPuzzleModal === 'function') {
          gameUiModule.openPuzzleModal(getGameUiContext(), {
            terrainLabel: `${regions[nextLevel].name} Unlock Puzzle`,
            onHydrate: hydratePuzzlePanel,
            statusText: 'Solve this puzzle to unlock the next level.'
          });
        }
      }
      state.message = 'Level clear! Solve the puzzle to continue.';
      syncHud();
      syncPlaybackButton();
      return;
    }

    sendFlow('GAME_OVER');
    state.objective = victory ? 'Sunrise restored. The expedition is complete.' : 'The night won this run. Try again.';
    state.message = victory ? 'Victory!' : 'Game Over';
    syncHud();
    syncPlaybackButton();
  }

  function spawnItem() {
    const roll = Math.random();
    const lane = getNextSpawnLane();
    const act = getCurrentActProfile();
    const shardDeficit = Math.max(0, 7 - state.fragments);
    const level = getPuzzleDifficultyLevel();
    const fragChance = Math.max(.26, .38 - state.progressLevel * .014 - shardDeficit * .008);
    const treasureChestChance = hasReachedTreasureChestLimitForLevel(level)
      ? 0
      : Math.min(0.09, 0.04 + state.progressLevel * 0.01);
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
    const heavyHazardBias = Math.max(0, Math.min(0.75, Number.isFinite(act.heavyHazardBias) ? act.heavyHazardBias : 0.24));
    const lightHazardChance = Math.max(0.18, Math.min(0.85, 0.75 - heavyHazardBias));
    const bombPenalty = Math.random() < lightHazardChance ? 100 : 500;
    state.items.push({ type: 'obstacle', lane, z: 1, hit: 1, penalty: bombPenalty });

    // Occasionally spawn a second hazard to force quick lane commitment.
    const hazardRate = Math.max(0.55, Math.min(1.9, Number.isFinite(act.hazardRate) ? act.hazardRate : 1));
    if (Math.random() < Math.min(0.72, (0.2 + state.progressLevel * 0.06) * hazardRate)) {
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
      if (typeof gameUiModule.openClueModal === 'function') {
        gameUiModule.openClueModal(getGameUiContext(), {
          terrainLabel: `${regions[state.regionIndex].name} Clue`,
          clueText: [
            'Two ancient stone pillars stand at the Sun Gate. Legend says the gate only opens when both the Dawn and Dusk pillars are lit together. The old keepers\' riddle: "neither alone, but both as one."',
            'A firefly elder guards the Rune Tree. She whispers: "Only the middle branches remember the old light. The outer ones have forgotten." Two branches. That\'s all you need.',
            'The Servo pump house has been dry for decades. Someone taped a note to the fuse box: "A is dead — don\'t touch it. Run the relay from B through to F but skip D. In that order." Old electrician wisdom.',
            'The lighthouse keeper\'s logbook washed ashore. The last entry: "Anchor, skip Buoy (it\'s gone), Coral, Depth, skip Echo, end at Fog. If you read this — please, light the beacon."',
            'The radio tower\'s signal has looped for 73 years. A Tasmanian physicist taped a diagram to the base: "Four switches break the loop. Skip the ones inside it or you\'ll just restart it. A, then jump to D, E, F."'
          ][state.regionIndex] || 'Follow the clue and recover the next fragment.'
        });
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
      if (typeof gameUiModule.openPuzzleModal === 'function') {
        gameUiModule.openPuzzleModal(getGameUiContext(), {
          terrainLabel: getPuzzleTerrainLabel(),
          onHydrate: hydratePuzzlePanel
        });
      }
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
    const ids = getPuzzlePoolIdsForLevel(level);
    const pool = ids.map((id) => turingPuzzles[id]).filter(Boolean);
    return pool;
  }

  function resolvePoolLevelKey(poolMap, level) {
    if (typeof puzzleUtils.resolvePoolLevelKey === 'function') {
      return puzzleUtils.resolvePoolLevelKey(poolMap, level, regions.length - 1);
    }
    const keys = Object.keys(poolMap)
      .map((key) => Number.parseInt(key, 10))
      .filter((key) => Number.isInteger(key))
      .sort((a, b) => a - b);
    if (!keys.length) return 0;
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    return keys.includes(safeLevel) ? safeLevel : keys[safeLevel % keys.length];
  }

  function getPuzzlePoolIdsForLevel(level) {
    const poolLevel = resolvePoolLevelKey(levelPuzzlePools, level);
    const ids = levelPuzzlePools[poolLevel] || levelPuzzlePools[0] || [];
    return ids.filter((id) => Number.isInteger(id) && turingPuzzles[id]);
  }

  function getPuzzleByRef(ref) {
    if (!ref || typeof ref !== 'object') {
      return null;
    }
    if (ref.source === 'core') {
      return turingPuzzles[ref.id] || null;
    }
    if (ref.source === 'treasure') {
      return treasurePuzzles[ref.id] || null;
    }
    return null;
  }

  function getTreasureRefKey(ref) {
    if (!ref || typeof ref !== 'object') {
      return '';
    }
    return `${ref.source}:${ref.id}`;
  }

  function getPuzzleIdSignature(puzzle) {
    return typeof puzzleUtils.getPuzzleIdSignature === 'function'
      ? puzzleUtils.getPuzzleIdSignature(puzzle)
      : '';
  }

  function getPuzzleContentSignature(puzzle) {
    return typeof puzzleUtils.getPuzzleContentSignature === 'function'
      ? puzzleUtils.getPuzzleContentSignature(puzzle)
      : '';
  }

  function getPuzzleSignature(puzzle) {
    return typeof puzzleUtils.getPuzzleSignature === 'function'
      ? puzzleUtils.getPuzzleSignature(puzzle)
      : '';
  }

  function getPuzzleTrackerKey(puzzle) {
    return typeof puzzleUtils.getPuzzleTrackerKey === 'function'
      ? puzzleUtils.getPuzzleTrackerKey(puzzle)
      : '';
  }

  function isPuzzleMarkedShown(puzzle) {
    return typeof puzzleUtils.isPuzzleMarkedShown === 'function'
      ? puzzleUtils.isPuzzleMarkedShown(puzzle)
      : false;
  }

  function markPuzzleAsShown(puzzle) {
    if (typeof puzzleUtils.markPuzzleAsShown === 'function') {
      puzzleUtils.markPuzzleAsShown(puzzle);
    }
  }

  function getPhaseHistorySignature(phase, level) {
    const key = `${phase}:${Math.max(0, Math.min(regions.length - 1, level))}`;
    const value = puzzleHistory[key];
    return typeof value === 'string' ? value : '';
  }

  function setPhaseHistorySignature(phase, level, signature) {
    if (!signature) {
      return;
    }
    const key = `${phase}:${Math.max(0, Math.min(regions.length - 1, level))}`;
    puzzleHistory[key] = signature;
    try {
      globalThis.localStorage.setItem(PUZZLE_HISTORY_KEY, JSON.stringify(puzzleHistory));
    } catch {
      // Ignore localStorage write failures in private mode/quota limits.
    }
  }

  function isPuzzleSignatureUsed(puzzle) {
    return typeof puzzleUtils.isPuzzleSignatureUsed === 'function'
      ? puzzleUtils.isPuzzleSignatureUsed(puzzle, puzzleState.usedPuzzleSignatures, shownPuzzleSignatures)
      : false;
  }

  function markPuzzleSignatureUsed(puzzle) {
    if (typeof puzzleUtils.markSignatureUsed === 'function') {
      puzzleUtils.markSignatureUsed(puzzle, puzzleState.usedPuzzleSignatures, shownPuzzleSignatures);
    }
  }

  function getSolvedPuzzleIdsForLevel(level) {
    if (!Array.isArray(puzzleState.solvedByLevel[level])) {
      puzzleState.solvedByLevel[level] = [];
    }
    return puzzleState.solvedByLevel[level];
  }

  // ─── Puzzle queue system ───────────────────────────────────────────────────
  // At game-start each pool is cloned and shuffled into a queue (array).
  // Puzzles are shifted off the front one at a time. sessionShownIds ensures
  // cross-pool dedup: showing puzzle 19 as a treasure case prevents it from
  // appearing again as a level-unlock puzzle in the same session.

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildPoolQueue(flatArray, poolIds) {
    return shuffleArray(poolIds.map((id) => flatArray[id]).filter(Boolean));
  }

  function initPuzzleQueues() {
    const queues = { heart: {}, level: {}, treasure: {} };
    for (const [key, ids] of Object.entries(heartPoolsByLevel)) {
      queues.heart[key] = buildPoolQueue(heartPuzzles, ids);
    }
    for (const [key, ids] of Object.entries(levelPoolsByLevel)) {
      queues.level[key] = buildPoolQueue(levelPuzzles, ids);
    }
    for (const [key, ids] of Object.entries(treasurePoolsByLevel)) {
      queues.treasure[key] = buildPoolQueue(treasurePuzzles, ids);
    }
    puzzleState.puzzleQueues = queues;
    puzzleState.sessionShownIds = new Set();
  }

  function popFromQueue(type, level) {
    if (!puzzleState.puzzleQueues) initPuzzleQueues();
    const poolMap = type === 'heart' ? heartPoolsByLevel
      : type === 'treasure' ? treasurePoolsByLevel
      : levelPoolsByLevel;
    const poolLevel = String(resolvePoolLevelKey(poolMap, level));
    const queue = puzzleState.puzzleQueues[type]?.[poolLevel];
    if (!queue) return null;
    // Drain until we find one not yet shown this session
    while (queue.length > 0) {
      const puzzle = queue.shift();
      if (!puzzleState.sessionShownIds.has(String(puzzle.id))) {
        return puzzle;
      }
    }
    return null;
  }

  function markSessionShown(puzzle) {
    puzzleState.sessionShownIds.add(String(puzzle.id));
    markPuzzleSignatureUsed(puzzle); // keep signatures in sync for compatibility
  }

  function pickNextHeartRevivePuzzle(level) {
    const puzzle = popFromQueue('heart', level);
    if (puzzle) {
      puzzleState.activePuzzle = puzzle;
      markSessionShown(puzzle);
    }
    return puzzle;
  }

  function pickNextLevelPuzzle(level) {
    const puzzle = popFromQueue('level', level);
    if (puzzle) {
      puzzleState.activePuzzle = puzzle;
      markSessionShown(puzzle);
    }
    return puzzle;
  }

  // Legacy shims so call-sites that still reference the old integer-id pickers don't crash
  function pickNextHeartRevivePuzzleId(level) { return pickNextHeartRevivePuzzle(level); }
  function pickNextAdvancePuzzleId(level)     { return pickNextLevelPuzzle(level); }
  function pickNextCorePuzzleId(level)        { return pickNextLevelPuzzle(level); }

  function beginHeartReviveChallenge(level) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    if (state.heartReviveUsedByLevel[safeLevel]) {
      return false;
    }

    state.pendingReviveOffer = null;
    sendFlow('PUZZLE_OPEN');

    puzzleState.pendingHeartRevive = { level: safeLevel };
    puzzleState.pendingTreasure = null;
    puzzleState.pendingAdvance = null;
    puzzleState.activePuzzle = null;

    if (typeof gameUiModule.openPuzzleModal === 'function') {
      gameUiModule.openPuzzleModal(getGameUiContext(), {
        terrainLabel: `${regions[safeLevel].name} Heart Revival Challenge`,
        onHydrate: hydratePuzzlePanel,
        statusText: 'Hearts depleted. Solve 1 puzzle to revive.'
      });
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

  function tryOfferReviveForLevel(level, objectiveText, messageText) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    if (state.heartReviveUsedByLevel[safeLevel] || state.heartReviveOfferedByLevel[safeLevel]) {
      endGame(false);
      return false;
    }
    state.heartReviveOfferedByLevel[safeLevel] = true;
    state.pendingReviveOffer = { level: safeLevel };
    state.objective = objectiveText;
    state.message = messageText;
    syncHud();
    syncPlaybackButton();
    return true;
  }

  function getTreasureRefPoolForLevel(level) {
    const safeLevel = Math.max(0, Math.min(regions.length - 1, level));
    const pool = levelRolePools[safeLevel] || levelRolePools[0] || { treasureRefs: [] };
    return pool.treasureRefs;
  }

  function chooseTreasurePuzzle(level) {
    const puzzle = popFromQueue('treasure', level);
    if (puzzle) {
      markSessionShown(puzzle);
    }
    return puzzle;
  }

  // Legacy shim
  function chooseTreasurePuzzleRef(level) { return chooseTreasurePuzzle(level) ? { source: 'treasure', _direct: true } : null; }

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

    const treasurePuzzle = chooseTreasurePuzzle(level);
    if (!treasurePuzzle) {
      state.foodStocks[selectedCharacter] = (state.foodStocks[selectedCharacter] || 0) + rewardFood;
      pushMessage(`Chest opened. Treasure puzzle bank exhausted this session, +${rewardFood} food granted.`);
      syncHud();
      return;
    }
    puzzleState.activePuzzle = treasurePuzzle;
    puzzleState.pendingTreasure = { level, puzzleRef: null, foodReward: rewardFood };
    sendFlow('PUZZLE_OPEN');

    if (typeof gameUiModule.openPuzzleModal === 'function') {
      gameUiModule.openPuzzleModal(getGameUiContext(), {
        terrainLabel: `${regions[level].name} Treasure Case`,
        onHydrate: hydratePuzzlePanel,
        statusText: 'Treasure chest found. Solve this case to claim food supplies.'
      });
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
    // Return already-picked active puzzle if present
    if (puzzleState.activePuzzle) {
      return puzzleState.activePuzzle;
    }
    if (puzzleState.pendingTreasure) {
      const level = puzzleState.pendingTreasure.level;
      const p = chooseTreasurePuzzle(level);
      puzzleState.activePuzzle = p;
      return p;
    }
    if (puzzleState.pendingAdvance) {
      const level = Math.max(0, Math.min(regions.length - 1, puzzleState.pendingAdvance.nextLevel || state.progressLevel));
      const p = pickNextLevelPuzzle(level);
      puzzleState.activePuzzle = p;
      return p;
    }
    if (puzzleState.pendingHeartRevive) {
      const level = puzzleState.pendingHeartRevive.level;
      const p = pickNextHeartRevivePuzzle(level);
      puzzleState.activePuzzle = p;
      return p;
    }
    // Default: level puzzle
    const level = getPuzzleDifficultyLevel();
    const p = pickNextLevelPuzzle(level);
    puzzleState.activePuzzle = p;
    return p;
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
    puzzleState.hintIndex = 0;
    puzzleState.hintsUsedThisPuzzle = 0;
    puzzleState.hintRewardGrantedThisPuzzle = false;
    if (puzzleTitle) {
      puzzleTitle.textContent = isTreasureCase
        ? `Treasure Case: ${puzzle.title}`
        : isHeartRevive
          ? `Heart Revival: ${puzzle.title}`
          : puzzle.title;
    }
    if (puzzleInstruction) puzzleInstruction.textContent = puzzle.instruction;
    if (puzzleQuestion) {
      const chapter = isTreasureCase
        ? 'Treasure Case Brief'
        : isHeartRevive
          ? 'Heart Revival Brief'
          : 'Junior Codebreaker Brief';
      const regionName = regions[state.regionIndex]?.name || 'Outback Sector';
      puzzleQuestion.textContent = `${chapter} - ${regionName}: Enter your decoded result in the field below to continue the expedition.`;
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
          ? 'Revive challenge: solve this puzzle to restore 3 hearts.'
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
    sendFlow('PUZZLE_CLOSE');
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
    const previousLevel = Math.max(0, next.nextLevel - 1);
    const chestCountForPreviousLevel = state.chestCollectsByLevelRun[previousLevel] || 0;
    let specialUnlockedNames = '';
    if (next.nextLevel > 0 && chestCountForPreviousLevel >= TREASURE_CHEST_LIMIT_PER_LEVEL) {
      specialUnlockedNames = unlockPuzzleBankCharactersForLevel(next.nextLevel, false);
    }
    const allUnlockedNames = [next.unlockedNames, specialUnlockedNames].filter(Boolean).join(', ');
    // Reset food stocks for all characters when advancing to next level
    state.foodStocks = Object.keys(characterFood).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});
    state.pendingLevelUnlockTarget = next.nextLevel;
    state.progressLevel = next.nextLevel;
    state.maxUnlockedLevel = Math.max(state.maxUnlockedLevel || 0, next.nextLevel);
    syncFlowLevelState(state.progressLevel);
    state.score += next.levelBonus;
    triggerLevelCelebrate(next.nextLevel, next.levelBonus, allUnlockedNames);
    if (specialUnlockedNames) {
      pushMessage(`Solstice special unlocked for ${regions[next.nextLevel].name}: ${specialUnlockedNames}.`);
    }
    closeModal(puzzleModal);
    syncHud();
    return true;
  }

  function handleSolvedHeartRevivePuzzle() {
    if (!puzzleState.pendingHeartRevive) {
      return false;
    }

    const level = puzzleState.pendingHeartRevive.level;
    puzzleState.pendingHeartRevive = null;
    state.heartReviveUsedByLevel[level] = true;
    state.health = state.maxLives;
    sendFlow('START_RUN');
    state.objective = `Heart revival completed in ${regions[level].name}. Continue the run.`;
    pushMessage(`Heart revival complete. ${state.maxLives} hearts restored.`);
    closeModal(puzzleModal);
    syncHud();
    syncPlaybackButton();
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

      puzzleState.activePuzzle = null;
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
        puzzleStatus.textContent = `Correct answer. ${puzzle.rightExplain} Tap Submit to restore hearts.`;
      } else {
        puzzleStatus.textContent = `Correct answer. ${puzzle.rightExplain} Tap Submit to continue.`;
      }
    }
    pushMessage('Answer is correct. Press Submit to continue.');
  }

  function resumeFromPuzzleModal() {
    closeModal(puzzleModal);
    puzzleState.activePuzzle = null;
    if (state.flowMode === 'q_puzzle') {
      sendFlow('PUZZLE_CLOSE');
    } else if (state.paused) {
      // Fallback for any path that set paused directly
      state.paused = false;
    }
    syncHud();
    syncPlaybackButton();
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
        puzzleStatus.textContent = 'Cannot skip this one. Solve this puzzle to restore hearts.';
      }
      pushMessage('Heart revival puzzle cannot be skipped.');
      return;
    }
    puzzleState.activePuzzle = null;
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

  function handoffToCharacterSelectionAfterLevelClear() {
    state.continueFromLevelUnlock = true;
    setCharacterSelectionOpen(true);
    setLanding(false);
    setGameplayChrome(false);
    state.objective = 'New level unlocked. Pick your dasher for the next run.';
    state.message = 'Level clear! Select a character to continue.';
    syncHud();
  }

  function triggerLevelCelebrate(nextLevel, levelBonus, unlockedNames) {
    sendFlow('LEVEL_TRANSITION_OPEN');
    const tMsg = levelTransitionMsgs[nextLevel];
    const unlockLine = unlockedNames ? `New dashers unlocked: ${unlockedNames}!` : '';
    const levelEmojis = ['', '🌿', '⚡', '🌊', '❄️'];
    const canShowLevelOverlay = Boolean(levelCompleteOverlay) && typeof gameUiModule.openLevelCompleteOverlay === 'function';
    if (canShowLevelOverlay) {
      gameUiModule.openLevelCompleteOverlay(getGameUiContext(), {
        emoji: levelEmojis[nextLevel] || '🎉',
        congratsText: tMsg ? tMsg.congrats : `Level ${nextLevel} unlocked! 🎉`,
        teaserText: tMsg ? tMsg.teaser : `Now entering ${regions[nextLevel].name}.`,
        bonusText: `${unlockLine ? unlockLine + '  ' : ''}+${levelBonus} level clear bonus · next level starts at 3 hearts`
      });
    } else {
      handoffToCharacterSelectionAfterLevelClear();
      return;
    }
    if (levelCompleteTimer) {
      clearTimeout(levelCompleteTimer);
    }
    levelCompleteTimer = setTimeout(() => {
      if (typeof gameUiModule.closeLevelCompleteOverlay === 'function') {
        gameUiModule.closeLevelCompleteOverlay(getGameUiContext());
      }
      handoffToCharacterSelectionAfterLevelClear();
    }, 2600);
  }

  function isOpenModal(modal) {
    return Boolean(modal && modal.classList.contains('open') && modal.getAttribute('aria-hidden') !== 'true');
  }

  function hasBlockingPopupOpen() {
    return isOpenModal(settingsModal)
      || isOpenModal(pastGamesModal)
      || isOpenModal(helpModal)
      || isOpenModal(walkthroughModal)
      || isOpenModal(clueModal)
      || isOpenModal(puzzleModal)
      || isOpenModal(foodShopModal)
      || isOpenModal(hungerModal);
  }

  function update(dt) {
    if (!state.running) {
      render();
      return;
    }

    const hungryNow = shouldPauseForHunger();
    if (hungryNow && !state.paused) {
      sendFlow('HUNGER_TRIGGER');
      state.hungerStuckSince = Date.now();
      state.message = 'Out of energy and food. Run paused. Buy food to continue.';
      showHungerModal();
      syncHud();
      syncPlaybackButton();
    }

    // Auto-lose a life if stuck in hunger for too long (30 seconds) without being able to afford food
    if (state.hungerPaused && hungryNow && !canAffordAnyFood()) {
      const stuckDuration = Date.now() - state.hungerStuckSince;
      if (stuckDuration > 30000) {
        state.health = 0;
        sendFlow('GAME_OVER');
        state.hungerStuckSince = 0;
        const level = getPuzzleDifficultyLevel();
        if (state.heartReviveUsedByLevel[level]) {
          endGame(false);
        } else {
          state.health = 0;
          tryOfferReviveForLevel(
            level,
            'Starved! Game over, but one revive is still available for this level.',
            'Your dasher starved. You have 1 revive left. Tap Revive.'
          );
        }
        hideHungerModal();
      }
    }

    if (state.hungerPaused && hungryNow && hungerModal && !hungerModal.classList.contains('open')
      && Date.now() >= state.hungerModalDismissedUntil
      && !foodShopModal?.classList.contains('open')) {
      showHungerModal();
    }

    if (state.hungerPaused && !hungryNow) {
      sendFlow('HUNGER_RECOVER');
      state.hungerModalDismissedUntil = 0;
      state.hungerStuckSince = 0;
      hideHungerModal();
      state.message = 'Food restored. Run resumed.';
      syncHud();
      syncPlaybackButton();
    }

    const popupOpen = hasBlockingPopupOpen();
    if (popupOpen && !state.popupPaused) {
      state.pauseBeforePopup = state.paused;
      sendFlow('POPUP_OPEN');
      state.message = 'Game paused while popup is open.';
      syncHud();
      syncPlaybackButton();
    }
    if (!popupOpen && state.popupPaused) {
      const resumeToManual = Boolean(state.pauseBeforePopup);
      state.pauseBeforePopup = false;
      sendFlow('POPUP_CLOSE', { resumeToManual });
      if (state.hungerPaused) {
        sendFlow('HUNGER_TRIGGER');
      }
      if (!state.paused) {
        state.message = 'Game resumed.';
      }
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
    const act = getCurrentActProfile();
    state.difficulty += dt * (.04 + state.progressLevel * .018 + shardDeficit * .006) * difficultyMultipliers[gameDifficulty] * act.difficultyScale;
  }

  function updateRegion() {
    const levelIndex = Math.max(0, Math.min(regions.length - 1, state.progressLevel));
    if (state.regionIndex !== levelIndex) {
      state.regionIndex = levelIndex;
      applyRegionThreeTheme(regions[state.regionIndex]);
      syncAudioToRegion();
    }
    const runningObjective = `Running in ${regions[state.regionIndex].name} · ${getCurrentActDisplayLabel()}`;
    if (state.running && state.objective !== runningObjective && (state.objective.startsWith('Running in ') || state.objective.includes('Traverse the expedition map'))) {
      state.objective = runningObjective;
      syncHud();
    }
  }

  function updateSpawnTimers(dt) {
    const speedMult = difficultyMultipliers[gameDifficulty];
    const act = getCurrentActProfile();
    state.spawnTimer -= dt;
    const shardDeficit = Math.max(0, 7 - state.fragments);

    if (state.spawnTimer <= 0) {
      spawnItem();
      const nextSpawn = .92 - state.difficulty * .06 - state.progressLevel * .08 - shardDeficit * .025;
      state.spawnTimer = Math.max(.24, nextSpawn / (speedMult * act.spawnRate));
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
      if (state.heartReviveUsedByLevel[level]) {
        endGame(false);
      } else {
        state.health = 0;
        sendFlow('GAME_OVER');
        tryOfferReviveForLevel(
          level,
          'Game over, but one revive is still available for this level.',
          'Game over. You have 1 revive option left. Tap Revive.'
        );
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
      const level = getPuzzleDifficultyLevel();
      if (hasReachedTreasureChestLimitForLevel(level)) {
        pushMessage(`Treasure chest cap reached for Level ${level + 1} (${TREASURE_CHEST_LIMIT_PER_LEVEL}/${TREASURE_CHEST_LIMIT_PER_LEVEL}).`);
        return;
      }
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
    const act = getCurrentActProfile();

    if (terrain3dEnabled && threeState.ready) {
      // Completely clear the 2D canvas so Three.js shows through.
      ctx.clearRect(0, 0, w, h);
      // Faint vignette only – no background fill.
      const vig = ctx.createRadialGradient(w * 0.5, h * 0.5, h * 0.25, w * 0.5, h * 0.5, h * 0.9);
      vig.addColorStop(0, 'rgba(0,0,0,0)');
      vig.addColorStop(1, 'rgba(0,0,0,0.2)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);
      return;
    }

    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, region.top);
    grad.addColorStop(1, region.bottom);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    const regionName = normalizeBiomeName(region.name);
    if (regionName === 'mangroves') {
      drawMangrovesScene(w, h, act);
    } else if (regionName === 'blue mountains') {
      drawBlueMountainsScene(w, h, act);
    } else if (regionName === 'nullarbor') {
      drawNullarborScene(w, h, act);
    } else if (regionName === 'observatory') {
      drawObservatoryScene(w, h, act);
    } else if (region.terrain === 'dunes') {
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

    drawBiomeSignatureOverlay(w, h, region);

    // Keep mood but avoid over-darkening bright sky terrains and detailed foreground scenes.
    const sceneDarkenBase = region.terrain === 'mountains'
      ? 0.07
      : region.terrain === 'industrial'
      ? 0.09
      : 0.16;
    const sceneDarken = Math.max(0, Math.min(0.34, sceneDarkenBase + act.sceneDarkenOffset));
    ctx.fillStyle = `rgba(12, 8, 5, ${sceneDarken})`;
    ctx.fillRect(0, 0, w, h);

    drawCinematicGrade(w, h, region.terrain, act, regionName);
    drawActAtmosphereOverlay(w, h, region, act);

    drawRunnerTrack(w, h, region, act);
  }

  function drawBiomeSignatureOverlay(w, h, region) {
    const name = String(region?.name || '').toLowerCase();
    const t = performance.now() * 0.001;

    if (name.includes('mangrove')) {
      const haze = ctx.createLinearGradient(0, h * 0.38, 0, h * 0.9);
      haze.addColorStop(0, 'rgba(96, 150, 116, 0)');
      haze.addColorStop(1, 'rgba(96, 150, 116, 0.14)');
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, w, h);
      return;
    }

    if (name.includes('nullarbor')) {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 224, 150, 0.16)';
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 8; i += 1) {
        const y = h * 0.58 + i * 18;
        ctx.beginPath();
        ctx.moveTo(0, y + Math.sin(t + i) * 2);
        ctx.lineTo(w, y + Math.cos(t * 0.9 + i) * 2);
        ctx.stroke();
      }
      ctx.restore();
      return;
    }

    if (name.includes('observatory')) {
      ctx.save();
      ctx.fillStyle = 'rgba(180, 200, 255, 0.62)';
      for (let i = 0; i < 24; i += 1) {
        const x = (i * 73 + (t * 24) % 113) % w;
        const y = (i * 41 + (t * 12) % 67) % (h * 0.48);
        const r = i % 5 === 0 ? 1.8 : 1.1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      return;
    }

    if (name.includes('blue mountains')) {
      const fog = ctx.createLinearGradient(0, h * 0.3, 0, h * 0.9);
      fog.addColorStop(0, 'rgba(185, 206, 232, 0)');
      fog.addColorStop(1, 'rgba(185, 206, 232, 0.18)');
      ctx.fillStyle = fog;
      ctx.fillRect(0, 0, w, h);
    }
  }

  function drawRunnerTrack(w, h, region, act) {
    const t = performance.now() * 0.001;
    const terrain = region.terrain;
    const regionName = normalizeBiomeName(region?.name);
    const isBushland = regionName === 'bushland';
    const isServo = regionName === 'servo';
    const isTasmania = regionName === 'tasmania';
    if (isServo || isTasmania) {
      // Some scenes have their own full foreground composition; skip global track overlays.
      return;
    }
    const isNullarbor = regionName === 'nullarbor';
    const horizonY = h * 0.58;
    const frontY = h * 0.8;

    const midGrad = ctx.createLinearGradient(0, horizonY, 0, frontY);
    if (isNullarbor) {
      midGrad.addColorStop(0, 'rgba(198, 184, 158, .2)');
      midGrad.addColorStop(1, 'rgba(148, 132, 108, .32)');
    } else if (terrain === 'dunes') {
      midGrad.addColorStop(0, 'rgba(160, 136, 106, .18)');
      midGrad.addColorStop(1, 'rgba(108, 88, 68, .28)');
    } else if (terrain === 'forest') {
      midGrad.addColorStop(0, 'rgba(92, 112, 84, .18)');
      midGrad.addColorStop(1, 'rgba(44, 60, 40, .3)');
    } else if (terrain === 'beach') {
      midGrad.addColorStop(0, 'rgba(162, 148, 118, .26)');
      midGrad.addColorStop(1, 'rgba(126, 108, 82, .34)');
    } else if (terrain === 'industrial') {
      if (isServo) {
        midGrad.addColorStop(0, 'rgba(52, 78, 108, .06)');
        midGrad.addColorStop(1, 'rgba(24, 42, 62, .14)');
      } else {
        midGrad.addColorStop(0, 'rgba(52, 78, 108, .18)');
        midGrad.addColorStop(1, 'rgba(24, 42, 62, .32)');
      }
    } else {
      midGrad.addColorStop(0, 'rgba(98, 112, 132, .3)');
      midGrad.addColorStop(1, 'rgba(62, 72, 92, .6)');
    }
    ctx.fillStyle = midGrad;
    ctx.fillRect(0, horizonY, w, frontY - horizonY);

    const frontGrad = ctx.createLinearGradient(0, frontY, 0, h);
    if (isNullarbor) {
      frontGrad.addColorStop(0, 'rgba(162, 142, 116, .2)');
      frontGrad.addColorStop(1, 'rgba(112, 95, 74, .34)');
    } else if (terrain === 'dunes') {
      frontGrad.addColorStop(0, 'rgba(116, 92, 66, .12)');
      frontGrad.addColorStop(1, 'rgba(68, 48, 34, .22)');
    } else if (terrain === 'forest') {
      frontGrad.addColorStop(0, 'rgba(48, 72, 46, .14)');
      frontGrad.addColorStop(1, 'rgba(22, 34, 22, .24)');
    } else if (terrain === 'beach') {
      frontGrad.addColorStop(0, 'rgba(138, 118, 90, .2)');
      frontGrad.addColorStop(1, 'rgba(88, 70, 48, .3)');
    } else if (terrain === 'industrial') {
      if (isServo) {
        frontGrad.addColorStop(0, 'rgba(26, 44, 66, .12)');
        frontGrad.addColorStop(1, 'rgba(14, 28, 42, .22)');
      } else {
        frontGrad.addColorStop(0, 'rgba(26, 44, 66, .42)');
        frontGrad.addColorStop(1, 'rgba(14, 28, 42, .56)');
      }
    } else {
      frontGrad.addColorStop(0, 'rgba(78, 88, 108, .8)');
      frontGrad.addColorStop(1, 'rgba(44, 54, 76, .9)');
    }
    ctx.fillStyle = frontGrad;
    ctx.fillRect(0, frontY, w, h - frontY);

    if (!isBushland && !(isServo && terrain === 'industrial')) {
      drawProceduralTerrainTexture(terrain, w, h, horizonY, t);
    }

    // Path guide/rut overlays are globally disabled for a cleaner scene.
    const showPathGuides = false;
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
        const alpha = (laneIndex === laneCenterIndex ? laneAlphaCenter : laneAlphaSide) * act.laneGuideAlphaScale;
        const laneTint = isNullarbor
          ? `rgba(230, 218, 194, ${alpha * 0.92})`
          : terrain === 'beach'
          ? `rgba(232, 213, 174, ${alpha * 0.88})`
          : `rgba(222, 214, 198, ${alpha})`;
        ctx.strokeStyle = laneTint;
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
        ctx.strokeStyle = isNullarbor
          ? `rgba(98, 84, 64, ${rutAlpha * 0.72})`
          : `rgba(24, 20, 16, ${rutAlpha})`;
        ctx.lineWidth = rutWidth;
        ctx.beginPath();
        ctx.moveTo(w * far, laneTopY + 4);
        ctx.bezierCurveTo(w * far, h * 0.69, w * near, h * 0.78, w * near, laneBottomY + 2);
        ctx.stroke();
      });
    }

    const showIndustrialSeams = visualSettings.industrialGroundSeams === true;
    if (terrain === 'industrial' && regionName !== 'servo' && showIndustrialSeams) {
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
    ctx.fillStyle = hexToRgba(region.accent, 0.68);
    ctx.font = '700 13px Nunito';
    ctx.fillText(getCurrentActDisplayLabel().toUpperCase(), 16, h - 18);
  }

  function drawCinematicGrade(w, h, terrain, act, regionName) {
    // Vignette and grain to unify scenes into a less cartoon, more filmic frame.
    const vignette = ctx.createRadialGradient(w * 0.5, h * 0.56, Math.min(w, h) * 0.22, w * 0.5, h * 0.56, Math.max(w, h) * 0.8);
    vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignette.addColorStop(1, terrain === 'industrial' ? 'rgba(4, 7, 10, 0.36)' : 'rgba(8, 7, 5, 0.28)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, w, h);

    if (visualSettings.cinematicScanlines === true && regionName !== 'tasmania' && regionName !== 'bushland' && regionName !== 'blue mountains') {
      const t = performance.now() * 0.001;
      ctx.save();
      const baseAlpha = terrain === 'industrial' ? 0.09 : 0.07;
      ctx.globalAlpha = baseAlpha * act.scanlineAlphaScale;
      for (let i = 0; i < 38; i++) {
        const y = (i * 23 + t * 42) % h;
        ctx.fillStyle = i % 3 === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)';
        ctx.fillRect(0, y, w, 1);
      }
      ctx.restore();
    }
  }

  function drawActAtmosphereOverlay(w, h, region, act) {
    const t = performance.now() * 0.001;
    const accent = region.accent || '#ffd166';
    const regionName = normalizeBiomeName(region?.name);
    if (regionName === 'bushland') {
      return;
    }

    if (act.index === 0) {
      const haze = ctx.createLinearGradient(0, h * 0.22, 0, h * 0.88);
      haze.addColorStop(0, 'rgba(255,255,255,0)');
      haze.addColorStop(1, hexToRgba(accent, 0.06));
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, w, h);
      return;
    }

    if (act.index === 1) {
      if (regionName === 'blue mountains') {
        const haze = ctx.createLinearGradient(0, h * 0.3, 0, h * 0.88);
        haze.addColorStop(0, 'rgba(255,255,255,0)');
        haze.addColorStop(1, hexToRgba(accent, 0.05));
        ctx.fillStyle = haze;
        ctx.fillRect(0, 0, w, h);
        return;
      }
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = hexToRgba(accent, 0.46);
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 12; i += 1) {
        const y = h * 0.45 + i * 14 + Math.sin(t * 2.6 + i * 0.8) * 5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.quadraticCurveTo(w * 0.5, y + Math.sin(t * 2 + i) * 8, w, y + Math.cos(t * 1.7 + i) * 6);
        ctx.stroke();
      }
      ctx.restore();
      return;
    }

    const glow = ctx.createRadialGradient(w * 0.5, h * 0.28, h * 0.08, w * 0.5, h * 0.28, h * 0.62);
    glow.addColorStop(0, hexToRgba(accent, 0.18));
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.globalAlpha = 0.07;
    ctx.fillStyle = hexToRgba(accent, 0.32);
    for (let i = 0; i < 9; i += 1) {
      const x = ((i / 9) * w + (t * 30 + i * 17) % 90) % w;
      const y = h * 0.18 + Math.sin(t * 1.4 + i * 0.9) * 14;
      ctx.beginPath();
      ctx.arc(x, y, 2 + (i % 3), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawWrappedCenteredText(text, x, y, maxWidth, lineHeight) {
    const words = String(text || '').split(/\s+/).filter(Boolean);
    if (!words.length) {
      return 0;
    }
    const lines = [];
    let line = words[0];
    for (let i = 1; i < words.length; i += 1) {
      const candidate = `${line} ${words[i]}`;
      if (ctx.measureText(candidate).width <= maxWidth) {
        line = candidate;
      } else {
        lines.push(line);
        line = words[i];
      }
    }
    lines.push(line);
    lines.forEach((entry, index) => {
      ctx.fillText(entry, x, y + index * lineHeight);
    });
    return lines.length;
  }

  function countWrappedTextLines(text, maxWidth) {
    const words = String(text || '').split(/\s+/).filter(Boolean);
    if (!words.length) {
      return 0;
    }
    let lines = 1;
    let line = words[0];
    for (let i = 1; i < words.length; i += 1) {
      const candidate = `${line} ${words[i]}`;
      if (ctx.measureText(candidate).width <= maxWidth) {
        line = candidate;
      } else {
        lines += 1;
        line = words[i];
      }
    }
    return lines;
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

    // Mirage haze as particulate glints to avoid long horizontal stroke artifacts.
    for (let i = 0; i < 170; i++) {
      const speed = 11 + (i % 7) * 3;
      const x = ((t * speed + i * 41) % (w + 120)) - 60;
      const y = h * (0.3 + (i / 170) * 0.5) + Math.sin(t * 1.35 + i * 0.42) * 8;
      const r = 0.7 + (i % 3) * 0.55;
      const alpha = 0.04 + (i % 5) * 0.02;
      ctx.fillStyle = `rgba(255, 224, 176, ${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Dune detail as clustered granular flecks rather than contour strokes.
    for (let band = 0; band < 5; band++) {
      const baseY = h * (0.54 + band * 0.055);
      for (let i = 0; i < 90; i++) {
        const nx = (i + band * 19) / 90;
        const n = octaveNoise(nx * (2.8 + band * 0.4) + 14.1 + t * (0.1 + band * 0.02), band * 2.7);
        const x = nx * w + Math.sin(t * 0.9 + i) * 3;
        const y = baseY + n * (10 - band * 1.2) + Math.cos(nx * 9 + t * 0.26 + band) * 2.4;
        const r = 0.8 + (i % 2) * 0.55;
        ctx.fillStyle = `rgba(238, 196, 138, ${0.08 - band * 0.01})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Scattered dust particles drifting cross-wind.
    for (let i = 0; i < 86; i++) {
      const lane = i % 9;
      const speed = 36 + lane * 7;
      const x = ((t * speed + i * 58) % (w + 180)) - 90;
      const y = h * (0.28 + (i / 86) * 0.56) + Math.sin(t * 1.4 + i * 0.28) * 7;
      const rx = 1.3 + (i % 4) * 0.7;
      const ry = 0.9 + (i % 3) * 0.45;
      const alpha = 0.07 + (i % 5) * 0.025;
      ctx.fillStyle = `rgba(245, 214, 168, ${alpha})`;
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, Math.sin(i * 0.6 + t) * 0.7, 0, Math.PI * 2);
      ctx.fill();
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

    // Windmill silhouette for a clearer outback landmark.
    const windmillX = w * 0.82;
    const windmillBaseY = h * 0.62;
    const windmillTopY = h * 0.46;
    ctx.strokeStyle = 'rgba(88, 58, 40, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(windmillX, windmillBaseY);
    ctx.lineTo(windmillX, windmillTopY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(windmillX - 8, windmillBaseY);
    ctx.lineTo(windmillX, windmillTopY + 18);
    ctx.lineTo(windmillX + 8, windmillBaseY);
    ctx.stroke();
    ctx.fillStyle = 'rgba(98, 68, 46, 0.5)';
    ctx.beginPath();
    ctx.arc(windmillX, windmillTopY, 5, 0, Math.PI * 2);
    ctx.fill();
    for (let k = 0; k < 4; k++) {
      const ang = t * 0.85 + k * (Math.PI / 2);
      const tipX = windmillX + Math.cos(ang) * 18;
      const tipY = windmillTopY + Math.sin(ang) * 18;
      ctx.strokeStyle = 'rgba(122, 88, 62, 0.46)';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(windmillX, windmillTopY);
      ctx.lineTo(tipX, tipY);
      ctx.stroke();
    }
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

    // Diffuse mist pockets (randomized) to avoid vertical column artifacts.
    for (let i = 0; i < 10; i++) {
      const pocketX = ((i * 137 + Math.sin(t * 0.14 + i * 1.7) * 180) % (w + 180)) - 90;
      const pocketY = h * (0.2 + ((i * 53) % 100) / 270);
      const radius = h * (0.11 + (i % 4) * 0.03);
      const fog = ctx.createRadialGradient(pocketX, pocketY, 10, pocketX, pocketY, radius);
      fog.addColorStop(0, 'rgba(232, 249, 204, 0.042)');
      fog.addColorStop(0.55, 'rgba(232, 249, 204, 0.018)');
      fog.addColorStop(1, 'rgba(232, 249, 204, 0)');
      ctx.fillStyle = fog;
      ctx.beginPath();
      ctx.ellipse(pocketX, pocketY, radius * 0.55, radius * 0.42, Math.sin(i * 1.31) * 0.35, 0, Math.PI * 2);
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
    for (let x = w; x >= 0; x -= 24) {
      const nx = x / w;
      const y = h * (0.605 + octaveNoise(nx * 3.1 + 19.6 + t * 0.02, 2.5) * 0.02);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();

    // Mid-tree layer with clearer eucalyptus silhouettes.
    for (let i = 0; i < 16; i++) {
      const baseX = w * (0.04 + i / 15 * 0.92) + Math.sin(t * 0.28 + i * 0.8) * 6;
      const rootY = h * (0.5 + (i % 4) * 0.028);
      const trunkH = h * (0.19 + (i % 5) * 0.013);
      const trunkW = 7 + (i % 3) * 2;
      const lean = Math.sin(i * 0.9 + t * 0.22) * 5;
      const topX = baseX + lean;
      const topY = rootY - trunkH;

      // Tapered trunk with subtle bend.
      ctx.fillStyle = 'rgba(45, 31, 22, 0.56)';
      ctx.beginPath();
      ctx.moveTo(baseX - trunkW * 0.45, rootY);
      ctx.quadraticCurveTo(baseX - trunkW * 0.3, rootY - trunkH * 0.45, topX - trunkW * 0.18, topY);
      ctx.lineTo(topX + trunkW * 0.18, topY);
      ctx.quadraticCurveTo(baseX + trunkW * 0.38, rootY - trunkH * 0.42, baseX + trunkW * 0.52, rootY);
      ctx.closePath();
      ctx.fill();

      // Branch forks near crown to avoid "lollipop" look.
      ctx.strokeStyle = 'rgba(41, 27, 19, 0.48)';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(topX, topY + 8);
      ctx.quadraticCurveTo(topX - 12, topY - 2, topX - 22, topY - 14);
      ctx.moveTo(topX + 1, topY + 10);
      ctx.quadraticCurveTo(topX + 10, topY + 1, topX + 20, topY - 10);
      ctx.stroke();

      // Canopy clusters: layered ellipses with varied tones.
      const crownX = topX;
      const crownY = topY - 8;
      const toneA = `rgba(${54 + (i % 4) * 7}, ${98 + (i % 5) * 8}, ${58 + (i % 3) * 7}, 0.62)`;
      const toneB = `rgba(${44 + (i % 3) * 6}, ${86 + (i % 4) * 7}, ${50 + (i % 3) * 5}, 0.58)`;
      ctx.fillStyle = toneA;
      ctx.beginPath();
      ctx.ellipse(crownX - 15, crownY - 2, 14, 10, -0.16, 0, Math.PI * 2);
      ctx.ellipse(crownX + 1, crownY - 6, 17, 12, 0.04, 0, Math.PI * 2);
      ctx.ellipse(crownX + 16, crownY - 2, 13, 9, 0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = toneB;
      ctx.beginPath();
      ctx.ellipse(crownX - 6, crownY + 4, 12, 8, 0.06, 0, Math.PI * 2);
      ctx.ellipse(crownX + 10, crownY + 3, 11, 7, -0.05, 0, Math.PI * 2);
      ctx.fill();
    }

    // Smaller bush layer to keep the forest from feeling empty.
    for (let i = 0; i < 24; i++) {
      const bx = w * (0.02 + (i % 12) * 0.08) + Math.sin(t * 0.5 + i) * 5;
      const by = h * (0.66 + (i % 4) * 0.05);
      const bushW = 18 + (i % 3) * 8;
      const bushH = 12 + (i % 2) * 5;
      ctx.fillStyle = `rgba(${40 + (i % 3) * 8}, ${82 + (i % 4) * 10}, ${46 + (i % 2) * 5}, 0.42)`;
      ctx.beginPath();
      ctx.ellipse(bx - bushW * 0.22, by, bushW * 0.32, bushH * 0.38, -0.12, 0, Math.PI * 2);
      ctx.ellipse(bx, by - 2, bushW * 0.38, bushH * 0.5, 0.08, 0, Math.PI * 2);
      ctx.ellipse(bx + bushW * 0.22, by, bushW * 0.3, bushH * 0.34, 0.14, 0, Math.PI * 2);
      ctx.fill();
    }

    // Extra slender trees in the background to thicken the canopy rhythm.
    for (let i = 0; i < 10; i++) {
      const tx = w * (0.06 + i * 0.1) + Math.sin(t * 0.25 + i * 0.7) * 8;
      const rootY = h * (0.49 + (i % 3) * 0.03);
      const trunkH = h * (0.14 + (i % 4) * 0.012);
      const lean = Math.sin(i * 0.8 + t * 0.22) * 4;
      const topY = rootY - trunkH;
      ctx.strokeStyle = 'rgba(52, 36, 24, 0.42)';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(tx, rootY);
      ctx.quadraticCurveTo(tx + lean * 0.3, rootY - trunkH * 0.5, tx + lean, topY);
      ctx.stroke();
      ctx.fillStyle = 'rgba(58, 96, 52, 0.52)';
      ctx.beginPath();
      ctx.ellipse(tx + lean, topY - 6, 16, 10, 0, 0, Math.PI * 2);
      ctx.ellipse(tx + lean - 12, topY - 2, 11, 7, -0.12, 0, Math.PI * 2);
      ctx.ellipse(tx + lean + 12, topY - 2, 11, 7, 0.1, 0, Math.PI * 2);
      ctx.fill();
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

    // Falling leaves with warmer colors and leaf-like silhouettes.
    for (let i = 0; i < 64; i++) {
      const drift = t * (16 + (i % 5) * 3.5) + i * 47;
      const lx = (drift % (w + 160)) - 80;
      const ly = h * (0.08 + (i / 64) * 0.74) + Math.sin(t * 1.4 + i * 0.7) * 20;
      const sway = Math.sin(t * 2.2 + i * 0.5) * 0.95;
      const leafW = 4 + (i % 3) * 1.5;
      const leafH = 9 + (i % 4) * 1.8;
      const leafColors = [
        'rgba(188, 137, 68, 0.58)',
        'rgba(166, 125, 54, 0.54)',
        'rgba(134, 167, 80, 0.52)',
        'rgba(196, 164, 92, 0.55)'
      ];
      ctx.save();
      ctx.translate(lx, ly);
      ctx.rotate(sway);
      ctx.fillStyle = leafColors[i % leafColors.length];
      ctx.beginPath();
      ctx.moveTo(0, -leafH * 0.55);
      ctx.quadraticCurveTo(leafW * 0.9, -leafH * 0.2, leafW * 0.55, 0);
      ctx.quadraticCurveTo(leafW * 0.9, leafH * 0.2, 0, leafH * 0.55);
      ctx.quadraticCurveTo(-leafW * 0.9, leafH * 0.2, -leafW * 0.55, 0);
      ctx.quadraticCurveTo(-leafW * 0.9, -leafH * 0.2, 0, -leafH * 0.55);
      ctx.fill();
      ctx.strokeStyle = 'rgba(70, 56, 28, 0.28)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, -leafH * 0.45);
      ctx.lineTo(0, leafH * 0.42);
      ctx.stroke();
      ctx.restore();
    }

    // Airborne flecks instead of line streaks to avoid horizontal/diagonal banding.
    for (let i = 0; i < 26; i++) {
      const x = ((t * (9 + (i % 6)) + i * 43) % (w + 50)) - 25;
      const y = h * (0.12 + (i / 26) * 0.5) + Math.sin(t * 0.75 + i * 0.9) * 5;
      ctx.fillStyle = `rgba(208, 232, 164, ${0.05 + (i % 5) * 0.016})`;
      ctx.beginPath();
      ctx.ellipse(x, y, 1.2 + (i % 3) * 0.8, 0.55 + (i % 2) * 0.35, Math.sin(i * 0.7) * 0.5, 0, Math.PI * 2);
      ctx.fill();
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

    // Twilight sky and warm shop glow.
    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.6);
    sky.addColorStop(0, 'rgba(22, 34, 52, 0.98)');
    sky.addColorStop(0.55, 'rgba(34, 52, 76, 0.94)');
    sky.addColorStop(1, 'rgba(24, 40, 60, 0.6)');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h * 0.62);

    const halo = ctx.createRadialGradient(w * 0.52, h * 0.35, 18, w * 0.52, h * 0.35, w * 0.45);
    halo.addColorStop(0, 'rgba(255, 218, 152, 0.22)');
    halo.addColorStop(0.5, 'rgba(255, 184, 112, 0.12)');
    halo.addColorStop(1, 'rgba(18, 28, 44, 0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, w, h * 0.68);

    // Forecourt concrete and road edge.
    const forecourt = ctx.createLinearGradient(0, h * 0.58, 0, h);
    forecourt.addColorStop(0, 'rgba(112, 118, 124, 0.38)');
    forecourt.addColorStop(0.55, 'rgba(88, 94, 102, 0.52)');
    forecourt.addColorStop(1, 'rgba(56, 64, 74, 0.72)');
    ctx.fillStyle = forecourt;
    ctx.fillRect(0, h * 0.58, w, h * 0.42);
    ctx.fillStyle = 'rgba(30, 34, 40, 0.74)';
    ctx.fillRect(0, h * 0.78, w, h * 0.22);

    // Main convenience store building.
    const storeX = w * 0.22;
    const storeY = h * 0.62;
    const storeW = w * 0.56;
    const storeH = h * 0.24;
    ctx.fillStyle = 'rgba(68, 74, 82, 0.82)';
    ctx.fillRect(storeX, storeY - storeH, storeW, storeH);

    // Bright fascia and signage.
    ctx.fillStyle = 'rgba(236, 78, 54, 0.92)';
    ctx.fillRect(storeX, storeY - storeH - 20, storeW, 22);
    ctx.fillStyle = 'rgba(252, 206, 88, 0.95)';
    ctx.fillRect(storeX, storeY - storeH - 8, storeW, 5);
    ctx.fillStyle = 'rgba(40, 28, 24, 0.88)';
    ctx.font = '700 20px Nunito';
    ctx.textAlign = 'center';
    ctx.fillText('HIGHWAY SERVO & STORE', storeX + storeW * 0.5, storeY - storeH - 5);

    // Glass storefront with interior shelves / fridges.
    const glassY = storeY - storeH + 22;
    const glassH = storeH - 30;
    ctx.fillStyle = 'rgba(168, 212, 236, 0.3)';
    ctx.fillRect(storeX + 18, glassY, storeW - 36, glassH);
    for (let i = 0; i < 7; i++) {
      const gx = storeX + 30 + i * ((storeW - 70) / 6);
      ctx.strokeStyle = 'rgba(212, 232, 246, 0.36)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(gx, glassY + 3);
      ctx.lineTo(gx, glassY + glassH - 3);
      ctx.stroke();
    }
    for (let i = 0; i < 16; i++) {
      const sx = storeX + 26 + (i % 8) * ((storeW - 56) / 8);
      const sy = glassY + 8 + Math.floor(i / 8) * 14;
      ctx.fillStyle = i % 3 === 0 ? 'rgba(255, 190, 98, 0.44)' : 'rgba(196, 232, 246, 0.34)';
      ctx.fillRect(sx, sy, 12, 4);
    }

    // Forecourt canopy over pumps.
    const canX = w * 0.16;
    const canY = h * 0.56;
    const canW = w * 0.68;
    ctx.fillStyle = 'rgba(224, 70, 50, 0.9)';
    ctx.fillRect(canX, canY, canW, 12);
    ctx.fillStyle = 'rgba(250, 206, 92, 0.94)';
    ctx.fillRect(canX, canY + 9, canW, 3);
    ctx.fillStyle = 'rgba(72, 76, 84, 0.76)';
    ctx.fillRect(canX + 14, canY + 11, 10, h * 0.14);
    ctx.fillRect(canX + canW - 24, canY + 11, 10, h * 0.14);

    // Pump islands and labels (high-contrast so petrol/diesel bays are obvious in rain).
    const pumpXs = [w * 0.32, w * 0.48, w * 0.64];
    const fuelLabels = ['PETROL U91', 'PETROL P95', 'DIESEL'];
    const fuelCols = ['rgba(244, 204, 96, 0.95)', 'rgba(236, 156, 88, 0.95)', 'rgba(128, 220, 138, 0.95)'];
    pumpXs.forEach((px, i) => {
      const py = h * 0.645;

      // Island plinth.
      ctx.fillStyle = 'rgba(146, 150, 156, 0.56)';
      ctx.fillRect(px - 30, py + 50, 60, 8);

      // Pump body.
      ctx.fillStyle = 'rgba(56, 64, 74, 0.94)';
      ctx.fillRect(px - 21, py, 42, 52);

      // Bright category strip and label.
      ctx.fillStyle = fuelCols[i];
      ctx.fillRect(px - 18, py + 4, 36, 13);
      ctx.fillStyle = 'rgba(20, 18, 18, 0.92)';
      ctx.font = '700 8px Nunito';
      ctx.textAlign = 'center';
      ctx.fillText(i < 2 ? `P${i === 0 ? '91' : '95'}` : 'DSL', px, py + 13);

      // Pump screen and hose.
      ctx.fillStyle = 'rgba(214, 236, 248, 0.9)';
      ctx.fillRect(px - 10, py + 22, 20, 11);
      ctx.strokeStyle = i < 2 ? 'rgba(96, 80, 42, 0.9)' : 'rgba(42, 84, 50, 0.9)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(px + 19, py + 14);
      ctx.quadraticCurveTo(px + 31, py + 18, px + 24, py + 40);
      ctx.stroke();
    });

    // Overhead fuel-type signs.
    ctx.fillStyle = 'rgba(44, 40, 34, 0.86)';
    ctx.fillRect(w * 0.24, h * 0.61, 190, 16);
    ctx.fillRect(w * 0.56, h * 0.61, 128, 16);
    ctx.fillStyle = 'rgba(255, 232, 182, 0.95)';
    ctx.font = '700 10px Nunito';
    ctx.textAlign = 'center';
    ctx.fillText('PETROL BAYS', w * 0.24 + 95, h * 0.622);
    ctx.fillText('DIESEL BAY', w * 0.56 + 64, h * 0.622);

    // EV fast charger bay.
    const evX = w * 0.81;
    const evY = h * 0.67;
    ctx.fillStyle = 'rgba(64, 86, 104, 0.86)';
    ctx.fillRect(evX, evY, 24, 42);
    ctx.fillStyle = 'rgba(124, 242, 188, 0.66)';
    ctx.fillRect(evX + 4, evY + 5, 16, 10);
    ctx.fillStyle = 'rgba(14, 24, 20, 0.84)';
    ctx.font = '700 9px Nunito';
    ctx.fillText('EV', evX + 12, evY + 13);
    ctx.strokeStyle = 'rgba(30, 44, 34, 0.74)';
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.moveTo(evX + 22, evY + 16);
    ctx.quadraticCurveTo(evX + 34, evY + 22, evX + 26, evY + 36);
    ctx.stroke();

    // Price board and offers board.
    const boardX = w * 0.08;
    const boardY = h * 0.54;
    ctx.fillStyle = 'rgba(72, 82, 94, 0.9)';
    ctx.fillRect(boardX, boardY, 44, 88);
    ctx.fillStyle = 'rgba(236, 250, 255, 0.9)';
    ctx.font = '700 8px Nunito';
    ctx.textAlign = 'left';
    ctx.fillText('U91  186.9', boardX + 6, boardY + 16);
    ctx.fillText('P95  201.9', boardX + 6, boardY + 30);
    ctx.fillText('DSL  194.9', boardX + 6, boardY + 44);
    ctx.fillText('EV   FAST', boardX + 6, boardY + 58);

    // Convenience cues: hot food, coffee, groceries, auto essentials, flowers.
    ctx.fillStyle = 'rgba(44, 36, 30, 0.76)';
    ctx.fillRect(storeX + 10, storeY - storeH + 4, 120, 14);
    ctx.fillStyle = 'rgba(255, 224, 164, 0.92)';
    ctx.font = '700 9px Nunito';
    ctx.textAlign = 'left';
    ctx.fillText('HOT PIES | ROLLS | CHIPS', storeX + 14, storeY - storeH + 13);
    ctx.fillText('BARISTA COFFEE', storeX + 146, storeY - storeH + 13);
    ctx.fillText('MILK BREAD EGGS', storeX + 270, storeY - storeH + 13);

    ctx.fillStyle = 'rgba(106, 126, 92, 0.66)';
    ctx.fillRect(storeX + storeW - 62, storeY - 24, 18, 14);
    ctx.fillRect(storeX + storeW - 40, storeY - 24, 18, 14);
    ctx.fillStyle = 'rgba(240, 96, 110, 0.74)';
    ctx.beginPath();
    ctx.arc(storeX + storeW - 53, storeY - 24, 3, 0, Math.PI * 2);
    ctx.arc(storeX + storeW - 31, storeY - 24, 3, 0, Math.PI * 2);
    ctx.fill();

    // Parking bay markers kept sparse to avoid horizontal banding.
    ctx.strokeStyle = 'rgba(236, 224, 172, 0.4)';
    ctx.lineWidth = 1.4;
    for (let i = 0; i < 7; i++) {
      const x = w * (0.22 + i * 0.09);
      ctx.beginPath();
      ctx.moveTo(x, h * 0.76);
      ctx.lineTo(x - 8, h * 0.84);
      ctx.stroke();
    }

    // Parked cars and one moving car in front.
    const parked = [w * 0.3, w * 0.45, w * 0.6];
    parked.forEach((cx, i) => {
      const cy = h * (0.8 + (i % 2) * 0.015);
      ctx.fillStyle = i === 1 ? 'rgba(84, 142, 188, 0.84)' : 'rgba(182, 96, 76, 0.84)';
      ctx.beginPath();
      ctx.moveTo(cx - 22, cy);
      ctx.lineTo(cx + 24, cy);
      ctx.lineTo(cx + 17, cy + 10);
      ctx.lineTo(cx - 18, cy + 10);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = 'rgba(220, 236, 246, 0.62)';
      ctx.fillRect(cx - 6, cy - 6, 14, 5);
      ctx.fillStyle = 'rgba(18, 20, 24, 0.78)';
      ctx.beginPath();
      ctx.arc(cx - 12, cy + 10, 2.8, 0, Math.PI * 2);
      ctx.arc(cx + 13, cy + 10, 2.8, 0, Math.PI * 2);
      ctx.fill();
    });

    const movingX = ((t * 44) % (w + 120)) - 60;
    const movingY = h * 0.86;
    ctx.fillStyle = 'rgba(246, 198, 88, 0.84)';
    ctx.fillRect(movingX - 18, movingY - 6, 36, 11);
    ctx.fillStyle = 'rgba(18, 20, 24, 0.8)';
    ctx.beginPath();
    ctx.arc(movingX - 10, movingY + 5, 2.6, 0, Math.PI * 2);
    ctx.arc(movingX + 10, movingY + 5, 2.6, 0, Math.PI * 2);
    ctx.fill();

    // Light rain to keep atmosphere dynamic.
    for (let i = 0; i < 78; i++) {
      const rx = (i * 29 + t * (68 + (i % 4) * 9)) % (w + 90) - 45;
      const ry = (i * 19 + t * 230) % (h * 0.64 + 60) - 30;
      const len = 10 + (i % 5) * 3;
      ctx.strokeStyle = `rgba(188, 224, 248, ${0.16 + (i % 4) * 0.07})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx - 4, ry + len);
      ctx.stroke();
    }
  }

  function drawCoastlineScene(w, h) {
    const t = performance.now() * 0.001;

    // Sky backdrop with a little more depth so the coastline reads with stronger contrast.
    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.55);
    sky.addColorStop(0, 'rgba(14, 24, 38, 1)');
    sky.addColorStop(0.38, 'rgba(28, 50, 70, 0.98)');
    sky.addColorStop(1, 'rgba(66, 96, 122, 0.92)');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h * 0.55);

    // Distant coastal hills and headland silhouettes. Keep them rounded, not triangular.
    const hillLayers = [
      { y: 0.438, fill: 'rgba(28, 49, 69, 0.56)', amp: 0.022, freq: 4.2, offset: 0.3 },
      { y: 0.468, fill: 'rgba(48, 77, 98, 0.7)', amp: 0.03, freq: 5.5, offset: 1.2 },
      { y: 0.503, fill: 'rgba(68, 98, 122, 0.8)', amp: 0.034, freq: 6.5, offset: 2.1 }
    ];
    hillLayers.forEach((hill, layerIndex) => {
      ctx.fillStyle = hill.fill;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.58);
      for (let x = 0; x <= w; x += 24) {
        const nx = x / w;
        const roll = Math.sin(nx * Math.PI * 2 * hill.freq + hill.offset) * hill.amp;
        const roll2 = Math.sin(nx * Math.PI * 2 * (hill.freq * 0.5) + hill.offset * 1.9) * (hill.amp * 0.52);
        const broad = Math.cos(nx * Math.PI * 2 * (2.1 + layerIndex * 0.3) - 0.4) * (0.01 + layerIndex * 0.003);
        ctx.lineTo(x, h * (hill.y + roll + roll2 + broad));
      }
      ctx.lineTo(w, h * 0.58);
      ctx.closePath();
      ctx.fill();
    });

    // Bright sea crest as scattered glints instead of a continuous line.
    for (let i = 0; i < 80; i++) {
      const nx = i / 79;
      const x = nx * w;
      const y = h * (0.467 + Math.sin(nx * Math.PI * 4.5 + 0.5) * 0.016 + Math.sin(nx * Math.PI * 9 + 1.3) * 0.008);
      const r = 1.1 + (i % 3) * 0.55;
      ctx.fillStyle = `rgba(198, 222, 234, ${0.2 + (i % 4) * 0.08})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Sea band
    const sea = ctx.createLinearGradient(0, h * .42, 0, h * .7);
    sea.addColorStop(0, 'rgba(60, 140, 192, .3)');
    sea.addColorStop(0.55, 'rgba(24, 92, 146, .48)');
    sea.addColorStop(1, 'rgba(8, 54, 96, .66)');
    ctx.fillStyle = sea;
    ctx.fillRect(0, h * .42, w, h * .28);

    // Sandy shoreline foreground so the lane reads as beach, not open water.
    const shoreTop = h * 0.66;
    const shoreBottom = h * 0.96;
    const sand = ctx.createLinearGradient(0, shoreTop, 0, shoreBottom);
    sand.addColorStop(0, 'rgba(162, 134, 96, 0.28)');
    sand.addColorStop(0.2, 'rgba(196, 163, 112, 0.48)');
    sand.addColorStop(0.55, 'rgba(229, 194, 130, 0.6)');
    sand.addColorStop(1, 'rgba(118, 88, 56, 0.84)');
    ctx.fillStyle = sand;
    ctx.beginPath();
    ctx.moveTo(0, shoreTop + Math.sin(t * 0.8) * 2);
    for (let x = 0; x <= w; x += 18) {
      const nx = x / w;
      const dune = Math.sin(nx * 7.8 + t * 0.35) * 6 + Math.sin(nx * 18.5 + 1.8) * 2.8;
      ctx.lineTo(x, shoreTop + dune);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // Main running beach path highlight so gameplay lane reads as dry sand.
    const beachPath = ctx.createLinearGradient(0, h * 0.7, 0, h * 0.9);
    beachPath.addColorStop(0, 'rgba(249, 226, 171, 0.18)');
    beachPath.addColorStop(0.5, 'rgba(231, 197, 135, 0.32)');
    beachPath.addColorStop(1, 'rgba(148, 109, 66, 0.1)');
    ctx.fillStyle = beachPath;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.79, w * 0.44, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();

    // Wet-sand sheen band right at the water edge.
    const wetSand = ctx.createLinearGradient(0, h * 0.64, 0, h * 0.74);
    wetSand.addColorStop(0, 'rgba(236, 220, 166, 0.06)');
    wetSand.addColorStop(0.5, 'rgba(222, 192, 136, 0.28)');
    wetSand.addColorStop(1, 'rgba(104, 94, 74, 0)');
    ctx.fillStyle = wetSand;
    ctx.fillRect(0, h * 0.64, w, h * 0.12);

    // Sand grain speckles for texture.
    for (let i = 0; i < 140; i++) {
      const x = (i * 53) % w;
      const y = h * (0.71 + (i % 28) * 0.009);
      const r = 0.8 + (i % 3) * 0.5;
      ctx.fillStyle = `rgba(132, 112, 84, ${0.08 + (i % 4) * 0.03})`;
      ctx.beginPath();
      ctx.arc(x + Math.sin(i * 0.7) * 2, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Surf foam as broken flecks so it reads less like horizontal strokes.
    for (let i = 0; i < 120; i++) {
      const band = i % 5;
      const phase = (i * 19.3) % w;
      const drift = (t * (10 + band * 2)) % (w + 60);
      const x = (phase + drift) % (w + 40) - 20;
      const y = h * (0.48 + band * 0.05) + Math.sin(t * 1.6 + i * 0.35) * 4;
      const rx = 2.2 + (i % 3) * 0.9;
      const ry = 0.8 + (i % 2) * 0.35;
      ctx.fillStyle = `rgba(232, 249, 255, ${0.18 + (i % 4) * 0.08})`;
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, Math.sin(i * 0.8) * 0.3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Rainfall across full scene.
    for (let i = 0; i < 180; i++) {
      const seed = i * 37.7;
      const baseX = (seed * 19 + t * 170 + Math.sin(seed * 0.13) * 24) % (w + 90) - 45;
      const baseY = (seed * 13 + t * 340 + Math.cos(seed * 0.17) * 18) % (h + 80) - 40;
      const drift = -5 - Math.sin(seed * 0.31) * 2.3;
      const len = 9 + (i % 6) * 2.1 + Math.sin(seed * 0.2) * 1.6;
      const angle = -0.18 + Math.sin(seed * 0.11) * 0.06;
      const alpha = 0.08 + (i % 7) * 0.03;
      ctx.strokeStyle = `rgba(190, 228, 255, ${alpha})`;
      ctx.lineWidth = 0.9 + (i % 3) * 0.25;
      ctx.beginPath();
      ctx.moveTo(baseX, baseY);
      ctx.lineTo(baseX + drift + Math.cos(angle) * 0.7, baseY + len + Math.sin(angle) * 0.7);
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
    ctx.fillStyle = 'rgba(104, 84, 60, .5)';
    for (let i = 0; i < 50; i++) {
      const x = w * (i / 50) + Math.sin(i * 0.7) * 2;
      const y = h * (0.75 + (i % 4) * 0.025);
      ctx.beginPath();
      ctx.ellipse(x, y, 2 + (i % 2), 1.2, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(84, 104, 60, .56)';
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
    ctx.fillStyle = 'rgba(246, 236, 208, 0.74)';
    ctx.fillRect(w * 0.78, h * 0.24, 15, h * 0.24);
    ctx.fillStyle = 'rgba(214, 194, 156, 0.66)';
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
    coastBeam.addColorStop(0.5, 'rgba(255, 248, 214, 0.42)');
    coastBeam.addColorStop(1, 'rgba(255, 248, 214, 0)');
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
    ctx.fillStyle = 'rgba(74, 55, 40, .56)';
    for (let i = 0; i < 5; i++) {
      const x = w * (0.12 + i * 0.035);
      ctx.fillRect(x, h * 0.6, 8, h * 0.12);
    }
    ctx.fillRect(w * 0.1, h * 0.58, w * 0.19, 10);

    // Moving boats on the waterline.
    for (let i = 0; i < 3; i++) {
      const drift = t * (0.5 + i * 0.08);
      const boatX = (w * (0.18 + i * 0.27) + drift * 72) % (w + 110) - 55;
      const boatY = h * (0.505 + i * 0.03) + Math.sin(t * 1.1 + i * 1.7) * 2.4;
      const bob = Math.sin(t * 1.6 + i * 2.2) * 1.5;
      const hullW = 38 + i * 6;
      const hullH = 10 + (i % 2);
      ctx.fillStyle = i === 1 ? 'rgba(92, 70, 50, .62)' : 'rgba(76, 59, 44, .68)';
      ctx.beginPath();
      ctx.moveTo(boatX - hullW * 0.55, boatY);
      ctx.lineTo(boatX + hullW * 0.42, boatY);
      ctx.lineTo(boatX + hullW * 0.28, boatY + hullH);
      ctx.lineTo(boatX - hullW * 0.38, boatY + hullH);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = 'rgba(238, 246, 252, .5)';
      ctx.beginPath();
      ctx.moveTo(boatX - hullW * 0.1, boatY - 1);
      ctx.lineTo(boatX - hullW * 0.1, boatY - 23 - bob);
      ctx.lineTo(boatX + hullW * 0.28, boatY - 11 - bob);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = 'rgba(240, 248, 252, .38)';
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.moveTo(boatX - hullW * 0.5, boatY + hullH + 1);
      ctx.quadraticCurveTo(boatX, boatY + hullH + 5, boatX + hullW * 0.42, boatY + hullH + 1);
      ctx.stroke();
      ctx.fillStyle = 'rgba(180, 212, 224, .18)';
      ctx.fillRect(boatX - hullW * 0.62, boatY + hullH + 1, hullW * 1.18, 2);
    }

    // Shark silhouettes just under the water surface.
    for (let i = 0; i < 2; i++) {
      const swim = t * (0.36 + i * 0.08) + i * 1.8;
      const sharkX = (w * (0.24 + i * 0.34) + swim * 88) % (w + 140) - 70;
      const sharkY = h * (0.61 + i * 0.04) + Math.sin(swim * 1.4) * 4;
      const bodyW = 44 + i * 8;
      const bodyH = 12 + i * 2;
      ctx.save();
      ctx.globalAlpha = 0.28;
      ctx.fillStyle = 'rgba(28, 36, 46, 1)';
      ctx.beginPath();
      ctx.ellipse(sharkX, sharkY, bodyW * 0.5, bodyH * 0.55, -0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(sharkX - bodyW * 0.1, sharkY - bodyH * 0.55);
      ctx.lineTo(sharkX + bodyW * 0.02, sharkY - bodyH * 1.35);
      ctx.lineTo(sharkX + bodyW * 0.14, sharkY - bodyH * 0.55);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(sharkX - bodyW * 0.46, sharkY + bodyH * 0.02);
      ctx.lineTo(sharkX - bodyW * 0.62, sharkY + bodyH * 0.42);
      ctx.lineTo(sharkX - bodyW * 0.48, sharkY - bodyH * 0.18);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
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

  function drawMangrovesScene(w, h, act) {
    const t = performance.now() * 0.001;

    const swampSky = ctx.createLinearGradient(0, 0, 0, h * 0.7);
    swampSky.addColorStop(0, 'rgba(20, 46, 40, 0.95)');
    swampSky.addColorStop(0.5, 'rgba(34, 78, 66, 0.9)');
    swampSky.addColorStop(1, 'rgba(18, 52, 44, 0.55)');
    ctx.fillStyle = swampSky;
    ctx.fillRect(0, 0, w, h * 0.72);

    const waterGrad = ctx.createLinearGradient(0, h * 0.54, 0, h);
    waterGrad.addColorStop(0, 'rgba(18, 64, 58, 0.42)');
    waterGrad.addColorStop(1, 'rgba(10, 30, 28, 0.86)');
    ctx.fillStyle = waterGrad;
    ctx.fillRect(0, h * 0.54, w, h * 0.46);

    // Patchy reflections to keep water alive without synthetic horizontal bands.
    for (let i = 0; i < 10; i += 1) {
      const px = w * (0.08 + ((i * 0.17) % 0.84)) + Math.sin(t * (0.35 + i * 0.03) + i) * 18;
      const py = h * (0.6 + ((i * 0.041) % 0.3)) + Math.cos(t * (0.9 + i * 0.04) + i * 0.8) * 6;
      const pw = 42 + (i % 4) * 24;
      const ph = 4 + (i % 3) * 2;
      ctx.fillStyle = `rgba(118, 198, 164, ${0.05 + (i % 4) * 0.02})`;
      ctx.beginPath();
      ctx.ellipse(px, py, pw, ph, Math.sin(i * 1.7) * 0.08, 0, Math.PI * 2);
      ctx.fill();
    }

    // Dense mangrove belt: high tree count for a full forest read.
    const mangroveTreeCount = 34;
    for (let tree = 0; tree < mangroveTreeCount; tree += 1) {
      const depth = tree / mangroveTreeCount;
      const tx = w * (0.01 + depth * 0.98) + Math.sin(tree * 2.1) * 8;
      const baseY = h * (0.67 + (tree % 3) * 0.02);
      const topY = h * (0.36 + (tree % 4) * 0.035);
      const lean = Math.sin(t * 0.4 + tree * 0.8) * (3 + (1 - depth) * 4);

      // Main trunk.
      ctx.strokeStyle = 'rgba(58, 40, 30, 0.64)';
      ctx.lineWidth = 3.2 + (1 - depth) * 2.2;
      ctx.beginPath();
      ctx.moveTo(tx, baseY);
      ctx.bezierCurveTo(tx + lean * 0.25, h * 0.56, tx + lean * 0.75, h * 0.46, tx + lean, topY);
      ctx.stroke();

      // Short branch hints so they read as trees, not poles.
      ctx.strokeStyle = 'rgba(68, 48, 36, 0.38)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(tx + lean * 0.7, topY + 10);
      ctx.lineTo(tx + lean * 0.7 - 10, topY + 4);
      ctx.moveTo(tx + lean * 0.7, topY + 16);
      ctx.lineTo(tx + lean * 0.7 + 12, topY + 10);
      ctx.stroke();

      // Canopy clumps.
      const crownX = tx + lean;
      const crownY = topY - 4;
      ctx.fillStyle = 'rgba(42, 96, 70, 0.48)';
      ctx.beginPath();
      ctx.arc(crownX - 12, crownY + 5, 12, 0, Math.PI * 2);
      ctx.arc(crownX + 10, crownY + 4, 11, 0, Math.PI * 2);
      ctx.arc(crownX, crownY - 6, 13, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(66, 126, 92, 0.28)';
      ctx.beginPath();
      ctx.arc(crownX - 6, crownY - 4, 7, 0, Math.PI * 2);
      ctx.arc(crownX + 7, crownY - 2, 6, 0, Math.PI * 2);
      ctx.fill();

      // Subtle mangrove roots near waterline (reduced visual dominance).
      ctx.strokeStyle = 'rgba(86, 60, 44, 0.26)';
      ctx.lineWidth = 1.2;
      for (let r = 0; r < 2; r += 1) {
        const rootY = baseY - r * 5;
        const spread = 14 + r * 6;
        ctx.beginPath();
        ctx.moveTo(tx, rootY);
        ctx.quadraticCurveTo(tx - spread * 0.45, rootY + 5, tx - spread, rootY + 12 + r * 2);
        ctx.moveTo(tx, rootY);
        ctx.quadraticCurveTo(tx + spread * 0.45, rootY + 5, tx + spread, rootY + 12 + r * 2);
        ctx.stroke();
      }
    }

    // Drifting leaves and insects (reduced density to avoid noisy look).
    for (let i = 0; i < 46; i += 1) {
      const speed = 10 + (i % 7) * 2.5;
      const x = ((t * speed + i * 47) % (w + 120)) - 60;
      const y = h * (0.18 + (i / 46) * 0.68) + Math.sin(t * 1.5 + i * 0.5) * 6;
      const size = 1.4 + (i % 3) * 0.8;
      ctx.fillStyle = i % 5 === 0
        ? `rgba(214, 242, 145, ${0.11 + (i % 4) * 0.03})`
        : `rgba(122, 198, 112, ${0.1 + (i % 4) * 0.04})`;
      ctx.beginPath();
      ctx.ellipse(x, y, size, size * 1.5, Math.sin(t + i), 0, Math.PI * 2);
      ctx.fill();
    }

    // Croc-like silhouette glide for scene identity.
    const crocX = ((t * (22 + act.index * 4)) % (w + 180)) - 90;
    const crocY = h * 0.78 + Math.sin(t * 1.7) * 2;
    ctx.fillStyle = 'rgba(26, 42, 28, 0.58)';
    ctx.beginPath();
    ctx.ellipse(crocX, crocY, 42, 11, 0.06, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(crocX + 42, crocY);
    ctx.lineTo(crocX + 58, crocY - 5);
    ctx.lineTo(crocX + 58, crocY + 5);
    ctx.closePath();
    ctx.fill();
  }

  function drawBlueMountainsScene(w, h, act) {
    const t = performance.now() * 0.001;

    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.72);
    sky.addColorStop(0, 'rgba(96, 132, 176, 0.96)');
    sky.addColorStop(0.42, 'rgba(118, 152, 188, 0.92)');
    sky.addColorStop(1, 'rgba(86, 116, 150, 0.54)');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h * 0.72);

    const sunwash = ctx.createRadialGradient(w * 0.64, h * 0.16, 12, w * 0.64, h * 0.16, h * 0.34);
    sunwash.addColorStop(0, 'rgba(255, 246, 214, 0.22)');
    sunwash.addColorStop(0.5, 'rgba(233, 241, 255, 0.14)');
    sunwash.addColorStop(1, 'rgba(233, 241, 255, 0)');
    ctx.fillStyle = sunwash;
    ctx.fillRect(0, 0, w, h * 0.62);

    // Soft cloud atmosphere: broad haze veils and diffuse masses, avoiding distinct blob edges.
    const upperHaze = ctx.createLinearGradient(0, h * 0.12, 0, h * 0.52);
    upperHaze.addColorStop(0, 'rgba(228, 238, 250, 0.08)');
    upperHaze.addColorStop(0.5, 'rgba(220, 232, 246, 0.05)');
    upperHaze.addColorStop(1, 'rgba(220, 232, 246, 0)');
    ctx.fillStyle = upperHaze;
    ctx.fillRect(0, h * 0.1, w, h * 0.44);

    // Nimbus field: irregular cloud banks (no radial/elliptical bodies).
    const drawNimbusBank = (cx, cy, width, height, alpha, seed) => {
      const seg = 16;
      ctx.save();
      ctx.filter = 'blur(12px)';
      ctx.beginPath();
      for (let i = 0; i <= seg; i++) {
        const nx = i / seg;
        const x = cx - width * 0.5 + nx * width;
        const ridge = octaveNoise(nx * 4.2 + seed, seed * 0.8 + t * 0.03);
        const bulge = Math.sin(nx * Math.PI) * 0.18;
        const y = cy - height * (0.42 + bulge + ridge * 0.14);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = seg; i >= 0; i--) {
        const nx = i / seg;
        const x = cx - width * 0.5 + nx * width;
        const base = octaveNoise(nx * 3.6 + seed * 1.7, seed * 0.5 + t * 0.026);
        const y = cy + height * (0.26 + base * 0.12);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      const grad = ctx.createLinearGradient(cx, cy - height * 0.7, cx, cy + height * 0.5);
      grad.addColorStop(0, `rgba(238, 246, 255, ${alpha})`);
      grad.addColorStop(0.55, `rgba(232, 242, 254, ${alpha * 0.7})`);
      grad.addColorStop(1, 'rgba(232, 242, 254, 0)');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    };

    const nimbusBands = [
      { y: 0.25, alpha: 0.1, width: 300, height: 68, count: 3, drift: 3.2, seed: 11.2 },
      { y: 0.32, alpha: 0.085, width: 360, height: 78, count: 3, drift: 4.1, seed: 19.7 },
      { y: 0.39, alpha: 0.07, width: 420, height: 86, count: 2, drift: 2.4, seed: 27.1 }
    ];
    nimbusBands.forEach((band, bandIndex) => {
      for (let i = 0; i < band.count; i++) {
        const anchor = (i + 0.5) / band.count;
        const cx = (anchor * w + Math.sin(t * 0.04 + i * 1.2 + bandIndex) * 74 + t * band.drift + i * 38) % (w + 340) - 170;
        const cy = h * (band.y + Math.sin(i * 0.8 + band.seed) * 0.012);
        const widthJitter = band.width * (0.88 + ((i + bandIndex) % 3) * 0.09);
        const heightJitter = band.height * (0.9 + ((i + bandIndex * 2) % 3) * 0.08);
        drawNimbusBank(cx, cy, widthJitter, heightJitter, band.alpha, band.seed + i * 0.8);
      }
    });

    // Gentle low cloud shelf above ridges.
    const valleyMist = ctx.createLinearGradient(0, h * 0.46, 0, h * 0.7);
    valleyMist.addColorStop(0, 'rgba(220, 232, 246, 0)');
    valleyMist.addColorStop(0.6, 'rgba(214, 226, 240, 0.08)');
    valleyMist.addColorStop(1, 'rgba(214, 226, 240, 0.02)');
    ctx.fillStyle = valleyMist;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.5);
    for (let x = 0; x <= w; x += 28) {
      const nx = x / w;
      const y = h * (0.505 + octaveNoise(nx * 2.7 + 10.6, 3.9) * 0.02);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h * 0.7);
    ctx.lineTo(0, h * 0.7);
    ctx.closePath();
    ctx.fill();

    // Brown foothills in front, so the range doesn't read as only blue slabs.
    ctx.fillStyle = 'rgba(136, 108, 84, 0.6)';
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += 16) {
      const nx = x / w;
      const roll = Math.sin(nx * 5.6 + 0.7) * 11 + Math.cos(nx * 10.8 + 0.2) * 5;
      ctx.lineTo(x, h * 0.7 + roll);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Tasmania-style mountain massing: layered silhouettes, not horizontal string lines.
    const mountainLayers = [
      { baseY: 0.74, amp: 0.11, detail: 0.028, alpha: 0.62, color: [104, 132, 164], seedX: 10.4, seedY: 6.8 },
      { baseY: 0.69, amp: 0.14, detail: 0.036, alpha: 0.76, color: [122, 148, 180], seedX: 22.9, seedY: 12.6 },
      { baseY: 0.64, amp: 0.17, detail: 0.045, alpha: 0.88, color: [144, 170, 198], seedX: 35.1, seedY: 18.4 }
    ];

    mountainLayers.forEach((layer, index) => {
      ctx.fillStyle = `rgba(${layer.color[0]}, ${layer.color[1]}, ${layer.color[2]}, ${layer.alpha})`;
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 10) {
        const nx = x / w;
        const primary = Math.abs(octaveNoise(nx * 2.7 + layer.seedX, layer.seedY));
        const sharp = Math.pow(primary, 1.75);
        const jag = Math.abs(octaveNoise(nx * 8.1 + layer.seedX * 1.5, layer.seedY * 0.92));
        const crag = (jag - 0.5) * layer.detail;
        const y = h * (layer.baseY - sharp * (layer.amp * 1.28) + crag);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();

      // Slight snow cap speckles on higher ridges (patchy, not horizontal bands).
      const snowCount = index < 2 ? 42 : 58;
      for (let i = 0; i < snowCount; i++) {
        const nx = i / (snowCount - 1);
        const ridge = Math.abs(octaveNoise(nx * 2.7 + layer.seedX, layer.seedY));
        const micro = octaveNoise(nx * 9.2 + layer.seedX * 1.8, layer.seedY * 0.7);
        const y = h * (layer.baseY - ridge * layer.amp + micro * layer.detail) - (index < 2 ? 8 : 10);
        const x = nx * w + Math.sin(t * 0.24 + i) * 1.4;
        const rx = 1.2 + (i % 3) * 0.55;
        const ry = 0.9 + (i % 2) * 0.4;
        ctx.fillStyle = index < 2 ? 'rgba(238, 246, 252, 0.42)' : 'rgba(244, 250, 255, 0.58)';
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Light mountain snowfall for subtle movement.
    for (let i = 0; i < 95; i++) {
      const seed = i * 23.1;
      const x = (seed * 29 + t * (8 + (i % 4) * 2.2)) % (w + 40) - 20;
      const y = (seed * 17 + t * (20 + (i % 3) * 4.6)) % (h * 0.78 + 40) - 20;
      const r = 0.7 + (i % 3) * 0.45;
      ctx.fillStyle = `rgba(236, 246, 255, ${0.12 + (i % 4) * 0.06})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Mid-ground stony pathways to make the central running area read as traversable mountain track.
    const pathCenterY = h * 0.76;
    const pathGrad = ctx.createLinearGradient(0, pathCenterY - 22, 0, h * 0.9);
    pathGrad.addColorStop(0, 'rgba(184, 170, 146, 0.2)');
    pathGrad.addColorStop(1, 'rgba(124, 108, 90, 0.34)');
    ctx.fillStyle = pathGrad;
    ctx.beginPath();
    ctx.moveTo(w * 0.18, pathCenterY + 12);
    ctx.bezierCurveTo(w * 0.3, pathCenterY - 18, w * 0.42, pathCenterY - 8, w * 0.5, pathCenterY + 4);
    ctx.bezierCurveTo(w * 0.58, pathCenterY + 16, w * 0.68, pathCenterY + 10, w * 0.82, pathCenterY - 4);
    ctx.lineTo(w * 0.82, pathCenterY + 26);
    ctx.bezierCurveTo(w * 0.68, pathCenterY + 38, w * 0.57, pathCenterY + 42, w * 0.5, pathCenterY + 32);
    ctx.bezierCurveTo(w * 0.43, pathCenterY + 24, w * 0.3, pathCenterY + 34, w * 0.18, pathCenterY + 42);
    ctx.closePath();
    ctx.fill();

    for (let i = 0; i < 95; i++) {
      const px = w * (0.2 + ((i * 17) % 60) / 100) + Math.sin(i * 0.6 + t * 0.4) * 3;
      const py = pathCenterY + ((i * 29) % 34) - 4;
      const rw = 2.2 + (i % 4) * 1.1;
      const rh = 1.2 + (i % 3) * 0.6;
      ctx.fillStyle = `rgba(${118 + (i % 3) * 10}, ${106 + (i % 3) * 9}, ${92 + (i % 2) * 8}, ${0.18 + (i % 4) * 0.06})`;
      ctx.beginPath();
      ctx.ellipse(px, py, rw, rh, (i % 5) * 0.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Viewpoint lookout tower with tiny people silhouettes.
    const towerX = w * 0.22;
    const towerBaseY = h * 0.69;
    const towerTopY = h * 0.56;
    ctx.strokeStyle = 'rgba(72, 60, 52, 0.62)';
    ctx.lineWidth = 2.3;
    ctx.beginPath();
    ctx.moveTo(towerX - 9, towerBaseY);
    ctx.lineTo(towerX - 3, towerTopY);
    ctx.moveTo(towerX + 9, towerBaseY);
    ctx.lineTo(towerX + 3, towerTopY);
    ctx.moveTo(towerX - 4, towerBaseY);
    ctx.lineTo(towerX + 4, towerBaseY);
    ctx.stroke();

    ctx.fillStyle = 'rgba(92, 78, 64, 0.72)';
    ctx.fillRect(towerX - 18, towerTopY - 8, 36, 10);
    ctx.strokeStyle = 'rgba(210, 222, 238, 0.45)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(towerX - 18, towerTopY - 8);
    ctx.lineTo(towerX + 18, towerTopY - 8);
    ctx.stroke();

    const watchers = [-10, -2, 7];
    watchers.forEach((dx, i) => {
      const px = towerX + dx;
      const py = towerTopY - 9;
      ctx.fillStyle = 'rgba(28, 30, 36, 0.72)';
      ctx.beginPath();
      ctx.arc(px, py - 5, 1.7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(px - 1.2, py - 3.6, 2.4, 4.8);
      ctx.strokeStyle = i === 1 ? 'rgba(250, 226, 168, 0.62)' : 'rgba(172, 188, 214, 0.42)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(px, py - 2);
      ctx.lineTo(px + (i === 1 ? 6 : 4), py - 3.6);
      ctx.stroke();
    });

    // Tourist strip: large hotels/restaurants near the lookout to sell the destination vibe.
    const stripY = h * 0.63;
    const hotels = [
      { x: w * 0.6, y: stripY, bw: 118, bh: 62, tone: 'rgba(112, 104, 98, 0.72)', roof: 'rgba(86, 78, 74, 0.74)', sign: 'HOTEL' },
      { x: w * 0.74, y: stripY + 6, bw: 132, bh: 56, tone: 'rgba(124, 114, 106, 0.74)', roof: 'rgba(92, 82, 76, 0.76)', sign: 'RESTAURANT' }
    ];

    hotels.forEach((b, idx) => {
      // Building shell.
      ctx.fillStyle = b.tone;
      ctx.fillRect(b.x, b.y - b.bh, b.bw, b.bh);

      // Roof and terrace lip.
      ctx.fillStyle = b.roof;
      ctx.fillRect(b.x - 5, b.y - b.bh - 8, b.bw + 10, 10);
      ctx.fillStyle = 'rgba(78, 68, 62, 0.58)';
      ctx.fillRect(b.x, b.y - b.bh + 2, b.bw, 4);

      // Window rows.
      const cols = idx === 0 ? 5 : 6;
      const rows = 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const wx = b.x + 12 + c * ((b.bw - 24) / (cols - 1));
          const wy = b.y - b.bh + 12 + r * 18;
          ctx.fillStyle = 'rgba(216, 230, 244, 0.44)';
          ctx.fillRect(wx - 5, wy - 4, 10, 8);
        }
      }

      // Entrance block.
      const doorX = b.x + b.bw * 0.46;
      ctx.fillStyle = 'rgba(54, 52, 56, 0.62)';
      ctx.fillRect(doorX, b.y - 18, 14, 18);

      // Signboard.
      ctx.fillStyle = 'rgba(52, 44, 40, 0.78)';
      ctx.fillRect(b.x + b.bw * 0.24, b.y - b.bh - 18, b.bw * 0.52, 10);
      ctx.fillStyle = 'rgba(252, 224, 154, 0.85)';
      ctx.font = '700 8px Nunito';
      ctx.textAlign = 'center';
      ctx.fillText(b.sign, b.x + b.bw * 0.5, b.y - b.bh - 10);
    });

    // Forecourt and parked/rolling cars to emphasize tourism traffic.
    ctx.fillStyle = 'rgba(104, 98, 92, 0.34)';
    ctx.fillRect(w * 0.56, stripY + 5, w * 0.36, 16);

    for (let i = 0; i < 4; i++) {
      const carX = w * 0.58 + i * 54 + Math.sin(t * 0.7 + i) * 2;
      const carY = stripY + 11 + (i % 2) * 2;
      ctx.fillStyle = i % 2 === 0 ? 'rgba(170, 82, 66, 0.78)' : 'rgba(76, 126, 168, 0.78)';
      ctx.beginPath();
      ctx.moveTo(carX - 14, carY);
      ctx.lineTo(carX + 14, carY);
      ctx.lineTo(carX + 10, carY + 8);
      ctx.lineTo(carX - 12, carY + 8);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = 'rgba(218, 230, 242, 0.58)';
      ctx.fillRect(carX - 6, carY - 4, 12, 4);

      ctx.fillStyle = 'rgba(22, 24, 30, 0.76)';
      ctx.beginPath();
      ctx.arc(carX - 8, carY + 8, 2.2, 0, Math.PI * 2);
      ctx.arc(carX + 8, carY + 8, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    const movingCarX = ((t * 26) % (w * 0.44)) + w * 0.5;
    const movingCarY = stripY + 22;
    ctx.fillStyle = 'rgba(228, 188, 84, 0.8)';
    ctx.fillRect(movingCarX - 11, movingCarY - 6, 22, 9);
    ctx.fillStyle = 'rgba(228, 236, 244, 0.64)';
    ctx.fillRect(movingCarX - 4, movingCarY - 9, 8, 3);
    ctx.fillStyle = 'rgba(20, 20, 24, 0.78)';
    ctx.beginPath();
    ctx.arc(movingCarX - 7, movingCarY + 3, 2.1, 0, Math.PI * 2);
    ctx.arc(movingCarX + 7, movingCarY + 3, 2.1, 0, Math.PI * 2);
    ctx.fill();

    // Diffuse mist pockets to avoid repeating horizontal ribbons.
    for (let i = 0; i < 14; i += 1) {
      const fogX = ((i * 163 + Math.sin(t * 0.13 + i * 0.9) * 190) % (w + 220)) - 110;
      const fogY = h * (0.36 + ((i * 37) % 100) / 300) + Math.cos(t * 0.2 + i * 0.6) * 4;
      const fogW = 80 + (i % 4) * 22;
      const fogH = 18 + (i % 3) * 7;
      const fog = ctx.createRadialGradient(fogX, fogY, 8, fogX, fogY, fogW);
      fog.addColorStop(0, `rgba(214, 228, 242, ${0.08 + (i % 3) * 0.02})`);
      fog.addColorStop(0.6, 'rgba(214, 228, 242, 0.04)');
      fog.addColorStop(1, 'rgba(214, 228, 242, 0)');
      ctx.fillStyle = fog;
      ctx.beginPath();
      ctx.ellipse(fogX, fogY, fogW, fogH, Math.sin(i * 0.8) * 0.22, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawNullarborScene(w, h, act) {
    const t = performance.now() * 0.001;

    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.64);
    sky.addColorStop(0, 'rgba(198, 208, 212, 0.96)');
    sky.addColorStop(0.5, 'rgba(211, 202, 184, 0.9)');
    sky.addColorStop(1, 'rgba(178, 160, 132, 0.54)');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h * 0.68);

    // Far limestone escarpment: mostly flat with subtle breaks.
    ctx.fillStyle = 'rgba(194, 184, 164, 0.56)';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.535);
    for (let x = 0; x <= w; x += 18) {
      const nx = x / w;
      const ridge = Math.sin(nx * 2.8 + 0.4) * 2.4 + Math.cos(nx * 6.2) * 1.1;
      ctx.lineTo(x, h * 0.536 + ridge);
    }
    ctx.lineTo(w, h * 0.64);
    ctx.lineTo(0, h * 0.64);
    ctx.closePath();
    ctx.fill();

    // Broad, treeless limestone plain.
    ctx.fillStyle = 'rgba(140, 122, 96, 0.66)';
    ctx.fillRect(0, h * 0.62, w, h * 0.38);

    // Chalk bands and horizontal bedding lines.
    for (let i = 0; i < 11; i += 1) {
      const y = h * (0.635 + i * 0.029) + Math.sin(t * (0.8 + act.index * 0.11) + i * 0.7) * 1.8;
      ctx.strokeStyle = `rgba(224, 214, 192, ${0.08 + (i % 4) * 0.02})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y + Math.cos(t * 0.7 + i) * 1.1);
      ctx.stroke();
    }

    // Sparse low scrub and sinkhole-like limestone pocks (no trees).
    for (let i = 0; i < 28; i += 1) {
      const px = ((i * 97) % (w + 120)) - 60;
      const py = h * (0.66 + ((i * 37) % 28) / 100) + Math.sin(t * 0.35 + i) * 0.8;
      const r = 2.2 + (i % 3) * 1.1;
      ctx.fillStyle = `rgba(92, 100, 76, ${0.2 + (i % 4) * 0.05})`;
      ctx.beginPath();
      ctx.ellipse(px, py, r * 1.8, r, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(196, 184, 156, 0.24)';
      ctx.lineWidth = 0.9;
      ctx.beginPath();
      ctx.arc(px + r * 0.9, py + r * 0.25, r * 0.7, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Crosswind dust streaks to keep motion alive over open plain.
    for (let i = 0; i < 64; i += 1) {
      const x = ((t * (42 + (i % 6) * 8) + i * 58) % (w + 180)) - 90;
      const y = h * (0.36 + (i / 64) * 0.46) + Math.sin(t * 1.05 + i * 0.4) * 5;
      const len = 16 + (i % 4) * 6;
      ctx.strokeStyle = `rgba(236, 216, 178, ${0.07 + (i % 4) * 0.035})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x - len, y);
      ctx.lineTo(x + len, y + 1.2);
      ctx.stroke();
    }

    // Heat-haze bands near horizon.
    for (let i = 0; i < 4; i += 1) {
      const hazeY = h * (0.57 + i * 0.022) + Math.sin(t * 0.5 + i) * 1.1;
      const haze = ctx.createLinearGradient(0, hazeY - 3, 0, hazeY + 3);
      haze.addColorStop(0, 'rgba(235, 222, 198, 0)');
      haze.addColorStop(0.5, `rgba(235, 222, 198, ${0.13 - i * 0.02})`);
      haze.addColorStop(1, 'rgba(235, 222, 198, 0)');
      ctx.fillStyle = haze;
      ctx.fillRect(0, hazeY - 3, w, 6);
    }
  }

  function drawObservatoryScene(w, h, act) {
    const t = performance.now() * 0.001;

    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.7);
    sky.addColorStop(0, 'rgba(6, 10, 30, 1)');
    sky.addColorStop(0.55, 'rgba(14, 24, 58, 0.9)');
    sky.addColorStop(1, 'rgba(10, 18, 42, 0.45)');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h * 0.74);

    // Constellation drift and twinkling stars.
    for (let i = 0; i < 120; i += 1) {
      const x = (i * 71 + (t * (6 + act.index * 1.5))) % w;
      const y = (i * 43 + (t * 2.5)) % (h * 0.56);
      const r = i % 5 === 0 ? 1.9 : 1.1;
      const a = 0.3 + (Math.sin(t * 1.8 + i * 0.6) + 1) * 0.2;
      ctx.fillStyle = `rgba(196, 214, 255, ${a})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = 'rgba(148, 176, 244, 0.22)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 12; i += 1) {
      const x1 = (i * 97 + t * 9) % w;
      const y1 = (i * 51) % (h * 0.5);
      const x2 = (x1 + 72 + (i % 3) * 24) % w;
      const y2 = (y1 + 36 + (i % 4) * 14) % (h * 0.5);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Rotating dish silhouettes and scanning beams.
    const baseY = h * 0.67;
    for (let i = 0; i < 3; i += 1) {
      const x = w * (0.2 + i * 0.28);
      const rot = Math.sin(t * (0.8 + i * 0.2)) * 0.45;
      ctx.fillStyle = 'rgba(44, 56, 78, 0.72)';
      ctx.fillRect(x - 4, baseY - 38, 8, 38);
      ctx.save();
      ctx.translate(x, baseY - 42);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.ellipse(0, 0, 24, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      const beam = ctx.createLinearGradient(0, 0, 0, -h * 0.4);
      beam.addColorStop(0, 'rgba(158, 186, 255, 0.28)');
      beam.addColorStop(1, 'rgba(158, 186, 255, 0)');
      ctx.fillStyle = beam;
      ctx.beginPath();
      ctx.moveTo(-5, -2);
      ctx.lineTo(5, -2);
      ctx.lineTo(28, -h * 0.36);
      ctx.lineTo(-28, -h * 0.36);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Orbital debris-like particles.
    for (let i = 0; i < 36; i += 1) {
      const orbit = t * (0.8 + (i % 5) * 0.16) + i * 0.7;
      const x = w * 0.5 + Math.cos(orbit) * (80 + (i % 6) * 26);
      const y = h * 0.28 + Math.sin(orbit * 0.9) * (36 + (i % 4) * 14);
      ctx.fillStyle = `rgba(184, 208, 255, ${0.12 + (i % 4) * 0.05})`;
      ctx.beginPath();
      ctx.arc(x, y, 1.2 + (i % 3) * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawTasmaniaScene(w, h) {
    const t = performance.now() * 0.001;
    const vortexX = w * 0.56;
    const vortexY = h * 0.16;

    // Deep night sky base for stronger aurora contrast.
    const nightSky = ctx.createLinearGradient(0, 0, 0, h * 0.62);
    nightSky.addColorStop(0, 'rgba(0, 1, 6, 1)');
    nightSky.addColorStop(0.4, 'rgba(3, 5, 18, 0.98)');
    nightSky.addColorStop(1, 'rgba(12, 18, 46, 0.34)');
    ctx.fillStyle = nightSky;
    ctx.fillRect(0, 0, w, h * 0.62);

    // Moon and sky glow to avoid monochromatic darkness.
    const moonX = w * 0.74;
    const moonY = h * 0.13;
    const moonGlow = ctx.createRadialGradient(moonX, moonY, 8, moonX, moonY, 120);
    moonGlow.addColorStop(0, 'rgba(238, 246, 255, 0.62)');
    moonGlow.addColorStop(0.35, 'rgba(194, 222, 255, 0.26)');
    moonGlow.addColorStop(1, 'rgba(194, 222, 255, 0)');
    ctx.fillStyle = moonGlow;
    ctx.fillRect(moonX - 140, moonY - 140, 280, 280);
    ctx.fillStyle = 'rgba(242, 250, 255, 0.78)';
    ctx.beginPath();
    ctx.arc(moonX, moonY, 10, 0, Math.PI * 2);
    ctx.fill();

    // Star field weighted toward the darker sky outside the aurora vortex.
    for (let i = 0; i < 105; i++) {
      const sx = (i * 157) % w;
      const sy = ((i * 59) % Math.floor(h * 0.5));
      const dx = sx - vortexX;
      const dy = sy - vortexY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const outside = Math.max(0, Math.min(1, (dist - h * 0.18) / (h * 0.42)));
      if (outside < 0.08 && i % 5 !== 0) continue;
      const twinkle = 0.2 + 0.35 * (0.5 + 0.5 * Math.sin(t * 0.9 + i * 0.7));
      const starAlpha = twinkle * (0.2 + outside * 1.35);
      ctx.fillStyle = `rgba(224, 236, 255, ${starAlpha})`;
      ctx.beginPath();
      ctx.arc(sx, sy, 0.75 + (i % 3) * 0.5 + outside * 0.45, 0, Math.PI * 2);
      ctx.fill();
    }

    // Layered mountain ridges with noise for a more natural alpine silhouette.
    const mountainLayers = [
      { baseY: 0.8, amp: 0.085, detail: 0.03, alpha: 0.72, color: [188, 202, 224], speed: 0.018, seedX: 12.3, seedY: 4.2 },
      { baseY: 0.76, amp: 0.11, detail: 0.04, alpha: 0.82, color: [210, 222, 240], speed: 0.024, seedX: 25.7, seedY: 9.5 },
      { baseY: 0.72, amp: 0.14, detail: 0.05, alpha: 0.9, color: [228, 236, 248], speed: 0.03, seedX: 39.1, seedY: 16.8 }
    ];
    mountainLayers.forEach((layer, index) => {
      ctx.fillStyle = `rgba(${layer.color[0]}, ${layer.color[1]}, ${layer.color[2]}, ${layer.alpha})`;
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 10) {
        const nx = x / w;
        // Static ridge profile: no time component so mountains stay fixed.
        const primary = Math.abs(octaveNoise(nx * 2.9 + layer.seedX, layer.seedY));
        const sharp = Math.pow(primary, 1.8);
        const jag = Math.abs(octaveNoise(nx * 8.4 + layer.seedX * 1.7, layer.seedY * 0.9));
        const crag = (jag - 0.5) * layer.detail * 0.9;
        const y = h * (layer.baseY - sharp * (layer.amp * 1.32) + crag);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();

      // Snow cap highlights on upper ridge contours.
      ctx.strokeStyle = index < 2 ? 'rgba(238, 246, 255, 0.38)' : 'rgba(248, 252, 255, 0.56)';
      ctx.lineWidth = index < 2 ? 1.8 : 2.4;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 14) {
        const nx = x / w;
        const ridge = Math.abs(octaveNoise(nx * 2.8 + layer.seedX, t * layer.speed + layer.seedY));
        const micro = octaveNoise(nx * 9.5 + layer.seedX * 1.8, layer.seedY * 0.7 + t * layer.speed * 0.5);
        const y = h * (layer.baseY - ridge * layer.amp + micro * layer.detail + Math.sin(nx * 8 + index) * 0.006);
        const capY = y - (index < 2 ? 8 : 11) + Math.sin(nx * 14 + index) * 1.5;
        if (x === 0) ctx.moveTo(x, capY);
        else ctx.lineTo(x, capY);
      }
      ctx.stroke();

      ctx.fillStyle = index < 2 ? 'rgba(240, 248, 255, 0.14)' : 'rgba(246, 252, 255, 0.2)';
      for (let i = 0; i < 14; i++) {
        const px = (i / 13) * w + Math.sin(i * 0.9 + t * 0.2) * 12;
        const nx = px / w;
        const ridge = Math.abs(octaveNoise(nx * 2.8 + layer.seedX, t * layer.speed + layer.seedY));
        const py = h * (layer.baseY - ridge * layer.amp) - (index < 2 ? 6 : 9);
        ctx.beginPath();
        ctx.ellipse(px, py, 20 + (i % 3) * 6, 6 + (i % 2) * 2, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Aurora australis: natural curtain sheets with subtle ray striations.
    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    const auroraWaves = [
      { baseY: h * 0.13, amp: 24, phase: 0.4, width: 74, color: 'rgba(82, 255, 122, 0.3)' },
      { baseY: h * 0.18, amp: 22, phase: 1.6, width: 70, color: 'rgba(78, 176, 255, 0.3)' },
      { baseY: h * 0.23, amp: 20, phase: 2.8, width: 66, color: 'rgba(255, 110, 232, 0.26)' },
      { baseY: h * 0.28, amp: 18, phase: 3.7, width: 62, color: 'rgba(188, 110, 255, 0.24)' }
    ];

    auroraWaves.forEach((wave, idx) => {
      ctx.save();
      ctx.filter = 'blur(22px)';
      ctx.strokeStyle = wave.color;
      ctx.lineWidth = wave.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      for (let x = -80; x <= w + 80; x += 16) {
        const nx = x / w;
        const y = wave.baseY
          + Math.sin(nx * 4.8 + t * 0.12 + wave.phase) * wave.amp
          + Math.sin(nx * 9.2 + t * 0.08 + idx) * (wave.amp * 0.35)
          + Math.cos(nx * 2.2 + t * 0.06 + idx * 0.7) * (wave.amp * 0.18);
        if (x === -80) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.filter = 'none';
      ctx.restore();
    });

    // Color haze for blending, not structure.
    const haze = [
      { x: w * 0.42, y: h * 0.16, r: w * 0.26, c: 'rgba(82, 255, 122, 0.08)' },
      { x: w * 0.56, y: h * 0.19, r: w * 0.28, c: 'rgba(78, 176, 255, 0.07)' },
      { x: w * 0.68, y: h * 0.21, r: w * 0.22, c: 'rgba(255, 110, 232, 0.07)' },
      { x: w * 0.5, y: h * 0.28, r: w * 0.2, c: 'rgba(188, 110, 255, 0.05)' }
    ];
    haze.forEach((hazeGlow) => {
      const g = ctx.createRadialGradient(hazeGlow.x, hazeGlow.y, 10, hazeGlow.x, hazeGlow.y, hazeGlow.r);
      g.addColorStop(0, hazeGlow.c);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.save();
      ctx.filter = 'blur(18px)';
      ctx.strokeStyle = g;
      ctx.lineWidth = hazeGlow.r * 0.22;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(hazeGlow.x - hazeGlow.r * 0.45, hazeGlow.y);
      ctx.quadraticCurveTo(
        hazeGlow.x,
        hazeGlow.y + Math.sin(t * 0.12 + hazeGlow.x * 0.001) * hazeGlow.r * 0.06,
        hazeGlow.x + hazeGlow.r * 0.45,
        hazeGlow.y + Math.cos(t * 0.1 + hazeGlow.y * 0.001) * hazeGlow.r * 0.05
      );
      ctx.stroke();
      ctx.filter = 'none';
      ctx.restore();
    });
    ctx.restore();

    // Reintroduce bright stars in the dark outer sky after masking.
    for (let i = 0; i < 72; i++) {
      const sx = ((i * 173) % (w + 40)) - 20;
      const sy = ((i * 83) % Math.floor(h * 0.56));
      const dx = sx - vortexX;
      const dy = sy - vortexY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const outside = Math.max(0, Math.min(1, (dist - h * 0.2) / (h * 0.36)));
      if (outside < 0.22) continue;
      const twinkle = 0.28 + 0.34 * (0.5 + 0.5 * Math.sin(t * 1.1 + i * 0.9));
      ctx.fillStyle = `rgba(232, 242, 255, ${twinkle * outside})`;
      ctx.beginPath();
      ctx.arc(sx, sy, 0.8 + (i % 3) * 0.55, 0, Math.PI * 2);
      ctx.fill();
    }

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

    // Foreground broken rock shelf.
    ctx.fillStyle = 'rgba(42, 53, 74, .62)';
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += 22) {
      const nx = x / w;
      const noise = octaveNoise(nx * 9.4 + 22.8, 5.2);
      ctx.lineTo(x, h * (0.9 + noise * 0.035));
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Foreground windblown snow flecks (no full-width lines).
    for (let i = 0; i < 130; i++) {
      const fx = ((t * (10 + (i % 6) * 2) + i * 41) % (w + 90)) - 45;
      const fy = h * (0.74 + (i / 130) * 0.24) + Math.sin(t * 0.9 + i * 0.5) * 2;
      const rx = 1 + (i % 3) * 0.7;
      const ry = 0.5 + (i % 2) * 0.35;
      ctx.fillStyle = `rgba(232, 243, 255, ${0.1 + (i % 4) * 0.05})`;
      ctx.beginPath();
      ctx.ellipse(fx, fy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Round-canopy trees to keep the stylized 2D silhouette language.
    ctx.fillStyle = 'rgba(28, 44, 42, .55)';
    for (let i = 0; i < 5; i++) {
      const x = w * (0.08 + i * 0.18);
      const baseY = h * (0.77 + (i % 2) * 0.025);
      ctx.fillRect(x - 4, baseY - 18, 8, 36);
      ctx.beginPath();
      ctx.arc(x, baseY - 34, 19, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x - 12, baseY - 26, 12, 0, Math.PI * 2);
      ctx.arc(x + 12, baseY - 26, 12, 0, Math.PI * 2);
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
    const isKangaroo = charKey === 'kangaroo';
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

    // Kangaroo tail swish effect
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
    const isKangaroo = charKey === 'kangaroo';
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

  const CHAR_COLORS = globalThis.DawnDashersCharacterColors || {
    emu: { body: '#7a6548', neck: '#8a7558', beak: '#c89040', eye: '#1a0e06', legs: '#6b5438' },
    wombat: { body: '#5a4030', belly: '#7a6050', eye: '#2a1808', nose: '#321a10' },
    echidna: { body: '#483020', spine: '#a08048', nose: '#3a2018', eye: '#180c08' },
    thorny: { body: '#b17845', spine: '#f1c987', nose: '#4a2916', eye: '#1a0e07' },
    dingo: { body: '#c08840', belly: '#e0c070', muzzle: '#d0a058', eye: '#281808' },
    mudcrab: { body: '#8f3f2a', belly: '#cb7a42', claw: '#d68e55', eye: '#2a120a' }
  };

  function drawMudCrabSprite(gait, expression, sliding) {
    const c = CHAR_COLORS.mudcrab;
    const wave = gait * (sliding ? 0.25 : 0.75);
    const bodyY = sliding ? 8 : 0;

    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath();
    ctx.ellipse(0, 30 + bodyY, 18, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Side legs
    ctx.strokeStyle = c.claw;
    ctx.lineWidth = 3;
    for (let i = 0; i < 3; i += 1) {
      const ly = 8 + i * 5 + bodyY;
      ctx.beginPath();
      ctx.moveTo(-6, ly);
      ctx.lineTo(-14 - i * 5, ly + (i % 2 ? 4 : -2) + wave * 2);
      ctx.moveTo(6, ly);
      ctx.lineTo(14 + i * 5, ly + (i % 2 ? -2 : 4) - wave * 2);
      ctx.stroke();
    }

    // Body shell
    ctx.fillStyle = c.body;
    ctx.beginPath();
    ctx.ellipse(0, 10 + bodyY, 15, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = c.belly;
    ctx.beginPath();
    ctx.ellipse(0, 13 + bodyY, 10, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Claws
    const pinch = Math.sin(performance.now() * 0.01) * 4;
    ctx.strokeStyle = c.claw;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-12, 6 + bodyY);
    ctx.lineTo(-22, -2 + bodyY - pinch);
    ctx.moveTo(12, 6 + bodyY);
    ctx.lineTo(22, -2 + bodyY + pinch);
    ctx.stroke();
    ctx.fillStyle = c.claw;
    ctx.beginPath();
    ctx.ellipse(-24, -4 + bodyY - pinch, 5, 3, -0.3, 0, Math.PI * 2);
    ctx.ellipse(24, -4 + bodyY + pinch, 5, 3, 0.3, 0, Math.PI * 2);
    ctx.fill();

    if (!sliding) {
      drawEyeSet(-4, 4 + bodyY, 3.2, expression, c.eye);
      drawEyeSet(4, 4 + bodyY, 3.2, expression, c.eye);
    }
  }

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

  function drawThornySprite(gait, expression, sliding) {
    const c = CHAR_COLORS.thorny || CHAR_COLORS.echidna;
    const crawl = gait * (sliding ? 0.2 : 1);
    const bodyY = sliding ? 10 : 0;

    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath();
    ctx.ellipse(0, 30 + bodyY, 19, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tail
    ctx.strokeStyle = c.body;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(14, 10 + bodyY);
    ctx.quadraticCurveTo(28, 14 + bodyY + crawl * 2, 30, 24 + bodyY);
    ctx.stroke();

    // Body
    ctx.fillStyle = c.body;
    ctx.beginPath();
    ctx.ellipse(0, 10 + bodyY, 17, 12, 0.06, 0, Math.PI * 2);
    ctx.fill();

    // Spiky dorsal silhouette
    ctx.fillStyle = c.spine || '#f1c987';
    for (let i = 0; i < 7; i += 1) {
      const x = -12 + i * 4;
      const peak = 1 + (i % 2 ? 0 : 3);
      ctx.beginPath();
      ctx.moveTo(x - 2, 2 + bodyY);
      ctx.lineTo(x, -7 - peak + bodyY);
      ctx.lineTo(x + 2, 2 + bodyY);
      ctx.closePath();
      ctx.fill();
    }

    // Legs
    ctx.strokeStyle = c.body;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-9, 14 + bodyY); ctx.lineTo(-16, 21 + bodyY + crawl * 1.2);
    ctx.moveTo(-3, 16 + bodyY); ctx.lineTo(-10, 24 + bodyY - crawl * 0.8);
    ctx.moveTo(4, 16 + bodyY);  ctx.lineTo(11, 24 + bodyY + crawl * 0.8);
    ctx.moveTo(10, 14 + bodyY); ctx.lineTo(17, 21 + bodyY - crawl * 1.2);
    ctx.stroke();

    if (!sliding) {
      // Angular head and snout
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.moveTo(-12, 4 + bodyY);
      ctx.lineTo(-21, -1 + bodyY);
      ctx.lineTo(-14, -8 + bodyY);
      ctx.lineTo(-4, -5 + bodyY);
      ctx.closePath();
      ctx.fill();

      // Face spikes
      ctx.fillStyle = c.spine || '#f1c987';
      ctx.beginPath();
      ctx.moveTo(-16, -5 + bodyY);
      ctx.lineTo(-18, -11 + bodyY);
      ctx.lineTo(-13, -7 + bodyY);
      ctx.closePath();
      ctx.fill();

      // Eye and nose
      drawEyeSet(-10, -3 + bodyY, 3.2, expression, c.eye || '#1a0e07');
      ctx.fillStyle = c.nose || '#4a2916';
      ctx.beginPath();
      ctx.ellipse(-20, -1 + bodyY, 1.8, 1.2, 0, 0, Math.PI * 2);
      ctx.fill();
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

  function drawDistinctRunnerSprite(charKey, gait, expression, sliding) {
    const c = CHAR_COLORS[charKey] || CHAR_COLORS.wombat;
    const stride = gait * (sliding ? 0 : 10);
    const bodyY = sliding ? 10 : 0;
    const profileByKey = {
      possum: { bodyRX: 12, bodyRY: 15, headRX: 9, headRY: 8, bodyTilt: -0.06, tail: 'curl', ears: 'point', eyeDX: 3.8, eyeDY: -15 },
      bilby: { bodyRX: 11.5, bodyRY: 15, headRX: 8.5, headRY: 8, bodyTilt: 0.03, tail: 'stub', ears: 'bilby', eyeDX: 3.6, eyeDY: -15.5 },
      quokka: { bodyRX: 12.5, bodyRY: 15.5, headRX: 10.5, headRY: 9, bodyTilt: 0, tail: 'stub', ears: 'round', eyeDX: 4.1, eyeDY: -15 },
      platypus: { bodyRX: 14, bodyRY: 12.5, headRX: 8.5, headRY: 7.2, bodyTilt: 0.08, tail: 'paddle', ears: 'none', eyeDX: 2.9, eyeDY: -13.2 },
      numbat: { bodyRX: 13.5, bodyRY: 13.5, headRX: 8.4, headRY: 7.8, bodyTilt: -0.04, tail: 'brush', ears: 'point', eyeDX: 3.2, eyeDY: -14.4 },
      tasdevil: { bodyRX: 13, bodyRY: 16.5, headRX: 11.5, headRY: 10, bodyTilt: 0.02, tail: 'stub', ears: 'point', eyeDX: 4.6, eyeDY: -16 },
      glider: { bodyRX: 12.5, bodyRY: 14.2, headRX: 8.8, headRY: 8, bodyTilt: -0.02, tail: 'long', ears: 'round', eyeDX: 4.6, eyeDY: -15.3 },
      quoll: { bodyRX: 12, bodyRY: 14.6, headRX: 9.4, headRY: 8.2, bodyTilt: 0.03, tail: 'ring', ears: 'point', eyeDX: 4.1, eyeDY: -15 }
    };
    const p = profileByKey[charKey] || profileByKey.possum;

    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath();
    ctx.ellipse(0, 32 + bodyY, 15 + p.bodyRX * 0.08, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tail silhouette per character.
    if (p.tail !== 'stub') {
      ctx.strokeStyle = c.tail || c.body;
      ctx.lineWidth = p.tail === 'brush' ? 5 : 3.5;
      ctx.beginPath();
      if (p.tail === 'paddle') {
        ctx.moveTo(11, 9 + bodyY);
        ctx.quadraticCurveTo(24, 13 + bodyY - stride * 0.25, 30, 20 + bodyY);
        ctx.stroke();
        ctx.fillStyle = c.tail || c.body;
        ctx.beginPath();
        ctx.ellipse(32, 21 + bodyY, 7, 4, 0.2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        const curl = p.tail === 'curl' ? 5 : p.tail === 'ring' ? 3 : 2;
        ctx.moveTo(10, 10 + bodyY);
        ctx.quadraticCurveTo(24, 16 + bodyY - stride * 0.3, 29 + stride * 0.2, 24 + bodyY + curl);
        ctx.stroke();
      }
    }

    // Legs
    ctx.strokeStyle = c.body;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-7, 14 + bodyY); ctx.lineTo(-7 + stride, 26 + bodyY);
    ctx.moveTo(7, 14 + bodyY);  ctx.lineTo(7 - stride, 26 + bodyY);
    ctx.stroke();

    // Body
    ctx.save();
    ctx.rotate(p.bodyTilt);
    ctx.fillStyle = c.body;
    ctx.beginPath();
    ctx.ellipse(0, 4 + bodyY, p.bodyRX, p.bodyRY, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = c.belly || c.body;
    ctx.beginPath();
    ctx.ellipse(-1, 8 + bodyY, p.bodyRX * 0.58, p.bodyRY * 0.62, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Character motifs.
    if (charKey === 'numbat') {
      ctx.strokeStyle = c.stripe || '#381e08';
      ctx.lineWidth = 2;
      for (let i = 0; i < 6; i += 1) {
        const sy = -4 + i * 4.5 + bodyY;
        ctx.beginPath();
        ctx.moveTo(-11, sy);
        ctx.lineTo(11, sy + 2);
        ctx.stroke();
      }
    }
    if (charKey === 'quoll') {
      ctx.fillStyle = 'rgba(245, 226, 188, 0.82)';
      for (let i = 0; i < 5; i += 1) {
        ctx.beginPath();
        ctx.arc(-8 + i * 4, 2 + bodyY + (i % 2 ? 2 : 0), 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (charKey === 'glider' && !sliding) {
      ctx.fillStyle = 'rgba(210, 188, 168, 0.52)';
      ctx.beginPath();
      ctx.moveTo(-9, -6);
      ctx.lineTo(-18, 6 + bodyY);
      ctx.lineTo(-7, 10 + bodyY);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(9, -6);
      ctx.lineTo(18, 6 + bodyY);
      ctx.lineTo(7, 10 + bodyY);
      ctx.closePath();
      ctx.fill();
    }

    if (!sliding) {
      // Head
      ctx.fillStyle = c.body;
      ctx.beginPath();
      ctx.ellipse(0, -14, p.headRX, p.headRY, 0, 0, Math.PI * 2);
      ctx.fill();

      if (charKey === 'platypus') {
        ctx.fillStyle = c.bill || '#c09048';
        ctx.beginPath();
        ctx.ellipse(-16, -14, 11, 4.5, 0.22, 0, Math.PI * 2);
        ctx.fill();
      }

      if (charKey === 'tasdevil') {
        ctx.fillStyle = c.chest || '#f0e8e0';
        ctx.beginPath();
        ctx.ellipse(0, -8, 8, 11, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      if (p.ears === 'bilby') {
        ctx.fillStyle = c.body;
        ctx.beginPath();
        ctx.ellipse(-8, -26, 4, 14, -0.3, 0, Math.PI * 2);
        ctx.ellipse(6, -26, 3.5, 12, 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = c.ear || '#e8c0b8';
        ctx.beginPath();
        ctx.ellipse(-8, -26, 2, 10, -0.3, 0, Math.PI * 2);
        ctx.ellipse(6, -26, 2, 8, 0.25, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.ears === 'round') {
        ctx.fillStyle = c.ear || c.body;
        ctx.beginPath();
        ctx.ellipse(-9, -21, 5.5, 5.5, 0, 0, Math.PI * 2);
        ctx.ellipse(9, -21, 5.5, 5.5, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.ears === 'point') {
        ctx.fillStyle = c.body;
        ctx.beginPath();
        ctx.moveTo(-6, -21); ctx.lineTo(-10, -29); ctx.lineTo(-2, -23);
        ctx.moveTo(6, -21);  ctx.lineTo(10, -29);  ctx.lineTo(2, -23);
        ctx.fill();
      }

      ctx.fillStyle = c.nose || '#2a1808';
      ctx.beginPath();
      if (charKey === 'platypus') {
        ctx.ellipse(-16, -12, 1.6, 1.1, 0, 0, Math.PI * 2);
      } else {
        ctx.ellipse(0, -10, 3, 2, 0, 0, Math.PI * 2);
      }
      ctx.fill();

      drawEyeSet(-p.eyeDX, p.eyeDY, 3.8, expression, c.eye);
      drawEyeSet(p.eyeDX, p.eyeDY, 3.8, expression, c.eye);

      if (charKey === 'quokka' && expression !== 'hurt') {
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
    } else if (charKey === 'cockatoo' || charKey === 'kookaburra' || charKey === 'ibis' || charKey === 'jabiru' || charKey === 'lyrebird' || charKey === 'eagle' || charKey === 'owl' || charKey === 'cassowary') {
      drawFlyingBirdSprite(charKey, gait, expression, s);
    } else if (charKey === 'kangaroo' || charKey === 'wallaby' || charKey === 'wallaroo') {
      drawKangarooSprite(charKey, gait, expression, s);
    } else if (charKey === 'thorny') {
      drawThornySprite(gait, expression, s);
    } else if (charKey === 'wombat' || charKey === 'koala' || charKey === 'echidna' || charKey === 'bandicoot') {
      drawCompactMarsupialSprite(charKey, gait, expression, s);
    } else if (charKey === 'mudcrab') {
      drawMudCrabSprite(gait, expression, s);
    } else if (charKey === 'dingo') {
      drawDingoSprite(gait, expression, s);
    } else if (charKey === 'possum' || charKey === 'bilby' || charKey === 'quokka' || charKey === 'platypus' || charKey === 'numbat' || charKey === 'tasdevil' || charKey === 'glider' || charKey === 'quoll') {
      drawDistinctRunnerSprite(charKey, gait, expression, s);
    } else {
      drawDistinctRunnerSprite('possum', gait, expression, s);
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

    // Outback-specific contrast layer so the runner stands out from warm sand tones.
    if (terrain === 'dunes') {
      const contrastHalo = ctx.createRadialGradient(0, -6, 6, 0, -6, 44);
      contrastHalo.addColorStop(0, 'rgba(196, 232, 255, 0.22)');
      contrastHalo.addColorStop(0.5, 'rgba(136, 178, 220, 0.14)');
      contrastHalo.addColorStop(1, 'rgba(136, 178, 220, 0)');
      ctx.fillStyle = contrastHalo;
      ctx.beginPath();
      ctx.ellipse(0, -4, 40, 34, 0, 0, Math.PI * 2);
      ctx.fill();

      // Dark contact patch anchors feet to the lane and increases silhouette readability.
      ctx.fillStyle = 'rgba(30, 20, 12, 0.3)';
      ctx.beginPath();
      ctx.ellipse(0, 34 + (state.player.sliding > 0 ? 2 : 0), 24, 7, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (terrain === 'beach') {
      // Sand contact shadow to prevent water-walking look.
      ctx.fillStyle = 'rgba(56, 42, 26, 0.34)';
      ctx.beginPath();
      ctx.ellipse(0, 35 + (state.player.sliding > 0 ? 2 : 0), 24, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      const warmHalo = ctx.createRadialGradient(0, -5, 8, 0, -5, 34);
      warmHalo.addColorStop(0, 'rgba(255, 236, 198, 0.14)');
      warmHalo.addColorStop(0.7, 'rgba(220, 186, 132, 0.06)');
      warmHalo.addColorStop(1, 'rgba(220, 186, 132, 0)');
      ctx.fillStyle = warmHalo;
      ctx.beginPath();
      ctx.ellipse(0, -2, 32, 24, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (terrain === 'mountains') {
      // Darker contact footprint on snow/ice to avoid floating look.
      ctx.fillStyle = 'rgba(18, 24, 36, 0.36)';
      ctx.beginPath();
      ctx.ellipse(0, 35 + (state.player.sliding > 0 ? 2 : 0), 26, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Cold rim light against dark ground improves silhouette readability.
      const coldHalo = ctx.createRadialGradient(0, -6, 8, 0, -6, 40);
      coldHalo.addColorStop(0, 'rgba(208, 234, 255, 0.18)');
      coldHalo.addColorStop(0.6, 'rgba(126, 182, 236, 0.1)');
      coldHalo.addColorStop(1, 'rgba(126, 182, 236, 0)');
      ctx.fillStyle = coldHalo;
      ctx.beginPath();
      ctx.ellipse(0, -3, 36, 30, 0, 0, Math.PI * 2);
      ctx.fill();
    }

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
      const introNarrow = w < 430;
      const introMaxWidth = Math.max(220, Math.min(560, w - 44));
      ctx.font = introNarrow ? 'bold 24px sans-serif' : 'bold 26px sans-serif';
      ctx.fillText('Dawn Dashers', w / 2, h / 2 - 32);
      ctx.font = introNarrow ? '16px sans-serif' : '18px sans-serif';
      const introLineHeight = introNarrow ? 24 : 26;
      const l1 = drawWrappedCenteredText('Traverse Australia, collect shards, and outrun the dark', w / 2, h / 2 + 2, introMaxWidth, introLineHeight);
      drawWrappedCenteredText('Swipe or use arrow keys. Follow the expedition route.', w / 2, h / 2 + 2 + l1 * introLineHeight, introMaxWidth, introLineHeight);
    }

    if (state.ended) {
      if (state.fragments >= 7) {
        drawVictorySunrise(w, h);
        ctx.fillStyle = 'rgba(44, 25, 13, .2)';
        ctx.fillRect(0, 0, w, h);

        const victoryNarrow = w < 430;
        const victoryMaxWidth = Math.max(220, Math.min(560, w - 40));
        ctx.fillStyle = '#3f240f';
        ctx.textAlign = 'center';
        ctx.font = victoryNarrow ? '700 34px Cinzel Decorative' : '700 40px Cinzel Decorative';
        ctx.fillText('Sunrise Restored', w / 2, h * 0.69);
        ctx.font = victoryNarrow ? '700 22px Cinzel Decorative' : '700 24px Cinzel Decorative';
        ctx.fillText('Chosen One', w / 2, h * 0.75);
        ctx.font = victoryNarrow ? '700 16px Nunito' : '700 17px Nunito';
        const victoryLineHeight = victoryNarrow ? 22 : 24;
        const scoreLine = `Final Score ${state.score}  •  Shards ${state.fragments}/7`;
        const scoreLines = drawWrappedCenteredText(scoreLine, w / 2, h * 0.82, victoryMaxWidth, victoryLineHeight);
        drawWrappedCenteredText('Press Restart to play again.', w / 2, h * 0.82 + scoreLines * victoryLineHeight, victoryMaxWidth, victoryLineHeight);
        return;
      }

      ctx.fillStyle = 'rgba(26, 20, 16, .66)';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = 'rgba(15, 11, 9, .72)';
      ctx.strokeStyle = 'rgba(255, 209, 102, .3)';
      ctx.lineWidth = 2;
      const panelW = Math.min(560, w * 0.82);
      const isNarrowPanel = panelW < 420;
      const basePanelH = state.pendingReviveOffer
        ? (isNarrowPanel ? 252 : 216)
        : (isNarrowPanel ? 224 : 200);
      const panelTextWidth = Math.max(180, panelW - 40);
      const bodyGap = isNarrowPanel ? 24 : 28;
      const infoGap = isNarrowPanel ? 20 : 22;
      const infoToButtonGap = isNarrowPanel ? 14 : 16;
      const buttonBottomGap = infoToButtonGap;
      let panelH = basePanelH;
      if (state.pendingReviveOffer) {
        const introLines = countWrappedTextLines('You still have 1 revive option in this run.', panelTextWidth);
        const promptLines = countWrappedTextLines('Tap Revive below to enter the heart revival challenge.', panelTextWidth);
        const bodyHeight = (introLines + promptLines) * bodyGap;
        const requiredH = 82 + bodyHeight + 8 + (2 * infoGap) + infoToButtonGap + 56 + buttonBottomGap;
        panelH = Math.max(basePanelH, requiredH);
      }
      const panelX = (w - panelW) / 2;
      const panelY = (h - panelH) / 2 - 12;
      ctx.beginPath();
      ctx.roundRect(panelX, panelY, panelW, panelH, 14);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = palette.paper;
      ctx.textAlign = 'center';
      ctx.font = isNarrowPanel ? '700 30px Cinzel Decorative' : '700 34px Cinzel Decorative';
      ctx.fillText(state.fragments >= 7 ? 'Expedition Complete!' : 'Game Over', w / 2, panelY + 44);
      ctx.font = isNarrowPanel ? '16px sans-serif' : '18px sans-serif';
      if (state.pendingReviveOffer) {
        const btnHeight = 56;
        const btnWidth = Math.max(180, Math.min(320, panelW - 28));
        const btnLeft = panelX + (panelW - btnWidth) / 2;
        const bodyStartY = panelY + 82;
        const introLinesDrawn = drawWrappedCenteredText('You still have 1 revive option in this run.', w / 2, bodyStartY, panelTextWidth, bodyGap);
        const promptStartY = bodyStartY + introLinesDrawn * bodyGap;
        const promptLinesDrawn = drawWrappedCenteredText('Tap Revive below to enter the heart revival challenge.', w / 2, promptStartY, panelTextWidth, bodyGap);
        const btnTop = panelY + panelH - btnHeight - buttonBottomGap;
        const infoBottomY = btnTop - infoToButtonGap;
        const scoreY = infoBottomY - infoGap;
        const minScoreY = promptStartY + promptLinesDrawn * bodyGap + 8 + infoGap;
        const finalScoreY = Math.max(scoreY, minScoreY);
        const finalInfoY = finalScoreY + infoGap;
        ctx.fillText(`Score ${state.score} | Shards ${state.fragments}/7`, w / 2, finalScoreY);
        ctx.fillText('Revive can be used only once in this run.', w / 2, finalInfoY);
        if (reviveBtn) {
          reviveBtn.style.width = `${btnWidth}px`;
          reviveBtn.style.left = `${btnLeft}px`;
          reviveBtn.style.top = `${btnTop}px`;
          reviveBtn.style.height = `${btnHeight}px`;
        }
      } else {
        const lineY = panelY + 82;
        const first = state.fragments >= 7 ? 'Sunrise restored. The expedition is complete.' : 'The night won this run. Try again.';
        const second = state.fragments >= 7 ? 'Expedition Complete!' : 'Run Ended';
        const firstLines = drawWrappedCenteredText(first, w / 2, lineY, panelTextWidth, bodyGap);
        drawWrappedCenteredText(second, w / 2, lineY + firstLines * bodyGap, panelTextWidth, bodyGap);
        ctx.fillText(`Score ${state.score} | Shards ${state.fragments}/7`, w / 2, panelY + panelH - 44);
        ctx.fillText('Press Restart to play again.', w / 2, panelY + panelH - 16);
      }
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
    if (typeof gameUiModule.closeModal === 'function') {
      gameUiModule.closeModal(modal);
      return;
    }
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
      state.message = 'Your dasher is still hungry. Buy food to continue.';
      showHungerModal();
      syncHud();
      syncPlaybackButton();
      return;
    }
    sendFlow('MANUAL_TOGGLE');
    state.message = state.paused
      ? 'Game paused. Food shop and puzzles are still available.'
      : 'Game resumed.';
    syncHud();
    syncPlaybackButton();
  }

  function bindCharacterControls() {
    characterButtons.forEach((button) => {
      bindClick(button, () => {
        const id = button.dataset.character;
        if (!id || !characters[id]) {
          return;
        }
        if (!superModeEnabled && !isCharacterAvailableForCurrentLevel(id)) {
          previewCharacter = id;
          characterButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.character === id));
          refreshCharacterBio();
          syncCharacterStartButtonState();
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
    if (typeof gameUiModule.bindModalControls === 'function') {
      gameUiModule.bindModalControls(getGameUiContext());
      return;
    }
  }

  function bindLandingFlowControls() {
    if (typeof gameUiModule.bindLandingFlowControls === 'function') {
      gameUiModule.bindLandingFlowControls(getGameUiContext());
      return;
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
    ensureAudioStarted();
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
