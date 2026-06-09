using DawnDashers.Core;
using DawnDashers.Systems;
using UnityEngine;

namespace DawnDashers.World
{
    public class TreasureMagnetOnCollect : MonoBehaviour
    {
        [SerializeField] private float magnetRadius = 6f;
        [SerializeField] private float pullSpeed = 10f;

        private void OnEnable()
        {
            GameFeelEvents.OnCollect += PullNearbyCollectibles;
        }

        private void OnDisable()
        {
            GameFeelEvents.OnCollect -= PullNearbyCollectibles;
        }

        private void PullNearbyCollectibles()
        {
            var colliders = Physics.OverlapSphere(transform.position, magnetRadius);
            foreach (var col in colliders)
            {
                var collectible = col.GetComponent<CollectiblePickup>();
                if (collectible == null)
                {
                    continue;
                }

                col.transform.position = Vector3.MoveTowards(col.transform.position, transform.position, pullSpeed * Time.deltaTime);
            }

            if (GameManager.Instance != null)
            {
                GameManager.Instance.AddScore(2);
            }
        }
    }
}
