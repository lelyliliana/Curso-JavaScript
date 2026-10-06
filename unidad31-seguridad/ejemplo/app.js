function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const entrada = document.querySelector('#entrada');
const boton = document.querySelector('#mostrar');
const resultado = document.querySelector('#texto');
boton.addEventListener('click', () => {
  resultado.textContent = entrada.value;
  mostrar({ imagenesCreadas: resultado.querySelectorAll('img').length });
});
