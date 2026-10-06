function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
import { analizarCantidad } from '../../lib/dominio.js';
mostrar(['0', '12', '', '12abc', '101'].map(texto => ({ texto, resultado: analizarCantidad(texto) })));
