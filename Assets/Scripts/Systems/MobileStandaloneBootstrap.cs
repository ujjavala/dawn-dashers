using UnityEngine;
using DawnDashers.Services;
using DawnDashers.UI;

namespace DawnDashers.Systems
{
    public class MobileStandaloneBootstrap : MonoBehaviour
    {
        [SerializeField] private bool forceOfflineMode = true;
        [SerializeField] private bool showTouchControls = true;
        [SerializeField] private int targetFrameRate = 60;

        private void Awake()
        {
            Application.targetFrameRate = targetFrameRate;
            QualitySettings.vSyncCount = 0;

            if (forceOfflineMode)
            {
                var config = Resources.FindObjectsOfTypeAll<ApiConfig>();
                if (config != null)
                {
                    for (var i = 0; i < config.Length; i++)
                    {
                        config[i].forceOfflineEverywhere = true;
                    }
                }
            }

            if (showTouchControls)
            {
                var touchRoots = GameObject.FindObjectsByType<TouchControlsVisibility>(FindObjectsSortMode.None);
                for (var i = 0; i < touchRoots.Length; i++)
                {
                    // visibility component handles the actual platform gating.
                }
            }
        }
    }
}
