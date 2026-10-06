# Comprobar el curso y los proyectos

[Índice del curso](../README.md) · [Preparar entorno](ENTORNO.md)

## Código y reglas de datos

Desde la carpeta del curso, con Node.js 24 o posterior:

```bash
npm run check
npm test
```

No es necesario instalar paquetes npm: estas comprobaciones usan módulos incluidos en Node. check revisa sintaxis de archivos y fragmentos JavaScript de las lecciones, importaciones relativas, enlaces locales y la presencia de las 34 unidades con prácticas y soluciones. No comprueba disponibilidad de páginas externas ni sustituye la revisión conceptual.

Los tests prueban límites de entrada, CRUD sin mutaciones, identidad de tareas, filtros, JSON versionado, almacenamiento corrupto, contratos de respuesta y categorías de error usando el servidor real. Un resultado verde cubre esos casos; no demuestra ausencia de todos los errores posibles.

## Prueba en navegador

Se utiliza Python 3.12 o posterior y Firefox automatizado mediante Playwright. Los paquetes de esta sección son herramientas de comprobación; el estudiante puede abrir los ejemplos sin instalarlos.

```bash
python -m pip install -r tests/requirements.txt
python -m playwright install firefox
python tests/navegador.py
```

En Ubuntu, si faltan bibliotecas del navegador, consulta el mensaje de Playwright y ejecuta `python -m playwright install --with-deps firefox`. En Windows puedes usar `py` en lugar de `python`; en Ubuntu/macOS, `python3`. El script inicia un servidor en un puerto libre, lo cierra al finalizar y utiliza un perfil temporal sin tocar tus tareas personales.

Se abren los 32 laboratorios y ambas aplicaciones. Se verifican resultados observables, formularios, delegación, estados de red, cancelación, solicitud más reciente, edición y filtros, recuperación tras recarga, errores de almacenamiento y texto que contiene marcado. También se comprueba desbordamiento horizontal a 320, 768 y 1440 píxeles, con tamaño de texto normal y duplicado.

## Integración continua

El [flujo de comprobación](../.github/workflows/verificar.yml) ejecuta los mismos comandos en Ubuntu, Windows y macOS. Firefox es el navegador automatizado de referencia; antes de entregar un proyecto conviene recorrerlo también en los navegadores reales de sus usuarios.

Las comprobaciones automáticas no certifican accesibilidad completa. Recorre los controles con teclado, comprueba el foco y escucha los anuncios con lector de pantalla. Comprueba que un fallo de guardado se informe sin prometer persistencia.
