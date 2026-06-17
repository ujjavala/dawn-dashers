// @ts-nocheck
// Dawn Dashers — Turing Machine State Engine
//
// The game state is modelled as a deterministic Turing Machine:
//   Q  — finite set of machine states       (FLOW_STATES, q_* identifiers)
//   Σ  — input alphabet of event symbols    (FLOW_SYMBOLS, σ_* identifiers)
//   δ  — transition function  Q × Σ → Q × {R, L, S}
//   q₀ — initial state: q_land  (landing screen)
//   q_accept — HALT-ACCEPT  (expedition complete / final level cleared)
//   q_reject — HALT-REJECT  (game over)
//
// Each call to step(σ) reads one symbol σ, looks up δ(q, σ),
// writes a cell to the tape, moves the head (R/L/S), and updates
// the derived boolean flags on the game state object.
//
// The tape records every significant transition so it can be
// replayed, inspected, or used to drive a future replay feature.

(() => {
  const MAX_LEVEL_INDEX = 8;
  const TAPE_MAX_CELLS  = 256;

  // ─── Tape head directions ─────────────────────────────────────────────────
  const DIR = Object.freeze({ R: 'R', L: 'L', S: 'S' });

  // ─── Level-state helpers ──────────────────────────────────────────────────
  function clampLevel(level) {
    if (!Number.isFinite(level)) return 0;
    return Math.max(0, Math.min(MAX_LEVEL_INDEX, Math.floor(level)));
  }

  function toFlowLevelState(level) {
    return `level_${clampLevel(level) + 1}`;
  }

  const FLOW_LEVEL_STATES = Object.freeze(
    Array.from({ length: MAX_LEVEL_INDEX + 1 }, (_u, i) => toFlowLevelState(i))
  );

  // ─── Input Alphabet Σ — every symbol the machine can read ────────────────
  const FLOW_SYMBOLS = Object.freeze({
    SHOW_LANDING:           'σ_land',
    SHOW_CHARACTER_SELECT:  'σ_select',
    START_RUN:              'σ_start',
    MANUAL_TOGGLE:          'σ_manual',
    HUNGER_TRIGGER:         'σ_hunger',
    HUNGER_RECOVER:         'σ_fed',
    POPUP_OPEN:             'σ_popup_open',
    POPUP_CLOSE:            'σ_popup_close',
    PUZZLE_OPEN:            'σ_puzzle_open',
    PUZZLE_CLOSE:           'σ_puzzle_close',
    LEVEL_TRANSITION_OPEN:  'σ_level_clear',
    LEVEL_TRANSITION_ABORT: 'σ_level_abort',
    LEVEL_SET:              'σ_level_set',
    GAME_OVER:              'σ_reject',
  });

  // Reverse map: legacy event name → symbol string
  const EVENT_TO_SYMBOL = Object.fromEntries(
    Object.entries(FLOW_SYMBOLS).map(([k, v]) => [k, v])
  );

  // ─── Machine States Q ─────────────────────────────────────────────────────
  const FLOW_STATES = Object.freeze({
    LANDING:          'q_land',
    CHARACTER_SELECT: 'q_select',
    RUNNING:          'q_run',
    PAUSED_MANUAL:    'q_pause',
    PAUSED_POPUP:     'q_popup',
    PAUSED_HUNGER:    'q_hunger',
    PUZZLE:           'q_puzzle',
    LEVEL_TRANSITION: 'q_level_end',
    GAME_OVER:        'q_reject',   // HALT-REJECT
    ACCEPT:           'q_accept',   // HALT-ACCEPT  (final level cleared)
    IDLE:             'q_land',     // legacy alias
  });

  const HALT_STATES = new Set(['q_reject', 'q_accept']);

  // ─── Transition Table δ(q, σ) → { next, dir } ────────────────────────────
  // Rows are matched top-to-bottom; first match wins.
  // from: exact state string or '*' (wildcard — matches any state)
  // next: null means "resolve dynamically in step()" (used for POPUP_CLOSE)
  // dir:  R = head advances (progress), L = head rewinds (revive/undo), S = stay
  const DELTA = [
    // ── Navigation ──────────────────────────────────────────────────────────
    { from: '*',        on: 'σ_land',         next: 'q_land',      dir: DIR.R },
    { from: '*',        on: 'σ_select',        next: 'q_select',    dir: DIR.R },
    { from: '*',        on: 'σ_start',         next: 'q_run',       dir: DIR.R },

    // ── Manual pause toggle ──────────────────────────────────────────────────
    { from: 'q_run',    on: 'σ_manual',        next: 'q_pause',     dir: DIR.R },
    { from: 'q_pause',  on: 'σ_manual',        next: 'q_run',       dir: DIR.R },

    // ── Hunger cycle ─────────────────────────────────────────────────────────
    { from: 'q_run',    on: 'σ_hunger',        next: 'q_hunger',    dir: DIR.R },
    { from: 'q_pause',  on: 'σ_hunger',        next: 'q_hunger',    dir: DIR.R },
    { from: 'q_hunger', on: 'σ_fed',           next: 'q_run',       dir: DIR.R },

    // ── Popup overlay ────────────────────────────────────────────────────────
    { from: 'q_run',    on: 'σ_popup_open',    next: 'q_popup',     dir: DIR.R },
    { from: 'q_pause',  on: 'σ_popup_open',    next: 'q_popup',     dir: DIR.R },
    { from: 'q_popup',  on: 'σ_popup_close',   next: null,          dir: DIR.R }, // resolved dynamically

    // ── Puzzle ────────────────────────────────────────────────────────────────
    { from: '*',        on: 'σ_puzzle_open',   next: 'q_puzzle',    dir: DIR.R },
    { from: 'q_puzzle', on: 'σ_puzzle_close',  next: 'q_run',       dir: DIR.R },

    // ── Level transition ─────────────────────────────────────────────────────
    { from: '*',        on: 'σ_level_clear',   next: 'q_level_end', dir: DIR.R },
    // HEAD MOVES LEFT on abort — narrative rewinds to running state
    { from: 'q_level_end', on: 'σ_level_abort', next: 'q_run',     dir: DIR.L },

    // ── Halt ─────────────────────────────────────────────────────────────────
    { from: '*',        on: 'σ_reject',        next: 'q_reject',    dir: DIR.R },
    { from: '*',        on: 'σ_accept',        next: 'q_accept',    dir: DIR.R },

    // ── Level-set: tape-only, no mode change (head stays) ───────────────────
    { from: '*',        on: 'σ_level_set',     next: null,          dir: DIR.S },
  ];

  // ─── Factory ──────────────────────────────────────────────────────────────
  function create(state) {

    // ── Tape ──────────────────────────────────────────────────────────────────
    // Each cell: { symbol, from, to, dir, payload, ts }
    const tape = [];
    let head = -1;

    function writeTape(symbol, fromQ, toQ, dir, payload) {
      if (dir === DIR.L && head > 0) {
        // Rewind: truncate tape after the new head position (like a real TM)
        head = head - 1;
        tape.splice(head + 1);
      }
      tape.push({ symbol, from: fromQ, to: toQ, dir, payload, ts: Date.now() });
      if (tape.length > TAPE_MAX_CELLS) tape.shift();
      head = tape.length - 1;
    }

    // ── State register q ─────────────────────────────────────────────────────
    let q = FLOW_STATES.LANDING;

    function applyLevelState(level) {
      state.flowLevelState = toFlowLevelState(level);
    }

    // Derive boolean flags from the current machine state
    function applyModeFlags(mode) {
      state.flowMode     = mode;
      state.running      = ['q_run','q_pause','q_popup','q_hunger','q_puzzle'].includes(mode);
      state.ended        = HALT_STATES.has(mode);
      state.paused       = ['q_pause','q_popup','q_hunger','q_puzzle','q_level_end'].includes(mode);
      state.hungerPaused = mode === 'q_hunger';
      state.popupPaused  = mode === 'q_popup';
    }

    applyLevelState(state.progressLevel || 0);
    applyModeFlags(q);

    // ── Transition lookup δ(q, σ) ────────────────────────────────────────────
    function findRule(currentQ, symbol) {
      return DELTA.find((r) => r.from === currentQ && r.on === symbol)
          || DELTA.find((r) => r.from === '*'       && r.on === symbol)
          || null;
    }

    // ── step(event, payload) — the core TM step function ────────────────────
    function step(event, payload = {}) {
      state.flowLastEvent = event;

      // Translate legacy event name → symbol (or pass through if already a σ_ value)
      const symbol = EVENT_TO_SYMBOL[event] ?? event;

      // Level-state is a side-effect on any symbol that carries a level
      if (symbol === FLOW_SYMBOLS.LEVEL_SET
          || Object.prototype.hasOwnProperty.call(payload, 'level')) {
        applyLevelState(payload.level ?? state.progressLevel);
      }

      // σ_level_set: write to tape but do not change machine state
      if (symbol === FLOW_SYMBOLS.LEVEL_SET) {
        writeTape(symbol, q, q, DIR.S, payload);
        return false;
      }

      const rule = findRule(q, symbol);
      if (!rule) return false;

      // Resolve dynamic next-state (POPUP_CLOSE, LEVEL_SET)
      let nextQ = rule.next;
      if (nextQ === null) {
        if (symbol === FLOW_SYMBOLS.POPUP_CLOSE) {
          nextQ = payload?.resumeToManual
            ? FLOW_STATES.PAUSED_MANUAL
            : FLOW_STATES.RUNNING;
        } else {
          // tape-only: stay in current state
          writeTape(symbol, q, q, rule.dir, payload);
          return false;
        }
      }

      if (nextQ === q) {
        writeTape(symbol, q, q, DIR.S, payload);
        return false;
      }

      const prevQ = q;
      q = nextQ;
      writeTape(symbol, prevQ, nextQ, rule.dir, payload);
      applyModeFlags(q);
      return true;
    }

    return {
      sendFlow:        step,
      FLOW_STATES,
      FLOW_LEVEL_STATES,
      FLOW_SYMBOLS,
      DIR,
      getTape:  () => [...tape],
      getHead:  () => head,
    };
  }

  globalThis.DawnDashersFlowMachine = {
    create,
    FLOW_STATES,
    FLOW_LEVEL_STATES,
    FLOW_SYMBOLS,
    DIR,
  };
})();
