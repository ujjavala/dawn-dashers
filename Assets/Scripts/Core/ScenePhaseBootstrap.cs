using UnityEngine;

namespace DawnDashers.Core
{
    public class ScenePhaseBootstrap : MonoBehaviour
    {
        [SerializeField] private GamePhase phaseOnSceneLoad = GamePhase.Exploration;

        private void Start()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.SetPhase(phaseOnSceneLoad);
            }
        }
    }
}
