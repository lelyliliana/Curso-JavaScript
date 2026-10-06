# Solución razonada: Coerción explícita

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad03-decisiones/README.md)

## Decisión principal

Primero exige texto no vacío después de trim, luego Number y Number.isFinite y finalmente rango. parseFloat("12abc") aceptaría un prefijo, así que no satisface el contrato de convertir toda la entrada.

## Referencia ejecutable

sumaTexto "123", sumaNumero 15, vacio 0, igualFlexible true, igualEstricto false, defectoConOr 10 y defectoConNullish 0.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Conversión con contrato explícito

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
function convertir(texto) {
  if (typeof texto !== 'string' || texto.trim() === '') return { ok: false };
  const valor = Number(texto);
  return Number.isFinite(valor) && valor >= 0 && valor <= 100
    ? { ok: true, valor } : { ok: false };
}
console.log(['  ', '12abc', '0', 'Infinity', '100.5'].map(convertir));
```

La cadena vacía se rechaza antes de Number porque Number de espacios devuelve 0. Un sufijo alfabético produce NaN; Infinity no es finito. Este contrato admite decimales dentro del rango y las notaciones que acepte Number (por ejemplo 1e1). Si se exigen dígitos decimales enteros, usa analizarCantidad del dominio: ambos contratos son distintos y deben declararse.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad03-decisiones/README.md)
