using UnityEngine;

namespace DawnDashers.Characters
{
    public abstract class CharacterAbilityBase : MonoBehaviour
    {
        protected PlayerCharacterController Controller;

        protected virtual void Awake()
        {
            Controller = GetComponent<PlayerCharacterController>();
        }

        public abstract AbilityType AbilityType { get; }

        public abstract void Activate();
    }
}
