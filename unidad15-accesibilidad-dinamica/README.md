# Unidad 15 — Interfaces dinámicas accesibles

## Qué aprenderás
Gestionar foco, nombres, estados y anuncios cuando JavaScript cambia la interfaz.

# 1. HTML nativo primero

Si la acción es un botón:

```html
<button type="button">Guardar</button>
```

No recrees comportamiento con div + click + tabindex + teclado + ARIA salvo que realmente necesites un widget personalizado.

# 2. Estado visible y programático

Si un botón expande contenido:

```html
<button
  aria-expanded="false"
  aria-controls="panel">
  Detalles
</button>
```

JavaScript debe mantener `aria-expanded` sincronizado con el estado real.

ARIA falsa es peor que ninguna ARIA.

# 3. Foco

Cuando aparece contenido dinámico, no siempre debes mover foco.

Muévelo cuando el flujo de interacción lo exige, por ejemplo ciertos diálogos o errores complejos.

No “persigas” cada cambio con focus.

# 4. Eliminar elemento enfocado

Si borras el elemento que tiene foco, decide dónde debe continuar:
- siguiente elemento;
- anterior;
- encabezado/acción relevante.

Evita que el usuario quede perdido.

# 5. aria-live

Útil para anunciar cambios que ocurren sin mover foco:

```html
<p aria-live="polite" id="estado"></p>
```

Ejemplos:
- “3 resultados encontrados”;
- “Guardado”.

No pongas regiones enormes/live para todo; produciría anuncios excesivos.

# 6. Dialog

Un diálogo accesible implica:
- nombre;
- foco inicial;
- interacción modal cuando corresponde;
- Escape/cierre;
- retorno de foco;
- fondo no interactuable según modalidad.

El elemento nativo `<dialog>` puede aportar comportamiento, pero aun requiere diseño/pruebas.

# 7. Contenido insertado

Añadir un elemento al DOM no significa que un lector de pantalla lo anuncie automáticamente.

Decide si necesita anuncio, foco o simplemente estar disponible en navegación normal.

# 8. Estados loading

Un control puede usar:
- disabled cuando realmente no debe activarse;
- texto “Guardando…”;
- `aria-busy` en una región cuando corresponde.

No deshabilites grandes zonas sin explicar el estado.

# 9. Práctica guiada

Construye disclosure y notificación de guardado.

Prueba solo teclado:
- abrir;
- cerrar;
- foco;
- estado anunciado.

# 10. Errores frecuentes
- div clickable;
- aria-expanded desincronizado;
- aria-live en toda la app;
- mover foco por cada render;
- modal visual sin gestión de foco.

# 11. Reto
Diálogo conceptual/implementación pequeña con apertura, cierre por Escape y retorno de foco, verificando semántica.

# 12. Autoevaluación
1. ¿ARIA reemplaza HTML nativo?
2. ¿Cuándo mover foco?
3. ¿Para qué aria-live?
4. ¿Qué pasa al borrar foco?
5. ¿Qué necesita un dialog?
6. ¿ARIA debe reflejar estado real?

# 13. Checklist
- [ ] Nativos primero.
- [ ] Estado sincronizado.
- [ ] Foco intencional.
- [ ] Anuncios moderados.

Continúa con almacenamiento.
