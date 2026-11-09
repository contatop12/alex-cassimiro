/**
 * Otimiza mídia para a web a partir de materiais/originais (fora do Git).
 *  1. Logo: SVGs oficiais sem o retângulo de fundo e com viewBox recortado → public/img/logo-*.svg
 *  2. Vídeo do hero: recorte 4:5, 720×900, MP4 H.264 (faststart) + WebM VP9 + pôster em alta
 *  3. Imagens: recorte, troca do fundo vermelho de estúdio pelo azul da logo (quando indicado),
 *     AVIF + WebP em larguras responsivas + placeholder (LQIP) → public/img + images.generated.json
 *
 * Uso: npm run media            (tudo)
 *      npm run media -- --skip-video   (pula a recodificação do vídeo, que é a etapa mais lenta)
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { type GeneratedImage, type ImageKey, type ImageSpec, imageSpecs } from '../src/site/images.ts';
import { recolorStudio } from './recolor.ts';

const root = resolve(import.meta.dirname, '..');
const originals = join(root, 'materiais', 'originais');
const outImg = join(root, 'public', 'img');
const outVideo = join(root, 'public', 'video');
const manifestPath = join(root, 'src', 'site', 'images.generated.json');
const skipVideo = process.argv.includes('--skip-video');

/* ---------- 1. Logo ---------- */
async function svgBBox(svg: string, scale = 4) {
  const png = new Resvg(svg, { fitTo: { mode: 'zoom', value: scale } }).render().asPng();
  const { info } = await sharp(png).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });
  const left = -(info.trimOffsetLeft ?? 0) / scale;
  const top = -(info.trimOffsetTop ?? 0) / scale;
  return { x: left, y: top, w: info.width / scale, h: info.height / scale };
}

async function processLogo() {
  const dir = join(originals, 'logo');
  if (!existsSync(dir)) {
    console.warn('logo: materiais/originais/logo ausente — mantendo os arquivos publicados');
    return;
  }
  for (const [src, out] of [
    ['logo-clara.svg', 'logo-light.svg'],
    ['logo-escura.svg', 'logo-dark.svg'],
  ] as const) {
    // Remove o fundo e usa px (o original declara width/height em pt, o que distorce a medição)
    let svg = readFileSync(join(dir, src), 'utf8')
      .replace(/<rect x="-81"[^>]*\/>/g, '')
      .replace(/\swidth="([\d.]+)pt"\sheight="([\d.]+)pt"/, ' width="$1" height="$2"');
    const box = await svgBBox(svg);
    const pad = 2;
    const vb = [box.x - pad, box.y - pad, box.w + pad * 2, box.h + pad * 2].map((n) => +n.toFixed(2));
    svg = svg.replace(
      /<svg([^>]*?)\swidth="[^"]*"\sheight="[^"]*"\sviewBox="[^"]*"/,
      `<svg$1 width="${vb[2]}" height="${vb[3]}" viewBox="${vb.join(' ')}" role="img" aria-label="Alex Cassimiro"`,
    );
    writeFileSync(join(outImg, out), svg);
    console.log(`logo ${out} viewBox ${vb.join(' ')}`);
  }
  // Monograma claro sobre o azul da logo (favicon e ícones do app)
  const mono = readFileSync(join(dir, 'monograma.svg'), 'utf8');
  const path = mono.match(/<path[\s\S]*?\/>/)?.[0]?.replace(/fill="#[0-9A-Fa-f]{6}"/, 'fill="#F2F5FA"');
  if (!path) throw new Error('monograma sem <path>');
  const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" rx="96" fill="#0A2850"/><svg x="64" y="96" width="384" height="320" viewBox="0 0 539 422">${path}</svg></svg>`;
  writeFileSync(join(outImg, 'monogram.svg'), icon);
  console.log('logo monogram.svg');
}

/* ---------- 2. Vídeo do hero ---------- */
const heroVideo = {
  source: 'videos/palestra-voiler.mp4',
  /** Recorte 4:5 do vídeo vertical (2160×3840): mantém cabeças e legendas gravadas */
  crop: 'crop=2160:2700:0:280',
  size: 'scale=720:900:flags=lanczos',
  posterAt: '0.6',
};

