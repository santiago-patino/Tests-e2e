Feature: Escenarios: Crear - Validar - Editar - Eliminar un post

    Feature Crear post, Añadir tag, Publicar post, Validar post, Editar post, Eliminar post

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
        Given Ingresa al sitio como usuario normal
            When Hacer click al post "Post 1"
        Then Validar titulo del post "Post 1"
    
    Scenario: Editar post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        Given Ingresar al sitio posts
            When Seleccionar el post con el nombre "Post 1"
            And Ingresa el titulo del post " Editado"
            And Ingresa la descripcion del post " editado"
            And Hacer click en el boton Update
        Then Validar notificacion de confirmacion

    Scenario: Eliminar post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso
        
        Given Ingresar al sitio posts
            When Seleccionar el post con el nombre "Post 1 Editado"
            And Hacer click en las configuracion del post
            And Hace click en el boton delete
            And Hace click en confirmar delete
        Then Validar redireccion a posts
            