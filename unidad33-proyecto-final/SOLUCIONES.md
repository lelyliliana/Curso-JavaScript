# Solución y contratos del proyecto

[Proyecto](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

El [gestor de tareas](../ejemplos/gestor-tareas/README.md) resuelve operaciones locales, persistencia y filtros. El [catálogo de referencia](../ejemplos/app-referencia/README.md) resuelve carga, validación, cancelación y estados con API controlada. La navegación entre las dos páginas se incorpora en sus HTML.

## Comparación

| Necesidad | Referencia |
|---|---|
| Reglas de tareas | dominio.js y pruebas de Node |
| Guardado | almacenamiento.js y contrato JSON v1 |
| Render/foco | ui.js y app.js de tareas |
| Cliente de catálogo | lib/cliente.js |
| Carreras/estados | lib/red-ui.js |
| API reproducible | servidor/server.js |

La separación permite sustituir un límite externo sin reescribir validación. Un mock del cliente no prueba el servidor: las pruebas también arrancan un servidor local real y verifican respuestas. La UI se prueba mediante controles y resultado, no llamando setters privados.

## Publicación

El gestor es portable como carpeta estática. El catálogo del laboratorio necesita su servidor Node y no funciona por copiar solamente HTML/JS a GitHub Pages. Una versión pública puede enlazar una demostración de recursos estáticos explícita, pero no debe presentarla como la API de laboratorio con fallos controlados.

## Mejoras con contrato

Prioridad, exportación o sincronización requieren nuevas reglas y pruebas. La referencia no implementa cuentas, autorización, colaboración en pestañas ni respaldo remoto. Son límites funcionales concretos, no errores ocultos.

[Checklist](CHECKLIST.md) · [Índice](../README.md)
