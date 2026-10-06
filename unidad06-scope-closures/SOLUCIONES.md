# Solución razonada: Closures independientes

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad07-arrays/README.md)

## Decisión principal

La secuencia del tercer contador comienza en 101 y no afecta a los otros. Un objeto puede devolver incrementar y reiniciar, ambos cerrando sobre la misma vinculación de esa instancia. No necesitas una variable global para compartir estado entre esos dos métodos.

## Referencia ejecutable

El array resultante es [1,2,11,3,12].

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Closure con operaciones y reinicio

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
function crearContador(inicio = 0) {
  if (!Number.isInteger(inicio) || inicio < 0) throw new RangeError('Inicio inválido');
  let valor = inicio;
  return { incrementar: () => ++valor, consultar: () => valor, reiniciar: () => { valor = inicio; } };
}
const tercero = crearContador(100);
console.log(tercero.incrementar()); // 101
tercero.reiniciar(); console.log(tercero.consultar()); // 100
```

Cada llamada a la factory crea otro entorno léxico. Los métodos del objeto comparten el valor de ese contador, pero no el de otros contadores. reiniciar restaura el inicio capturado (100 en este caso), no necesariamente 0. El llamador solo accede a las operaciones expuestas; no existe una propiedad pública valor que pueda sobrescribir.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad07-arrays/README.md)
