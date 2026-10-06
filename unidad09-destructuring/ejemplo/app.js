function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const curso = { titulo: 'JavaScript', cupos: 0, meta: { nivel: 'inicial' } };
const { titulo, cupos = 20, faltante = 'sin dato' } = curso;
const { meta, ...resumen } = curso;
function sumar(...valores) { return valores.reduce((total, valor) => total + valor, 0); }
mostrar({ titulo, cupos, faltante, resumen, suma: sumar(1, 2, 3) });
