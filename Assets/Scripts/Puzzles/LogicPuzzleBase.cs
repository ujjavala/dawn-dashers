using DawnDashers.Core;
using UnityEngine;
using UnityEngine.Events;

namespace DawnDashers.Puzzles
{
    public abstract class LogicPuzzleBase : MonoBehaviour
    {
        [SerializeField] private string puzzleId = "puzzle_01";
        [SerializeField] [Range(5f, 30f)] private float timeLimitSeconds = 25f;
        [SerializeField] private bool keepMomentum = true;
        [SerializeField] private UnityEvent onSolved;
        [SerializeField] private UnityEvent onFailed;
        [SerializeField] private UnityEvent onStarted;

        private float timeRemaining;
        private bool started;
        private bool solved;

        public float TimeRemaining => timeRemaining;
        public bool IsRunning => started && !solved;

        protected virtual void Update()
        {
            if (!started || solved)
            {
                return;
            }

            timeRemaining -= Time.deltaTime;
            if (timeRemaining <= 0f)
            {
                FailPuzzle();
            }
        }

        public void StartPuzzle()
        {
            started = true;
            solved = false;
            timeRemaining = Mathf.Clamp(timeLimitSeconds, 5f, 30f);
            if (GameManager.Instance != null)
            {
                GameManager.Instance.SetPhase(GamePhase.Puzzle);
            }

            // Keep momentum by default: puzzle overlays can run while core movement systems continue.
            if (keepMomentum)
            {
                Time.timeScale = 1f;
            }

            onStarted?.Invoke();
        }

        protected void SolvePuzzle(int reward = 75)
        {
            if (solved)
            {
                return;
            }

            solved = true;
            started = false;
            if (GameManager.Instance != null)
            {
                GameManager.Instance.SolvePuzzle(puzzleId, reward);
                GameManager.Instance.SetPhase(GamePhase.Exploration);
            }

            onSolved?.Invoke();
        }

        protected void FailPuzzle()
        {
            if (solved)
            {
                return;
            }

            started = false;
            if (GameManager.Instance != null)
            {
                GameManager.Instance.ApplyDamage(1);
                GameManager.Instance.SetPhase(GamePhase.Exploration);
            }

            onFailed?.Invoke();
        }
    }
}
