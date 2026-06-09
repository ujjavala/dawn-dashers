using UnityEngine;

namespace DawnDashers.Characters
{
    public class WombatChargeAbility : CharacterAbilityBase
    {
        [SerializeField] private float chargeImpulse = 6f;

        public override AbilityType AbilityType => AbilityType.Charge;

        public override void Activate()
        {
            if (Controller == null)
            {
                return;
            }

            Controller.PushForward(chargeImpulse);
        }
    }
}
