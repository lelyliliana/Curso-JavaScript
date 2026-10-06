# Solución razonada: Renderizar de forma acotada

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad31-seguridad/README.md)

## Decisión principal

Registra navegador, cantidad, condiciones y variación. Cada ejecución debe dejar 100 elementos. Una mejora que pierde contenido o foco no es válida aunque una medición sea menor.

## Referencia ejecutable

Generar produce exactamente 100 recursos, no agrega otros 100 en cada activación.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Medir el trabajo que se declara

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const duraciones=[];
for(let ensayo=0;ensayo<10;ensayo++){
 const inicio=performance.now();
 const fragmento=document.createDocumentFragment();
 for(let i=0;i<100;i++){const li=document.createElement('li');li.textContent=`Recurso ${i+1}`;fragmento.append(li);}
 lista.replaceChildren(fragmento);
 duraciones.push(performance.now()-inicio);
}
console.table(duraciones);
```

Este fragmento requiere lista del laboratorio y mide construcción e inserción síncronas; no incluye necesariamente la pintura final. No deduzcas una mejora universal de la menor duración: cachés, carga y precisión del reloj afectan muestras. Compara mismas cantidades y condiciones, y usa el panel Performance para trabajo de renderizado. Diez listas se reemplazan, no se acumulan mil nodos. El texto largo debe envolver sin ocultarse ni ampliar el ancho de la página.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad31-seguridad/README.md)
