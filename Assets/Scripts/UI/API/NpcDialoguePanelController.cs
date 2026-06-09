using DawnDashers.Core;
using DawnDashers.Services;
using TMPro;
using UnityEngine;

namespace DawnDashers.UI.API
{
    public class NpcDialoguePanelController : MonoBehaviour
    {
        [SerializeField] private ApiServiceClient apiClient;
        [SerializeField] private TMP_Text dialogueLabel;
        [SerializeField] private string fallbackDialogue = "The dawn is out there. Keep running.";

        public void RequestDialogue(string region)
        {
            if (dialogueLabel == null)
            {
                return;
            }

            if (apiClient == null)
            {
                dialogueLabel.text = fallbackDialogue;
                return;
            }

            var activeCharacter = GameManager.Instance != null ? GameManager.Instance.Session.ActiveCharacterId : "emu";
            var req = new DialogueRequest
            {
                animal = activeCharacter,
                region = string.IsNullOrWhiteSpace(region) ? "Outback" : region,
                mood = "hopeful"
            };

            dialogueLabel.text = "Fetching traveller dialogue...";
            apiClient.RequestDialogue(req,
                response => dialogueLabel.text = string.IsNullOrWhiteSpace(response.line) ? fallbackDialogue : response.line,
                _ => dialogueLabel.text = fallbackDialogue);
        }
    }
}
