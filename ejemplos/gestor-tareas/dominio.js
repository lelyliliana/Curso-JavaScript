export const MAX_TAREAS = 200;
export function analizarCantidad(texto) {
  if (typeof texto !== 'string' || !/^\d{1,8}$/.test(texto.trim())) return { ok: false, error: 'Escribe de uno a ocho dígitos.' };
  const valor = Number(texto.trim());
  return valor <= 100 ? { ok: true, valor } : { ok: false, error: 'Rango admitido: 0 a 100.' };
}
export function validarTitulo(valor) {
  if (typeof valor !== 'string') throw new TypeError('El título debe ser texto.');
  const titulo = valor.trim();
  if (titulo.length < 1 || titulo.length > 80) throw new RangeError('El título requiere de 1 a 80 caracteres (unidades UTF-16).');
  return titulo;
}
export function validarTareas(valor) {
  if (!Array.isArray(valor) || valor.length > MAX_TAREAS) throw new TypeError('Colección de tareas inválida.');
  const ids = new Set();
  return valor.map(t => {
    if (!t || typeof t !== 'object' || !Number.isInteger(t.id) || t.id < 1 || t.id > 1000000000 || ids.has(t.id) || typeof t.completada !== 'boolean') throw new TypeError('Registro o identificador inválido.');
    const titulo = validarTitulo(t.titulo);
    if (titulo !== t.titulo) throw new TypeError('El título persistido debe estar normalizado.');
    ids.add(t.id);
    return { id: t.id, titulo, completada: t.completada };
  });
}
export function crearTarea(tareas, texto) {
  const copia = validarTareas(tareas);
  if (copia.length >= MAX_TAREAS) throw new RangeError('Límite de 200 tareas.');
  const id = Math.max(0, ...copia.map(t => t.id)) + 1;
  if (id > 1000000000) throw new RangeError('No quedan identificadores en el rango.');
  return [...copia, { id, titulo: validarTitulo(texto), completada: false }];
}
export function cambiarTarea(tareas, id, cambio) {
  const copia = validarTareas(tareas);
  if (!copia.some(t => t.id === id)) throw new RangeError('Tarea inexistente.');
  return copia.map(t => t.id !== id ? t : { ...t, ...(cambio.titulo === undefined ? {} : { titulo: validarTitulo(cambio.titulo) }), ...(cambio.completada === undefined ? {} : { completada: exigirBooleano(cambio.completada) }) });
}
function exigirBooleano(v) { if (typeof v !== 'boolean') throw new TypeError('Estado inválido.'); return v; }
export function eliminarTarea(tareas, id) {
  const copia = validarTareas(tareas);
  if (!copia.some(t => t.id === id)) throw new RangeError('Tarea inexistente.');
  return copia.filter(t => t.id !== id);
}
export function filtrarTareas(tareas, filtro = 'todas', busqueda = '') {
  const copia = validarTareas(tareas);
  if (!['todas','pendientes','completadas'].includes(filtro) || typeof busqueda !== 'string') throw new TypeError('Filtro inválido.');
  const termino = busqueda.trim().toLocaleLowerCase('es');
  return copia.filter(t => (filtro === 'todas' || t.completada === (filtro === 'completadas')) && t.titulo.toLocaleLowerCase('es').includes(termino));
}
export function serializar(tareas) { return JSON.stringify({ version: 1, tareas: validarTareas(tareas) }); }
export function deserializar(texto) {
  if (typeof texto !== 'string' || texto.length > 100000) throw new TypeError('Persistencia fuera del límite.');
  const valor = JSON.parse(texto);
  if (!valor || valor.version !== 1) throw new TypeError('Versión de datos no admitida.');
  return validarTareas(valor.tareas);
}
