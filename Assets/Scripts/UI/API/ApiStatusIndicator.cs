using DawnDashers.Services;
using TMPro;
using UnityEngine;

namespace DawnDashers.UI.API
{
    public class ApiStatusIndicator : MonoBehaviour
    {
        [SerializeField] private ApiServiceClient apiClient;
        [SerializeField] private TMP_Text statusLabel;

        private void Start()
        {
            if (apiClient == null || statusLabel == null)
            {
                return;
            }

            statusLabel.text = "API: Checking...";
            apiClient.RequestHealth(isUp => statusLabel.text = isUp ? "API: Online" : "API: Offline (Fallback mode)");
        }
    }
}
