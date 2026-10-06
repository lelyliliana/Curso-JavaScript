import { serializar, deserializar } from './dominio.js';
export const CLAVE = 'curso-js-tareas-v1';
export function leer(storage) { const texto = storage.getItem(CLAVE); return texto === null ? [] : deserializar(texto); }
export function guardar(storage, tareas) { storage.setItem(CLAVE, serializar(tareas)); }
