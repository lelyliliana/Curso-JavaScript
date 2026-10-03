# Unidad 02 — Operadores, coerción y comparación

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Comprender coerción, igualdad estricta, truthiness, nullish coalescing y operadores lógicos que retornan valores.

# 1. Igualdad

```js
0 === false // false
0 == false  // true
```

`==` realiza coerciones definidas por reglas del lenguaje.

Como base, usa `===` y `!==` salvo que tengas una razón explícita para coerción abstracta.

# 2. Conversión explícita

```js
Number("42")  // 42
String(42)    // "42"
Boolean(1)    // true
```

Preferir conversión explícita hace visible la intención.

# 3. Number desde texto

```js
Number("")    // 0
Number("abc") // NaN
```

Por eso convertir no equivale a validar un formulario.

# 4. Truthy/falsy

Falsy:
```text
false
0
-0
0n
""
null
undefined
NaN
```

Todo lo demás es truthy, incluidos:
```js
[]  // truthy
{}  // truthy
"0" // truthy
```

# 5. && y ||

No siempre retornan boolean.

```js
"hola" && 42 // 42
"" || "default" // "default"
```

Evalúan y retornan operandos según truthiness y cortocircuito.

# 6. Problema con ||

```js
const cantidad = entrada || 10;
```

Si entrada es 0, obtienes 10 aunque 0 pueda ser válido.

# 7. Nullish coalescing

```js
const cantidad = entrada ?? 10;
```

Usa fallback solo cuando entrada es `null` o `undefined`.

No confundir con ||.

# 8. Optional chaining

```js
const ciudad = usuario?.direccion?.ciudad;
```

Evita fallar si una referencia intermedia es nullish.

No debe ocultar un dato obligatorio que debería validarse.

# 9. Operadores numéricos

```js
+ - * / % **
```

Cuidado: `+` también concatena Strings:

```js
"2" + 3 // "23"
"2" * 3 // 6
```

Eso demuestra coerción, no una recomendación de estilo.

# 10. Práctica guiada

Predice antes de ejecutar:
```js
[] == false
[] === false
null == undefined
null === undefined
0 || 5
0 ?? 5
"" ?? "x"
"" || "x"
```

Después explica la regla, no memorices la tabla.

# 11. Errores frecuentes
- == por costumbre;
- asumir &&/|| booleanos;
- usar || cuando 0/"" son válidos;
- convertir y asumir que ya validaste;
- optional chaining para ocultar errores de modelo.

# 12. Reto
Normaliza entradas de un formulario distinguiendo vacío, cero, null y valor inválido.

# 13. Autoevaluación
1. ¿=== hace coerción?
2. ¿[] es truthy?
3. ¿|| vs ???
4. ¿Qué devuelve &&?
5. ¿Number("abc")?
6. ¿Para qué ?.?

# 14. Checklist
- [ ] Comparo estrictamente.
- [ ] Comprendo truthiness.
- [ ] Uso ?? correctamente.
- [ ] Convierto explícitamente.

Continúa con decisiones.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 01 — Valores, tipos y variables](../unidad01-tipos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 03 — Decisiones y truthiness](../unidad03-decisiones/README.md)
