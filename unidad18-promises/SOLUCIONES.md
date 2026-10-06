# Solución razonada: Promise y rechazo

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad19-async-await/README.md)

## Decisión principal

all entrega un array solo si todas cumplen; con la cadena inválida llega al catch. Las otras operaciones no desaparecen por ese rechazo. finally ejecuta cierre y no debe devolver un dato inventado que se confunda con el resultado real.

## Referencia ejecutable

Un resultado fulfilled con valor 6 y otro rejected con error Número inválido.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### all no devuelve el éxito parcial

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
function dobleAsync(valor){
 return new Promise((resolve,reject)=>setTimeout(()=>Number.isFinite(valor)?resolve(valor*2):reject(new TypeError('Número inválido')),20));
}
try {
 const datos=await Promise.all([dobleAsync(3),dobleAsync('3')]);
 console.log(datos);
} catch(error){console.log('Falló el conjunto:',error.message);}
finally{console.log('Finalizó la espera');}
```

all rechaza el conjunto por la segunda operación y no entrega un array parcial con 6. allSettled sí devuelve dos registros de estado. finally se ejecuta después del resultado manejado, pero el log de limpieza no declara éxito. all no cancela las operaciones restantes. La llamada a dobleAsync inicia la operación; Promise.all agrega las Promises ya construidas.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad19-async-await/README.md)
