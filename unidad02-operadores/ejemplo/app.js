function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const entrada = '12';
mostrar({ sumaTexto: entrada + 3, sumaNumero: Number(entrada) + 3,
  vacio: Number(''), igualFlexible: 0 == '', igualEstricto: 0 === '',
  defectoConOr: 0 || 10, defectoConNullish: 0 ?? 10 });
