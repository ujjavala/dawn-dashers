using System;
using UnityEngine;

namespace DawnDashers.Systems
{
    public static class ClueRevealSystem
    {
        public static event Action<Vector3> OnRevealPulse;

        public static void RevealNearbyClues(Vector3 center)
        {
            OnRevealPulse?.Invoke(center);
        }
    }
}
