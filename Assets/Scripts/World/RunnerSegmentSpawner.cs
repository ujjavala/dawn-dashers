using System.Collections.Generic;
using UnityEngine;

namespace DawnDashers.World
{
    public class RunnerSegmentSpawner : MonoBehaviour
    {
        [SerializeField] private Transform player;
        [SerializeField] private List<GameObject> segmentPrefabs = new();
        [SerializeField] private int initialSegments = 6;
        [SerializeField] private float segmentLength = 18f;
        [SerializeField] private int maxActiveSegments = 9;
        [SerializeField] private float branchHalfWidth = 4f;

        private readonly Queue<GameObject> activeSegments = new();
        private float nextSpawnZ;

        private void Start()
        {
            for (var i = 0; i < initialSegments; i++)
            {
                SpawnNextSegment();
            }
        }

        private void Update()
        {
            if (player == null || segmentPrefabs.Count == 0)
            {
                return;
            }

            while (player.position.z + (segmentLength * 4f) > nextSpawnZ)
            {
                SpawnNextSegment();
            }

            while (activeSegments.Count > maxActiveSegments)
            {
                var oldest = activeSegments.Dequeue();
                if (oldest != null)
                {
                    Destroy(oldest);
                }
            }
        }

        private void SpawnNextSegment()
        {
            if (segmentPrefabs.Count == 0)
            {
                return;
            }

            var prefab = segmentPrefabs[Random.Range(0, segmentPrefabs.Count)];
            var xOffset = Random.Range(-branchHalfWidth, branchHalfWidth);
            var segment = Instantiate(prefab, new Vector3(xOffset, 0f, nextSpawnZ), Quaternion.identity);
            activeSegments.Enqueue(segment);
            nextSpawnZ += segmentLength;
        }
    }
}
