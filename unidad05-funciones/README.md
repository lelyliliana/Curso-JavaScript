# Unidad 05: Funciones como valores

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
  return numeros.reduce((total, numero) => total + numero, 0);
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



## Laboratorio completo: Funciones puras

### Modelo y contrato

Una función pura relaciona entradas con salida sin depender de estado externo mutable ni producir efectos como modificar DOM o guardar archivos. subtotal permite estudiar esa separación. Puede lanzar un error ante datos fuera del contrato: eso no convierte una entrada inválida en un subtotal real.

return devuelve un valor al llamador; console.log muestra información y normalmente devuelve undefined. Una función que solo imprime no entrega necesariamente el resultado necesario para otra operación. Las referencias a objetos se pasan como valores de referencia: modificar una propiedad puede afectar al mismo objeto visto por el llamador, mientras reasignar el parámetro no reasigna su variable. Para dinero real considera representación, redondeo y moneda; este ejercicio estudia funciones, no una contabilidad completa.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** dos 25 y ninguno 0.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
function subtotal(precio, cantidad) {
  if (!Number.isFinite(precio) || precio < 0 || !Number.isInteger(cantidad) || cantidad < 0) {
    throw new TypeError('Precio o cantidad inválidos');
  }
  return precio * cantidad;
}
mostrar({ dos: subtotal(12.5, 2), ninguno: subtotal(12.5, 0) });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Escribe descuento(subtotal,porcentaje) con porcentaje entre 0 y 100. Comprueba 0, 100 y fuera de rango. Mantén el cálculo separado de mostrar.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 04: Ciclos e iteración](../unidad04-ciclos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 06: Scope, closures y modelo de ejecución](../unidad06-scope-closures/README.md)
