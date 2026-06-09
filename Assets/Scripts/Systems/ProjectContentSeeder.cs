#if UNITY_EDITOR
using DawnDashers.Characters;
using DawnDashers.Core;
using DawnDashers.Puzzles;
using DawnDashers.Services;
using DawnDashers.World;
using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace DawnDashers.Systems
{
    public static class ProjectContentSeeder
    {
        private const string ScenesPath = "Assets/Scenes";
        private const string ScriptablePath = "Assets/ScriptableObjects";
        private const string PrefabPath = "Assets/Prefabs";

        [MenuItem("Tools/Dawn Dashers/Generate Jam Content")]
        public static void GenerateJamContent()
        {
            EnsureFolders();
            var roster = CreateCharacterAssets();
            var apiConfig = CreateApiConfigAsset();
            CreateScenes(apiConfig);
            CreatePrototypePrefab(roster);
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            Debug.Log("Dawn Dashers content generation complete.");
        }

        private static void EnsureFolders()
        {
            Directory.CreateDirectory(ScenesPath);
            Directory.CreateDirectory(ScriptablePath);
            Directory.CreateDirectory(PrefabPath);
            Directory.CreateDirectory("Assets/Art");
            Directory.CreateDirectory("Assets/Audio");
            Directory.CreateDirectory("Assets/UI");
        }

        private static CharacterRoster CreateCharacterAssets()
        {
            var rosterPath = ScriptablePath + "/CharacterRoster.asset";
            var roster = AssetDatabase.LoadAssetAtPath<CharacterRoster>(rosterPath);
            if (roster == null)
            {
                roster = ScriptableObject.CreateInstance<CharacterRoster>();
                AssetDatabase.CreateAsset(roster, rosterPath);
            }

            roster.characters.Clear();
            roster.characters.Add(CreateCharacter("emu", "Emu", 10f, 6f, 3, 10f, AbilityType.Sprint));
            roster.characters.Add(CreateCharacter("wombat", "Wombat", 7f, 4f, 5, 12f, AbilityType.Charge));
            roster.characters.Add(CreateCharacter("possum", "Possum", 8f, 5f, 3, 8f, AbilityType.Glide));
            roster.characters.Add(CreateCharacter("echidna", "Echidna", 8f, 5f, 3, 9f, AbilityType.Reveal));
            EditorUtility.SetDirty(roster);
            return roster;
        }

        private static CharacterDefinition CreateCharacter(string id, string display, float speed, float jump, int health, float cooldown, AbilityType ability)
        {
            var path = ScriptablePath + "/Character_" + display + ".asset";
            var character = AssetDatabase.LoadAssetAtPath<CharacterDefinition>(path);
            if (character == null)
            {
                character = ScriptableObject.CreateInstance<CharacterDefinition>();
                AssetDatabase.CreateAsset(character, path);
            }

            character.characterId = id;
            character.displayName = display;
            character.speed = speed;
            character.jumpForce = jump;
            character.maxHealth = health;
            character.abilityCooldown = cooldown;
            character.abilityType = ability;
            EditorUtility.SetDirty(character);
            return character;
        }

        private static ApiConfig CreateApiConfigAsset()
        {
            var path = ScriptablePath + "/ApiConfig.asset";
            var config = AssetDatabase.LoadAssetAtPath<ApiConfig>(path);
            if (config == null)
            {
                config = ScriptableObject.CreateInstance<ApiConfig>();
                AssetDatabase.CreateAsset(config, path);
            }

            config.baseUrl = "http://localhost:8000";
            config.webAndMobileBaseUrl = "/api";
            config.forceOfflineEverywhere = false;
            config.forceOfflineOnMobile = true;
            config.useOfflineFallbackWhenRequestFails = true;
            EditorUtility.SetDirty(config);
            return config;
        }

        private static void CreateScenes(ApiConfig apiConfig)
        {
            CreateScene("MainMenu", GamePhase.MainMenu, apiConfig);
            CreateScene("CharacterSelect", GamePhase.CharacterSelect, apiConfig);
            CreateScene("OutbackRunner", GamePhase.Exploration, apiConfig);
            CreateScene("ServoCheckpoint", GamePhase.Exploration, apiConfig);
            CreateScene("AuroraFlight", GamePhase.Exploration, apiConfig);
            CreateScene("TuringBoss", GamePhase.Boss, apiConfig);
            CreateScene("Victory", GamePhase.Victory, apiConfig);
        }

        private static void CreateScene(string sceneName, GamePhase phase, ApiConfig apiConfig)
        {
            var scenePath = ScenesPath + "/" + sceneName + ".unity";
            if (File.Exists(scenePath))
            {
                return;
            }

            var scene = EditorSceneManager.NewScene(NewSceneSetup.DefaultGameObjects, NewSceneMode.Single);

            var bootstrap = new GameObject("SceneBootstrap");
            var phaseBootstrap = bootstrap.AddComponent<ScenePhaseBootstrap>();
            var so = new SerializedObject(phaseBootstrap);
            so.FindProperty("phaseOnSceneLoad").enumValueIndex = (int)phase;
            so.ApplyModifiedPropertiesWithoutUndo();

            if (Object.FindAnyObjectByType<GameManager>() == null)
            {
                new GameObject("GameManager").AddComponent<GameManager>();
            }

            if (Object.FindAnyObjectByType<ObjectiveSystem>() == null)
            {
                new GameObject("ObjectiveSystem").AddComponent<ObjectiveSystem>();
            }

            var apiRoot = new GameObject("ApiClient");
            var apiClient = apiRoot.AddComponent<ApiServiceClient>();
            var apiClientSerialized = new SerializedObject(apiClient);
            apiClientSerialized.FindProperty("config").objectReferenceValue = apiConfig;
            apiClientSerialized.ApplyModifiedPropertiesWithoutUndo();

            if (sceneName == "OutbackRunner")
            {
                var runtime = new GameObject("PrototypeRuntimeBootstrap");
                runtime.AddComponent<PrototypeRuntimeBootstrap>();
            }

            if (phase == GamePhase.Exploration || sceneName == "TuringBoss")
            {
                CreateDefaultPuzzleEncounters(sceneName);
            }

            EditorSceneManager.SaveScene(scene, scenePath);
        }

        private static void CreateDefaultPuzzleEncounters(string sceneName)
        {
            var root = new GameObject("PuzzleEncounters");

            CreatePuzzleEncounter<PatternRecognitionPuzzle>(
                root.transform,
                sceneName + "_Pattern",
                new Vector3(-2f, 1f, 24f),
                (serialized, _) =>
                {
                    serialized.FindProperty("correctOptionIndex").intValue = 2;
                    serialized.ApplyModifiedPropertiesWithoutUndo();
                });

            CreatePuzzleEncounter<BinarySwitchPuzzle>(
                root.transform,
                sceneName + "_Binary",
                new Vector3(2f, 1f, 40f),
                (serialized, _) =>
                {
                    var target = serialized.FindProperty("targetPattern");
                    target.arraySize = 4;
                    target.GetArrayElementAtIndex(0).boolValue = true;
                    target.GetArrayElementAtIndex(1).boolValue = false;
                    target.GetArrayElementAtIndex(2).boolValue = true;
                    target.GetArrayElementAtIndex(3).boolValue = true;
                    serialized.ApplyModifiedPropertiesWithoutUndo();
                });

            CreatePuzzleEncounter<LightRoutingPuzzle>(
                root.transform,
                sceneName + "_Routing",
                new Vector3(-1f, 1f, 56f),
                (serialized, _) =>
                {
                    serialized.FindProperty("requiredLitNodes").intValue = 3;
                    serialized.ApplyModifiedPropertiesWithoutUndo();
                });

            CreatePuzzleEncounter<SignalMatchingPuzzle>(
                root.transform,
                sceneName + "_Signal",
                new Vector3(1.5f, 1f, 72f),
                (serialized, _) =>
                {
                    serialized.FindProperty("expectedPattern").stringValue = "SUN";
                    serialized.ApplyModifiedPropertiesWithoutUndo();
                });

            CreatePuzzleEncounter<TuringTapePuzzle>(
                root.transform,
                sceneName + "_Tape",
                new Vector3(-2.5f, 1f, 88f),
                (serialized, _) =>
                {
                    serialized.FindProperty("targetTape").stringValue = "10110";
                    serialized.FindProperty("maxMoves").intValue = 7;
                    serialized.ApplyModifiedPropertiesWithoutUndo();
                });

            CreatePuzzleEncounter<TuringStateMachinePuzzle>(
                root.transform,
                sceneName + "_StateMachine",
                new Vector3(2.5f, 1f, 104f),
                (serialized, _) =>
                {
                    serialized.FindProperty("acceptingState").intValue = 3;
                    serialized.ApplyModifiedPropertiesWithoutUndo();
                });

            CreatePuzzleEncounter<TuringCodebreakerPuzzle>(
                root.transform,
                sceneName + "_Codebreaker",
                new Vector3(-1f, 1f, 120f),
                (serialized, _) =>
                {
                    serialized.FindProperty("targetCode").stringValue = "SUN";
                    serialized.FindProperty("maxAttempts").intValue = 4;
                    serialized.ApplyModifiedPropertiesWithoutUndo();
                });

            CreatePuzzleEncounter<TuringSequencePredictorPuzzle>(
                root.transform,
                sceneName + "_Sequence",
                new Vector3(1f, 1f, 136f),
                (serialized, _) =>
                {
                    serialized.FindProperty("expectedTokenIndex").intValue = 1;
                    serialized.ApplyModifiedPropertiesWithoutUndo();
                });

            CreatePuzzleEncounter<TuringParityPuzzle>(
                root.transform,
                sceneName + "_Parity",
                new Vector3(0f, 1f, 152f),
                (serialized, _) =>
                {
                    serialized.FindProperty("requireEvenParity").boolValue = true;
                    serialized.ApplyModifiedPropertiesWithoutUndo();
                });
        }

        private static void CreatePuzzleEncounter<TPuzzle>(Transform parent, string name, Vector3 position, System.Action<SerializedObject, TPuzzle> configure)
            where TPuzzle : LogicPuzzleBase
        {
            var encounter = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            encounter.name = name;
            encounter.transform.SetParent(parent);
            encounter.transform.position = position;
            encounter.transform.localScale = new Vector3(1.4f, 0.2f, 1.4f);

            var trigger = encounter.AddComponent<BoxCollider>();
            trigger.isTrigger = true;

            var puzzle = encounter.AddComponent<TPuzzle>();
            var serialized = new SerializedObject(puzzle);
            serialized.FindProperty("timeLimitSeconds").floatValue = 25f;
            serialized.FindProperty("keepMomentum").boolValue = true;
            serialized.ApplyModifiedPropertiesWithoutUndo();

            configure?.Invoke(serialized, puzzle);

            var worldTrigger = encounter.AddComponent<PuzzleWorldTrigger>();
            var triggerSerialized = new SerializedObject(worldTrigger);
            triggerSerialized.FindProperty("puzzle").objectReferenceValue = puzzle;
            triggerSerialized.FindProperty("singleUse").boolValue = true;
            triggerSerialized.ApplyModifiedPropertiesWithoutUndo();
        }

        private static void CreatePrototypePrefab(CharacterRoster roster)
        {
            var root = new GameObject("PlayerPrototype");
            root.tag = "Player";
            root.AddComponent<Rigidbody2D>();
            root.AddComponent<BoxCollider2D>();

            var controller = root.AddComponent<PlayerCharacterController>();
            var serialized = new SerializedObject(controller);
            serialized.FindProperty("roster").objectReferenceValue = roster;
            serialized.ApplyModifiedPropertiesWithoutUndo();

            root.AddComponent<EmuSprintAbility>();
            root.AddComponent<WombatChargeAbility>();
            root.AddComponent<PossumGlideAbility>();
            root.AddComponent<EchidnaRevealAbility>();

            var prefabPath = PrefabPath + "/PlayerPrototype.prefab";
            PrefabUtility.SaveAsPrefabAsset(root, prefabPath);
            Object.DestroyImmediate(root);
        }
    }
}
#endif
