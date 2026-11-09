/**
 * Inventário de imagens publicadas. Cada entrada aponta para um original em
 * materiais/originais (fora do Git) e define recorte e larguras responsivas.
 * `npm run media` gera AVIF + WebP em public/img e atualiza images.generated.json.
 */

export interface ImageSpec {
  /** Caminho relativo a materiais/originais */
  source: string;
  /** Recorte em frações do original: [left, top, width, height] */
  crop?: [number, number, number, number];
  widths: number[];
}

export const imageSpecs = {
  // Retratos (estúdio, fundo vermelho fotográfico)
  heroPortrait: {
    source: 'retratos/retrato-sorridente.png',
    crop: [0.2742, 0, 0.4515, 1],
    widths: [400, 600, 754],
  },
  aboutPortrait: { source: 'retratos/confiante-fundo.png', crop: [0, 0, 1, 0.705], widths: [400, 640, 942] },
  invitePortrait: { source: 'retratos/convite.png', crop: [0.245, 0, 0.4515, 1], widths: [400, 600, 754] },
  statePressure: { source: 'retratos/preocupado.png', crop: [0.218, 0, 0.564, 1], widths: [320, 480, 720] },
  stateDoubt: { source: 'retratos/duvida.png', crop: [0, 0.03, 1, 0.565], widths: [320, 480, 720] },
  stateExplain: { source: 'retratos/gesticulando.png', crop: [0.19, 0, 0.564, 1], widths: [320, 480, 720] },
  stateOpen: {
    source: 'retratos/acolhedor-bracos-abertos.png',
    crop: [0.218, 0, 0.564, 1],
    widths: [320, 480, 720],
  },
  podium: { source: 'retratos/alex-perfil.png', widths: [400, 800] },

  // Palestra em inglês · São Paulo, SP
  talkEnglish: { source: 'palestras/kuraray-4.jpeg', widths: [640, 960, 1280, 1600] },
  talkEnergy: { source: 'palestras/kuraray-2.jpeg', widths: [480, 800, 1200] },
  talkQuestion: { source: 'palestras/kuraray-7.jpeg', widths: [480, 800, 1200] },
  talkListening: { source: 'palestras/kuraray-5.jpeg', widths: [480, 800, 1200] },
  talkRoom: { source: 'palestras/kuraray-6.jpeg', widths: [640, 960, 1600] },
  talkWalk: { source: 'palestras/kuraray-1.jpeg', widths: [640, 960, 1600] },
  talkMic: { source: 'palestras/kuraray-3.jpeg', widths: [480, 800, 1200] },

  // Palestra de inteligência emocional · Valinhos, SP
  valinhosGroup: { source: 'palestras/voilier-grupo.jpeg', widths: [640, 960, 1600] },
  valinhosPortrait: { source: 'palestras/voilier-perfil.jpeg', widths: [400, 640, 1000] },
} satisfies Record<string, ImageSpec>;

export type ImageKey = keyof typeof imageSpecs;

export interface GeneratedImage {
  width: number;
  height: number;
  widths: number[];
  /** Placeholder borrado minúsculo (data URI WebP) */
  lqip: string;
}
