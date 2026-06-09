using System;
using UnityEngine;

namespace DawnDashers.Core
{
    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance { get; private set; }

        [Header("Run Defaults")]
        [SerializeField] private int startingHealth = 3;
        [SerializeField] private string startingCharacterId = "emu";
        [SerializeField] private int totalSunFragments = 7;

        public GameSessionData Session { get; } = new();
        public GamePhase CurrentPhase { get; private set; } = GamePhase.MainMenu;

        public event Action<GameSessionData> OnSessionChanged;
        public event Action<GamePhase> OnPhaseChanged;
        public event Action<int, int> OnSunFragmentProgress;

        public int TotalSunFragments => totalSunFragments;

        private void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(gameObject);
                return;
            }

            Instance = this;
            DontDestroyOnLoad(gameObject);
        }

        private void Start()
        {
            StartNewRun();
        }

        public void StartNewRun()
        {
            Session.ResetForNewRun(startingHealth, startingCharacterId);
            SetPhase(GamePhase.CharacterSelect);
            NotifySessionChanged();
            OnSunFragmentProgress?.Invoke(Session.SunFragmentsRecovered, totalSunFragments);
        }

        public void SetPhase(GamePhase phase)
        {
            if (CurrentPhase == phase)
            {
                return;
            }

            CurrentPhase = phase;
            OnPhaseChanged?.Invoke(CurrentPhase);
        }

        public void SetActiveCharacter(string characterId)
        {
            Session.ActiveCharacterId = characterId;
            Session.UnlockedCharacters.Add(characterId);
            NotifySessionChanged();
        }

        public void AddScore(int amount)
        {
            Session.Score += Mathf.Max(0, amount);
            NotifySessionChanged();
        }

        public void AddLanternEnergy(int amount)
        {
            Session.LanternEnergy = Mathf.Max(0, Session.LanternEnergy + amount);
            NotifySessionChanged();
        }

        public void AddUpgradeTokens(int amount)
        {
            Session.UpgradeTokens = Mathf.Max(0, Session.UpgradeTokens + amount);
            NotifySessionChanged();
        }

        public void RecoverSunFragment(string fragmentId, string regionToUnlock)
        {
            if (!Session.UnlockedRegions.Contains(regionToUnlock))
            {
                Session.UnlockedRegions.Add(regionToUnlock);
            }

            Session.SunFragmentsRecovered = Mathf.Clamp(Session.SunFragmentsRecovered + 1, 0, totalSunFragments);
            Session.Score += 100;

            NotifySessionChanged();
            OnSunFragmentProgress?.Invoke(Session.SunFragmentsRecovered, totalSunFragments);

            if (Session.SunFragmentsRecovered >= totalSunFragments)
            {
                SetPhase(GamePhase.Boss);
            }
        }

        public void SolvePuzzle(string puzzleId, int rewardScore = 50)
        {
            if (Session.SolvedPuzzles.Add(puzzleId))
            {
                Session.Score += rewardScore;
                NotifySessionChanged();
            }
        }

        public void ApplyDamage(int amount)
        {
            Session.Health = Mathf.Max(0, Session.Health - Mathf.Max(0, amount));
            NotifySessionChanged();

            if (Session.Health <= 0)
            {
                SetPhase(GamePhase.Defeat);
            }
        }

        public void Heal(int amount)
        {
            Session.Health += Mathf.Max(0, amount);
            NotifySessionChanged();
        }

        private void NotifySessionChanged()
        {
            OnSessionChanged?.Invoke(Session);
        }
    }
}
