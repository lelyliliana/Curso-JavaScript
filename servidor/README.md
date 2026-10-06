# Servidor de laboratorio y API controlada

[Índice](../README.md) · [Entorno](../docs/ENTORNO.md) · [Continuar: Fetch](../unidad20-fetch/README.md)

Inicia desde la raíz con node servidor/server.js o npm start. Escucha en 127.0.0.1:8000 por defecto y sirve los ejemplos y módulos del curso. No requiere dependencias externas. Mantén la terminal abierta; Ctrl+C lo detiene.

## Contrato de GET /api/catalogo

| escenario | HTTP | Cuerpo/comportamiento |
|---|---:|---|
| normal | 200 | Dos registros con id y titulo |
| vacio | 200 | Array vacío |
| http404 | 404 | Error JSON |
| http500 | 500 | Error JSON |
| jsoninvalido | 200 | Texto JSON incompleto |
| esquemainvalido | 200 | Objeto que no satisface el contrato de colección |
| lento | 200 | Los dos registros después de 800 ms si la conexión sigue abierta |

Los escenarios se seleccionan con query, por ejemplo /api/catalogo?escenario=http500. Otros escenarios devuelven 400 y métodos distintos de GET, 405. El cliente distingue estado HTTP, análisis JSON y esquema; el timeout de los laboratorios es 400 ms, por lo que lento alcanza el límite si no se cancela antes.

## Recursos estáticos

Sirve HTML, CSS, JS, JSON, SVG y texto de la carpeta del curso, sin listados de directorio. Un directorio intenta resolver index.html. No sirve Markdown como HTML ni ofrece edición de archivos.

## Alcance

No es un backend de usuarios, autenticación, persistencia ni envío de correo. Su función es reproducir respuestas y tiempos para aprendizaje. Los GET no modifican datos y no se requiere CORS porque las páginas y API comparten origen. Un 404 esperado en este laboratorio no debe confundirse con un app.js ausente.

[Continuar con Fetch](../unidad20-fetch/README.md)
