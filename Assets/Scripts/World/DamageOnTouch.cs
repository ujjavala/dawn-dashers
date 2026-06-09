using DawnDashers.Core;
using DawnDashers.Systems;
using UnityEngine;

namespace DawnDashers.World
{
    public class DamageOnTouch : MonoBehaviour
    {
        [SerializeField] private int damage = 1;
        [SerializeField] private float hitCooldown = 0.6f;

        private float cooldown;

        private void Update()
        {
            if (cooldown > 0f)
            {
                cooldown -= Time.deltaTime;
            }
        }

        private void OnCollisionStay2D(Collision2D collision)
        {
            if (cooldown > 0f || GameManager.Instance == null)
            {
                return;
            }

            if (collision.collider.CompareTag("Player"))
            {
                cooldown = hitCooldown;
                GameManager.Instance.ApplyDamage(damage);
                GameFeelEvents.RaiseHit();
            }
        }
    }
}
