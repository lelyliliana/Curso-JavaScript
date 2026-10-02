# Unidad 33 — Proyecto final

## Propósito

Construir una aplicación web JavaScript modular, accesible, comprobable y segura sobre una interfaz HTML/CSS.

# Etapa 1 — Problema

Elige un dominio no sensible:
- tareas;
- catálogo;
- biblioteca;
- películas;
- clima con API de prueba;
- gastos ficticios;
- sensores simulados.

Define usuario, necesidad, alcance y exclusiones.

# Etapa 2 — HTML/CSS base

La interfaz debe funcionar semánticamente antes de añadir comportamiento complejo.

Define:
- headings;
- controles nativos;
- formularios;
- regiones;
- responsive.

# Etapa 3 — Estado

Diseña:

```js
{
  status,
  data,
  filters,
  error
}
```

Adáptalo al dominio.

Identifica qué información es derivada y no debe duplicarse.

# Etapa 4 — Lógica pura

Separa:
- filtros;
- cálculos;
- validaciones;
- transformaciones.

Prueba estas funciones primero.

# Etapa 5 — Render

La UI se deriva del estado.

Renderiza datos externos como texto salvo que exista una necesidad explícita de HTML sanitizado.

# Etapa 6 — Eventos

Usa controles semánticos y delegación cuando reduzca listeners/acoplamiento.

No recrees botones con div.

# Etapa 7 — Formularios

Maneja submit, FormData, conversión y validación.

Distingue validación del navegador, lógica cliente y reglas que necesitarían backend.

# Etapa 8 — Persistencia local

Solo si aporta.

Versiona el formato y recupera ante datos corruptos.

No almacenes secretos.

# Etapa 9 — API externa

Si el proyecto la necesita:
- cliente separado;
- response.ok;
- parseo;
- validación mínima;
- timeout/cancelación;
- datos no confiables.

# Etapa 10 — Estados remotos

Implementa:
- idle;
- loading;
- success;
- empty;
- error;
- retry cuando tenga sentido.

Evita respuestas obsoletas.

# Etapa 11 — Accesibilidad dinámica

Prueba:
- teclado;
- foco;
- nombres;
- estados ARIA;
- anuncios necesarios;
- zoom/reflow heredados del HTML/CSS.

# Etapa 12 — Módulos

Organiza responsabilidades sin ciclos.

Ejemplo:

```text
api
domain
state
ui
app
```

No es obligatorio usar esos nombres.

# Etapa 13 — npm y calidad

Incluye scripts para:
- test;
- lint;
- format cuando uses herramientas correspondientes.

Versiona lockfile y excluye node_modules.

# Etapa 14 — Pruebas

Incluye:
- funciones puras;
- al menos un comportamiento DOM;
- un escenario async/error.

No uses Internet real en la suite.

# Etapa 15 — Seguridad

Audita:
- innerHTML;
- URLs;
- storage;
- secretos;
- dependencias;
- decisiones de autorización que deben pertenecer al servidor.

# Etapa 16 — Rendimiento

Elige un flujo:
1. baseline;
2. profile;
3. hipótesis;
4. cambio;
5. nueva medición.

No se exige “mejora” si la evidencia muestra que el supuesto cuello no era real.

# Etapa 17 — Depuración

Incluye una bitácora de al menos un fallo real:
```text
síntoma → hipótesis → evidencia → corrección → regresión
```

# Etapa 18 — README

Otra persona debe poder:
1. instalar;
2. ejecutar;
3. probar;
4. entender módulos;
5. conocer fuente de datos;
6. comprender limitaciones.

# Etapa 19 — Publicación

Si es una app puramente frontend, publícala en hosting estático compatible.

Si depende de una API, documenta CORS/configuración y no incluyas secretos.

# Etapa 20 — Revisión final

Usa `PLANTILLA_PROYECTO.md`, `RUBRICA.md` y `CHECKLIST.md`.

Pregunta:
- ¿el estado es explícito?
- ¿DOM y datos están separados?
- ¿hay loading/empty/error?
- ¿funciona con teclado?
- ¿hay XSS evitable?
- ¿las pruebas son reproducibles?
- ¿los módulos tienen ciclos?
- ¿otra persona puede ejecutar?

# Entregables

- código;
- package/lockfile cuando aplique;
- pruebas;
- README;
- URL publicada si aplica;
- evidencia de accesibilidad;
- bitácora de diagnóstico;
- medición de rendimiento.

# Cierre

> Saber JavaScript no consiste en memorizar métodos: consiste en comprender el modelo de ejecución, controlar el estado, diseñar efectos y construir interfaces que sigan siendo correctas cuando la red, los datos y las personas no se comportan como el caso ideal.
