using DawnDashers.Core;
using DawnDashers.Services;
using UnityEngine;

namespace DawnDashers.World
{
    public class ApiClueBridge : MonoBehaviour
    {
        [SerializeField] private ApiServiceClient apiClient;
        [SerializeField] private TreasureClueSystem clueSystem;
        [SerializeField] private string region = "Outback";

        public void RefreshObjectiveFromApi()
        {
            if (apiClient == null)
            {
                clueSystem?.GetNextClue();
                return;
            }

            var request = new DialogueRequest
            {
                animal = "traveller",
                region = region,
                mood = "mysterious"
            };

            apiClient.RequestDialogue(request,
                response =>
                {
                    if (!string.IsNullOrWhiteSpace(response.line))
                    {
                        ObjectiveSystem.Instance?.SetObjective(response.line);
                    }
                    else
                    {
                        clueSystem?.GetNextClue();
                    }
                },
                _ => clueSystem?.GetNextClue());
        }
    }
}
