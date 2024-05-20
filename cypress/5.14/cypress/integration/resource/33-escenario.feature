Feature: Crear page draft con todos sus datos e intentar visualizar

    Scenario: Crear page draft con todos sus datos e intentar acceder
    
    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear draft
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page
            And Ingresa la descripcion de page
            And Ingresar al sitio pages
        Then Validar draft en lista

    ## Validar acceso de url
        Given Ingreso a la url de la pagina
        Then Validar Url 404


    ## Seleccionar y eliminar Page
        Given Ingresar al sitio pages
            When Seleccionar page con el nombre
            And abrir menu de page
            And eliminar page
            And confirmar eliminación
        Then Validar eliminacion de page
