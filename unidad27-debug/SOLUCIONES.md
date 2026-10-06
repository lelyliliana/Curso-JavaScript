# Solución razonada: Depurar una conversión

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad28-estado-render/README.md)

## Decisión principal

La cadena se concatena y produce "123". El valor esperado se obtiene convirtiendo y validando antes de sumar. El breakpoint demuestra tipos y valores sin añadir conversiones al azar.

## Referencia ejecutable

entrada "12", cantidad 12 y resultado 15.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Primera divergencia del contrato

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const entrada='12';
const cantidad=Number(entrada);
const incorrecto=entrada+3;
const correcto=cantidad+3;
console.log(typeof entrada,typeof cantidad,incorrecto,correcto);
```

El breakpoint antes de la suma muestra entrada string y cantidad number. incorrecto es "123"; correcto es 15. No es un fallo de cargar el recurso ni de sintaxis. La primera divergencia está en elegir entrada como operando, después de haber calculado la conversión correcta. Tras corregir, recarga y conserva un caso de regresión que compare número 15, no solo un texto que visualmente se parezca.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad28-estado-render/README.md)
