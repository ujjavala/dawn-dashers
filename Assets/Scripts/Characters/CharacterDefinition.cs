using UnityEngine;

namespace DawnDashers.Characters
{
    [CreateAssetMenu(menuName = "Dawn Dashers/Character Definition", fileName = "CharacterDefinition")]
    public class CharacterDefinition : ScriptableObject
    {
        [Header("Identity")]
        public string characterId = "emu";
        public string displayName = "Emu";

        [Header("Stats")]
        public float speed = 8f;
        public float jumpForce = 6f;
        public int maxHealth = 3;
        public float abilityCooldown = 10f;
        public AbilityType abilityType = AbilityType.Sprint;
    }
}
