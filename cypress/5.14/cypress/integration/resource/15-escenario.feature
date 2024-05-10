Feature: Crear page y validar que sea accesible 

    Scenario: Crear page y validar que sea accesible 
    
    ##Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ##crear page y publicar
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page "Page 5"
            And Ingresa la descripcion de page "Description page 5"
            And Hacer click en el boton de publish page
            And Hacer click en el boton de confirm page
        Then Validar que se haya creado page "Page 5"

    ## Validar acceso de url
        Given Ingreso a la url de la pagina "Page-5"
        Then Validar Url correcta "Page 5"

    ## Seleccionar y eliminar Page
        Given Ingresar al sitio pages
            When Seleccionar page con el nombre "Page 5"
            And abrir menu de page
            And eliminar page
            And confirmar eliminación
        Then Validar eliminacion de page "Page 5"
