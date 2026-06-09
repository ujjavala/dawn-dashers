using UnityEngine;
using UnityEngine.UIElements;

namespace DawnDashers.UI
{
    [RequireComponent(typeof(UIDocument))]
    public class AdventureUiThemeController : MonoBehaviour
    {
        [SerializeField] private StyleSheet themeStyle;

        private void Awake()
        {
            var doc = GetComponent<UIDocument>();
            if (doc == null || doc.rootVisualElement == null || themeStyle == null)
            {
                return;
            }

            if (!doc.rootVisualElement.styleSheets.Contains(themeStyle))
            {
                doc.rootVisualElement.styleSheets.Add(themeStyle);
            }
        }
    }
}
