# Proyecto final: aplicación de estudio sin framework

[Lección](README.md) · [Índice](../README.md) · [Referencia](../ejemplos/gestor-tareas/README.md)

## Propósito

Desarrolla un gestor de tareas ficticias de estudio y un catálogo de recursos con la API local del curso. Las dos partes deben conservar límites claros: las tareas se guardan localmente; el catálogo es de lectura y permite probar fallos. Puedes mantener dos páginas enlazadas, sin fingir que hay un servicio remoto de tareas.

## Requisitos

1. Agregar, editar, completar, eliminar y filtrar tareas por id.
2. Validar títulos, límites y colecciones antes de aceptar entradas.
3. Buscar con una política documentada de capitalización/tildes.
4. Persistir JSON versionado en una clave propia, informando fallos.
5. Cargar recursos de la API controlada con estados carga/datos/vacío/error.
6. Cancelar, limitar espera y proteger la última solicitud frente a respuestas antiguas.
7. Representar datos como texto y conservar controles accesibles.
8. Separar dominio, límites externos, vista y coordinación.
9. Probar reglas puras, cliente/API y recorridos principales.
10. Documentar ejecución, arquitectura, casos y límites.

## Etapas

Define contratos y wireframe; implementa dominio con pruebas; construye HTML semántico; conecta acciones y render; añade Storage; desarrolla cliente de red; verifica fallos y foco; revisa contenido largo y ancho estrecho; documenta y publica si tienes hosting estático.

La API local pertenece al servidor Node del laboratorio. Un hosting estático no añade /api/catalogo: si publicas tareas y catálogo juntos, documenta cómo provees la API o una versión explícita de datos estáticos sin prometer los escenarios del servidor.

## Aceptación

| Condición | Resultado |
|---|---|
| Entradas normales/límites/invalidas | Cumplen contrato o se rechazan sin alterar colección original |
| Lista filtrada | Acciones afectan id correcto |
| Edición cancelada | Conserva tarea original |
| Datos corruptos | Carga rechazada y almacenamiento no borrado durante lectura |
| Guardado fallido | Estado en memoria e información honesta |
| Red 404/500/JSON/esquema inválido | Categoría de fallo y UI sin datos inventados |
| Red lenta cancelada/timeout | Cierre coherente, controles disponibles y timer limpio |
| Solicitudes superpuestas | La última intención domina UI |
| Texto con marcado | Se muestra como texto |
| Teclado y reflujo | Todas las acciones disponibles, foco y texto sin recorte |

## Entrega

Código, README con pasos de ejecución, pruebas reproducibles y registro de casos. Si publicaste, añade URL real y alcance de la versión pública. Usa [plantilla](PLANTILLA_PROYECTO.md), [rúbrica](RUBRICA.md) y [checklist](CHECKLIST.md). No marques como hecha una prueba que no realizaste.

[Solución razonada](SOLUCIONES.md) · [Índice](../README.md)
