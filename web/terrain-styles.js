// @ts-nocheck

(function () {
  function terrainTheme(terrain) {
    if (terrain === 'dunes') {
      return {
        base: 0x925f3a,
        emissive: 0x2a180f,
        fog: 0x775039,
        sky: 0x25180f,
        amp: 2.25,
        ampHi: 0.78,
        freq: 0.18,
        freqHi: 0.46,
        speed: 0.19,
        fogDensity: 0.044,
        gradientLevels: 3,
        gradeTop: [172, 146, 120],
        gradeBottom: [58, 42, 33],
        gradeStrength: 0.12,
        sunIntensity: 0.92,
        ambientIntensity: 0.5
      };
    }
    if (terrain === 'forest') {
      return {
        base: 0x3f5d36,
        emissive: 0x0e1a11,
        fog: 0x1f3627,
        sky: 0x101a12,
        amp: 2.2,
        ampHi: 0.7,
        freq: 0.2,
        freqHi: 0.48,
        speed: 0.16,
        fogDensity: 0.06,
        gradientLevels: 4,
        gradeTop: [126, 146, 114],
        gradeBottom: [22, 34, 26],
        gradeStrength: 0.11,
        sunIntensity: 0.76,
        ambientIntensity: 0.5
      };
    }
    if (terrain === 'beach') {
      return {
        base: 0x8ea69a,
        emissive: 0x102836,
        fog: 0x3f7094,
        sky: 0x1f4f79,
        amp: 1.35,
        ampHi: 0.42,
        freq: 0.16,
        freqHi: 0.34,
        speed: 0.26,
        fogDensity: 0.04,
        gradientLevels: 4,
        gradeTop: [112, 156, 178],
        gradeBottom: [26, 66, 90],
        gradeStrength: 0.12,
        sunIntensity: 0.68,
        ambientIntensity: 0.5
      };
    }
    if (terrain === 'industrial') {
      return {
        base: 0x3d4853,
        emissive: 0x0b1117,
        fog: 0x1e2836,
        sky: 0x121a24,
        amp: 1.4,
        freq: 0.27,
        speed: 0.37,
        fogDensity: 0.053,
        gradientLevels: 4,
        gradeTop: [102, 128, 150],
        gradeBottom: [10, 16, 24],
        gradeStrength: 0.14,
        sunIntensity: 0.92,
        ambientIntensity: 0.46
      };
    }
    return {
      base: 0x66748a,
      emissive: 0x111a2a,
      fog: 0x222f40,
      sky: 0x161f2d,
      amp: 2.8,
      ampHi: 0.95,
      freq: 0.17,
      freqHi: 0.5,
      speed: 0.16,
      fogDensity: 0.05,
      gradientLevels: 4,
      gradeTop: [166, 178, 192],
      gradeBottom: [28, 36, 50],
      gradeStrength: 0.14,
      sunIntensity: 0.92,
      ambientIntensity: 0.54
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
        low: [44, 66, 76],
        mid: [68, 98, 112],
        high: [98, 132, 146],
        tint: [120, 164, 178]
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

  globalThis.terrainTheme = terrainTheme;
  globalThis.terrainTrackProfile = terrainTrackProfile;
  globalThis.biomePalette = biomePalette;
})();
