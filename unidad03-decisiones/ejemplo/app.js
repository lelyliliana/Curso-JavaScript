function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
function clasificar(edad) {
  if (!Number.isInteger(edad) || edad < 0 || edad > 120) return 'inválida';
  if (edad < 18) return 'menor';
  return 'adulta';
}
mostrar([0, 17, 18, 120, -1, 121, '18'].map(edad => ({ edad, resultado: clasificar(edad) })));
