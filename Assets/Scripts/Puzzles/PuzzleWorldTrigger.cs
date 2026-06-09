using UnityEngine;

namespace DawnDashers.Puzzles
{
    public class PuzzleWorldTrigger : MonoBehaviour
    {
        [SerializeField] private LogicPuzzleBase puzzle;
        [SerializeField] private bool singleUse = true;
        private bool used;

        private void OnTriggerEnter(Collider other)
        {
            if (used && singleUse)
            {
                return;
            }

            if (!other.CompareTag("Player") || puzzle == null)
            {
                return;
            }

            used = true;
            puzzle.StartPuzzle();
        }
    }
}
