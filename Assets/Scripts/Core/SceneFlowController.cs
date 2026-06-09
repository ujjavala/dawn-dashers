using UnityEngine;
using UnityEngine.SceneManagement;

namespace DawnDashers.Core
{
    public class SceneFlowController : MonoBehaviour
    {
        public void LoadScene(string sceneName)
        {
            if (string.IsNullOrWhiteSpace(sceneName))
            {
                Debug.LogWarning("SceneFlowController.LoadScene called with empty scene name.");
                return;
            }

            SceneManager.LoadScene(sceneName);
        }

        public void LoadMainMenu()
        {
            SceneManager.LoadScene("MainMenu");
        }

        public void QuitGame()
        {
            Application.Quit();
        }
    }
}
