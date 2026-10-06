function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
import { sumar } from './calculos.js';
mostrar({ resultado: sumar(2, 3) });
