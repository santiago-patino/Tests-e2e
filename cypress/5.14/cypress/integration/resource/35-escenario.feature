Feature: Crear page y validar que sea accesible 

    Scenario: Crear page y validar que sea accesible 
    
    ##Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ##crear page y publicar
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page 
            And Ingresa la descripcion de page 
            And Hacer click en el boton de publish page
            And Hacer click en el boton de confirm page
            And Ingresar al sitio pages
        Then Validar que se haya creado page 

    ## Validar acceso de url
        Given Ingreso a la url de la pagina
        Then Validar Url correcta

    ## Seleccionar y eliminar Page
        Given Ingresar al sitio pages
            When Seleccionar page 
            And abrir menu de page
            And eliminar page
            And confirmar eliminación
        Then Validar eliminacion de page
