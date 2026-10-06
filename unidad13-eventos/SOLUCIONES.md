# Solución razonada: Eventos y delegación

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad14-formularios/README.md)

## Decisión principal

El listener del contenedor también atiende al nuevo botón. target puede ser span; closest encuentra el control. Registra una sola vez el listener de delegación, fuera del render que reconstruye la lista.

## Referencia ejecutable

Activar Elegir lectura muestra elegido lectura; Elegir robótica muestra robotica. Funciona con Enter en los botones.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Delegación sobre botones añadidos después

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const lista=document.querySelector('#lista');
const li=document.createElement('li');
const boton=document.createElement('button');
boton.type='button'; boton.dataset.id='3';
const span=document.createElement('span'); span.textContent='Elegir tercero';
boton.append(span); li.append(boton); lista.append(li);
// El listener del laboratorio ya estaba registrado en lista.
```

Al pulsar el span, event.target puede ser ese span. closest encuentra su botón ancestro y el listener obtiene data-id 3. event.currentTarget corresponde a lista, donde se registró el listener. No necesitas volver a registrar listeners para cada elemento añadido; sí comprobar que el botón encontrado pertenece al contenedor. El botón nativo conserva activación con teclado.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad14-formularios/README.md)
