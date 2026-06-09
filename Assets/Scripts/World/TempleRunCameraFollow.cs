using UnityEngine;

namespace DawnDashers.World
{
    public class TempleRunCameraFollow : MonoBehaviour
    {
        [SerializeField] private Transform target;
        [SerializeField] private Vector3 offset = new(0f, 4.8f, -7.2f);
        [SerializeField] private float followSmoothness = 8f;
        [SerializeField] private float lookAhead = 7f;
        [SerializeField] private float tiltAngle = 4f;

        private void LateUpdate()
        {
            if (target == null)
            {
                return;
            }

            var desired = target.position + offset;
            transform.position = Vector3.Lerp(transform.position, desired, Time.deltaTime * followSmoothness);

            var lookPoint = target.position + Vector3.forward * lookAhead;
            var lookRotation = Quaternion.LookRotation(lookPoint - transform.position, Vector3.up);
            var tilt = Quaternion.Euler(0f, 0f, tiltAngle);
            transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation * tilt, Time.deltaTime * followSmoothness);
        }

        public void SetTarget(Transform followTarget)
        {
            target = followTarget;
        }
    }
}
