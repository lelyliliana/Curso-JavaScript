# Unidad 16: Web Storage y persistencia en el navegador

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Persistir preferencias/datos pequeños con localStorage/sessionStorage y comprender sus límites de seguridad, tamaño y sincronía.

# 1. localStorage

```js
localStorage.setItem("tema", "oscuro");
const tema = localStorage.getItem("tema");
```

Los valores son strings.

Persiste entre sesiones según políticas del navegador/origen hasta que se elimina/limpia.

# 2. sessionStorage

Tiene API similar, pero su ciclo de vida está asociado a la sesión de pestaña/contexto según reglas del navegador.

No lo confundas con una sesión segura de backend.

# 3. JSON

```js
localStorage.setItem(
  "preferencias",
  JSON.stringify(preferencias)
);

const guardadas = JSON.parse(
  localStorage.getItem("preferencias") ?? "{}"
);
```

JSON no conserva todos los tipos JS: Date, Map, métodos, undefined, etc. necesitan tratamiento.

# 4. Parse puede fallar

El storage puede contener datos viejos/corruptos.

```js
let preferencias = { tema: "claro" };
try {
  const dato = JSON.parse(localStorage.getItem("curso-js-preferencias-v1") ?? "null");
  if (dato && ["claro", "oscuro"].includes(dato.tema)) preferencias = { tema: dato.tema };
} catch {
  console.warn("No se pudo leer la preferencia; se conserva el valor inicial.");
}
```

Valida además la estructura después de parsear.

# 5. Versionado

Si cambias forma:

```text
v1: {tema}
v2: {tema, densidad}
```

define migración/fallback.

Datos persistidos sobreviven a despliegues y pueden quedar obsoletos.

# 6. Seguridad

JavaScript ejecutado en el mismo origen puede acceder a localStorage.

Una vulnerabilidad XSS puede leerlo.

No guardes secretos solo porque “están en el navegador”.

La estrategia de autenticación requiere análisis específico; no adoptes localStorage para tokens por costumbre.

# 7. Sincronía

Web Storage es una API síncrona.

No la uses para grandes volúmenes.

Para datos estructurados/voluminosos existe IndexedDB, fuera del núcleo de esta unidad.

# 8. Evento storage

Cambios en localStorage pueden generar `storage` en otros documentos del mismo origen según reglas.

Puede ayudar a sincronizar preferencias entre pestañas.

# 9. Privacidad/disponibilidad

Storage puede estar limitado/limpiado por navegador, modo privado, políticas o usuario.

No lo trates como almacenamiento garantizado.

# 10. Práctica guiada

Persistencia de:

- tema;
- tamaño de fuente/preferencia visual.

Añade versión y fallback ante JSON inválido.

# 11. Errores frecuentes

- guardar objeto sin stringify;
- parse sin manejar fallo;
- almacenar secretos;
- storage como base de datos grande;
- asumir persistencia eterna;
- datos antiguos sin versión.

# 12. Reto
Preferencias versionadas que sobrevivan recarga y se recuperen de datos corruptos.

# 13. Autoevaluación

1. ¿localStorage guarda objetos directamente?
2. ¿sessionStorage = sesión backend?
3. ¿JSON conserva Date?
4. ¿Por qué parse puede fallar?
5. ¿Storage es seguro para secretos?
6. ¿Es síncrono?

# 14. Checklist

- [ ] Serializo/parseo.
- [ ] Valido/versiono.
- [ ] No guardo secretos.
- [ ] Mantengo datos pequeños.

Continúa con event loop.



## Laboratorio completo: Persistencia con límites

### Modelo y contrato

Web Storage conserva texto por origen y no es una base de datos compartida con otras personas. Cambiar host o puerto puede hacer que no veas la preferencia anterior. La API es síncrona y sus operaciones pueden lanzar errores por políticas o cuota. Una app debe poder informar fallo sin fingir que guardó.

Los valores recuperados siguen siendo entrada que validar. Este ejemplo solo acepta dos cadenas. Para objetos usarás JSON.stringify y JSON.parse, con esquema y recuperación ante datos corruptos. No guardes tokens o datos privados como ejercicio de preferencias. Al borrar, elimina la clave propia: localStorage.clear también borra datos de otras aplicaciones del mismo origen. Un aviso de guardado local no significa sincronización, respaldo ni persistencia garantizada para siempre.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** Elegir claro u oscuro conserva la selección al recargar el mismo origen si el almacenamiento está disponible.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const clave = 'curso-js-preferencia-v1';
const tema = document.querySelector('#tema');
const estado = document.querySelector('#estado');
try {
  const anterior = localStorage.getItem(clave);
  if (anterior === 'claro' || anterior === 'oscuro') tema.value = anterior;
} catch { estado.textContent = 'Almacenamiento no disponible; puedes seguir usando la página.'; }
tema.addEventListener('change', () => {
  try { localStorage.setItem(clave, tema.value); estado.textContent = 'Preferencia guardada en este origen.'; }
  catch { estado.textContent = 'No se pudo guardar; la selección actual sigue disponible.'; }
});
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Guarda un valor no admitido en la clave desde DevTools y recarga. Borra solo esa clave. Prueba una política que bloquee almacenamiento y observa si el control sigue funcionando.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 15: Interfaces dinámicas accesibles](../unidad15-accesibilidad-dinamica/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 17: Event loop, tareas y microtareas](../unidad17-event-loop/README.md)
