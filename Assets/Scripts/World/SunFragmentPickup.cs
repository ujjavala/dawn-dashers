using DawnDashers.Core;
using DawnDashers.Systems;
using UnityEngine;

namespace DawnDashers.World
{
    public class SunFragmentPickup : MonoBehaviour
    {
        [SerializeField] private string fragmentId = "fragment_01";
        [SerializeField] private string unlocksRegion = "Bushland";

        private bool collected;

        private void OnTriggerEnter2D(Collider2D other)
        {
            if (collected || !other.CompareTag("Player") || GameManager.Instance == null)
            {
                return;
            }

            collected = true;
            GameManager.Instance.RecoverSunFragment(fragmentId, unlocksRegion);
            GameFeelEvents.RaiseFragmentRecovered();
            Destroy(gameObject);
        }
    }
}
