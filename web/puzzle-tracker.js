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
      // Session-scoped: clears on refresh/new tab so old IDs don't pollute
      return this.getCurrentGameShown().includes(normalizedId);
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

// ─── Puzzle Utilities ─────────────────────────────────────────────────────────
// Pure helpers for signature generation, de-duplication, and pool resolution.
// Consumed by game.js via globalThis.DawnDashersPuzzleUtils.

(function initializePuzzleUtils() {
  const PUZZLE_SHOWN_SIGNATURES_KEY = 'dawn_dashers_puzzle_shown_signatures_v1';

  function getPuzzleIdSignature(puzzle) {
    if (!puzzle || typeof puzzle !== 'object') return '';
    if (typeof puzzle.id === 'string' && puzzle.id.trim()) {
      return `id:${puzzle.id.trim().toLowerCase()}`;
    }
    return '';
  }

  function getPuzzleContentSignature(puzzle) {
    if (!puzzle || typeof puzzle !== 'object') return '';
    const answers = Array.isArray(puzzle.answers)
      ? puzzle.answers.join('|')
      : (puzzle.answer || '');
    const normalized = [puzzle.title || '', puzzle.instruction || '', puzzle.question || '', answers]
      .join('||').trim().toLowerCase();
    return normalized ? `content:${normalized}` : '';
  }

  function getPuzzleSignature(puzzle) {
    return getPuzzleIdSignature(puzzle) || getPuzzleContentSignature(puzzle);
  }

  function getPuzzleTrackerKey(puzzle) {
    if (!puzzle || typeof puzzle !== 'object') return '';
    if (typeof puzzle.id === 'string' && puzzle.id.trim()) return puzzle.id.trim();
    return getPuzzleSignature(puzzle);
  }

  function isPuzzleMarkedShown(puzzle) {
    const tracker = globalThis.PuzzleTracker;
    if (!tracker || typeof tracker.hasBeenShown !== 'function') return false;
    const key = getPuzzleTrackerKey(puzzle);
    return key ? tracker.hasBeenShown(key) : false;
  }

  function markPuzzleAsShown(puzzle) {
    const tracker = globalThis.PuzzleTracker;
    if (!tracker || typeof tracker.markAsShown !== 'function') return;
    const key = getPuzzleTrackerKey(puzzle);
    if (key) tracker.markAsShown(key);
  }

  function loadShownSignatures() {
    try {
      // Session-scoped: clears on refresh/new tab
      const raw = globalThis.sessionStorage?.getItem(PUZZLE_SHOWN_SIGNATURES_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function isPuzzleSignatureUsed(puzzle, usedSignatures, shownSignatures) {
    const idSig = getPuzzleIdSignature(puzzle);
    const contentSig = getPuzzleContentSignature(puzzle);
    if (!idSig && !contentSig) return isPuzzleMarkedShown(puzzle);
    if (isPuzzleMarkedShown(puzzle)) return true;
    if (idSig && (usedSignatures.includes(idSig) || shownSignatures.includes(idSig))) return true;
    if (contentSig && (usedSignatures.includes(contentSig) || shownSignatures.includes(contentSig))) return true;
    return false;
  }

  function markSignatureUsed(puzzle, usedSignatures, shownSignatures) {
    const signatures = [getPuzzleIdSignature(puzzle), getPuzzleContentSignature(puzzle)].filter(Boolean);
    markPuzzleAsShown(puzzle);
    if (!signatures.length) return { changed: false };
    let persistNeeded = false;
    signatures.forEach((sig) => {
      if (!usedSignatures.includes(sig)) usedSignatures.push(sig);
      if (!shownSignatures.includes(sig)) {
        shownSignatures.push(sig);
        persistNeeded = true;
      }
    });
    if (persistNeeded) {
      try {
        // Session-scoped: clears on refresh/new tab
        globalThis.sessionStorage?.setItem(PUZZLE_SHOWN_SIGNATURES_KEY, JSON.stringify(shownSignatures));
      } catch { /* ignore quota/private mode */ }
    }
    return { changed: true };
  }

  function resolvePoolLevelKey(poolMap, level, maxLevel) {
    const keys = Object.keys(poolMap)
      .map((k) => Number.parseInt(k, 10))
      .filter((k) => Number.isInteger(k))
      .sort((a, b) => a - b);
    if (!keys.length) return 0;
    const safe = Math.max(0, Math.min(maxLevel ?? 8, level));
    if (keys.includes(safe)) return safe;
    return keys[safe % keys.length];
  }

  function pickUnseenPuzzle(puzzleArray, poolIds, usedSignatures, shownSignatures) {
    if (!Array.isArray(puzzleArray) || !Array.isArray(poolIds)) return null;
    const available = poolIds
      .map((id) => puzzleArray[id])
      .filter((p) => p && !isPuzzleSignatureUsed(p, usedSignatures, shownSignatures));
    if (!available.length) return null;
    return available[Math.floor(Math.random() * available.length)];
  }

  globalThis.DawnDashersPuzzleUtils = {
    getPuzzleIdSignature,
    getPuzzleContentSignature,
    getPuzzleSignature,
    getPuzzleTrackerKey,
    isPuzzleMarkedShown,
    markPuzzleAsShown,
    loadShownSignatures,
    isPuzzleSignatureUsed,
    markSignatureUsed,
    resolvePoolLevelKey,
    pickUnseenPuzzle,
    PUZZLE_SHOWN_SIGNATURES_KEY
  };
})();
