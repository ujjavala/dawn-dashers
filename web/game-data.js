// @ts-nocheck

const DawnDashersGameData = (() => {
  const palette = {
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

  const levelTransitionMsgs = [
    null,
    {
      congrats: 'Wowww!! Outback: CLEARED! 🌵🔥',
      teaser: 'Heading into the Bushland — eucalyptus as far as the beak can see, wombat tunnels underfoot, and a 100% chance something rustles right behind you.'
    },
    {
      congrats: 'AYY!! Bushland: SMASHED! 🌿✨',
      teaser: 'Next: Servo — part ancient emu trading post, part glitchy AI hub. The circuits are dusty. The emus are absolutely suspicious.'
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

  const regions = [
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

  const characters = {
    emu: { name: 'Enigma Emu', emoji: '🦤', power: 'Dust Sprint', quirk: 'Fast lane weave, moderate hop drain.', unlockAt: 0, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Emu' },
    wombat: { name: 'Wheeler Wombat', emoji: '🦫', power: 'Burrow Dodge', quirk: 'Cheaper slides in dunes/forest.', unlockAt: 0, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Wombat' },
    kangaroo: { name: 'Kleene Kangaroo', emoji: '🦘', power: 'Sky Hop', quirk: 'Jumps are most energy-efficient.', unlockAt: 1, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Red_kangaroo' },
    koala: { name: 'Knuth Koala', emoji: '🐨', power: 'Grip Glide', quirk: 'Balanced and steady movement.', unlockAt: 1, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Koala' },
    platypus: { name: 'Prefix Platypus', emoji: '🦆', power: 'River Sense', quirk: 'Food restores more and slide is efficient.', unlockAt: 1, role: 'slow', puzzleUnlockLevel: 1, wikiUrl: 'https://en.wikipedia.org/wiki/Platypus' },
    possum: { name: 'Protocol Possum', emoji: '🌟', power: 'Night Glide', quirk: 'Quick reactions at higher levels.', unlockAt: 2, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Possum' },
    echidna: { name: 'Epsilon Echidna', emoji: '🦔', power: 'Quill Barrier', quirk: 'Stable lane control with low drift.', unlockAt: 2, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Echidna' },
    cockatoo: { name: 'Compiler Cockatoo', emoji: '🦜', power: 'Aerial Relay', quirk: 'Great movement efficiency on all actions.', unlockAt: 2, role: 'fast', puzzleUnlockLevel: 2, wikiUrl: 'https://en.wikipedia.org/wiki/Cockatoo' },
    dingo: { name: 'Digital Dingo', emoji: '🐕', power: 'Tide Dash', quirk: 'Aggressive full-width lane cuts.', unlockAt: 3, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Dingo' },
    bilby: { name: 'Bit Bilby', emoji: '🐇', power: 'Tunnel Pace', quirk: 'Short lane window, low energy burn.', unlockAt: 3, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Bilby' },
    tasdevil: { name: 'Turing Tassie Devil', emoji: '😈', power: 'Charge Burst', quirk: 'High movement speed with expensive jumps.', unlockAt: 3, role: 'fast', puzzleUnlockLevel: 3, wikiUrl: 'https://en.wikipedia.org/wiki/Tasmanian_devil' },
    kookaburra: { name: 'Kernel Kookaburra', emoji: '🐦', power: 'Light Call', quirk: 'Fast top-tier lane traversal.', unlockAt: 4, role: 'fast', wikiUrl: 'https://en.wikipedia.org/wiki/Kookaburra' },
    quokka: { name: 'Quine Quokka', emoji: '🐹', power: 'Calm Climb', quirk: 'Highest efficiency but restricted lanes.', unlockAt: 4, role: 'slow', wikiUrl: 'https://en.wikipedia.org/wiki/Quokka' },
    numbat: { name: 'Null Numbat', emoji: '🦝', power: 'Pattern Focus', quirk: 'Very low move drain and cheap food cost.', unlockAt: 4, role: 'slow', puzzleUnlockLevel: 4, wikiUrl: 'https://en.wikipedia.org/wiki/Numbat' }
  };

  const levelCharacterPairs = {
    0: { fast: 'emu', slow: 'wombat' },
    1: { fast: 'kangaroo', slow: 'koala' },
    2: { fast: 'possum', slow: 'echidna' },
    3: { fast: 'dingo', slow: 'bilby' },
    4: { fast: 'kookaburra', slow: 'quokka' }
  };

  const characterFood = {
    emu: { name: 'Seed Mix', icon: '🌾', cost: 220, restore: 250, moveCost: 50, jumpCost: 68, slideCost: 42 },
    wombat: { name: 'Root Pack', icon: '🥕', cost: 190, restore: 230, moveCost: 30, jumpCost: 48, slideCost: 24 },
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

  const characterRegionMap = {
    emu: 0,
    wombat: 0,
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

  return {
    palette,
    levelTransitionMsgs,
    regions,
    characters,
    levelCharacterPairs,
    characterFood,
    characterRegionMap
  };
})();
