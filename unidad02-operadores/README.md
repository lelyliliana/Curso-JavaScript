# Unidad 02: Operadores, coerción y comparación

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

Para los valores ordinarios de este curso, los demás son truthy, incluidos:
```js
[]  // truthy
{}  // truthy
"0" // truthy
```


Nota de compatibilidad: en navegadores existe una excepción heredada, `document.all`, que se convierte a false. No se usa en aplicaciones modernas ni en este curso.

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

```text
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
[] == false;
[] === false;
null == undefined;
null === undefined;
0 || 5;
0 ?? 5;
"" ?? "x";
"" || "x";
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



## Laboratorio completo: Coerción explícita

### Modelo y contrato

El operador + puede concatenar texto o sumar, según los valores y conversiones. Number convierte una cadena, pero Number('') produce 0: si una entrada vacía es inválida debes rechazarla antes de convertir. Una conversión exitosa no demuestra que el valor cumpla el contrato.

=== evita la coerción de la igualdad flexible, pero sigue necesitando comprender valores y referencias. Dos objetos distintos no son iguales por contener propiedades idénticas. || selecciona el segundo operando si el primero es falsy; ?? lo hace solo ante null o undefined. Por eso ?? conserva 0, false y una cadena vacía cuando esos valores son significativos. Los operadores devuelven operandos, no necesariamente booleanos. El ejemplo usa == únicamente para observar la diferencia; la lógica del proyecto usa contratos explícitos.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** sumaTexto "123", sumaNumero 15, vacio 0, igualFlexible true, igualEstricto false, defectoConOr 10 y defectoConNullish 0.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const entrada = '12';
mostrar({ sumaTexto: entrada + 3, sumaNumero: Number(entrada) + 3,
  vacio: Number(''), igualFlexible: 0 == '', igualEstricto: 0 === '',
  defectoConOr: 0 || 10, defectoConNullish: 0 ?? 10 });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Prueba cadenas "  ", "12abc" y "0". Diseña una conversión que admita un número finito entre 0 y 100 y rechace vacío, sufijos e Infinity.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 01: Valores, tipos y variables](../unidad01-tipos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 03: Decisiones y truthiness](../unidad03-decisiones/README.md)
