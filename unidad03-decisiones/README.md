# Unidad 03 — Decisiones y truthiness

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


---

## Continuar el curso

- **Unidad anterior:** [Unidad 02 — Operadores, coerción y comparación](../unidad02-operadores/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 04 — Ciclos e iteración](../unidad04-ciclos/README.md)
