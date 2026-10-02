# Unidad 26 — Pruebas de JavaScript

## Qué aprenderás
Probar lógica, errores, DOM y asincronía observando comportamiento en lugar de implementación interna.

# 1. Funciones puras

```js
expect(sumar(2, 3)).toBe(5);
```

Son un buen punto de partida porque son rápidas y fáciles de aislar.

# 2. Casos

Para una regla prueba:
- normal;
- límite;
- inválido;
- vacío cuando aplique.

No pruebes solo el camino feliz.

# 3. Igualdad

Los frameworks ofrecen matchers distintos para primitivos, estructuras, aproximaciones numéricas y excepciones.

No uses igualdad de referencia cuando quieres comparar contenido estructural.

# 4. Errores

Prueba la categoría/contrato esperado, no simplemente que “algo falló”.

# 5. DOM

Piensa:

```text
dado estado X
cuando ocurre evento Y
entonces la persona observa Z
```

No acoples el test a cuántas veces se llamó una función interna si eso no forma parte del comportamiento.

# 6. Eventos

Simula la interacción desde la interfaz y comprueba el resultado observable.

# 7. Async

Asegúrate de esperar Promises.

Un test que termina antes que la operación asíncrona puede producir resultados engañosos.

# 8. Red

No dependas de Internet real.

Sustituye el cliente o utiliza un servidor de pruebas controlado según el alcance.

# 9. Timers

Los fake timers pueden hacer determinista lógica temporal.

No reproducen necesariamente cada detalle del navegador real.

# 10. Accesibilidad

Cuando la herramienta lo permita, localizar controles por rol/nombre aproxima mejor cómo se usa la interfaz.

No conviertas data-testid en la única estrategia.

# 11. Práctica guiada

Prueba:
- filtro puro;
- estado empty;
- click eliminar;
- carga exitosa;
- carga fallida.

# 12. Errores frecuentes
- solo happy path;
- probar detalles privados;
- olvidar esperar async;
- red real;
- test-id para todo;
- snapshots enormes sin revisión.

# 13. Reto
Suite de lista remota cubriendo lógica, DOM, error y empty.

# 14. Autoevaluación
1. ¿Qué probar primero?
2. ¿Comportamiento o implementación?
3. ¿Por qué esperar async?
4. ¿Internet real?
5. ¿Por qué rol/nombre?
6. ¿Snapshot grande garantiza calidad?

# 15. Checklist
- [ ] Pruebo comportamiento.
- [ ] Cubro límites/errores.
- [ ] Async determinista.
- [ ] DOM desde perspectiva de uso.

Continúa con depuración.
