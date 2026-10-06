# Unidad 21: Errores de red, cancelación y timeouts

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Distinguir fallos de red, HTTP, parseo, cancelación y timeout, y evitar respuestas obsoletas.

# 1. Categorías

Una petición puede fallar por red/conexión, HTTP no exitoso, formato, datos inválidos, cancelación o timeout definido por nuestra aplicación.

No conviertas todo en “No hay Internet”.

# 2. AbortController

```js
const controller = new AbortController();

fetch(url, { signal: controller.signal });

controller.abort();
```

El signal permite cancelar operaciones compatibles.

# 3. Timeout manual

```js
async function fetchConLimite(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}
```

El timeout es una política de la aplicación. Este fragmento termina su límite cuando fetch entrega el Response (las cabeceras); no incluye una lectura posterior del cuerpo. El [cliente completo del laboratorio](../lib/cliente.js) mantiene el timer también durante response.json y valida los datos antes de finalizar.

# 4. AbortSignal.timeout

Entornos modernos pueden ofrecer `AbortSignal.timeout(ms)`.

Comprueba compatibilidad objetivo. El concepto central es trabajar con signals cancelables.

# 5. Búsquedas obsoletas

Usuario escribe:
```text
c
ca
cas
casa
```

Una respuesta lenta de “ca” no debería reemplazar después los resultados de “casa”.

Puedes abortar la solicitud anterior o descartar respuestas cuyo identificador ya no sea el actual.

# 6. Cancelación vs timeout

Ambos pueden terminar mediante AbortController, pero para la aplicación significan cosas diferentes.

Conserva esa diferencia si afecta el mensaje o comportamiento.

# 7. HTTP no es red

`response.ok === false` representa una respuesta HTTP no exitosa, no necesariamente un fallo de conexión.

Tu capa puede distinguir categorías internas sin mostrar nombres técnicos al usuario.

# 8. Reintentos

No reintentes cualquier operación automáticamente.

Pregunta:

- ¿es idempotente?
- ¿el fallo parece transitorio?
- ¿puede duplicar efectos?
- ¿existe Retry-After?

# 9. Limpieza

Usa finally para timers/estado de carga cuando corresponda, sin ocultar la causa del fallo.

# 10. Práctica guiada

Simula:

- offline;
- 404;
- 500;
- JSON inválido;
- timeout;
- abort manual.

Asigna categoría y mensaje de UI.

# 11. Errores frecuentes

- todo = network error;
- no limpiar timer;
- respuesta vieja pisa nueva;
- retry de operación no idempotente;
- mostrar stack trace al usuario;
- tratar abort manual como fallo fatal.

# 12. Reto
Buscador con cancelación de consulta anterior y clasificación de fallos.

# 13. Autoevaluación

1. ¿404 es fallo de red?
2. ¿Qué hace AbortController?
3. ¿Fetch tiene timeout universal automático?
4. ¿Por qué cancelar búsqueda anterior?
5. ¿Retry siempre?
6. ¿Abort y timeout significan lo mismo para la UI?

# 14. Checklist

- [ ] Clasifico fallos.
- [ ] Cancelo.
- [ ] Evito respuestas obsoletas.
- [ ] Reintento con criterio.

Continúa con estados de UI.



## Laboratorio completo: Cancelación y tiempo límite

### Modelo y contrato

Una solicitud lenta puede dejar una interfaz esperando. AbortController permite solicitar cancelación mediante una señal que se pasa a fetch. Un timer puede activar cancelación por límite temporal; debe limpiarse en finally para no afectar operaciones ya terminadas. La cancelación no revierte necesariamente trabajo que un servidor haya realizado.

El laboratorio distingue cancelación manual y timeout y mantiene un identificador de solicitud. Si una respuesta antigua llega después de una nueva, su resultado no modifica la UI actual. Abort ayuda a reducir trabajo, pero la comprobación de identidad es quien protege la coherencia ante carreras. No reutilices una señal abortada para comenzar otra carga.

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

Selecciona lento y cancela antes de recibir datos. Luego repite lento sin cancelar y observa timeout. Inicia lento y enseguida normal; el resultado final debe pertenecer a normal.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 20: Fetch y consumo de APIs](../unidad20-fetch/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 22: Estados de interfaz para datos asíncronos](../unidad22-estados-ui/README.md)
