# Solución razonada: Clase con estado propio

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad12-dom/README.md)

## Decisión principal

El constructor debe rechazar entradas fuera del dominio. reiniciar modifica el campo de esa instancia. bind(a) fija el receptor para una llamada posterior; no es necesario cuando llamas a.incrementar() normalmente.

## Referencia ejecutable

primero 1, segundo 11, a 1 y b 11.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Receptor y campo privado

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
class Contador {
  #valor; #inicio;
  constructor(inicio=0) {
    if(!Number.isInteger(inicio) || inicio<0) throw new RangeError('Inicio inválido');
    this.#valor=inicio; this.#inicio=inicio;
  }
  incrementar(){return ++this.#valor;}
  reiniciar(){this.#valor=this.#inicio; return this.#valor;}
}
const a=new Contador(10);
const ligada=a.incrementar.bind(a);
console.log(ligada(), a.reiniciar()); // 11, 10
```

Extraer a.incrementar y llamarla como función independiente pierde el receptor; this es undefined en modo estricto y el acceso al campo falla. bind(a) crea una función que conserva ese receptor. El campo privado exige una instancia compatible: copiar un método a un objeto arbitrario no copia su almacenamiento privado. Una entrada negativa o fraccionaria debe rechazarse antes de construir el contador.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad12-dom/README.md)
