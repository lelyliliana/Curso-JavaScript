function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
import { cargarCatalogo } from '../../lib/cliente.js';
import { iniciarLaboratorioRed } from '../../lib/red-ui.js';
iniciarLaboratorioRed({ cargar: cargarCatalogo });
