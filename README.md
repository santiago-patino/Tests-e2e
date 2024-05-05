# Tests-e2e - Ghost
-------

## Participantes:
- Edna Katherine Conde Vega
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
1. Members:
   - Crear un member con todos los datos válidos y visualizar el listado para verificar que se creó
   - Crear un member con datos inválidos y verificar que se recibe un error
   - Crear un member con datos de un member existente y verificar que se recibe un error
   - Editar datos de un member existente y verificar que se actualiza
   - Eliminar un member existente y verificar que ya no aparece en la lista
2. Posts:
   - Crear un nuevo post y validar que se cree el borrador
   - Publicar un post borrador y validar que el sitio se genere
   - Editar un post y validar la confirmacion
   - Eliminar post y validar que ya no aparezca en los posts
3. Pages
   - Crear una page con todos sus datos, publicar y visualizar en web site
   - Editar una page con todos sus datos, publicar y visualizar en web site
   - Crear page draft con todos sus datos, utilizar url en nav bar y visualizar desde web site
   - Eliminar page que se encuentra en nav bar e intentar acceder por nav bar o url

## Resumen
### Pros
-
-

### Contras
-
-
