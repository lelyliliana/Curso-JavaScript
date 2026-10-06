export function renderTareas(lista, tareas) {
  lista.replaceChildren();
  for (const tarea of tareas) {
    const li = document.createElement('li');
    const titulo = document.createElement('span'); titulo.textContent = tarea.titulo;
    const estado = document.createElement('span'); estado.textContent = tarea.completada ? ' (completada)' : ' (pendiente)';
    li.append(titulo, estado);
    for (const [accion,texto] of [['alternar', tarea.completada ? 'Marcar pendiente' : 'Completar'], ['editar','Editar'], ['eliminar','Eliminar']]) {
      const boton = document.createElement('button'); boton.type = 'button'; boton.dataset.id = String(tarea.id); boton.dataset.accion = accion;
      boton.textContent = texto; boton.setAttribute('aria-label', `${texto}: ${tarea.titulo}`); li.append(boton);
    }
    lista.append(li);
  }
}
