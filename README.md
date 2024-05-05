# Tests-e2e - Ghost
-------

## Participantes:
- Edna Katherine Conde Vega - e.condev@uniandes.edu.co
- Jhon Fernando Ávila Uribe
- Manuel Guillermo Sánchez Ballén
- Santiago Patiño Hernandez - s.patino@uniandes.edu.co

## Url del sitio:
https://ghost-xefe.onrender.com/
- Ghost version: 

## Instalaciones
Version de node recomendada: `16.20.0`

### Kraken
1. Ir a la carpeta de kraken con `cd kraken`.
2. Instalar appium con `npm i appium`.
3. Instalar lo demas con `npm i`.
4. Ejecutar `npx kraken-node run`.

### Cypress
1. Ir a la carpeta de cypress con `cd cypress`.
2. Instalar con `npm i`.
3. Ejecutar `npx cypress run`.

## Funcionalidades - Escenarios
1. Crear members:
   - Crear un member con todos los datos válidos y visualizar el listado de members para verificar que se creó
   - Crear un member con datos inválidos y verificar que se recibe un error
   - Crear un member con datos de un member existente y verificar que se recibe un error
2. Actualizar members:
   - Editar datos de un member existente y verificar que se actualiza la información del member
   - Eliminar un member existente y verificar que ya no aparece en la lista de members
3. Crear posts:
   - Crear un nuevo post y validar que se cree el borrador
   - Publicar un post borrador y validar que el sitio se genere
4. Actualizar posts:
   - Editar un post y validar la confirmación
   - Eliminar post y validar que ya no aparezca en los posts
5. Crear pages:
   - Crear una page con todos sus datos, publicar y visualizar en web site
   - Crear page draft con todos sus datos, utilizar url en nav bar y visualizar desde web site
6. Actualizar pages: 
   - Editar una page con todos sus datos, publicar y visualizar en web site
   - Eliminar page que se encuentra en nav bar e intentar acceder por nav bar o url

## Resumen Kraken
### Pros
- Permite espeficar de forma muy detallada los escenarios, lo que permite que los errores en su ejecución sean menos probables.
- Es rápido para realizar la ejecución de las pruebas.

### Contras
- Definir los selectores es un proceso largo porque es necesario detallar muy bien dónde se encuentra el elemento, es decir dentro de qué tipo de elementos y clases, porque en algunas ocasiones no encuentra el elemento por el id.
- Si dentro de un escenario se obtiene un error en alguno de los pasos, se detiene la ejecución.

## Resumen Cypress
### Pros
- Genera un video resumen de la ejecución de cada uno de los escenarios.
- Se puede configurar para guardar capturas de pantalla en cada uno de los casos.
- No se detiene la ejecución si hay un fallo en alguno de los pasos de un escenario.

### Contras
- Es más lento para realizar la ejecución de las pruebas. 
- Restringe en cada paso la realización de una sola funcionalidad de click().

## Estrategias de Pruebas
### Estrategia de Pruebas 1 actualizada
[estrategia-pruebas1-actualizada.pdf](https://github.com/santiago-patino/Tests-e2e/files/15212033/estrategia-pruebas1-actualizada.pdf)

### Estrategia de Pruebas 2 actualizada
[estrategia-pruebas2-actualizada.pdf](https://github.com/santiago-patino/Tests-e2e/files/15212034/estrategia-pruebas2-actualizada.pdf)
