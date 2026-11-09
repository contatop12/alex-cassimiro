/**
 * Vídeo do hero.
 * - O pôster é a imagem principal (LCP); o vídeo só começa a baixar depois do carregamento da página.
 * - Toca sem som, em loop (legendas já estão no vídeo). Botões para pausar e ativar o som.
 * - Não inicia sozinho com "reduzir movimento", economia de dados ou conexão lenta (o botão de play continua).
 * - Pausa fora da tela para poupar dados e bateria.
 */
import { track } from './analytics.ts';

interface NetworkInfo {
  saveData?: boolean;
  effectiveType?: string;
}

export function initHeroVideo() {
  const video = document.querySelector<HTMLVideoElement>('[data-hero-video]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-video-toggle]');
  const sound = document.querySelector<HTMLButtonElement>('[data-video-sound]');
  if (!video || !toggle || !sound) return;
  const holder = video.closest<HTMLElement>('.hero-media');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const net = (navigator as Navigator & { connection?: NetworkInfo }).connection;
  const constrained = !!net?.saveData || /(^|-)(2g|3g)$/.test(net?.effectiveType ?? '');
  let userPaused = false;

  const sync = () => {
    const playing = !video.paused;
    holder?.classList.toggle('is-playing', playing);
    toggle.setAttribute('aria-label', playing ? (toggle.dataset.pause ?? '') : (toggle.dataset.play ?? ''));
    sound.setAttribute('aria-pressed', String(!video.muted));
    const label = sound.querySelector('span');
    if (label) label.textContent = video.muted ? (sound.dataset.on ?? '') : (sound.dataset.off ?? '');
    holder?.classList.toggle('is-unmuted', !video.muted);
  };
  video.addEventListener('playing', () => {
    video.classList.add('is-visible');
    sync();
  });
  video.addEventListener('pause', sync);
  video.addEventListener('volumechange', sync);

  const play = () => video.play().catch(() => sync());

  toggle.addEventListener('click', () => {
    if (video.paused) {
      userPaused = false;
      play();
    } else {
      userPaused = true;
      video.pause();
    }
  });
  sound.addEventListener('click', () => {
    video.muted = !video.muted;
    if (!video.muted) {
      if (video.paused) {
        userPaused = false;
        play();
      }
      track('video_sound_on', { cta_position: 'hero' });
    }
    sync();
  });

  // Pausa fora da tela e retoma ao voltar (só se a pausa não foi do usuário)
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (!entry.isIntersecting && !video.paused) video.pause();
        else if (entry.isIntersecting && video.paused && !userPaused && video.dataset.started) play();
      },
      { threshold: 0.25 },
    ).observe(video);
  }

  const autostart = () => {
    if (reduced || constrained) return sync();
    video.dataset.started = '1';
    const go = () => play();
    if ('requestIdleCallback' in window) requestIdleCallback(go, { timeout: 1500 });
    else setTimeout(go, 300);
  };
  if (document.readyState === 'complete') autostart();
  else addEventListener('load', autostart, { once: true });
  sync();
}
