# Solución razonada: Fetch y contrato

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad21-errores-red/README.md)

## Decisión principal

HTTP, JSON y estructura producen categorías distintas. Vacío es un array válido de longitud cero, no un fallo. La UI representa el dato recibido sin convertirlo en HTML y el cliente no conoce la lista del DOM.

## Referencia ejecutable

La selección determina datos, vacío o fallo; lento puede cancelarse o llegar al límite de 400 ms. El resultado vigente pertenece a la última solicitud.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Tabla de respuestas del laboratorio

normal devuelve HTTP 200 y dos recursos; vacío devuelve HTTP 200 y []; 404/500 se clasifican como http; JSON inválido devuelve 200 pero se clasifica como json; esquema inválido devuelve 200 con objeto y se clasifica como esquema. El cliente comprueba status antes de interpretar el cuerpo y la estructura después de parsear. Para ensayar marcado, modifica un titulo en la respuesta normal del servidor, reinícialo y verifica que se ve literalmente: debe haber cero img creados en la lista. Restaura después la respuesta.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad21-errores-red/README.md)
