export async function cargarUsuarios({signal}={}) {
 const response=await fetch("https://jsonplaceholder.typicode.com/users",{signal});
 if(!response.ok) throw new Error(`HTTP ${response.status}`);
 return response.json();
}
