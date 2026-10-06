import { cargarCatalogo } from '../../lib/cliente.js';
import { iniciarLaboratorioRed } from '../../lib/red-ui.js';
iniciarLaboratorioRed({ cargar: cargarCatalogo });
