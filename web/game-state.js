// @ts-nocheck

(() => {
  const MAX_LEVEL_INDEX = 8;

  function clampLevel(level) {
    if (!Number.isFinite(level)) {
      return 0;
    }
    return Math.max(0, Math.min(MAX_LEVEL_INDEX, Math.floor(level)));
  }

  function toFlowLevelState(level) {
    return `level_${clampLevel(level) + 1}`;
  }

  const FLOW_LEVEL_STATES = Object.freeze(Array.from({ length: MAX_LEVEL_INDEX + 1 }, (_unused, index) => toFlowLevelState(index)));

  const FLOW_STATES = {
    IDLE: 'idle',
    LANDING: 'landing',
    CHARACTER_SELECT: 'character_select',
    RUNNING: 'running',
    PAUSED_MANUAL: 'paused_manual',
    PAUSED_POPUP: 'paused_popup',
    PAUSED_HUNGER: 'paused_hunger',
    PUZZLE: 'puzzle',
    LEVEL_TRANSITION: 'level_transition',
    GAME_OVER: 'game_over'
  };

  function createFlowMachine(initialMode, transitions) {
    let mode = initialMode;
    return {
      send(event, payload = {}) {
        const eventTransitions = transitions[event] || {};
        const transition = eventTransitions[mode] || eventTransitions['*'];
        if (!transition) {
          return { changed: false, mode };
        }
        const nextMode = typeof transition.target === 'function'
          ? transition.target(mode, payload)
          : transition.target;
        if (!nextMode || nextMode === mode) {
          return { changed: false, mode };
        }
        mode = nextMode;
        return { changed: true, mode };
      }
    };
  }

  function create(state) {
    function applyFlowLevelState(level) {
      state.flowLevelState = toFlowLevelState(level);
    }

    function applyFlowMode(mode) {
      state.flowMode = mode;
      state.running = mode === FLOW_STATES.RUNNING
        || mode === FLOW_STATES.PAUSED_MANUAL
        || mode === FLOW_STATES.PAUSED_POPUP
        || mode === FLOW_STATES.PAUSED_HUNGER
        || mode === FLOW_STATES.PUZZLE;
      state.ended = mode === FLOW_STATES.GAME_OVER;
      state.paused = mode === FLOW_STATES.PAUSED_MANUAL
        || mode === FLOW_STATES.PAUSED_POPUP
        || mode === FLOW_STATES.PAUSED_HUNGER
        || mode === FLOW_STATES.PUZZLE
        || mode === FLOW_STATES.LEVEL_TRANSITION;
      state.hungerPaused = mode === FLOW_STATES.PAUSED_HUNGER;
      state.popupPaused = mode === FLOW_STATES.PAUSED_POPUP;
    }

    applyFlowLevelState(state.progressLevel || 0);

    const flowMachine = createFlowMachine(FLOW_STATES.LANDING, {
      SHOW_LANDING: {
        '*': { target: FLOW_STATES.LANDING }
      },
      SHOW_CHARACTER_SELECT: {
        '*': { target: FLOW_STATES.CHARACTER_SELECT }
      },
      START_RUN: {
        '*': { target: FLOW_STATES.RUNNING }
      },
      GAME_OVER: {
        '*': { target: FLOW_STATES.GAME_OVER }
      },
      LEVEL_TRANSITION_OPEN: {
        '*': { target: FLOW_STATES.LEVEL_TRANSITION }
      },
      PUZZLE_OPEN: {
        '*': { target: FLOW_STATES.PUZZLE }
      },
      HUNGER_TRIGGER: {
        [FLOW_STATES.RUNNING]: { target: FLOW_STATES.PAUSED_HUNGER },
        [FLOW_STATES.PAUSED_MANUAL]: { target: FLOW_STATES.PAUSED_HUNGER }
      },
      HUNGER_RECOVER: {
        [FLOW_STATES.PAUSED_HUNGER]: { target: FLOW_STATES.RUNNING }
      },
      POPUP_OPEN: {
        [FLOW_STATES.RUNNING]: { target: FLOW_STATES.PAUSED_POPUP },
        [FLOW_STATES.PAUSED_MANUAL]: { target: FLOW_STATES.PAUSED_POPUP }
      },
      POPUP_CLOSE: {
        [FLOW_STATES.PAUSED_POPUP]: {
          target: (_mode, payload) => (payload?.resumeToManual ? FLOW_STATES.PAUSED_MANUAL : FLOW_STATES.RUNNING)
        }
      },
      MANUAL_TOGGLE: {
        [FLOW_STATES.RUNNING]: { target: FLOW_STATES.PAUSED_MANUAL },
        [FLOW_STATES.PAUSED_MANUAL]: { target: FLOW_STATES.RUNNING }
      },
      PUZZLE_CLOSE: {
        [FLOW_STATES.PUZZLE]: { target: FLOW_STATES.RUNNING }
      },
      LEVEL_TRANSITION_ABORT: {
        [FLOW_STATES.LEVEL_TRANSITION]: { target: FLOW_STATES.RUNNING }
      },
      LEVEL_SET: {
        '*': {
          target: (mode) => mode
        }
      }
    });

    // Sync state to initial FSM mode
    applyFlowMode(FLOW_STATES.LANDING);

    function sendFlow(event, payload = {}) {
      state.flowLastEvent = event;
      if (event === 'LEVEL_SET' || Object.prototype.hasOwnProperty.call(payload, 'level')) {
        applyFlowLevelState(payload.level ?? state.progressLevel);
      }
      const result = flowMachine.send(event, payload);
      if (result.changed) {
        applyFlowMode(result.mode);
      }
      return result.changed;
    }

    return {
      FLOW_STATES,
      FLOW_LEVEL_STATES,
      sendFlow
    };
  }

  globalThis.DawnDashersFlowMachine = {
    create,
    FLOW_STATES,
    FLOW_LEVEL_STATES
  };
})();