Feature: Crear un post, agregar tag, publicarlo, editarlo y validar el sitio

## Escenario 1. Crear un nuevo post y validar que se cree como borrador
@user1 @web
Scenario: Crear un nuevo post y validar que se cree como borrador
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo y descripcion a-priori "1"
        And I wait for 2 seconds
    Then Validar que se cree el borrador

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo a-priori "1"
        And Eliminar post
    Then Validar que no existe un post a-priori "1"

## Escenario 2. Crear un nuevo post, publicarlo y validar que se visualice
@user2 @web 
Scenario: Crear un nuevo post, publicarlo y validar que se visualice

    Given I wait
    Then I wait for 2 seconds

    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo y descripcion a-priori "2"
    Then Publicar y Validar el post con el titulo a-priori "2"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo a-priori "2"
        And Eliminar post
    Then Validar que no existe un post a-priori "2"

## Escenario 3. Crear un nuevo post, añadir un tag, publicarlo y validar que se visualice
@user3 @web 
Scenario: Crear un nuevo post, publicarlo y validar que se visualice

    Given I wait
    Then I wait for 4 seconds

    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo y descripcion a-priori "3"
        And Añadir tag
    Then Publicar y Validar el post con el titulo a-priori "3"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo a-priori "3"
        And Eliminar post
    Then Validar que no existe un post a-priori "3"

## Escenario 4. Editar un nuevo post, actualizarlo y validar que se visualice la modificacion
@user4 @web 
Scenario: Crear un nuevo post, publicarlo y validar que se visualice

    Given I wait
    Then I wait for 6 seconds

    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo y descripcion a-priori "4"
        And Añadir tag
    Then Publicar y Validar el post con el titulo a-priori "4"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo a-priori "4"
        And Ingresar datos en un post con el titulo y descripcion a-priori editado "4"
        And Actualizar post
        And Volver a los posts
    Then Validar que existe un post a-priori "4"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo a-priori "4"
        And Eliminar post
    Then Validar que no existe un post a-priori "4"

## Escenario 5. Eliminar post y validar que ya no aparezca en los posts
@user5 @web 
Scenario: Crear un nuevo post, publicarlo y validar que se visualice

    Given I wait
    Then I wait for 8 seconds

    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    When Ir a crear nuevo post
        And Ingresar datos en un post con el titulo y descripcion a-priori "5"
        And Añadir tag
    Then Publicar y Validar el post con el titulo a-priori "5"

    When Ir hacia "<HOST>" "ghost/#/posts"
        And Seleccionar post con el titulo a-priori "5"
        And Eliminar post
    Then Validar que no existe un post a-priori "5"