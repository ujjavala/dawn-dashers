// Centralized gameplay tuning for Dawn Dashers.
// Values can be overridden in local/dev by defining globalThis.DawnDashersGameSettings before this file runs.
(() => {
  const appGlobal = /** @type {any} */ (globalThis);
  const existing = appGlobal.DawnDashersGameSettings;
  const defaults = {
    difficultyMultipliers: {
      easy: 0.75,
      medium: 1,
      hard: 1.35
    },
    curvature: {
      maxLevelIndex: 4,
      bendBase: 0.72,
      bendPerLevel: 0.16,
      wiggleBase: 0.68,
      wigglePerLevel: 0.22,
      freqBase: 0.95,
      freqPerLevel: 0.05,
      difficultyScale: {
        easy: { bend: 0.86, wiggle: 0.82, freq: 0.94, fall: 0.9 },
        medium: { bend: 1, wiggle: 1, freq: 1, fall: 1 },
        hard: { bend: 1.2, wiggle: 1.25, freq: 1.08, fall: 1.22 }
      }
    },
    fallingObjects: {
      baseZSpeed: 0.9,
      difficultyZSpeed: 0.07,
      levelScalePerLevel: 0.17,
      shardDeficitPerShard: 0.05,
      pressurePerDifficultyPoint: 0.08
    },
    visuals: {
      pathGuides: {
        enabled: false,
        laneAlphaCenter: 0.11,
        laneAlphaSide: 0.05,
        laneWidthCenter: 1.15,
        laneWidthSide: 0.7,
        rutAlpha: 0.17,
        rutWidth: 0.85
      },
      industrialGroundSeams: false,
      cinematicScanlines: false
    }
  };

  appGlobal.DawnDashersGameSettings = {
    ...defaults,
    ...(existing && typeof existing === 'object' ? existing : {})
  };
})();
