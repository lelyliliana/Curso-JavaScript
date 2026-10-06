function mostrar(valor) {
  document.querySelector('#salida').textContent = JSON.stringify(valor, null, 2);
}
const persona = { nombre: 'Ana', contacto: { ciudad: 'Sahagún' } };
const copia = { ...persona };
copia.nombre = 'Luis';
copia.contacto.ciudad = 'Montería';
mostrar({ persona, copia, mismoContacto: persona.contacto === copia.contacto });
