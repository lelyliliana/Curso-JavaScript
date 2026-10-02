# Unidad 01 — Valores, tipos y variables

## Qué aprenderás
Distinguir primitivos y referencias, const y let, null y undefined, mutación y reasignación.

# 1. Primitivos

JavaScript tiene:
- string;
- number;
- bigint;
- boolean;
- undefined;
- symbol;
- null.

`null` es primitivo aunque `typeof null` devuelva `"object"` por una particularidad histórica.

# 2. Number

```js
const entero = 10;
const decimal = 10.5;
const infinito = Infinity;
const invalido = NaN;
```

Number no separa int y double como otros lenguajes.

# 3. NaN

```js
Number.isNaN(NaN) // true
NaN === NaN       // false
```

Usa `Number.isNaN` cuando quieras comprobar específicamente NaN.

# 4. undefined y null

`undefined` aparece como ausencia/no asignación en distintos contextos.

`null` suele usarse para ausencia intencional cuando el contrato lo define.

No los intercambies sin criterio.

# 5. const

```js
const persona = { nombre: "Ana" };
persona.nombre = "Laura";
```

Esto es válido.

const impide reasignar la variable; no vuelve inmutable al objeto.

# 6. let

```js
let contador = 0;
contador += 1;
```

Úsalo cuando necesitas reasignación.

Al comenzar, prefiere const por defecto y let cuando la reasignación sea necesaria.

# 7. Referencias

```js
const a = { valor: 1 };
const b = a;

b.valor = 2;
console.log(a.valor); // 2
```

Ambas variables apuntan al mismo objeto.

# 8. typeof y arrays

```js
typeof [] // "object"
Array.isArray([]) // true
```

Array.isArray es la comprobación apropiada para arrays.

# 9. BigInt

```js
const grande = 9007199254740993n;
```

Sirve para enteros grandes en casos apropiados.

No mezcles BigInt y Number aritméticamente sin una decisión/conversión explícita.

# 10. Práctica guiada

Predice tipo/comprobación apropiada de:
- null;
- [];
- {};
- NaN;
- 10n;
- función.

Después verifica.

# 11. Errores frecuentes
- const = inmutable;
- null y undefined como idénticos;
- typeof array = array;
- NaN === NaN;
- mezclar Number y BigInt.

# 12. Reto
Tabla de valores con typeof, comprobación adecuada y explicación.

# 13. Autoevaluación
1. ¿const impide mutar objeto?
2. ¿typeof null?
3. ¿Cómo detectar Array?
4. ¿NaN se compara consigo mismo?
5. ¿null vs undefined?
6. ¿Number tiene int separado?

# 14. Checklist
- [ ] Distingo primitivos/referencias.
- [ ] Uso const/let.
- [ ] Comprendo ausencia.
- [ ] Detecto arrays/NaN.

Continúa con operadores.
