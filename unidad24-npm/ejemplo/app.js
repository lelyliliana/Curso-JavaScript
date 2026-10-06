function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
import { sumar } from '../../unidad23-modulos/ejemplo/calculos.js';
mostrar({ suma: sumar(4, 6), entorno: 'navegador; npm no es necesario para cargar este módulo' });
