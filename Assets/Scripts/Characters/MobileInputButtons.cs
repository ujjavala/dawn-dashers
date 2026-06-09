using UnityEngine;
using DawnDashers.World;

namespace DawnDashers.Characters
{
    public class MobileInputButtons : MonoBehaviour
    {
        [SerializeField] private PlayerCharacterController player;
        [SerializeField] private TempleRunRunnerController3D runner;

        public void MoveLeftDown()
        {
            if (runner != null)
            {
                runner.MoveLeft();
                return;
            }

            player?.SetMoveInput(-1f);
        }

        public void MoveRightDown()
        {
            if (runner != null)
            {
                runner.MoveRight();
                return;
            }

            player?.SetMoveInput(1f);
        }

        public void MoveReleased()
        {
            player?.SetMoveInput(0f);
        }

        public void JumpPressed()
        {
            if (runner != null)
            {
                runner.Jump();
                return;
            }

            player?.RequestJump();
        }

        public void AbilityPressed()
        {
            player?.RequestAbility();
        }

        public void SlidePressed()
        {
            if (runner != null)
            {
                runner.Slide();
            }
        }
    }
}
