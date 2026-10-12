# Unidad 18: Promises y composición asíncrona

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

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
// API simulada; sin conexión externa.
const obtenerUsuario = () => Promise.resolve({ id: 1, nombre: "Ana" });
const obtenerPedidos = id => Promise.resolve([{ id: 10, usuarioId: id }]);
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
// API simulada; sin conexión externa.
const obtenerUsuario = () => Promise.resolve({ id: 1, nombre: "Ana" });
const obtenerPedidos = id => Promise.resolve([{ id: 10, usuarioId: id }]);
obtenerUsuario()
  .then(usuario => obtenerPedidos(usuario.id))
  .then(pedidos => console.log(pedidos));
```

La cadena espera/adopta el resultado de la Promise retornada.

Si olvidas `return` dentro de un bloque, el siguiente then puede recibir `undefined`.

# 4. Errores

Si un callback lanza:

```js
Promise.resolve()
.then(() => {
  throw new Error("fallo");
})
.catch(error => console.error(error.message));
```

la cadena se rechaza y puede manejarse después.

# 5. catch

```js
Promise.reject(new Error("Operación fallida"))
  .then(valor => console.log(valor))
  .catch(error => {
    console.error(error.message);
    return "resultado alternativo explícito";
  });
```

Captura rechazos previos de la cadena.

Si el catch retorna un valor normal, la cadena puede continuar como fulfilled.

No “tragues” errores accidentalmente.

# 6. finally

```js
const ocultarSpinner = () => console.log("Finalizó la espera");
Promise.resolve(42).finally(() => {
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



## Laboratorio completo: Promise y rechazo

### Modelo y contrato

Una Promise representa el resultado eventual de una operación, no el hilo de ejecución. Puede estar pendiente y asentarse una vez como cumplida o rechazada. El executor comienza cuando se construye; setTimeout es quien difiere el trabajo de este ejemplo. Lanzar o rechazar propaga un error al consumidor que debe manejarlo.

allSettled permite examinar todos los resultados sin que un rechazo impida recibir los demás. Promise.all rechaza cuando una entrada rechaza, pero no cancela automáticamente el resto de operaciones. Una cadena then debe devolver valores o Promises para que la siguiente etapa espere la relación correcta. Una Promise envuelta alrededor de otra API que ya devuelve Promise puede ser innecesaria. El ejemplo usa un timer para aprender construcción, no para envolver fetch.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Un resultado fulfilled con valor 6 y otro rejected con error Número inválido.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
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
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Compara allSettled con all dentro de try/catch usando las mismas dos entradas. Añade finally para observar cierre sin transformar el resultado en éxito.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 17: Event loop, tareas y microtareas](../unidad17-event-loop/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 19: async/await y concurrencia](../unidad19-async-await/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2018%20%E2%80%94%20Promises%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad18-promises%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
