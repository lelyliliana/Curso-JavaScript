# Unidad 17 — Event loop, tareas y microtareas

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Explicar el orden de ejecución asíncrona sin imaginar que JavaScript crea un hilo por cada callback.

# 1. JavaScript y el entorno

El motor ejecuta código JavaScript en un call stack.

El navegador aporta APIs como:
- timers;
- eventos;
- red;
- DOM.

El event loop coordina cuándo callbacks/trabajos pendientes pueden volver a ejecutarse.

# 2. Código síncrono

```js
console.log("A");
console.log("B");
```

Aparece A, luego B.

# 3. Timer

```js
console.log("A");

setTimeout(() => {
  console.log("timer");
}, 0);

console.log("B");
```

Resultado típico:

```text
A
B
timer
```

0 ms no significa “ejecuta ahora”. Significa que el callback puede quedar elegible después del retraso mínimo y de que el stack/event loop lo permita.

# 4. Promise/microtask

```js
console.log("A");

setTimeout(() => console.log("timer"), 0);

Promise.resolve()
  .then(() => console.log("promise"));

console.log("B");
```

Resultado:

```text
A
B
promise
timer
```

Tras completar la tarea actual, las microtareas pendientes se procesan antes de pasar normalmente a la siguiente tarea.

# 5. Microtareas

Callbacks de Promise y mecanismos como `queueMicrotask` utilizan la cola de microtareas.

No necesitas memorizar toda la especificación para predecir ejemplos básicos, pero sí distinguirlas de timers.

# 6. Bloqueo

```js
while (true) {}
```

bloquea el hilo de ejecución: eventos, pintura y callbacks no pueden progresar normalmente.

Asincronía no convierte automáticamente trabajo CPU pesado en no bloqueante.

# 7. Renderizado

El navegador obtiene oportunidades para renderizar entre trabajos según su ciclo.

Un bloque largo de JS puede impedir que un spinner recién añadido llegue a pintarse antes del trabajo pesado.

# 8. setInterval

Si una ejecución tarda más que el intervalo o el hilo está ocupado, no asumas precisión de reloj.

Para temporización exacta/animación existen consideraciones/APIs distintas.

# 9. Práctica guiada

Predice el orden antes de ejecutar:

```js
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

queueMicrotask(() => console.log(4));

console.log(5);
```

Después explica cada paso.

# 10. Errores frecuentes
- setTimeout(0) = inmediato;
- Promise = hilo;
- async = trabajo CPU paralelo;
- timer como reloj exacto;
- no considerar microtareas.

# 11. Reto
Crea cinco experimentos de orden y dibuja stack, microtareas y tareas.

# 12. Autoevaluación
1. ¿Qué es call stack?
2. ¿Timer 0 ejecuta inmediatamente?
3. ¿Promise crea hilo?
4. ¿Microtareas antes de siguiente tarea?
5. ¿Un while largo bloquea UI?
6. ¿Asincronía = paralelismo CPU?

# 13. Checklist
- [ ] Predigo orden.
- [ ] Distingo tareas/microtareas.
- [ ] Comprendo bloqueo.
- [ ] No confundo asincronía/paralelismo.

Continúa con Promises.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 16 — Web Storage y persistencia en el navegador](../unidad16-storage/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 18 — Promises y composición asíncrona](../unidad18-promises/README.md)
