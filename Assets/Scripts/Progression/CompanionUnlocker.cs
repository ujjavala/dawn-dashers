using DawnDashers.Core;
using UnityEngine;

namespace DawnDashers.Progression
{
    public class CompanionUnlocker : MonoBehaviour
    {
        [SerializeField] private string characterIdToUnlock = "wombat";
        [SerializeField] private int requiredFragments = 2;

        private bool unlocked;

        private void Update()
        {
            if (unlocked || GameManager.Instance == null)
            {
                return;
            }

            if (GameManager.Instance.Session.SunFragmentsRecovered >= requiredFragments)
            {
                unlocked = true;
                GameManager.Instance.Session.UnlockedCharacters.Add(characterIdToUnlock);
                GameManager.Instance.AddScore(50);
            }
        }
    }
}
