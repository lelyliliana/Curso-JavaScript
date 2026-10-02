# Unidad 16 — Web Storage
localStorage persiste strings por origen.
```js
localStorage.setItem("tema","oscuro");
```
JSON.stringify/parse para estructuras. No almacenes secretos/tokens sensibles por asumir que “están en el navegador”. **Reto:** preferencias persistentes con fallback.