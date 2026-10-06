# Unidad 31: Seguridad web básica para frontend

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Reconocer límites de confianza del navegador, prevenir inyección de HTML y evitar secretos/decisiones de autorización en el cliente.

# 1. El frontend es observable

El usuario puede:

- leer JS descargado;
- modificar requests;
- usar DevTools;
- cambiar storage;
- llamar API fuera de tu interfaz.

Por tanto, el frontend **no es una frontera de seguridad**.

# 2. Autorización

Ocultar un botón:

```js
if (!esAdmin) boton.remove();
```

mejora UX, pero no protege la operación.

El servidor debe autorizar cada acción sensible.

# 3. Secretos

No pongas:

- contraseñas;
- API keys privadas;
- claves de firma;
- tokens de servicio

en código frontend.

Si el navegador necesita un valor para funcionar, debes asumir que el usuario puede verlo.

# 4. XSS

Peligro:

```js
contenedor.innerHTML = comentarioUsuario;
```

El contenido puede interpretarse como markup/script según contexto.

Para texto:

```js
contenedor.textContent = comentarioUsuario;
```

# 5. Sanitización

Si tu producto **necesita permitir HTML**, debes usar una estrategia/librería de sanitización mantenida y configurar qué markup se permite.

No escribas tu propio sanitizador con unas regex.

# 6. Contextos

Escapar/sanitizar depende del contexto:

- HTML;
- atributo;
- URL;
- CSS;
- JavaScript.

No existe una función “escape todo” universal.

# 7. URLs

Datos externos usados como href/src requieren validación del esquema/destino según el caso.

textContent no protege una URL peligrosa.

# 8. CORS

CORS controla acceso desde navegadores entre orígenes.

No es autenticación ni autorización.

Una API vulnerable no queda segura por tener CORS restrictivo.

# 9. HTTPS

Protege transporte contra ciertas amenazas de red.

No hace confiable un dato malicioso recibido por HTTPS.

# 10. Storage

XSS ejecutado en tu origen puede acceder a datos disponibles para JavaScript, incluido localStorage.

No elijas estrategia de tokens solo por comodidad.

Cookies HttpOnly tienen propiedades diferentes, pero la autenticación web completa excede esta unidad.

# 11. CSP

Content Security Policy puede reducir impacto de ciertas inyecciones mediante una política de fuentes/ejecución.

Es defensa en profundidad, no sustituto de renderizado seguro.

# 12. Dependencias

Paquetes de terceros ejecutan código en tu build/app.

Minimiza, actualiza con criterio y revisa procedencia.

# 13. Práctica guiada

Renderiza comentarios que contengan:

- etiquetas;
- comillas;
- texto similar a script.

Primero como textContent.

Después analiza qué cambiaría si el requisito fuera permitir formato HTML.

# 14. Errores frecuentes

- secreto en frontend;
- ocultar botón = autorización;
- innerHTML con datos;
- regex como sanitizador HTML;
- CORS = seguridad API;
- HTTPS = dato confiable.

# 15. Reto
Auditoría conceptual de una app identificando límites de confianza y puntos de inyección.

# 16. Autoevaluación

1. ¿Frontend puede guardar secretos?
2. ¿Ocultar botón autoriza?
3. ¿textContent para qué?
4. ¿Sanitizar HTML con regex?
5. ¿CORS = auth?
6. ¿HTTPS valida contenido?

# 17. Checklist

- [ ] No secretos.
- [ ] Render seguro.
- [ ] Servidor autoriza.
- [ ] Comprendo CORS/HTTPS.
- [ ] Dependencias con criterio.

Continúa con taller.



## Laboratorio completo: Entradas como texto

### Modelo y contrato

Datos de formulario, red y almacenamiento no deben interpretarse como HTML por costumbre. textContent evita esa interpretación en un contexto de texto. No basta con recortar una palabra como script: existen otros vectores y contextos. Si una aplicación necesita HTML enriquecido, requiere una estrategia específica y herramientas adecuadas, fuera del alcance de este ejemplo.

También hay contextos de URL: un texto convertido en href puede usar un esquema no admitido. Define esquemas y destinos permitidos según la tarea; no reutilices la misma validación para texto y URL. El frontend no puede mantener un secreto incorporado a sus archivos públicos. CORS no es autenticación y una comprobación de UI no impide que otra persona llame directamente a un endpoint. El proyecto usa datos ficticios y no pretende ofrecer autorización ni seguridad de backend.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** El texto <img src=x onerror=alert(1)> se muestra literalmente y no crea imágenes ni ejecuta alert.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const entrada = document.querySelector('#entrada');
const boton = document.querySelector('#mostrar');
const resultado = document.querySelector('#texto');
boton.addEventListener('click', () => {
  resultado.textContent = entrada.value;
  mostrar({ imagenesCreadas: resultado.querySelectorAll('img').length });
});
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Pega la cadena de ejemplo y comprueba el DOM. Ensaya una URL javascript: en una función de validación que solo admita https; no la conviertas en un enlace activo para demostrar el fallo.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 30: Rendimiento en el navegador](../unidad30-rendimiento/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 32: Taller integrador de aplicaciones](../unidad32-taller/README.md)
