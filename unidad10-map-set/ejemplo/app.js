function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const frecuencias = new Map();
for (const palabra of ['sol', 'agua', 'sol']) {
  frecuencias.set(palabra, (frecuencias.get(palabra) ?? 0) + 1);
}
const unicos = new Set(['sol', 'agua', 'sol']);
mostrar({ frecuencias: [...frecuencias], unicos: [...unicos], objetosDistintos: new Set([{id:1},{id:1}]).size });
