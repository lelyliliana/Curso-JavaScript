# Solución razonada: Responsabilidades separadas

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad30-rendimiento/README.md)

## Decisión principal

El controlador conecta dominio, almacenamiento y vista. Los módulos puros no importan el controlador. La acción lleva el id de la tarea; un filtro cambia vista sin reasignar identidades.

## Referencia ejecutable

Una tarea con id 1, titulo Leer el módulo y completada false en ambas colecciones.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Dependencias y acciones por identidad

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
import { crearTarea,cambiarTarea,filtrarTareas } from '../../lib/dominio.js';
let tareas=crearTarea(crearTarea([],'Leer'),'Practicar');
const visibles=filtrarTareas(tareas,'pendientes','Pract');
tareas=cambiarTarea(tareas,visibles[0].id,{completada:true});
console.log(tareas);
```

La vista tiene una tarea en su posición 0, pero su id es 2. Completar tareas[0] cambiaría Leer por error; usar el id cambia Practicar. app depende de dominio, almacenamiento y ui; almacenamiento depende de dominio para serializar; ui recibe datos y no importa el coordinador. Las funciones del dominio no dependen de DOM ni Storage, lo que permite probarlas en Node.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad30-rendimiento/README.md)
