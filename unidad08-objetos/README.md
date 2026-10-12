# Unidad 08: Objetos, propiedades y referencias

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Modelar datos, acceder dinámicamente, enumerar propiedades y comprender identidad y copia superficial.

# 1. Literal

```js
const persona = {
  nombre: "Ana",
  activa: true
};
```

# 2. Punto vs corchetes

```js
persona.nombre
persona["nombre"]
```

Corchetes permiten clave calculada:

```js
const campo = "nombre";
persona[campo]
```

# 3. Shorthand

```js
const nombre = "Ana";
const persona = { nombre };
```

equivale a `{ nombre: nombre }`.

# 4. Métodos

```js
const cuenta = {
  saldo: 0,
  depositar(valor) {
    this.saldo += valor;
  }
};
```

`this` depende de cómo se invoca la función; lo profundizamos en Unidad 11.

# 5. Enumeración

```js
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
```

Devuelven información de propiedades propias enumerables según sus contratos.

# 6. Existencia

```js
Object.hasOwn(obj, "nombre")
```

comprueba propiedad propia.

`"nombre" in obj` también considera cadena prototípica.

# 7. Igualdad

```js
({}) === ({}) // false
```

Son objetos distintos.

```js
const a = {};
const b = a;
a === b // true
```

# 8. Spread

```js
const actualizado = {
  ...persona,
  activa: false
};
```

Crea un objeto nuevo superficial.

Si `persona.direccion` es objeto, ambos pueden seguir compartiendo esa referencia.

# 9. Object.freeze

Impide ciertas modificaciones propias al objeto, pero es **superficial**.

No convierte automáticamente todo el grafo anidado en inmutable.

# 10. Práctica guiada

Actualiza un usuario sin mutar el objeto raíz. Luego añade una dirección anidada y demuestra qué referencia se comparte.

# 11. Errores frecuentes

- {} === {};
- spread como deep clone;
- this asumido por lugar de definición;
- in y hasOwn como equivalentes;
- freeze = deep immutable.

# 12. Reto
Transforma colección de usuarios a nuevos objetos con campo derivado sin modificar originales.

# 13. Autoevaluación

1. ¿Cuándo corchetes?
2. ¿Object.entries?
3. ¿{} === {}?
4. ¿Qué copia spread?
5. ¿freeze es profundo?
6. ¿hasOwn vs in?

# 14. Checklist

- [ ] Modelo objetos.
- [ ] Comprendo referencias.
- [ ] Enumero propiedades.
- [ ] Copio conscientemente.

Continúa con destructuring.



## Laboratorio completo: Objetos y referencias

### Modelo y contrato

Un objeto relaciona propiedades con valores y su identidad no se reduce a sus textos. Copiar mediante spread crea un nuevo objeto exterior, pero no copia recursivamente todo su contenido. El contacto anidado sigue siendo compartido y su cambio aparece en ambos.

Para un cambio inmutable conocido puedes reconstruir los niveles afectados: {...persona, contacto:{...persona.contacto, ciudad:'otra'}}. structuredClone sirve para ciertos datos estructurables, pero no clona cualquier función o recurso y no sustituye decidir qué debe copiarse. optional chaining evita acceder a propiedades de null/undefined en el punto correspondiente; no valida que datos externos tengan el contrato esperado. No uses acceso opcional para esconder una propiedad que tu aplicación exige siempre.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Los nombres son Ana y Luis; ambas ciudades pasan a Montería y mismoContacto es true.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const persona = { nombre: 'Ana', contacto: { ciudad: 'Sahagún' } };
const copia = { ...persona };
copia.nombre = 'Luis';
copia.contacto.ciudad = 'Montería';
mostrar({ persona, copia, mismoContacto: persona.contacto === copia.contacto });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Reconstruye contacto para que cambiar la ciudad de la copia no modifique persona. Prueba dos objetos con la misma propiedad mediante ===.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 07: Arrays y transformaciones](../unidad07-arrays/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 09: Destructuring, spread y rest](../unidad09-destructuring/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2008%20%E2%80%94%20Objetos%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad08-objetos%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
