using System;

namespace DawnDashers.Services
{
    [Serializable]
    public class DialogueRequest
    {
        public string animal;
        public string region;
        public string mood;
    }

    [Serializable]
    public class DialogueResponse
    {
        public string line;
    }

    [Serializable]
    public class HintRequest
    {
        public string puzzle_type;
        public string difficulty;
    }

    [Serializable]
    public class HintResponse
    {
        public string hint;
    }

    [Serializable]
    public class RoadEventResponse
    {
        public string title;
        public string description;
        public int reward_tokens;
    }
}
