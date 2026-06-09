using UnityEngine;

namespace DawnDashers.UI
{
    public class MenuAuroraAnimator : MonoBehaviour
    {
        [SerializeField] private Renderer auroraRenderer;
        [SerializeField] private float scrollSpeedX = 0.04f;
        [SerializeField] private float scrollSpeedY = 0.02f;

        private Material instanceMaterial;

        private void Awake()
        {
            if (auroraRenderer != null)
            {
                instanceMaterial = auroraRenderer.material;
            }
        }

        private void Update()
        {
            if (instanceMaterial == null)
            {
                return;
            }

            var offset = instanceMaterial.mainTextureOffset;
            offset.x += Time.unscaledDeltaTime * scrollSpeedX;
            offset.y += Time.unscaledDeltaTime * scrollSpeedY;
            instanceMaterial.mainTextureOffset = offset;
        }
    }
}
