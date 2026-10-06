# Solución del taller

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente: proyecto](../unidad33-proyecto-final/README.md)

La [app completa](../ejemplos/gestor-tareas/README.md) utiliza funciones puras para reglas, un adaptador de Storage, una vista y un controlador. No calcula el estado leyendo texto del DOM. Las acciones llevan id y los filtros derivan una colección visible.

## Datos

validarTareas comprueba array, límite, identidad, título y booleano antes de aceptar cada registro. Retorna registros propios con solo campos admitidos. crearTarea normaliza título y asigna id activo único. cambiarTarea/eliminarTarea rechazan id ausente; no convierten un error en un éxito silencioso.

## Edición y foco

El formulario conserva un id en modo edición. Cancelar lo retira sin transformar tareas. Tras agregar/editar se enfoca título. Completar/eliminar reconstruye la lista y recupera foco para que la persona no quede en un nodo desaparecido. Otra política puede ser válida si está implementada y probada.

## Persistencia

El adaptador usa una clave propia. deserializar valida versión y toda la colección antes de devolver datos. Un error de carga no activa setItem. Una acción nueva puede guardar la colección de memoria; la app informa su alcance y no promete respaldo.

## Extensión de prioridad

Define enum y versión. Actualiza validación, creación/cambio, serialización, vista y filtros si corresponden. Para migrar versión 1 a 2, establece un valor de prioridad predeterminado documentado y valida antes de guardar; conserva evidencia de la migración. No basta con añadir un select que el dominio ignore.

[Continuar con proyecto final](../unidad33-proyecto-final/README.md)
