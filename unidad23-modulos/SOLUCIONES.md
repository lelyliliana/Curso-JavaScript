# Solución razonada: Módulos con contrato

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad24-npm/README.md)

## Decisión principal

El import debe pedir un nombre realmente exportado. Un archivo que existe puede fallar por exportación incompatible. La función pura debe devolver un valor y la UI decide cómo mostrarlo.

## Referencia ejecutable

resultado 5 y carga correcta de app.js y calculos.js bajo HTTP.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Exportación y contrato numérico

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
// En calculos.js (además de sumar):
export function multiplicar(a,b){
 if(!Number.isFinite(a)||!Number.isFinite(b)) throw new TypeError('Números finitos requeridos');
 const resultado=a*b;
 if(!Number.isFinite(resultado)) throw new RangeError('Resultado fuera del rango numérico');
 return resultado;
}
```

Añade import { multiplicar } from "./calculos.js" en app.js y muestra multiplicar(2,3): devuelve 6. Renombrar sumar en el export sin actualizar su import impide enlazar el módulo: no llega al cálculo. Una ruta incorrecta en cambio se observa como recurso ausente. Number.isFinite evita multiplicar cadenas por coerción; la segunda comprobación rechaza desbordamiento del resultado.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad24-npm/README.md)
