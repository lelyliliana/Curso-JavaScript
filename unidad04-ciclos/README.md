# Unidad 04: Ciclos e iteración

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

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
const objeto = { nombre: "Ana", activo: true };
for (const clave in objeto) {
  if (Object.hasOwn(objeto, clave)) console.log(clave, objeto[clave]);
}
```

Recorre nombres de propiedades enumerables, incluyendo consideraciones de herencia.

No es la opción habitual para recorrer valores de arrays.

# 5. while

```js
let intentos = 0;
while (intentos < 3) {
  console.log(`Intento ${intentos + 1}`);
  intentos += 1;
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



## Laboratorio completo: Recorrer y acumular

### Modelo y contrato

El acumulador conserva un resultado parcial y el contador registra cuántos casos cumplen una condición. Sus valores iniciales deben representar el conjunto vacío: suma 0 y contador 0 son identidades apropiadas aquí. Para un máximo, 0 no siempre sirve porque todos los datos podrían ser negativos.

for...of recorre valores de un iterable; for...in enumera nombres de propiedades y no es el recorrido recomendado para datos de un array. En un ciclo por índice, la condición i < length evita consultar una posición fuera del rango. break termina ese ciclo y continue pasa a la siguiente iteración; ninguno significa terminar toda la aplicación. Define qué ocurre con una lista vacía antes de dividir para obtener un promedio.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** suma 9, positivos 2 y cantidad 4.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
const valores = [4, -2, 7, 0];
let suma = 0;
let positivos = 0;
for (const valor of valores) {
  suma += valor;
  if (valor > 0) positivos += 1;
}
mostrar({ suma, positivos, cantidad: valores.length });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Prueba una lista vacía y una lista de números negativos. Añade promedio con un resultado explícito para ausencia de datos; no devuelvas un NaN accidental.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 03: Decisiones y truthiness](../unidad03-decisiones/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 05: Funciones como valores](../unidad05-funciones/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2004%20%E2%80%94%20Ciclos%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad04-ciclos%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
