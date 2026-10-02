# Unidad 09 — Destructuring, spread y rest
```js
const {nombre,...resto}=usuario;
const copia={...usuario,activo:false};
```
Spread no realiza deep clone. **Reto:** actualiza estructuras de estado de forma inmutable superficial.