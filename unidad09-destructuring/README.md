# Unidad 09: Destructuring, spread y rest

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Extraer datos, construir copias superficiales y diferenciar spread de rest según contexto.

# 1. Destructuring de objeto

```js
const usuario = {
  nombre: "Ana",
  edad: 30
};

const { nombre, edad } = usuario;
```

Extrae propiedades por nombre.

# 2. Renombrar/default

```js
const {
  nombre: nombreVisible,
  rol = "usuario"
} = usuario;
```

El default se aplica cuando el valor es `undefined`, no cuando es null.

# 3. Array

```js
const [primero, segundo] = datos;
```

Depende de posición.

Puedes omitir posiciones:

```js
const [, segundo] = datos;
```

# 4. Rest en destructuring

```js
const { password, ...publico } = usuario;
```

`publico` contiene las demás propiedades propias enumerables copiadas según reglas del spread/rest de objeto.

No uses esto como mecanismo de seguridad si el objeto puede tener otros campos sensibles no previstos.

# 5. Spread de objeto

```js
const actualizado = {
  ...usuario,
  activo: false
};
```

El orden importa: la propiedad posterior sobrescribe la anterior.

# 6. Spread de array

```js
const combinado = [...a, ...b];
```

Crea un array nuevo superficial.

# 7. Rest en parámetros

```js
function sumar(...numeros) {
  return numeros.reduce((a, n) => a + n, 0);
}
```

Aquí rest **recoge** argumentos.

# 8. Spread en llamada

```js
Math.max(...numeros)
```

Aquí spread **expande** elementos como argumentos.

Para colecciones enormes, expandir todos los elementos como argumentos puede exceder límites prácticos del motor.

# 9. Actualización anidada

```js
const actualizado = {
  ...usuario,
  direccion: {
    ...usuario.direccion,
    ciudad: "Cali"
  }
};
```

Cada nivel que quieres reemplazar debe copiarse.

# 10. structuredClone

Para ciertos datos clonables, `structuredClone(valor)` realiza clonación estructurada más profunda.

No soporta todos los tipos/objetos y clonar profundamente no es siempre la solución de diseño.

# 11. Práctica guiada

Actualiza:
```text
usuario.direccion.ciudad
```
sin mutar los objetos originales. Comprueba referencias con `===`.

# 12. Errores frecuentes

- default esperando cubrir null;
- rest y spread como lo mismo;
- spread = deep clone;
- excluir password y asumir que ya sanitizaste todo;
- copiar profundamente por reflejo.

# 13. Reto
Implementa actualización inmutable superficial de un estado anidado y demuestra qué referencias cambiaron.

# 14. Autoevaluación

1. ¿Default se usa con null?
2. ¿Rest recoge o expande?
3. ¿Spread de objeto es profundo?
4. ¿Qué pasa si propiedad aparece después del spread?
5. ¿Para qué structuredClone?

# 15. Checklist

- [ ] Desestructuro.
- [ ] Distingo rest/spread.
- [ ] Actualizo niveles necesarios.
- [ ] Comprendo copia superficial.

Continúa con Map y Set.



## Laboratorio completo: Destructuring y rest

### Modelo y contrato

Destructuring extrae valores según una estructura. El valor por defecto se aplica a undefined, no a cualquier valor falsy: cupos 0 permanece 0. Rest agrupa propiedades o argumentos restantes y spread expande una colección o copia propiedades en otro contexto. La misma notación de tres puntos cumple responsabilidades distintas según su posición.

Excluir una propiedad con rest puede construir una vista de datos, pero no es una política de seguridad completa. Si datos externos contienen otras propiedades sensibles o inesperadas, una lista permitida explícita puede ser más adecuada. El resultado de rest también es una copia superficial. Con parámetros de función, decide si un objeto ausente o null es admitido antes de destructurarlo: un defecto = {} no cubre null automáticamente.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** cupos conserva 0, faltante usa sin dato, resumen incluye titulo/cupos y suma vale 6.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const curso = { titulo: 'JavaScript', cupos: 0, meta: { nivel: 'inicial' } };
const { titulo, cupos = 20, faltante = 'sin dato' } = curso;
const { meta, ...resumen } = curso;
function sumar(...valores) { return valores.reduce((total, valor) => total + valor, 0); }
mostrar({ titulo, cupos, faltante, resumen, suma: sumar(1, 2, 3) });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Prueba cupos undefined y null. Escribe resumirCurso que devuelva únicamente titulo y cupos de tipos válidos, sin copiar propiedades desconocidas.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 08: Objetos, propiedades y referencias](../unidad08-objetos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 10: Map, Set y elección de estructuras](../unidad10-map-set/README.md)
