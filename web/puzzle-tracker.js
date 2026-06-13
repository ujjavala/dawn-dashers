// @ts-nocheck
// Puzzle Tracker - Maintains record of shown puzzles
// Prevents showing the same puzzle twice in a game session and across resume

(function initializePuzzleTracker() {
  const STORAGE_KEY = 'puzzleTracker_shownPuzzles';
  const SESSION_KEY = 'puzzleTracker_currentGame';

  /**
   * @param {string} puzzleId
   * @returns {string}
   */
  function normalizePuzzleId(puzzleId) {
    if (typeof puzzleId !== 'string') {
      return '';
    }
    return puzzleId.trim().toLowerCase();
  }

  /**
   * @param {Storage} storage
   * @param {string} key
   * @returns {string[]}
   */
  function parseStoredList(storage, key) {
    try {
      const stored = storage.getItem(key);
      if (!stored) {
        return [];
      }
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) {
        return [];
      }
      const normalized = parsed
        .map((entry) => normalizePuzzleId(entry))
        .filter(Boolean);
      return [...new Set(normalized)];
    } catch (e) {
      console.warn('Failed to parse stored puzzle tracker list:', e);
      return [];
    }
  }

  // Initialize tracker in global scope
  globalThis.PuzzleTracker = {
    /**
     * Get list of all shown puzzle IDs
     * @returns {string[]} Array of shown puzzle IDs
     */
    getShownPuzzles: function() {
      try {
        return parseStoredList(localStorage, STORAGE_KEY);
      } catch (e) {
        console.warn('Failed to retrieve shown puzzles:', e);
        return [];
      }
    },

    /**
     * Get current game's shown puzzle IDs
     * @returns {string[]} Array of puzzle IDs shown in current game
     */
    getCurrentGameShown: function() {
      try {
        return parseStoredList(sessionStorage, SESSION_KEY);
      } catch (e) {
        console.warn('Failed to retrieve current game puzzles:', e);
        return [];
      }
    },

    /**
     * Mark a puzzle as shown
     * Adds to both permanent record and current game record
     * @param {string} puzzleId - The puzzle ID to mark as shown
     */
    markAsShown: function(puzzleId) {
      try {
        const normalizedId = normalizePuzzleId(puzzleId);
        if (!normalizedId) {
          return;
        }

        // Add to permanent record
        const allShown = this.getShownPuzzles();
        if (!allShown.includes(normalizedId)) {
          allShown.push(normalizedId);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(allShown));
        }

        // Add to current game record
        const currentGame = this.getCurrentGameShown();
        if (!currentGame.includes(normalizedId)) {
          currentGame.push(normalizedId);
          sessionStorage.setItem(SESSION_KEY, JSON.stringify(currentGame));
        }
      } catch (e) {
        console.warn('Failed to mark puzzle as shown:', e);
      }
    },

    /**
     * Check if a puzzle has been shown
     * @param {string} puzzleId - The puzzle ID to check
     * @returns {boolean} True if puzzle has been shown before
     */
    hasBeenShown: function(puzzleId) {
      const normalizedId = normalizePuzzleId(puzzleId);
      if (!normalizedId) {
        return false;
      }
      return this.getShownPuzzles().includes(normalizedId);
    },

    /**
     * Check if a puzzle has been shown in current game
     * @param {string} puzzleId - The puzzle ID to check
     * @returns {boolean} True if puzzle has been shown in current game
     */
    shownInCurrentGame: function(puzzleId) {
      const normalizedId = normalizePuzzleId(puzzleId);
      if (!normalizedId) {
        return false;
      }
      return this.getCurrentGameShown().includes(normalizedId);
    },

    /**
     * Start a new game session
     * Clears current game record but keeps permanent record
     */
    startNewGame: function() {
      try {
        sessionStorage.removeItem(SESSION_KEY);
      } catch (e) {
        console.warn('Failed to clear current game record:', e);
      }
    },

    /**
     * Clear all shown puzzle records
     * Use only for resetting the game completely
     */
    clearAllRecords: function() {
      try {
        localStorage.removeItem(STORAGE_KEY);
        sessionStorage.removeItem(SESSION_KEY);
      } catch (e) {
        console.warn('Failed to clear all records:', e);
      }
    },

    /**
     * Get statistics
     * @returns {object} Object with count of shown puzzles and current game puzzles
     */
    getStats: function() {
      return {
        totalShown: this.getShownPuzzles().length,
        shownInCurrentGame: this.getCurrentGameShown().length,
        shownPuzzles: this.getShownPuzzles(),
        currentGamePuzzles: this.getCurrentGameShown()
      };
    }
  };

  console.log('PuzzleTracker initialized');
})();
