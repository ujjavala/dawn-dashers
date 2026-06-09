using DawnDashers.Systems;
using UnityEngine;

namespace DawnDashers.VFX
{
    public class SprintTrailVfx : MonoBehaviour
    {
        [SerializeField] private ParticleSystem sprintParticles;
        [SerializeField] private ParticleSystem collectParticles;

        private void OnEnable()
        {
            GameFeelEvents.OnAbility += HandleAbility;
            GameFeelEvents.OnCollect += HandleCollect;
        }

        private void OnDisable()
        {
            GameFeelEvents.OnAbility -= HandleAbility;
            GameFeelEvents.OnCollect -= HandleCollect;
        }

        private void HandleAbility()
        {
            if (sprintParticles != null)
            {
                sprintParticles.Play();
            }
        }

        private void HandleCollect()
        {
            if (collectParticles != null)
            {
                collectParticles.Play();
            }
        }
    }
}
