# Solución razonada: Objetos y referencias

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad09-destructuring/README.md)

## Decisión principal

Copia el objeto exterior y contacto. Ambas identidades deben ser distintas en esos niveles. Dos objetos creados separadamente no son === aunque tengan datos iguales. Si necesitas igualdad de contenido, define qué propiedades y tipos importan.

## Referencia ejecutable

Los nombres son Ana y Luis; ambas ciudades pasan a Montería y mismoContacto es true.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Reconstruir el nivel compartido

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const persona = { nombre:'Ana', contacto:{ ciudad:'Sahagún' } };
const copia = { ...persona, contacto:{ ...persona.contacto, ciudad:'Montería' } };
console.log(persona.contacto.ciudad, copia.contacto.ciudad);
console.log(persona.contacto === copia.contacto); // false
console.log(({id:1}) === ({id:1})); // false
```

Los objetos contacto ahora tienen referencias diferentes: modificar una ciudad no afecta la otra. Si hubiera otro objeto anidado dentro de contacto, ese siguiente nivel seguiría compartido salvo que también se reconstruyera. === compara identidad de objetos, no igualdad estructural. La reconstrucción explícita expresa exactamente qué nivel cambia y qué niveles permanecen compartidos.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad09-destructuring/README.md)
