using DawnDashers.Core;
using System;
using UnityEngine;

namespace DawnDashers.Progression
{
    public class RegionGate : MonoBehaviour
    {
        [SerializeField] private string requiredRegion = "Bushland";
        [SerializeField] private Collider2D blockingCollider;
        [SerializeField] private GameObject lockedVisual;
        [SerializeField] private GameObject unlockedVisual;

        private Action<GameSessionData> sessionChangedHandler;

        private void Start()
        {
            RefreshGateState();
            if (GameManager.Instance != null)
            {
                sessionChangedHandler = _ => RefreshGateState();
                GameManager.Instance.OnSessionChanged += sessionChangedHandler;
            }
        }

        private void OnDestroy()
        {
            if (GameManager.Instance != null)
            {
                if (sessionChangedHandler != null)
                {
                    GameManager.Instance.OnSessionChanged -= sessionChangedHandler;
                }
            }
        }

        private void RefreshGateState()
        {
            if (GameManager.Instance == null)
            {
                return;
            }

            var unlocked = GameManager.Instance.Session.UnlockedRegions.Contains(requiredRegion);

            if (blockingCollider != null)
            {
                blockingCollider.enabled = !unlocked;
            }

            if (lockedVisual != null)
            {
                lockedVisual.SetActive(!unlocked);
            }

            if (unlockedVisual != null)
            {
                unlockedVisual.SetActive(unlocked);
            }
        }
    }
}
