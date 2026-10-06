# Solución razonada: Recorrer y acumular

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad05-funciones/README.md)

## Decisión principal

Una lista vacía conserva suma 0 y positivos 0. Puedes representar promedio como null cuando no hay datos; para una lista no vacía divide suma por cantidad. Usa una propiedad o mensaje que diferencie ausencia de datos de promedio cero.

## Referencia ejecutable

suma 9, positivos 2 y cantidad 4.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Política para la colección vacía

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
function resumir(valores) {
  if (!Array.isArray(valores) || !valores.every(Number.isFinite)) throw new TypeError('Lista numérica requerida');
  let suma = 0; let positivos = 0;
  for (const valor of valores) { suma += valor; if (valor > 0) positivos += 1; }
  return { suma, positivos, promedio: valores.length ? suma / valores.length : null };
}
console.log(resumir([]), resumir([-4,-2]));
```

Vacío devuelve suma 0, positivos 0 y promedio null, porque no hay observaciones. [-4,-2] devuelve suma -6, positivos 0 y promedio -3. Los acumuladores se inicializan dentro de la función: una segunda llamada no conserva el total anterior. En cantidades extremadamente grandes habría que definir también una política de desbordamiento numérico.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad05-funciones/README.md)
