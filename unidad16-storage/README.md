# Unidad 16 — Web Storage y persistencia en el navegador

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
try {
  ...
} catch {
  // fallback/control
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
