# Unidad 05 — Funciones como valores

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Diseñar funciones, distinguir declaraciones/expresiones/arrows y pasar comportamiento como argumento.

# 1. Declaración

```js
function sumar(a, b) {
  return a + b;
}
```

# 2. Expresión

```js
const sumar = function (a, b) {
  return a + b;
};
```

La función es un valor asignado a una variable.

# 3. Arrow

```js
const sumar = (a, b) => a + b;
```

No es solo una sintaxis más corta: las arrow functions no tienen su propio `this`, `arguments` ni pueden usarse como constructor con `new`.

Estudiaremos `this` con objetos/prototipos.

# 4. Funciones como argumentos

```js
function aplicar(valor, transformacion) {
  return transformacion(valor);
}

aplicar(5, n => n * 2);
```

Esto prepara callbacks y métodos funcionales.

# 5. Retornar funciones

```js
function multiplicador(factor) {
  return numero => numero * factor;
}

const doble = multiplicador(2);
```

Aquí aparece una closure, que veremos en la Unidad 06.

# 6. Parámetros default

```js
function saludar(nombre = "persona") {
  return `Hola, ${nombre}`;
}
```

El default se usa cuando el argumento es `undefined`, no cuando es null.

# 7. Rest

```js
function sumar(...numeros) {
  ...
}
```

Agrupa argumentos restantes en un array.

# 8. Objetos como argumentos

JavaScript pasa argumentos por valor. Para objetos, el valor copiado es una referencia.

Por eso una función puede mutar el mismo objeto:

```js
function renombrar(persona) {
  persona.nombre = "Ana";
}
```

Pero reasignar el parámetro no reasigna la variable externa.

# 9. Función pura

```js
const iva = precio => precio * 0.19;
```

Misma entrada, mismo resultado y sin efectos externos observables.

Son fáciles de probar/componer.

# 10. Efectos

Manipular DOM, escribir storage o llamar red son efectos.

No son “malos”; conviene separarlos de cálculos puros cuando mejora diseño/testabilidad.

# 11. Práctica guiada

Crea funciones para:
- validar;
- transformar;
- calcular;
- formatear.

Después compón un flujo sin DOM.

# 12. Errores frecuentes
- arrow para métodos que necesitan this dinámico sin comprenderlo;
- función que hace diez tareas;
- default esperando cubrir null;
- mutar argumentos sin contrato;
- imprimir en vez de retornar.

# 13. Reto
Pipeline de transformación compuesto por funciones pequeñas, con al menos una función recibida como argumento.

# 14. Autoevaluación
1. ¿Función puede ser valor?
2. ¿Arrow tiene this propio?
3. ¿Default se usa con null?
4. ¿Qué hace rest?
5. ¿Cómo se pasa un objeto?
6. ¿Qué es función pura?

# 15. Checklist
- [ ] Diseño funciones.
- [ ] Distingo arrow.
- [ ] Paso comportamiento.
- [ ] Separo cálculos/efectos.

Continúa con scope y closures.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 04 — Ciclos e iteración](../unidad04-ciclos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 06 — Scope, closures y modelo de ejecución](../unidad06-scope-closures/README.md)
