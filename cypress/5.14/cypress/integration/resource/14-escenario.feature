Feature: Crear page draft con todos sus datos e intentar visualizar

    Scenario: Crear page draft con todos sus datos e intentar acceder
    
    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear draft
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page "Page 4"
            And Ingresa la descripcion de page "Description page 4"
            And Ingresar al sitio pages
        Then Validar draft "Page 4" en lista

    ## Validar acceso de url
        Given Ingreso a la url de la pagina "Page-4"
        Then Validar Url 404


    ## Seleccionar y eliminar Page
        Given Ingresar al sitio pages
            When Seleccionar page con el nombre "Page 4"
            And abrir menu de page
            And eliminar page
            And confirmar eliminación
        Then Validar eliminacion de page "Page 4"
