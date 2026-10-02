# Unidad 18 — Promises y composición asíncrona

## Qué aprenderás
Comprender estados de una Promise, encadenar resultados, propagar errores y coordinar operaciones.

# 1. Promise

Representa un resultado que puede estar:
- pending;
- fulfilled;
- rejected.

Una Promise no es un hilo ni el valor final.

# 2. then

```js
obtenerUsuario()
  .then(usuario => {
    return usuario.nombre;
  })
  .then(nombre => {
    console.log(nombre);
  });
```

El valor retornado por un `then` alimenta el siguiente.

# 3. Retornar otra Promise

```js
obtenerUsuario()
  .then(usuario => obtenerPedidos(usuario.id))
  .then(pedidos => ...);
```

La cadena espera/adopta el resultado de la Promise retornada.

Si olvidas `return` dentro de un bloque, el siguiente then puede recibir `undefined`.

# 4. Errores

Si un callback lanza:

```js
.then(() => {
  throw new Error("fallo");
})
.catch(error => ...)
```

la cadena se rechaza y puede manejarse después.

# 5. catch

```js
operacion()
  .then(...)
  .catch(error => {
    ...
  });
```

Captura rechazos previos de la cadena.

Si el catch retorna un valor normal, la cadena puede continuar como fulfilled.

No “tragues” errores accidentalmente.

# 6. finally

```js
.finally(() => {
  ocultarSpinner();
});
```

Sirve para limpieza común.

No recibe normalmente el valor/razón como argumento y no debería reemplazar el resultado salvo que lance/retorne rechazo especial.

# 7. Promise.all

```js
const [usuario, config] = await Promise.all([
  obtenerUsuario(),
  obtenerConfig()
]);
```

Útil para operaciones independientes.

Rechaza cuando una de las Promises de entrada rechaza.

# 8. allSettled

Cuando necesitas conocer el resultado de **todas**, incluso fallos:

```js
const resultados =
  await Promise.allSettled(tareas);
```

No es sustituto automático de all; cambia la semántica.

# 9. race y any

`Promise.race`: se establece con la primera que se establece (fulfilled o rejected).

`Promise.any`: cumple con la primera fulfilled; si todas rechazan, rechaza con AggregateError.

Úsalas cuando el problema realmente tiene esa semántica.

# 10. Crear Promise

No envuelvas una API que ya devuelve Promise en `new Promise` sin necesidad.

El constructor es útil para adaptar APIs callback/evento cuando corresponde.

# 11. Práctica guiada

Simula:
- usuario;
- preferencias;
- pedidos.

Decide cuáles dependen entre sí y cuáles pueden ejecutarse juntas.

# 12. Errores frecuentes
- Promise = valor;
- olvidar return;
- catch que oculta fallo;
- Promise.all para tareas dependientes;
- new Promise alrededor de fetch;
- allSettled cuando quieres fail-fast.

# 13. Reto
Cadena con dos operaciones dependientes y dos independientes, incluyendo propagación de error.

# 14. Autoevaluación
1. ¿Estados?
2. ¿Qué retorna then?
3. ¿Qué ocurre si callback lanza?
4. ¿finally para qué?
5. ¿all vs allSettled?
6. ¿Promise es hilo?

# 15. Checklist
- [ ] Encadeno.
- [ ] Retorno Promises.
- [ ] Propago errores.
- [ ] Coordino según dependencia.

Continúa con async/await.
