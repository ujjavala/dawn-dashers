using UnityEngine;

namespace DawnDashers.Systems
{
    public class PlatformBootstrap : MonoBehaviour
    {
        [SerializeField] private int targetFpsDesktop = 60;
        [SerializeField] private int targetFpsMobile = 60;

        private void Awake()
        {
            QualitySettings.vSyncCount = 0;
            Application.targetFrameRate = Application.isMobilePlatform ? targetFpsMobile : targetFpsDesktop;

#if UNITY_WEBGL
            Application.backgroundLoadingPriority = ThreadPriority.Low;
#endif
        }
    }
}
