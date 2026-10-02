# Unidad 19 — async/await
```js
async function cargar(){try{return await obtener();}catch(e){...}}
```
await pausa esa función async, no congela automáticamente todo el navegador.
Para tareas independientes considera Promise.all cuando la semántica lo permite.
**Reto:** compara secuencial vs paralelo.