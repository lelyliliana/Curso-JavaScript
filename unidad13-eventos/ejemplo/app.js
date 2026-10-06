function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const lista = document.querySelector('#lista');
lista.addEventListener('click', (event) => {
  const boton = event.target.closest('button[data-id]');
  if (!boton || !lista.contains(boton)) return;
  mostrar({ elegido: boton.dataset.id });
});
