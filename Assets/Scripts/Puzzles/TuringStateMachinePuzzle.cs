using UnityEngine;

namespace DawnDashers.Puzzles
{
    // Follow valid transitions across states to reach accepting state.
    public class TuringStateMachinePuzzle : LogicPuzzleBase
    {
        [SerializeField] private int acceptingState = 3;

        private int currentState;

        public void ResetMachine()
        {
            currentState = 0;
        }

        public void InputSymbol(int symbol)
        {
            currentState = Transition(currentState, symbol);
            if (currentState < 0)
            {
                FailPuzzle();
                return;
            }

            if (currentState == acceptingState)
            {
                SolvePuzzle();
            }
        }

        private int Transition(int state, int symbol)
        {
            if (state == 0)
            {
                return symbol == 1 ? 1 : 0;
            }

            if (state == 1)
            {
                return symbol == 0 ? 2 : 1;
            }

            if (state == 2)
            {
                return symbol == 1 ? 3 : -1;
            }

            return state;
        }
    }
}
