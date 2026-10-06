# Unidad 27: Depuración con DevTools

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Investigar fallos síncronos y asíncronos mediante breakpoints, call stack, Network y evidencia.

# 1. Método

```text
reproducir
→ hipótesis
→ observar
→ reducir
→ corregir
→ verificar
→ test de regresión
```

# 2. Breakpoint

Pausa cerca del punto donde el estado empieza a divergir.

Inspecciona variables, scope y call stack.

# 3. Step

- step over: ejecuta sin entrar a la llamada;
- step into: entra;
- step out: termina la función actual.

Úsalos para seguir una hipótesis.

# 4. Conditional breakpoint

Pausa solo cuando una condición se cumple, por ejemplo `id === 42`.

Útil dentro de ciclos/listas.

# 5. Watch

Observa expresiones relevantes mientras avanzas.

Sigue las variables que pueden probar/refutar la hipótesis.

# 6. Call stack

Explica cómo llegaste al punto actual.

DevTools puede conservar información asíncrona adicional según navegador/configuración.

# 7. Network

Para fetch revisa:

- URL;
- método;
- status;
- headers;
- timing;
- response.

Antes de culpar al parser, mira qué respondió realmente el servidor.

# 8. Console

Útil para inspección.

No llenes código permanente con logs sin propósito y nunca registres secretos.

# 9. DOM breakpoints

Algunos DevTools pueden pausar cuando un nodo cambia/se elimina.

Útil para descubrir quién modifica el DOM.

# 10. Performance

Para lentitud, el debugger línea a línea distorsiona tiempos.

Usa herramientas de profiling/Performance.

# 11. Práctica guiada

Bug: una búsqueda muestra resultados viejos.

Usa Network y breakpoint para demostrar el orden de respuestas y corregir con cancelación/identificador.

# 12. Errores frecuentes

- cambiar antes de reproducir;
- console.log de todo;
- ignorar Network;
- corregir síntoma;
- no crear regresión.

# 13. Reto
Bitácora de fallo async con evidencia temporal y prueba de regresión.

# 14. Autoevaluación

1. ¿Conditional breakpoint?
2. ¿Qué muestra stack?
3. ¿Qué revisar en Network?
4. ¿Debugger para rendimiento?
5. ¿Por qué regresión?

# 15. Checklist

- [ ] Reproduzco.
- [ ] Formulo hipótesis.
- [ ] Uso panel correcto.
- [ ] Verifico/regresión.

Continúa con estado.



## Laboratorio completo: Depurar una conversión

### Modelo y contrato

DevTools permite detener ejecución y examinar variables. Un breakpoint antes de resultado muestra tipo y valor de entrada y cantidad. La consola puede evaluar expresiones en ese contexto. No adivines que el servidor falló cuando el dato se convierte mal después de recibirse.

El ejemplo se presta a introducir una coerción equivocada (entrada + 3) y observar 123. Un error lógico no produce necesariamente una excepción. Un log puede ayudar, pero demasiados mensajes sin contexto dificultan reconocer el primer cambio incorrecto. Distingue datos reales de referencias mostradas por herramientas: algunos objetos se presentan con su estado al expandirlos. Conserva pasos de reproducción, input y resultado esperado para que otra persona pueda investigar.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** entrada "12", cantidad 12 y resultado 15.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const entrada = '12';
const cantidad = Number(entrada);
const resultado = cantidad + 3;
mostrar({ entrada, cantidad, resultado });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

En una copia, sustituye cantidad + 3 por entrada + 3. Pon un breakpoint, inspecciona typeof de ambas variables y corrige. Anota el primer punto donde difiere el contrato.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 26: Pruebas de JavaScript](../unidad26-pruebas/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 28: Estado y renderizado determinista](../unidad28-estado-render/README.md)
