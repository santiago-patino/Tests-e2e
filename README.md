# Tests-e2e - Ghost
-------

## Participantes:
| Nombre    | Correo Electrónico     |
|-------------|-------------------------|
| Edna Katherine Conde Vega    | e.condev@uniandes.edu.co             |
| Jhon Fernando Ávila Uribe    | jf.avila@uniandes.edu.co             |
| Manuel Guillermo Sánchez Ballén | mg.sanchezb1@uniandes.edu.co       |
| Santiago Patiño Hernandez    | s.patino@uniandes.edu.co             |

## Url del sitio:

- Ghost version: 5.14
  
  https://ghost-xefe.onrender.com/
  
- Ghost version: 3.42
  
  http://jfautest.online/

## Instrucciones de ejecucion
- Clonar el repositorio git:
  `git clone https://github.com/santiago-patino/Tests-e2e.git`
- Instalar node
  Recomendamos instalar la version de node `v16.20.0`

  Puede obtenerla en este enlace:
  https://nodejs.org/en/blog/release/v16.20.0

### Cypress

Asegurar que tiene instalado:
- Android SDK (definiendo las variables de entorno de Sdk, platform-tools y build-tools)
- Java (definiendo la variable de entorno del Jdk)

En la raiz del proyecto por medio de la terminal, ejecutar los siguientes commandos:

1. Ir a la carpeta de cypress con `cd cypress`. Aqui encontrara dos directorios `3.42` y `5.14` correspondientes a las versiones de ghost utilizadas
2. Acceda a la version que desea ejecutar con `cd 3.42` ó `cd 5.14`
3. Una vez aquí con el comando `npm i` instalará las dependencias necesarias:
   - cypress@^9.6.0
   - cypress-cucumber-preprocessor@^4.3.1
     
Comentario:

     En caso de presentarse algún error en la instalación de las dependencias puede instalar cada una de forma independiente:
     
     npm install cypress@^9.6.0 --save-dev
     npm install cypress-cucumber-preprocessor@^4.3.1 --save-dev
       
5. Una vez se instalen las dependencias Ejecutar `npx cypress run`. Este comando empezará a ejecutar los escenarios
   
### Kraken

En la raiz del proyecto por medio de la terminal, ejecutar los siguientes commandos:

1. Ir a la carpeta de kraken con `cd kraken`.
2. Con el comando `npm i` podra instalar las dependencias necesarias:
   - chai@^4.3.6
   - kraken-node@^1.0.24
   - cucumber@^6.0.7
  
  Comentario:

     En caso de presentarse algún error en la instalación de las dependencias puede instalar cada una de forma independiente:
     
     npm install chai@^4.3.6 
     npm install kraken-node@^1.0.24
     npm install cucumber@^6.0.7 --save-dev
     
3. Despues de haber realizo la instalacion de las depencias se debe escoger el numero de la funcionalidad para ejecutar los escenarios asociados (Revisar lista de escenarios y su funcionalidad asociada).
   
   (Seleccionar funcionalidad 1 Members)

   `npm run func -- 1`

   (Seleccionar funcionalidad 2 Posts)

   `npm run func -- 2`

   (Seleccionar funcionalidad 3 Pages)

   `npm run func -- 3`

   (Seleccionar funcionalidad 4 Cambiar contraseña)

   `npm run func -- 4`

5. Despues de seleccionar la funcionalidad ejecute el comando `npx kraken-node run`.

Comentario:

     En caso de presentarse algún error en la ejecucion de las pruebas kraken. Dirijase al esta ubicacion: kraken\features
     Y asegurese que solo el archivo de la funcionalidad seleccionada sea el unico con el tipo .feature 
     (Ya que kraken, no permite ejecutar varios archivos de este tipo a la vez)

## Funcionalidades - Escenarios Semana 5
### Members:

   1. Crear un member con todos los datos válidos y verificar que se creó
   2. Crear un member con datos vacíos y verificar que se recibe un error
   3. Crear un member con datos inválidos y verificar que se recibe un error
   4. Crear un member con datos de un member existente y verificar que se recibe un error
   5. Eliminar un member existente y verificar que ya no aparece en la lista de members
### Posts:

   6. Crear un nuevo post, validar que se cree como borrador
   7. Crear un nuevo post, publicarlo y validar que se visualice
   8. Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice
   9. Editar un nuevo post, actualizarlo y validar que se visualice la modificacion
   10. Eliminar post y validar que ya no aparezca en los posts
### Pages:

   11. Crear una page con todos sus datos, publicar y visualizar
   12. Crear y editar una page con todos sus datos, actualizar y visualizar
   13. Crear, eliminar page y validar que no se encuentre page
   14. Crear page draft con todos sus datos e intentar visualizar
   15. Crear page y validar que sea accesible
### Cambio de contraseña:
  
   16. Cambiar contraseña con contraseña vieja invalida y nueva contraseña
   17. Cambiar contraseña con contraseña vieja vacía y nueva contraseña
   18. Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes
   19. Cambio de contraseña con contraseña vieja y contraseñas nuevas vacías
   20. Cambio de contraseña exitoso

