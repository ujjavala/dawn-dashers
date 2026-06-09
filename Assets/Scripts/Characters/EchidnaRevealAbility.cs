using DawnDashers.Systems;

namespace DawnDashers.Characters
{
    public class EchidnaRevealAbility : CharacterAbilityBase
    {
        public override AbilityType AbilityType => AbilityType.Reveal;

        public override void Activate()
        {
            ClueRevealSystem.RevealNearbyClues(transform.position);
        }
    }
}
