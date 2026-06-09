using UnityEngine;

namespace DawnDashers.Services
{
    [CreateAssetMenu(menuName = "Dawn Dashers/API Config", fileName = "ApiConfig")]
    public class ApiConfig : ScriptableObject
    {
        [Tooltip("Base URL for API calls. For Docker web proxy use /api")]
        public string baseUrl = "http://localhost:8000";

        [Tooltip("Override URL on WebGL and mobile builds.")]
        public string webAndMobileBaseUrl = "/api";

        [Tooltip("Force local offline content for all platforms.")]
        public bool forceOfflineEverywhere;

        [Tooltip("Use local offline content automatically on iOS/Android.")]
        public bool forceOfflineOnMobile = true;

        [Tooltip("When online request fails, use local fallback content.")]
        public bool useOfflineFallbackWhenRequestFails = true;

        public string GetResolvedBaseUrl()
        {
#if UNITY_WEBGL || UNITY_ANDROID || UNITY_IOS
            if (!string.IsNullOrWhiteSpace(webAndMobileBaseUrl))
            {
                return webAndMobileBaseUrl;
            }
#endif
            return baseUrl;
        }

        public bool UseOfflineMode()
        {
            if (forceOfflineEverywhere)
            {
                return true;
            }

#if UNITY_ANDROID || UNITY_IOS
            return forceOfflineOnMobile;
#else
            return false;
#endif
        }
    }
}