## Funcionalidades - Escenarios Semana 6 (Regresión visual)
### Members:

   1. Crear un member con datos vacíos y verificar que se recibe un error **(Escenario 2)**
   2. Crear un member con datos inválidos y verificar que se recibe un error **(Escenario 3)**
### Posts:

   3. Crear un nuevo post, publicarlo y validar que se visualice **(Escenario 7)**
   4. Eliminar post y validar que ya no aparezca en los posts **(Escenario 10)**
### Page:

   5. Crear una page con todos sus datos, publicar y Validar creación **(Escenario 11)**
   6. Crear, eliminar page y validar que no se encuentre page **(Escenario 13)**
   7. Crear page y validar que sea accesible  **(Escenario 15)**

### Cambio contraseña:

8. Cambiar contraseña con contraseña vieja invalida y nueva contraseña **(Escenario 16)**
9. Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes **(Escenario 18)**
10. Cambio de contraseña exitoso  **(Escenario 20)**

## Comparacion de screeenshots
### Resemble.js
Para comparar los screenshots generados por las 2 versiones de ghost con la herramienta resemble debe:

1. Ubiquese en el directorio /resembler y puede hacerlo con el siguiente comando: `cd resembler`
Instalar las dependencias
2. Una vez aquí con el comando `npm i` instalará las dependencias necesarias:
   - playwright@^1.44.0
   - resemblejs@^5.0.0
     
Comentario:

     En caso de presentarse algún error en la instalación de las dependencias puede instalar cada una de forma independiente:
     
     npm install playwright@^1.44.0
     npm install resemblejs@^5.0.0

3. Despues de instalar las depenencias ahora debe ejecutar la herramienta con el siguiente comando: `node index.js`

Importante:

     Recuerde ejecutar primero los escenarios cypress para la version 3.42 y 5.14 ya que esta herramienta requerira de los screenshots que estas generen para hacer la comparacion. Si llega a faltar algun screenshot la herramienta no se ejecutara correctamente.
     Pero si desea visualizar un reporte previamente generado puede dirigirse a la ruta `/resembler/results` abrir la primera carpeta que tendra el nombre de la primera ejecucion y ella encontrarar el archivo `report.html` puede abrirlo en cualquier navagedor y podra visualizar el reporte.
     
4. Al ejecutar el comando `node index.js` y este se ejecuto sin ningun problema dirijase a la carpeta `/results` del mismo directorio y acceda a la carpeta mas nueva que debe ser la ultima y dentro de ella encontrara el archivo `report.html`. Podra abrirlo en cualquier navegador y podra visualizar el reporte con las comparaciones de los screenshots y sus propiedades

### BackstopJS
#### Requerimientos previos
Realizar la instalación de backstop de manera global, para esto se abre una terminal y se ejecuta el siguiente comando `npm install -g backstopjs`
#### Pasos para ejecutar las pruebas
Importante:

    Recuerde ejecutar primero los escenarios cypress para la version 3.42 y 5.14 ya que esta herramienta requerira de los screenshots que estas generen para hacer la comparacion.
    Para esto en la ruta /cypress/3.42 y /cypress/5.14 se debe ejecutar el siguiente comando para filtrar los escenarios de la semana 6:
    npx cypress run --config '{"testFiles":["resource/2-escenario.feature","resource/3-escenario.feature","resource/7-escenario.feature","resource/10-escenario.feature","resource/11-escenario.feature","resource/13-escenario.feature","resource/15-escenario.feature","resource/16-escenario.feature","resource/18-escenario.feature", "resource/20-escenario.feature" ]}'
    
1. Abrir un terminal y ubiquese en el directorio /cypress, puede hacerlo con el siguiente comando: `cd cypress`
   
2. Se debe subir un servidor para poder obtener las imagenes y hacer la comparación, para esto ejecute el siguiente comando:
`backstop remote`.

Importante:

    Si dentro de la ruta donde se encuentra el repositoio hay alguna carpeta que tenga un espacio en el nombre el servidor no se ejecutará correctamente 

3. En otra terminal se debe ejecutar el siguiente comando `backstop reference` para generar las imagenes de referencia para la prueba.
4. Una vez finalice de ejecutar el comando anterior se ejecuta el siguiente comando `backstop test` para ejecutar la comparación de las imagenes.
5. Al final se abre un navegador con el reporte generado.

## Análisis de herramientas Semana 5 
[Análisis de herramientas E2E](https://github.com/santiago-patino/Tests-e2e/wiki/An%C3%A1lisis-de-herramientas-E2E)

## Análisis de herramientas Semana 6
[Análisis de herramientas VRT](https://github.com/santiago-patino/Tests-e2e/wiki/An%C3%A1lisis-de-herramientas-VRT)

## Sistema de registro de incidencias
https://github.com/santiago-patino/pruebas-automatizadas-issues/issues

## Estrategias de pruebas
[Estrategias de pruebas](https://github.com/santiago-patino/Tests-e2e/wiki/Estrategias-de-pruebas)
