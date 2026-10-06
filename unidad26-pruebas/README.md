# Unidad 26: Pruebas de JavaScript

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

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



## Laboratorio completo: Pruebas de comportamiento

### Modelo y contrato

Una prueba aporta evidencia cuando podría detectar un fallo relevante. Probar únicamente una entrada habitual omite límites, datos vacíos y errores. La tabla del ejemplo conecta contrato e inputs. El runner de Node puede usar assert para comparar resultados y reportar fallos; no necesita una biblioteca de pruebas adicional.

Las funciones puras se prueban sin DOM. Las interacciones se verifican mediante usuario y resultado observable: introducir texto, activar botón, observar lista y anuncio. Mockear red permite controlar fallos, pero no demuestra que el endpoint real funcione; por eso también hay pruebas contra la API local. No escribas una prueba que repite cada línea de la implementación y solo afirma su estructura. Revisa si un cambio incorrecto en el límite de 100 sería detectado.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Cada observado coincide con esperado para los cinco casos. npm test comprueba también rechazo y conservación de datos en los proyectos.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
import { analizarCantidad } from '../../lib/dominio.js';
const casos = [['0', true], ['100', true], ['', false], ['101', false], ['12abc', false]];
mostrar(casos.map(([entrada, esperado]) => ({ entrada, esperado, observado: analizarCantidad(entrada).ok })));
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Agrega pruebas para 99, 100 y 101, una lista con títulos duplicados y JSON persistido corrupto. Cambia deliberadamente un límite en una copia y comprueba que falle una prueba.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 25: Linting, formato y calidad automatizada](../unidad25-calidad/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 27: Depuración con DevTools](../unidad27-debug/README.md)
