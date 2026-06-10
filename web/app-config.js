// Production default config. Local Docker overrides this file with app-config.local.js.
(() => {
  const appGlobal = /** @type {any} */ (globalThis);
  const currentConfig = appGlobal.DawnDashersAppConfig;
  appGlobal.DawnDashersAppConfig = currentConfig && typeof currentConfig === 'object'
    ? currentConfig
    : {};
  appGlobal.DawnDashersAppConfig.enableSuperMode = false;
})();