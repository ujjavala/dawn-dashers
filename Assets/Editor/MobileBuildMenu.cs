#if UNITY_EDITOR
using System.IO;
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEngine;

namespace DawnDashers.Editor
{
    public static class MobileBuildMenu
    {
        private const string AndroidOutput = "deploy/android/DawnDashers-Android";
        private const string IosOutput = "deploy/ios/DawnDashers-iOS";

        [MenuItem("Tools/Dawn Dashers/Build Android")]
        public static void BuildAndroid()
        {
            BuildPlayer(BuildTarget.Android, AndroidOutput, "DawnDashers-Android");
        }

        [MenuItem("Tools/Dawn Dashers/Build iOS")]
        public static void BuildIos()
        {
            BuildPlayer(BuildTarget.iOS, IosOutput, "DawnDashers-iOS");
        }

        private static void BuildPlayer(BuildTarget target, string outputPath, string buildName)
        {
            Directory.CreateDirectory(outputPath);

            var scenes = EditorBuildSettings.scenes;
            if (scenes == null || scenes.Length == 0)
            {
                Debug.LogError("No scenes configured in Build Settings.");
                return;
            }

            var scenePaths = new string[scenes.Length];
            for (var i = 0; i < scenes.Length; i++)
            {
                scenePaths[i] = scenes[i].path;
            }

            var previousTarget = EditorUserBuildSettings.activeBuildTarget;
            var previousGroup = EditorUserBuildSettings.selectedBuildTargetGroup;
            var currentPlatform = EditorUserBuildSettings.activeBuildTarget;

            var options = new BuildPlayerOptions
            {
                scenes = scenePaths,
                locationPathName = outputPath,
                target = target,
                options = BuildOptions.None
            };

            if (target == BuildTarget.Android)
            {
                options.locationPathName = Path.Combine(outputPath, buildName + ".apk");
            }
            else if (target == BuildTarget.iOS)
            {
                options.locationPathName = outputPath;
            }

            if (target != currentPlatform)
            {
                EditorUserBuildSettings.SwitchActiveBuildTarget(BuildPipeline.GetBuildTargetGroup(target), target);
            }

            var report = BuildPipeline.BuildPlayer(options);
            if (report.summary.result == BuildResult.Succeeded)
            {
                Debug.Log($"{buildName} build succeeded: {report.summary.totalSize} bytes");
            }
            else
            {
                Debug.LogError($"{buildName} build failed: {report.summary.result}");
            }

            if (target != currentPlatform)
            {
                EditorUserBuildSettings.SwitchActiveBuildTarget(previousGroup, previousTarget);
            }
        }
    }
}
#endif
