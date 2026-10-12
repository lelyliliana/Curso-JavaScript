# Unidad 28: Estado y renderizado determinista

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Usar estado JavaScript como fuente de verdad y derivar la interfaz de manera predecible.

# 1. Dos fuentes de verdad

Si consultas el DOM para saber qué tareas existen y además mantienes variables JavaScript, ambas representaciones pueden divergir.

# 2. Estado

```js
let state = {
  tareas: [],
  filtro: "todas",
  status: "idle"
};
```

# 3. Flujo

```text
evento
 ↓
actualizar estado
 ↓
render(state)
 ↓
DOM
```

La interfaz representa el estado.

# 4. Estado derivado

No guardes simultáneamente tareas, tareasCompletadas y cantidadCompletadas si las últimas pueden calcularse desde tareas.

Duplicar información exige mantenerla sincronizada.

# 5. Actualización

```js
state = {
  ...state,
  filtro: "completadas"
};

render(state);
```

Una aplicación pequeña no necesita una librería de estado para aprender el patrón.

# 6. Render completo vs incremental

Reconstruir una lista pequeña puede ser simple y correcto.

En interfaces grandes, actualizaciones incrementales pueden ser más eficientes.

Mide antes de complicar.

# 7. Eventos

Si reemplazas nodos, listeners directos pueden perderse.

La delegación reduce este acoplamiento.

# 8. Identidad

Usa IDs estables.

El índice de un array puede dejar de identificar el mismo elemento después de ordenar/filtrar.

# 9. Estado remoto

Mantén también `status/error` explícitos para no deducir “loading” mirando si existe un spinner.

# 10. Práctica guiada

Lista:

- agregar;
- completar;
- filtrar;
- eliminar.

Cada acción actualiza state y después renderiza.

# 11. Errores frecuentes

- DOM como base de datos;
- estado derivado duplicado;
- índice como ID;
- listeners rotos tras render;
- optimización incremental prematura.

# 12. Reto
Lista cuyo DOM pueda reconstruirse completamente desde state.

# 13. Autoevaluación

1. ¿Fuente de verdad?
2. ¿Estado derivado?
3. ¿Por qué no duplicarlo?
4. ¿Índice es ID estable?
5. ¿Render completo siempre es malo?

# 14. Checklist

- [ ] Estado explícito.
- [ ] Derivo datos.
- [ ] Render determinista.
- [ ] IDs estables.

Continúa con arquitectura.



## Laboratorio completo: Estado y render coherentes

### Modelo y contrato

El estado representa el dato y render expresa su vista. La cantidad no se deduce leyendo texto del DOM. Mantener una sola fuente facilita reconstruir la pantalla y verificar la transición. El listener se registra una vez y no se añade dentro de render.

Separar estado y vista no exige un framework. Debes elegir también qué nodos conservar: aquí se actualiza solo salida y el botón mantiene foco. Reconstruir todo main en cada cambio podría borrar listeners o hacer desaparecer el control activo. El render no incrementa estado, porque consultar o pintar no debería producir la acción de negocio. Si añades persistencia, informa por separado si guardar falló: el estado visible puede ser válido aunque la escritura no se complete.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Cantidad: 0 inicialmente y aumenta una vez por activación.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const estado = { cantidad: 0 };
const boton = document.querySelector('#sumar');
const salida = document.querySelector('#salida');
function render() { salida.textContent = `Cantidad: ${estado.cantidad}`; }
boton.addEventListener('click', () => { estado.cantidad += 1; render(); });
render();
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Añade restar con mínimo 0 y reiniciar. Comprueba que volver a llamar render no cambie cantidad. Activa cada control con teclado.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 27: Depuración con DevTools](../unidad27-debug/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 29: Arquitectura de una aplicación JavaScript](../unidad29-arquitectura/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2028%20%E2%80%94%20Estado%20y%20renderizado%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad28-estado-render%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
