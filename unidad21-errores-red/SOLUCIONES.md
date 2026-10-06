# Solución razonada: Cancelación y tiempo límite

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad22-estados-ui/README.md)

## Decisión principal

El cliente limpia timer y listener. Cancelación manual tiene mensaje propio; timeout informa límite. La solicitud antigua no sobrescribe la nueva porque se comprueba el identificador antes de renderizar.

## Referencia ejecutable

La selección determina datos, vacío o fallo; lento puede cancelarse o llegar al límite de 400 ms. El resultado vigente pertenece a la última solicitud.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Cancelación, tiempo y respuesta vigente

En lento, el servidor espera 800 ms y el cliente cancela por tiempo a los 400 ms. Si pulsas Cancelar antes del límite, la categoría es cancelada; si esperas, es timeout. Al iniciar normal tras lento, aumenta solicitud y se aborta la señal anterior. Su catch/finally tardío no modifica la lista, mensaje ni busy de la nueva operación porque compara el id. Comprueba que el mensaje final sea dos recursos cargados incluso pasado el plazo del escenario lento.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad22-estados-ui/README.md)
