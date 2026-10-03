# Unidad 25 — Linting, formato y calidad automatizada

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
    "format": "...",
    "lint": "...",
    "test": "..."
  }
}
```

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


---

## Continuar el curso

- **Unidad anterior:** [Unidad 24 — npm, package.json y dependencias](../unidad24-npm/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 26 — Pruebas de JavaScript](../unidad26-pruebas/README.md)
