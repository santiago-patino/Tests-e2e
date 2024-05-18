Feature: Crear y editar una page con todos sus datos, actualizar y visualizar

    Scenario:Crear y editar una page con todos sus datos, actualizar y visualizar

     ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear page y publicar
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page
            And Ingresa la descripcion de page
            And Hacer click en el boton de publish page
            And Hacer click en el boton de confirm page
            And Ingresar al sitio pages
        Then Validar que se haya creado page

    ## Seleccionar y editar Page
        Given Ingresar al sitio pages
            When Seleccionar page con el nombre
            And Ingresa el titulo de page
            And Ingresa la descripcion de page
            And Hacer click en el boton Update
        Then Validar notificacion de edicion

    ## Seleccionar y eliminar Page
        Given Ingresar al sitio pages
            When Seleccionar page con el nombre 
            And abrir menu de page
            And eliminar page
            And confirmar eliminación
        Then Validar eliminacion de page
