# Unidad 32: Taller integrador de aplicaciones

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

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

# Reto 1: Lista de tareas

Incluye:

- agregar;
- completar;
- filtrar;
- eliminar.

El DOM debe reconstruirse desde estado.

# Reto 2: Buscador

Filtra localmente una colección.

Después crea variante remota con:

- debounce;
- cancelación;
- loading;
- empty;
- error.

# Reto 3: Formulario

Incluye:

- Constraint Validation;
- regla JS;
- 0 como valor válido en un campo;
- errores accesibles.

# Reto 4: API

Consume datos remotos y distingue:

- HTTP;
- red;
- parseo;
- timeout.

No mezcles fetch y render en la misma responsabilidad.

# Reto 5: Dashboard

Calcula:

- totales;
- agrupaciones;
- filtros.

Elige Array, Map y Set donde corresponda y justifica.

# Reto 6: Preferencias

Persiste tema/configuración en storage con versión y recuperación ante datos corruptos.

# Reto 7: Accesibilidad dinámica

Implementa disclosure o diálogo pequeño con:

- estado ARIA;
- foco;
- teclado;
- retorno de foco si aplica.

# Reto 8: Aplicación modular

Divide en:

- datos/API;
- estado;
- lógica;
- UI;
- composición.

Sin ciclos.

# Reto 9: Pruebas

Para una misma app incluye:

- lógica pura;
- DOM;
- async/error.

No dependas de Internet real.

# Reto 10: Seguridad

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



## Taller desarrollado: de tareas a aplicación

### Enunciado

Construye una aplicación para organizar tareas ficticias de estudio. La persona debe agregar un título, editarlo, marcar la tarea, eliminarla y encontrarla mediante filtros. Los cambios se guardan en el navegador cuando sea posible. Si el guardado falla, la aplicación informa qué quedó únicamente en memoria.

### Contrato de datos

Cada tarea tiene id entero positivo, titulo normalizado de 1 a 80 unidades UTF-16 y completada booleano. Admitimos títulos iguales; el id distingue tareas. Hay un máximo de 200 registros. La búsqueda ignora capitalización y conserva tildes. Define estas reglas antes de programar controles.

### Etapa 1: dominio

Implementa crear, cambiar, eliminar y filtrar como funciones que devuelvan datos sin consultar DOM. Prueba lista vacía, título de espacios, límite de longitud, id inexistente y eliminación desde una colección filtrada. La colección original debe conservarse ante éxito y ante fallo.

### Etapa 2: vista

Construye formulario etiquetado, selector de estado, búsqueda, lista y regiones de anuncio. Representa los títulos con textContent. Cada acción debe llevar el id de tarea. Un título no se interpreta como HTML ni se convierte en selector CSS.

### Etapa 3: coordinación

Registra listeners una vez. Un handler transforma estado y después llama a render. La edición reutiliza el formulario con un modo explícito; cancelar no guarda. Al reconstruir una lista que contiene el control activo, recupera foco de forma documentada.

### Etapa 4: almacenamiento

Usa una clave propia y JSON versionado. Valida la colección completa antes de reemplazar estado. La carga corrupta no debe borrar la clave automáticamente. La escritura puede fallar; el mensaje debe distinguir cambio en memoria de guardado persistido.

### Etapa 5: pruebas y extensión

Comprueba teclado, filtros, contenido largo, recarga y fallos simulados. Después añade una prioridad con valores definidos y actualiza dominio, persistencia, UI y pruebas. No agregues la propiedad solo al HTML si debe sobrevivir una recarga.

El [registro de práctica](PRACTICA.md) concreta los casos. Consulta [SOLUCIONES.md](SOLUCIONES.md) después de trabajar. La [aplicación completa](../ejemplos/gestor-tareas/README.md) permite comparar código y comportamiento.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 31: Seguridad web básica para frontend](../unidad31-seguridad/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 33: Proyecto final](../unidad33-proyecto-final/README.md)
