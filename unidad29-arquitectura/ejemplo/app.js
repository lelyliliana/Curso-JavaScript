function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
import { crearTarea, filtrarTareas } from '../../lib/dominio.js';
const tareas = crearTarea([], 'Leer el módulo');
mostrar({ todas: tareas, pendientes: filtrarTareas(tareas, 'pendientes') });
