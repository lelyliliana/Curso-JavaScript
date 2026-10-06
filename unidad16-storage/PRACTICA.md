# Práctica: Persistencia con límites

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad17-event-loop/README.md)

## Actividad

Guarda un valor no admitido en la clave desde DevTools y recarga. Borra solo esa clave. Prueba una política que bloquee almacenamiento y observa si el control sigue funcionando.

## Procedimiento

1. Ejecuta el [ejemplo original](ejemplo/index.html) con el servidor del curso.
2. Comprueba el resultado base: Elegir claro u oscuro conserva la selección al recargar el mismo origen si el almacenamiento está disponible.
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

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad17-event-loop/README.md)
