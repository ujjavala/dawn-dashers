using UnityEngine;

namespace DawnDashers.Puzzles
{
    public class LogicGatePuzzle : LogicPuzzleBase
    {
        [SerializeField] private bool inputA;
        [SerializeField] private bool inputB;
        [SerializeField] private bool useAndGate = true;
        [SerializeField] private bool expectedOutput = true;

        public void SetInputA(bool value)
        {
            inputA = value;
            Evaluate();
        }

        public void SetInputB(bool value)
        {
            inputB = value;
            Evaluate();
        }

        private void Evaluate()
        {
            var output = useAndGate ? inputA && inputB : inputA || inputB;
            if (output == expectedOutput)
            {
                SolvePuzzle();
            }
        }
    }
}
