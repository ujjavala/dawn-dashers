using DawnDashers.Core;
using UnityEngine;

namespace DawnDashers.Systems
{
    public class EnvironmentVisualDirector : MonoBehaviour
    {
        [SerializeField] private Light sunLight;
        [SerializeField] private ParticleSystem dustParticles;
        [SerializeField] private ParticleSystem emberParticles;
        [SerializeField] private ParticleSystem auroraParticles;

        [Header("Warm Adventure Palette")]
        [SerializeField] private Color duskShadow = new(0.17f, 0.17f, 0.17f);
        [SerializeField] private Color desertMid = new(0.54f, 0.37f, 0.24f);
        [SerializeField] private Color paperWarm = new(0.95f, 0.9f, 0.75f);

        private void OnEnable()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnSunFragmentProgress += HandleSunProgress;
                HandleSunProgress(GameManager.Instance.Session.SunFragmentsRecovered, GameManager.Instance.TotalSunFragments);
            }
        }

        private void OnDisable()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnSunFragmentProgress -= HandleSunProgress;
            }
        }

        public void SetTasmaniaMode(bool enabled)
        {
            if (auroraParticles != null)
            {
                if (enabled)
                {
                    auroraParticles.Play();
                }
                else
                {
                    auroraParticles.Stop();
                }
            }
        }

        private void HandleSunProgress(int recovered, int total)
        {
            var t = total <= 0 ? 0f : Mathf.Clamp01((float)recovered / total);

            RenderSettings.ambientLight = Color.Lerp(duskShadow, paperWarm, t);
            if (sunLight != null)
            {
                sunLight.intensity = Mathf.Lerp(0.3f, 1.1f, t);
                sunLight.color = Color.Lerp(desertMid, paperWarm, t);
            }

            if (dustParticles != null)
            {
                var emission = dustParticles.emission;
                emission.rateOverTime = Mathf.Lerp(12f, 5f, t);
            }

            if (emberParticles != null)
            {
                var emission = emberParticles.emission;
                emission.rateOverTime = Mathf.Lerp(3f, 8f, t);
            }
        }
    }
}
