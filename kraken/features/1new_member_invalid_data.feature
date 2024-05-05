Feature: Crear un nuevo member con datos inválidos

@user1 @web
Scenario: Como admin intento crear un nuevo member con un correo no válido y verifico si se recibe un error 
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When Seleccionar la sección miembros
        And I wait for 2 seconds
    Then Debería tener un botón new members

    When Dar click en el botón new member
        And I wait for 2 seconds
    Then Debería tener un form para ingresar la información del member

    When Dar click en Save
    Then Debería tener un error de datos vacíos 
        And I wait for 3 seconds

    When Ingresar el nombre del member
        And Ingresar el email inválido del member
        And Dar click en Save
    Then Debería tener un error de datos inválidos
        And I wait for 3 seconds
        And Volver a la sección miembros
