export class ErrorAPI extends Error {
  constructor(categoria, mensaje) { super(mensaje); this.name = 'ErrorAPI'; this.categoria = categoria; }
}
export function validarCatalogo(valor) {
  if (!Array.isArray(valor) || valor.length > 100) throw new ErrorAPI('esquema', 'Se esperaba una colección de hasta 100 recursos.');
  const ids = new Set();
  return valor.map(v => {
    if (!v || !Number.isInteger(v.id) || v.id < 1 || ids.has(v.id) || typeof v.titulo !== 'string' || v.titulo.length < 1 || v.titulo.length > 100) throw new ErrorAPI('esquema', 'Recurso inválido o duplicado.');
    ids.add(v.id); return { id: v.id, titulo: v.titulo };
  });
}
export async function cargarCatalogo({ escenario = 'normal', signal, timeoutMs = 400, baseURL, fetchImpl = fetch } = {}) {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) throw new TypeError('Límite temporal inválido.');
  const origen = baseURL ?? globalThis.location?.origin;
  if (!origen) throw new TypeError('Especifica baseURL fuera del navegador.');
  const url = new URL('/api/catalogo', origen);
  url.search = new URLSearchParams({ escenario }).toString();
  const controller = new AbortController();
  let agotado = false;
  const cancelar = () => controller.abort();
  if (signal?.aborted) cancelar();
  else signal?.addEventListener('abort', cancelar, { once: true });
  const timer = setTimeout(() => { agotado = true; cancelar(); }, timeoutMs);
  try {
    const response = await fetchImpl(url, { signal: controller.signal });
    if (!response.ok) throw new ErrorAPI('http', `HTTP ${response.status}`);
    let datos;
    try { datos = await response.json(); }
    catch (error) { if (controller.signal.aborted) throw error; throw new ErrorAPI('json', 'La respuesta no contiene JSON válido.'); }
    return validarCatalogo(datos);
  } catch (error) {
    if (agotado) throw new ErrorAPI('timeout', 'Se agotó el tiempo de espera.');
    if (signal?.aborted || controller.signal.aborted) throw new ErrorAPI('cancelada', 'Solicitud cancelada.');
    if (error instanceof ErrorAPI) throw error;
    throw new ErrorAPI('red', 'No fue posible conectar con el servidor.');
  } finally {
    clearTimeout(timer); signal?.removeEventListener('abort', cancelar);
  }
}
