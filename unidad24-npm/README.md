# Unidad 24: npm, package.json y dependencias

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

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
    "start": "node servidor/server.js",
    "test": "node --test tests/*.test.js",
    "check": "node scripts/verificar.js"
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



## Laboratorio completo: Scripts npm reproducibles

### Modelo y contrato

npm administra metadatos, dependencias y scripts de un proyecto Node. package.json también puede declarar type:module para la interpretación de archivos .js por Node. El navegador usa su script type=module y no lee automáticamente package.json para resolver imports.

El curso utiliza scripts para iniciar el servidor y ejecutar pruebas, sin dependencias de producción. npm test invoca un comando declarado y no garantiza que existan pruebas buenas: debes leer qué comprueban. npm install de un proyecto externo puede ejecutar scripts y descargar código; revisa procedencia, versiones y lockfile antes de adoptarlo. No instales paquetes globalmente para cualquier tarea. Un lockfile se utiliza cuando hay resolución de dependencias; aquí el sitio no requiere ninguna biblioteca externa.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** suma 10. En la raíz, npm test ejecuta pruebas sin descargar dependencias del sitio.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
import { sumar } from '../../unidad23-modulos/ejemplo/calculos.js';
mostrar({ suma: sumar(4, 6), entorno: 'navegador; npm no es necesario para cargar este módulo' });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Lee package.json, ejecuta node --version y npm --version, después npm test. Compara el script declarado con el comando directo node --test tests/*.test.js.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 23: Módulos ES](../unidad23-modulos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 25: Linting, formato y calidad automatizada](../unidad25-calidad/README.md)
