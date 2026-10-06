function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const notas = [2, 4, 5, 3];
const aprobadas = notas.filter(nota => nota >= 3);
const dobles = notas.map(nota => nota * 2);
const suma = notas.reduce((total, nota) => total + nota, 0);
const ordenadas = [...notas].sort((a, b) => a - b);
mostrar({ notas, aprobadas, dobles, suma, ordenadas });
