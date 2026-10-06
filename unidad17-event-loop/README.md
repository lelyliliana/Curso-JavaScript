# Unidad 17: Event loop, tareas y microtareas

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



## Laboratorio completo: Orden del event loop

### Modelo y contrato

El código síncrono de esta tarea termina antes de que se procese la reacción de la Promise. Esa reacción se encola como microtarea. El callback del timer participa después como otra tarea. Un retraso 0 no significa ejecución instantánea ni paralela con cada línea del módulo.

Este ejemplo muestra un orden particular; no convierte todo trabajo asíncrono en una única cola con orden universal. Red, eventos y renderizado tienen su contexto. await suspende la continuación de esa función asíncrona, no todo el navegador. Una operación de cálculo larga en el hilo principal puede bloquear interacción aunque esté dentro de una función async. Dividir trabajo o usar un Worker requiere una decisión adicional, no añadir async a cualquier función.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Después del timer, el orden es ["inicio","fin","microtarea","timer"].

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const orden = [];
orden.push('inicio');
setTimeout(() => { orden.push('timer'); mostrar(orden); }, 0);
Promise.resolve().then(() => { orden.push('microtarea'); });
orden.push('fin');
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Agrega otra Promise.resolve().then y otro setTimeout. Predice el orden. Después ejecuta un cálculo síncrono breve antes de fin y observa que el timer espera a que termine.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 16: Web Storage y persistencia en el navegador](../unidad16-storage/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 18: Promises y composición asíncrona](../unidad18-promises/README.md)
