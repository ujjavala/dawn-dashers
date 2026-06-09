using UnityEngine;

namespace DawnDashers.Audio
{
    [CreateAssetMenu(menuName = "Dawn Dashers/Audio Cue Library", fileName = "AudioCueLibrary")]
    public class AudioCueLibrary : ScriptableObject
    {
        [Header("Music")]
        public AudioClip mainMenuMusic;
        public AudioClip gameplayMusic;
        public AudioClip bossMusic;

        [Header("SFX")]
        public AudioClip jumpSfx;
        public AudioClip collectSfx;
        public AudioClip fragmentSfx;
        public AudioClip hitSfx;
        public AudioClip abilitySfx;
    }
}
