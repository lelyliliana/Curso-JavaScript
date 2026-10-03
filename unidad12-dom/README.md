# Unidad 12 — DOM y renderizado seguro

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


---

## Continuar el curso

- **Unidad anterior:** [Unidad 11 — Prototipos, clases y this](../unidad11-clases-prototipos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 13 — Eventos y delegación](../unidad13-eventos/README.md)
