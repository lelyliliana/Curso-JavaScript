# Unidad 14 — Formularios y validación

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Trabajar con submit, FormData y Constraint Validation sin sustituir semántica HTML ni validación de servidor.

# 1. Escucha submit

```js
form.addEventListener("submit", event => {
  event.preventDefault();
  // procesar
});
```

No dependas solo del click del botón: el formulario puede enviarse con Enter u otros mecanismos.

# 2. FormData

```js
const data = new FormData(form);
const nombre = data.get("nombre");
```

Usa los atributos `name` del HTML.

Un campo sin name no forma parte del conjunto como esperas.

# 3. Conversión

FormData entrega valores principalmente como strings o File según control.

```js
const cantidad = Number(data.get("cantidad"));
```

Después valida el resultado. Number("") puede ser 0.

# 4. Constraint Validation API

HTML puede declarar:
- required;
- min/max;
- pattern;
- type=email.

JavaScript puede consultar:
```js
form.checkValidity()
campo.validity
campo.validationMessage
```

# 5. reportValidity

Puede pedir al navegador mostrar feedback nativo.

Si construyes mensajes propios, asegúrate de asociarlos correctamente y no duplicar/confundir el feedback.

# 6. setCustomValidity

```js
campo.setCustomValidity("...");
```

Debes limpiar el mensaje con `""` cuando vuelva a ser válido; de lo contrario seguirá inválido.

# 7. Negocio

“Email con formato” puede validarse parcialmente en cliente.

“Email ya registrado” requiere consultar estado del sistema/backend.

No intentes convertir toda regla de negocio en JavaScript del navegador.

# 8. Errores accesibles

Un error debería:
- identificar el campo;
- explicar corrección;
- asociarse al control;
- no depender solo de color.

Para envíos fallidos, gestiona foco/resumen cuando el formulario sea complejo.

# 9. Reset

`form.reset()` restaura valores iniciales de controles.

Tu estado JS/errores personalizados también pueden necesitar limpiarse; reset no conoce automáticamente tu modelo.

# 10. Práctica guiada

Formulario:
- nombre;
- email;
- cantidad donde 0 sea válido.

Usa FormData, conversión explícita y mensajes asociados.

# 11. Errores frecuentes
- escuchar solo click;
- campo sin name;
- Number("") aceptado accidentalmente;
- setCustomValidity nunca limpiado;
- JS como única validación;
- error solo rojo.

# 12. Reto
Formulario accesible que distinga vacío, 0 válido y número inválido.

# 13. Autoevaluación
1. ¿Por qué submit?
2. ¿FormData usa id o name?
3. ¿Number("")?
4. ¿Qué hace checkValidity?
5. ¿Cómo limpiar custom validity?
6. ¿Cliente sustituye servidor?

# 14. Checklist
- [ ] Manejo submit.
- [ ] Leo FormData.
- [ ] Convierto/valido.
- [ ] Comunico errores accesiblemente.

Continúa con accesibilidad dinámica.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 13 — Eventos y delegación](../unidad13-eventos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 15 — Interfaces dinámicas accesibles](../unidad15-accesibilidad-dinamica/README.md)
