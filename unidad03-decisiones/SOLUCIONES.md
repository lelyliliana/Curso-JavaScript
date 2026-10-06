# Solución razonada: Decisiones con contrato

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad04-ciclos/README.md)

## Decisión principal

Los tres nuevos casos son inválidos bajo el contrato entero. Al cambiar a 21, 20 sigue siendo menor y 21 adulta. Si otro dominio admite edades fraccionarias, cambia el contrato y sus pruebas de forma explícita, no solo el if.

## Referencia ejecutable

0 y 17 son menor; 18 y 120 adulta; -1, 121 y la cadena "18" inválida.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Actualizar frontera y predicción

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
function clasificar(edad) {
  if (!Number.isInteger(edad) || edad < 0 || edad > 120) return 'inválida';
  return edad < 21 ? 'menor del umbral' : 'alcanza el umbral';
}
console.log([20,21,22,17.5,null,NaN].map(clasificar));
```

20 queda debajo; 21 y 22 alcanzan el umbral. Los tres últimos valores son inválidos antes de comparar. El umbral del experimento es una regla de clasificación del ejercicio, no una afirmación legal sobre mayoría de edad. Separar validez y clasificación evita que null se convierta silenciosamente en 0 al usar solo una comparación numérica.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad04-ciclos/README.md)
