using UnityEngine;

namespace DawnDashers.Puzzles
{
    public class LightRoutingPuzzle : LogicPuzzleBase
    {
        [SerializeField] private bool[] nodeStates = { false, false, false, false };
        [SerializeField] private int requiredLitNodes = 3;

        public void ToggleNode(int index)
        {
            if (index < 0 || index >= nodeStates.Length)
            {
                return;
            }

            nodeStates[index] = !nodeStates[index];
            EvaluateRoute();
        }

        private void EvaluateRoute()
        {
            var litCount = 0;
            for (var i = 0; i < nodeStates.Length; i++)
            {
                if (nodeStates[i])
                {
                    litCount++;
                }
            }

            if (litCount >= requiredLitNodes)
            {
                SolvePuzzle();
            }
        }
    }
}
