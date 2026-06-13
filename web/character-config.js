// @ts-nocheck

(function () {
  const visualPresets = {
    emu: { rig: 'birdTall', fast: true, body: 0x8c6c4d, accent: 0x5a3824, glow: 0xf4d6a2, trail: 0xd7c0a2, speed: 8.6, bob: 0.09, hop: 0.06 },
    wombat: { rig: 'burrower', fast: false, body: 0x8d6f54, accent: 0x5d4028, glow: 0xbfa68e, frameRate: 8, roll: 0.07 },
    kangaroo: { rig: 'hopper', fast: true, body: 0xa16d54, accent: 0x5b3922, glow: 0xffd28a, trail: 0xe9bd73, speed: 9.8, bob: 0.11, hop: 0.34 },
    koala: { rig: 'burrower', fast: false, body: 0x8d909a, accent: 0x42464e, glow: 0xd6efff, frameRate: 8, breathe: true },
    platypus: { rig: 'platypus', fast: false, body: 0xa5754b, accent: 0x2f5265, glow: 0xaee9ff, frameRate: 8, tail: 0x8b6141 },
    possum: { rig: 'tailClimber', fast: true, body: 0x8b7f6b, accent: 0x594536, glow: 0xffe2a2, trail: 0xcdb86b, speed: 8.9, bob: 0.08, hop: 0.08 },
    echidna: { rig: 'spine', fast: false, body: 0x72513a, accent: 0x3e2518, glow: 0xc6e8ff, frameRate: 8, roll: 0.08 },
    cockatoo: { rig: 'birdCrest', fast: true, body: 0xf2eee5, accent: 0xd2ab3f, glow: 0xfff2b4, trail: 0x9fe5ff, speed: 9.1, bob: 0.1, crest: true },
    dingo: { rig: 'canine', fast: true, body: 0xb37f56, accent: 0x4d311d, glow: 0xeed099, trail: 0xd7ab77, speed: 8.8, bob: 0.09, hop: 0.18 },
    bilby: { rig: 'burrower', fast: false, body: 0xccad76, accent: 0x6f5330, glow: 0xffefc5, frameRate: 8, ears: true },
    tasdevil: { rig: 'canine', fast: true, body: 0x261e1e, accent: 0xb8322b, glow: 0xff714f, trail: 0xff7b57, speed: 9.6, bob: 0.11, pulseGlow: true },
    kookaburra: { rig: 'birdPerch', fast: true, body: 0x80613f, accent: 0x74dbff, glow: 0x95f8ff, trail: 0x7ee9ff, speed: 8.7, bob: 0.09, auroraGlow: true },
    quokka: { rig: 'burrower', fast: false, body: 0xb89060, accent: 0x6f4d2d, glow: 0xffe0b2, frameRate: 8, breathe: true },
    numbat: { rig: 'striped', fast: false, body: 0xbf9b66, accent: 0x8d6032, glow: 0xffedb6, frameRate: 8, stripes: true },
    ibis: { rig: 'birdPerch', fast: true, body: 0xf2f0e8, accent: 0x3a1f16, glow: 0xb7f2e4, trail: 0x8de6cf, speed: 9, bob: 0.1 },
    mudcrab: { rig: 'burrower', fast: false, body: 0x8b3f2b, accent: 0xd98b4f, glow: 0xffc08a, frameRate: 8, roll: 0.04 },
    jabiru: { rig: 'birdTall', fast: true, body: 0x11161b, accent: 0xd6dbe2, glow: 0x90f0dd, trail: 0x79dfcb, speed: 9.2, bob: 0.1 },
    lyrebird: { rig: 'birdCrest', fast: true, body: 0x7f6548, accent: 0xc8a56d, glow: 0xb6ddff, trail: 0x96caf4, speed: 9.1, bob: 0.1 },
    wallaroo: { rig: 'hopper', fast: false, body: 0x9b7654, accent: 0x5b3f2a, glow: 0xe9cba2, frameRate: 8, hop: 0.24 },
    glider: { rig: 'tailClimber', fast: false, body: 0x9a8674, accent: 0x4c3f35, glow: 0xd8cbbd, frameRate: 8, breathe: true },
    eagle: { rig: 'birdPerch', fast: true, body: 0x5d4a3a, accent: 0xd6b07a, glow: 0xffd9a0, trail: 0xe8be81, speed: 9.4, bob: 0.11 },
    thorny: { rig: 'spine', fast: false, body: 0xb27745, accent: 0x7f4d2b, glow: 0xf0c486, frameRate: 8, stripes: true },
    quoll: { rig: 'canine', fast: true, body: 0x6e5848, accent: 0xd9b87a, glow: 0xf4d2a1, trail: 0xcda56f, speed: 9.3, bob: 0.1 },
    owl: { rig: 'birdCrest', fast: true, body: 0x6e5e52, accent: 0xcaa56d, glow: 0xcad8ff, trail: 0xaab8ea, speed: 9, bob: 0.09 },
    bandicoot: { rig: 'burrower', fast: false, body: 0x8f775f, accent: 0x5e4a39, glow: 0xe7d1b3, frameRate: 8, breathe: true },
    cassowary: { rig: 'birdTall', fast: false, body: 0x1d2530, accent: 0x4ca0ff, glow: 0x91d2ff, frameRate: 8, crest: true }
  };

  const colors = {
    emu: { body: '#7a6548', neck: '#8a7558', beak: '#c89040', eye: '#1a0e06', legs: '#6b5438' },
    kookaburra: { body: '#7a5c18', wings: '#3a2808', beak: '#d09828', eye: '#1a0e06', chest: '#f0e0a0' },
    cockatoo: { body: '#f0ece0', wings: '#d8c880', crest: '#ffd000', beak: '#c09048', eye: '#2a1808' },
    kangaroo: { body: '#c08050', belly: '#e0b880', ear: '#d09060', eye: '#2a1808' },
    wombat: { body: '#5a4030', belly: '#7a6050', eye: '#2a1808', nose: '#321a10' },
    koala: { body: '#888080', belly: '#d0c0b8', ear: '#a09090', nose: '#382030', eye: '#281820' },
    possum: { body: '#706858', tail: '#605848', belly: '#c0b8a0', eye: '#281820' },
    echidna: { body: '#483020', spine: '#a08048', nose: '#3a2018', eye: '#180c08' },
    platypus: { body: '#608060', bill: '#c09048', tail: '#406048', eye: '#181008' },
    dingo: { body: '#c08840', belly: '#e0c070', muzzle: '#d0a058', eye: '#281808' },
    bilby: { body: '#706860', ear: '#e8c0b8', belly: '#c0b0a0', eye: '#281820', nose: '#322020' },
    tasdevil: { body: '#201818', chest: '#f0e8e0', jaw: '#302020', eye: '#e02010' },
    quokka: { body: '#b08840', belly: '#d0b068', ear: '#c09860', eye: '#281808' },
    numbat: { body: '#c08848', stripe: '#381e08', belly: '#e0c080', tail: '#a06828', eye: '#180e08' },
    ibis: { body: '#f0ede3', wings: '#2f2a25', beak: '#d79f58', eye: '#20150d' },
    mudcrab: { body: '#8f3f2a', belly: '#cb7a42', claw: '#d68e55', eye: '#2a120a' },
    jabiru: { body: '#171c22', wings: '#dde2ea', beak: '#21272d', eye: '#9decd8' },
    lyrebird: { body: '#86674a', wings: '#6b5039', crest: '#ceb183', beak: '#b9894f', eye: '#21150d' },
    wallaroo: { body: '#9c7552', belly: '#d7b58a', ear: '#b48f69', eye: '#2b190d' },
    glider: { body: '#998673', belly: '#d7cabc', tail: '#5c4d40', eye: '#1f1610' },
    eagle: { body: '#5a493c', wings: '#3e3228', beak: '#d2a45a', eye: '#20140c' },
    thorny: { body: '#b17845', spine: '#f1c987', nose: '#4a2916', eye: '#1a0e07' },
    quoll: { body: '#6d5747', belly: '#ceb089', tail: '#4b3a2f', eye: '#190f09' },
    owl: { body: '#716258', wings: '#544941', beak: '#cda068', eye: '#1a1008' },
    bandicoot: { body: '#8f7761', belly: '#d7c1a7', ear: '#ad9278', eye: '#1f140d' },
    cassowary: { body: '#1f2b38', neck: '#2d7ecf', beak: '#8bc8ff', eye: '#d0efff' }
  };

  const spriteFamilies = {
    emu: 'emu',
    cockatoo: 'bird',
    kookaburra: 'bird',
    ibis: 'bird',
    jabiru: 'bird',
    lyrebird: 'bird',
    eagle: 'bird',
    owl: 'bird',
    cassowary: 'bird',
    kangaroo: 'hopper',
    wallaby: 'hopper',
    wallaroo: 'hopper',
    wombat: 'compact',
    koala: 'compact',
    echidna: 'compact',
    bandicoot: 'compact',
    thorny: 'compact',
    mudcrab: 'mudcrab',
    dingo: 'dingo',
    possum: 'generic',
    bilby: 'generic',
    quokka: 'generic',
    platypus: 'generic',
    numbat: 'generic',
    tasdevil: 'generic',
    glider: 'generic',
    quoll: 'generic'
  };

  globalThis.DawnDashersCharacterVisualPresets = visualPresets;
  globalThis.DawnDashersCharacterColors = colors;
  globalThis.DawnDashersCharacterSpriteFamilies = spriteFamilies;
})();
