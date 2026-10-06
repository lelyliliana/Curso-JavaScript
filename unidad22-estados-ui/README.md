# Unidad 22: Estados de interfaz para datos asíncronos

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

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



## Laboratorio completo: Estados de carga

### Modelo y contrato

Una colección vacía, una solicitud pendiente y un fallo requieren estados distintos. El estado debe representar datos y fase de forma coherente. No muestres una lista anterior como si acabara de cargarse cuando la solicitud nueva falló, salvo que exista una política explícita de conservar datos desactualizados.

El laboratorio limpia la lista al comenzar, comunica carga y luego datos, vacío o error. role=status anuncia el resultado sin mover foco por cada respuesta. Durante una carga se permite iniciar otra para estudiar carreras; el identificador conserva la última intención. No confundas aria-busy con desactivar un control ni con un anuncio completo.

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

Completa la tabla idle, loading, success, empty, error y cancelada con escenarios reproducibles. Observa qué ocurre con la lista y el mensaje en cada uno.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 21: Errores de red, cancelación y timeouts](../unidad21-errores-red/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 23: Módulos ES](../unidad23-modulos/README.md)
