# Entorno en Ubuntu, Windows y macOS

[Índice](../README.md) · [Unidad 00](../unidad00-entorno/README.md) · [Siguiente: valores y variables](../unidad01-tipos/README.md)

## Navegador y editor

Utiliza un navegador actual y un editor como VS Code. Puedes conservar la instalación del curso de HTML/CSS. Abre una carpeta del proyecto y utiliza Console, Network y Elements para observar ejecución y recursos. Los nombres de paneles cambian entre Firefox, Chrome, Edge y Safari.

Descarga el curso con Code > Download ZIP y extrae la carpeta, o clónalo con Git si conoces el procedimiento. GitHub muestra archivos de código; el HTML se ejecuta desde tu copia local mediante un servidor.

## Node.js 24 LTS

El curso utiliza Node.js 24 LTS para el servidor de laboratorio y el runner de pruebas. JavaScript del navegador y Node comparten lenguaje, pero ofrecen APIs diferentes: document no existe por defecto en Node. No necesitas un framework ni paquetes de producción.

1. Visita [la descarga oficial](https://nodejs.org/en/download) y selecciona la rama 24 LTS correspondiente a tu sistema y arquitectura.
2. En Windows puedes utilizar el instalador .msi; en macOS el .pkg. Sigue su asistente y abre una terminal nueva al terminar.
3. En Ubuntu, utiliza uno de los métodos documentados en la página oficial (gestor de versiones o binario Linux). Comprueba arquitectura y procedencia; el paquete del sistema puede corresponder a otra rama. No copies un script de instalación de una fuente desconocida.
4. Ejecuta `node --version` y luego `npm --version` por separado. Node debe indicar v24.x o una rama posterior compatible; las pruebas del curso usan 24.
5. Si no se reconoce node, revisa instalación y PATH en una terminal nueva antes de modificar el código.

## Iniciar el curso

1. Abre la carpeta raíz en VS Code.
2. Abre su terminal integrada (PowerShell en Windows, terminal habitual en Ubuntu/macOS).
3. Ejecuta `node servidor/server.js` o `npm start`.
4. Conserva la terminal abierta. El mensaje indica http://127.0.0.1:8000/unidad00-entorno/ejemplo/.
5. Abre esa dirección en tu navegador.
6. Edita app.js de la unidad, guarda y recarga. Comprueba Console y la salida visible.
7. Para detener el servidor usa Ctrl+C en la terminal.

No es necesario ejecutar npm install: el servidor y las pruebas de Node usan módulos incorporados. El servidor solo escucha en loopback y es una herramienta de laboratorio, no un servicio de producción.

## Si el puerto está ocupado

Detén el proceso anterior si es tu servidor, o usa otro puerto. Configura solo la variable PORT para este comando:

| Terminal | Configurar | Iniciar después |
|---|---|---|
| Bash (Ubuntu/macOS) | `export PORT=8001` | `node servidor/server.js` |
| PowerShell (Windows) | `$env:PORT = '8001'` | `node servidor/server.js` |

Utiliza el mismo puerto en la URL. Para volver al defecto, elimina la variable (`unset PORT` en Bash o `Remove-Item Env:PORT` en PowerShell). No hace falta abrir puertos del router ni habilitar acceso desde Internet.

## Recorrer ejemplos

Cada unidad 00 a 31 tiene ejemplo/index.html, styles.css y app.js. Los ejemplos de red importan lib/cliente.js y lib/red-ui.js y requieren la API de este servidor. Si utilizas Live Preview o un servidor estático diferente, los módulos estáticos pueden cargar, pero /api/catalogo no existe allí.

La app final puede servirse independientemente como carpeta estática: ejemplos/gestor-tareas contiene todos sus módulos. También puedes abrirla mediante http://127.0.0.1:8000/ejemplos/gestor-tareas/. Usa un origen estable para comprobar localStorage: cambiar puerto cambia el almacenamiento visible.

## Comprobar

Desde la raíz ejecuta `npm test` para reglas y API; ejecuta `npm run check` para rutas, navegación y sintaxis. Las pruebas de navegador opcionales están en [VERIFICACION.md](VERIFICACION.md). No necesitas instalarlas para estudiar el curso.

[Volver a la unidad 00](../unidad00-entorno/README.md)
