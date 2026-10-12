# Unidad 13: Eventos y delegación

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Escuchar eventos, distinguir target/currentTarget, comprender propagación y delegar sin llenar cada elemento de listeners.

# 1. Listener

```js
boton.addEventListener("click", manejarClick);

function manejarClick(event) {
  console.log("click");
}
```

Pasa la función; no la ejecutes al registrarla.

Incorrecto si no quieres ejecutarla inmediatamente:

```js
boton.addEventListener("click", manejarClick());
```

# 2. event

El objeto evento contiene información sobre lo ocurrido.

No todos los eventos tienen las mismas propiedades.

# 3. target

`event.target`: nodo donde se originó el evento.

`event.currentTarget`: elemento cuyo listener se está ejecutando.

Pueden ser distintos.

# 4. Bubbling

Muchos eventos suben por ancestros:

```text
button → li → ul → body ...
```

Esto permite delegación.

# 5. Delegación

```js
lista.addEventListener("click", event => {
  const boton = event.target.closest("[data-action='delete']");
  if (!boton || !lista.contains(boton)) return;

  eliminar(boton.dataset.id);
});
```

Un listener puede manejar botones existentes y añadidos después.

# 6. stopPropagation

Detiene propagación en ciertas fases según método.

No lo uses por defecto para “arreglar” eventos duplicados; puede romper componentes superiores.

Comprende primero quién escucha qué.

# 7. preventDefault

Cancela la acción predeterminada cuando el evento es cancelable.

No detiene propagación.

```text
preventDefault ≠ stopPropagation
```

# 8. Eventos de teclado

No recrees botones escuchando Enter/Space en divs si puedes usar `button`, que ya tiene semántica/comportamiento.

# 9. removeEventListener

Para retirar un listener necesitas conservar una referencia compatible a la función registrada.

Una nueva arrow idéntica visualmente no es la misma función.

# 10. Práctica guiada

Lista dinámica con acciones editar/eliminar usando un solo listener delegado.

Imprime target/currentTarget y observa bubbling.

# 11. Errores frecuentes

- ejecutar handler al registrar;
- target=currentTarget siempre;
- stopPropagation para todo;
- preventDefault creyendo que detiene bubbling;
- listener por cada fila dinámica;
- div clickable.

# 12. Reto
Lista con delegación que soporte elementos añadidos después y botones semánticos.

# 13. Autoevaluación

1. ¿Qué pasas a addEventListener?
2. ¿target/currentTarget?
3. ¿Qué es bubbling?
4. ¿Delegación?
5. ¿preventDefault vs stopPropagation?
6. ¿Cómo retirar listener?

# 14. Checklist

- [ ] Registro handlers.
- [ ] Comprendo propagación.
- [ ] Delego cuando aporta.
- [ ] Mantengo HTML interactivo nativo.

Continúa con formularios.



## Laboratorio completo: Eventos y delegación

### Modelo y contrato

Un listener recibe un objeto evento. target identifica el origen y currentTarget el objeto cuyo listener está ejecutándose. La propagación permite que un contenedor reciba eventos originados en descendientes. Delegación aprovecha esa relación para controles que pueden añadirse después.

closest busca el botón correspondiente incluso si se activa un span dentro de él. La comprobación de pertenencia delimita el componente. Usa button para acciones: proporciona teclado y semántica sin recrearlos en un div. preventDefault cancela una acción predeterminada cancelable (como envío tradicional), no detiene propagación. stopPropagation modifica propagación y no debe usarse por costumbre para esconder una relación mal entendida. Un listener duplicado en cada render puede ejecutar una acción varias veces.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Activar Elegir lectura muestra elegido lectura; Elegir robótica muestra robotica. Funciona con Enter en los botones.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const lista = document.querySelector('#lista');
lista.addEventListener('click', (event) => {
  const boton = event.target.closest('button[data-id]');
  if (!boton || !lista.contains(boton)) return;
  mostrar({ elegido: boton.dataset.id });
});
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Añade un tercer botón después de registrar el listener y comprueba delegación. Haz que el texto del botón esté dentro de span y compara target con el botón encontrado.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 12: DOM y renderizado seguro](../unidad12-dom/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 14: Formularios y validación](../unidad14-formularios/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2013%20%E2%80%94%20Eventos%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad13-eventos%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
