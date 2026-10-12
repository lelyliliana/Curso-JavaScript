# Unidad 12: DOM y renderizado seguro

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Consultar, crear y actualizar nodos sin confundir HTML fuente, DOM y estado de la aplicación.

# 1. DOM

El navegador convierte el documento en un árbol de objetos.

```js
const titulo = document.querySelector("h1");
```

Devuelve el primer elemento coincidente o `null`.

No asumas que siempre existe.

# 2. querySelectorAll

```js
const items = document.querySelectorAll(".item");
```

Devuelve un NodeList estático para esa consulta.

No es un Array completo, aunque soporta algunas operaciones como forEach.

# 3. textContent

```js
titulo.textContent = nombre;
```

Para datos que deben mostrarse como texto, esta es una opción segura respecto a interpretación de markup.

# 4. innerHTML

```js
contenedor.innerHTML = datoExterno;
```

interpreta el string como HTML.

Con datos no confiables puede crear vulnerabilidades XSS.

No lo uses como plantilla universal.

# 5. Crear nodos

```js
const li = document.createElement("li");
li.textContent = producto.nombre;
lista.append(li);
```

El contenido sigue siendo texto aunque contenga `<script>`.

# 6. Atributos

```js
enlace.href = url;
boton.disabled = true;
elemento.dataset.id = String(id);
```

Usa propiedades/APIs específicas cuando expresen mejor la intención.

Los valores URL también requieren validación según el contexto; textContent no resuelve URLs peligrosas.

# 7. classList

```js
elemento.classList.add("is-active");
elemento.classList.toggle("is-active", activo);
```

Evita reconstruir toda la cadena className cuando solo cambia un estado.

# 8. Renderizado

Una función puede recibir datos y producir/actualizar DOM:

```text
estado → render → DOM
```

No leas el DOM como si fuera siempre tu base de datos principal.

# 9. DocumentFragment

Para insertar varios nodos puedes construir un fragmento y añadirlo.

Los navegadores modernos optimizan muchas operaciones; úsalo por claridad/agrupación y mide antes de afirmar mejoras enormes.

# 10. Práctica guiada

Desde un array de productos:

1. selecciona lista;
2. limpia estado anterior de forma controlada;
3. crea li;
4. añade nombre/precio con textContent;
5. añade data-id.

# 11. Errores frecuentes

- asumir querySelector no null;
- innerHTML con entrada;
- DOM como estado de negocio;
- className sobrescribiendo clases;
- insertar URLs sin validar.

# 12. Reto
Renderiza una lista con datos que contengan caracteres HTML y demuestra que se muestran como texto.

# 13. Autoevaluación

1. ¿querySelector si no encuentra?
2. ¿textContent interpreta HTML?
3. ¿Por qué innerHTML es sensible?
4. ¿classList?
5. ¿DOM debe ser siempre el estado principal?

# 14. Checklist

- [ ] Consulto nodos.
- [ ] Renderizo texto seguro.
- [ ] Creo elementos.
- [ ] Separo estado/DOM.

Continúa con eventos.



## Laboratorio completo: Construir DOM seguro

### Modelo y contrato

DOM permite consultar y modificar nodos. querySelector devuelve la primera coincidencia o null. createElement crea un nodo y textContent asigna texto sin interpretarlo como HTML. La cadena de entrada no debe convertirse en marcado simplemente porque contiene símbolos < y >.

append agrega nodos; replaceChildren puede reemplazar una colección y resulta útil al renderizar desde estado. Sin embargo, reconstruir todo un formulario puede perder foco y selección: decide qué necesita actualizarse. Un selector correcto depende de una estructura que exista cuando se consulta. El render debe reflejar datos validados, pero incluso un título válido como texto puede contener símbolos que no deben ejecutarse. Validación y elección de API de presentación cumplen responsabilidades distintas.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Dos elementos de lista. El segundo muestra literalmente la cadena con <img>; no crea una imagen.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const lista = document.querySelector('#lista');
for (const nombre of ['Ana', '<img src=x onerror=alert(1)>']) {
  const item = document.createElement('li');
  item.textContent = nombre;
  lista.append(item);
}
mostrar({ elementos: lista.children.length });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Agrega un tercer nombre desde una cadena variable. Limpia la lista con replaceChildren y vuelve a construirla. Comprueba que no aparezca ningún img creado por el segundo texto.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 11: Prototipos, clases y this](../unidad11-clases-prototipos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 13: Eventos y delegación](../unidad13-eventos/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2012%20%E2%80%94%20DOM%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad12-dom%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
