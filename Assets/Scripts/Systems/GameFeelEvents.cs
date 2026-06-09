using System;

namespace DawnDashers.Systems
{
    public static class GameFeelEvents
    {
        public static event Action OnJump;
        public static event Action OnAbility;
        public static event Action OnCollect;
        public static event Action OnHit;
        public static event Action OnFragmentRecovered;

        public static void RaiseJump() => OnJump?.Invoke();
        public static void RaiseAbility() => OnAbility?.Invoke();
        public static void RaiseCollect() => OnCollect?.Invoke();
        public static void RaiseHit() => OnHit?.Invoke();
        public static void RaiseFragmentRecovered() => OnFragmentRecovered?.Invoke();
    }
}
