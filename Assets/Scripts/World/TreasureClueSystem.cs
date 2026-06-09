using System.Collections.Generic;
using DawnDashers.Core;
using UnityEngine;

namespace DawnDashers.World
{
    public class TreasureClueSystem : MonoBehaviour
    {
        [SerializeField] private List<string> cluePool = new()
        {
            "The light sleeps where ships once searched for home.",
            "Follow the stars where winter paints the sky green.",
            "Old panels drink moonlight in the red dust.",
            "Where trucks rest at midnight, answers are traded.",
            "A cliffside beam still scans the black sea.",
            "Find the gum trees whispering in frozen wind.",
            "When the road forks, trust the path with rusted signs.",
            "Below the aurora, a buried circuit still hums.",
            "The hidden spark sits where emus outpace shadows.",
            "At dawn's edge, logic fails where warmth returns."
        };

        private int clueIndex;

        public string GetNextClue()
        {
            if (cluePool.Count == 0)
            {
                return "Search where darkness meets old machinery.";
            }

            var clue = cluePool[clueIndex % cluePool.Count];
            clueIndex++;

            ObjectiveSystem.Instance?.SetObjective(clue);
            if (GameManager.Instance != null)
            {
                GameManager.Instance.AddScore(5);
            }

            return clue;
        }
    }
}
