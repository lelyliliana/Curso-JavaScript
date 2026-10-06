function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const error = document.querySelector('#error');
formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const texto = nombre.value.trim();
  if (texto.length < 2) {
    error.textContent = 'Escribe al menos dos caracteres, sin contar espacios exteriores.';
    nombre.setAttribute('aria-invalid', 'true'); nombre.focus(); return;
  }
  error.textContent = ''; nombre.removeAttribute('aria-invalid');
  mostrar({ nombre: texto, guardadoEnServidor: false });
});
