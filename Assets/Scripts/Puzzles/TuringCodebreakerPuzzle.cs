using UnityEngine;

namespace DawnDashers.Puzzles
{
    // Lightweight codebreaking: find the 3-symbol key with feedback hints.
    public class TuringCodebreakerPuzzle : LogicPuzzleBase
    {
        [SerializeField] private string targetCode = "SUN";
        [SerializeField] private int maxAttempts = 4;

        private int attempts;

        public void SubmitCode(string attempt)
        {
            attempts++;
            if (attempt == targetCode)
            {
                SolvePuzzle();
                return;
            }

            if (attempts >= maxAttempts)
            {
                FailPuzzle();
            }
        }
    }
}
