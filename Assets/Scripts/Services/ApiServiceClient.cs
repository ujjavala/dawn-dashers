using System;
using System.Collections;
using System.Text;
using UnityEngine;
using UnityEngine.Networking;

namespace DawnDashers.Services
{
    public class ApiServiceClient : MonoBehaviour
    {
        [SerializeField] private ApiConfig config;
        [SerializeField] private float timeoutSeconds = 6f;

        private static readonly string[] OfflineDialogue =
        {
            "Keep moving. Dawn waits beyond the next ridge.",
            "This path holds old clues and bright fragments.",
            "Trust the light markers and outrun the shadows."
        };

        private static readonly string[] OfflineHints =
        {
            "Spot the repeating pattern first, then pick the missing piece.",
            "Toggle one element at a time and observe what changes.",
            "Find the shortest logic route by removing dead ends early."
        };

        private static readonly RoadEventResponse[] OfflineRoadEvents =
        {
            new() { title = "Dusty Shortcut", description = "A kangaroo track opens a faster trail.", reward_tokens = 1 },
            new() { title = "Lantern Echo", description = "A hidden cache boosts your lantern reserves.", reward_tokens = 2 },
            new() { title = "Traveller Signal", description = "A roadside map reveals a safer route.", reward_tokens = 1 }
        };

        public void RequestDialogue(DialogueRequest request, Action<DialogueResponse> onSuccess, Action<string> onError)
        {
            if (UseOfflineMode())
            {
                onSuccess?.Invoke(BuildOfflineDialogue(request));
                return;
            }

            StartCoroutine(PostJson("/dialogue", request, onSuccess, error =>
            {
                if (ShouldFallbackToOffline())
                {
                    onSuccess?.Invoke(BuildOfflineDialogue(request));
                    return;
                }

                onError?.Invoke(error);
            }));
        }

        public void RequestHint(HintRequest request, Action<HintResponse> onSuccess, Action<string> onError)
        {
            if (UseOfflineMode())
            {
                onSuccess?.Invoke(BuildOfflineHint(request));
                return;
            }

            StartCoroutine(PostJson("/hint", request, onSuccess, error =>
            {
                if (ShouldFallbackToOffline())
                {
                    onSuccess?.Invoke(BuildOfflineHint(request));
                    return;
                }

                onError?.Invoke(error);
            }));
        }

        public void RequestRoadEvent(Action<RoadEventResponse> onSuccess, Action<string> onError)
        {
            if (UseOfflineMode())
            {
                onSuccess?.Invoke(BuildOfflineRoadEvent());
                return;
            }

            StartCoroutine(GetJson("/road-event", onSuccess, error =>
            {
                if (ShouldFallbackToOffline())
                {
                    onSuccess?.Invoke(BuildOfflineRoadEvent());
                    return;
                }

                onError?.Invoke(error);
            }));
        }

        public void RequestHealth(Action<bool> onComplete)
        {
            if (UseOfflineMode())
            {
                onComplete?.Invoke(true);
                return;
            }

            StartCoroutine(GetHealth(onComplete));
        }

        private IEnumerator PostJson<TRequest, TResponse>(string path, TRequest payload, Action<TResponse> onSuccess, Action<string> onError)
        {
            var url = BuildUrl(path);
            var json = JsonUtility.ToJson(payload);
            var bodyRaw = Encoding.UTF8.GetBytes(json);

            using var request = new UnityWebRequest(url, UnityWebRequest.kHttpVerbPOST);
            request.uploadHandler = new UploadHandlerRaw(bodyRaw);
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");
            request.timeout = Mathf.RoundToInt(timeoutSeconds);

            yield return request.SendWebRequest();

            if (request.result != UnityWebRequest.Result.Success)
            {
                onError?.Invoke(request.error);
                yield break;
            }

            try
            {
                var parsed = JsonUtility.FromJson<TResponse>(request.downloadHandler.text);
                onSuccess?.Invoke(parsed);
            }
            catch (Exception ex)
            {
                onError?.Invoke(ex.Message);
            }
        }

        private IEnumerator GetJson<TResponse>(string path, Action<TResponse> onSuccess, Action<string> onError)
        {
            var url = BuildUrl(path);
            using var request = UnityWebRequest.Get(url);
            request.timeout = Mathf.RoundToInt(timeoutSeconds);
            yield return request.SendWebRequest();

            if (request.result != UnityWebRequest.Result.Success)
            {
                onError?.Invoke(request.error);
                yield break;
            }

            try
            {
                var parsed = JsonUtility.FromJson<TResponse>(request.downloadHandler.text);
                onSuccess?.Invoke(parsed);
            }
            catch (Exception ex)
            {
                onError?.Invoke(ex.Message);
            }
        }

        private IEnumerator GetHealth(Action<bool> onComplete)
        {
            var url = BuildUrl("/health");
            using var request = UnityWebRequest.Get(url);
            request.timeout = Mathf.RoundToInt(timeoutSeconds);
            yield return request.SendWebRequest();

            if (request.result == UnityWebRequest.Result.Success)
            {
                onComplete?.Invoke(true);
                yield break;
            }

            onComplete?.Invoke(ShouldFallbackToOffline());
        }

        private string BuildUrl(string path)
        {
            var baseUrl = config != null ? config.GetResolvedBaseUrl() : "http://localhost:8000";
            if (baseUrl.EndsWith("/"))
            {
                baseUrl = baseUrl.TrimEnd('/');
            }

            return baseUrl + path;
        }

        private bool UseOfflineMode()
        {
            return config != null && config.UseOfflineMode();
        }

        private bool ShouldFallbackToOffline()
        {
            return config != null && config.useOfflineFallbackWhenRequestFails;
        }

        private DialogueResponse BuildOfflineDialogue(DialogueRequest request)
        {
            var index = Mathf.Abs((request?.region ?? "Outback").GetHashCode()) % OfflineDialogue.Length;
            return new DialogueResponse { line = OfflineDialogue[index] };
        }

        private HintResponse BuildOfflineHint(HintRequest request)
        {
            var index = Mathf.Abs((request?.puzzle_type ?? "pattern").GetHashCode()) % OfflineHints.Length;
            return new HintResponse { hint = OfflineHints[index] };
        }

        private RoadEventResponse BuildOfflineRoadEvent()
        {
            var index = UnityEngine.Random.Range(0, OfflineRoadEvents.Length);
            return OfflineRoadEvents[index];
        }
    }
}
