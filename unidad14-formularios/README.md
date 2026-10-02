# Unidad 14 — Formularios y validación
Usa submit del formulario, FormData y restricciones HTML.
```js
form.addEventListener("submit", e=>{e.preventDefault(); const data=new FormData(form);});
```
No dependas solo de validación JS si existe backend. **Reto:** formulario con errores asociados a campos.