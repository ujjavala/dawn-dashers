using UnityEngine;

namespace DawnDashers.Puzzles
{
    public class PatternRecognitionPuzzle : LogicPuzzleBase
    {
        [SerializeField] private int correctOptionIndex = 0;

        public void SubmitAnswer(int optionIndex)
        {
            if (optionIndex == correctOptionIndex)
            {
                SolvePuzzle();
                return;
            }

            FailPuzzle();
        }
    }
}
