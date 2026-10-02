# Unidad 17 — Event loop y asincronía
JavaScript ejecuta código en un hilo principal en el navegador, mientras APIs del entorno coordinan tareas asíncronas.
Comprende call stack, task queue y microtasks conceptualmente.
```js
console.log("A"); queueMicrotask(()=>console.log("B")); console.log("C");
```
**Reto:** predice órdenes de ejecución.