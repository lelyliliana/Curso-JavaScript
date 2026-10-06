# Solución razonada: Entradas como texto

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad32-taller/README.md)

## Decisión principal

El resultado tiene cero img porque la API usada representa texto. Para URL analiza con URL y exige protocolo/destino admitidos. Evita filtros caseros que prometan sanitizar HTML completo.

## Referencia ejecutable

El texto <img src=x onerror=alert(1)> se muestra literalmente y no crea imágenes ni ejecuta alert.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Validar URL sin activarla

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
function admitirURL(texto){
 try {
  const url=new URL(texto);
  return url.protocol==='https:' ? url.href : null;
 } catch { return null; }
}
console.log(admitirURL('https://example.org/curso'));
console.log(admitirURL('javascript:alert(1)')); // null
console.log(admitirURL('esto no es una URL')); // null
```

La función admite URLs absolutas https y rechaza javascript sin crear un enlace activo. Admitir el protocolo no convierte el destino en confiable: una aplicación puede necesitar lista de dominios permitidos y restricciones adicionales. textContent resuelve la inserción de texto, pero no valida atributos href ni autenticación. Comprueba en Elements que la cadena de imagen sigue siendo texto y que no existe un nodo img: no basta con que una alerta no aparezca.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad32-taller/README.md)
