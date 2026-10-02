# Unidad 02 — Operadores, coerción y comparación
```js
0 === false // false
0 == false  // true
```
Comprende coerción antes de depender de ella. Usa ===/!== como comparación habitual. Nullish coalescing:
```js
const nombre = entrada ?? "Sin nombre";
```
No confundas ?? con ||. **Reto:** predice comparaciones antes de ejecutarlas.