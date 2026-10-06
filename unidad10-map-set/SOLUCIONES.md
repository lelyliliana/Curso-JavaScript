# Solución razonada: Map y Set

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad11-clases-prototipos/README.md)

## Decisión principal

Define una normalización antes de usar claves. Para conservar el primero, añade solo si !map.has(id); para el último, cada set reemplaza el valor de esa clave. Documenta si cambiar un registro debe modificar también su posición en el orden de salida.

## Referencia ejecutable

frecuencias [["sol",2],["agua",1]], unicos ["sol","agua"] y objetosDistintos 2.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Normalización e identidad por clave

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const frecuencias = new Map();
for (const palabra of ['Sol','sol','AGUA']) {
  const clave=palabra.toLocaleLowerCase('es');
  frecuencias.set(clave,(frecuencias.get(clave) ?? 0)+1);
}
const registros=[{id:1,nombre:'primero'},{id:1,nombre:'último'}];
const primeros=new Map();
for(const r of registros) if(!primeros.has(r.id)) primeros.set(r.id,r);
const ultimos=new Map(registros.map(r=>[r.id,r]));
console.log([...frecuencias], [...primeros.values()], [...ultimos.values()]);
```

Las frecuencias son sol 2 y agua 1. Para el id 1, primeros conserva "primero"; ultimos conserva "último". Reemplazar el valor de una clave de Map no mueve automáticamente su posición de inserción. Una política de deduplicación necesita declarar tanto el campo de identidad como el registro que gana. No normalices identificadores numéricos con operaciones de texto.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad11-clases-prototipos/README.md)
