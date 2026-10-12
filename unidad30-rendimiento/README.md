# Unidad 30: Rendimiento en el navegador

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Medir antes de optimizar, reducir trabajo innecesario y distinguir problemas de DOM, CPU, red y memoria.

# 1. Define el problema

“Está lento” puede significar:

- carga inicial;
- click tarda;
- scroll entrecortado;
- búsqueda recalcula demasiado;
- memoria crece.

Mide el síntoma correcto.

# 2. Performance

DevTools Performance permite observar:

- tareas largas;
- scripting;
- rendering;
- painting;
- frames.

No optimices solo por una cifra aislada.

# 3. Long tasks

Trabajo JS prolongado bloquea el hilo principal.

Divide trabajo, reduce cálculos o considera técnicas como Web Workers si el problema es CPU pesado y el caso lo justifica.

Workers no acceden directamente al DOM.

# 4. DOM

Evita repetir consultas/actualizaciones innecesarias dentro de ciclos grandes.

Pero no asumas que cada append individual es catastrófico: perfila el caso real.

# 5. Listas

Para miles de elementos, quizá necesites:

- paginación;
- virtualización;
- render incremental.

No renderices 100 000 filas solo para luego ocultar 99 980 con CSS.

# 6. Eventos frecuentes

Scroll/input/resize pueden dispararse mucho.

Debounce:
> espera pausa antes de ejecutar.

Throttle:
> limita frecuencia.

No los uses indistintamente.

# 7. Búsqueda

Un input de búsqueda remota puede usar debounce + cancelación de petición anterior.

Así reduces llamadas y resultados obsoletos.

# 8. Memoria

Listeners, timers y referencias a nodos pueden mantener objetos alcanzables.

Limpia recursos cuando el ciclo de vida lo requiere.

No diagnostiques “memory leak” solo porque la memoria sube temporalmente; usa herramientas/evidencia.

# 9. Red

Rendimiento frontend también depende de:

- número/tamaño de recursos;
- API;
- caché;
- imágenes.

No intentes optimizar render si el cuello es una respuesta de 5 s.

# 10. Práctica guiada

Lista grande:

1. baseline;
2. profile;
3. hipótesis;
4. cambio;
5. repetir.

Documenta si la mejora fue real o no.

# 11. Errores frecuentes

- optimizar sin medir;
- debounce/throttle confundidos;
- render masivo;
- culpar JS cuando es red;
- afirmar leak sin perfil.

# 12. Reto
Perfil antes/después de un cuello real con conclusión limitada a evidencia.

# 13. Autoevaluación

1. ¿Qué es long task?
2. ¿Worker toca DOM?
3. ¿Debounce/throttle?
4. ¿Qué hacer con lista enorme?
5. ¿Memoria alta = leak?
6. ¿Por qué baseline?

# 14. Checklist

- [ ] Mido.
- [ ] Identifico cuello.
- [ ] Cambio una causa.
- [ ] Repito escenario.

Continúa con seguridad.



## Laboratorio completo: Renderizar de forma acotada

### Modelo y contrato

Antes de optimizar mide una tarea concreta. Este ejemplo construye nodos fuera del árbol visible y reemplaza la colección una vez. DocumentFragment ayuda a expresar esa construcción, pero no garantiza que sea más rápido que cualquier alternativa en todos los navegadores. El resultado observable sigue siendo importante: una segunda carga no duplica datos.

Evita alternar lecturas de geometría y escrituras repetidamente sin necesidad, porque pueden forzar cálculos de layout. Para búsquedas, debounce reduce invocaciones mientras la persona escribe; no cancela automáticamente una solicitud ya iniciada ni resuelve carreras. Con grandes colecciones considera paginación o virtualización y sus implicaciones de acceso. Este laboratorio es deliberadamente acotado; bloquear el navegador con millones de nodos no aporta una buena práctica introductoria.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Generar produce exactamente 100 recursos, no agrega otros 100 en cada activación.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const boton = document.querySelector('#generar');
const lista = document.querySelector('#lista');
boton.addEventListener('click', () => {
  const fragmento = document.createDocumentFragment();
  for (let i = 1; i <= 100; i += 1) {
    const li = document.createElement('li'); li.textContent = `Recurso ${i}`; fragmento.append(li);
  }
  lista.replaceChildren(fragmento); mostrar({ cantidad: lista.children.length });
});
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Mide con performance.now el bloque de construcción y compara diez ejecuciones similares. No uses una sola duración como prueba universal. Añade texto largo y conserva wrapping.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 29: Arquitectura de una aplicación JavaScript](../unidad29-arquitectura/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 31: Seguridad web básica para frontend](../unidad31-seguridad/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2030%20%E2%80%94%20Rendimiento%20b%C3%A1sico%20en%20el%20navegador%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad30-rendimiento%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
