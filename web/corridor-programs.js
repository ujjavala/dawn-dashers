// @ts-nocheck
// Dawn Dashers — TM Corridor Programs
//
// Each program is a small deterministic Turing Machine the player enacts live:
// the three game lanes represent tape symbols 0 / B(blank) / 1, and the player
// IS the read/write head. One symbol set flies down the track per step; the
// player must be in the matching lane when it arrives.
//
// Programs are keyed by progressLevel (0-indexed).

(() => {
  const TM_CORRIDOR_PROGRAMS = {
    // ── Level 3 (progressLevel 2) — Bit Flipper ──────────────────────────────
    // Single-state TM: reads each symbol, writes its complement, moves right.
    // Input 0 1  →  writes 1 0  →  hits B  →  q_accept
    2: {
      id: 'corridor_l4_flip',
      name: 'Bit Flipper',
      description: 'Invert every bit until the blank. You are the head.',
      states: ['q0', 'q_accept', 'q_reject'],
      startState: 'q0',
      input: ['0', '1'],
      transitions: {
        'q0,0': { next: 'q0',       write: '1', dir: 'R' },
        'q0,1': { next: 'q0',       write: '0', dir: 'R' },
        'q0,B': { next: 'q_accept', write: 'B', dir: 'S' }
      }
    },

    // ── Level 5 (progressLevel 4) — Parity Checker ───────────────────────────
    // Two states track even/odd count of 1s seen.
    // Input 0 1 1 0  →  two 1s = even  →  q_accept
    4: {
      id: 'corridor_l6_parity',
      name: 'Parity Checker',
      description: "Track whether you've seen an even number of 1s.",
      states: ['q_even', 'q_odd', 'q_accept', 'q_reject'],
      startState: 'q_even',
      input: ['0', '1', '1', '0'],
      transitions: {
        'q_even,0': { next: 'q_even',  write: '0', dir: 'R' },
        'q_even,1': { next: 'q_odd',   write: '1', dir: 'R' },
        'q_even,B': { next: 'q_accept', write: 'B', dir: 'S' },
        'q_odd,0':  { next: 'q_odd',   write: '0', dir: 'R' },
        'q_odd,1':  { next: 'q_even',  write: '1', dir: 'R' },
        'q_odd,B':  { next: 'q_reject', write: 'B', dir: 'S' }
      }
    },

    // ── Level 8 (progressLevel 7) — Even-Length Protocol ─────────────────────
    // Two states alternate on every symbol (value irrelevant).
    // Input 0 1 0 1  →  length 4 = even  →  q_accept
    7: {
      id: 'corridor_l8_even_length',
      name: 'Even-Length Protocol',
      description: 'Accept binary strings of even length. Two states, every symbol flips.',
      states: ['q_A', 'q_B', 'q_accept', 'q_reject'],
      startState: 'q_A',
      input: ['0', '1', '0', '1'],
      transitions: {
        'q_A,0': { next: 'q_B', write: '0', dir: 'R' },
        'q_A,1': { next: 'q_B', write: '1', dir: 'R' },
        'q_A,B': { next: 'q_accept', write: 'B', dir: 'S' },
        'q_B,0': { next: 'q_A', write: '0', dir: 'R' },
        'q_B,1': { next: 'q_A', write: '1', dir: 'R' },
        'q_B,B': { next: 'q_reject', write: 'B', dir: 'S' }
      }
    }
  };

  // Returns a fresh runtime copy of a program (mutable tape with blank appended)
  function cloneProgram(level) {
    const prog = TM_CORRIDOR_PROGRAMS[level];
    if (!prog) return null;
    return {
      ...prog,
      input: [...prog.input, 'B']   // append blank sentinel
    };
  }

  globalThis.DawnDashersCorridorPrograms = { TM_CORRIDOR_PROGRAMS, cloneProgram };
})();
