function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const orden = [];
orden.push('inicio');
setTimeout(() => { orden.push('timer'); mostrar(orden); }, 0);
Promise.resolve().then(() => { orden.push('microtarea'); });
orden.push('fin');
