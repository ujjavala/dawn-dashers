using UnityEngine;

namespace DawnDashers.Puzzles
{
    public class SignalDecodingPuzzle : LogicPuzzleBase
    {
        [SerializeField] private string targetSignal = "SOL";
        private string current = string.Empty;

        public void InputSignalToken(string token)
        {
            current += token;
            if (current.Length >= targetSignal.Length)
            {
                if (current == targetSignal)
                {
                    SolvePuzzle();
                }
                else
                {
                    FailPuzzle();
                }
            }
        }

        public void ResetSignal()
        {
            current = string.Empty;
        }
    }
}
