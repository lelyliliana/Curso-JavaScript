# Unidad 29 — Arquitectura de una aplicación JavaScript

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
