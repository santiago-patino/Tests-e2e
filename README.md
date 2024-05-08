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
### Crear members:

   1. Crear un member con todos los datos válidos y visualizar el listado de members para verificar que se creó
   2. Crear un member con datos inválidos y verificar que se recibe un error
   3. Crear un member con datos de un member existente y verificar que se recibe un error
   4. Editar datos de un member existente y verificar que se actualiza la información del member
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
   15. Crear page, configurar nav y validar que sea accesible
### Cambio de contraseña:
  
   16. Cambiar contraseña con contraseña vieja invalida y nueva contraseña
   17. Cambiar contraseña con contraseña vieja vacía y nueva contraseña
   18. Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes
   19. Cambio de contraseña con contraseña vieja y contraseñas nuevas vacías
   20. Cambio de contraseña exitoso

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