function hasFfmpeg(): boolean {
  try {
    execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function processVideo() {
  const input = join(originals, heroVideo.source);
  if (!existsSync(input)) return console.warn('video: original ausente — mantendo os arquivos publicados');
  if (!hasFfmpeg()) return console.warn('video: ffmpeg não encontrado — pulei');
  mkdirSync(outVideo, { recursive: true });
  const poster = join(originals, 'videos', 'hero-poster.png');
  execFileSync('ffmpeg', [
    '-v',
    'error',
    '-y',
    '-ss',
    heroVideo.posterAt,
    '-i',
    input,
    '-frames:v',
    '1',
    '-vf',
    heroVideo.crop,
    poster,
  ]);
  console.log('video pôster', poster);
  if (skipVideo) return console.log('video: --skip-video (codificação pulada)');
  const vf = `${heroVideo.crop},${heroVideo.size}`;
  execFileSync(
    'ffmpeg',
    [
      '-v',
      'error',
      '-y',
      '-i',
      input,
      '-vf',
      vf,
      '-c:v',
      'libx264',
      '-preset',
      'slow',
      '-crf',
      '27',
      '-profile:v',
      'high',
      '-pix_fmt',
      'yuv420p',
      '-movflags',
      '+faststart',
      '-c:a',
      'aac',
      '-b:a',
      '96k',
      '-ac',
      '2',
      '-map_metadata',
      '-1',
      join(outVideo, 'hero.mp4'),
    ],
    { stdio: 'inherit' },
  );
  execFileSync(
    'ffmpeg',
    [
      '-v',
      'error',
      '-y',
      '-i',
      input,
      '-vf',
      vf,
      '-c:v',
      'libvpx-vp9',
      '-crf',
      '36',
      '-b:v',
      '0',
      '-row-mt',
      '1',
      '-deadline',
      'good',
      '-cpu-used',
      '2',
      '-c:a',
      'libopus',
      '-b:a',
      '72k',
      '-map_metadata',
      '-1',
      join(outVideo, 'hero.webm'),
    ],
    { stdio: 'inherit' },
  );
  console.log('video hero.mp4 + hero.webm');
}

/* ---------- 3. Imagens ---------- */
async function processImages() {
  mkdirSync(outImg, { recursive: true });
  const manifest: Record<string, GeneratedImage> = {};
  for (const [key, spec] of Object.entries(imageSpecs) as [ImageKey, ImageSpec][]) {
    const src = join(originals, spec.source);
    if (!existsSync(src)) throw new Error(`Original ausente: ${spec.source}`);
    let input: Buffer = readFileSync(src);
    if (spec.recolor) input = await recolorStudio(input);
    const meta = await sharp(input).metadata();
    const W = meta.width!;
    const H = meta.height!;
    let pipeline = sharp(input).rotate();
    let w = W;
    let h = H;
    if (spec.crop) {
      const [l, t, cw, ch] = spec.crop;
      const left = Math.round(l * W);
      const top = Math.round(t * H);
      w = Math.min(Math.round(cw * W), W - left);
      h = Math.min(Math.round(ch * H), H - top);
      pipeline = pipeline.extract({ left, top, width: w, height: h });
    }
    const base = await pipeline.flatten({ background: '#0a2850' }).toBuffer();
    const widths = spec.widths.filter((x) => x <= w);
    if (!widths.includes(w) && spec.widths.some((x) => x > w)) widths.push(w);
    for (const width of widths) {
      const resized = sharp(base)
        .resize({ width, withoutEnlargement: true, kernel: 'lanczos3' })
        .sharpen({ sigma: width < w ? 0.6 : 0.3 });
      await resized
        .clone()
        .avif({ quality: 64, effort: 6, chromaSubsampling: '4:4:4' })
        .toFile(join(outImg, `${key}-${width}.avif`));
      await resized
        .clone()
        .webp({ quality: 84, effort: 6, smartSubsample: true })
        .toFile(join(outImg, `${key}-${width}.webp`));
    }
    const lqipBuf = await sharp(base).resize({ width: 16 }).blur(1.2).webp({ quality: 40 }).toBuffer();
    manifest[key] = {
      width: w,
      height: h,
      widths: widths.sort((a, b) => a - b),
      lqip: `data:image/webp;base64,${lqipBuf.toString('base64')}`,
    };
    console.log(
      `img  ${key.padEnd(16)} ${w}x${h} → ${widths.join(', ')}${spec.recolor ? ' (fundo azul)' : ''}`,
    );
  }
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

mkdirSync(outImg, { recursive: true });
await processLogo();
processVideo();
await processImages();
