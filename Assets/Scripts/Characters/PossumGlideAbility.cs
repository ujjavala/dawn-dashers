using System.Collections;
using UnityEngine;

namespace DawnDashers.Characters
{
    public class PossumGlideAbility : CharacterAbilityBase
    {
        [SerializeField] private float glideGravityScale = 0.35f;
        [SerializeField] private float glideDuration = 2.5f;

        public override AbilityType AbilityType => AbilityType.Glide;

        public override void Activate()
        {
            if (Controller == null)
            {
                return;
            }

            StopAllCoroutines();
            StartCoroutine(GlideRoutine());
        }

        private IEnumerator GlideRoutine()
        {
            var original = Controller.GetGravityScale();
            Controller.SetGravityScale(glideGravityScale);
            yield return new WaitForSeconds(glideDuration);
            Controller.SetGravityScale(original);
        }
    }
}
