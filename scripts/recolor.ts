/**
 * Troca o fundo vermelho de estúdio dos retratos pelo azul-marinho da logo (#0A2850).
 *
 * 1. Matte suave por cor: pixels muito saturados, avermelhados e não muito escuros.
 * 2. Conectividade: só conta como fundo a região vermelha ligada às bordas da foto
 *    (lábios, bochechas e dobras da pele nunca são alterados).
 * 3. Composição com a mesma luz/vinheta do estúdio e remoção do reflexo vermelho nas bordas.
 */
import sharp from 'sharp';

export const BRAND_NAVY: [number, number, number] = [10, 40, 80];

const smooth = (x: number, a: number, b: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export async function recolorStudio(input: Buffer): Promise<Buffer> {
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width;
  const H = info.height;
  const N = W * H;
  const soft = new Float32Array(N);
  const lum = new Float32Array(N);
  for (let i = 0, p = 0; i < N; i++, p += 3) {
    const r = data[p]!;
    const g = data[p + 1]!;
    const b = data[p + 2]!;
    const mx = Math.max(r, g, b);
    const mn = Math.min(r, g, b);
    const sat = (mx - mn) / Math.max(mx, 1);
    const redness = (r - Math.max(g, b)) / Math.max(r, 1);
    const isRed = r >= g && r >= b ? 1 : 0;
    soft[i] = smooth(sat, 0.52, 0.7) * smooth(redness, 0.48, 0.66) * isRed * smooth(mx, 55, 95);
    lum[i] = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  // Região de fundo conectada às bordas (BFS, vizinhança 4)
  const connected = new Uint8Array(N);
  const queue = new Int32Array(N);
  let head = 0;
  let tail = 0;
  const seed = (i: number) => {
    if (!connected[i] && soft[i]! > 0.35) {
      connected[i] = 1;
      queue[tail++] = i;
    }
  };
  for (let x = 0; x < W; x++) {
    seed(x);
    seed((H - 1) * W + x);
  }
  for (let y = 0; y < H; y++) {
    seed(y * W);
    seed(y * W + W - 1);
  }
  while (head < tail) {
    const i = queue[head++]!;
    const x = i % W;
    if (x > 0) seed(i - 1);
    if (x < W - 1) seed(i + 1);
    if (i >= W) seed(i - W);
    if (i < N - W) seed(i + W);
  }

  // Bolsões de fundo cercados pelo corpo (ex.: entre o braço e a cabeça): regiões fechadas
  // com aparência inequívoca de fundo (média alta do matte) e área mínima. Lábios e pele não passam.
  const label = new Int32Array(N);
  let next = 0;
  for (let s0 = 0; s0 < N; s0++) {
    if (connected[s0] || label[s0] || soft[s0]! <= 0.35) continue;
    next++;
    head = 0;
    tail = 0;
    queue[tail++] = s0;
    label[s0] = next;
    let sum = 0;
    while (head < tail) {
      const i = queue[head++]!;
      sum += soft[i]!;
      const x = i % W;
      const nb = [x > 0 ? i - 1 : -1, x < W - 1 ? i + 1 : -1, i >= W ? i - W : -1, i < N - W ? i + W : -1];
      for (const j of nb) {
        if (j >= 0 && !connected[j] && !label[j] && soft[j]! > 0.35) {
          label[j] = next;
          queue[tail++] = j;
        }
      }
    }
    if (tail > N * 0.0004 && sum / tail > 0.85) for (let k = 0; k < tail; k++) connected[queue[k]!] = 1;
  }

  // Expande a região conectada alguns pixels para incluir a transição suave das bordas
  const grown = await sharp(Buffer.from(connected.map((v) => v * 255)), {
    raw: { width: W, height: H, channels: 1 },
  })
    .blur(2.5)
    .extractChannel(0)
    .raw()
    .toBuffer();
  const matte = Buffer.alloc(N);
  for (let i = 0; i < N; i++) matte[i] = grown[i]! > 4 ? Math.round(soft[i]! * 255) : 0;
  const alpha = await sharp(matte, { raw: { width: W, height: H, channels: 1 } })
    .median(5)
    .blur(1.1)
    .extractChannel(0)
    .raw()
    .toBuffer();
  if (alpha.length !== N || grown.length !== N) throw new Error('máscara com número de canais inesperado');

  // Luz do estúdio: normaliza pela luminância típica do fundo
  const samples: number[] = [];
  for (let i = 0; i < N; i += 7) if (alpha[i]! > 230) samples.push(lum[i]!);
  samples.sort((a, b) => a - b);
  const ref = samples.length ? samples[Math.floor(samples.length * 0.7)]! : 128;

  const out = Buffer.alloc(N * 3);
  for (let i = 0, p = 0; i < N; i++, p += 3) {
    const a = alpha[i]! / 255;
    let r = data[p]!;
    const g = data[p + 1]!;
    const b = data[p + 2]!;
    if (a > 0.02 && a < 0.98) r = Math.min(r, Math.max(g, b) * 1.12 + 6); // tira o reflexo vermelho
    const shade = Math.min(1.25, Math.max(0.55, lum[i]! / ref));
    out[p] = Math.round(r * (1 - a) + BRAND_NAVY[0] * shade * a);
    out[p + 1] = Math.round(g * (1 - a) + BRAND_NAVY[1] * shade * a);
    out[p + 2] = Math.round(b * (1 - a) + BRAND_NAVY[2] * shade * a);
  }
  return sharp(out, { raw: { width: W, height: H, channels: 3 } })
    .png()
    .toBuffer();
}
