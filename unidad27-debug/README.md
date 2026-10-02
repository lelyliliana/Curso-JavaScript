# Unidad 27 — Depuración con DevTools

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
