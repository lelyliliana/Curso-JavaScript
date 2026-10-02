# Unidad 20 — Fetch y APIs REST
```js
const response=await fetch(url);
if(!response.ok) throw new Error(`HTTP ${response.status}`);
const data=await response.json();
```
fetch normalmente no rechaza por 404/500: comprueba status/ok.
**Reto:** consume API y separa cliente HTTP de renderizado.