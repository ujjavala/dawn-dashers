// @ts-nocheck

(function buildPuzzleData() {
  const phraseRewrites = [
    [/Story clue:/gi, 'Trail clue:'],
    [/nearest-first route search/gi, 'short-hop trail search'],
    [/graph/gi, 'trail map'],
    [/node/gi, 'stop'],
    [/expanded/gi, 'visited'],
    [/algorithm/gi, 'method'],
    [/state machine/gi, 'signal guide'],
    [/binary/gi, 'lamp-blink code'],
    [/bitmask/gi, 'mask code'],
    [/odd-even count check/gi, 'safety count check'],
    [/pseudo-code/gi, 'camp steps'],
    [/Euclid algorithm/gi, 'classic trail method'],
    [/instruction pointer/gi, 'trail pointer'],
    [/gradient/gi, 'slope hint'],
    [/minimax/gi, 'best-safe choice rule'],
    [/Dijkstra/gi, 'shortest-path scout rule'],
    [/A\*/g, 'star-path'],
    [/run-length notation/gi, 'count-and-symbol note'],
    [/queue/gi, 'line order'],
    [/stack/gi, 'pile order'],
    [/Write your final answer like a puzzle-book hero\./gi, 'Write the answer your crew should choose.'],
    [/Now solve the riddle and send your answer to the team\./gi, 'Choose the best answer and report it to your crew.'],
    [/Take a breath, crack the clue, and lock in your answer\./gi, 'Take a breath, solve the clue, and lock in your answer.'],
    [/Think calmly, then write the one best answer in the box\./gi, 'Think calmly, then write the one answer your crew should use.']
  ];

  function softenText(value) {
    if (typeof value !== 'string') {
      return value;
    }
    let text = value;
    for (const [pattern, replacement] of phraseRewrites) {
      text = text.replace(pattern, replacement);
    }
    return text;
  }

  function softenPuzzleText(puzzle) {
    if (!puzzle || typeof puzzle !== 'object') {
      return puzzle;
    }
    return {
      ...puzzle,
      title: softenText(puzzle.title),
      instruction: softenText(puzzle.instruction),
      rightExplain: softenText(puzzle.rightExplain),
      wrongExplain: softenText(puzzle.wrongExplain),
      hints: Array.isArray(puzzle.hints) ? puzzle.hints.map((hint) => softenText(hint)) : puzzle.hints
    };
  }

  const levels = globalThis.DawnDashersPuzzleLevels || {};
  const turingPuzzles = [];
  const treasurePuzzles = [];
  const levelPuzzlePools = {};
  const levelTreasurePools = {};
  const levelRolePools = {};
  const puzzleSplit = {
    heart: 8,
    advance: 8,
    treasure: 7
  };

  for (let level = 0; level < 5; level += 1) {
    const chunk = levels[level] || { turingPuzzles: [], treasurePuzzles: [] };
    const levelCore = Array.isArray(chunk.turingPuzzles) ? chunk.turingPuzzles.map((puzzle) => softenPuzzleText(puzzle)) : [];
    const levelTreasure = Array.isArray(chunk.treasurePuzzles) ? chunk.treasurePuzzles.map((puzzle) => softenPuzzleText(puzzle)) : [];

    const coreStart = turingPuzzles.length;
    turingPuzzles.push(...levelCore);
    const coreIds = levelCore.map((_, idx) => coreStart + idx);
    levelPuzzlePools[level] = coreIds;

    const treasureStart = treasurePuzzles.length;
    treasurePuzzles.push(...levelTreasure);
    const treasureIds = levelTreasure.map((_, idx) => treasureStart + idx);
    levelTreasurePools[level] = treasureIds;

    const heartCoreIds = coreIds.slice(0, puzzleSplit.heart);
    const advanceStart = heartCoreIds.length;
    const advanceCoreIds = coreIds.slice(advanceStart, advanceStart + puzzleSplit.advance);
    const neededCoreForTreasure = Math.max(0, puzzleSplit.treasure - treasureIds.length);
    const treasureCoreStart = advanceStart + advanceCoreIds.length;
    const treasureCoreIds = coreIds.slice(treasureCoreStart, treasureCoreStart + neededCoreForTreasure);
    const treasureRefs = [
      ...treasureCoreIds.map((id) => ({ source: 'core', id })),
      ...treasureIds.map((id) => ({ source: 'treasure', id }))
    ].slice(0, puzzleSplit.treasure);

    levelRolePools[level] = {
      heartCoreIds,
      advanceCoreIds,
      treasureRefs
    };
  }

  globalThis.DawnDashersPuzzleData = {
    turingPuzzles,
    treasurePuzzles,
    levelPuzzlePools,
    levelTreasurePools,
    levelRolePools,
    puzzleSplit
  };
})();
