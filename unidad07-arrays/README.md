# Unidad 07 — Arrays y transformaciones

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


---

## Continuar el curso

- **Unidad anterior:** [Unidad 06 — Scope, closures y modelo de ejecución](../unidad06-scope-closures/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 08 — Objetos, propiedades y referencias](../unidad08-objetos/README.md)
