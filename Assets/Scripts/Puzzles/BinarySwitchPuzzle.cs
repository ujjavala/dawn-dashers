using System.Linq;
using UnityEngine;

namespace DawnDashers.Puzzles
{
    public class BinarySwitchPuzzle : LogicPuzzleBase
    {
        [SerializeField] private bool[] targetPattern = { true, false, true, true };

        private bool[] current;

        private void Awake()
        {
            current = new bool[targetPattern.Length];
        }

        public void ToggleSwitch(int index)
        {
            if (index < 0 || index >= current.Length)
            {
                return;
            }

            current[index] = !current[index];

            if (current.SequenceEqual(targetPattern))
            {
                SolvePuzzle();
            }
        }
    }
}
