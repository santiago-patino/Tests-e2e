Feature: Escenario 8 Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice

    Feature Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice

    Scenario: Crear un nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Hacer click en nuevo post
            And Ingresa el titulo del post "Post 1"
            And Ingresa la descripcion del post "Description post 1"
            And Hacer click en las configuracion del post
            And Añadir Tag
            And Hacer click en las configuracion del post
            And Hace click en el boton de publish post
            And Hace click en el boton de confirm post
        Then Validar que se haya creado el post "Post 1"

    Scenario: Verificar el nuevo post publicado
        Given Ingresa al post "Post 1" como usuario normal
        Then Validar titulo del post "Post 1"

    Scenario: Eliminar post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso
        
        Given Ingresar al sitio posts
            When Seleccionar el post con el nombre "Post 1"
            And Hacer click en las configuracion del post
            And Hace click en el boton delete
            And Hace click en confirmar delete
        Then Validar redireccion a posts
            