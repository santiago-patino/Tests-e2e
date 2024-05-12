Feature: Escenario 6 Crear un nuevo post y validar que se cree como borrador

    Feature Crear un nuevo post y validar que se cree como borrador

    Scenario: Crear un nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Hacer click en nuevo post
            And Ingresa el titulo del post "Post 1"
            And Ingresa la descripcion del post "Description post 1"
        Then Validar que se haya creado como borrador "Draft"

    ## Eliminar post
        Given Ingresar al sitio posts
            When Seleccionar el post con el nombre "Post 1"
            And Hacer click en las configuracion del post
            And Hace click en el boton delete
            And Hace click en confirmar delete
        Then Validar redireccion a posts    
            