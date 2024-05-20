Feature: Crear editar, eliminar page, publicar y visualizar


## Escenario 1. Crear una page con todos sus datos, publicar y visualizar 
@user1 @web
Scenario: Crear una page con todos sus datos, publicar y visualizar 
    Given Ir hacia "<HOST>" "ghost"
    When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    Given Generate data pseudo "1"
        And I go to page
        And I go to new page form
    When I create a page with title and content pseudo "1"
        And I wait for 2 seconds
    Then validate created or edit page with title pseudo "1"
        And I wait for 1 seconds
   
    Given select page from list with title pseudo "1"
        And I wait for 2 seconds
    When I go to publish page pseudo
        And I wait for 1 seconds
        And I go to see page
        And I wait for 2 seconds
    Then validate url page created with title pseudo "1"

## Escenario 2. Crear y editar una page con todos sus datos, actualizar y visualizar
@user2 @web 
Scenario: Crear y editar una page con todos sus datos, actualizar y visualizar
    Given Ir hacia "<HOST>" "ghost"
    When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    Given Generate data pseudo "2"
        And I go to page
        And I go to new page form
    When I create a page with title and content pseudo "2"
        And I wait for 2 seconds
    Then validate created or edit page with title pseudo "2"
        And I wait for 1 seconds
        
    Given select page from list with title pseudo "2"
        And I wait for 2 seconds
    When I go to publish page pseudo
        And I wait for 1 seconds
        And I go to see page
        And I wait for 1 seconds
    Then validate url page created with title pseudo "2"
        And I wait for 1 seconds

    Given Ir hacia "<HOST>" "ghost"
    When Generate data pseudo "3"
        And I go to page
        And I wait for 2 seconds
        And select page from list with title pseudo "2"
        And I go to edit page with a title pseudo "3"
        And I wait for 1 seconds
        And I update page
        And I wait for 3 seconds
    Then validate created or edit page with title pseudo "3"
        And I wait for 1 seconds

## Escenario 3. Crear, eliminar page y validar que no se encuentre page
@user3 @web 
Scenario: Crear, eliminar page y validar que no se encuentre page
    Given Ir hacia "<HOST>" "ghost"
    When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    Given Generate data pseudo "4"
        And I go to page
        And I go to new page form
    When I create a page with title and content pseudo "4"
        And I wait for 3 seconds
    Then validate created or edit page with title pseudo "4"
        And I wait for 1 seconds

    Given Ir hacia "<HOST>" "ghost"
        And I go to page
        And I wait for 2 seconds
        And select page from list with title pseudo "4"
    When I go to deleted page pseudo
        And I wait for 2 seconds
    Then validate deleted page with title pseudo "4"

## Escenario 4. Crear page draft con todos sus datos e intentar visualizar 
@user4 @web 
Scenario: Crear page draft con todos sus datos e intentar visualizar 
    Given Ir hacia "<HOST>" "ghost"
    When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    Given Generate data pseudo "5"
        And I go to page
        And I go to new page form
    When I create a page with title and content pseudo "5"
        And I wait for 2 seconds
    Then validate created or edit page with title pseudo "5"
         And I wait for 1 seconds

    Given I go to page url with title pseudo "5"
        And I wait for 1 seconds
    Then validate 404 in url

## Escenario 5. Crear page, configurar nav y validar que sea accesible
@user5 @web 
Scenario: Crear page, configurar nav y validar que sea accesible 
    Given Ir hacia "<HOST>" "ghost"
    When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And I wait for 2 seconds
    Then Validar inicio sesion exitoso

    Given Generate data pseudo "6"
        And I go to page
        And I go to new page form
    When I create a page with title and content pseudo "6"
        And I wait for 2 seconds
    Then validate created or edit page with title pseudo "6"
        And I wait for 1 seconds

    Given select page from list with title pseudo "6"
        And I wait for 2 seconds
    When I go to publish page pseudo
        And I wait for 1 seconds
        And I go to see page
        And I wait for 1 seconds
    Then validate url page created with title pseudo "6"
        And I wait for 1 seconds
        
        
    Given Ir hacia "<HOST>" "ghost"
        And I wait for 1 seconds
    When Add nav bar the URLpage with title pseudo "6"
        And I wait for 1 seconds
        And Ir hacia "<HOST>" "ghost"
    Then validate acces from nav bar pseudo "6"

