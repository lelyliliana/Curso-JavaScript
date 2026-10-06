function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const boton = document.querySelector('#agregar');
const lista = document.querySelector('#lista');
const estado = document.querySelector('#estado');
let cantidad = 0;
boton.addEventListener('click', () => {
  cantidad += 1;
  const item = document.createElement('li'); item.textContent = `Recurso ${cantidad}`;
  lista.append(item); estado.textContent = `${cantidad} recursos disponibles.`;
});
