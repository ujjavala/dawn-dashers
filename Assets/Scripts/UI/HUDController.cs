using DawnDashers.Core;
using DawnDashers.Characters;
using TMPro;
using UnityEngine;

namespace DawnDashers.UI
{
    public class HUDController : MonoBehaviour
    {
        [SerializeField] private TMP_Text scoreText;
        [SerializeField] private TMP_Text healthText;
        [SerializeField] private TMP_Text lightText;
        [SerializeField] private TMP_Text fragmentText;
        [SerializeField] private TMP_Text objectiveText;
        [SerializeField] private TMP_Text abilityCooldownText;
        [SerializeField] private PlayerCharacterController playerController;

        private void OnEnable()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnSessionChanged += HandleSessionChanged;
                HandleSessionChanged(GameManager.Instance.Session);
            }

            if (ObjectiveSystem.Instance != null)
            {
                ObjectiveSystem.Instance.OnObjectiveChanged += HandleObjectiveChanged;
                HandleObjectiveChanged(ObjectiveSystem.Instance.CurrentObjective);
            }
        }

        private void OnDisable()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnSessionChanged -= HandleSessionChanged;
            }

            if (ObjectiveSystem.Instance != null)
            {
                ObjectiveSystem.Instance.OnObjectiveChanged -= HandleObjectiveChanged;
            }
        }

        private void HandleSessionChanged(GameSessionData session)
        {
            if (scoreText != null)
            {
                scoreText.text = $"Score: {session.Score}";
            }

            if (healthText != null)
            {
                healthText.text = $"Health: {session.Health}";
            }

            if (lightText != null)
            {
                lightText.text = $"Lantern: {session.LanternEnergy}";
            }

            if (fragmentText != null)
            {
                var total = GameManager.Instance != null ? GameManager.Instance.TotalSunFragments : 7;
                fragmentText.text = $"Fragments: {session.SunFragmentsRecovered}/{total}";
            }
        }

        private void HandleObjectiveChanged(string objective)
        {
            if (objectiveText != null)
            {
                objectiveText.text = $"Objective: {objective}";
            }
        }

        private void Update()
        {
            if (abilityCooldownText == null || playerController == null)
            {
                return;
            }

            var remaining = playerController.AbilityCooldownRemaining;
            if (remaining <= 0.01f)
            {
                abilityCooldownText.text = "Ability: READY";
                return;
            }

            abilityCooldownText.text = $"Ability: {remaining:0.0}s";
        }
    }
}
