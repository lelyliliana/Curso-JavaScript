import { crearTarea, cambiarTarea, eliminarTarea, filtrarTareas } from './dominio.js';
import { leer, guardar } from './almacenamiento.js';
import { renderTareas } from './ui.js';
const formulario = document.querySelector('#formulario');
const titulo = document.querySelector('#titulo');
const filtro = document.querySelector('#filtro');
const buscar = document.querySelector('#buscar');
const lista = document.querySelector('#lista');
const estado = document.querySelector('#estado');
const error = document.querySelector('#error');
const guardarBoton = document.querySelector('#guardar');
const cancelar = document.querySelector('#cancelar');
let tareas = []; let editando = null; let storage;
try { storage = localStorage; tareas = leer(storage); }
catch { error.textContent = 'No se pudo leer el guardado local. No se sobrescribió durante la carga. Puedes trabajar en memoria.'; }
function render(mensaje) {
  const visibles = filtrarTareas(tareas, filtro.value, buscar.value);
  renderTareas(lista, visibles);
  estado.textContent = mensaje ?? `${visibles.length} de ${tareas.length} tareas visibles.`;
}
function confirmar(nuevas, mensaje) {
  tareas = nuevas;
  error.textContent = '';
  try { if (!storage) throw new Error('Sin almacenamiento'); guardar(storage, tareas); }
  catch { error.textContent = 'El cambio está en memoria, pero no se pudo guardar. No hay sincronización ni respaldo remoto.'; }
  render(mensaje);
}
function salirEdicion() { editando = null; titulo.value = ''; guardarBoton.textContent = 'Agregar tarea'; cancelar.hidden = true; titulo.removeAttribute('aria-invalid'); }
formulario.addEventListener('submit', event => {
  event.preventDefault();
  try {
    const nuevas = editando === null ? crearTarea(tareas, titulo.value) : cambiarTarea(tareas, editando, { titulo: titulo.value });
    confirmar(nuevas, editando === null ? 'Tarea agregada.' : 'Tarea actualizada.'); salirEdicion(); titulo.focus();
  } catch (fallo) { error.textContent = fallo.message; titulo.setAttribute('aria-invalid','true'); titulo.focus(); }
});
cancelar.addEventListener('click', () => { salirEdicion(); titulo.focus(); render('Edición cancelada.'); });
lista.addEventListener('click', event => {
  const boton = event.target.closest('button[data-id]');
  if (!boton || !lista.contains(boton)) return;
  const id = Number(boton.dataset.id); const tarea = tareas.find(t => t.id === id);
  if (!tarea) return;
  if (boton.dataset.accion === 'editar') {
    editando = id; titulo.value = tarea.titulo; guardarBoton.textContent = 'Guardar cambios'; cancelar.hidden = false; titulo.focus(); return;
  }
  try {
    const nuevas = boton.dataset.accion === 'eliminar' ? eliminarTarea(tareas,id) : cambiarTarea(tareas,id,{completada: !tarea.completada});
    confirmar(nuevas, boton.dataset.accion === 'eliminar' ? 'Tarea eliminada.' : 'Estado actualizado.');
    if (editando === id) salirEdicion();
    // La reconstrucción elimina el botón activo; recuperar foco es parte del contrato.
    titulo.focus();
  } catch (fallo) { error.textContent = fallo.message; }
});
filtro.addEventListener('change', () => render());
buscar.addEventListener('input', () => render());
render();
