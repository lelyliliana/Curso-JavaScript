function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const estado = { cantidad: 0 };
const boton = document.querySelector('#sumar');
const salida = document.querySelector('#salida');
function render() { salida.textContent = `Cantidad: ${estado.cantidad}`; }
boton.addEventListener('click', () => { estado.cantidad += 1; render(); });
render();
