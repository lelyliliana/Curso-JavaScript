function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const boton = document.querySelector('#generar');
const lista = document.querySelector('#lista');
boton.addEventListener('click', () => {
  const fragmento = document.createDocumentFragment();
  for (let i = 1; i <= 100; i += 1) {
    const li = document.createElement('li'); li.textContent = `Recurso ${i}`; fragmento.append(li);
  }
  lista.replaceChildren(fragmento); mostrar({ cantidad: lista.children.length });
});
