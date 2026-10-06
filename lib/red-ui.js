export function iniciarLaboratorioRed({ cargar }) {
  const boton = document.querySelector('#cargar');
  const cancelar = document.querySelector('#cancelar');
  const escenario = document.querySelector('#escenario');
  const estado = document.querySelector('#estado');
  const lista = document.querySelector('#lista');
  const salida = document.querySelector('#salida');
  let controller; let solicitud = 0;
  cancelar.disabled = true;
  boton.addEventListener('click', async () => {
    controller?.abort(); controller = new AbortController();
    const id = ++solicitud;
    cancelar.disabled = false; estado.textContent = 'Cargando…';
    lista.setAttribute('aria-busy', 'true'); lista.replaceChildren(); salida.textContent = '';
    try {
      const datos = await cargar({ escenario: escenario.value, signal: controller.signal });
      if (id !== solicitud) return;
      for (const dato of datos) { const li = document.createElement('li'); li.textContent = dato.titulo; lista.append(li); }
      estado.textContent = datos.length ? `${datos.length} recursos cargados.` : 'No hay resultados.';
      salida.textContent = JSON.stringify({ fase: datos.length ? 'success' : 'empty', datos }, null, 2);
    } catch (error) {
      if (id !== solicitud) return;
      estado.textContent = `${error.categoria ?? 'error'}: ${error.message}`;
      salida.textContent = JSON.stringify({ fase: 'error', categoria: error.categoria }, null, 2);
    } finally {
      if (id === solicitud) {
        if (document.activeElement === cancelar) boton.focus();
        cancelar.disabled = true; lista.removeAttribute('aria-busy');
      }
    }
  });
  cancelar.addEventListener('click', () => controller?.abort());
}
