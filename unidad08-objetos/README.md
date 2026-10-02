# Unidad 08 — Objetos, propiedades y referencias

## Qué aprenderás
Modelar datos, acceder dinámicamente, enumerar propiedades y comprender identidad y copia superficial.

# 1. Literal

```js
const persona = {
  nombre: "Ana",
  activa: true
};
```

# 2. Punto vs corchetes

```js
persona.nombre
persona["nombre"]
```

Corchetes permiten clave calculada:

```js
const campo = "nombre";
persona[campo]
```

# 3. Shorthand

```js
const nombre = "Ana";
const persona = { nombre };
```

equivale a `{ nombre: nombre }`.

# 4. Métodos

```js
const cuenta = {
  saldo: 0,
  depositar(valor) {
    this.saldo += valor;
  }
};
```

`this` depende de cómo se invoca la función; lo profundizamos en Unidad 11.

# 5. Enumeración

```js
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
```

Devuelven información de propiedades propias enumerables según sus contratos.

# 6. Existencia

```js
Object.hasOwn(obj, "nombre")
```

comprueba propiedad propia.

`"nombre" in obj` también considera cadena prototípica.

# 7. Igualdad

```js
{} === {} // false
```

Son objetos distintos.

```js
const a = {};
const b = a;
a === b // true
```

# 8. Spread

```js
const actualizado = {
  ...persona,
  activa: false
};
```

Crea un objeto nuevo superficial.

Si `persona.direccion` es objeto, ambos pueden seguir compartiendo esa referencia.

# 9. Object.freeze

Impide ciertas modificaciones propias al objeto, pero es **superficial**.

No convierte automáticamente todo el grafo anidado en inmutable.

# 10. Práctica guiada

Actualiza un usuario sin mutar el objeto raíz. Luego añade una dirección anidada y demuestra qué referencia se comparte.

# 11. Errores frecuentes
- {} === {};
- spread como deep clone;
- this asumido por lugar de definición;
- in y hasOwn como equivalentes;
- freeze = deep immutable.

# 12. Reto
Transforma colección de usuarios a nuevos objetos con campo derivado sin modificar originales.

# 13. Autoevaluación
1. ¿Cuándo corchetes?
2. ¿Object.entries?
3. ¿{} === {}?
4. ¿Qué copia spread?
5. ¿freeze es profundo?
6. ¿hasOwn vs in?

# 14. Checklist
- [ ] Modelo objetos.
- [ ] Comprendo referencias.
- [ ] Enumero propiedades.
- [ ] Copio conscientemente.

Continúa con destructuring.
