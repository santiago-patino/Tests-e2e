Feature: Escenario 70 Eliminar post y validar que ya no aparezca en los posts [aleatorio]

    Feature Crear un nuevo post, añadir un tag y visualizar el post

    Scenario: Crear un nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Hacer click en nuevo post
            And Ingresa el titulo del post
            And Ingresa la descripcion del post
            And Hace click en el boton de publish post
            And Hace click en el boton de confirm post
        Then Validar que se haya creado el post

    Scenario: Verificar el nuevo post publicado
        Given Ingresa al post como usuario normal
        Then Validar titulo del post

    Scenario: Eliminar post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso
        
        Given Ingresar al sitio posts
            When Seleccionar el post con el nombre
            And Hacer click en las configuracion del post
            And Hace click en el boton delete
            And Hace click en confirmar delete
        Then Validar redireccion a posts

    Scenario: Verificar el nuevo post publicado no aparesca
        Given Ingresa al post como usuario normal
        Then Validar error "404"

        


            