import {cargarUsuarios} from "./api.js";
import {renderEstado,renderUsuarios} from "./ui.js";
const boton=document.querySelector("#cargar");
let controller;
boton.addEventListener("click",async()=>{
 controller?.abort();
 controller=new AbortController();
 renderEstado("Cargando…");
 renderUsuarios([]);
 try{
  const usuarios=await cargarUsuarios({signal:controller.signal});
  if(usuarios.length===0){renderEstado("No hay resultados.");return;}
  renderUsuarios(usuarios);renderEstado(`${usuarios.length} usuarios cargados.`);
 }catch(error){
  if(error.name==="AbortError")return;
  renderEstado("No fue posible cargar los usuarios.");
 }
});
