# Solución razonada: Anunciar cambios

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad16-storage/README.md)

## Decisión principal

El botón activo sigue enfocado porque no se reconstruye. Al limpiar, usa replaceChildren, reinicia cantidad si ese es el contrato y anuncia No hay recursos. No uses alert para cada agregado ni muevas foco hacia un elemento no interactivo sin razón.

## Referencia ejecutable

Cada activación añade un recurso y actualiza la región de estado sin desplazar el foco del botón.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Limpiar y anunciar manteniendo foco

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
// Añade al HTML: <button id="limpiar" type="button">Limpiar lista</button>
const limpiar=document.querySelector('#limpiar');
limpiar.addEventListener('click',()=>{
  const anteriores=lista.children.length;
  lista.replaceChildren(); cantidad=0;
  estado.textContent=`Se retiraron ${anteriores} recursos. Lista vacía.`;
  limpiar.focus();
});
```

Este fragmento se integra con las variables lista, cantidad y estado del laboratorio. Al activar Agregar con Espacio o Enter, el foco permanece en el botón y la región status anuncia la cantidad. Limpiar mantiene un control existente como destino; no enfoca un elemento retirado. No añadas tabindex positivo para reparar un orden que ya resuelven los controles nativos.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad16-storage/README.md)
