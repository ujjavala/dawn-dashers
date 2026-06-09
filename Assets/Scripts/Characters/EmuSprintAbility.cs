using System.Collections;
using UnityEngine;

namespace DawnDashers.Characters
{
    public class EmuSprintAbility : CharacterAbilityBase
    {
        [SerializeField] private float sprintMultiplier = 1.8f;
        [SerializeField] private float sprintDuration = 2f;

        public override AbilityType AbilityType => AbilityType.Sprint;

        public override void Activate()
        {
            if (Controller == null)
            {
                return;
            }

            StopAllCoroutines();
            StartCoroutine(SprintRoutine());
        }

        private IEnumerator SprintRoutine()
        {
            Controller.SetSpeedMultiplier(sprintMultiplier);
            yield return new WaitForSeconds(sprintDuration);
            Controller.ResetSpeedMultiplier();
        }
    }
}
