# Solución razonada: Arrays sin mutar el origen

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad08-objetos/README.md)

## Decisión principal

Sin comparador, el orden de esos números se basa en sus representaciones como texto. Con (a,b)=>a-b se obtiene [2,10,30]. Copia antes de ordenar cuando debas conservar origen y define null o error para el promedio vacío según el contrato.

## Referencia ejecutable

notas conserva [2,4,5,3], aprobadas [4,5,3], dobles [4,8,10,6], suma 14 y ordenadas [2,3,4,5].

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Orden numérico y copia

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const origen = [10,2,30];
const textual = [...origen].sort();
const numerico = [...origen].sort((a,b) => a-b);
function promedio(valores) {
  return valores.length ? valores.reduce((s,n) => s+n,0) / valores.length : null;
}
console.log(textual, numerico, origen);
console.log(promedio([]), promedio(origen));
```

El orden textual es [10,2,30]; el numérico es [2,10,30]. sort modifica el array sobre el que se invoca: las copias con spread conservan el origen. El promedio de la lista es 14; vacío devuelve null. El ejemplo presupone una colección numérica válida; una función pública debería validar ese contrato antes de acumular.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad08-objetos/README.md)
