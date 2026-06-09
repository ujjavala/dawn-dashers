using DawnDashers.Characters;
using DawnDashers.Core;
using TMPro;
using UnityEngine;

namespace DawnDashers.UI
{
    public class CharacterSelectController : MonoBehaviour
    {
        [SerializeField] private CharacterRoster roster;
        [SerializeField] private TMP_Text selectedText;
        [SerializeField] private string nextSceneName = "OutbackRunner";

        public void SelectCharacter(string characterId)
        {
            if (GameManager.Instance == null)
            {
                return;
            }

            var character = roster != null ? roster.FindById(characterId) : null;
            if (character == null)
            {
                return;
            }

            if (!GameManager.Instance.Session.UnlockedCharacters.Contains(characterId))
            {
                return;
            }

            GameManager.Instance.SetActiveCharacter(characterId);
            if (selectedText != null)
            {
                selectedText.text = $"Selected: {character.displayName}";
            }
        }

        public void StartAdventure()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.SetPhase(GamePhase.Exploration);
            }

            UnityEngine.SceneManagement.SceneManager.LoadScene(nextSceneName);
        }
    }
}
