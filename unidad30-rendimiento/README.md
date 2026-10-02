# Unidad 30 — Rendimiento en el navegador

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
