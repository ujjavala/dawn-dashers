using UnityEngine;

namespace DawnDashers.UI
{
    public class TouchControlsVisibility : MonoBehaviour
    {
        [SerializeField] private GameObject touchControlsRoot;
        [SerializeField] private bool showInEditorForTesting;

        private void Start()
        {
#if UNITY_EDITOR
            var show = showInEditorForTesting;
#else
            var show = Application.isMobilePlatform;
#endif
            if (touchControlsRoot != null)
            {
                touchControlsRoot.SetActive(show);
            }
        }
    }
}
