function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const valores = [4, -2, 7, 0];
let suma = 0;
let positivos = 0;
for (const valor of valores) {
  suma += valor;
  if (valor > 0) positivos += 1;
}
mostrar({ suma, positivos, cantidad: valores.length });
