function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const entrada = '12';
const cantidad = Number(entrada);
const resultado = cantidad + 3;
mostrar({ entrada, cantidad, resultado });
