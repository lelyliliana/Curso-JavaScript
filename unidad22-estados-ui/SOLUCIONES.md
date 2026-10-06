# Solución razonada: Estados de carga

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad23-modulos/README.md)

## Decisión principal

Normal crea nodos y conteo, vacío informa ausencia y fallo informa categoría sin inventar datos. La lista no conserva contenido anterior como éxito falso. El foco del botón se mantiene salvo una acción deliberada.

## Referencia ejecutable

La selección determina datos, vacío o fallo; lento puede cancelarse o llegar al límite de 400 ms. El resultado vigente pertenece a la última solicitud.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Estados con evidencia

idle corresponde al mensaje inicial y lista vacía; loading comienza al pulsar Cargar, limpia datos anteriores y activa aria-busy; success muestra dos recursos; empty muestra No hay resultados sin declarar error; error muestra una categoría y no datos viejos. cancelada se representa como fase error con categoría cancelada, no como una fase independiente en este modelo. Después de cada resultado, finally retira busy y deshabilita Cancelar. Esta distinción entre estado de UI y categoría de error evita inventar fases que el código no implementa.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad23-modulos/README.md)
