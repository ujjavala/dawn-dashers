using DawnDashers.Core;
using DawnDashers.Systems;
using UnityEngine;

namespace DawnDashers.World
{
    public class CollectiblePickup : MonoBehaviour
    {
        [SerializeField] private CollectibleType type = CollectibleType.LightFragment;
        [SerializeField] private int scoreValue = 10;
        [SerializeField] private int energyValue = 0;

        private void OnTriggerEnter2D(Collider2D other)
        {
            if (!other.CompareTag("Player") || GameManager.Instance == null)
            {
                return;
            }

            GameManager.Instance.AddScore(scoreValue);

            if (type == CollectibleType.Lantern)
            {
                GameManager.Instance.AddLanternEnergy(Mathf.Max(1, energyValue));
            }

            if (type == CollectibleType.UpgradeToken)
            {
                GameManager.Instance.AddUpgradeTokens(1);
            }

            GameFeelEvents.RaiseCollect();

            Destroy(gameObject);
        }
    }
}
