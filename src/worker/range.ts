/**
 * Suporte a requisições parciais (Range) para vídeos.
 * Safari só reproduz vídeo quando o servidor responde 206. Se o serviço de assets já responder 206,
 * a resposta passa direto; se responder 200, o Worker recorta o trecho pedido por streaming.
 */
const VIDEO_CACHE = 'public, max-age=2592000, stale-while-revalidate=86400';

export function parseRange(header: string, size: number): { start: number; end: number } | 'invalid' | null {
  const m = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!m || (m[1] === '' && m[2] === '')) return null;
  let start: number;
  let end: number;
  if (m[1] === '') {
    const suffix = Number(m[2]);
    start = Math.max(0, size - suffix);
    end = size - 1;
  } else {
    start = Number(m[1]);
    end = m[2] ? Math.min(Number(m[2]), size - 1) : size - 1;
  }
  if (start > end || start >= size) return 'invalid';
  return { start, end };
}

function slice(body: ReadableStream<Uint8Array>, start: number, end: number): ReadableStream<Uint8Array> {
  let pos = 0;
  return body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, ctrl) {
        const from = pos;
        const to = pos + chunk.byteLength;
        pos = to;
        if (to <= start || from > end) return;
        ctrl.enqueue(chunk.subarray(Math.max(0, start - from), Math.min(chunk.byteLength, end - from + 1)));
        if (to > end) ctrl.terminate();
      },
    }),
  );
}

export async function serveVideo(request: Request, assets: Fetcher): Promise<Response> {
  const res = await assets.fetch(request);
  const headers = new Headers(res.headers);
  headers.set('accept-ranges', 'bytes');
  headers.set('cache-control', VIDEO_CACHE);
  headers.set('x-content-type-options', 'nosniff');
  const range = request.headers.get('range');
  if (!range || res.status !== 200 || !res.body) {
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
  }
  // Tamanho conhecido: recorta por streaming. Desconhecido: lê o arquivo (vídeos < 25 MiB) e recorta.
  const declared = Number(res.headers.get('content-length') ?? 0);
  const buffered = declared ? null : new Uint8Array(await res.arrayBuffer());
  const size = declared || buffered!.byteLength;
  const r = parseRange(range, size);
  if (r === null) return new Response(buffered ?? res.body, { status: 200, headers });
  if (r === 'invalid') {
    if (!buffered) await res.body.cancel();
    headers.set('content-range', `bytes */${size}`);
    headers.delete('content-length');
    return new Response(null, { status: 416, headers });
  }
  headers.set('content-range', `bytes ${r.start}-${r.end}/${size}`);
  headers.set('content-length', String(r.end - r.start + 1));
  const body = buffered ? buffered.slice(r.start, r.end + 1) : slice(res.body, r.start, r.end);
  return new Response(body, { status: 206, headers });
}
