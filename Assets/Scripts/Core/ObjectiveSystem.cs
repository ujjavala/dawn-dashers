using System;
using UnityEngine;

namespace DawnDashers.Core
{
    public class ObjectiveSystem : MonoBehaviour
    {
        public static ObjectiveSystem Instance { get; private set; }

        public event Action<string> OnObjectiveChanged;

        public string CurrentObjective { get; private set; } = "Recover the first Sun Fragment.";

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

        public void SetObjective(string value)
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                return;
            }

            CurrentObjective = value;
            OnObjectiveChanged?.Invoke(CurrentObjective);
        }
    }
}
