using UnityEngine;

namespace DawnDashers.Puzzles
{
    // Inspired by tape-machine state transitions: match the target tape in limited moves.
    public class TuringTapePuzzle : LogicPuzzleBase
    {
        [SerializeField] private string targetTape = "10110";
        [SerializeField] private int maxMoves = 7;

        private char[] tape;
        private int moves;

        private void Awake()
        {
            tape = "00000".ToCharArray();
        }

        public void ToggleCell(int index)
        {
            if (index < 0 || index >= tape.Length)
            {
                return;
            }

            tape[index] = tape[index] == '0' ? '1' : '0';
            moves++;
            Evaluate();
        }

        private void Evaluate()
        {
            if (new string(tape) == targetTape)
            {
                SolvePuzzle();
                return;
            }

            if (moves >= maxMoves)
            {
                FailPuzzle();
            }
        }
    }
}
