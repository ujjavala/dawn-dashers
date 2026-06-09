using DawnDashers.Services;
using TMPro;
using UnityEngine;

namespace DawnDashers.UI.API
{
    public class PuzzleHintPanelController : MonoBehaviour
    {
        [SerializeField] private ApiServiceClient apiClient;
        [SerializeField] private TMP_Text hintLabel;
        [SerializeField] private string fallbackHint = "Watch patterns first. Do not rush every switch.";

        public void RequestHint(string puzzleType)
        {
            if (hintLabel == null)
            {
                return;
            }

            if (apiClient == null)
            {
                hintLabel.text = fallbackHint;
                return;
            }

            var req = new HintRequest
            {
                puzzle_type = string.IsNullOrWhiteSpace(puzzleType) ? "pattern" : puzzleType,
                difficulty = "easy"
            };

            hintLabel.text = "Fetching hint...";
            apiClient.RequestHint(req,
                response => hintLabel.text = string.IsNullOrWhiteSpace(response.hint) ? fallbackHint : response.hint,
                _ => hintLabel.text = fallbackHint);
        }
    }
}
