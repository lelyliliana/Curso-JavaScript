# Práctica: Orden del event loop

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad18-promises/README.md)

## Actividad

Agrega otra Promise.resolve().then y otro setTimeout. Predice el orden. Después ejecuta un cálculo síncrono breve antes de fin y observa que el timer espera a que termine.

## Procedimiento

1. Ejecuta el [ejemplo original](ejemplo/index.html) con el servidor del curso.
2. Comprueba el resultado base: Después del timer, el orden es ["inicio","fin","microtarea","timer"].
3. Escribe tu predicción y modifica una copia.
4. Ejecuta el caso solicitado y registra entrada/condición, salida y explicación.
5. Incluye un límite o fallo pertinente y verifica que no se presente como éxito.
6. Restaura los cambios deliberadamente incorrectos antes de avanzar.

## Criterios de aceptación

- La modificación satisface el contrato y puedes señalar la operación responsable.
- Los datos originales que deban conservarse no se alteran accidentalmente.
- Una entrada inválida o fallo se diferencia del resultado válido, cuando aplica.
- Los controles existentes siguen disponibles con teclado y nombres comprensibles.
- No hay recursos ausentes ni excepciones inesperadas en Console.

| Caso | Entrada/condición | Esperado | Observado | Explicación |
|---|---|---|---|---|
| Base | | | | |
| Modificado | | | | |
| Límite o fallo | | | | |

[Comparar solución](SOLUCIONES.md)

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad18-promises/README.md)
