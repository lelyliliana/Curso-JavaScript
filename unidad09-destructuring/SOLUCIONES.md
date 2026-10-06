# Solución razonada: Destructuring y rest

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad10-map-set/README.md)

## Decisión principal

undefined activa el defecto; null lo conserva. Un resumen con lista permitida valida objeto y campos y construye {titulo,cupos}. No confíes en eliminar una sola propiedad para excluir todas las que no corresponden al contrato.

## Referencia ejecutable

cupos conserva 0, faltante usa sin dato, resumen incluye titulo/cupos y suma vale 6.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Proyección con lista de campos admitidos

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
function resumirCurso(curso) {
  if (!curso || typeof curso !== 'object') throw new TypeError('Curso inválido');
  const { titulo, cupos = 20 } = curso;
  if (typeof titulo !== 'string' || !titulo.trim() || !Number.isInteger(cupos) || cupos < 0) throw new TypeError('Campos inválidos');
  return { titulo:titulo.trim(), cupos };
}
console.log(resumirCurso({titulo:' JS ',cupos:0,secreto:'no copiar'}));
console.log(resumirCurso({titulo:'JS',cupos:undefined}));
```

El primer resultado conserva 0 y omite secreto; el segundo usa 20 porque el valor es undefined. null no activa el default y se rechaza por el contrato entero. La validación y la proyección tienen funciones distintas: extraer campos con destructuring no garantiza tipos válidos ni evita por sí solo copiar información adicional.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad10-map-set/README.md)
