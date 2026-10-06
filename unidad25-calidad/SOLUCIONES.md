# Solución razonada: Calidad mediante contratos

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad26-pruebas/README.md)

## Decisión principal

El contrato del ejemplo admite dígitos tras trim; no admite signos ni decimales. El formato del archivo no cambia esas decisiones. Una prueba debe señalar la entrada y salida esperada, no comprobar simplemente que la función se llamó.

## Referencia ejecutable

0 y 12 se admiten; vacío, 12abc y 101 se rechazan.

Los archivos de [ejemplo](ejemplo/index.html) contienen la versión completa. Revisa HTML, módulo de entrada y los imports cuando existan. Un fragmento de la lección no incluye necesariamente todo el documento ni todos los elementos que consulta.

## Desarrollo de la actividad

### Sintaxis, estilo y contrato

El fragmento siguiente se integra en el archivo o contexto indicado; no se concatena con todas las alternativas de la lección.

```js
import { analizarCantidad } from '../../lib/dominio.js';
for(const texto of [' 12 ','+12','12.0','99','100','101']){
 console.log(texto,analizarCantidad(texto));
}
```

Integrado en app.js de esta unidad: 12 con espacios exteriores es válido; +12 y 12.0 se rechazan porque el contrato exige dígitos completos, no porque Number no pudiera convertirlos. 99 y 100 se admiten; 101 se rechaza. Un formatter cambia presentación, un comprobador de sintaxis detecta código no analizable, un linter detecta patrones configurados y una prueba de comportamiento verifica la regla. Una mala regla de negocio puede pasar los tres primeros.

### Verificación

Registra el resultado con la entrada indicada y contrástalo con la predicción. Si cambias el contrato, actualiza primero los casos esperados y explica por qué. Conserva el ejemplo base para distinguir una extensión de una corrección.

## Comparar tu resultado

Una solución con otros nombres o textos puede ser válida si conserva el contrato. Explica entradas, transformación, salida y efectos. Si solo escribiste funciona, agrega el caso y la razón: otra persona debe poder repetirlo.

[Lección](README.md) · [Índice](../README.md) · [Siguiente unidad](../unidad26-pruebas/README.md)
