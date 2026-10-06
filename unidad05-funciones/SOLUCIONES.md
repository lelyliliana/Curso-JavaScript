# Solución razonada: Funciones puras

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad06-scope-closures/README.md)

## Decisión principal

Valida ambos números finitos y rangos. Devuelve subtotal * (1 - porcentaje/100). 0 conserva subtotal y 100 devuelve 0. Un porcentaje 150 debe rechazarse, no crear un precio negativo aparentemente válido.

## Referencia ejecutable

dos 25 y ninguno 0.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Descuento como cálculo puro

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
function descuento(subtotal, porcentaje) {
  if (!Number.isFinite(subtotal) || subtotal < 0 || !Number.isFinite(porcentaje) || porcentaje < 0 || porcentaje > 100) throw new RangeError('Fuera del contrato');
  return subtotal * (1 - porcentaje / 100);
}
console.log(descuento(50,0), descuento(50,100), descuento(50,20));
```

La función devuelve el importe posterior al descuento: 50, 0 y 40. Declara ese significado porque "descuento" también podría nombrar solo el importe descontado. -1 y 101 se rechazan, igual que NaN e Infinity. No escribe en DOM ni modifica argumentos. Para dinero real sería necesario decidir unidad monetaria y redondeo; los números binarios no representan exactamente todos los decimales.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad06-scope-closures/README.md)
