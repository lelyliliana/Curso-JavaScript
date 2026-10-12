# Unidad 14: Formularios y validación

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



## Laboratorio completo: Validar un formulario

### Modelo y contrato

submit permite procesar el envío tanto desde botón como desde Enter. La validación nativa ocurre antes de un submit válido; dentro del handler se aplican reglas adicionales como trim. preventDefault conserva esta demostración en la página. No implica que se haya enviado nada.

La etiqueta visible se asocia mediante for/id. El error permanece junto al campo, se vincula con aria-describedby y se anuncia mediante una región apropiada. Al fallar, aria-invalid comunica el estado; al corregirse debe retirarse. No marques inválidos todos los controles desde el primer render. Una regla de cliente mejora experiencia, pero un servidor real tendría que validar de nuevo su contrato. El ejemplo informa su alcance en la salida y utiliza datos ficticios.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Espacios no cuentan como nombre válido. Ana produce nombre Ana y guardadoEnServidor false. No hay envío ni almacenamiento.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const error = document.querySelector('#error');
formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const texto = nombre.value.trim();
  if (texto.length < 2) {
    error.textContent = 'Escribe al menos dos caracteres, sin contar espacios exteriores.';
    nombre.setAttribute('aria-invalid', 'true'); nombre.focus(); return;
  }
  error.textContent = ''; nombre.removeAttribute('aria-invalid');
  mostrar({ nombre: texto, guardadoEnServidor: false });
});
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Prueba vacío, un carácter, espacios y Ana. Añade un máximo de 40 caracteres al HTML y a la regla JavaScript; compara datos introducidos y límites.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 13: Eventos y delegación](../unidad13-eventos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 15: Interfaces dinámicas accesibles](../unidad15-accesibilidad-dinamica/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2014%20%E2%80%94%20Formularios%20y%20validaci%C3%B3n%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad14-formularios%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
