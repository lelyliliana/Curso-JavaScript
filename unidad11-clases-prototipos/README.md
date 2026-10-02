# Unidad 11 — Prototipos, clases y this

## Qué aprenderás
Comprender el modelo prototípico, la sintaxis class, campos privados y cómo se determina this.

# 1. Cadena prototípica

Cuando accedes:

```js
obj.metodo
```

JavaScript busca primero en el objeto y después puede recorrer su cadena de prototipos.

La herencia del lenguaje es prototípica.

# 2. class

```js
class Cuenta {
  #saldo = 0;

  depositar(valor) {
    if (valor <= 0) {
      throw new Error("Valor inválido");
    }
    this.#saldo += valor;
  }

  get saldo() {
    return this.#saldo;
  }
}
```

`class` ofrece sintaxis/semántica conveniente sobre el modelo de objetos/prototipos; no cambia JavaScript a herencia de clases tradicional idéntica a Java.

# 3. Métodos compartidos

Los métodos declarados en la clase se ubican normalmente en el prototype, por lo que las instancias comparten esa función en vez de copiarla como propiedad propia por instancia.

# 4. this depende de la llamada

```js
const cuenta = {
  saldo: 10,
  mostrar() {
    return this.saldo;
  }
};

cuenta.mostrar(); // this = cuenta
```

Pero:

```js
const fn = cuenta.mostrar;
fn();
```

ya no conserva automáticamente el receptor original.

# 5. Arrow y this

Arrow functions capturan el `this` léxico; no crean uno propio.

Por eso no son reemplazo automático de métodos cuando quieres `this` dinámico.

# 6. bind

```js
const ligada = cuenta.mostrar.bind(cuenta);
```

crea una función con this fijado.

# 7. Campos privados

```js
#saldo
```

son privados a nivel del lenguaje, distintos de una convención como `_saldo`.

# 8. Herencia

```js
class CuentaAhorros extends Cuenta { ... }
```

Existe, pero no uses herencia solo para reutilizar código. Composición también es válida en JavaScript.

# 9. Objetos sin class

No necesitas class para todo.

Factories, objetos literales y closures pueden modelar comportamiento perfectamente.

Elige según problema.

# 10. Práctica guiada

Crea Cuenta mediante:
1. class;
2. factory con closure.

Compara API, privacidad y uso de this.

# 11. Errores frecuentes
- JavaScript class = Java class;
- this definido por dónde se escribió;
- arrow como cualquier método;
- _campo = privacidad real;
- class obligatoria para modelar objetos.

# 12. Reto
Modela una entidad con invariantes usando class o factory y justifica la elección.

# 13. Autoevaluación
1. ¿Cómo busca propiedades JS?
2. ¿Dónde suelen vivir métodos class?
3. ¿Qué determina this?
4. ¿Arrow tiene this propio?
5. ¿#campo es privado?
6. ¿Class es obligatoria?

# 14. Checklist
- [ ] Comprendo prototype.
- [ ] Comprendo this.
- [ ] Uso privacidad.
- [ ] Elijo class/factory con criterio.

Continúa con DOM.
