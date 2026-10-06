"""Casos observables del curso. Ejecutar desde su raíz: python tests/navegador.py."""
import json
import subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

RAIZ = Path(__file__).resolve().parents[1]
comprobaciones = 0

def comprobar(condicion, mensaje):
    global comprobaciones
    assert condicion, mensaje
    comprobaciones += 1

def salida(page):
    return json.loads(page.locator('#salida').inner_text())

servidor = subprocess.Popen(['node', 'tests/servidor-pruebas.js'], cwd=RAIZ,
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
try:
    origen = servidor.stdout.readline().strip()
    assert origen.startswith('http://127.0.0.1:'), servidor.stderr.read()
    with sync_playwright() as p:
        browser = p.firefox.launch()
        context = browser.new_context()
        page = context.new_page()
        errores = []
        page.on('pageerror', lambda error: errores.append(str(error)))
        page.on('response', lambda response: errores.append(f'{response.status}: {response.url}')
                if response.status >= 400 and '/api/catalogo' not in response.url else None)
        unidades = sorted(RAIZ.glob('unidad*/ejemplo/index.html'))
        comprobar(len(unidades) == 32, '32 laboratorios')
        resultados = {}
        for html in unidades:
            n = int(html.parts[-3][6:8])
            page.goto(origen + '/' + html.relative_to(RAIZ).as_posix())
            expect(page.locator('h1')).to_be_visible()
            # Cada pantalla es usable en móvil y con texto duplicado.
            for ancho in [320, 768, 1440]:
                page.set_viewport_size({'width': ancho, 'height': 900})
                for escala in ['100%', '200%']:
                    page.evaluate('(v)=>document.documentElement.style.fontSize=v', escala)
                    comprobar(page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'), f'Desbordamiento: {html} {ancho} {escala}')
            page.evaluate("document.documentElement.style.fontSize='100%'")
            page.set_viewport_size({'width': 1000, 'height': 800})
            if n == 0:
                expect(page.locator('#salida')).to_have_text('El módulo cargó correctamente.')
            elif n in [13, 14, 15, 16, 20, 21, 22, 28, 30, 31]:
                if n == 13:
                    page.locator('button[data-id]').first.click()
                    comprobar('elegido' in salida(page), 'Delegación por id')
                elif n == 14:
                    page.locator('#nombre').fill('  '); page.locator('button').click()
                    expect(page.locator('#nombre')).to_have_attribute('aria-invalid', 'true')
                    page.locator('#nombre').fill(' Ana '); page.locator('button').click()
                    comprobar(salida(page) == {'nombre': 'Ana', 'guardadoEnServidor': False}, 'Formulario normaliza texto')
                elif n == 15:
                    page.locator('#agregar').click()
                    expect(page.locator('#estado')).to_have_text('1 recursos disponibles.')
                    expect(page.locator('#agregar')).to_be_focused()
                elif n == 16:
                    page.locator('#tema').select_option('oscuro'); page.reload()
                    expect(page.locator('#tema')).to_have_value('oscuro')
                elif n in [20, 21, 22]:
                    page.locator('#cargar').click(); expect(page.locator('#estado')).to_have_text('2 recursos cargados.')
                    comprobar(salida(page)['fase'] == 'success', 'Estado de éxito')
                elif n == 28:
                    page.locator('#sumar').click(); expect(page.locator('#salida')).to_have_text('Cantidad: 1')
                elif n == 30:
                    page.locator('#generar').click(); comprobar(salida(page)['cantidad'] == 100, 'Fragmento de 100 elementos')
                elif n == 31:
                    texto='<img src=x onerror=alert(1)>'
                    page.locator('#entrada').fill(texto); page.locator('#mostrar').click()
                    expect(page.locator('#texto')).to_have_text(texto)
                    comprobar(page.locator('#texto img').count() == 0, 'Texto literal sin ejecución')
            else:
                expect(page.locator('#salida')).not_to_be_empty()
                if n == 17:
                    expect(page.locator('#salida')).to_contain_text('timer')
                resultados[n] = salida(page)
            comprobar(not errores, f'Errores del laboratorio {n}: {errores}')
        comprobar(resultados[1]['intentos'] == 2 and resultados[1]['tipoNull'] == 'object', 'Tipos y const')
        comprobar(resultados[2]['sumaTexto'] == '123' and resultados[2]['sumaNumero'] == 15 and resultados[2]['defectoConNullish'] == 0, 'Coerción y nullish')
        comprobar([v['resultado'] for v in resultados[3]] == ['menor','menor','adulta','adulta','inválida','inválida','inválida'], 'Decisiones con límites')
        comprobar(resultados[4] == {'suma':9,'positivos':2,'cantidad':4}, 'Acumulación')
        comprobar(resultados[5] == {'dos':25,'ninguno':0}, 'Función pura')
        comprobar(resultados[6] == [1,2,11,3,12], 'Cierres independientes')
        comprobar(resultados[7]['notas'] == [2,4,5,3] and resultados[7]['ordenadas'] == [2,3,4,5] and resultados[7]['suma'] == 14, 'Arrays sin ordenar original')
        comprobar(resultados[8]['mismoContacto'] and resultados[8]['persona']['contacto']['ciudad'] == 'Montería', 'Copia superficial')
        comprobar(resultados[9]['cupos'] == 0 and resultados[9]['suma'] == 6, 'Destructuring y rest')
        comprobar(resultados[10]['frecuencias'] == [['sol',2],['agua',1]] and resultados[10]['objetosDistintos'] == 2, 'Map y Set')
        comprobar(resultados[11] == {'primero':1,'segundo':11,'a':1,'b':11}, 'Instancias')
        comprobar(resultados[12]['elementos'] == 2, 'DOM seguro')
        comprobar(resultados[17] == ['inicio','fin','microtarea','timer'], 'Orden de ejecución')
        comprobar(resultados[18][0]['valor'] == 6 and resultados[18][1]['estado'] == 'rejected', 'Promesas resueltas y rechazadas')
        comprobar(resultados[19]['suma'] == 7, 'Async await')
        comprobar(resultados[23]['resultado'] == 5 and resultados[24]['suma'] == 10, 'Módulos relativos')
        comprobar([v['resultado']['ok'] for v in resultados[25]] == [True,True,False,False,False], 'Contrato de cantidad')
        comprobar(all(v['esperado'] == v['observado'] for v in resultados[26]), 'Casos de prueba')
        comprobar(resultados[27]['resultado'] == 15, 'Depuración de conversión')
        comprobar(resultados[29]['pendientes'][0]['titulo'] == 'Leer el módulo', 'Dominio separado')
        # Catálogo: todas las categorías y solicitud más reciente.
        page.goto(origen + '/ejemplos/app-referencia/')
        for escenario, esperado in [('normal','2 recursos cargados.'),('vacio','No hay resultados.'),('http404','http:'),('http500','http:'),('jsoninvalido','json:'),('esquemainvalido','esquema:'),('lento','timeout:')]:
            page.locator('#escenario').select_option(escenario); page.locator('#cargar').click()
            expect(page.locator('#estado')).to_contain_text(esperado)
            expect(page.locator('#cancelar')).to_be_disabled()
            comprobar(not page.locator('#lista').get_attribute('aria-busy'), 'Busy retirado')
        page.locator('#escenario').select_option('lento'); page.locator('#cargar').click(); page.locator('#cancelar').click()
        expect(page.locator('#estado')).to_contain_text('cancelada:'); expect(page.locator('#cargar')).to_be_focused()
        page.locator('#cargar').click(); page.locator('#escenario').select_option('normal'); page.locator('#cargar').click()
        expect(page.locator('#estado')).to_have_text('2 recursos cargados.')
        page.wait_for_timeout(850)
        expect(page.locator('#estado')).to_have_text('2 recursos cargados.')
        # Proyecto: CRUD, filtros y recarga.
        page.goto(origen + '/ejemplos/gestor-tareas/')
        def agregar(texto):
            page.locator('#titulo').fill(texto); page.locator('#guardar').click()
        agregar(' Leer '); agregar('Practicar')
        expect(page.locator('#lista li')).to_have_count(2)
        page.locator('button[data-id="1"][data-accion="alternar"]').click()
        expect(page.locator('#titulo')).to_be_focused()
        page.locator('#filtro').select_option('completadas')
        expect(page.locator('#lista li')).to_have_count(1)
        page.locator('button[data-id="1"][data-accion="editar"]').click()
        page.locator('#titulo').fill('Estudiar'); page.locator('#guardar').click()
        expect(page.locator('#lista li')).to_contain_text(['Estudiar'])
        page.locator('button[data-accion="editar"]').click(); page.locator('#titulo').fill('No guardar'); page.locator('#cancelar').click()
        expect(page.locator('#lista li')).to_contain_text(['Estudiar'])
        page.locator('#filtro').select_option('todas'); page.locator('#buscar').fill('PRACT')
        expect(page.locator('#lista li')).to_contain_text(['Practicar'])
        page.locator('button[data-id="2"][data-accion="eliminar"]').click(); page.locator('#buscar').fill('')
        expect(page.locator('#lista li')).to_have_count(1)
        page.reload(); expect(page.locator('#lista li')).to_contain_text(['Estudiar'])
        agregar(' '); expect(page.locator('#titulo')).to_have_attribute('aria-invalid','true')
        agregar('<img src=x onerror=alert(1)>'); comprobar(page.locator('#lista img').count()==0,'Tarea de texto literal')
        agregar('x'*80)
        for ancho in [320,768,1440]:
            page.set_viewport_size({'width':ancho,'height':900})
            for escala in ['100%','200%']:
                page.evaluate('(v)=>document.documentElement.style.fontSize=v',escala)
                comprobar(page.evaluate('document.documentElement.scrollWidth <= innerWidth+1'),f'Gestor {ancho} {escala}')
        page.evaluate("localStorage.setItem('curso-js-tareas-v1','{corrupto')")
        page.reload(); expect(page.locator('#error')).to_contain_text('No se pudo leer')
        comprobar(page.evaluate("localStorage.getItem('curso-js-tareas-v1')") == '{corrupto','Lectura no sobrescribe corrupción')
        expect(page.locator('#lista li')).to_have_count(0)
        # Perfil aparte: escritura rechazada sin perder la sesión en memoria.
        otro=browser.new_context()
        otro.add_init_script("Storage.prototype.setItem=function(){throw new DOMException('Cuota','QuotaExceededError')}")
        fallo=otro.new_page(); fallo.goto(origen+'/ejemplos/gestor-tareas/')
        fallo.locator('#titulo').fill('En memoria'); fallo.locator('#guardar').click()
        expect(fallo.locator('#lista li')).to_have_count(1)
        expect(fallo.locator('#error')).to_contain_text('no se pudo guardar')
        comprobar(not errores, f'Errores no esperados: {errores}')
        otro.close(); context.close(); browser.close()
    print(f'{comprobaciones} comprobaciones y recorridos de interacción correctos en Firefox.')
finally:
    servidor.terminate()
    try:
        servidor.wait(timeout=10)
    except subprocess.TimeoutExpired:
        servidor.kill(); servidor.wait()
