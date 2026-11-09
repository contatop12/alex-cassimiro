/**
 * Verifica o HTML gerado em dist/ (rode `npm run build` antes).
 * Canonical, hreflang recíproco, lang, títulos, JSON-LD, links internos, imagens e sitemap.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { site } from '../src/site/config.ts';
import { hreflang, htmlLang, langs, pageIds, routes } from '../src/site/routes.ts';

const dist = resolve(import.meta.dirname, '..', 'dist');
const built = existsSync(join(dist, 'index.html'));
const read = (urlPath: string) =>
  readFileSync(join(dist, urlPath, urlPath.endsWith('.html') ? '' : 'index.html'), 'utf8');
const all = (html: string, re: RegExp) => Array.from(html.matchAll(re), (m) => m[1]!);

describe.skipIf(!built)('HTML gerado', () => {
  for (const page of pageIds) {
    for (const lang of langs) {
      const url = routes[page][lang];
      it(`${url} tem metadados, hreflang e estrutura corretos`, () => {
        const html = read(url);
        expect(html).toContain(`<html lang="${htmlLang[lang]}"`);
        expect(html).toContain(`<link rel="canonical" href="${site.url}${url}">`);
        expect(all(html, /<h1\b/g).length + (html.match(/<h1\b/g)?.length ?? 0)).toBeGreaterThan(0);
        expect(html.match(/<h1\b/g)?.length).toBe(1);
        const title = html.match(/<title>([^<]+)<\/title>/)?.[1] ?? '';
        expect(title.length).toBeGreaterThan(10);
        expect(html).toMatch(/<meta name="description" content="[^"]{50,}"/);
        // hreflang autorreferente e recíproco + x-default
        for (const l of langs) {
          expect(html).toContain(
            `<link rel="alternate" hreflang="${hreflang[l]}" href="${site.url}${routes[page][l]}">`,
          );
        }
        expect(html).toContain(
          `<link rel="alternate" hreflang="x-default" href="${site.url}${routes[page].pt}">`,
        );
        // JSON-LD válido
        for (const block of all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
          const data = JSON.parse(block);
          expect(data['@context']).toBe('https://schema.org');
        }
        // Imagem social existe
        const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1] ?? '';
        expect(existsSync(join(dist, og.replace(site.url, '')))).toBe(true);
        // Seletor de idioma aponta para a mesma página nos outros idiomas
        for (const l of langs) expect(html).toContain(`href="${routes[page][l]}" hreflang="${htmlLang[l]}"`);
      });
    }
  }

  it('todos os links internos e imagens apontam para arquivos existentes', () => {
    const missing = new Set<string>();
    for (const page of pageIds) {
      for (const lang of langs) {
        const html = read(routes[page][lang]);
        const refs = [
          ...all(html, /\shref="(\/[^"]*)"/g),
          ...all(html, /\ssrc="(\/[^"]*)"/g),
          ...all(html, /srcset="([^"]+)"/g).flatMap((s) => s.split(',').map((p) => p.trim().split(' ')[0]!)),
        ];
        for (const ref of refs) {
          const clean = ref.split(/[?#]/)[0]!;
          if (!clean || clean.startsWith('/api/')) continue;
          const file = clean.endsWith('/') ? join(dist, clean, 'index.html') : join(dist, clean);
          if (!existsSync(file)) missing.add(`${routes[page][lang]} → ${ref}`);
        }
      }
    }
    expect([...missing]).toEqual([]);
  });

  it('rodapé traz o crédito da P12 Digital em cada idioma', () => {
    expect(read('/')).toContain('Desenvolvido por <a href="https://p12digital.com.br/"');
    expect(read('/en/')).toContain('Developed by <a href="https://p12digital.com.br/"');
    expect(read('/es/')).toContain('Desarrollado por <a href="https://p12digital.com.br/"');
  });

  it('espanhol informa que as palestras são em português e inglês', () => {
    const html = read('/es/');
    expect(html).toContain('Conferencias disponibles en portugués e inglés');
  });

  it('formulário de contato traz campos obrigatórios e opção de idioma da palestra', () => {
    for (const lang of langs) {
      const html = read(routes.contact[lang]);
      for (const name of ['name', 'company', 'email', 'objective']) {
        expect(html).toMatch(new RegExp(`name="${name}"[^>]*required`));
      }
      expect(html).toContain('name="talkLanguage" value="en"');
    }
  });

  it('sitemap lista as 27 URLs canônicas com alternâncias', () => {
    const xml = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
    expect(xml.match(/<loc>/g)?.length).toBe(pageIds.length * langs.length);
    expect(xml).toContain(`<loc>${site.url}/en/english-speaking-engagements/</loc>`);
    expect(xml).toContain('hreflang="x-default"');
  });

  it('robots, llms.txt, 404 localizadas e headers existem', () => {
    expect(readFileSync(join(dist, 'robots.txt'), 'utf8')).toContain(`Sitemap: ${site.url}/sitemap.xml`);
    expect(readFileSync(join(dist, 'llms.txt'), 'utf8')).toContain('# Alex Cassimiro');
    for (const p of ['404.html', 'en/404.html', 'es/404.html']) {
      const html = readFileSync(join(dist, p), 'utf8');
      expect(html).toContain('noindex');
    }
    const headers = readFileSync(join(dist, '_headers'), 'utf8');
    expect(headers).toContain('Content-Security-Policy');
    expect(headers).toContain('X-Robots-Tag: noindex');
  });

  it('nome de clientes não aparece enquanto não houver autorização', () => {
    for (const lang of langs) {
      for (const page of pageIds) {
        const html = read(routes[page][lang]);
        expect(html.toLowerCase()).not.toContain('kuraray');
        expect(html.toLowerCase()).not.toContain('voilier');
      }
    }
  });
});
