(() => {
  const appGlobal = /** @type {any} */ (globalThis);
  const currentConfig = appGlobal.DawnDashersAppConfig;
  appGlobal.DawnDashersAppConfig = currentConfig && typeof currentConfig === 'object'
    ? currentConfig
    : {};
  appGlobal.DawnDashersAppConfig.enableSuperMode = true;
})();
