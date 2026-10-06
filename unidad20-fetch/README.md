# Unidad 20: Fetch y consumo de APIs

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
  const response = await fetch('/api/catalogo');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  if (!Array.isArray(data)) throw new TypeError('Se esperaba una colección');
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



## Laboratorio completo: Fetch y contrato

### Modelo y contrato

fetch resuelve con Response incluso ante 404 o 500. El cliente debe comprobar ok, interpretar JSON y validar la estructura necesaria. Ninguno de esos pasos implica los otros. Un 200 puede contener HTML o un objeto incompatible. Este laboratorio utiliza una API del mismo origen para controlar todos los casos sin depender de Internet.

La URL se construye con URLSearchParams; el endpoint devuelve una colección de recursos con id y titulo. El cliente solo devuelve datos válidos o un Error etiquetado. La presentación usa textContent, también para títulos recuperados de red. No agregues un header de CORS inventado al cliente: CORS corresponde a permisos de respuesta y contexto de origen.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** La selección determina datos, vacío o fallo; lento puede cancelarse o llegar al límite de 400 ms. El resultado vigente pertenece a la última solicitud.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
import { cargarCatalogo } from '../../lib/cliente.js';
import { iniciarLaboratorioRed } from '../../lib/red-ui.js';
iniciarLaboratorioRed({ cargar: cargarCatalogo });
```

El módulo de entrada conecta dos responsabilidades: cliente.js valida respuestas y clasifica errores; red-ui.js controla eventos, renderizado y solicitud vigente. Lee [cliente.js](../lib/cliente.js) y [red-ui.js](../lib/red-ui.js) para seguir la implementación completa. Los títulos se insertan con textContent y el HTML proporciona los controles que consulta la interfaz.

### Experimento

Prueba normal, vacío, 404, 500, JSON inválido y esquema inválido. Registra status HTTP y categoría de error. Comprueba que un título con marcado no se convierta en un nodo HTML.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 19: async/await y concurrencia](../unidad19-async-await/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 21: Errores de red, cancelación y timeouts](../unidad21-errores-red/README.md)
