# Solución razonada: Conectar un módulo

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad01-tipos/README.md)

## Decisión principal

La ruta rota se detecta en Network antes de ejecutar. Un selector sin coincidencia devuelve null y escribir una propiedad sobre null produce una excepción. Corrige el selector o revisa por qué falta el elemento, sin ocultar un fallo de estructura con un try/catch global.

## Referencia ejecutable

La página muestra El módulo cargó correctamente. La consola muestra Hola, JavaScript.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Diagnosticar en la etapa correcta

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
// Con index.html servido por HTTP y un elemento #salida:
const salida = document.querySelector('#salida');
if (!salida) throw new Error('Falta #salida en este documento');
salida.textContent = 'Hola desde mi módulo';
```

Una ruta rota produce un recurso ausente en Network: el módulo no llega a ejecutarse. Una ruta correcta con querySelector de un id inexistente devuelve null; intentar asignar null.textContent provoca TypeError durante ejecución. La condición explícita permite informar una dependencia faltante. No convierte una ruta incorrecta en un problema del lenguaje.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad01-tipos/README.md)
