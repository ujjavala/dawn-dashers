using System;
using System.Collections.Generic;

namespace DawnDashers.Core
{
    [Serializable]
    public class GameSessionData
    {
        public int Score;
        public int Health;
        public int LanternEnergy;
        public int UpgradeTokens;
        public int SunFragmentsRecovered;
        public string ActiveCharacterId;
        public HashSet<string> UnlockedRegions = new();
        public HashSet<string> UnlockedCharacters = new();
        public HashSet<string> SolvedPuzzles = new();

        public void ResetForNewRun(int startingHealth, string startingCharacter)
        {
            Score = 0;
            Health = startingHealth;
            LanternEnergy = 0;
            UpgradeTokens = 0;
            SunFragmentsRecovered = 0;
            ActiveCharacterId = startingCharacter;
            UnlockedRegions.Clear();
            UnlockedCharacters.Clear();
            SolvedPuzzles.Clear();
            UnlockedRegions.Add("Outback");
            UnlockedCharacters.Add(startingCharacter);
        }
    }
}
