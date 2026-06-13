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

  // ── localStorage persistence ────────────────────────────────────────────────
  const SEEN_STORAGE_KEY = 'DawnDashers_PuzzleSeen';

  // Load the set of seen puzzle IDs from localStorage (returns a Set<string>).
  function loadSeenIds() {
    try {
      const raw = globalThis.localStorage?.getItem(SEEN_STORAGE_KEY);
      if (!raw) return new Set();
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? new Set(parsed) : new Set();
    } catch {
      return new Set();
    }
  }

  // Persist the full set of seen IDs to localStorage.
  function saveSeenIds(seenSet) {
    try {
      if (globalThis.localStorage) {
        globalThis.localStorage.setItem(SEEN_STORAGE_KEY, JSON.stringify([...seenSet]));
      }
    } catch { /* quota / private-mode — silently ignore */ }
  }

  // Single shared seen-ID set for this page load.
  const seenIds = loadSeenIds();
  // ────────────────────────────────────────────────────────────────────────────

  // ── Difficulty-based level configuration ────────────────────────────────────
  // Maps game level index (0-based) → which difficulty tier to draw from.
  // Add more entries here to extend to levels 6-9 without touching question files.
  const LEVEL_DIFFICULTY = [
    'easy',   // level 0 (in-game level 1)
    'easy',   // level 1
    'medium', // level 2
    'medium', // level 3
    'hard',   // level 4
    'hard',   // level 5
    'hard',   // level 6
    'hard',   // level 7
    'hard'    // level 8
  ];

  // Shape a raw question into a tracked puzzle entry.
  function shapeQuestion(raw) {
    const p = softenPuzzleText(raw) || {};
    const id = String(p.id ?? '');
    return { ...p, id, seen: id ? seenIds.has(id) : false };
  }

  // Build the flat arrays and per-level pools from globalThis.DawnDashersQuestions.
  const allRaw = Array.isArray(globalThis.DawnDashersQuestions)
    ? globalThis.DawnDashersQuestions
    : [];

  // Per-role flat arrays.
  const heartPuzzles    = [];
  const levelPuzzles    = [];
  const treasurePuzzles = [];

  // Per-level pools of indexes into the flat arrays above.
  const heartPoolsByLevel    = {};
  const levelPoolsByLevel    = {};
  const treasurePoolsByLevel = {};

  // Index shaped questions by difficulty+type for fast lookup.
  const byDiffType = {};
  for (const raw of allRaw) {
    const key = (raw.difficulty || 'easy') + ':' + (raw.type || 'levelPuzzles');
    byDiffType[key] = byDiffType[key] || [];
    byDiffType[key].push(shapeQuestion(raw));
  }

  function addToPool(flatArray, questions) {
    const start = flatArray.length;
    flatArray.push(...questions);
    return questions.map((_, i) => start + i);
  }

  const totalLevels = LEVEL_DIFFICULTY.length;
  for (let level = 0; level < totalLevels; level += 1) {
    const diff = LEVEL_DIFFICULTY[level];
    heartPoolsByLevel[level]    = addToPool(heartPuzzles,    byDiffType[diff + ':heartPuzzles']    || []);
    levelPoolsByLevel[level]    = addToPool(levelPuzzles,    byDiffType[diff + ':levelPuzzles']    || []);
    treasurePoolsByLevel[level] = addToPool(treasurePuzzles, byDiffType[diff + ':treasurePuzzles'] || []);
  }

  /**
   * Pick the first unseen puzzle from a pool.
   * Marks it seen in memory AND in localStorage.
   * If every puzzle in the pool has been seen, resets only that pool and picks again.
   */
  function pickUnseen(flatArray, poolIds) {
    if (!poolIds?.length) return null;

    // Try to find an unseen puzzle.
    for (const id of poolIds) {
      const p = flatArray[id];
      if (p && !p.seen) {
        p.seen = true;
        if (p.id !== '') { seenIds.add(String(p.id)); saveSeenIds(seenIds); }
        return p;
      }
    }

    // All seen in this pool: reset only this pool, then pick again.
    resetSeen(flatArray, poolIds);
    for (const id of poolIds) {
      const p = flatArray[id];
      if (p && !p.seen) {
        p.seen = true;
        if (p.id !== '') { seenIds.add(String(p.id)); saveSeenIds(seenIds); }
        return p;
      }
    }

    return null;
  }

  /**
   * Reset seen flags for a pool in memory AND remove those IDs from localStorage.
   */
  function resetSeen(flatArray, poolIds) {
    for (const id of poolIds) {
      const p = flatArray[id];
      if (p) {
        p.seen = false;
        if (p.id !== '') seenIds.delete(String(p.id));
      }
    }
    saveSeenIds(seenIds);
  }

  globalThis.DawnDashersPuzzleData = {
    // Flat arrays per role
    heartPuzzles,
    levelPuzzles,
    treasurePuzzles,

    // Per-level index pools
    heartPoolsByLevel,
    levelPoolsByLevel,
    treasurePoolsByLevel,

    // Utilities used by game.js
    pickUnseen,
    resetSeen,

    // Legacy aliases so existing game.js code doesn't break while being migrated
    turingPuzzles: [...heartPuzzles, ...levelPuzzles],
    levelPuzzlePools:   levelPoolsByLevel,
    levelTreasurePools: treasurePoolsByLevel,
    puzzleSplit: { heart: 8, advance: 8, treasure: 7 }
  };
})();
