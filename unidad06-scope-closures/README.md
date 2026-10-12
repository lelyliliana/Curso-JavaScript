# Unidad 06: Scope, closures y modelo de ejecución

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



## Laboratorio completo: Closures independientes

### Modelo y contrato

La función devuelta conserva acceso al entorno donde fue creada. Cada llamada a crearContador crea una vinculación valor distinta. El contador a no comparte ese estado con b. Una closure no es una copia congelada de cada valor: accede a las vinculaciones de su entorno cuando se ejecuta.

Scope es el alcance donde una vinculación puede consultarse y no equivale a duración de ejecución de una función. let y const tienen alcance de bloque y una zona temporal en la que no pueden leerse antes de inicializarse. No expliques hoisting como si todo el código se moviera físicamente al principio: las declaraciones tienen comportamientos distintos. Cuando una función asíncrona o un callback lee estado, analiza qué entorno conserva y cuándo cambia.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** El array resultante es [1,2,11,3,12].

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
function crearContador(inicio = 0) {
  let valor = inicio;
  return () => ++valor;
}
const a = crearContador();
const b = crearContador(10);
mostrar([a(), a(), b(), a(), b()]);
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Crea un tercer contador desde 100 y alterna llamadas. Después implementa reiniciar mediante un objeto con métodos, conservando estado privado en la closure.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 05: Funciones como valores](../unidad05-funciones/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 07: Arrays y transformaciones](../unidad07-arrays/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2006%20%E2%80%94%20Scope%2C%20closures%20y%20ejecuci%C3%B3n%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad06-scope-closures%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
