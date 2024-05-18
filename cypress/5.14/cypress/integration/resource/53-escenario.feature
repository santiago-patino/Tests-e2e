Feature: Crear, eliminar page y validar que no se encuentre page

    Scenario: Crear, eliminar page y validar que no se encuentre page

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear pages y publicar
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page
            And Ingresa la descripcion de page
            And Hacer click en el boton de publish page
            And Hacer click en el boton de confirm page
            And Ingresar al sitio pages
        Then Validar que se haya creado page

    ## Seleccionar y eliminar Page
        Given Ingresar al sitio pages
            When Seleccionar page con el nombre
            And abrir menu de page
            And eliminar page
            And confirmar eliminación
        Then Validar eliminacion de page
