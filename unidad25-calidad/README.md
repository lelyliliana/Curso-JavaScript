# Unidad 25: Linting, formato y calidad automatizada

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Distinguir formatter, linter y tests, automatizarlos y tratar reglas como decisiones del proyecto.

# 1. Formatter

Decide presentación:

- espacios;
- saltos;
- comillas según configuración;
- longitud/formato.

Su objetivo es eliminar discusiones manuales de estilo.

# 2. Linter

Analiza patrones:

- variables sin usar;
- errores probables;
- convenciones;
- prácticas configuradas.

No demuestra que el programa sea correcto.

# 3. Tests

Comprueban comportamientos concretos.

```text
formatter ≠ linter ≠ tests
```

Se complementan.

# 4. Configuración

Una regla no es una ley universal.

Si no aplica:

1. entiende qué detecta;
2. decide política;
3. cambia configuración de forma documentada.

No añadas disable inline a cada línea solo para dejar el panel verde.

# 5. Scripts

```json
{
  "scripts": {
    "format": "prettier . --check",
    "lint": "eslint .",
    "test": "node --test tests/*.test.js"
  }
}
```

Este es un ejemplo de un proyecto que instaló y configuró Prettier y ESLint como dependencias de desarrollo. No copies esos scripts al curso esperando que las herramientas aparezcan automáticamente. Aquí `npm run check` comprueba sintaxis y rutas; no se presenta como un linter ni un formatter. Consulta [Prettier](https://prettier.io/docs/install) y [ESLint](https://eslint.org/docs/latest/use/getting-started) para una práctica separada con versiones fijadas y lockfile.

# 6. Pre-commit/CI

Puedes ejecutar verificaciones antes de commit o en CI.

No hagas hooks tan lentos que incentiven saltarlos; coloca cada comprobación en el punto apropiado.

# 7. Complejidad

Linters pueden señalar funciones complejas, pero una métrica no reemplaza revisión humana.

Refactoriza por comprensión/testabilidad, no solo para bajar un número.

# 8. Práctica guiada

Introduce:

- variable sin usar;
- formato inconsistente;
- bug lógico que el linter no detecta.

Observa qué herramienta detecta cada uno.

# 9. Errores frecuentes

- formatter como linter;
- linter como prueba;
- desactivar regla sin entender;
- configuración copiada enorme;
- perseguir cero warnings sin contexto.

# 10. Reto
Pipeline local format/lint/test y documento de qué garantiza y qué no cada etapa.

# 11. Autoevaluación

1. ¿Formatter?
2. ¿Linter?
3. ¿Test?
4. ¿Regla = verdad universal?
5. ¿Qué hacer antes de disable?

# 12. Checklist

- [ ] Herramientas separadas.
- [ ] Scripts.
- [ ] Reglas comprendidas.
- [ ] Automatización sostenible.

Continúa con pruebas.



## Laboratorio completo: Calidad mediante contratos

### Modelo y contrato

Formato consistente facilita leer, pero no demuestra corrección. Un linter puede reconocer algunos problemas y una prueba de sintaxis detecta código no analizable; ninguno decide si cantidad 101 debe permitirse. Ese límite pertenece al contrato y a sus casos de prueba.

El módulo de dominio convierte entrada solo después de exigir texto decimal completo de 0 a 100. No utiliza parseInt para aceptar un prefijo como 12abc. Los nombres describen la regla y el resultado distingue éxito de fallo. Evita catch vacío que convierte cualquier excepción en un éxito aparente. El curso conserva funciones puras donde es posible para verificar decisiones sin navegador y deja efectos en límites explícitos. Si añades un linter externo, documenta configuración y versión en lugar de depender de una instalación global desconocida.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** 0 y 12 se admiten; vacío, 12abc y 101 se rechazan.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
import { analizarCantidad } from '../../lib/dominio.js';
mostrar(['0', '12', '', '12abc', '101'].map(texto => ({ texto, resultado: analizarCantidad(texto) })));
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Añade casos con espacios exteriores, signo y decimales. Decide qué acepta el contrato actual y explica la diferencia entre estilo, sintaxis y comportamiento.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 24: npm, package.json y dependencias](../unidad24-npm/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 26: Pruebas de JavaScript](../unidad26-pruebas/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2025%20%E2%80%94%20Calidad%2C%20linting%20y%20formato%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad25-calidad%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
