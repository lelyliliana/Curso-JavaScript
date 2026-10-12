# Unidad 10: Map, Set y elección de estructuras

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
  console.log(clave, valor);
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



## Laboratorio completo: Map y Set

### Modelo y contrato

Map representa pares de clave/valor y admite claves de distintos tipos. Set representa valores únicos según la igualdad utilizada por esa estructura. Dos objetos con id 1 son valores distintos por identidad, así que no se deduplican automáticamente por ese campo.

Si quieres agrupar por un identificador, úsalo como clave y define la política frente a duplicados. Un objeto común también puede representar ciertos diccionarios, pero sus propiedades y prototipo tienen reglas diferentes de Map. Map/Set mantienen un orden de iteración útil y no se serializan como colecciones completas con JSON.stringify de forma automática: transforma entradas/valores cuando necesites persistencia y valida al reconstruir. La estructura se elige por operaciones, no solo por una sintaxis corta.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** frecuencias [["sol",2],["agua",1]], unicos ["sol","agua"] y objetosDistintos 2.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const frecuencias = new Map();
for (const palabra of ['sol', 'agua', 'sol']) {
  frecuencias.set(palabra, (frecuencias.get(palabra) ?? 0) + 1);
}
const unicos = new Set(['sol', 'agua', 'sol']);
mostrar({ frecuencias: [...frecuencias], unicos: [...unicos], objetosDistintos: new Set([{id:1},{id:1}]).size });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Cuenta palabras normalizando mayúsculas de forma explícita. Deduplica registros por id conservando el primero y después el último; explica la diferencia.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 09: Destructuring, spread y rest](../unidad09-destructuring/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 11: Prototipos, clases y this](../unidad11-clases-prototipos/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2010%20%E2%80%94%20Map%2C%20Set%20y%20estructuras%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad10-map-set%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
