# Unidad 00 — Entorno, consola y primer JavaScript

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Ejecutar JavaScript en el navegador, conectar un módulo a HTML y diagnosticar errores con Console y Network.

## Antes de empezar
Se recomienda manejar HTML, rutas y DevTools.

# 1. JavaScript en una página

```html
<script type="module" src="app.js"></script>
```

`type="module"` habilita módulos ES, que estudiaremos más adelante.

# 2. Primer archivo

```js
console.log("Hola, JavaScript");
```

Abre la página y comprueba Console.

# 3. Si no aparece

Revisa Network:
- ¿app.js devuelve 200?
- ¿la ruta es correcta?
- ¿Console muestra un error?

No edites la lógica si el archivo ni siquiera cargó.

# 4. Consola como laboratorio

Prueba expresiones y tipos. La consola ayuda a experimentar, pero el código reproducible debe quedar en archivos.

# 5. Categorías de fallo

**Recurso:** 404 al cargar app.js.  
**Sintaxis:** el navegador no puede analizar el código.  
**Ejecución:** el código inicia y luego lanza una excepción.  
**Lógica:** ejecuta sin excepción, pero produce un resultado incorrecto.

Distinguirlas reduce muchísimo el diagnóstico.

# 6. Ejemplo de ejecución

```js
const persona = null;
console.log(persona.nombre);
```

El archivo pudo cargar perfectamente y fallar después.

# 7. Módulos y servidor local

Los módulos y algunas APIs están sujetos a políticas de origen/contexto.

Cuando el proyecto lo requiera, usa un servidor local en vez de depender siempre de file://.

# 8. Strict mode

Los módulos ES funcionan en modo estricto automáticamente.

Algunos comportamientos antiguos permisivos se convierten en errores.

# 9. Práctica guiada

1. crea index.html y app.js;
2. carga el módulo;
3. escribe un log;
4. rompe la ruta;
5. corrige;
6. provoca error de sintaxis;
7. provoca TypeError;
8. clasifica cada fallo.

# 10. Errores frecuentes
- ruta incorrecta;
- no mirar Console;
- usar consola como único código;
- confundir 404 con error JS;
- no identificar la etapa del fallo.

# 11. Reto
Página mínima con módulo y bitácora de tres fallos distintos diagnosticados con DevTools.

# 12. Autoevaluación
1. ¿Qué hace type=module?
2. ¿Para qué Network?
3. ¿Sintaxis vs ejecución?
4. ¿Console sustituye archivos?
5. ¿Por qué puede ser necesario HTTP local?

# 13. Checklist
- [ ] Cargo JS.
- [ ] Uso Console/Network.
- [ ] Clasifico errores.
- [ ] Trabajo con módulo.

Continúa con tipos.


---

## Continuar el curso

- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 01 — Valores, tipos y variables](../unidad01-tipos/README.md)
