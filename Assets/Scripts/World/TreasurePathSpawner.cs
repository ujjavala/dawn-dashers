using System.Collections.Generic;
using UnityEngine;

namespace DawnDashers.World
{
    public class TreasurePathSpawner : MonoBehaviour
    {
        [SerializeField] private GameObject lightFragmentPrefab;
        [SerializeField] private GameObject lanternPrefab;
        [SerializeField] private int chainCount = 6;
        [SerializeField] private float chainSpacing = 2.2f;
        [SerializeField] private float spawnHeight = 1.2f;
        [SerializeField] private List<Transform> treasurePathAnchors = new();

        public void SpawnTreasureChains()
        {
            if (lightFragmentPrefab == null || treasurePathAnchors.Count == 0)
            {
                return;
            }

            foreach (var anchor in treasurePathAnchors)
            {
                if (anchor == null)
                {
                    continue;
                }

                for (var i = 0; i < chainCount; i++)
                {
                    var pos = anchor.position + new Vector3(0f, spawnHeight + Mathf.Sin(i * 0.4f) * 0.35f, i * chainSpacing);
                    Instantiate(lightFragmentPrefab, pos, Quaternion.identity, transform);
                }

                if (lanternPrefab != null)
                {
                    var lanternPos = anchor.position + new Vector3(0f, spawnHeight + 0.5f, chainCount * chainSpacing + 2f);
                    Instantiate(lanternPrefab, lanternPos, Quaternion.identity, transform);
                }
            }
        }
    }
}
