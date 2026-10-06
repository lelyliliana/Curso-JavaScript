# Unidad 01: Valores, tipos y variables

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

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



## Laboratorio completo: Valores y variables

### Modelo y contrato

Una variable es una vinculación con un valor. const impide reasignar esa vinculación; no congela automáticamente un objeto. datos conserva la misma referencia y permite modificar activo. let admite reasignación cuando el proceso necesita un valor cambiante. No utilices let por costumbre para todos los datos.

typeof ofrece categorías del lenguaje, pero typeof null devuelve object por una particularidad histórica. Para comprobar null utiliza igualdad estricta con null. Los números ordinarios usan representación de coma flotante: no asumas precisión exacta para cualquier entero o decimal. NaN tiene tipo number aunque represente un resultado numérico inválido. Las reglas del dominio deben comprobar también finitud, rango y, cuando importe, enteros seguros.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** nombre Ana, intentos 2, tipo number, activo false y tipoNull object.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const nombre = 'Ana';
let intentos = 1;
intentos += 1;
const datos = { nombre, activo: true };
datos.activo = false;
mostrar({ nombre, intentos, tipo: typeof intentos, activo: datos.activo, tipoNull: typeof null });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Intenta reasignar nombre dentro de un experimento separado y observa el error. Cambia datos.nombre sin reasignar datos. Compara typeof NaN, Number.isNaN(NaN) y Number.isFinite(Infinity).

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 00: Entorno, consola y primer JavaScript](../unidad00-entorno/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 02: Operadores, coerción y comparación](../unidad02-operadores/README.md)
