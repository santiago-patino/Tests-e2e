Feature: Crear un post, publicarlo y validar el sitio

@user1 @web
Scenario: Crear un post, publicarlo y validar el sitio
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo "$name_1" y descripcion "$string_1"
        And Añadir tag
    Then Publicar y Validar el post con el titulo "$$name_1"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo "$$name_1"
        And Ingresar datos en un post con el titulo "$name_2" y descripcion "Editado"
        And Actualizar post
        And Volver a los posts
    Then Validar que existe un post "$$name_2"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo "$$name_2"
        And Eliminar post
    Then Validar que no existe un post "$$name_2"



    
    