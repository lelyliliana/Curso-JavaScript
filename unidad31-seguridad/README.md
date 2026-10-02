# Unidad 31 — Seguridad web básica para frontend

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
