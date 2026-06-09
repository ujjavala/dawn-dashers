using UnityEngine;

namespace DawnDashers.Puzzles
{
    public class RouteOptimizationPuzzle : LogicPuzzleBase
    {
        [SerializeField] private int optimalRouteIndex;

        public void SelectRoute(int routeIndex)
        {
            if (routeIndex == optimalRouteIndex)
            {
                SolvePuzzle();
                return;
            }

            FailPuzzle();
        }
    }
}
