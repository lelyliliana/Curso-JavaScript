# Unidad 13 — Eventos y delegación

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Escuchar eventos, distinguir target/currentTarget, comprender propagación y delegar sin llenar cada elemento de listeners.

# 1. Listener

```js
boton.addEventListener("click", manejarClick);

function manejarClick(event) {
  console.log("click");
}
```

Pasa la función; no la ejecutes al registrarla.

Incorrecto si no quieres ejecutarla inmediatamente:

```js
boton.addEventListener("click", manejarClick());
```

# 2. event

El objeto evento contiene información sobre lo ocurrido.

No todos los eventos tienen las mismas propiedades.

# 3. target

`event.target`: nodo donde se originó el evento.

`event.currentTarget`: elemento cuyo listener se está ejecutando.

Pueden ser distintos.

# 4. Bubbling

Muchos eventos suben por ancestros:

```text
button → li → ul → body ...
```

Esto permite delegación.

# 5. Delegación

```js
lista.addEventListener("click", event => {
  const boton = event.target.closest("[data-action='delete']");
  if (!boton || !lista.contains(boton)) return;

  eliminar(boton.dataset.id);
});
```

Un listener puede manejar botones existentes y añadidos después.

# 6. stopPropagation

Detiene propagación en ciertas fases según método.

No lo uses por defecto para “arreglar” eventos duplicados; puede romper componentes superiores.

Comprende primero quién escucha qué.

# 7. preventDefault

Cancela la acción predeterminada cuando el evento es cancelable.

No detiene propagación.

```text
preventDefault ≠ stopPropagation
```

# 8. Eventos de teclado

No recrees botones escuchando Enter/Space en divs si puedes usar `button`, que ya tiene semántica/comportamiento.

# 9. removeEventListener

Para retirar un listener necesitas conservar una referencia compatible a la función registrada.

Una nueva arrow idéntica visualmente no es la misma función.

# 10. Práctica guiada

Lista dinámica con acciones editar/eliminar usando un solo listener delegado.

Imprime target/currentTarget y observa bubbling.

# 11. Errores frecuentes
- ejecutar handler al registrar;
- target=currentTarget siempre;
- stopPropagation para todo;
- preventDefault creyendo que detiene bubbling;
- listener por cada fila dinámica;
- div clickable.

# 12. Reto
Lista con delegación que soporte elementos añadidos después y botones semánticos.

# 13. Autoevaluación
1. ¿Qué pasas a addEventListener?
2. ¿target/currentTarget?
3. ¿Qué es bubbling?
4. ¿Delegación?
5. ¿preventDefault vs stopPropagation?
6. ¿Cómo retirar listener?

# 14. Checklist
- [ ] Registro handlers.
- [ ] Comprendo propagación.
- [ ] Delego cuando aporta.
- [ ] Mantengo HTML interactivo nativo.

Continúa con formularios.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 12 — DOM y renderizado seguro](../unidad12-dom/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 14 — Formularios y validación](../unidad14-formularios/README.md)
