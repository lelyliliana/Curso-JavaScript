# Solución razonada: async y await

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad20-fetch/README.md)

## Decisión principal

La secuencia tiene sentido cuando b depende de a. Un error debe conservar semántica: lanza, devuelve un resultado etiquetado o muestra un estado de fallo. Un valor inventado puede ocultar que la operación no se completó.

## Referencia ejecutable

a 2, b 5 y suma 7.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Secuencia con error visible

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
const esperar=valor=>Promise.resolve(valor);
async function resumen(){
 const a=await esperar(2);
 const b=await esperar(5);
 return {a,b,suma:a+b};
}
try { console.log(await resumen()); }
catch(error){console.error('No hay resumen válido:',error.message);}
```

El resultado sigue siendo 7, pero b se inicia después de obtener a. Si b depende de a (por ejemplo pedidos del usuario encontrado), la espera secuencial expresa esa dependencia. Para simular fallo sustituye la segunda operación por Promise.reject(new Error("Fallo simulado")); catch informa que no existe resumen válido. Devolver suma 0 ocultaría la diferencia entre un cálculo legítimo y un error.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad20-fetch/README.md)
