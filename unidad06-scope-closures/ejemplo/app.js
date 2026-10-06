function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
function crearContador(inicio = 0) {
  let valor = inicio;
  return () => ++valor;
}
const a = crearContador();
const b = crearContador(10);
mostrar([a(), a(), b(), a(), b()]);
