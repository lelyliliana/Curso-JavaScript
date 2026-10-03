# Unidad 20 — Fetch y consumo de APIs

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Realizar peticiones HTTP, comprobar status, interpretar cuerpos y separar cliente de red de la interfaz.

# 1. GET

```js
const response = await fetch(url);
```

El resultado es un `Response`, no directamente el JSON.

# 2. HTTP error no implica rejection

Un servidor puede responder:

```text
404 Not Found
500 Internal Server Error
```

y `fetch` normalmente **resuelve** con un Response.

Comprueba:

```js
if (!response.ok) {
  throw new Error(
    `HTTP ${response.status}`
  );
}
```

# 3. JSON

```js
const data = await response.json();
```

También es asíncrono.

Puede fallar si el cuerpo no es JSON válido/esperado.

No asumas que un 200 garantiza la forma correcta.

# 4. Content-Type

Puedes revisar el header si el contrato lo requiere.

El servidor debería indicar correctamente el tipo.

No intentes parsear todo como JSON solo porque tu aplicación “esperaba JSON”.

# 5. POST

```js
const response = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
});
```

JSON.stringify puede omitir/transformar ciertos valores según reglas JSON.

# 6. Cliente separado

```js
async function obtenerProductos() {
  const response = await fetch(...);
  // validar HTTP/formato
  return data;
}
```

La función de red no debería también crear 30 nodos DOM.

Separa:
```text
API client → datos
render → DOM
```

# 7. URLSearchParams

Para query params:

```js
const params = new URLSearchParams({
  page: "1",
  search: termino
});

const url = `/api/productos?${params}`;
```

Evita concatenar valores sin codificación.

# 8. CORS

CORS es una política del navegador para solicitudes cross-origin.

Si el servidor no autoriza el origen bajo el caso correspondiente, no se “arregla” añadiendo un header inventado desde JavaScript del cliente.

# 9. Credenciales

Cookies/credenciales dependen de configuración de fetch, origen, SameSite, CORS y servidor.

No copies `credentials:"include"` sin comprender el modelo de autenticación.

# 10. Datos no confiables

Una respuesta de API sigue siendo entrada externa.

Valida lo que tu aplicación necesita y renderiza texto como texto.

# 11. Práctica guiada

Consume una API controlada:
1. 200 JSON;
2. 404;
3. 500;
4. 200 con JSON inesperado;
5. respuesta no JSON.

Clasifica cada resultado.

# 12. Errores frecuentes
- await fetch = JSON;
- catch esperando capturar 404 automáticamente;
- parsear JSON antes de revisar contrato;
- fetch mezclado con DOM;
- concatenar query manualmente;
- “arreglar CORS” en frontend.

# 13. Reto
Cliente API que devuelva datos válidos o errores tipificados sin conocer la interfaz visual.

# 14. Autoevaluación
1. ¿fetch retorna qué?
2. ¿404 rechaza Promise normalmente?
3. ¿Qué hace response.ok?
4. ¿response.json es async?
5. ¿Qué es CORS?
6. ¿API data es confiable automáticamente?

# 15. Checklist
- [ ] Compruebo status.
- [ ] Parseo conscientemente.
- [ ] Separo red/DOM.
- [ ] Construyo URLs correctamente.

Continúa con errores de red.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 19 — async/await y concurrencia](../unidad19-async-await/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 21 — Errores de red, cancelación y timeouts](../unidad21-errores-red/README.md)
