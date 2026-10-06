# Práctica: Cancelación y tiempo límite

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad22-estados-ui/README.md)

## Actividad

Selecciona lento y cancela antes de recibir datos. Luego repite lento sin cancelar y observa timeout. Inicia lento y enseguida normal; el resultado final debe pertenecer a normal.

## Procedimiento

1. Ejecuta el [ejemplo original](ejemplo/index.html) con el servidor del curso.
2. Comprueba el resultado base: La selección determina datos, vacío o fallo; lento puede cancelarse o llegar al límite de 400 ms. El resultado vigente pertenece a la última solicitud.
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

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad22-estados-ui/README.md)
