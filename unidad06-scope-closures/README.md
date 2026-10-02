# Unidad 06 — Scope, closures y ejecución
let/const tienen scope de bloque. Una closure conserva acceso al entorno léxico.
```js
function crearContador(){let n=0;return ()=>++n;}
```
Comprende call stack a nivel conceptual. **Reto:** crea fábrica de contadores independientes.