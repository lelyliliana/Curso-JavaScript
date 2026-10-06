# Solución razonada: Orden del event loop

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad18-promises/README.md)

## Decisión principal

Las microtareas de estas reacciones se procesan tras terminar el tramo síncrono. Los timers no interrumpen ese tramo. No uses un ciclo enorme para probarlo: basta un experimento acotado que no deje la pestaña bloqueada.

## Referencia ejecutable

Después del timer, el orden es ["inicio","fin","microtarea","timer"].

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Orden y límites de la observación

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const orden=['inicio'];
setTimeout(()=>{orden.push('timer1');console.log(orden);},0);
Promise.resolve().then(()=>orden.push('micro1'));
Promise.resolve().then(()=>orden.push('micro2'));
setTimeout(()=>{orden.push('timer2');console.log(orden);},0);
let total=0; for(let i=0;i<10000;i++) total+=i;
orden.push('fin');
```

En este experimento del navegador, la salida final es inicio, fin, micro1, micro2, timer1, timer2. El primer log del timer1 todavía no contiene timer2. La suma síncrona termina antes de las microtareas; el retraso del timer no permite interrumpirla. No ejecutes un bucle infinito para medir bloqueo. Este orden local no define un orden universal entre red, eventos, pintura y todas las fuentes de tareas.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad18-promises/README.md)
