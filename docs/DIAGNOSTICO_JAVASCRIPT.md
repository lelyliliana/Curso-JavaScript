# Diagnosticar un fallo de JavaScript

[Índice](../README.md) · [Entorno](ENTORNO.md) · [Depuración](../unidad27-debug/README.md)

“No hace nada” describe un síntoma, pero todavía no localiza una causa. Reproduce el fallo con una entrada concreta y observa la primera etapa donde deja de cumplirse el resultado esperado.

| Etapa | Qué comprobar | Ejemplo | Acción siguiente |
|---|---|---|---|
| Carga | HTML, CSS e imports responden correctamente en Network | app.js devuelve 404 | Revisa ruta y servidor antes de cambiar el algoritmo |
| Sintaxis | Console muestra SyntaxError con archivo y posición | Falta una llave | Corrige la primera causa; errores posteriores pueden ser consecuencia |
| Datos | Tipo y valor antes de transformar | '12' es string | Comprueba contrato y conversión; no aceptes prefijos por accidente |
| DOM | Selector y elemento esperado | querySelector devuelve null | Compara id, documento y momento de ejecución |
| Evento | Listener, control y target | Se pulsa un span del botón | Inspecciona target, currentTarget y closest |
| Red | Status, cuerpo y estructura | HTTP 200 con JSON incompatible | Distingue HTTP, parseo y validación de datos |
| Asincronía | Orden, señal y solicitud vigente | Una respuesta vieja llega después | Revisa cancelación e identidad; no uses retrasos arbitrarios como reparación |
| Estado/render | Modelo y vista corresponden | Lista filtrada modifica otra tarea | Identifica por id y deriva vista del estado |
| Storage | Clave, origen y operación fallida | Guardar lanza excepción | Conserva sesión en memoria e informa que no persistió |

## Una bitácora que otra persona pueda repetir

1. Síntoma: con entrada '12', el resultado mostrado es '123' y se esperaba el número 15.
2. Hipótesis: el operador + está concatenando una cadena.
3. Evidencia: un breakpoint muestra typeof entrada === 'string' y typeof cantidad === 'number'.
4. Corrección: usar cantidad + 3 después de validar y convertir la entrada.
5. Regresión: comprobar que el resultado es el número 15; incluir vacío o sufijo para no convertir cualquier texto sin validación.

Un log de “funciona” no documenta el caso. Registra entrada, condición, salida y versión del código. Restaura los fallos introducidos deliberadamente antes de continuar y comprueba el caso original después de una corrección.

## Herramientas

Console permite observar logs y excepciones; Network permite revisar recursos y respuestas; Sources/Debugger permite detenerse e inspeccionar variables; Elements/Inspector permite distinguir texto literal de elementos creados. Los nombres cambian según navegador. Selecciona la herramienta de acuerdo con la etapa del fallo.

No captures todas las excepciones para esconder mensajes: una interfaz puede manejar fallos previstos e informarlos, mientras que un error inesperado debe investigarse. Consulta [VERIFICACION.md](VERIFICACION.md) para los casos automatizados y sus límites.
