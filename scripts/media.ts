/**
 * Otimiza mídia para a web.
 *  - Imagens: recorte + AVIF e WebP em larguras responsivas + placeholder (LQIP).
 *  - Vídeos (se existirem em materiais/originais/videos): MP4 H.264 (faststart) + WebM VP9 + pôster.
 * Os originais ficam em materiais/originais (fora do Git). Saída versionada em public/img e public/video.
 *
 * Uso: npm run media
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';
import sharp from 'sharp';
import { type GeneratedImage, type ImageKey, imageSpecs } from '../src/site/images.ts';

const root = resolve(import.meta.dirname, '..');
const originals = join(root, 'materiais', 'originais');
const outImg = join(root, 'public', 'img');
const outVideo = join(root, 'public', 'video');
const manifestPath = join(root, 'src', 'site', 'images.generated.json');

async function processImages() {
  mkdirSync(outImg, { recursive: true });
  const manifest: Record<string, GeneratedImage> = {};
  for (const [key, spec] of Object.entries(imageSpecs) as [ImageKey, (typeof imageSpecs)[ImageKey]][]) {
    const src = join(originals, spec.source);
    if (!existsSync(src)) throw new Error(`Original ausente: ${spec.source}`);
    const meta = await sharp(src).metadata();
    const W = meta.width!;
    const H = meta.height!;
    let pipeline = sharp(src).rotate();
    let w = W;
    let h = H;
    if ('crop' in spec && spec.crop) {
      const [l, t, cw, ch] = spec.crop;
      const left = Math.round(l * W);
      const top = Math.round(t * H);
      w = Math.min(Math.round(cw * W), W - left);
      h = Math.min(Math.round(ch * H), H - top);
      pipeline = pipeline.extract({ left, top, width: w, height: h });
    }
    const base = await pipeline.flatten({ background: '#0e2240' }).toBuffer();
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
    console.log(`img  ${key.padEnd(16)} ${w}x${h} → ${widths.join(', ')}`);
  }
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

function hasFfmpeg(): boolean {
  try {
    execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function processVideos() {
  const dir = join(originals, 'videos');
  if (!existsSync(dir)) {
    console.log('video: nenhum vídeo em materiais/originais/videos (nada a otimizar)');
    return;
  }
  if (!hasFfmpeg()) {
    console.warn('video: ffmpeg não encontrado — pulei a otimização de vídeos');
    return;
  }
  mkdirSync(outVideo, { recursive: true });
  for (const file of readdirSync(dir)) {
    if (!/\.(mp4|mov|m4v|webm|mkv)$/i.test(file)) continue;
    const name = basename(file, extname(file));
    const input = join(dir, file);
    const scale = "scale='min(1280,iw)':-2";
    // MP4 H.264 com moov no início (streaming progressivo) e sem trilha desnecessária de metadados
    execFileSync(
      'ffmpeg',
      [
        '-y',
        '-i',
        input,
        '-vf',
        scale,
        '-c:v',
        'libx264',
        '-preset',
        'slow',
        '-crf',
        '26',
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
        '-map_metadata',
        '-1',
        join(outVideo, `${name}.mp4`),
      ],
      { stdio: 'inherit' },
    );
    execFileSync(
      'ffmpeg',
      [
        '-y',
        '-i',
        input,
        '-vf',
        scale,
        '-c:v',
        'libvpx-vp9',
        '-crf',
        '34',
        '-b:v',
        '0',
        '-row-mt',
        '1',
        '-c:a',
        'libopus',
        '-b:a',
        '80k',
        '-map_metadata',
        '-1',
        join(outVideo, `${name}.webm`),
      ],
      { stdio: 'inherit' },
    );
    execFileSync(
      'ffmpeg',
      ['-y', '-ss', '1', '-i', input, '-frames:v', '1', '-vf', scale, join(outVideo, `${name}-poster.jpg`)],
      {
        stdio: 'inherit',
      },
    );
    console.log(`video ${name} → mp4, webm, poster`);
  }
}

await processImages();
processVideos();
