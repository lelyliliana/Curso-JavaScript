export function renderEstado(texto) { document.querySelector('#estado').textContent = texto; }
export function renderUsuarios(recursos) {
  const lista = document.querySelector('#lista'); lista.replaceChildren();
  for (const recurso of recursos) { const li = document.createElement('li'); li.textContent = recurso.titulo; lista.append(li); }
}
