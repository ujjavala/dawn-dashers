using System.Collections.Generic;
using UnityEngine;

namespace DawnDashers.Characters
{
    [CreateAssetMenu(menuName = "Dawn Dashers/Character Roster", fileName = "CharacterRoster")]
    public class CharacterRoster : ScriptableObject
    {
        public List<CharacterDefinition> characters = new();

        public CharacterDefinition FindById(string id)
        {
            return characters.Find(c => c != null && c.characterId == id);
        }
    }
}
