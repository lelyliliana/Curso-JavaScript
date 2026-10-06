function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const nombre = 'Ana';
let intentos = 1;
intentos += 1;
const datos = { nombre, activo: true };
datos.activo = false;
mostrar({ nombre, intentos, tipo: typeof intentos, activo: datos.activo, tipoNull: typeof null });
