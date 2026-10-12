# Unidad 19: async/await y concurrencia

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
  console.error(error.message);
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



## Laboratorio completo: async y await

### Modelo y contrato

Una función async siempre devuelve una Promise. return entrega un valor que se convierte en su resultado eventual; throw produce rechazo. await permite escribir la continuación de forma secuencial dentro de esa función, pero no convierte operaciones independientes en dependientes.

Aquí las dos Promises se crean antes de esperar el conjunto. Si una operación necesita el resultado de otra, debes esperar primero esa relación. Si son independientes, evaluar las dos llamadas antes de Promise.all las inicia sin encadenarlas artificialmente. Promise.all agrega sus resultados; no inicia por sí mismo operaciones pendientes. Con cientos de solicitudes, iniciar todo a la vez puede saturar recursos: hace falta limitar concurrencia según el contrato. No uses forEach(async...) esperando que el método espere todos los callbacks; forEach no agrega esas Promises por ti.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** a 2, b 5 y suma 7.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const esperar = (valor) => Promise.resolve(valor);
async function resumen() {
  const [a, b] = await Promise.all([esperar(2), esperar(5)]);
  return { a, b, suma: a + b };
}
mostrar(await resumen());
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Reescribe el ejemplo como dos await consecutivos y explica cuándo esa secuencia sería necesaria. Simula rechazo de una operación y maneja error sin devolver suma 0 como si fuera válida.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 18: Promises y composición asíncrona](../unidad18-promises/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 20: Fetch y consumo de APIs](../unidad20-fetch/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2019%20%E2%80%94%20async%2Fawait%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad19-async-await%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
