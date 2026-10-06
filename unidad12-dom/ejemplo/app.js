function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const lista = document.querySelector('#lista');
for (const nombre of ['Ana', '<img src=x onerror=alert(1)>']) {
  const item = document.createElement('li');
  item.textContent = nombre;
  lista.append(item);
}
mostrar({ elementos: lista.children.length });
