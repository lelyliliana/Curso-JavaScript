const lista=document.querySelector("#lista");
const estado=document.querySelector("#estado");
export function renderEstado(texto){estado.textContent=texto;}
export function renderUsuarios(usuarios){
 lista.replaceChildren();
 for(const usuario of usuarios){
  const li=document.createElement("li");
  li.textContent=usuario.name;
  lista.append(li);
 }
}
