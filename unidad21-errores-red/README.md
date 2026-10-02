# Unidad 21 — Errores, timeouts y AbortController
```js
const controller=new AbortController();
const timer=setTimeout(()=>controller.abort(),5000);
try { await fetch(url,{signal:controller.signal}); } finally { clearTimeout(timer); }
```
Distingue aborto, red, HTTP y parseo.
**Reto:** cliente que reporte cada categoría de fallo.