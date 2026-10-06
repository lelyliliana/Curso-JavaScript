export function sumar(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) throw new TypeError('Números finitos requeridos');
  return a + b;
}
