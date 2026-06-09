using DawnDashers.Audio;
using DawnDashers.Characters;
using DawnDashers.Systems;
using DawnDashers.VFX;
using DawnDashers.World;
using UnityEngine;

namespace DawnDashers.Core
{
    public class PrototypeRuntimeBootstrap : MonoBehaviour
    {
        [SerializeField] private bool autoSpawnPrototype = true;

        private void Start()
        {
            if (!autoSpawnPrototype)
            {
                return;
            }

            EnsureGlobalSystems();
            EnsureSimpleWorld();
        }

        private void EnsureGlobalSystems()
        {
            if (FindAnyObjectByType<GameManager>() == null)
            {
                new GameObject("GameManager").AddComponent<GameManager>();
            }

            if (FindAnyObjectByType<ObjectiveSystem>() == null)
            {
                new GameObject("ObjectiveSystem").AddComponent<ObjectiveSystem>();
            }

            if (FindAnyObjectByType<PlatformBootstrap>() == null)
            {
                new GameObject("PlatformBootstrap").AddComponent<PlatformBootstrap>();
            }

            if (FindAnyObjectByType<AudioDirector>() == null)
            {
                var audioRoot = new GameObject("AudioDirector");
                var director = audioRoot.AddComponent<AudioDirector>();

                var music = audioRoot.AddComponent<AudioSource>();
                music.loop = true;
                music.playOnAwake = false;
                music.volume = 0.5f;

                var sfx = audioRoot.AddComponent<AudioSource>();
                sfx.loop = false;
                sfx.playOnAwake = false;
                sfx.volume = 0.8f;
                director.ConfigureSources(music, sfx);
            }
        }

        private void EnsureSimpleWorld()
        {
            if (GameObject.FindWithTag("Player") != null)
            {
                return;
            }

            var ground = GameObject.CreatePrimitive(PrimitiveType.Cube);
            ground.name = "Ground";
            ground.transform.position = new Vector3(0f, -1.2f, 0f);
            ground.transform.localScale = new Vector3(60f, 1f, 1f);

            var player = new GameObject("Player");
            player.tag = "Player";
            player.transform.position = new Vector3(-8f, 0f, 0f);

            var rb = player.AddComponent<Rigidbody2D>();
            rb.gravityScale = 2.2f;
            player.AddComponent<BoxCollider2D>();

            var groundCheck = new GameObject("GroundCheck").transform;
            groundCheck.SetParent(player.transform);
            groundCheck.localPosition = new Vector3(0f, -0.6f, 0f);

            var controller = player.AddComponent<PlayerCharacterController>();
            controller.SetGroundCheck(groundCheck);
            player.AddComponent<EmuSprintAbility>();
            player.AddComponent<WombatChargeAbility>();
            player.AddComponent<PossumGlideAbility>();
            player.AddComponent<EchidnaRevealAbility>();
            player.AddComponent<SprintTrailVfx>();

            var collectible = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            collectible.name = "LightFragmentPickup";
            collectible.transform.position = new Vector3(-3f, 0.3f, 0f);
            var trigger = collectible.AddComponent<CircleCollider2D>();
            trigger.isTrigger = true;
            collectible.AddComponent<CollectiblePulseVfx>();
            collectible.AddComponent<CollectiblePickup>();

            var sun = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            sun.name = "SunFragment";
            sun.transform.position = new Vector3(6f, 1f, 0f);
            var sunTrigger = sun.AddComponent<CircleCollider2D>();
            sunTrigger.isTrigger = true;
            sun.AddComponent<CollectiblePulseVfx>();
            sun.AddComponent<SunFragmentPickup>();

            var enemy = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            enemy.name = "DarknessCreature";
            enemy.transform.position = new Vector3(1f, 0f, 0f);
            enemy.AddComponent<BoxCollider2D>();
            enemy.AddComponent<DamageOnTouch>();

            if (Camera.main != null)
            {
                Camera.main.transform.position = new Vector3(0f, 1f, -10f);
                Camera.main.backgroundColor = new Color(0.05f, 0.1f, 0.2f, 1f);
            }
        }
    }
}
