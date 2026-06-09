using DawnDashers.Core;
using UnityEngine;

namespace DawnDashers.Systems
{
    public class DaylightSystem : MonoBehaviour
    {
        [SerializeField] private Light directionalLight;
        [SerializeField] private Gradient ambientGradient;
        [SerializeField] private float minIntensity = 0.15f;
        [SerializeField] private float maxIntensity = 1.1f;

        private void OnEnable()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnSunFragmentProgress += HandleFragmentProgress;
            }
        }

        private void OnDisable()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnSunFragmentProgress -= HandleFragmentProgress;
            }
        }

        private void HandleFragmentProgress(int recovered, int total)
        {
            if (directionalLight == null || total <= 0)
            {
                return;
            }

            var t = Mathf.Clamp01((float)recovered / total);
            directionalLight.intensity = Mathf.Lerp(minIntensity, maxIntensity, t);
            RenderSettings.ambientLight = ambientGradient.Evaluate(t);
        }
    }
}
