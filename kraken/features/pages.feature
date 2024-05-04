Feature: Crear page, publicar y visualizar

@user1 @web
Scenario: Crear una page con todos sus datos, publicar y visualizar en web site
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When I go to page
        And I go to new page form
        And I create a page with title "$name_1" and content "$string_1"
    Then validate created page with title "$$name_1"
         And I wait for 2 seconds
         And select page from list with title "$$name_1"

    When I go to publish page with title "$$name_1"
        And I wait for 2 seconds
        And I go to see page
        And I wait for 2 seconds
    Then validate url page created with title "$$name_1"
    
