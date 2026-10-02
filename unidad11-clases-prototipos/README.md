# Unidad 11 — Clases y prototipos
JavaScript usa herencia prototípica; class ofrece sintaxis sobre ese modelo.
```js
class Cuenta { #saldo=0; depositar(v){this.#saldo+=v;} }
```
Comprende `this` según cómo se invoca la función. **Reto:** modela objeto con estado privado y reglas.