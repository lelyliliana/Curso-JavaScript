# Proyecto final: gestor de tareas

[Índice](../../README.md) · [Taller](../../unidad32-taller/README.md) · [Proyecto final](../../unidad33-proyecto-final/README.md)

## Abrir

Con el servidor del curso, abre http://127.0.0.1:8000/ejemplos/gestor-tareas/. Para copiar el proyecto, copia esta carpeta completa: la aplicación de tareas no depende de archivos externos. El enlace al catálogo es navegación del curso y requiere conservar la carpeta vecina app-referencia y el servidor del curso; elimínalo o cámbialo al copiar solo el gestor. Sírvela con un servidor estático (por ejemplo Live Preview); utiliza HTTP para módulos y almacenamiento. No requiere compilar ni instalar paquetes de producción.

## Funciones

Agregar, editar, completar/volver a pendiente, eliminar, filtrar por estado, buscar en títulos y recuperar datos del almacenamiento local. Las acciones identifican tareas por id, no por índice de una lista filtrada. El título se normaliza con trim y admite de 1 a 80 unidades UTF-16; la colección se limita a 200 tareas. Títulos iguales son admisibles porque sus id son distintos.

Los id son enteros únicos entre tareas activas (1 a 1.000.000.000), estables mientras existen. Se asigna uno mayor que el máximo actual. No son identificadores globales ni un historial: borrar la tarea de mayor id permite reutilizarlo posteriormente. El proyecto no implementa auditoría ni referencias externas a tareas eliminadas.

## Archivos

| Archivo | Responsabilidad |
|---|---|
| dominio.js | Validación y transformaciones puras, sin DOM/Storage |
| almacenamiento.js | Clave propia, lectura/escritura y JSON versionado |
| ui.js | Nodos y nombres de controles con textContent |
| app.js | Estado, acciones, filtros, foco y manejo de fallos |
| index.html | Etiquetas, controles y regiones de anuncio |
| styles.css | Distribución, legibilidad, wrapping y foco |

## Estado y persistencia

La colección de memoria es la fuente para render. El DOM no se usa como base de datos. Cada transformación devuelve otra colección con registros independientes. filtrarTareas cambia la vista sin modificar datos. La búsqueda ignora mayúsculas con locale es y conserva diferencias de tildes: no es una búsqueda fonética ni un motor de texto completo.

Al cargar, JSON y registros se validan antes de aceptar la colección. Un contenido corrupto se informa y no se sobrescribe durante esa lectura; la sesión comienza en memoria sin recuperar datos inválidos. Una acción nueva puede guardar la nueva colección si Storage funciona. Si necesitas conservar el contenido corrupto para analizarlo, copia la clave desde DevTools antes de realizar acciones.

Si guardar falla, el cambio sigue en memoria y la UI indica que no se pudo persistir. No se promete sincronización, respaldo o durabilidad ilimitada. Distintos puertos/orígenes tienen datos separados; dos pestañas no se coordinan con eventos storage en esta versión. No utilices datos privados ni tareas importantes como único respaldo.

## Acceso e interacción

Los controles son nativos y tienen etiquetas. El resultado de acciones se anuncia con role=status; errores con role=alert y relación con el campo. Al agregar o editar vuelve foco al título. Al reconstruir la lista tras completar/eliminar, también se recupera foco en el campo porque el botón anterior desaparece. Los filtros conservan su control, de modo que no pierden foco al cambiar vista. No hay una acción de borrar todo accidentalmente.

## Casos de aceptación

1. Agrega Leer el módulo y verifica una tarea pendiente.
2. Intenta un título compuesto solo por espacios: se rechaza y puedes corregirlo.
3. Completa la tarea; filtra pendientes y luego completadas.
4. Edita su título y cancela otra edición; cancelar no modifica datos.
5. Agrega otro título igual: debe tener otro id y conservar acciones independientes.
6. Busca texto con distinta capitalización y verifica la política de tildes.
7. Recarga el mismo origen: se recupera la colección si Storage está disponible.
8. En una sesión de prueba, coloca JSON corrupto en la clave y recarga: aparece aviso y no se sobrescribe durante carga.
9. Bloquea escritura: una acción se mantiene en memoria y muestra fallo de guardado.
10. Agrega texto con marcado: se muestra literalmente, no crea elementos.
11. Elimina desde una vista filtrada y verifica que se elimine el id correcto.
12. Usa teclado, ancho 320 px y texto ampliado; comprueba foco y contenido.

[Continuar con requisitos del proyecto](../../unidad33-proyecto-final/PRACTICA.md)
