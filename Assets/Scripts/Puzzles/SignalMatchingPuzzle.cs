using UnityEngine;

namespace DawnDashers.Puzzles
{
    public class SignalMatchingPuzzle : LogicPuzzleBase
    {
        [SerializeField] private string expectedPattern = "SUN";
        private string inputPattern = string.Empty;

        public void AddSignal(string signalToken)
        {
            inputPattern += signalToken;
            if (inputPattern.Length < expectedPattern.Length)
            {
                return;
            }

            if (inputPattern == expectedPattern)
            {
                SolvePuzzle();
            }
            else
            {
                FailPuzzle();
            }
        }

        public void ClearSignals()
        {
            inputPattern = string.Empty;
        }
    }
}
