using System.Collections;
using DawnDashers.Core;
using DawnDashers.Systems;
using UnityEngine;

namespace DawnDashers.Characters
{
    [RequireComponent(typeof(Rigidbody2D))]
    public class PlayerCharacterController : MonoBehaviour
    {
        [Header("References")]
        [SerializeField] private CharacterRoster roster;
        [SerializeField] private Transform groundCheck;

        [Header("Fallback Stats")]
        [SerializeField] private float fallbackSpeed = 8f;
        [SerializeField] private float fallbackJump = 6f;
        [SerializeField] private float fallbackAbilityCooldown = 8f;
        [SerializeField] private AbilityType fallbackAbilityType = AbilityType.Sprint;

        [Header("Movement")]
        [SerializeField] private float groundCheckRadius = 0.2f;
        [SerializeField] private LayerMask groundMask;

        private Rigidbody2D rb;
        private CharacterAbilityBase[] abilities;
        private CharacterDefinition activeDef;

        private float moveInput;
        private bool jumpRequested;
        private bool abilityRequested;
        private float speedMultiplier = 1f;
        private float abilityTimer;

        public float CurrentSpeed => (activeDef != null ? activeDef.speed : fallbackSpeed) * speedMultiplier;
        public float CurrentJump => activeDef != null ? activeDef.jumpForce : fallbackJump;
        public float AbilityCooldownRemaining => Mathf.Max(0f, abilityTimer);
        public float AbilityCooldownDuration => activeDef != null ? activeDef.abilityCooldown : fallbackAbilityCooldown;
        public float AbilityCooldownNormalized
        {
            get
            {
                var duration = AbilityCooldownDuration;
                if (duration <= 0f)
                {
                    return 0f;
                }

                return Mathf.Clamp01(AbilityCooldownRemaining / duration);
            }
        }

        private void Awake()
        {
            rb = GetComponent<Rigidbody2D>();
            abilities = GetComponents<CharacterAbilityBase>();
        }

        private void Start()
        {
            if (GameManager.Instance != null)
            {
                ConfigureFromCharacter(GameManager.Instance.Session.ActiveCharacterId);
                GameManager.Instance.OnSessionChanged += HandleSessionChanged;
            }
        }

        private void OnDestroy()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnSessionChanged -= HandleSessionChanged;
            }
        }

        private void Update()
        {
            if (activeDef == null)
            {
                return;
            }

            if (Mathf.Abs(moveInput) < 0.001f)
            {
                moveInput = Input.GetAxisRaw("Horizontal");
            }

            if (!jumpRequested)
            {
                jumpRequested = Input.GetButtonDown("Jump");
            }

            if (!abilityRequested)
            {
                abilityRequested = Input.GetKeyDown(KeyCode.LeftShift) || Input.GetKeyDown(KeyCode.E);
            }

            if (abilityTimer > 0f)
            {
                abilityTimer -= Time.deltaTime;
            }
        }

        private void FixedUpdate()
        {
            if (activeDef == null)
            {
                return;
            }

            rb.linearVelocity = new Vector2(moveInput * CurrentSpeed, rb.linearVelocity.y);

            if (jumpRequested && IsGrounded())
            {
                rb.linearVelocity = new Vector2(rb.linearVelocity.x, CurrentJump);
                GameFeelEvents.RaiseJump();
            }

            if (abilityRequested && abilityTimer <= 0f)
            {
                var abilityType = activeDef != null ? activeDef.abilityType : fallbackAbilityType;
                TriggerAbility(abilityType);
                abilityTimer = AbilityCooldownDuration;
                GameFeelEvents.RaiseAbility();
            }

            jumpRequested = false;
            abilityRequested = false;
            moveInput = 0f;
        }

        public void SetMoveInput(float axis)
        {
            moveInput = Mathf.Clamp(axis, -1f, 1f);
        }

        public void RequestJump()
        {
            jumpRequested = true;
        }

        public void RequestAbility()
        {
            abilityRequested = true;
        }

        public void SetGroundCheck(Transform check)
        {
            groundCheck = check;
        }

        public void SetSpeedMultiplier(float multiplier)
        {
            speedMultiplier = Mathf.Max(0.1f, multiplier);
        }

        public void ResetSpeedMultiplier()
        {
            speedMultiplier = 1f;
        }

        public void SetGravityScale(float value)
        {
            rb.gravityScale = value;
        }

        public float GetGravityScale()
        {
            return rb.gravityScale;
        }

        public void PushForward(float force)
        {
            var forward = transform.localScale.x >= 0f ? 1f : -1f;
            rb.AddForce(new Vector2(forward * force, 0f), ForceMode2D.Impulse);
        }

        private void TriggerAbility(AbilityType type)
        {
            foreach (var ability in abilities)
            {
                if (ability.AbilityType == type)
                {
                    ability.Activate();
                    break;
                }
            }
        }

        private bool IsGrounded()
        {
            if (groundCheck == null)
            {
                return true;
            }

            return Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, groundMask);
        }

        private void HandleSessionChanged(GameSessionData session)
        {
            ConfigureFromCharacter(session.ActiveCharacterId);
        }

        private void ConfigureFromCharacter(string characterId)
        {
            if (roster == null)
            {
                return;
            }

            var found = roster.FindById(characterId);
            if (found != null)
            {
                activeDef = found;
            }
        }
    }
}
