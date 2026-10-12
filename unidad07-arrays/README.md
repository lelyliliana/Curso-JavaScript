# Unidad 07: Arrays y transformaciones

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Elegir operaciones mutantes/no mutantes y usar map, filter, find, some, every y reduce con intención.

# 1. Array

```js
const ventas = [10, 20, 15];
```

Es un objeto ordenado por índices y puede contener valores de distintos tipos, aunque mezclar dominios suele dificultar el diseño.

# 2. Mutantes

```js
push
pop
shift
unshift
splice
sort
reverse
```

modifican el array sobre el que actúan.

Eso no los hace malos. Debes saber cuándo el cambio es intencional.

# 3. No mutantes

```js
slice
map
filter
concat
toSorted
toReversed
toSpliced
```

producen un nuevo resultado bajo sus contratos.

Los métodos `toSorted/toReversed/toSpliced` son alternativas modernas no mutantes a operaciones clásicas.

# 4. map

Transforma uno a uno:

```js
const dobles = numeros.map(n => n * 2);
```

El resultado tiene la misma cantidad de elementos que la fuente.

No uses map solo por efectos secundarios.

# 5. filter

```js
const activos = usuarios.filter(u => u.activo);
```

Conserva elementos que cumplen una condición.

# 6. find

```js
const usuario = usuarios.find(u => u.id === id);
```

Devuelve el primer elemento o `undefined`.

No confundir con filter, que devuelve array.

# 7. some/every

```js
numeros.some(n => n < 0)
numeros.every(n => n >= 0)
```

Responden preguntas booleanas y pueden detenerse cuando ya conocen la respuesta.

# 8. reduce

```js
const total = ventas.reduce(
  (acumulado, valor) => acumulado + valor,
  0
);
```

Es potente, pero no conviertas cualquier pipeline en un reduce difícil de leer.

A veces map/filter + una operación clara es mejor.

# 9. sort

```js
[10, 2, 30].sort()
```

ordena por conversión a strings de forma predeterminada, por lo que el resultado numérico puede sorprender.

Para números:

```js
datos.toSorted((a, b) => a - b)
```

# 10. Copia superficial

```js
const copia = [...usuarios];
```

Copia el array, **no clona profundamente los objetos internos**.

# 11. Práctica guiada

Ventas con `{producto,total,pagada}`:

1. filtra pagadas;
2. extrae totales;
3. suma;
4. busca primera >100;
5. comprueba si todas son positivas.

# 12. Errores frecuentes

- map para side effects;
- find esperando array;
- sort numérico sin comparador;
- spread como deep clone;
- reduce ilegible;
- mutar accidentalmente estado compartido.

# 13. Reto
Genera reporte de ventas sin modificar el array original y justifica cada método.

# 14. Autoevaluación

1. ¿push muta?
2. ¿map cambia cantidad?
3. ¿find si no encuentra?
4. ¿some/every?
5. ¿sort numérico por defecto?
6. ¿spread clona objetos internos?

# 15. Checklist

- [ ] Distingo mutación.
- [ ] Elijo método.
- [ ] Ordeno correctamente.
- [ ] Mantengo transformaciones claras.

Continúa con objetos.



## Laboratorio completo: Arrays sin mutar el origen

### Modelo y contrato

map transforma cada elemento, filter selecciona y reduce combina con un acumulador. No son tres formas intercambiables de escribir cualquier ciclo. El valor inicial de reduce permite definir comportamiento para arrays vacíos. sort modifica su array; copiar primero evita cambiar el orden de notas.

La copia con spread es superficial: si los elementos son objetos, las dos colecciones conservan referencias a los mismos objetos. El comparador numérico evita el orden lexicográfico predeterminado. No confundas un método que devuelve otro array con una garantía de que tu callback no mutó objetos. Debes revisar también lo que hace la función pasada al método. Para buscar un elemento, find devuelve uno o undefined; filter devuelve una colección que puede estar vacía.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** notas conserva [2,4,5,3], aprobadas [4,5,3], dobles [4,8,10,6], suma 14 y ordenadas [2,3,4,5].

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const notas = [2, 4, 5, 3];
const aprobadas = notas.filter(nota => nota >= 3);
const dobles = notas.map(nota => nota * 2);
const suma = notas.reduce((total, nota) => total + nota, 0);
const ordenadas = [...notas].sort((a, b) => a - b);
mostrar({ notas, aprobadas, dobles, suma, ordenadas });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Prueba [10,2,30] con sort sin comparador y con comparador. Implementa promedio para lista vacía y no vacía. Comprueba si el origen cambió.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 06: Scope, closures y modelo de ejecución](../unidad06-scope-closures/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 08: Objetos, propiedades y referencias](../unidad08-objetos/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2007%20%E2%80%94%20Arrays%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad07-arrays%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
