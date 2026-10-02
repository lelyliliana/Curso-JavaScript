# Unidad 32 — Taller integrador de aplicaciones

## Propósito

Resolver problemas sin que el enunciado indique “usa map”, “usa localStorage” o “usa Promise.all”.

Debes elegir la herramienta y justificarla.

# Método

Para cada reto:
1. define estado;
2. separa lógica de efectos;
3. diseña HTML accesible;
4. implementa eventos;
5. maneja errores;
6. prueba;
7. depura con DevTools;
8. mide si hay requisito de rendimiento;
9. documenta decisiones.

# Reto 1 — Lista de tareas

Incluye:
- agregar;
- completar;
- filtrar;
- eliminar.

El DOM debe reconstruirse desde estado.

# Reto 2 — Buscador

Filtra localmente una colección.

Después crea variante remota con:
- debounce;
- cancelación;
- loading;
- empty;
- error.

# Reto 3 — Formulario

Incluye:
- Constraint Validation;
- regla JS;
- 0 como valor válido en un campo;
- errores accesibles.

# Reto 4 — API

Consume datos remotos y distingue:
- HTTP;
- red;
- parseo;
- timeout.

No mezcles fetch y render en la misma responsabilidad.

# Reto 5 — Dashboard

Calcula:
- totales;
- agrupaciones;
- filtros.

Elige Array, Map y Set donde corresponda y justifica.

# Reto 6 — Preferencias

Persiste tema/configuración en storage con versión y recuperación ante datos corruptos.

# Reto 7 — Accesibilidad dinámica

Implementa disclosure o diálogo pequeño con:
- estado ARIA;
- foco;
- teclado;
- retorno de foco si aplica.

# Reto 8 — Aplicación modular

Divide en:
- datos/API;
- estado;
- lógica;
- UI;
- composición.

Sin ciclos.

# Reto 9 — Pruebas

Para una misma app incluye:
- lógica pura;
- DOM;
- async/error.

No dependas de Internet real.

# Reto 10 — Seguridad

Revisa:
- innerHTML;
- URLs;
- storage;
- secretos;
- autorización asumida en cliente.

# Evidencia

Para cada reto documenta:
- decisión;
- caso límite;
- fallo encontrado;
- prueba;
- captura/resultado de DevTools cuando aporte.

# Autoevaluación

1. ¿Puedo elegir estructura?
2. ¿Distingo estado/DOM?
3. ¿Comprendo asincronía?
4. ¿Puedo cancelar una petición?
5. ¿Pruebo comportamiento?
6. ¿Sé por qué innerHTML puede ser riesgoso?
7. ¿Puedo modularizar sin ciclos?

# Checklist

- [ ] Estado.
- [ ] Accesibilidad.
- [ ] Errores.
- [ ] Pruebas.
- [ ] Seguridad.
- [ ] Módulos.
- [ ] Diagnóstico.

Continúa con proyecto final.
