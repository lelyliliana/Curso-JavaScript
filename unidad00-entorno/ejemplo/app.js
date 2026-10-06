function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
console.log('Hola, JavaScript');
const salida = document.querySelector('#salida');
salida.textContent = 'El módulo cargó correctamente.';
