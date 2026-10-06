import { readdirSync, readFileSync, existsSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
const raiz=fileURLToPath(new URL('../',import.meta.url));
const archivos=[]; function recorrer(dir){for(const e of readdirSync(dir,{withFileTypes:true})){if(['node_modules','.git','__pycache__'].includes(e.name))continue;const p=resolve(dir,e.name);if(e.isDirectory())recorrer(p);else archivos.push(p);}} recorrer(raiz);
const fallos=[]; let referencias=0,modulos=0,fragmentos=0;
const temporal=mkdtempSync(resolve(tmpdir(),'curso-js-'));
const fragmento=resolve(temporal,'fragmento.mjs');
function revisar(p,url){if(/^(https?:|mailto:|data:|#)/.test(url))return;const limpia=decodeURIComponent(url.split('#')[0].split('?')[0]);if(!limpia)return;referencias++;if(!existsSync(resolve(dirname(p),limpia)))fallos.push(`${p}: referencia inexistente ${url}`);}
for(const p of archivos){const ext=extname(p);const texto=readFileSync(p,'utf8');
 if(ext==='.js'){modulos++;const r=spawnSync(process.execPath,['--check',p],{encoding:'utf8'});if(r.status!==0)fallos.push(r.stderr);for(const m of texto.matchAll(/\b(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g))revisar(p,m[1]);}
 if(ext==='.html')for(const m of texto.matchAll(/\b(?:src|href)=["']([^"']+)["']/g))revisar(p,m[1]);
 if(ext==='.md'){for(const m of texto.matchAll(/```js\n([\s\S]*?)```/g)){fragmentos++;writeFileSync(fragmento,m[1]);const r=spawnSync(process.execPath,['--check',fragmento],{encoding:'utf8'});if(r.status!==0)fallos.push(`${p}, fragmento ${fragmentos}: ${r.stderr}`);}const prosa=texto.replace(/```[^\n]*\n[\s\S]*?```/g,'');for(const m of prosa.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g))revisar(p,m[1]);}
}
const unidades=readdirSync(raiz).filter(n=>/^unidad\d\d-/.test(n)).sort();
if(unidades.length!==34)fallos.push('Deben conservarse las 34 unidades.');
for(const [i,u] of unidades.entries()){if(!u.startsWith(`unidad${String(i).padStart(2,'0')}-`))fallos.push('Secuencia incorrecta');for(const f of ['README.md','PRACTICA.md','SOLUCIONES.md'])if(!existsSync(resolve(raiz,u,f)))fallos.push(`${u}/${f} ausente`);}
rmSync(temporal,{recursive:true,force:true});
if(fallos.length){console.error(fallos.join('\n'));process.exitCode=1;}else console.log(`${unidades.length} unidades, ${modulos} archivos JavaScript, ${fragmentos} fragmentos y ${referencias} referencias locales comprobadas.`);
