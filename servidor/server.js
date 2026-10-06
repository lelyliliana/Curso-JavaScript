import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
export const RAIZ = fileURLToPath(new URL('../', import.meta.url));
const tipos = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.txt':'text/plain; charset=utf-8' };
export function crearServidor(raiz = RAIZ) {
  const base = resolve(raiz);
  return createServer(async (req, res) => {
    const responder = (status, contenido, tipo = 'application/json; charset=utf-8') => { res.writeHead(status, { 'Content-Type': tipo, 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff' }); res.end(contenido); };
    try {
      if (req.method !== 'GET') { responder(405, JSON.stringify({error:'Método no admitido'})); return; }
      const url = new URL(req.url, 'http://localhost');
      if (url.pathname === '/api/catalogo') {
        const escenario = url.searchParams.get('escenario') ?? 'normal';
        if (escenario === 'http404' || escenario === 'http500') { responder(escenario === 'http404' ? 404 : 500, JSON.stringify({error:'Fallo de laboratorio'})); return; }
        if (escenario === 'jsoninvalido') { responder(200, '{texto incompleto'); return; }
        if (escenario === 'esquemainvalido') { responder(200, JSON.stringify({datos:'sin colección'})); return; }
        if (escenario === 'vacio') { responder(200, '[]'); return; }
        if (!['normal','lento'].includes(escenario)) { responder(400, JSON.stringify({error:'Escenario desconocido'})); return; }
        const datos = JSON.stringify([{id:1,titulo:'Guía de JavaScript'},{id:2,titulo:'Práctica de módulos'}]);
        if (escenario === 'lento') {
          const timer = setTimeout(() => { if (!res.destroyed) responder(200, datos); }, 800);
          res.on('close', () => clearTimeout(timer));
        } else responder(200, datos);
        return;
      }
      let ruta;
      try { ruta = decodeURIComponent(url.pathname); } catch { responder(400, '{}'); return; }
      if (ruta.includes('\0') || ruta.includes('\\')) { responder(400, '{}'); return; }
      let archivo = resolve(base, '.' + ruta);
      if (archivo !== base && !archivo.startsWith(base + sep)) { responder(403, '{}'); return; }
      if ((await stat(archivo)).isDirectory()) archivo = resolve(archivo, 'index.html');
      if (!tipos[extname(archivo)]) { responder(403, '{}'); return; }
      responder(200, await readFile(archivo), tipos[extname(archivo)]);
    } catch (error) { responder(error.code === 'ENOENT' ? 404 : 500, JSON.stringify({error:'Recurso no disponible'})); }
  });
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const puerto = Number(process.env.PORT ?? 8000);
  if (!Number.isInteger(puerto) || puerto < 1 || puerto > 65535) throw new RangeError('PORT debe ser un puerto válido.');
  const server = crearServidor();
  server.on('error', error => { console.error('No se pudo iniciar:', error.message); process.exitCode = 1; });
  server.listen(puerto, '127.0.0.1', () => console.log(`Curso disponible en http://127.0.0.1:${puerto}/unidad00-entorno/ejemplo/`));
}
