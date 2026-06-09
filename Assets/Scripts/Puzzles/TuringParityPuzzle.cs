using UnityEngine;

namespace DawnDashers.Puzzles
{
    // Binary parity check: activate switches until parity rule is satisfied.
    public class TuringParityPuzzle : LogicPuzzleBase
    {
        [SerializeField] private bool[] switches = { false, false, false, false, false };
        [SerializeField] private bool requireEvenParity = true;

        public void Toggle(int index)
        {
            if (index < 0 || index >= switches.Length)
            {
                return;
            }

            switches[index] = !switches[index];
            Evaluate();
        }

        private void Evaluate()
        {
            var ones = 0;
            for (var i = 0; i < switches.Length; i++)
            {
                if (switches[i])
                {
                    ones++;
                }
            }

            var even = ones % 2 == 0;
            if (even == requireEvenParity)
            {
                SolvePuzzle();
            }
        }
    }
}
