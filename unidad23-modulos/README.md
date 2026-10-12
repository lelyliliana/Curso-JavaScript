# Unidad 23: Módulos ES

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



## Laboratorio completo: Módulos con contrato

### Modelo y contrato

Un módulo define exportaciones e importa las que necesita. La ruta relativa de un import se resuelve desde el archivo que importa, no desde el HTML que lo cargó. Los módulos del navegador requieren rutas o resoluciones compatibles con ese entorno; un nombre de paquete no funciona automáticamente solo porque existe en npm.

Las vinculaciones de módulos y sus dependencias se analizan antes de ejecutar. Un nombre no exportado es un problema de contrato entre módulos, distinto de un archivo ausente. Evita dependencias circulares innecesarias y módulos que consulten DOM al importarse si también necesitas probar su lógica en Node. Separar cálculo de presentación permite reutilizar y comprobar la operación sin una página. El archivo calculos.js no debe imprimir ni modificar la región de salida.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** resultado 5 y carga correcta de app.js y calculos.js bajo HTTP.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
import { sumar } from './calculos.js';
mostrar({ resultado: sumar(2, 3) });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Renombra la exportación en calculos.js sin cambiar el import y clasifica el fallo. Restaura y añade multiplicar con un contrato numérico explícito.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 22: Estados de interfaz para datos asíncronos](../unidad22-estados-ui/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 24: npm, package.json y dependencias](../unidad24-npm/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2023%20%E2%80%94%20M%C3%B3dulos%20ES%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad23-modulos%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
