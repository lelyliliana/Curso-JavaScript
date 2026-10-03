# Unidad 28 — Estado y renderizado determinista

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Usar estado JavaScript como fuente de verdad y derivar la interfaz de manera predecible.

# 1. Dos fuentes de verdad

Si consultas el DOM para saber qué tareas existen y además mantienes variables JavaScript, ambas representaciones pueden divergir.

# 2. Estado

```js
let state = {
  tareas: [],
  filtro: "todas",
  status: "idle"
};
```

# 3. Flujo

```text
evento
 ↓
actualizar estado
 ↓
render(state)
 ↓
DOM
```

La interfaz representa el estado.

# 4. Estado derivado

No guardes simultáneamente tareas, tareasCompletadas y cantidadCompletadas si las últimas pueden calcularse desde tareas.

Duplicar información exige mantenerla sincronizada.

# 5. Actualización

```js
state = {
  ...state,
  filtro: "completadas"
};

render(state);
```

Una aplicación pequeña no necesita una librería de estado para aprender el patrón.

# 6. Render completo vs incremental

Reconstruir una lista pequeña puede ser simple y correcto.

En interfaces grandes, actualizaciones incrementales pueden ser más eficientes.

Mide antes de complicar.

# 7. Eventos

Si reemplazas nodos, listeners directos pueden perderse.

La delegación reduce este acoplamiento.

# 8. Identidad

Usa IDs estables.

El índice de un array puede dejar de identificar el mismo elemento después de ordenar/filtrar.

# 9. Estado remoto

Mantén también `status/error` explícitos para no deducir “loading” mirando si existe un spinner.

# 10. Práctica guiada

Lista:
- agregar;
- completar;
- filtrar;
- eliminar.

Cada acción actualiza state y después renderiza.

# 11. Errores frecuentes
- DOM como base de datos;
- estado derivado duplicado;
- índice como ID;
- listeners rotos tras render;
- optimización incremental prematura.

# 12. Reto
Lista cuyo DOM pueda reconstruirse completamente desde state.

# 13. Autoevaluación
1. ¿Fuente de verdad?
2. ¿Estado derivado?
3. ¿Por qué no duplicarlo?
4. ¿Índice es ID estable?
5. ¿Render completo siempre es malo?

# 14. Checklist
- [ ] Estado explícito.
- [ ] Derivo datos.
- [ ] Render determinista.
- [ ] IDs estables.

Continúa con arquitectura.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 27 — Depuración con DevTools](../unidad27-debug/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 29 — Arquitectura de una aplicación JavaScript](../unidad29-arquitectura/README.md)
