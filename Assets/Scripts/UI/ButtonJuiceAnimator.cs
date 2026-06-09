using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

namespace DawnDashers.UI
{
    public class ButtonJuiceAnimator : MonoBehaviour, IPointerEnterHandler, IPointerDownHandler, IPointerUpHandler
    {
        [SerializeField] private float hoverScale = 1.08f;
        [SerializeField] private float pressScale = 0.92f;
        [SerializeField] private float animSpeed = 14f;

        private Vector3 baseScale;
        private Vector3 targetScale;

        private void Awake()
        {
            baseScale = transform.localScale;
            targetScale = baseScale;
        }

        private void Update()
        {
            transform.localScale = Vector3.Lerp(transform.localScale, targetScale, Time.unscaledDeltaTime * animSpeed);
        }

        public void OnPointerEnter(PointerEventData eventData)
        {
            targetScale = baseScale * hoverScale;
        }

        public void OnPointerDown(PointerEventData eventData)
        {
            targetScale = baseScale * pressScale;
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            StopAllCoroutines();
            StartCoroutine(BounceBackRoutine());
        }

        private IEnumerator BounceBackRoutine()
        {
            targetScale = baseScale * (hoverScale * 1.03f);
            yield return new WaitForSecondsRealtime(0.06f);
            targetScale = baseScale;
        }
    }
}
