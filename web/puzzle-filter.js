// @ts-nocheck
// Puzzle Filter Utility
// Provides helpers to query puzzle availability using the seen flag and role pools

(function initializePuzzleFilter() {
  /** @returns {Record<string, any>} */
  function data() {
    return /** @type {any} */ (globalThis).DawnDashersPuzzleData || {};
  }

  /** @type {Record<string, any>} */
  const PuzzleFilter = {
    /**
     * Get unseen heart puzzles for a level.
     * @param {number} levelIndex
     * @returns {any[]}
     */
    getAvailableHeartPuzzles: function(levelIndex) {
      const d = data();
      /** @type {number[]} */
      const poolIds = d.heartPoolsByLevel?.[levelIndex] || [];
      return poolIds.map((id) => d.heartPuzzles?.[id]).filter((/** @type {any} */ p) => p && !p.seen);
    },

    /**
     * Get unseen level-advance puzzles for a level.
     * @param {number} levelIndex
     * @returns {any[]}
     */
    getAvailableLevelPuzzles: function(levelIndex) {
      const d = data();
      /** @type {number[]} */
      const poolIds = d.levelPoolsByLevel?.[levelIndex] || [];
      return poolIds.map((id) => d.levelPuzzles?.[id]).filter((/** @type {any} */ p) => p && !p.seen);
    },

    /**
     * Get unseen treasure puzzles for a level.
     * @param {number} levelIndex
     * @returns {any[]}
     */
    getAvailableTreasurePuzzles: function(levelIndex) {
      const d = data();
      /** @type {number[]} */
      const poolIds = d.treasurePoolsByLevel?.[levelIndex] || [];
      return poolIds.map((id) => d.treasurePuzzles?.[id]).filter((/** @type {any} */ p) => p && !p.seen);
    },

    /**
     * Get all unseen puzzles across all roles for a level.
     * @param {number} levelIndex
     * @returns {any[]}
     */
    getAllAvailablePuzzles: function(levelIndex) {
      return [
        ...this.getAvailableHeartPuzzles(levelIndex),
        ...this.getAvailableLevelPuzzles(levelIndex),
        ...this.getAvailableTreasurePuzzles(levelIndex)
      ];
    },

    /**
     * Count seen puzzles per role for a level.
     * @param {number} levelIndex
     * @returns {{ heart: number, level: number, treasure: number, total: number }}
     */
    getShownCountForLevel: function(levelIndex) {
      const d = data();

      /** @param {any[]} flatArray @param {number[]} poolIds @returns {number} */
      const countSeen = (flatArray, poolIds) =>
        (poolIds || []).filter((id) => flatArray?.[id]?.seen).length;

      const heart    = countSeen(d.heartPuzzles,    d.heartPoolsByLevel?.[levelIndex]);
      const level    = countSeen(d.levelPuzzles,    d.levelPoolsByLevel?.[levelIndex]);
      const treasure = countSeen(d.treasurePuzzles, d.treasurePoolsByLevel?.[levelIndex]);
      return { heart, level, treasure, total: heart + level + treasure };
    },

    /**
     * Completion percentage for a level (0–100).
     * @param {number} levelIndex
     * @returns {number}
     */
    getCompletionPercentage: function(levelIndex) {
      const d = data();
      const poolSize = (/** @type {Record<number,number[]>|undefined} */ pool) => (pool?.[levelIndex]?.length || 0);
      const total =
        poolSize(d.heartPoolsByLevel) +
        poolSize(d.levelPoolsByLevel) +
        poolSize(d.treasurePoolsByLevel);
      if (!total) return 0;
      return Math.round((this.getShownCountForLevel(levelIndex).total / total) * 100);
    },

    /**
     * Stats across all 5 levels.
     * @returns {Record<string, any>}
     */
    getAllLevelStats: function() {
      const d = data();
      /** @type {Record<string, any>} */
      const stats = {};
      for (let i = 0; i < 5; i++) {
        const poolSize = (/** @type {Record<number,number[]>|undefined} */ pool) => pool?.[i]?.length || 0;
        stats[`level_${i + 1}`] = {
          index: i,
          shown: this.getShownCountForLevel(i),
          completion: this.getCompletionPercentage(i),
          total: poolSize(d.heartPoolsByLevel) + poolSize(d.levelPoolsByLevel) + poolSize(d.treasurePoolsByLevel)
        };
      }
      return stats;
    }
  };

  /** @type {any} */ (globalThis).PuzzleFilter = PuzzleFilter;

  console.log('PuzzleFilter initialized');
})();
