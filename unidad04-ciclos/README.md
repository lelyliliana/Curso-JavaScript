# Unidad 04 — Ciclos e iteración

## Qué aprenderás
Elegir for, while y for...of y distinguir iteración de valores, índices y propiedades.

# 1. for clásico

```js
for (let i = 0; i < datos.length; i++) {
  console.log(datos[i]);
}
```

Útil cuando necesitas índice/control explícito.

# 2. for...of

```js
for (const valor of datos) {
  console.log(valor);
}
```

Recorre valores de un iterable.

Para arrays suele ser más claro si no necesitas índice.

# 3. Índice con entries

```js
for (const [indice, valor] of datos.entries()) {
  console.log(indice, valor);
}
```

No necesitas volver al for clásico solo por índice.

# 4. for...in

```js
for (const clave in objeto) {
  ...
}
```

Recorre nombres de propiedades enumerables, incluyendo consideraciones de herencia.

No es la opción habitual para recorrer valores de arrays.

# 5. while

```js
while (condicion) {
  ...
}
```

Útil cuando no conoces de antemano la cantidad de iteraciones.

Asegura progreso.

# 6. break/continue

Son herramientas válidas.

Úsalas cuando aclaran el flujo, no para convertir un ciclo en una colección de saltos difíciles de seguir.

# 7. Mutar mientras iteras

Eliminar/agregar elementos al mismo array durante un recorrido puede cambiar índices/longitud y producir resultados sorprendentes.

Prefiere construir otro resultado cuando sea apropiado.

# 8. Colecciones vacías

Un for...of simplemente ejecuta cero iteraciones.

Promedios/máximos requieren política explícita para vacío.

# 9. Práctica guiada

Sin usar map/filter/reduce todavía, calcula:
- suma;
- promedio;
- mayor;
- cantidad de positivos;
- nueva lista de pares.

# 10. Errores frecuentes
- <= length;
- for...in para valores de array;
- ciclo infinito;
- mutar colección sin entender;
- dividir entre cero en vacío.

# 11. Reto
Analiza temperaturas con índice, máximos y nueva colección, manejando array vacío.

# 12. Autoevaluación
1. ¿for...of recorre qué?
2. ¿for...in?
3. ¿Cómo obtener índice con for...of?
4. ¿Qué riesgo tiene mutar?
5. ¿Qué ocurre con array vacío?

# 13. Checklist
- [ ] Elijo iteración.
- [ ] Manejo índices.
- [ ] Evito off-by-one.
- [ ] Manejo vacío.

Continúa con funciones.
