# Catálogo de referencia con red controlada

[Índice](../../README.md) · [Fetch](../../unidad20-fetch/README.md) · [Siguiente: cancelación](../../unidad21-errores-red/README.md)

Inicia el servidor del curso y abre http://127.0.0.1:8000/ejemplos/app-referencia/. Selecciona normal, vacío, HTTP 404/500, JSON/esquema inválido o respuesta lenta. La API es la del laboratorio; un servidor únicamente estático no ofrece ese endpoint.

app.js conecta cliente y UI compartidos. El cliente valida respuesta y datos y distingue fallos; la UI comunica estados, usa texto y evita que una carga anterior sobrescriba otra. Cancelar devuelve foco al botón de carga si el control cancelado lo tenía.

La referencia anterior consumía usuarios de un servicio público. Esta versión conserva su carpeta y ahora usa recursos ficticios de la API local para reproducir todas las condiciones. api.js mantiene el nombre exportado cargarUsuarios por compatibilidad, pero su contrato devuelve recursos con id/titulo; lee el contrato actual antes de reutilizarlo. ui.js ofrece auxiliares de presentación; el controlador actual usa red-ui.js compartido.

[Practicar estados](../../unidad22-estados-ui/PRACTICA.md)
