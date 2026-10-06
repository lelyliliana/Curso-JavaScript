# Solución razonada: Scripts npm reproducibles

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad25-calidad/README.md)

## Decisión principal

El script test usa el runner nativo de Node. Ejecutar npm test no inicia el servidor del navegador ni publica la app. Cada script debe tener una responsabilidad y un nombre que la describa.

## Referencia ejecutable

suma 10. En la raíz, npm test ejecuta pruebas sin descargar dependencias del sitio.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Script y entorno que lo ejecuta

En package.json, test corresponde a node --test tests/*.test.js; npm test ejecuta ese comando desde la raíz del paquete. El runner de Node descubre los archivos de prueba declarados y devuelve salida no exitosa si un caso falla. npm no transforma por sí mismo el módulo del navegador ni corrige su import relativo. Aquí no hay dependencias npm que descargar; instalar una biblioteca para otra práctica añade una responsabilidad diferente, incluida su resolución y lockfile.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad25-calidad/README.md)
