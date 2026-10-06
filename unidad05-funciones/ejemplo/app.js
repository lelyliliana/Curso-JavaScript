function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
function subtotal(precio, cantidad) {
  if (!Number.isFinite(precio) || precio < 0 || !Number.isInteger(cantidad) || cantidad < 0) {
    throw new TypeError('Precio o cantidad inválidos');
  }
  return precio * cantidad;
}
mostrar({ dos: subtotal(12.5, 2), ninguno: subtotal(12.5, 0) });
