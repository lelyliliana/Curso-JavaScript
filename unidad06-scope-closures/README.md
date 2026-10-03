# Unidad 06 — Scope, closures y modelo de ejecución

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Comprender alcance léxico, hoisting a nivel práctico, temporal dead zone, call stack y closures.

# 1. Scope de bloque

```js
if (true) {
  const mensaje = "hola";
}

console.log(mensaje); // ReferenceError
```

let/const pertenecen al bloque.

# 2. Scope de función

Parámetros y variables declaradas dentro de una función no están disponibles fuera.

Las funciones anidadas pueden acceder al entorno exterior por alcance léxico.

# 3. var

`var` tiene scope de función, no de bloque, y reglas de hoisting distintas.

Código antiguo lo usa mucho.

Para código nuevo del curso, preferimos const/let salvo que estudiemos comportamiento legacy.

# 4. Hoisting sin mitos

Declaraciones se procesan antes de ejecutar el cuerpo, pero **no todo se comporta como si “se moviera arriba” de la misma forma**.

```js
console.log(x);
let x = 1;
```

lanza ReferenceError por la temporal dead zone.

# 5. Declaración de función

```js
saludar();

function saludar() {
  console.log("hola");
}
```

funciona por cómo se crea la declaración durante instanciación del entorno.

No generalices esto a una función asignada con const antes de inicializarla.

# 6. Call stack

```text
main
└── procesar
    └── validar
```

Cada llamada añade un frame conceptual; al retornar, sale.

Un error muestra stack trace que ayuda a reconstruir llamadas.

# 7. Closure

```js
function crearContador() {
  let n = 0;

  return () => {
    n += 1;
    return n;
  };
}
```

La función retornada conserva acceso al entorno léxico donde fue creada, incluso después de terminar `crearContador`.

# 8. Contadores independientes

```js
const a = crearContador();
const b = crearContador();
```

Cada llamada crea un entorno diferente.

`a()` no incrementa el estado de b.

# 9. Closure no es “copiar valores”

Si la variable capturada cambia, la closure observa ese binding según reglas del lenguaje.

# 10. Memoria

Una closure puede mantener referencias vivas mientras la función siga alcanzable.

No significa que closures sean “malas”, pero evita retener estructuras enormes accidentalmente.

# 11. Práctica guiada

Crea:
- contador;
- generador de IDs local;
- función de configuración que retorna validador.

Dibuja qué variables conserva cada closure.

# 12. Errores frecuentes
- let disponible fuera del bloque;
- “hoisting mueve código” como explicación total;
- usar variable let antes de inicialización;
- pensar closure = variable global;
- compartir estado accidentalmente.

# 13. Reto
Fábrica de contadores independientes con incremento, lectura y reset sin exponer directamente n.

# 14. Autoevaluación
1. ¿let tiene scope de bloque?
2. ¿var?
3. ¿Qué es TDZ?
4. ¿Qué representa call stack?
5. ¿Qué conserva una closure?
6. ¿Dos fábricas comparten n?

# 15. Checklist
- [ ] Comprendo scope.
- [ ] Distingo var/let/const.
- [ ] Leo stack.
- [ ] Diseño closures.

Continúa con arrays.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 05 — Funciones como valores](../unidad05-funciones/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 07 — Arrays y transformaciones](../unidad07-arrays/README.md)
