Feature: Crear un post, publicarlo y validar el sitio

@user1 @web
Scenario: Crear un post, publicarlo y validar el sitio
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Crear un post con el titulo "$name_1" y descripcion "$string_1"
    Then Publicar y Validar el post con el titulo "$$name_1"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo "$$name_1"
        And Eliminar post
    Then Validar que no existe un post "$$name_1"



    
    