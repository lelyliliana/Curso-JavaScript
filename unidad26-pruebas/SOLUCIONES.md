# Solución razonada: Pruebas de comportamiento

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad27-debug/README.md)

## Decisión principal

Las pruebas de límites deben fallar si 101 se acepta o 100 se rechaza. La carga corrupta debe producir error conservando datos existentes. Restaura el cambio defectuoso antes de entregar.

## Referencia ejecutable

Cada observado coincide con esperado para los cinco casos. npm test comprueba también rechazo y conservación de datos en los proyectos.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Pruebas que detectan una regresión

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
// Archivo nuevo tests/limites.test.js en la raíz del curso:
import test from 'node:test';
import assert from 'node:assert/strict';
import { analizarCantidad,crearTarea,deserializar } from '../lib/dominio.js';
test('frontera de cantidad',()=>{
 assert.equal(analizarCantidad('99').ok,true);
 assert.equal(analizarCantidad('100').ok,true);
 assert.equal(analizarCantidad('101').ok,false);
});
test('títulos iguales mantienen identidad',()=>{
 const tareas=crearTarea(crearTarea([],'Leer'),'Leer');
 assert.equal(tareas.length,2); assert.notEqual(tareas[0].id,tareas[1].id);
});
test('JSON corrupto se rechaza',()=>assert.throws(()=>deserializar('{')));
```

Cambia temporalmente el límite <=100 a <=101: la tercera aserción debe fallar. Cambiarlo a <100 hace fallar la segunda. No cambies esperado para hacer verde una regresión sin revisar el contrato. Los títulos duplicados no son ids duplicados: aceptar dos tareas llamadas Leer es correcto. La conservación del contenido corrupto en Storage se verifica aparte con la prueba de almacenamiento y la prueba de navegador.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad27-debug/README.md)
