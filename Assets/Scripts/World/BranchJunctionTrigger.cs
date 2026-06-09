using UnityEngine;

namespace DawnDashers.World
{
    public class BranchJunctionTrigger : MonoBehaviour
    {
        [SerializeField] private Transform leftBranchAnchor;
        [SerializeField] private Transform rightBranchAnchor;
        [SerializeField] private float snapDistance = 1.2f;

        private void OnTriggerEnter(Collider other)
        {
            if (!other.CompareTag("Player"))
            {
                return;
            }

            var chooseLeft = Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow);
            var chooseRight = Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow);
            var anchor = chooseLeft ? leftBranchAnchor : chooseRight ? rightBranchAnchor : null;
            if (anchor == null)
            {
                return;
            }

            var pos = other.transform.position;
            var target = anchor.position;
            var snappedX = Mathf.Lerp(pos.x, target.x, snapDistance);
            other.transform.position = new Vector3(snappedX, pos.y, pos.z);
        }
    }
}
