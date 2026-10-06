import test from 'node:test';
import assert from 'node:assert/strict';
import * as d from '../lib/dominio.js';
import { leer, guardar, CLAVE } from '../ejemplos/gestor-tareas/almacenamiento.js';
for (const [entrada, valor] of [['0',0],[' 100 ',100],['0008',8]]) test(`Cantidad válida: ${entrada}`, () => assert.deepEqual(d.analizarCantidad(entrada),{ok:true,valor}));
for (const entrada of ['', ' ', '-1','1.5','1e2','101','123456789',null,5]) test(`Cantidad rechazada: ${JSON.stringify(entrada)}`, () => assert.equal(d.analizarCantidad(entrada).ok,false));
test('Títulos: normalización y límites', () => {
  assert.equal(d.validarTitulo(' Leer '),'Leer'); assert.equal(d.validarTitulo('a'.repeat(80)).length,80);
  for (const v of ['', ' ', 'a'.repeat(81),null,1]) assert.throws(() => d.validarTitulo(v));
});
test('CRUD independiente de índices y sin mutar entradas', () => {
  const original = Object.freeze([Object.freeze({id:8,titulo:'Leer',completada:false})]);
  const nuevas = d.crearTarea(original,' Leer '); assert.equal(nuevas[1].id,9); assert.notEqual(nuevas[0],original[0]);
  const editadas = d.cambiarTarea(nuevas,9,{titulo:'Practicar',completada:true});
  assert.equal(nuevas[1].titulo,'Leer'); assert.equal(editadas[1].titulo,'Practicar');
  assert.deepEqual(d.filtrarTareas(editadas,'completadas','PRACT'),[editadas[1]]);
  assert.deepEqual(d.eliminarTarea(editadas,9),original);
  assert.throws(() => d.cambiarTarea(original,7,{})); assert.throws(() => d.eliminarTarea(original,7));
  assert.throws(() => d.cambiarTarea(original,8,{completada:'true'}));
  assert.throws(() => d.filtrarTareas(original,'otra'));
});
test('Colecciones corruptas, duplicados y límites', () => {
  const base={id:1,titulo:'Leer',completada:false};
  for (const v of [null,{},[null],[{...base,id:0}],[{...base,id:1.5}],[{...base,titulo:' Leer '}],[{...base,completada:0}],[base,base]]) assert.throws(() => d.validarTareas(v));
  const llenas=Array.from({length:200},(_,i)=>({...base,id:i+1}));
  assert.equal(d.validarTareas(llenas).length,200); assert.throws(() => d.crearTarea(llenas,'Otra'));
  assert.throws(() => d.validarTareas([...llenas,{...base,id:201}]));
  assert.throws(() => d.crearTarea([{...base,id:1000000000}],'Otra'));
  assert.deepEqual(d.validarTareas([{...base,extra:123}]),[base]);
});
test('Persistencia versionada y rechazo completo', () => {
  const tareas=d.crearTarea([],'Leer'); assert.deepEqual(d.deserializar(d.serializar(tareas)),tareas);
  for (const v of ['{','null','{"version":2,"tareas":[]}','{"version":1,"tareas":[null]}','x'.repeat(100001)]) assert.throws(() => d.deserializar(v));
});
test('Storage: clave propia, fallos y lectura sin sobrescritura', () => {
  const datos=new Map(); const storage={getItem:k=>datos.get(k)??null,setItem:(k,v)=>datos.set(k,v)};
  assert.deepEqual(leer(storage),[]); guardar(storage,d.crearTarea([],'Leer')); assert.equal(leer(storage)[0].titulo,'Leer');
  datos.set(CLAVE,'{corrupto'); assert.throws(() => leer(storage)); assert.equal(datos.get(CLAVE),'{corrupto');
  assert.throws(() => guardar({setItem(){throw new Error('Cuota');}},[]));
});
