# Unidad 11: Prototipos, clases y this

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/javascript/)

## Qué aprenderás
Comprender el modelo prototípico, la sintaxis class, campos privados y cómo se determina this.

# 1. Cadena prototípica

Cuando accedes:

```js
obj.metodo
```

JavaScript busca primero en el objeto y después puede recorrer su cadena de prototipos.

La herencia del lenguaje es prototípica.

# 2. class

```js
class Cuenta {
  #saldo = 0;

  depositar(valor) {
    if (!Number.isFinite(valor) || valor <= 0) {
      throw new Error("Valor inválido");
    }
    this.#saldo += valor;
  }

  get saldo() {
    return this.#saldo;
  }
}
```

`class` ofrece sintaxis/semántica conveniente sobre el modelo de objetos/prototipos; no cambia JavaScript a herencia de clases tradicional idéntica a Java.

# 3. Métodos compartidos

Los métodos declarados en la clase se ubican normalmente en el prototype, por lo que las instancias comparten esa función en vez de copiarla como propiedad propia por instancia.

# 4. this depende de la llamada

```js
const cuenta = {
  saldo: 10,
  mostrar() {
    return this.saldo;
  }
};

cuenta.mostrar(); // this = cuenta
```

Pero:

```js
const fn = cuenta.mostrar;
fn();
```

ya no conserva automáticamente el receptor original.

# 5. Arrow y this

Arrow functions capturan el `this` léxico; no crean uno propio.

Por eso no son reemplazo automático de métodos cuando quieres `this` dinámico.

# 6. bind

```js
const ligada = cuenta.mostrar.bind(cuenta);
```

crea una función con this fijado.

# 7. Campos privados

```js
class Caja {
  #saldo = 0;
  consultar() { return this.#saldo; }
}
```

son privados a nivel del lenguaje, distintos de una convención como `_saldo`.

# 8. Herencia

```js
class CuentaAhorros extends Cuenta {
  describir() { return `Saldo: ${this.saldo}`; }
}
```

Existe, pero no uses herencia solo para reutilizar código. Composición también es válida en JavaScript.

# 9. Objetos sin class

No necesitas class para todo.

Factories, objetos literales y closures pueden modelar comportamiento perfectamente.

Elige según problema.

# 10. Práctica guiada

Crea Cuenta mediante:

1. class;
2. factory con closure.

Compara API, privacidad y uso de this.

# 11. Errores frecuentes

- JavaScript class = Java class;
- this definido por dónde se escribió;
- arrow como cualquier método;
- _campo = privacidad real;
- class obligatoria para modelar objetos.

# 12. Reto
Modela una entidad con invariantes usando class o factory y justifica la elección.

# 13. Autoevaluación

1. ¿Cómo busca propiedades JS?
2. ¿Dónde suelen vivir métodos class?
3. ¿Qué determina this?
4. ¿Arrow tiene this propio?
5. ¿#campo es privado?
6. ¿Class es obligatoria?

# 14. Checklist

- [ ] Comprendo prototype.
- [ ] Comprendo this.
- [ ] Uso privacidad.
- [ ] Elijo class/factory con criterio.

Continúa con DOM.



## Laboratorio completo: Clase con estado propio

### Modelo y contrato

class ofrece sintaxis para objetos con métodos y relaciones de prototipo. Los métodos de esta clase se comparten mediante su prototipo; el campo privado pertenece a cada instancia. Un getter permite consultar valor sin exponer directamente su almacenamiento. No convierte cualquier objeto en inmutable.

this depende de cómo se llama una función ordinaria. Extraer a.incrementar y llamarlo como función suelta pierde el receptor y falla al acceder al campo privado. Una arrow captura this de su entorno y no es un reemplazo universal para métodos de prototipo. La encapsulación debe proteger reglas reales: el constructor de este ejemplo sencillo aún necesita validación si el contrato exige enteros finitos. No diseñes jerarquías de herencia antes de identificar una relación válida; composición o funciones pueden ser más claras.

### Abrir y observar

Inicia el servidor del curso como se explica en [ENTORNO.md](../docs/ENTORNO.md) y abre [ejemplo/index.html](ejemplo/index.html) mediante HTTP. GitHub muestra el código fuente; no ejecuta la página. El HTML y CSS están completos y app.js es el módulo de entrada. Usa una copia local para practicar.

**Resultado esperado:** primero 1, segundo 11, a 1 y b 11.

### Código explicado por su comportamiento

El código principal de [app.js](ejemplo/app.js) es:

```js
class Contador {
  #valor;
  constructor(inicio = 0) { this.#valor = inicio; }
  incrementar() { this.#valor += 1; return this.#valor; }
  get valor() { return this.#valor; }
}
const a = new Contador();
const b = new Contador(10);
mostrar({ primero: a.incrementar(), segundo: b.incrementar(), a: a.valor, b: b.valor });
```

La función mostrar del archivo completo escribe JSON en la región de salida usando textContent. Es una ayuda de presentación, no parte del algoritmo. En los laboratorios interactivos, el HTML proporciona controles con los id que consulta el módulo. Identifica primero esas dependencias antes de copiar el código a otra página.

### Experimento

Valida inicio como entero no negativo y añade reiniciar. Prueba extraer incrementar sin receptor y luego usar bind(a).

Escribe la predicción antes de ejecutar. Cambia una condición por vez, guarda y recarga. Si el resultado difiere, identifica la entrada y la primera operación que rompe el contrato. No consideres correcto un ejemplo únicamente porque no lanzó excepción.

### Práctica y contraste

Completa [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). Ambas páginas permiten volver a esta lección y continuar. Conserva la evidencia de los casos normales, límites y fallos que aplican al tema.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 10: Map, Set y elección de estructuras](../unidad10-map-set/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 12: DOM y renderizado seguro](../unidad12-dom/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2011%20%E2%80%94%20Clases%20y%20prototipos%20del%20curso%20JavaScript%20desde%20cero%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-JavaScript%2Ftree%2Fmain%2Funidad11-clases-prototipos%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
