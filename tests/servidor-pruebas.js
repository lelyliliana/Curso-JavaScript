import { crearServidor } from '../servidor/server.js';
const server=crearServidor();
server.listen(0,'127.0.0.1',()=>console.log(`http://127.0.0.1:${server.address().port}`));
