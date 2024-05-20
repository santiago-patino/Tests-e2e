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

![image](https://github.com/santiago-patino/Tests-e2e/assets/158110277/6f6360a8-1f10-46b9-97cc-34fef2fbd384)


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

Video analisis Semana 6:
https://youtu.be/Bq1CLC7RrVA

## Sistema de registro de incidencias
https://github.com/santiago-patino/pruebas-automatizadas-issues/issues

## Estrategias de pruebas
[Estrategias de pruebas](https://github.com/santiago-patino/Tests-e2e/wiki/Estrategias-de-pruebas)

----------------------------

## Funcionalidades - Escenarios Semana 7 (Estrategias de generación de datos)
  
### 1. Estrategia pool de datos a-priori
Para esta estrategia se utilizó la herramienta de generación de datos Mockaroo.
Se generaron 1000 registros de datos almacenados en el directorio:

cypress escenarios: `cypress\5.14\cypress\integration\data`

kraken escenarios: `kraken\features\web\data`

### 2. Estrategia pool de datos (pseudo) aleatorio dinámico
Para esta estrategia se utilizaron las api's que ofrece Mockaroo:
- Posts: https://my.api.mockaroo.com/posts.json?key=5092dc40
- Pages: https://my.api.mockaroo.com/pages.json?key=adf0ee10
- Members valid data: https://my.api.mockaroo.com/members_api.json?key=8953aa80
- Members invalid data: https://my.api.mockaroo.com/members_invalidad_data.json?key=8953aa80
  
### 3. Estrategia escenario aleatorio.
Para esta estrategia se utilizó la librería faker. La librería contiene diferentes módulos que permiten la generación de datos aleatorios tanto en Cypress como en Kraken. https://fakerjs.dev/

Para el caso de cypress se instaló faker con el siguiente comando: (Recuerde ubicarse en el directorio principal de cypress `cd cypress`)

`npm install --save-dev @faker-js/faker@8.4.1`

Para el caso de kraken, esta librería NPM [@faker-js/faker](https://github.com/faker-js/faker) ya se encuentra instalada por defecto, así que con haber instalado las dependencias principales indicadas en pasos anteriores no tendrá ningún problema en ejecutar los escenarios


 
## Ejecucion Escenarios Semana 7 paso a paso

Los escenarios están divididos: 60 escenarios en cypress y 60 en kraken

### Escenarios en cypress: (60 escenarios)

Para ejecutar los escenarios de cypress recuerde haber realizado todo el proceso de instalación detallado en el Readme. 
Luego de ubicarse en la carpeta cypress/5.14 con `cd cypress` y `cd 5.14`, seleccione los escenarios que desea ejecutar como se explica a continuación.

- A priori: (20)

    Para ejecutar los escenarios tipo a priori ejecute el siguiente comando:

    `npx cypress run --config '{"testFiles":["**/{21..40}-escenario.feature"]}'`

     Este comando ejecutará 20 escenarios del tipo a priori

- Pseudo: (20)

    Para ejecutar los escenarios tipo pseudo ejecute el siguiente comando:

    `npx cypress run --config '{"testFiles":["**/{41..60}-escenario.feature"]}'`

    Este comando ejecutará 20 escenarios del tipo pseudoaleatorio

- Aleatorios: (20)

    Para ejecutar los escenarios tipo aleatorio ejecute el siguiente comando:

    `npx cypress run --config '{"testFiles":["**/{61..80}-escenario.feature"]}'`

    Este comando ejecutará 20 escenarios del tipo aleatorio

O si desea ejecutar un solo escenario puede usar el comando `npx cypress run --spec "cypress/integration/resource/#-escenario.feature"`, por ejemplo, para el escenario 21 el comando sería `npx cypress run --spec "cypress/integration/resource/21-escenario.feature"`

### Escenarios en kraken: (60 escenarios)
Para ejecutar los escenarios recuerde haber realizado todo el proceso de instalación detallado en el Readme. Ubicándose dentro del directorio con `cd kraken`, primero seleccione el escenario que desea ejecutar con los comandos que se mencionan a continuación y luego de eso ejecute `npx kraken-node run`

- A priori: (20)

    (Seleccionar escenarios a priori members)

    `npm run func -- 5`

    (Seleccionar escenarios a priori posts)

    `npm run func -- 6`
    
    (Seleccionar escenarios a priori pages)

    `npm run func -- 7`
    
    (Seleccionar escenarios a priori cambiar contraseña)

    `npm run func -- 8`

- Pseudo: (20)

    (Seleccionar escenarios pseudoaleatorios members)

    `npm run func -- 9`

    (Seleccionar escenarios pseudoaleatorios posts)

    `npm run func -- 10`

    (Seleccionar escenarios pseudoaleatorios pages)

    `npm run func -- 11`

    (Seleccionar escenarios pseudoaleatorios cambiar contraseña)

    `npm run func -- 12`

- Aleatorios: (20)

    (Seleccionar escenarios aleatorios members)

    `npm run func -- 13`

    (Seleccionar escenarios aleatorios posts)

    `npm run func -- 14`

    (Seleccionar escenarios aleatorios pages)

    `npm run func -- 15`

    (Seleccionar escenarios aleatorios cambiar contraseña)

    `npm run func -- 16`

Los 120 escenarios ejecutados, con su respectiva estrategia de generación de datos

ID | Archivo | Funcionalidad | Escenario | Estrategia | Ubicación | Herramienta | Responsable
-- | -- | -- | -- | -- | -- | -- | --
1 | 21 | Members | Crear un member con datos a priori y verificar que se creó | A priori | cypress/5.14/cypress/integration/resource/21-escenario.feature | Cypress | Edna Conde
2 | 22 | Members | Editar el member creado con un nuevo nombre a priori | A priori | cypress/5.14/cypress/integration/resource/22-escenario.feature | Cypress | Edna Conde
3 | 23 | Members | Eliminar el member creado con datos a priori | A priori | cypress/5.14/cypress/integration/resource/23-escenario.feature | Cypress | Edna Conde
4 | 24 | Members | Crear un member con email inválido a priori y verificar que se recibe error | A priori | cypress/5.14/cypress/integration/resource/24-escenario.feature | Cypress | Edna Conde
5 | 25 | Members | Crear un member con nombre inválido a priori y verificar que se recibe error | A priori | cypress/5.14/cypress/integration/resource/25-escenario.feature | Cypress | Edna Conde
6 | 26 | Crear Post | Crear un nuevo post y validar que se cree como borrador [a-priori] | A priori | cypress/5.14/cypress/integration/resource/26-escenario.feature | Cypress | Santiago Patiño
7 | 27 | Crear Post | Crear un nuevo post, publicarlo y validar que se visualice [a-priori] | A priori | cypress/5.14/cypress/integration/resource/27-escenario.feature | Cypress | Santiago Patiño
8 | 28 | Crear Post | Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice [a-priori] | A priori | cypress/5.14/cypress/integration/resource/28-escenario.feature | Cypress | Santiago Patiño
9 | 29 | Editar Post | Editar un nuevo post, actualizarlo y validar que se visualice la modificacion [a-priori] | A priori | cypress/5.14/cypress/integration/resource/29-escenario.feature | Cypress | Santiago Patiño
10 | 30 | Eliminar Post | Eliminar post y validar que ya no aparezca en los posts [a-priori] | A priori | cypress/5.14/cypress/integration/resource/30-escenario.feature | Cypress | Santiago Patiño
11 | 31 | Crear Page | Crear page con datos validos y publicar | A priori | cypress/5.14/cypress/integration/resource/31-escenario.feature | Cypress | Manuel Sanchez
12 | 32 | Crear Page | Crear Page con titulo  y descripcion con mas de 1000 y 5000 caracteres | A priori | cypress/5.14/cypress/integration/resource/32-escenario.feature | Cypress | Manuel Sanchez
13 | 33 | Crear Page | Crear page draft con todos sus datos e intentar visualizar | A priori | cypress/5.14/cypress/integration/resource/33-escenario.feature | Cypress | Manuel Sanchez
14 | 34 | Crear Page | Crear, editar Page y validar actualización | A priori | cypress/5.14/cypress/integration/resource/34-escenario.feature | Cypress | Manuel Sanchez
15 | 35 | Crear Page | Crear page y validar que sea accesible | A priori | cypress/5.14/cypress/integration/resource/35-escenario.feature | Cypress | Manuel Sanchez
16 | 36 |  Cambiar contraseña |  Cambiar contraseña con contraseña vieja invalida y nueva contraseña | A priori | cypress/5.14/cypress/integration/resource/36-escenario.feature | Cypress | Jhon Avila
17 | 37 | Cambiar contraseña  |  Cambiar contraseña con contraseña vieja vacía y nueva contraseña | A priori | cypress/5.14/cypress/integration/resource/37-escenario.feature | Cypress | Jhon Avila
18 | 38 | Cambiar contraseña  |  Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes | A priori | cypress/5.14/cypress/integration/resource/38-escenario.feature | Cypress | Jhon Avila
19 | 39 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida  | A priori | cypress/5.14/cypress/integration/resource/39-escenario.feature | Cypress | Jhon Avila
20 | 40 |  Cambiar contraseña |   | A priori | cypress/5.14/cypress/integration/resource/40-escenario.feature | Cypress | Jhon Avila
21 | 41 | Members | Crear un member con datos pseudoaleatorios y verificar que se creó | Pseudo | cypress/5.14/cypress/integration/resource/41-escenario.feature | Cypress | Edna Conde
22 | 42 | Members | Editar el member creado con un nuevo nombre pseudoaleatorio | Pseudo | cypress/5.14/cypress/integration/resource/42-escenario.feature | Cypress | Edna Conde
23 | 43 | Members | Eliminar el member creado con datos pseudoaleatorios | Pseudo | cypress/5.14/cypress/integration/resource/43-escenario.feature | Cypress | Edna Conde
24 | 44 | Members | Crear un member con email inválido pseudoaleatorio y verificar que se recibe error | Pseudo | cypress/5.14/cypress/integration/resource/44-escenario.feature | Cypress | Edna Conde
25 | 45 | Members | Crear un member con nombre inválido pseudoaleatorio y verificar que se recibe error | Pseudo | cypress/5.14/cypress/integration/resource/45-escenario.feature | Cypress | Edna Conde
26 | 46 | Crear Post | Crear un nuevo post y validar que se cree como borrador [pseudo] | Pseudo | cypress/5.14/cypress/integration/resource/46-escenario.feature | Cypress | Santiago Patiño
27 | 47 | Crear Post | Crear un nuevo post, publicarlo y validar que se visualice [pseudo] | Pseudo | cypress/5.14/cypress/integration/resource/47-escenario.feature | Cypress | Santiago Patiño
28 | 48 | Crear Post | Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice [pseudo] | Pseudo | cypress/5.14/cypress/integration/resource/48-escenario.feature | Cypress | Santiago Patiño
29 | 49 | Editar Post | Editar un nuevo post, actualizarlo y validar que se visualice la modificacion [pseudo] | Pseudo | cypress/5.14/cypress/integration/resource/49-escenario.feature | Cypress | Santiago Patiño
30 | 50 | Eliminar Post | Eliminar post y validar que ya no aparezca en los posts [pseudo] | Pseudo | cypress/5.14/cypress/integration/resource/50-escenario.feature | Cypress | Santiago Patiño
31 | 51 | Crear Page | Crear page con datos validos y publicar | Pseudo | cypress/5.14/cypress/integration/resource/51-escenario.feature | Cypress | Manuel Sanchez
32 | 52 | Crear Page | Crear y editar una page con todos sus datos, actualizar y visualizar | Pseudo | cypress/5.14/cypress/integration/resource/52-escenario.feature | Cypress | Manuel Sanchez
33 | 53 | Crear Page | Crear, eliminar page y validar que no se encuentre page | Pseudo | cypress/5.14/cypress/integration/resource/53-escenario.feature | Cypress | Manuel Sanchez
34 | 54 | Crear Page | Crear page draft con todos sus datos e intentar acceder | Pseudo | cypress/5.14/cypress/integration/resource/54-escenario.feature | Cypress | Manuel Sanchez
35 | 55 | Crear Page | Crear page y validar que sea accesible | Pseudo | cypress/5.14/cypress/integration/resource/55-escenario.feature | Cypress | Manuel Sanchez
36 | 56 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja invalida y nueva contraseña  | Pseudo | cypress/5.14/cypress/integration/resource/56-escenario.feature | Cypress | Jhon Avila
37 | 57 | Cambiar contraseña  |  Cambiar contraseña con contraseña vieja vacía y nueva contraseña  | Pseudo | cypress/5.14/cypress/integration/resource/57-escenario.feature | Cypress | Jhon Avila
38 | 58 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes  | Pseudo | cypress/5.14/cypress/integration/resource/58-escenario.feature | Cypress | Jhon Avila
39 | 59 | Cambiar contraseña | Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida  | Pseudo | cypress/5.14/cypress/integration/resource/59-escenario.feature | Cypress | Jhon Avila
40 | 60 | Cambiar contraseña  |   | Pseudo | cypress/5.14/cypress/integration/resource/60-escenario.feature | Cypress | Jhon Avila
41 | 61 | Members | Crear un member con datos aleatorios y verificar que se creó | Aleatorios | cypress/5.14/cypress/integration/resource/61-escenario.feature | Cypress | Edna Conde
42 | 62 | Members | Editar el member creado con un nuevo nombre aleatorio | Aleatorios | cypress/5.14/cypress/integration/resource/62-escenario.feature | Cypress | Edna Conde
43 | 63 | Members | Eliminar el member creado con datos aleatorios | Aleatorios | cypress/5.14/cypress/integration/resource/63-escenario.feature | Cypress | Edna Conde
44 | 64 | Members | Crear un member con email inválido aleatorio y verificar que se recibe error | Aleatorios | cypress/5.14/cypress/integration/resource/64-escenario.feature | Cypress | Edna Conde
45 | 65 | Members | Crear un member con nombre inválido aleatorio y verificar que se recibe error | Aleatorios | cypress/5.14/cypress/integration/resource/65-escenario.feature | Cypress | Edna Conde
46 | 66 | Crear Post | Crear un nuevo post y validar que se cree como borrador [aleatorio] | Aleatorios | cypress/5.14/cypress/integration/resource/66-escenario.feature | Cypress | Santiago Patiño
47 | 67 | Crear Post | Crear un nuevo post, publicarlo y validar que se visualice [aleatorio] | Aleatorios | cypress/5.14/cypress/integration/resource/67-escenario.feature | Cypress | Santiago Patiño
48 | 68 | Crear Post | Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice [aleatorio] | Aleatorios | cypress/5.14/cypress/integration/resource/68-escenario.feature | Cypress | Santiago Patiño
49 | 69 | Editar Post | Editar un nuevo post, actualizarlo y validar que se visualice la modificacion [aleatorio] | Aleatorios | cypress/5.14/cypress/integration/resource/69-escenario.feature | Cypress | Santiago Patiño
50 | 70 | Eliminar Post | Eliminar post y validar que ya no aparezca en los posts [aleatorio] | Aleatorios | cypress/5.14/cypress/integration/resource/70-escenario.feature | Cypress | Santiago Patiño
51 | 71 | Crear Page | Crear page con datos validos y publicar | Aleatorios | cypress/5.14/cypress/integration/resource/71-escenario.feature | Cypress | Manuel Sanchez
52 | 72 | Crear Page | Crear y editar una page con todos sus datos, actualizar y visualizar | Aleatorios | cypress/5.14/cypress/integration/resource/72-escenario.feature | Cypress | Manuel Sanchez
53 | 73 | Crear Page | Crear, eliminar page y validar que no se encuentre page | Aleatorios | cypress/5.14/cypress/integration/resource/73-escenario.feature | Cypress | Manuel Sanchez
54 | 74 | Crear Page | Crear page draft con todos sus datos e intentar acceder | Aleatorios | cypress/5.14/cypress/integration/resource/74-escenario.feature | Cypress | Manuel Sanchez
55 | 75 | Crear Page | Crear page y validar que sea accesible | Aleatorios | cypress/5.14/cypress/integration/resource/75-escenario.feature | Cypress | Manuel Sanchez
56 | 76 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja invalida y nueva contraseña  | Aleatorios | cypress/5.14/cypress/integration/resource/76-escenario.feature | Cypress | Jhon Avila
57 | 77 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja vacía y nueva contraseña | Aleatorios | cypress/5.14/cypress/integration/resource/77-escenario.feature | Cypress | Jhon Avila
58 | 78 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes  | Aleatorios | cypress/5.14/cypress/integration/resource/78-escenario.feature | Cypress | Jhon Avila
59 | 79 | Cambiar contraseña  |  Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida | Aleatorios | cypress/5.14/cypress/integration/resource/79-escenario.feature | Cypress | Jhon Avila
60 | 80 | Cambiar contraseña  |   | Aleatorios | cypress/5.14/cypress/integration/resource/80-escenario.feature | Cypress | Jhon Avila
61 | 5 | Members | Crear un member con datos a priori y verificar que se creó | A priori | kraken/features/5 - Members-apriori.feature | Kraken | Edna Conde
62 | 5 | Members | Editar el member creado con un nuevo nombre a priori | A priori | kraken/features/5 - Members-apriori.feature | Kraken | Edna Conde
63 | 5 | Members | Eliminar el member creado con datos a priori | A priori | kraken/features/5 - Members-apriori.feature | Kraken | Edna Conde
64 | 5 | Members | Crear un member con email inválido a priori y verificar que se recibe error | A priori | kraken/features/5 - Members-apriori.feature | Kraken | Edna Conde
65 | 5 | Members | Crear un member con nombre inválido a priori y verificar que se recibe error | A priori | kraken/features/5 - Members-apriori.feature | Kraken | Edna Conde
66 | 6 | Crear Post | Crear un nuevo post y validar que se cree como borrador [a-priori] | A priori | kraken/features/6 - Posts-a-priori.feature | Kraken | Santiago Patiño
67 | 6 | Crear Post | Crear un nuevo post, publicarlo y validar que se visualice [a-priori] | A priori | kraken/features/6 - Posts-a-priori.feature | Kraken | Santiago Patiño
68 | 6 | Crear Post | Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice [a-priori] | A priori | kraken/features/6 - Posts-a-priori.feature | Kraken | Santiago Patiño
69 | 6 | Editar Post | Editar un nuevo post, actualizarlo y validar que se visualice la modificacion [a-priori] | A priori | kraken/features/6 - Posts-a-priori.feature | Kraken | Santiago Patiño
70 | 6 | Eliminar Post | Eliminar post y validar que ya no aparezca en los posts [a-priori] | A priori | kraken/features/6 - Posts-a-priori.feature | Kraken | Santiago Patiño
71 | 7 | Crear Page | Crear una page con todos sus datos, publicar y visualizar | A priori | kraken/features/7 - Page-aleatorio.feature | Kraken | Manuel Sanchez
72 | 7 | Editar Page | Crear y editar una page con todos sus datos, actualizar y visualizar | A priori | kraken/features/7 - Page-aleatorio.feature | Kraken | Manuel Sanchez
73 | 7 | Eliminar Page | Crear, eliminar page y validar que no se encuentre page | A priori | kraken/features/7 -Page-aleatorio.feature | Kraken | Manuel Sanchez
74 | 7 | Crear Page | Crear page draft con todos sus datos e intentar visualizar | A priori | kraken/features/7 - Page-aleatorio.feature | Kraken | Manuel Sanchez
75 | 7 | Crear page | Crear page, configurar nav y validar que sea accesible | A priori | kraken/features/7 - Page-aleatorio.feature | Kraken | Manuel Sanchez
76 | 8 | Cambiar contraseña | Cambiar contraseña con contraseña vieja invalida y nuevas contraseñas | A priori | kraken/features/8 - Cambiar_contrasena-a-priori.feature | Kraken | Jhon Avila
77 | 8 | Cambiar contraseña | Cambiar contraseña con contraseña vieja vacía y nueva contraseña | A priori | kraken/features/8 - Cambiar_contrasena-a-priori.feature | Kraken | Jhon Avila
78 | 8 | Cambiar contraseña | Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes | A priori | kraken/features/8 - Cambiar_contrasena-a-priori.feature | Kraken | Jhon Avila
79 | 8 | Cambiar contraseña | Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida | A priori | kraken/features/8 - Cambiar_contrasena-a-priori.feature | Kraken | Jhon Avila
80 | 17 | Actualizar perfil | Actualizar información de perfil | A priori | kraken/features/17 - Actualizar-perfil-a-priori.feature | Kraken | Jhon Avila
81 | 9 | Members | Crear un member con datos pseudoaleatorios y verificar que se creó | Pseudo | kraken/features/9 - Members-pseudo.feature | Kraken | Edna Conde
82 | 9 | Members | Editar el member creado con un nuevo nombre pseudoaleatorio | Pseudo | kraken/features/9 - Members-pseudo.feature | Kraken | Edna Conde
83 | 9 | Members | Eliminar el member creado con datos pseudoaleatorios | Pseudo | kraken/features/9 - Members-pseudo.feature | Kraken | Edna Conde
84 | 9 | Members | Crear un member con email inválido pseudoaleatorio y verificar que se recibe error | Pseudo | kraken/features/9 - Members-pseudo.feature | Kraken | Edna Conde
85 | 9 | Members | Crear un member con nombre inválido pseudoaleatorio y verificar que se recibe error | Pseudo | kraken/features/9 - Members-pseudo.feature | Kraken | Edna Conde
86 | 10 | Crear Post | Crear un nuevo post y validar que se cree como borrador [pseudo] | Pseudo | kraken/features/10 - Posts-pseudo.feature | Kraken | Santiago Patiño
87 | 10 | Crear Post | Crear un nuevo post, publicarlo y validar que se visualice [pseudo] | Pseudo | kraken/features/10 - Posts-pseudo.feature | Kraken | Santiago Patiño
88 | 10 | Crear Post | Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice [pseudo] | Pseudo | kraken/features/10 - Posts-pseudo.feature | Kraken | Santiago Patiño
89 | 10 | Editar Post | Editar un nuevo post, actualizarlo y validar que se visualice la modificacion [pseudo] | Pseudo | kraken/features/10 - Posts-pseudo.feature | Kraken | Santiago Patiño
90 | 10 | Eliminar Post | Eliminar post y validar que ya no aparezca en los posts [pseudo] | Pseudo | kraken/features/10 - Posts-pseudo.feature | Kraken | Santiago Patiño
91 | 11 | Crear Page | Crear una page con todos sus datos, publicar y visualizar | Pseudo | kraken/features/11 - Page-pseudo.feature | Kraken | Manuel Sanchez
92 | 11 | Editar Page | Crear y editar una page con todos sus datos, actualizar y visualizar | Pseudo | kraken/features/11 - Page-pseudo.feature | Kraken | Manuel Sanchez
93 | 11 | Eliminar Page | Crear, eliminar page y validar que no se encuentre page | Pseudo | kraken/features/11 - Page-pseudo.feature | Kraken | Manuel Sanchez
94 | 11 | Crear Page | Crear page draft con todos sus datos e intentar visualizar | Pseudo | kraken/features/11 - Page-pseudo.feature | Kraken | Manuel Sanchez
95 | 11 | Crear page | Crear page, configurar nav y validar que sea accesible | Pseudo | kraken/features/11 - Page-pseudo.feature | Kraken | Manuel Sanchez
96 | 12 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida  | Pseudo | kraken/features/12 - Cambiar_contrasena-pseudo.feature  | Kraken | Jhon Avila
97 | 12 | Cambiar contraseña | Cambiar contraseña con contraseña vieja vacía y nueva contraseña  | Pseudo | kraken/features/12 - Cambiar_contrasena-pseudo.feature  | Kraken | Jhon Avila
98 | 12 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes  | Pseudo | kraken/features/12 - Cambiar_contrasena-pseudo.feature  | Kraken | Jhon Avila
99 | 12 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida  | Pseudo | kraken/features/12 - Cambiar_contrasena-pseudo.feature  | Kraken | Jhon Avila
100 | 18 | Actualizar perfil  | Actualizar información de perfil  | Pseudo | kraken/features/18 - Actualizar-perfil-a-priori.feature  | Kraken | Jhon Avila
101 | 13 | Members | Crear un member con datos aleatorios y verificar que se creó | Aleatorios | kraken/features/13 - Members-aleatorios.feature | Kraken | Edna Conde
102 | 13 | Members | Editar el member creado con un nuevo nombre aleatorio | Aleatorios | kraken/features/13 - Members-aleatorios.feature | Kraken | Edna Conde
103 | 13 | Members | Eliminar el member creado con datos aleatorios | Aleatorios | kraken/features/13 - Members-aleatorios.feature | Kraken | Edna Conde
104 | 13 | Members | Crear un member con email inválido aleatorio y verificar que se recibe error | Aleatorios | kraken/features/13 - Members-aleatorios.feature | Kraken | Edna Conde
105 | 13 | Members | Crear un member con nombre inválido aleatorio y verificar que se recibe error | Aleatorios | kraken/features/13 - Members-aleatorios.feature | Kraken | Edna Conde
106 | 14 | Crear Post | Crear un nuevo post y validar que se cree como borrador [aleatorio] | Aleatorios | kraken/features/14 - Posts-aleatorio.feature | Kraken | Santiago Patiño
107 | 14 | Crear Post | Crear un nuevo post, publicarlo y validar que se visualice [aleatorio] | Aleatorios | kraken/features/14 - Posts-aleatorio.feature | Kraken | Santiago Patiño
108 | 14 | Crear Post | Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice [aleatorio] | Aleatorios | kraken/features/14 - Posts-aleatorio.feature | Kraken | Santiago Patiño
109 | 14 | Editar Post | Editar un nuevo post, actualizarlo y validar que se visualice la modificacion [aleatorio] | Aleatorios | kraken/features/14 - Posts-aleatorio.feature | Kraken | Santiago Patiño
110 | 14 | Eliminar Post | Eliminar post y validar que ya no aparezca en los posts [aleatorio] | Aleatorios | kraken/features/14 - Posts-aleatorio.feature | Kraken | Santiago Patiño
111 | 15 | Crear Page | Crear una page con todos sus datos, publicar y visualizar | Aleatorios | kraken/features/15 - Page-aleatorio.feature | Kraken | Manuel Sanchez
112 | 15 | Editar Page | Crear y editar una page con todos sus datos, actualizar y visualizar | Aleatorios | kraken/features/15 - Page-aleatorio.feature | Kraken | Manuel Sanchez
113 | 15 | Eliminar Page | Crear, eliminar page y validar que no se encuentre page | Aleatorios | kraken/features/15 - Page-aleatorio.feature | Kraken | Manuel Sanchez
114 | 15 | Crear Page | Crear page draft con todos sus datos e intentar visualizar | Aleatorios | kraken/features/15 - Page-aleatorio.feature | Kraken | Manuel Sanchez
115 | 15 | Crear page | Crear page, configurar nav y validar que sea accesible | Aleatorios | kraken/features/15 - Page-aleatorio.feature | Kraken | Manuel Sanchez
116 | 16 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida  | Aleatorios | kraken/features/16 - Cambiar_contrasena-aleatorio.feature  | Kraken | Jhon Avila
117 | 16 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja vacía y nueva contraseña  | Aleatorios | kraken/features/16 - Cambiar_contrasena-aleatorio.feature  | Kraken | Jhon Avila
118 | 16 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes  | Aleatorios | kraken/features/16 - Cambiar_contrasena-aleatorio.feature  | Kraken | Jhon Avila
119 | 16 | Cambiar contraseña  | Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida  | Aleatorios | kraken/features/16 - Cambiar_contrasena-aleatorio.feature  | Kraken | Jhon Avila
120 | 19 | Actualizar perfil  | Actualizar información de perfil  | Aleatorios | kraken/features/19 - Actualizar-perfil-a-priori.feature  | Kraken | Jhon Avila

