using DawnDashers.Core;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace DawnDashers.UI
{
    public class RegionMapController : MonoBehaviour
    {
        [SerializeField] private TMP_Text statusText;

        public void TravelToRegion(string regionId, string sceneName)
        {
            if (GameManager.Instance == null)
            {
                return;
            }

            if (!GameManager.Instance.Session.UnlockedRegions.Contains(regionId))
            {
                if (statusText != null)
                {
                    statusText.text = $"{regionId} is still dark. Recover more fragments.";
                }

                return;
            }

            SceneManager.LoadScene(sceneName);
        }
    }
}
