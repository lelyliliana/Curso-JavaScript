# Unidad 24 — npm, package.json y dependencias

## Qué aprenderás
Gestionar scripts/dependencias de desarrollo y reproducir el entorno sin versionar node_modules.

# 1. package.json

```json
{
  "name": "mi-app",
  "private": true,
  "scripts": {
    "test": "vitest"
  }
}
```

Describe metadatos, scripts y dependencias.

# 2. Instalar

```bash
npm install
```

Instala según package.json y lockfile/reglas del gestor.

# 3. Dependencia

```bash
npm install libreria
```

Se usa en el código/ejecución de la aplicación según arquitectura.

# 4. devDependency

```bash
npm install -D vitest
```

Herramienta de desarrollo como tests/lint/build.

La distinción puede depender del tipo de proyecto/despliegue, pero comunica intención.

# 5. package-lock.json

Registra resolución exacta del árbol para reproducibilidad con npm.

Normalmente se versiona en una aplicación.

# 6. node_modules

No se versiona.

Puede reconstruirse desde manifiesto/lockfile.

Añádelo a `.gitignore`.

# 7. npm ci

En entornos automatizados con lockfile coherente:

```bash
npm ci
```

realiza una instalación limpia/reproducible y falla si package.json y lockfile no concuerdan según reglas de npm.

# 8. Scripts

```json
{
  "scripts": {
    "dev": "...",
    "test": "...",
    "lint": "..."
  }
}
```

Permiten que otra persona no tenga que memorizar comandos internos de cada herramienta.

# 9. SemVer

Versiones suelen expresarse como major.minor.patch.

Rangos como `^1.2.3` tienen reglas; el lockfile fija la resolución concreta instalada.

No actualices dependencias sin revisar cambios/tests.

# 10. Seguridad

Una dependencia es código de terceros.

Reduce dependencias innecesarias, revisa procedencia/mantenimiento y usa herramientas de auditoría como señal, no como sustituto de análisis.

# 11. Práctica guiada

Crea package, añade una devDependency, inspecciona lockfile, borra node_modules y reconstruye con npm ci.

# 12. Errores frecuentes
- versionar node_modules;
- borrar lockfile por cualquier conflicto;
- dependencia para resolver tres líneas triviales;
- actualizar todo sin tests;
- instalar globalmente herramientas que el proyecto debería fijar localmente.

# 13. Reto
Proyecto clonable que se prepara con un comando documentado y ejecuta tests mediante script.

# 14. Autoevaluación
1. ¿package.json?
2. ¿Lockfile se versiona?
3. ¿node_modules?
4. ¿npm ci?
5. ¿dependency/devDependency?
6. ¿Qué expresa SemVer?

# 15. Checklist
- [ ] Manifiesto claro.
- [ ] Lockfile.
- [ ] Scripts.
- [ ] Dependencias justificadas.

Continúa con calidad.
