Feature: Crear un post, agregar tag, publicarlo, editarlo y validar el sitio

## Escenario 1. Crear un nuevo post y validar que se cree como borrador
@user1 @web
Scenario: Crear un nuevo post y validar que se cree como borrador
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo "$name_1" y descripcion "$string_1"
    Then Validar que se cree el borrador

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo "$$name_1"
        And Eliminar post
    Then Validar que no existe un post "$$name_1"

## Escenario 2. Crear un nuevo post, publicarlo y validar que se visualice
@user2 @web 
Scenario: Crear un nuevo post, publicarlo y validar que se visualice
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo "$name_2" y descripcion "$string_2"
    Then Publicar y Validar el post con el titulo "$$name_2"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo "$$name_2"
        And Eliminar post
    Then Validar que no existe un post "$$name_2"

## Escenario 3. Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice
@user3 @web 
Scenario: Crear un nuevo post, publicarlo y validar que se visualice
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo "$name_3" y descripcion "$string_3"
        And Añadir tag
    Then Publicar y Validar el post con el titulo "$$name_3"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo "$$name_3"
        And Eliminar post
    Then Validar que no existe un post "$$name_3"

## Escenario 4. Editar un nuevo post, actualizarlo y validar que se visualice la modificacion
@user4 @web 
Scenario: Crear un nuevo post, publicarlo y validar que se visualice
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo "$name_4" y descripcion "$string_4"
        And Añadir tag
    Then Publicar y Validar el post con el titulo "$$name_4"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo "$$name_4"
        And Ingresar datos en un post con el titulo "$name_5" y descripcion "$string_5"
        And Actualizar post
        And Volver a los posts
    Then Validar que existe un post "$$name_5"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo "$$name_5"
        And Eliminar post
    Then Validar que no existe un post "$$name_5"

## Escenario 5. Eliminar post y validar que ya no aparezca en los posts
@user5 @web 
Scenario: Crear un nuevo post, publicarlo y validar que se visualice
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo "$name_6" y descripcion "$string_6"
        And Añadir tag
    Then Publicar y Validar el post con el titulo "$$name_6"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo "$$name_6"
        And Eliminar post
    Then Validar que no existe un post "$$name_6"