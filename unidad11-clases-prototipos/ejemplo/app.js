function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
class Contador {
  #valor;
  constructor(inicio = 0) { this.#valor = inicio; }
  incrementar() { this.#valor += 1; return this.#valor; }
  get valor() { return this.#valor; }
}
const a = new Contador();
const b = new Contador(10);
mostrar({ primero: a.incrementar(), segundo: b.incrementar(), a: a.valor, b: b.valor });
