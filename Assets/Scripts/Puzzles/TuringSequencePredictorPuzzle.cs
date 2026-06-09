using UnityEngine;

namespace DawnDashers.Puzzles
{
    // Pattern completion challenge: select next token in a visual sequence.
    public class TuringSequencePredictorPuzzle : LogicPuzzleBase
    {
        [SerializeField] private int expectedTokenIndex = 1;

        public void SelectNextToken(int tokenIndex)
        {
            if (tokenIndex == expectedTokenIndex)
            {
                SolvePuzzle();
            }
            else
            {
                FailPuzzle();
            }
        }
    }
}
