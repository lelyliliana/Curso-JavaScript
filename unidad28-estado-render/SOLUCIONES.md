# Solución razonada: Estado y render coherentes

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad29-arquitectura/README.md)

## Decisión principal

Los handlers cambian estado según contrato y llaman render después. restar puede usar Math.max(0,cantidad-1). render solo representa; no modifica ni registra listeners. Los tres botones deben tener nombres y type explícitos.

## Referencia ejecutable

Cantidad: 0 inicialmente y aumenta una vez por activación.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Mutar estado solo en acciones

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
// Añade botones type="button" con id restar y reiniciar.
document.querySelector('#restar').addEventListener('click',()=>{
 estado.cantidad=Math.max(0,estado.cantidad-1); render();
});
document.querySelector('#reiniciar').addEventListener('click',()=>{
 estado.cantidad=0; render();
});
```

El fragmento se añade al módulo del laboratorio con estado y render existentes. Dos restas desde 0 mantienen 0; sumar dos veces, restar y reiniciar da 0 al final. Llamar render dos veces sin otra acción no cambia cantidad porque render solo proyecta estado a texto. Si render incrementara cantidad, una simple repintada alteraría el modelo y haría difícil comprobar las acciones.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad29-arquitectura/README.md)
