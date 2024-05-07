Feature: Crear editar, eliminar page, publicar y visualizar

@user1 @web
Scenario: Crear una page con todos sus datos, publicar y visualizar 
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When I go to page
        And I go to new page form
        And I create a page with title "$name_1" and content "$string_1"
        And I wait for 2 seconds
    Then validate created or edit page with title "$$name_1"
         And I wait for 1 seconds
         And select page from list with title "$$name_1"

    When I go to publish page with title "$$name_1"
        And I wait for 1 seconds
        And I go to see page
        And I wait for 2 seconds
    Then validate url page created with title "$$name_1"
    
@user2 @web 
Scenario: Crear y editar una page con todos sus datos, actualizar y visualizar
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When I go to page
        And I go to new page form
        And I create a page with title "$name_2" and content "$string_1"
        And I wait for 2 seconds
    Then validate created or edit page with title "$$name_2"
        And I wait for 1 seconds
        And select page from list with title "$$name_2"
        And I wait for 2 seconds

#publicar
    When I go to publish page with title "$$name_2"
        And I wait for 1 seconds
        And I go to see page
        And I wait for 1 seconds
    Then validate url page created with title "$$name_2"
        And I wait for 1 seconds
        And Ir hacia "<HOST>" "ghost"
        And I go to page
        And I wait for 2 seconds
        And select page from list with title "$$name_2"

#Editar y validar el nuevo titulo 
    When I go to edit page with a title "$name_3"
        And I wait for 1 seconds
        And I update page
        And I wait for 3 seconds
    Then validate created or edit page with title "$$name_3"
        And I wait for 1 seconds

@user3 @web 
Scenario: Crear, eliminar page y validar que no se encuentre page
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When I go to page
        And I go to new page form
        And I create a page with title "$name_4" and content "$string_1"
        And I wait for 3 seconds
    Then validate created or edit page with title "$$name_4"
        And I wait for 1 seconds
        And Ir hacia "<HOST>" "ghost"
        And I go to page
        And I wait for 2 seconds
        And select page from list with title "$$name_4"

    When I go to deleted page with title "$$name_4"
        And I wait for 2 seconds
    Then validate deleted page with title "$$name_4"

@user4 @web 
Scenario: Crear page draft con todos sus datos e intentar visualizar 
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When I go to page
        And I go to new page form
        And I create a page with title "$name_5" and content "$string_1"
        And I wait for 2 seconds
    Then validate created or edit page with title "$$name_5"
         And I wait for 1 seconds

    When I go to page url with title "$name_5"
        And I wait for 1 seconds
    Then validate 404 in url

@user5 @web 
Scenario: Crear page, configurar nav y validar que sea accesible 
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

     When I go to page
        And I go to new page form
        And I create a page with title "$name_6" and content "$string_1"
        And I wait for 2 seconds
   Then validate created or edit page with title "$$name_6"
        And I wait for 1 seconds
        And select page from list with title "$$name_6"
        And I wait for 2 seconds

#publicar
    When I go to publish page with title "$$name_6"
        And I wait for 1 seconds
        And I go to see page
        And I wait for 1 seconds
    Then validate url page created with title "$$name_6"
        And I wait for 1 seconds
        And Ir hacia "<HOST>" "ghost"

    When Add nav bar the URLpage with title "$$name_6"
        And I wait for 1 seconds
        And Ir hacia "<HOST>" "ghost"
    Then validate acces from nav bar "$$name_6"

