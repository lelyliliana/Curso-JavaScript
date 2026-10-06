# Solución razonada: Persistencia con límites

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad17-event-loop/README.md)

## Decisión principal

Una cadena diferente de claro/oscuro no se aplica. removeItem(clave) limita la eliminación al dato del ejemplo. Si se bloquea setItem, la UI informa el fallo y conserva la selección en memoria sin prometer persistencia.

## Referencia ejecutable

Elegir claro u oscuro conserva la selección al recargar el mismo origen si el almacenamiento está disponible.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Clave inválida y almacenamiento bloqueado

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
// Experimentos separados en DevTools, en el origen del curso:
localStorage.setItem('curso-js-preferencia-v1','rojo');
// Recarga: el select conserva el valor inicial claro.
// Para retirar solo la preferencia del curso:
localStorage.removeItem('curso-js-preferencia-v1');
```

La lectura acepta únicamente claro u oscuro; rojo no se asigna al select. No se usa localStorage.clear porque borraría claves ajenas al ejercicio. Si acceso o escritura lanza excepción, los catch del módulo informan el fallo y la selección actual sigue operativa en memoria. Cambiar puerto crea otro origen; no demuestra que la clave anterior se haya perdido. La prueba automatizada simula una escritura rechazada sin cambiar tu perfil real.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad17-event-loop/README.md)
