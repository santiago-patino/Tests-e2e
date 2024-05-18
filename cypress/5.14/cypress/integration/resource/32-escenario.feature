Feature: Crear Page con titulo y descripcion con mas de 1000 y 5000 caracteres

    Scenario: Crear Page con titulo y descripcion con mas de 1000 y 5000 caracteres

    ##Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ##crear page e intentar publicar
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page 
            And Ingresa la descripcion de page
        Then Validar que no permite publicar
