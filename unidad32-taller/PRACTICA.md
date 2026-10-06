# Práctica integradora: gestor de tareas

[Enunciado](README.md) · [Índice](../README.md) · [Siguiente: proyecto](../unidad33-proyecto-final/README.md)

Construye las cinco etapas de la lección. Usa información ficticia y conserva una copia del original para comparar.

| Caso | Esperado | Evidencia |
|---|---|---|
| Título válido | Tarea pendiente con id propio | |
| Solo espacios | Error asociado, sin nueva tarea | |
| Dos títulos iguales | Registros independientes | |
| Completar desde filtro | Cambia la tarea identificada, no otra posición | |
| Editar/cancelar | Guardar cambia; cancelar conserva | |
| Eliminar | Retira solo el id indicado y recupera foco | |
| Recarga del mismo origen | Recupera datos válidos | |
| JSON corrupto | Informa y no sobrescribe durante lectura | |
| Escritura bloqueada | Cambio visible con advertencia de persistencia | |
| Texto con marcado | Texto literal, sin nuevos nodos HTML | |

## Ampliación

Añade prioridad baja/media/alta. Diseña versión de datos y política de migración. Un archivo anterior no debe convertirse en un estado inventado sin una decisión explícita. Si no implementas migración, rechaza la versión incompatible y conserva el contenido para revisión.

[Comparar solución](SOLUCIONES.md) · [Proyecto final](../unidad33-proyecto-final/README.md)
