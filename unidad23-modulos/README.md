# Unidad 23 — Módulos ES

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Dividir una aplicación por responsabilidades, importar/exportar explícitamente y evitar dependencias circulares.

# 1. Export

```js
export function sumar(a, b) {
  return a + b;
}
```

# 2. Import

```js
import { sumar } from "./math.js";
```

En navegador, las rutas relativas necesitan normalmente extensión explícita.

# 3. Scope

Cada módulo tiene su propio scope.

Una variable declarada en `api.js` no aparece como global solo por cargar el módulo.

# 4. Named exports

```js
export const IVA = 0.19;
export function calcular() {}
```

Import:

```js
import { IVA, calcular } from "./calculos.js";
```

Los nombres hacen visibles las dependencias.

# 5. Default export

```js
export default function iniciar() {}
```

Existe, pero no es “mejor” que named export.

En proyectos educativos, named exports pueden facilitar refactor/búsqueda porque el nombre está acordado en origen e importación.

# 6. Imports son bindings vivos

Los imports no son simples copias desconectadas del valor exportado.

No puedes reasignar un binding importado desde el consumidor.

# 7. Efectos al importar

Código en nivel superior del módulo se ejecuta al evaluarlo.

Evita que importar un módulo dispare inesperadamente red, DOM o efectos grandes salvo que esa sea una decisión explícita.

# 8. Dependencia circular

```text
a.js → b.js
 ↑      ↓
 └──────┘
```

Los módulos ES tienen reglas para ciclos, pero el resultado puede ser difícil de razonar, especialmente con inicialización.

Un ciclo frecuente puede señalar responsabilidades mal separadas.

# 9. Arquitectura inicial

```text
api.js   → red
state.js → estado
ui.js    → render
app.js   → composición/eventos
```

No conviertas cada función en un archivo.

# 10. Import dinámico

```js
const modulo = await import("./editor.js");
```

Permite cargar bajo demanda en casos apropiados.

No lo uses si una importación estática expresa mejor la dependencia.

# 11. Práctica guiada

Divide una lista de productos monolítica en módulos. Dibuja el grafo de imports y asegúrate de que no hay ciclos.

# 12. Errores frecuentes
- olvidar ./;
- asumir variables globales;
- efectos inesperados al importar;
- archivo por función;
- ciclos para compartir estado;
- default export por obligación.

# 13. Reto
App en cuatro módulos con grafo de dependencias explicado.

# 14. Autoevaluación
1. ¿Módulo tiene scope propio?
2. ¿Import es copia simple?
3. ¿Default es obligatorio?
4. ¿Qué es ciclo?
5. ¿Cuándo import dinámico?
6. ¿Un archivo por función?

# 15. Checklist
- [ ] Imports explícitos.
- [ ] Responsabilidades.
- [ ] Sin globales accidentales.
- [ ] Grafo comprensible.

Continúa con npm.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 22 — Estados de interfaz para datos asíncronos](../unidad22-estados-ui/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 24 — npm, package.json y dependencias](../unidad24-npm/README.md)
