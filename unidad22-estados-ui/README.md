# Unidad 22 — Estados de interfaz para datos asíncronos

## Qué aprenderás
Modelar idle, loading, success, empty y error para que la UI siempre explique qué está ocurriendo.

# 1. No existe solo “datos”

Una carga remota tiene estados:

```text
idle
 ↓
loading
 ├── success → con datos
 │             o empty
 └── error
```

La interfaz debe representar cada uno.

# 2. Estado explícito

```js
let state = {
  status: "idle",
  data: [],
  error: null
};
```

No deduzcas todo a partir de si un div está vacío o un spinner visible.

# 3. Loading

Al iniciar:

```js
state = {
  status: "loading",
  data: [],
  error: null
};
render();
```

Comunica carga visualmente y, cuando sea apropiado, programáticamente.

No bloquees toda la página si solo una región está cargando.

# 4. Success

```js
state = {
  status: "success",
  data,
  error: null
};
```

Después renderiza desde los datos.

# 5. Empty

Una petición exitosa con cero resultados **no es error**.

Mensaje:
> No encontramos productos con esos filtros.

puede ofrecer siguiente acción.

# 6. Error

No muestres:
```text
TypeError: Failed to fetch at app.js:42
```

al usuario final.

Muestra una explicación útil y registra detalle técnico donde corresponda durante desarrollo/observabilidad.

# 7. Retry

Un botón “Reintentar” debe volver a ejecutar la acción de forma controlada.

Evita reintentos automáticos infinitos.

# 8. Spinner infinito

Usa try/catch/finally o transiciones explícitas para garantizar que loading termina en success/error/cancelación.

Si una solicitud es abortada por una nueva, quizá no debas mostrar error.

# 9. Datos anteriores

Durante una recarga puedes decidir:
- ocultar datos y mostrar skeleton;
- conservar datos anteriores y mostrar indicador de actualización.

Ambas estrategias pueden ser válidas. Documenta la semántica.

# 10. Race conditions de UI

Dos cargas concurrentes pueden terminar fuera de orden.

El estado debe aceptar solo el resultado vigente o cancelar el anterior.

# 11. Accesibilidad

- loading: texto/estado comprensible;
- error: foco solo cuando aporta;
- actualización: aria-live moderado cuando es importante;
- skeleton: no debe comunicar información falsa.

# 12. Práctica guiada

Construye buscador con:
- idle;
- loading;
- resultados;
- empty;
- error;
- retry;
- cancelación de búsqueda anterior.

# 13. Errores frecuentes
- spinner como único estado;
- empty tratado como error;
- stack trace al usuario;
- error tras cancelación intencional;
- respuesta vieja sobrescribe nueva;
- aria-live anunciando cada pequeño cambio.

# 14. Reto
Interfaz remota completa que nunca quede sin explicar su estado.

# 15. Autoevaluación
1. ¿Empty es error?
2. ¿Qué debe ocurrir tras loading?
3. ¿Mostrar error técnico?
4. ¿Retry infinito?
5. ¿Conservar datos anteriores puede ser válido?
6. ¿Cómo evitar respuesta obsoleta?

# 16. Checklist
- [ ] Estado explícito.
- [ ] Loading termina.
- [ ] Empty separado.
- [ ] Error útil.
- [ ] Retry/cancelación.
- [ ] Accesibilidad.

Continúa con módulos.
