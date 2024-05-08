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
https://ghost-xefe.onrender.com/
- Ghost version: 5.44.0

## Instalaciones
Version de node recomendada: `16.20.0`

Version de npm recomandada `8.19.4`

### Kraken

En la raiz del proyecto, ejecutar los siguientes commandos:

1. Ir a la carpeta de kraken con `cd kraken`.
2. Instalar las dependencias `npm i`.
3. Seleccionar el numero de la funcionalidad a ejecutar con.
   
   Por ejemplo: (Seleccionar funcionalidad 1 Crear miembros)

   `npm run func -- 1` 

5. Ejecutar `npx kraken-node run`.

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
3. Posts:
   - Crear un nuevo post con titulo y descripcion aleatorios
   - Añadir tag a un nuevo post
   - Publicar post y validar que el sitio se visualize correctamente
   - Editar un post y validar la modificacion
   - Eliminar post y validar que ya no aparezca en los posts
4. Pages:
   - Crear una page con todos sus datos, publicar y visualizar
   - Crear y editar una page con todos sus datos, actualizar y visualizar
   - Crear, eliminar page y validar que no se encuentre page
   - Crear page draft con todos sus datos e intentar visualizar
   - Crear page, configurar nav y validar que sea accesible 
5. Cambio de contraseña:
   - Cambiar contraseña con contraseña vieja invalida y nueva contraseña
   - Cambiar contraseña con contraseña vieja vacía y nueva contraseña
   - Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes
   - Cambio de contraseña con contraseña vieja y contraseñas nuevas vacías
   - Cambio de contraseña exitoso

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
