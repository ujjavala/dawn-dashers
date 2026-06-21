// @ts-nocheck

(() => {
  function setModalOpen(modal, open) {
    if (!modal) {
      return;
    }
    modal.classList.toggle('open', open);
    modal.setAttribute('aria-hidden', String(!open));
  }

  function closeModal(modal) {
    setModalOpen(modal, false);
  }

  function syncPlaybackButton(ctx) {
    if (!ctx.startBtn) {
      return;
    }
    const shouldShowPlay = !ctx.state.running || ctx.state.ended || ctx.state.paused || ctx.state.hungerPaused;
    ctx.startBtn.innerHTML = shouldShowPlay
      ? '<span class="icon-play"></span>'
      : '<span class="icon-pause"></span>';
    ctx.startBtn.setAttribute('aria-label', shouldShowPlay ? 'Play run' : 'Pause run');
    ctx.startBtn.title = shouldShowPlay ? 'Play' : 'Pause';
  }

  function hydrateWalkthroughStep(ctx) {
    const step = ctx.walkthroughSteps[ctx.walkthroughIndexRef()];
    if (!step) {
      return;
    }
    if (ctx.walkthroughTitle) ctx.walkthroughTitle.textContent = step.title;
    if (ctx.walkthroughText) ctx.walkthroughText.textContent = step.text;
    if (ctx.walkthroughVisual) {
      ctx.walkthroughVisual.innerHTML = '';
      if (Array.isArray(step.visuals) && step.visuals.length) {
        step.visuals.forEach((visual) => {
          const chip = document.createElement('div');
          chip.className = 'walk-chip';
          chip.innerHTML = `<span class="walk-icon ${visual.kind}">${visual.icon}</span><span>${visual.label}</span>`;
          ctx.walkthroughVisual.appendChild(chip);
        });
      }
    }
    if (ctx.walkthroughStep) ctx.walkthroughStep.textContent = `Step ${ctx.walkthroughIndexRef() + 1}/${ctx.walkthroughSteps.length}`;
    const onLastStep = ctx.walkthroughIndexRef() === ctx.walkthroughSteps.length - 1;
    if (ctx.walkthroughNextBtn) ctx.walkthroughNextBtn.style.display = onLastStep ? 'none' : '';
    if (ctx.walkthroughBeginBtn) ctx.walkthroughBeginBtn.style.display = onLastStep ? '' : 'none';
  }

  function openWalkthrough(ctx) {
    ctx.setWalkthroughIndex(0);
    hydrateWalkthroughStep(ctx);
    if (!ctx.walkthroughModal) {
      ctx.launchRunFromStartButton(false);
      return;
    }
    setModalOpen(ctx.walkthroughModal, true);
  }

  function closeWalkthroughAndStart(ctx) {
    closeModal(ctx.walkthroughModal);
    ctx.markWalkthroughSeen();
    ctx.launchRunFromStartButton(false);
  }

  function setLanding(ctx, open) {
    if (!ctx.landingOverlay) {
      return;
    }
    ctx.landingOverlay.classList.toggle('open', open);
    ctx.landingOverlay.setAttribute('aria-hidden', String(!open));
    ctx.syncAudioToRegion();
  }

  function updateMobileMenuButton(ctx, visible, runningActive) {
    if (!ctx.mobileMenuBtn) {
      return;
    }
    if (!visible) {
      ctx.mobileMenuBtn.classList.remove('show', 'state-pause', 'state-resume');
      return;
    }

    ctx.mobileMenuBtn.classList.add('show');
    ctx.mobileMenuBtn.classList.toggle('state-pause', runningActive);
    ctx.mobileMenuBtn.classList.toggle('state-resume', !runningActive);
    const isResumeState = !runningActive;
    ctx.mobileMenuBtn.setAttribute('aria-label', isResumeState ? 'Resume run' : 'Pause and open menu');
    ctx.mobileMenuBtn.setAttribute('title', isResumeState ? 'Resume run' : 'Pause and open menu');
    if (ctx.mobileMenuIcon) {
      ctx.mobileMenuIcon.textContent = isResumeState ? '▶' : '⏸';
    }
  }

  function syncMobileControlVisibility(ctx) {
    if (!ctx.dockEl) {
      return;
    }
    const gameplayVisible = ctx.hudEl?.style.display !== 'none';
    const isMobileViewport = globalThis.matchMedia?.('(max-width: 720px)')?.matches;

    if (!isMobileViewport || !gameplayVisible) {
      ctx.dockEl.classList.remove('mobile-hidden');
      updateMobileMenuButton(ctx, false, false);
      return;
    }

    const hideDockDuringRun = ctx.state.running && !ctx.state.paused && !ctx.state.ended;
    ctx.dockEl.classList.toggle('mobile-hidden', hideDockDuringRun);
    updateMobileMenuButton(ctx, hideDockDuringRun, hideDockDuringRun);
  }

  function setGameplayChrome(ctx, visible) {
    const display = visible ? '' : 'none';
    if (ctx.hudEl) ctx.hudEl.style.display = display;
    if (ctx.missionEl) ctx.missionEl.style.display = display;
    if (ctx.dockEl) ctx.dockEl.style.display = display;
    if (ctx.livesEl) ctx.livesEl.style.display = display;
    syncMobileControlVisibility(ctx);
  }

  function openFoodShop(ctx) {
    if (!ctx.foodShopModal) {
      return;
    }
    hideHungerModal(ctx);
    ctx.renderFoodShop();
    setModalOpen(ctx.foodShopModal, true);
  }

  function showHungerModal(ctx) {
    if (!ctx.hungerModal) {
      return;
    }
    ctx.state.hungerModalDismissedUntil = 0;
    if (ctx.hungerText && ctx.characters[ctx.selectedCharacter]) {
      const currentName = ctx.characters[ctx.selectedCharacter].name;
      const canAfford = ctx.canAffordAnyFood();
      if (canAfford) {
        ctx.hungerText.textContent = `Oho! ${currentName} is hungry. You are out of food and energy is too low. Collect score tokens, open Food Cart, and buy supplies to continue.`;
      } else {
        ctx.hungerText.textContent = `Oho! ${currentName} is starving! You don't have enough score to buy food. Your dasher will lose a life in ~30 seconds...`;
      }
    }
    setModalOpen(ctx.hungerModal, true);
  }

  function hideHungerModal(ctx, manualDismiss = false) {
    if (!ctx.hungerModal) {
      return;
    }
    if (manualDismiss) {
      ctx.state.hungerModalDismissedUntil = Date.now() + ctx.HUNGER_MODAL_RESURFACE_DELAY_MS;
    }
    setModalOpen(ctx.hungerModal, false);
  }

  function openClueModal(ctx, options = {}) {
    if (!ctx.clueModal) {
      return;
    }
    setModalOpen(ctx.clueModal, true);
    if (ctx.clueTerrain && options.terrainLabel) {
      ctx.clueTerrain.textContent = options.terrainLabel;
    }
    if (ctx.clueText && options.clueText) {
      ctx.clueText.textContent = options.clueText;
    }
  }

  function openPuzzleModal(ctx, options = {}) {
    if (!ctx.puzzleModal) {
      return;
    }
    setModalOpen(ctx.puzzleModal, true);
    if (ctx.puzzleTerrain && options.terrainLabel) {
      ctx.puzzleTerrain.textContent = options.terrainLabel;
    }
    if (typeof options.onHydrate === 'function') {
      options.onHydrate();
    }
    if (ctx.puzzleStatus && options.statusText) {
      ctx.puzzleStatus.textContent = options.statusText;
    }
  }

  function openLevelCompleteOverlay(ctx, options = {}) {
    if (ctx.lcEmoji) ctx.lcEmoji.textContent = options.emoji || '🎉';
    if (ctx.lcCongrats && options.congratsText) ctx.lcCongrats.textContent = options.congratsText;
    if (ctx.lcTeaser && options.teaserText) ctx.lcTeaser.textContent = options.teaserText;
    if (ctx.lcBonus && options.bonusText) ctx.lcBonus.textContent = options.bonusText;
    setModalOpen(ctx.levelCompleteOverlay, true);
  }

  function closeLevelCompleteOverlay(ctx) {
    setModalOpen(ctx.levelCompleteOverlay, false);
  }

  function renderLives(ctx) {
    if (!ctx.livesEl) {
      return;
    }
    ctx.livesEl.innerHTML = '';
    for (let i = 0; i < ctx.state.maxLives; i += 1) {
      const heart = document.createElement('span');
      heart.className = `heart${i < ctx.state.health ? '' : ' off'}`;
      heart.textContent = '❤';
      ctx.livesEl.appendChild(heart);
    }
  }

  function syncHud(ctx) {
    ctx.scoreEl.textContent = ctx.state.score;
    if (ctx.energyEl) {
      ctx.energyEl.textContent = `${Math.round(ctx.state.energy)}/${Math.round(ctx.state.maxEnergy)}`;
    }
    if (ctx.foodEl) {
      ctx.foodEl.textContent = String(ctx.state.foodStocks[ctx.selectedCharacter] || 0);
    }
    ctx.fragmentEl.textContent = `${ctx.state.fragments}/7`;
    ctx.objectiveEl.textContent = ctx.state.objective;
    ctx.messageEl.textContent = ctx.state.message;
    if (ctx.reviveBtn) {
      const canReviveNow = Boolean(ctx.state.pendingReviveOffer);
      ctx.reviveBtn.style.display = canReviveNow ? 'grid' : 'none';
      ctx.reviveBtn.disabled = !canReviveNow;
      ctx.reviveBtn.classList.toggle('revive-ready', canReviveNow);
      ctx.reviveBtn.title = canReviveNow ? 'Use revive option' : 'Revive';
      ctx.reviveBtn.setAttribute('aria-label', canReviveNow ? 'Use revive option' : 'Revive unavailable');
    }
    renderLives(ctx);
    ctx.updateCharacterAvailability();
    ctx.refreshCharacterBio();
    ctx.syncMobileControlVisibility();
    // Tape strip
    const tapeStripEl = document.getElementById('tmTapeStrip');
    if (tapeStripEl) {
      const fm = globalThis.DawnDashersFlowMachine;
      if (fm && typeof fm.getTape === 'function' && ctx.state.running) {
        const tape = fm.getTape();
        const head = fm.getHead();
        const recent = tape.slice(Math.max(0, head - 4), head + 1);
        const cells = recent.map((c, i) => {
          const isHead = (tape.indexOf(c) === head);
          const cell = `${c.from}──${c.symbol}──►${c.to}`;
          return isHead ? `[${cell}]` : cell;
        }).join('  ');
        tapeStripEl.textContent = `▶ ${cells}`;
        tapeStripEl.style.display = 'block';
      } else {
        tapeStripEl.style.display = 'none';
      }
    }
  }

  function bindModalControls(ctx) {
    ctx.bindClick(ctx.closeClueBtn, () => closeModal(ctx.clueModal));
    ctx.bindClick(ctx.closePuzzleBtn, () => {
      if (typeof ctx.resumeFromPuzzleModal === 'function') {
        ctx.resumeFromPuzzleModal();
      } else {
        ctx.puzzleState.activePuzzle = null;
        closeModal(ctx.puzzleModal);
      }
    });
    ctx.bindClick(ctx.clueHintBtn, ctx.requestHint);
    ctx.bindClick(ctx.clueSolveBtn, () => {
      closeModal(ctx.clueModal);
      ctx.requestHint();
    });
    ctx.bindClick(ctx.landingSettingsBtn, () => {
      if (!ctx.settingsModal) {
        return;
      }
      setModalOpen(ctx.settingsModal, true);
    });
    ctx.bindClick(ctx.closeSettingsBtn, () => closeModal(ctx.settingsModal));

    ctx.bindSelectChange(ctx.difficultySelect, ctx.gameDifficulty, () => {
      const nextDifficulty = ctx.difficultySelect.value;
      ctx.setGameDifficulty(ctx.difficultyMultipliers[nextDifficulty] ? nextDifficulty : 'medium');
      ctx.localStorage.setItem(ctx.DIFFICULTY_KEY, ctx.gameDifficultyRef());
      ctx.pushMessage(`Difficulty: ${ctx.gameDifficultyRef()[0].toUpperCase()}${ctx.gameDifficultyRef().slice(1)}`);
    });
    if (ctx.superModeRow) {
      ctx.superModeRow.style.display = ctx.superModeAllowed ? '' : 'none';
    }
    if (ctx.superModeSelect && !ctx.superModeAllowed) {
      ctx.superModeSelect.value = 'off';
      ctx.superModeSelect.disabled = true;
    }
    ctx.bindSelectChange(ctx.superModeSelect, ctx.superModeEnabledRef() ? 'on' : 'off', () => {
      if (!ctx.superModeAllowed) {
        ctx.setSuperModeEnabled(false);
        if (ctx.superModeSelect) {
          ctx.superModeSelect.value = 'off';
        }
        ctx.localStorage.setItem(ctx.SUPER_MODE_KEY, 'off');
        ctx.updateCharacterAvailability();
        syncHud(ctx);
        return;
      }
      const enabled = ctx.superModeSelect.value === 'on';
      ctx.setSuperModeEnabled(enabled);
      ctx.localStorage.setItem(ctx.SUPER_MODE_KEY, enabled ? 'on' : 'off');
      ctx.syncAdminProgressToSelectedCharacter();
      ctx.updateCharacterAvailability();
      syncHud(ctx);
      ctx.pushMessage(enabled
        ? 'Super Mode enabled: all dashers and terrains unlocked.'
        : 'Super Mode disabled. Normal unlock rules restored.');
    });
    ctx.bindSelectChange(ctx.terrain3dSelect, ctx.terrain3dEnabledRef() ? 'on' : 'off', () => {
      const enabled = ctx.terrain3dSelect.value !== 'off';
      ctx.setTerrain3dEnabled(enabled);
      ctx.localStorage.setItem(ctx.TERRAIN_3D_KEY, enabled ? 'on' : 'off');
      ctx.updateThreeVisibility();
      ctx.pushMessage(`3D Terrain: ${enabled ? 'On' : 'Off'}`);
    });
    ctx.bindSelectChange(ctx.musicToggleSelect, ctx.musicEnabledRef() ? 'on' : 'off', () => {
      const enabled = ctx.musicToggleSelect.value !== 'off';
      ctx.setMusicEnabled(enabled);
      ctx.localStorage.setItem(ctx.MUSIC_ENABLED_KEY, enabled ? 'on' : 'off');
      ctx.ensureAudioStarted();
      ctx.syncAudioToRegion();
      ctx.pushMessage(`Music: ${enabled ? 'On' : 'Off'}`);
    });
    ctx.bindRangeInput(ctx.musicVolumeRange, Math.round(ctx.musicVolumeRef() * 100), () => {
      const volume = Math.max(0, Math.min(1, Number(ctx.musicVolumeRange.value) / 100));
      ctx.setMusicVolume(volume);
      ctx.localStorage.setItem(ctx.MUSIC_VOLUME_KEY, String(volume));
      ctx.syncAudioToRegion();
    });
    ctx.bindRangeInput(ctx.sfxVolumeRange, Math.round(ctx.sfxVolumeRef() * 100), () => {
      const volume = Math.max(0, Math.min(1, Number(ctx.sfxVolumeRange.value) / 100));
      ctx.setSfxVolume(volume);
      ctx.localStorage.setItem(ctx.SFX_VOLUME_KEY, String(volume));
      ctx.syncAudioToRegion();
    });
    ctx.bindClick(ctx.pastGamesBtn, () => {
      if (!ctx.pastGamesModal) {
        return;
      }
      ctx.renderPastGames();
      setModalOpen(ctx.pastGamesModal, true);
    });
    ctx.bindClick(ctx.closePastGamesBtn, () => closeModal(ctx.pastGamesModal));
    ctx.bindClick(ctx.closeFoodShopBtn, () => closeModal(ctx.foodShopModal));
    ctx.bindClick(ctx.closeHungerBtn, () => hideHungerModal(ctx, true));
    ctx.bindClick(ctx.foodCheckoutBtn, ctx.checkoutFoodCart);
    ctx.bindClick(ctx.hungerOpenShopBtn, () => openFoodShop(ctx));
    ctx.bindClick(ctx.clearFoodCartBtn, () => {
      ctx.state.foodCartByCharacter[ctx.selectedCharacter] = {};
      ctx.renderFoodShop();
    });
    ctx.bindClick(ctx.landingHelpBtn, () => {
      if (!ctx.helpModal) {
        return;
      }
      setModalOpen(ctx.helpModal, true);
    });
    ctx.bindClick(ctx.closeHelpBtn, () => closeModal(ctx.helpModal));
    ctx.bindClick(ctx.walkthroughNextBtn, () => {
      ctx.setWalkthroughIndex(Math.min(ctx.walkthroughIndexRef() + 1, ctx.walkthroughSteps.length - 1));
      ctx.hydrateWalkthroughStep();
    });
    ctx.bindClick(ctx.walkthroughBeginBtn, ctx.closeWalkthroughAndStart);
    ctx.bindClick(ctx.walkthroughSkipBtn, ctx.closeWalkthroughAndStart);
  }

  function bindLandingFlowControls(ctx) {
    if (ctx.lcContinueBtn) {
      ctx.lcContinueBtn.addEventListener('click', () => {
        if (ctx.levelCompleteTimerRef()) {
          clearTimeout(ctx.levelCompleteTimerRef());
          ctx.setLevelCompleteTimer(null);
        }
        closeLevelCompleteOverlay(ctx);
        ctx.state.continueFromLevelUnlock = true;
        ctx.setCharacterSelectionOpen(true);
        ctx.setLanding(false);
        ctx.setGameplayChrome(false);
        ctx.state.objective = 'New level unlocked. Pick your dasher for the next run.';
        ctx.state.message = 'Level clear! Select a character to continue.';
        syncHud(ctx);
      });
    }
    if (ctx.playNowBtn) {
      ctx.playNowBtn.addEventListener('click', () => {
        ctx.state.continueFromLevelUnlock = false;
        ctx.setLanding(false);
        ctx.setGameplayChrome(false);
        ctx.setCharacterSelectionOpen(true);
        ctx.state.objective = 'Choose your character, then tap Start Run.';
        ctx.state.message = 'Select your dasher power first.';
        syncHud(ctx);
      });
    }
    if (ctx.characterBackBtn) {
      ctx.characterBackBtn.addEventListener('click', () => {
        ctx.setCharacterSelectionOpen(false);
        ctx.setLanding(true);
        ctx.setGameplayChrome(false);
      });
    }
    if (ctx.characterStartBtn) {
      ctx.characterStartBtn.addEventListener('click', () => {
        const focusId = ctx.previewCharacterRef() || ctx.selectedCharacter;
        if (!ctx.superModeEnabledRef() && !ctx.isCharacterAvailableForCurrentLevel(focusId)) {
          ctx.refreshCharacterBio();
          ctx.syncCharacterStartButtonState();
          return;
        }
        if (focusId !== ctx.selectedCharacter) {
          ctx.setSelectedCharacter(focusId);
        }
        const keepProgress = ctx.state.continueFromLevelUnlock;
        ctx.state.continueFromLevelUnlock = false;
        ctx.setCharacterSelectionOpen(false);
        ctx.setGameplayChrome(true);
        ctx.onStartButtonPressed(keepProgress);
      });
    }
  }

  function updateTapeStrip(ctx) {
    const el = ctx && ctx.tmTapeStrip;
    if (!el) return;
    const tape = typeof ctx.getTape === 'function' ? ctx.getTape() : [];
    const cells = tape.slice(-6);
    el.innerHTML = '';
    if (cells.length === 0) {
      el.style.display = 'none';
      el.setAttribute('aria-hidden', 'true');
      return;
    }
    cells.forEach((cell, i) => {
      const span = document.createElement('span');
      span.className = 'tm-cell' + (i === cells.length - 1 ? ' tm-cell--current' : '');
      const dir = cell.dir || '';
      span.textContent = (cell.from || '?') + ' ─' + dir + '→ ' + (cell.to || '?');
      el.appendChild(span);
    });
    el.style.display = 'flex';
    el.setAttribute('aria-hidden', 'false');
  }

  globalThis.DawnDashersGameUi = {
    closeModal,
    openClueModal,
    openPuzzleModal,
    openLevelCompleteOverlay,
    closeLevelCompleteOverlay,
    syncPlaybackButton,
    hydrateWalkthroughStep,
    openWalkthrough,
    closeWalkthroughAndStart,
    setLanding,
    setGameplayChrome,
    syncMobileControlVisibility,
    updateMobileMenuButton,
    openFoodShop,
    showHungerModal,
    hideHungerModal,
    renderLives,
    syncHud,
    updateTapeStrip,
    bindModalControls,
    bindLandingFlowControls
  };
})();