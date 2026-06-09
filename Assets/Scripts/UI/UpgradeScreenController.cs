using DawnDashers.Core;
using TMPro;
using UnityEngine;

namespace DawnDashers.UI
{
    public class UpgradeScreenController : MonoBehaviour
    {
        [SerializeField] private TMP_Text statusText;
        [SerializeField] private int sprintUpgradeCost = 2;
        [SerializeField] private int glideUpgradeCost = 2;
        [SerializeField] private int lightRadiusUpgradeCost = 3;

        public void BuySprintUpgrade()
        {
            Purchase(sprintUpgradeCost, "Sprint upgraded: longer burst.");
        }

        public void BuyGlideUpgrade()
        {
            Purchase(glideUpgradeCost, "Glide upgraded: reduced fall speed.");
        }

        public void BuyLightRadiusUpgrade()
        {
            Purchase(lightRadiusUpgradeCost, "Lantern upgraded: wider light radius.");
        }

        private void Purchase(int cost, string successMessage)
        {
            if (GameManager.Instance == null)
            {
                return;
            }

            if (GameManager.Instance.Session.UpgradeTokens < cost)
            {
                if (statusText != null)
                {
                    statusText.text = "Not enough Upgrade Tokens.";
                }

                return;
            }

            GameManager.Instance.Session.UpgradeTokens -= cost;
            GameManager.Instance.AddScore(25);

            if (statusText != null)
            {
                statusText.text = successMessage;
            }
        }
    }
}
