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

## Funcionalidades - Escenarios Semana 5
### Members:

   1. Crear un member con todos los datos válidos y visualizar el listado de members para verificar que se creó
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
   15. Crear page, configurar nav y validar que sea accesible
### Cambio de contraseña:
  
   16. Cambiar contraseña con contraseña vieja invalida y nueva contraseña
   17. Cambiar contraseña con contraseña vieja vacía y nueva contraseña
   18. Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes
   19. Cambio de contraseña con contraseña vieja y contraseñas nuevas vacías
   20. Cambio de contraseña exitoso

## Funcionalidades - Escenarios Semana 6 (Regresión visual)
### Members:

   1. Crear un member con datos vacíos y verificar que se recibe un error
   2. Crear un member con datos inválidos y verificar que se recibe un error
### Posts:

   3. Crear un nuevo post, publicarlo y validar que se visualice **(Escenario 7)**
   4. Eliminar post y validar que ya no aparezca en los posts **(Escenario 10)**

## Análisis de herramientas Semana 5 
[Análisis de herramientas E2E](https://github.com/santiago-patino/Tests-e2e/wiki/An%C3%A1lisis-de-herramientas-E2E)

## Análisis de herramientas Semana 6
[Análisis de herramientas VRT](https://github.com/santiago-patino/Tests-e2e/wiki/An%C3%A1lisis-de-herramientas-VRT)

## Sistema de registro de incidencias
https://github.com/santiago-patino/pruebas-automatizadas-issues/issues

## Estrategias de pruebas
[Estrategias de pruebas](https://github.com/santiago-patino/Tests-e2e/wiki/Estrategias-de-pruebas)
