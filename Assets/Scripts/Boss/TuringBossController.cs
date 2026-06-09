using DawnDashers.Core;
using UnityEngine;
using UnityEngine.Events;

namespace DawnDashers.Boss
{
    public class TuringBossController : MonoBehaviour
    {
        public enum BossPhase
        {
            AvoidDrones,
            DestroyNodes,
            FinalLogic,
            RestoreSunrise,
            Completed
        }

        [SerializeField] private int nodesToDestroy = 3;
        [SerializeField] private UnityEvent onBossCompleted;

        private BossPhase currentPhase;
        private int destroyedNodes;

        private void Start()
        {
            currentPhase = BossPhase.AvoidDrones;
            if (GameManager.Instance != null)
            {
                GameManager.Instance.SetPhase(GamePhase.Boss);
            }

            ObjectiveSystem.Instance?.SetObjective("Avoid drone swarms and reach the core.");
        }

        public void MarkDronePhaseCleared()
        {
            if (currentPhase != BossPhase.AvoidDrones)
            {
                return;
            }

            currentPhase = BossPhase.DestroyNodes;
            ObjectiveSystem.Instance?.SetObjective("Disable all energy nodes.");
        }

        public void DestroyNode()
        {
            if (currentPhase != BossPhase.DestroyNodes)
            {
                return;
            }

            destroyedNodes++;
            if (destroyedNodes >= nodesToDestroy)
            {
                currentPhase = BossPhase.FinalLogic;
                ObjectiveSystem.Instance?.SetObjective("Solve the final Turing logic sequence.");
            }
        }

        public void CompleteFinalLogic()
        {
            if (currentPhase != BossPhase.FinalLogic)
            {
                return;
            }

            currentPhase = BossPhase.RestoreSunrise;
            ObjectiveSystem.Instance?.SetObjective("Activate sunrise and end the longest night.");
        }

        public void RestoreSunrise()
        {
            if (currentPhase != BossPhase.RestoreSunrise)
            {
                return;
            }

            currentPhase = BossPhase.Completed;
            if (GameManager.Instance != null)
            {
                GameManager.Instance.SetPhase(GamePhase.Victory);
                GameManager.Instance.AddScore(500);
            }

            onBossCompleted?.Invoke();
        }
    }
}
