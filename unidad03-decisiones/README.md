# Unidad 03: Decisiones y truthiness

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Construir condiciones sin confundir ausencia, falsedad y valores válidos.

# 1. if

```js
if (edad >= 18) {
  console.log("Mayor");
} else {
  console.log("Menor");
}
```

La condición se evalúa mediante truthiness.

# 2. Peligro

```js
if (!cantidad) {
  console.log("Falta cantidad");
}
```

También entra cuando cantidad es 0.

Si 0 es válido, la condición es incorrecta.

# 3. Ausencia explícita

```js
if (cantidad == null) {
  // null o undefined
}
```

Este es uno de los pocos usos intencionales de igualdad abstracta que algunos equipos aceptan para comprobar ambos nullish. También puedes escribir la condición explícitamente.

Documenta la convención.

# 4. else-if

Ordena de específico a general cuando los rangos se solapan conceptualmente.

Prueba límites.

# 5. switch

Útil para valores discretos:

```js
switch (estado) {
  case "nuevo":
    break;
  case "pagado":
    break;
  default:
}
```

Recuerda `break` en switch tradicional salvo que quieras fall-through deliberado.

# 6. Ternario

```js
const etiqueta = activo ? "Activo" : "Inactivo";
```

Bueno para una expresión simple.

Ternarios anidados pueden reducir legibilidad.

# 7. Guard clauses

```js
function procesar(usuario) {
  if (!usuario) return;
  if (!usuario.activo) return;
  // camino principal
}
```

Pueden reducir anidación cuando expresan precondiciones claras.

# 8. Práctica guiada

Clasifica:

- undefined;
- null;
- 0;
- "";
- false;
- valor positivo.

Decide cuáles significan “ausente” según un contrato que tú definas.

# 9. Errores frecuentes

- !valor para cualquier validación;
- olvidar break;
- ternarios anidados;
- no probar 0/"";
- confundir falsy con inválido.

# 10. Reto
Validador de cantidad donde 0 es permitido, ausencia no, y negativos son inválidos.

# 11. Autoevaluación

1. ¿0 es falsy?
2. ¿Falsy significa inválido?
3. ¿Cuándo switch?
4. ¿Ternario para lógica extensa?
5. ¿Qué es guard clause?

# 12. Checklist

- [ ] Distingo ausencia/falsy.
- [ ] Pruebo límites.
- [ ] Elijo if/switch.
- [ ] Mantengo condiciones legibles.

Continúa con ciclos.



## Laboratorio completo: Decisiones con contrato

### Modelo y contrato

Una decisión debe cubrir límites y datos no admitidos. El contrato de clasificar exige un entero numérico de 0 a 120. Convertir silenciosamente una cadena cambiaría ese contrato. Primero se valida, después se aplica el umbral. Un retorno temprano permite que cada camino sea explícito y evita anidar varias condiciones.

Las condiciones se evalúan según truthiness: un objeto vacío y un array vacío son truthy. No uses if(lista) para decidir si hay elementos; comprueba length. Tampoco confundas asignación con comparación. Los casos de prueba deben incluir justo debajo, en el umbral y justo encima. Una lista de ejemplos típicos puede omitir el único límite incorrecto.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** 0 y 17 son menor; 18 y 120 adulta; -1, 121 y la cadena "18" inválida.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
function clasificar(edad) {
  if (!Number.isInteger(edad) || edad < 0 || edad > 120) return 'inválida';
  if (edad < 18) return 'menor';
  return 'adulta';
}
mostrar([0, 17, 18, 120, -1, 121, '18'].map(edad => ({ edad, resultado: clasificar(edad) })));
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Agrega casos 17.5, null y NaN. Cambia el umbral a 21 y actualiza la tabla esperada antes de ejecutar.

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 02: Operadores, coerción y comparación](../unidad02-operadores/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 04: Ciclos e iteración](../unidad04-ciclos/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2003%20%E2%80%94%20Decisiones%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad03-decisiones%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
