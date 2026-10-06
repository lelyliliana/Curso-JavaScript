# Solución razonada: Construir DOM seguro

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad13-eventos/README.md)

## Decisión principal

Usa createElement y textContent para cada nombre. lista.querySelectorAll("img").length debe ser 0. Limpiar no borra la variable de datos; conservar un array como origen permite reconstruir de manera reproducible.

## Referencia ejecutable

Dos elementos de lista. El segundo muestra literalmente la cadena con <img>; no crea una imagen.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Recrear nodos de texto

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const lista=document.querySelector('#lista');
const nombres=['Ana','<img src=x onerror=alert(1)>','Luis'];
function render(){
  lista.replaceChildren();
  for(const nombre of nombres){const li=document.createElement('li');li.textContent=nombre;lista.append(li);}
}
render(); render();
console.log(lista.children.length, lista.querySelectorAll('img').length); // 3, 0
```

Dos renders siguen dejando tres elementos, porque cada uno reemplaza la colección previa. textContent no interpreta el segundo nombre como HTML. El comportamiento se comprueba inspeccionando nodos, no solo mirando una alerta: si no aparece una alerta eso no demuestra por sí solo que no se creó una imagen. El ejemplo requiere conservar el ul con id lista en el HTML.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad13-eventos/README.md)
