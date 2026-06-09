using System;
using System.Collections.Generic;
using DawnDashers.Core;
using UnityEngine;

namespace DawnDashers.Progression
{
    public class FragmentMilestoneUnlocks : MonoBehaviour
    {
        [Serializable]
        private class UnlockMilestone
        {
            public int requiredFragments;
            public string regionToUnlock;
            public string characterToUnlock;
            public string objectiveText;
        }

        [SerializeField] private List<UnlockMilestone> milestones = new()
        {
            new UnlockMilestone { requiredFragments = 1, regionToUnlock = "Bushland", characterToUnlock = "wombat", objectiveText = "Bushland is now reachable." },
            new UnlockMilestone { requiredFragments = 2, regionToUnlock = "Servo", characterToUnlock = "possum", objectiveText = "Midnight Servo is open for upgrades." },
            new UnlockMilestone { requiredFragments = 4, regionToUnlock = "Coast", characterToUnlock = "echidna", objectiveText = "Lighthouse Coast unlocked." },
            new UnlockMilestone { requiredFragments = 5, regionToUnlock = "Tasmania", characterToUnlock = "echidna", objectiveText = "Travel to Tasmania under the aurora." }
        };

        private int lastAppliedCount = -1;

        private void OnEnable()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnSessionChanged += HandleSessionChanged;
                HandleSessionChanged(GameManager.Instance.Session);
            }
        }

        private void OnDisable()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnSessionChanged -= HandleSessionChanged;
            }
        }

        private void HandleSessionChanged(GameSessionData session)
        {
            if (session.SunFragmentsRecovered == lastAppliedCount)
            {
                return;
            }

            lastAppliedCount = session.SunFragmentsRecovered;
            foreach (var milestone in milestones)
            {
                if (session.SunFragmentsRecovered < milestone.requiredFragments)
                {
                    continue;
                }

                if (!string.IsNullOrWhiteSpace(milestone.regionToUnlock))
                {
                    session.UnlockedRegions.Add(milestone.regionToUnlock);
                }

                if (!string.IsNullOrWhiteSpace(milestone.characterToUnlock))
                {
                    session.UnlockedCharacters.Add(milestone.characterToUnlock);
                }

                if (!string.IsNullOrWhiteSpace(milestone.objectiveText))
                {
                    ObjectiveSystem.Instance?.SetObjective(milestone.objectiveText);
                }
            }
        }
    }
}
