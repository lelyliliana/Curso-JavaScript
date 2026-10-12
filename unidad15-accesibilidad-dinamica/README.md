# Unidad 15: Interfaces dinámicas accesibles

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

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



## Laboratorio completo: Anunciar cambios

### Modelo y contrato

Una interfaz dinámica debe comunicar cambios importantes sin exigir mirar toda la pantalla. role=status anuncia información no urgente de forma cortés y suele ser preferible a alert para conteos normales. No vuelvas a anunciar todo el contenido de una lista extensa en cada cambio.

El foco no se traslada por cualquier actualización. Aquí la persona puede seguir agregando recursos desde el mismo botón; moverla a cada li introduciría trabajo adicional. Cuando se elimina el control enfocado sí necesitas una política de recuperación (otra acción disponible o el control de entrada). Foco y anuncio son mecanismos distintos: anunciar no enfoca y enfocar no explica necesariamente el resultado. Utiliza controles nativos y nombres que describan la tarea. Prueba también con lector de pantalla cuando esté disponible.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Cada activación añade un recurso y actualiza la región de estado sin desplazar el foco del botón.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const boton = document.querySelector('#agregar');
const lista = document.querySelector('#lista');
const estado = document.querySelector('#estado');
let cantidad = 0;
boton.addEventListener('click', () => {
  cantidad += 1;
  const item = document.createElement('li'); item.textContent = `Recurso ${cantidad}`;
  lista.append(item); estado.textContent = `${cantidad} recursos disponibles.`;
});
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Agrega tres recursos usando solo teclado. Anota dónde permanece el foco. Implementa una acción para limpiar la lista con un anuncio del resultado, conservando un destino de foco válido.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 14: Formularios y validación](../unidad14-formularios/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 16: Web Storage y persistencia en el navegador](../unidad16-storage/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2015%20%E2%80%94%20Interfaces%20din%C3%A1micas%20accesibles%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad15-accesibilidad-dinamica%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
