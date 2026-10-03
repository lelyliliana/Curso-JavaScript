# Unidad 21 — Errores de red, cancelación y timeouts

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
const controller = new AbortController();

const timer = setTimeout(
  () => controller.abort(),
  5000
);

try {
  return await fetch(url, {
    signal: controller.signal
  });
} finally {
  clearTimeout(timer);
}
```

El timeout es una política de la aplicación.

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


---

## Continuar el curso

- **Unidad anterior:** [Unidad 20 — Fetch y consumo de APIs](../unidad20-fetch/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 22 — Estados de interfaz para datos asíncronos](../unidad22-estados-ui/README.md)
