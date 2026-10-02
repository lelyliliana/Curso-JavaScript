# Unidad 23 — Módulos ES
```js
export function sumar(){}
import {sumar} from "./math.js";
```
Los módulos tienen scope propio y rutas explícitas.
**Reto:** divide aplicación en api.js, state.js, ui.js y app.js sin crear dependencias circulares.