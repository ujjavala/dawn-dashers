using DawnDashers.Core;
using TMPro;
using UnityEngine;

namespace DawnDashers.UI
{
    public class VictoryScreenController : MonoBehaviour
    {
        [SerializeField] private TMP_Text summaryText;

        private void Start()
        {
            if (GameManager.Instance == null || summaryText == null)
            {
                return;
            }

            var session = GameManager.Instance.Session;
            summaryText.text =
                $"Sunrise Restored\n" +
                $"Score: {session.Score}\n" +
                $"Fragments: {session.SunFragmentsRecovered}/{GameManager.Instance.TotalSunFragments}\n" +
                $"Puzzles Solved: {session.SolvedPuzzles.Count}";
        }

        public void PlayAgain()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.StartNewRun();
            }

            UnityEngine.SceneManagement.SceneManager.LoadScene("MainMenu");
        }
    }
}
