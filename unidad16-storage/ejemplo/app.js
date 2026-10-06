function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const clave = 'curso-js-preferencia-v1';
const tema = document.querySelector('#tema');
const estado = document.querySelector('#estado');
try {
  const anterior = localStorage.getItem(clave);
  if (anterior === 'claro' || anterior === 'oscuro') tema.value = anterior;
} catch { estado.textContent = 'Almacenamiento no disponible; puedes seguir usando la página.'; }
tema.addEventListener('change', () => {
  try { localStorage.setItem(clave, tema.value); estado.textContent = 'Preferencia guardada en este origen.'; }
  catch { estado.textContent = 'No se pudo guardar; la selección actual sigue disponible.'; }
});
