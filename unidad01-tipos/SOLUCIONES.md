# Solución razonada: Valores y variables

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad02-operadores/README.md)

## Decisión principal

Reasignar nombre falla porque es const. Modificar una propiedad de datos puede funcionar: la referencia no cambia. Number.isNaN reconoce NaN sin coerción y Number.isFinite rechaza Infinity y NaN. Ninguna de esas comprobaciones sustituye validar un rango de negocio.

## Referencia ejecutable

nombre Ana, intentos 2, tipo number, activo false y tipoNull object.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Distinguir vínculo, contenido y tipo

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const nombre = 'Ana';
const datos = { nombre };
datos.nombre = 'Luis';
console.log(nombre, datos.nombre); // Ana Luis
console.log(typeof NaN, Number.isNaN(NaN)); // number true
console.log(Number.isFinite(Infinity)); // false
```

Reasignar nombre lanza TypeError; haz ese experimento en un archivo separado o después del caso válido, porque una excepción interrumpe el resto. const impide cambiar el vínculo, pero el objeto enlazado sigue siendo mutable. NaN pertenece al tipo number y no se compara consigo mismo mediante ===. Number.isNaN no convierte primero cadenas como "hola".

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad02-operadores/README.md)
