using DawnDashers.Core;
using DawnDashers.Services;
using TMPro;
using UnityEngine;

namespace DawnDashers.UI.API
{
    public class RoadEventPanelController : MonoBehaviour
    {
        [SerializeField] private ApiServiceClient apiClient;
        [SerializeField] private TMP_Text titleLabel;
        [SerializeField] private TMP_Text descriptionLabel;

        public void RollRoadEvent()
        {
            if (titleLabel == null || descriptionLabel == null)
            {
                return;
            }

            if (apiClient == null)
            {
                titleLabel.text = "Road Event";
                descriptionLabel.text = "A local traveller points you toward safer roads.";
                return;
            }

            titleLabel.text = "Rolling Event...";
            descriptionLabel.text = string.Empty;
            apiClient.RequestRoadEvent(
                response =>
                {
                    titleLabel.text = response.title;
                    descriptionLabel.text = response.description;
                    GameManager.Instance?.AddUpgradeTokens(Mathf.Max(0, response.reward_tokens));
                },
                _ =>
                {
                    titleLabel.text = "Road Event";
                    descriptionLabel.text = "Wind shifts in your favor. Keep moving.";
                });
        }
    }
}
