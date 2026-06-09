using UnityEngine;
using UnityEngine.SceneManagement;

namespace DawnDashers.Core
{
    public class AdventureFlowDirector : MonoBehaviour
    {
        [SerializeField] private string outbackScene = "OutbackRunner";
        [SerializeField] private string servoScene = "ServoCheckpoint";
        [SerializeField] private string auroraScene = "AuroraFlight";
        [SerializeField] private string bossScene = "TuringBoss";
        [SerializeField] private string victoryScene = "Victory";

        public void GoToOutback()
        {
            SceneManager.LoadScene(outbackScene);
            GameManager.Instance?.SetPhase(GamePhase.Exploration);
            ObjectiveSystem.Instance?.SetObjective("Cross the outback and find solar ruins.");
        }

        public void GoToServoCheckpoint()
        {
            SceneManager.LoadScene(servoScene);
            ObjectiveSystem.Instance?.SetObjective("Refuel at the servo and solve local clues.");
        }

        public void GoToAuroraFlight()
        {
            SceneManager.LoadScene(auroraScene);
            ObjectiveSystem.Instance?.SetObjective("Collect energy under the Southern Lights.");
        }

        public void GoToBossIfReady()
        {
            if (GameManager.Instance == null)
            {
                return;
            }

            if (GameManager.Instance.Session.SunFragmentsRecovered >= GameManager.Instance.TotalSunFragments)
            {
                SceneManager.LoadScene(bossScene);
                GameManager.Instance.SetPhase(GamePhase.Boss);
                ObjectiveSystem.Instance?.SetObjective("Confront the Turing Engine.");
                return;
            }

            ObjectiveSystem.Instance?.SetObjective("Recover all seven Sun Fragments before the final confrontation.");
        }

        public void GoToVictory()
        {
            SceneManager.LoadScene(victoryScene);
            GameManager.Instance?.SetPhase(GamePhase.Victory);
        }
    }
}
