function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
function dobleAsync(valor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Number.isFinite(valor)) reject(new TypeError('Número inválido'));
      else resolve(valor * 2);
    }, 20);
  });
}
const resultados = await Promise.allSettled([dobleAsync(3), dobleAsync('3')]);
mostrar(resultados.map(r => r.status === 'fulfilled' ? { estado: r.status, valor: r.value } : { estado: r.status, error: r.reason.message }));
