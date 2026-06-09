using DawnDashers.Systems;
using UnityEngine;

namespace DawnDashers.World
{
    [RequireComponent(typeof(CharacterController))]
    public class TempleRunRunnerController3D : MonoBehaviour
    {
        [Header("Forward Flow")]
        [SerializeField] private float forwardSpeed = 9f;
        [SerializeField] private float maxForwardSpeed = 15f;
        [SerializeField] private float speedRampPerMinute = 1.25f;

        [Header("Steering")]
        [SerializeField] private float steerSpeed = 7f;
        [SerializeField] private float trackHalfWidth = 4.5f;

        [Header("Jump / Slide")]
        [SerializeField] private float jumpForce = 7.5f;
        [SerializeField] private float gravity = 22f;
        [SerializeField] private float slideDuration = 0.65f;
        [SerializeField] private float slideHeightScale = 0.55f;

        [Header("Swipe Controls")]
        [SerializeField] private float swipeThreshold = 80f;
        [SerializeField] private bool allowMouseSwipesInEditor = true;

        private CharacterController controller;
        private float verticalVelocity;
        private float runtimeSeconds;
        private float slideTimer;
        private float originalHeight;
        private Vector3 originalCenter;
        private bool swipeActive;
        private Vector2 swipeStart;

        private void Awake()
        {
            controller = GetComponent<CharacterController>();
            originalHeight = controller.height;
            originalCenter = controller.center;
        }

        private void Update()
        {
            HandleSwipeInput();

            runtimeSeconds += Time.deltaTime;
            var speedBoost = (runtimeSeconds / 60f) * speedRampPerMinute;
            var currentForward = Mathf.Min(maxForwardSpeed, forwardSpeed + speedBoost);

            var steer = Input.GetAxisRaw("Horizontal");
            var move = new Vector3(steer * steerSpeed, 0f, currentForward);

            if (controller.isGrounded)
            {
                verticalVelocity = -1f;
                if (Input.GetButtonDown("Jump"))
                {
                    verticalVelocity = jumpForce;
                    GameFeelEvents.RaiseJump();
                }
            }
            else
            {
                verticalVelocity -= gravity * Time.deltaTime;
            }

            if (Input.GetKeyDown(KeyCode.LeftControl) || Input.GetKeyDown(KeyCode.S))
            {
                StartSlide();
            }

            if (slideTimer > 0f)
            {
                slideTimer -= Time.deltaTime;
                if (slideTimer <= 0f)
                {
                    EndSlide();
                }
            }

            move.y = verticalVelocity;
            controller.Move(move * Time.deltaTime);

            var clampedX = Mathf.Clamp(transform.position.x, -trackHalfWidth, trackHalfWidth);
            transform.position = new Vector3(clampedX, transform.position.y, transform.position.z);
        }

        public void MoveLeft()
        {
            transform.position += Vector3.left * 1.75f;
        }

        public void MoveRight()
        {
            transform.position += Vector3.right * 1.75f;
        }

        public void Jump()
        {
            if (controller.isGrounded)
            {
                verticalVelocity = jumpForce;
                GameFeelEvents.RaiseJump();
            }
        }

        public void Slide()
        {
            StartSlide();
        }

        private void HandleSwipeInput()
        {
            if (Input.touchCount > 0)
            {
                var touch = Input.GetTouch(0);
                switch (touch.phase)
                {
                    case TouchPhase.Began:
                        swipeStart = touch.position;
                        swipeActive = true;
                        break;
                    case TouchPhase.Ended:
                    case TouchPhase.Canceled:
                        if (swipeActive)
                        {
                            ResolveSwipe(touch.position - swipeStart);
                            swipeActive = false;
                        }

                        break;
                }
            }
#if UNITY_EDITOR
            else if (allowMouseSwipesInEditor)
            {
                if (Input.GetMouseButtonDown(0))
                {
                    swipeStart = Input.mousePosition;
                    swipeActive = true;
                }
                else if (Input.GetMouseButtonUp(0) && swipeActive)
                {
                    ResolveSwipe((Vector2)Input.mousePosition - swipeStart);
                    swipeActive = false;
                }
            }
#endif
        }

        private void ResolveSwipe(Vector2 delta)
        {
            if (delta.magnitude < swipeThreshold)
            {
                return;
            }

            if (Mathf.Abs(delta.x) > Mathf.Abs(delta.y))
            {
                if (delta.x < 0f)
                {
                    MoveLeft();
                }
                else
                {
                    MoveRight();
                }

                return;
            }

            if (delta.y > 0f)
            {
                Jump();
            }
            else
            {
                Slide();
            }
        }

        private void StartSlide()
        {
            slideTimer = slideDuration;
            controller.height = originalHeight * slideHeightScale;
            controller.center = new Vector3(originalCenter.x, originalCenter.y * slideHeightScale, originalCenter.z);
        }

        private void EndSlide()
        {
            controller.height = originalHeight;
            controller.center = originalCenter;
        }
    }
}
