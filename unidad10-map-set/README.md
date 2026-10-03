# Unidad 10 — Map, Set y elección de estructuras

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Usar Set para unicidad y Map para asociaciones, comparándolos con Array/Object según operaciones.

# 1. Set

```js
const ids = new Set([1, 2, 2, 3]);
```

Contiene valores únicos según la igualdad usada por Set.

```js
ids.has(2)
ids.add(4)
ids.delete(1)
```

# 2. Deduplicación

```js
const unicos = [...new Set(datos)];
```

Funciona bien para valores primitivos/referencias repetidas.

Dos objetos con el mismo contenido siguen siendo referencias distintas:

```js
new Set([{}, {}]).size // 2
```

# 3. Map

```js
const frecuencia = new Map();

frecuencia.set("html", 3);
frecuencia.get("html");
frecuencia.has("html");
```

Las claves pueden ser valores de distintos tipos, incluidos objetos.

# 4. Map vs Object

Object es excelente para registros/modelos con propiedades conocidas.

Map suele ser conveniente cuando:
- claves son dinámicas;
- necesitas tamaño directo;
- iteración/inserción como colección;
- claves no son solo strings/symbols.

No existe un ganador universal.

# 5. Frecuencias

```js
const frecuencias = new Map();

for (const palabra of palabras) {
  frecuencias.set(
    palabra,
    (frecuencias.get(palabra) ?? 0) + 1
  );
}
```

# 6. Iteración

```js
for (const [clave, valor] of frecuencias) {
  ...
}
```

Map es iterable directamente.

# 7. WeakMap/WeakSet

Existen variantes con referencias débiles y restricciones sobre claves/valores.

Son útiles para casos específicos de asociación con objetos y gestión de memoria; no son “Map más rápido” ni colecciones enumerables normales.

# 8. Práctica guiada

Resuelve el mismo problema de frecuencias con:
- Object;
- Map.

Compara claridad, claves y operaciones.

# 9. Errores frecuentes
- Set deduplica objetos por contenido;
- Map siempre mejor que Object;
- usar Array para búsquedas repetidas por clave sin analizar;
- convertir Map a Object sin considerar tipo de claves;
- WeakMap como caché enumerable.

# 10. Reto
Procesa registros: ids únicos con Set y totales por categoría con Map.

# 11. Autoevaluación
1. ¿Set permite duplicados?
2. ¿Dos {} son iguales?
3. ¿Map admite objeto como clave?
4. ¿Cuándo Object puede ser mejor?
5. ¿Map es iterable?
6. ¿WeakMap se enumera como Map?

# 12. Checklist
- [ ] Elijo por operación.
- [ ] Comprendo identidad.
- [ ] Uso Map/Set.
- [ ] No reemplazo estructuras por moda.

Continúa con prototipos.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 09 — Destructuring, spread y rest](../unidad09-destructuring/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 11 — Prototipos, clases y this](../unidad11-clases-prototipos/README.md)
