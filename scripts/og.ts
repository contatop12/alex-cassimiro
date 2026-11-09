/**
 * Imagens de compartilhamento (1200×630) e ícones, gerados com Satori (texto vira vetor)
 * + Resvg (rasterização) + Sharp (compressão). Usa o retrato aprovado do hero.
 */
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import sharp from 'sharp';

const require = createRequire(import.meta.url);
const fontFile = (pkg: string, file: string) => readFileSync(require.resolve(`${pkg}/files/${file}`));

const fonts = [
  {
    name: 'Bodoni',
    data: fontFile('@fontsource/bodoni-moda', 'bodoni-moda-latin-500-normal.woff'),
    weight: 500 as const,
    style: 'normal' as const,
  },
  {
    name: 'Grotesk',
    data: fontFile('@fontsource/schibsted-grotesk', 'schibsted-grotesk-latin-500-normal.woff'),
    weight: 500 as const,
    style: 'normal' as const,
  },
  {
    name: 'Grotesk',
    data: fontFile('@fontsource/schibsted-grotesk', 'schibsted-grotesk-latin-700-normal.woff'),
    weight: 700 as const,
    style: 'normal' as const,
  },
];

type Node = {
  type: string;
  props: Record<string, unknown> & { style?: Record<string, unknown>; children?: unknown };
};
const h = (
  type: string,
  style: Record<string, unknown>,
  children?: unknown,
  extra: Record<string, unknown> = {},
): Node => ({
  type,
  props: { style: { display: 'flex', ...style }, children, ...extra },
});

const NAVY = '#0a2850';
const PAPER = '#eff0ec';

let portraitCache: string | null = null;
async function portrait(publicDir: string): Promise<string> {
  if (!portraitCache) {
    const buf = await sharp(`${publicDir}/img/heroPortrait-754.webp`).jpeg({ quality: 88 }).toBuffer();
    portraitCache = `data:image/jpeg;base64,${buf.toString('base64')}`;
  }
  return portraitCache;
}

export async function ogImage(opts: {
  title: string;
  tagline: string;
  domain: string;
  publicDir: string;
}): Promise<Buffer> {
  const img = await portrait(opts.publicDir);
  const titleSize = opts.title.length > 70 ? 50 : opts.title.length > 48 ? 58 : 66;
  const logo = `data:image/svg+xml;base64,${readFileSync(`${opts.publicDir}/img/logo-light.svg`).toString('base64')}`;
  const tree = h('div', { width: 1200, height: 630, background: PAPER, fontFamily: 'Grotesk' }, [
    h(
      'div',
      {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 760,
        height: 630,
        padding: '52px 64px',
      },
      [
        { type: 'img', props: { src: logo, width: 214, height: 60, style: { width: 214, height: 60 } } },
        h('div', { flexDirection: 'column' }, [
          h('div', { width: 64, height: 4, background: '#2c62ae', marginBottom: 28 }),
          h(
            'div',
            { fontFamily: 'Bodoni', fontSize: titleSize, lineHeight: 1.08, color: NAVY, letterSpacing: -0.8 },
            opts.title,
          ),
        ]),
        h('div', { flexDirection: 'column', fontSize: 24, color: '#2e4f7a' }, [
          h('div', { fontWeight: 700 }, opts.tagline),
          h('div', { color: '#55657d', marginTop: 6, fontSize: 22 }, opts.domain),
        ]),
      ],
    ),
    h('div', { width: 440, height: 630, position: 'relative' }, [
      {
        type: 'img',
        props: {
          src: img,
          width: 440,
          height: 630,
          style: { width: 440, height: 630, objectFit: 'cover', objectPosition: '50% 20%' },
        },
      },
    ]),
  ]);
  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts,
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return sharp(png).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
}

export function svgToPng(svg: string, width: number): Buffer {
  return new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();
}

/** ICO contendo um PNG 32×32 (formato aceito por todos os navegadores). */
export function pngToIco(png: Buffer, size = 32): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size, 0);
  entry.writeUInt8(size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}
