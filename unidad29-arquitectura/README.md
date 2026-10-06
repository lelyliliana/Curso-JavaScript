# Unidad 29: Arquitectura de una aplicación JavaScript

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Separar acceso a datos, estado, lógica, render y eventos sin crear capas por moda.

# 1. Monolito típico

```js
async function cargar() {
  // fetch
  // validar
  // cambiar estado
  // crear HTML
  // listeners
  // storage
}
```

Funciona al principio y después cada cambio afecta todo.

# 2. Límites útiles

```text
api.js    → HTTP
state.js  → estado/transiciones
domain.js → lógica pura
ui.js     → render
app.js    → composición/eventos
```

No necesitas exactamente esos nombres.

# 3. Dirección

Una función de dominio no debería importar document/fetch si solo calcula una regla.

Esto permite probarla fuera del navegador.

# 4. API client

Recibe parámetros y devuelve datos/errores del contrato interno.

No conoce spinners ni botones.

# 5. UI

Recibe estado/datos y actualiza DOM.

No debería construir URLs de API ni guardar secretos.

# 6. App

Conecta eventos con casos de uso:

```text
click buscar
→ actualizar loading
→ api.buscar
→ actualizar state
→ render
```

# 7. Dependencias

Evita módulos que se importan mutuamente.

Si A y B necesitan compartir algo, quizá exista una responsabilidad C o una composición desde app.js.

# 8. Configuración

URLs/configuración pública pueden centralizarse.

Recuerda: cualquier valor enviado al frontend es observable; no existe “secreto de frontend”.

# 9. Errores

Decide dónde:

- se clasifica error técnico;
- se convierte a estado;
- se muestra mensaje.

No hagas catch en cada capa y pierdas causa.

# 10. Práctica guiada

Refactoriza una app de búsqueda monolítica a módulos. Prueba domain/api por separado.

# 11. Errores frecuentes

- carpeta/capa por cada concepto;
- lógica pura importando DOM;
- ui llamando fetch;
- estado global mutable desde cualquier módulo;
- ciclos;
- secretos en config.js.

# 12. Reto
Arquitectura de app remota con diagrama de dependencias y cero ciclos.

# 13. Autoevaluación

1. ¿Por qué separar API/UI?
2. ¿Qué gana lógica pura?
3. ¿app.js qué hace?
4. ¿Más capas siempre?
5. ¿Frontend puede guardar secreto?
6. ¿Qué indica un ciclo?

# 14. Checklist

- [ ] Límites reales.
- [ ] Dependencias claras.
- [ ] Lógica testeable.
- [ ] Sin ciclos.

Continúa con rendimiento.



## Laboratorio completo: Responsabilidades separadas

### Modelo y contrato

Dominio decide validez y transformaciones de datos; almacenamiento transforma y valida persistencia; cliente HTTP interpreta red; UI construye nodos; controlador coordina acciones. No es necesario crear veinte archivos para una operación, pero las dependencias deben permitir probar reglas sin efectos externos.

El módulo dominio no consulta document ni localStorage. La app final lo utiliza desde handlers y sus pruebas lo importan desde Node. Un repositorio de datos ficticios no demuestra conexión con una base real. Cada límite puede fallar y debe tener un contrato explícito. La identidad de tarea permite completar, editar o eliminar una concreta sin depender de su posición visible, que cambia con filtros. No uses el índice de la lista filtrada como identificador permanente.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Una tarea con id 1, titulo Leer el módulo y completada false en ambas colecciones.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
import { crearTarea, filtrarTareas } from '../../lib/dominio.js';
const tareas = crearTarea([], 'Leer el módulo');
mostrar({ todas: tareas, pendientes: filtrarTareas(tareas, 'pendientes') });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Lee los imports de la app final y dibuja qué módulo depende de cuál. Introduce un filtro y comprueba que completar una tarea se haga por id, no por su índice filtrado.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 28: Estado y renderizado determinista](../unidad28-estado-render/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 30: Rendimiento en el navegador](../unidad30-rendimiento/README.md)
