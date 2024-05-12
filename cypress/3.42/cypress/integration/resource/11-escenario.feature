Feature: Crear una page con todos sus datos, publicar y Validar creación

    Scenario: Crear una page con todos sus datos, publicar y Validar creación

    ##Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ##crear page y publicar
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page "Page 1"
            And Ingresa la descripcion de page "Description page 1"
            And Hacer click en el boton de publish page
            And Hacer click en el boton de confirm page
            And Ingresar al sitio pages
        Then Validar que se haya creado page "Page 1"