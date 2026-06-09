using DawnDashers.Systems;
using UnityEngine;

namespace DawnDashers.VFX
{
    public class AdventureVfxDirector : MonoBehaviour
    {
        [SerializeField] private ParticleSystem dustFootstep;
        [SerializeField] private ParticleSystem sprintDustBurst;
        [SerializeField] private ParticleSystem jumpTrail;
        [SerializeField] private ParticleSystem fragmentSparkle;

        private void OnEnable()
        {
            GameFeelEvents.OnJump += HandleJump;
            GameFeelEvents.OnAbility += HandleAbility;
            GameFeelEvents.OnCollect += HandleCollect;
            GameFeelEvents.OnFragmentRecovered += HandleFragment;
        }

        private void OnDisable()
        {
            GameFeelEvents.OnJump -= HandleJump;
            GameFeelEvents.OnAbility -= HandleAbility;
            GameFeelEvents.OnCollect -= HandleCollect;
            GameFeelEvents.OnFragmentRecovered -= HandleFragment;
        }

        private void HandleJump()
        {
            if (jumpTrail != null)
            {
                jumpTrail.Play();
            }
        }

        private void HandleAbility()
        {
            if (sprintDustBurst != null)
            {
                sprintDustBurst.Play();
            }
        }

        private void HandleCollect()
        {
            if (dustFootstep != null)
            {
                dustFootstep.Play();
            }
        }

        private void HandleFragment()
        {
            if (fragmentSparkle != null)
            {
                fragmentSparkle.Play();
            }
        }
    }
}
