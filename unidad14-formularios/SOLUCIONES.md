# Solución razonada: Validar un formulario

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad15-accesibilidad-dinamica/README.md)

## Decisión principal

required/minlength rechazan algunos casos antes de submit, y trim detecta espacios. Comprueba también longitud máxima en la regla cuando corresponda. No uses solo alert: conserva el error asociado y un foco que permita corregir.

## Referencia ejecutable

Espacios no cuentan como nombre válido. Ana produce nombre Ana y guardadoEnServidor false. No hay envío ni almacenamiento.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Límite coherente en campo y regla

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
// Añade maxlength="40" al input #nombre del HTML.
function validarNombre(valor){
  const texto=valor.trim();
  return texto.length>=2 && texto.length<=40
    ? {ok:true,valor:texto} : {ok:false,error:'Nombre de 2 a 40 caracteres'};
}
console.log(['','A','  ',' Ana ','x'.repeat(41)].map(validarNombre));
```

Los tres primeros casos se rechazan; Ana se normaliza; 41 caracteres se rechazan. La validación HTML puede impedir el submit antes de tu listener, por ejemplo ante required o minlength. Para observar la validación de espacios usa dos espacios y analiza el mensaje de la regla propia. maxlength es ayuda de interfaz, no validación de servidor; una petición externa no está obligada a respetarlo.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad15-accesibilidad-dinamica/README.md)
