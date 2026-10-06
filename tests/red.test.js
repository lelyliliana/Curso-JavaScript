import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { crearServidor } from '../servidor/server.js';
import { cargarCatalogo, validarCatalogo } from '../lib/cliente.js';
let server, baseURL;
before(async()=>{server=crearServidor(); server.listen(0,'127.0.0.1'); await once(server,'listening'); baseURL=`http://127.0.0.1:${server.address().port}`;});
after(async()=>{server.closeAllConnections(); await new Promise(resolve=>server.close(resolve));});
test('Respuesta real y colección vacía',async()=>{
 assert.equal((await cargarCatalogo({baseURL})).length,2);
 assert.deepEqual(await cargarCatalogo({baseURL,escenario:'vacio'}),[]);
});
for (const [escenario,categoria] of [['http404','http'],['http500','http'],['jsoninvalido','json'],['esquemainvalido','esquema'],['lento','timeout']]) test(`Categoría ${escenario}`,async()=>{
 await assert.rejects(cargarCatalogo({baseURL,escenario,timeoutMs:escenario==='lento'?100:2000}),e=>e.categoria===categoria);
});
test('Cancelación anterior y durante solicitud',async()=>{
 const previo=new AbortController(); previo.abort();
 await assert.rejects(cargarCatalogo({baseURL,signal:previo.signal}),e=>e.categoria==='cancelada');
 const actual=new AbortController(); const promesa=cargarCatalogo({baseURL,escenario:'lento',signal:actual.signal,timeoutMs:2000}); actual.abort();
 await assert.rejects(promesa,e=>e.categoria==='cancelada');
});
test('Fallo de transporte y parámetros inválidos',async()=>{
 await assert.rejects(cargarCatalogo({baseURL,fetchImpl:async()=>{throw new TypeError('Falló fetch');}}),e=>e.categoria==='red');
 await assert.rejects(cargarCatalogo({baseURL,timeoutMs:0}),TypeError);
});
test('Contrato de catálogo y campos descartados',()=>{
 const v={id:1,titulo:'Curso'}; assert.deepEqual(validarCatalogo([{...v,extra:1}]),[v]);
 for(const datos of [{},[null],[{...v,id:0}],[{...v,titulo:''}],[v,v],Array(101).fill(v)]) assert.throws(()=>validarCatalogo(datos));
});
test('Servidor: MIME, métodos, archivos ausentes y extensiones',async()=>{
 const js=await fetch(`${baseURL}/lib/cliente.js`); assert.equal(js.status,200); assert.match(js.headers.get('content-type'),/javascript/);
 assert.equal((await fetch(`${baseURL}/README.md`)).status,403);
 assert.equal((await fetch(`${baseURL}/ausente.html`)).status,404);
 assert.equal((await fetch(`${baseURL}/api/catalogo`,{method:'POST'})).status,405);
 assert.equal((await fetch(`${baseURL}/api/catalogo?escenario=otro`)).status,400);
 assert.equal((await fetch(`${baseURL}/%ZZ`)).status,400);
});
