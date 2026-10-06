function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
import { analizarCantidad } from '../../lib/dominio.js';
const casos = [['0', true], ['100', true], ['', false], ['101', false], ['12abc', false]];
mostrar(casos.map(([entrada, esperado]) => ({ entrada, esperado, observado: analizarCantidad(entrada).ok })));
