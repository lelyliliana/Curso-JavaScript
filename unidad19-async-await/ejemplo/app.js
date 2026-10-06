function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const esperar = (valor) => Promise.resolve(valor);
async function resumen() {
  const [a, b] = await Promise.all([esperar(2), esperar(5)]);
  return { a, b, suma: a + b };
}
mostrar(await resumen());
