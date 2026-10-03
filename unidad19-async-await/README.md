# Unidad 19 — async/await y concurrencia

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Escribir flujos asíncronos legibles y distinguir espera secuencial de concurrencia.

# 1. async

```js
async function obtener() {
  return 42;
}
```

Una función async siempre devuelve una Promise.

Aunque retornes 42, el llamador recibe una Promise fulfilled con 42.

# 2. await

```js
const valor = await obtener();
```

Suspende la continuación de **esa función async** hasta que la Promise se establezca.

No congela automáticamente todo el navegador.

# 3. Error

Si la Promise rechaza, `await` lanza en ese punto:

```js
try {
  const dato = await obtener();
} catch (error) {
  ...
}
```

# 4. Secuencial

```js
const usuario = await obtenerUsuario();
const pedidos = await obtenerPedidos(usuario.id);
```

Aquí la segunda depende de la primera: correcto.

# 5. Secuencial accidental

```js
const clima = await obtenerClima();
const noticias = await obtenerNoticias();
```

Si son independientes, estás esperando una antes de iniciar la otra.

# 6. Concurrencia

```js
const [clima, noticias] = await Promise.all([
  obtenerClima(),
  obtenerNoticias()
]);
```

Ambas pueden progresar concurrentemente.

No significa necesariamente ejecución CPU paralela.

# 7. Iniciar primero, esperar después

También puedes:

```js
const climaPromise = obtenerClima();
const noticiasPromise = obtenerNoticias();

const clima = await climaPromise;
const noticias = await noticiasPromise;
```

Ambas se iniciaron antes de la primera espera, aunque el manejo de errores/semántica debe diseñarse cuidadosamente.

# 8. await en loops

```js
for (const id of ids) {
  await procesar(id);
}
```

es secuencial y puede ser exactamente lo correcto si:
- hay dependencia;
- límite de tasa;
- orden;
- control de recursos.

No reemplaces automáticamente con Promise.all.

# 9. Concurrencia limitada

Promise.all sobre 50 000 operaciones puede saturar red/servidor/memoria.

En sistemas reales puede necesitarse un límite de concurrencia.

# 10. Top-level await

Los módulos ES pueden permitir top-level await en entornos compatibles.

Puede retrasar evaluación de módulos dependientes; no lo uses solo para evitar diseñar una función de inicio.

# 11. Práctica guiada

Mide con `performance.now()` dos tareas simuladas:
- secuencial;
- concurrente.

Después crea un caso donde el segundo necesita el primero y explica por qué Promise.all sería incorrecto.

# 12. Errores frecuentes
- async retorna valor no Promise;
- await congela navegador;
- await secuencial por costumbre;
- Promise.all para dependencias;
- paralelizar miles de llamadas sin límite;
- quitar await solo “para hacerlo rápido”.

# 13. Reto
Flujo con dependencias y concurrencia justificadas, acompañado de diagrama temporal.

# 14. Autoevaluación
1. ¿async devuelve qué?
2. ¿await bloquea todo?
3. ¿Cuándo secuencial?
4. ¿Cuándo Promise.all?
5. ¿await en loop siempre está mal?
6. ¿Concurrencia = paralelismo CPU?

# 15. Checklist
- [ ] Comprendo async.
- [ ] Uso await con intención.
- [ ] Paralelizo solo independientes.
- [ ] Considero límites.

Continúa con fetch.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 18 — Promises y composición asíncrona](../unidad18-promises/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 20 — Fetch y consumo de APIs](../unidad20-fetch/README.md)
