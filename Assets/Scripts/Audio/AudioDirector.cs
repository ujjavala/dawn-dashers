using DawnDashers.Core;
using DawnDashers.Systems;
using UnityEngine;

namespace DawnDashers.Audio
{
    public class AudioDirector : MonoBehaviour
    {
        [SerializeField] private AudioCueLibrary cues;
        [SerializeField] private AudioSource musicSource;
        [SerializeField] private AudioSource sfxSource;

        public void ConfigureSources(AudioSource music, AudioSource sfx)
        {
            musicSource = music;
            sfxSource = sfx;
        }

        private void OnEnable()
        {
            GameFeelEvents.OnJump += HandleJump;
            GameFeelEvents.OnCollect += HandleCollect;
            GameFeelEvents.OnFragmentRecovered += HandleFragment;
            GameFeelEvents.OnHit += HandleHit;
            GameFeelEvents.OnAbility += HandleAbility;

            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnPhaseChanged += HandlePhaseChanged;
                HandlePhaseChanged(GameManager.Instance.CurrentPhase);
            }
        }

        private void OnDisable()
        {
            GameFeelEvents.OnJump -= HandleJump;
            GameFeelEvents.OnCollect -= HandleCollect;
            GameFeelEvents.OnFragmentRecovered -= HandleFragment;
            GameFeelEvents.OnHit -= HandleHit;
            GameFeelEvents.OnAbility -= HandleAbility;

            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnPhaseChanged -= HandlePhaseChanged;
            }
        }

        private void HandlePhaseChanged(GamePhase phase)
        {
            if (musicSource == null || cues == null)
            {
                return;
            }

            AudioClip nextClip = phase == GamePhase.Boss ? cues.bossMusic : cues.gameplayMusic;
            if (phase == GamePhase.MainMenu || phase == GamePhase.CharacterSelect)
            {
                nextClip = cues.mainMenuMusic;
            }

            if (nextClip == null || musicSource.clip == nextClip)
            {
                return;
            }

            musicSource.clip = nextClip;
            musicSource.loop = true;
            musicSource.Play();
        }

        private void HandleJump() => PlaySfx(cues != null ? cues.jumpSfx : null);
        private void HandleCollect() => PlaySfx(cues != null ? cues.collectSfx : null);
        private void HandleFragment() => PlaySfx(cues != null ? cues.fragmentSfx : null);
        private void HandleHit() => PlaySfx(cues != null ? cues.hitSfx : null);
        private void HandleAbility() => PlaySfx(cues != null ? cues.abilitySfx : null);

        private void PlaySfx(AudioClip clip)
        {
            if (clip != null && sfxSource != null)
            {
                sfxSource.PlayOneShot(clip);
            }
        }
    }
}
