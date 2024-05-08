Feature: Crear members

@user1 @web
Scenario: Como admin creo un nuevo member con todos los datos válidos y luego verifico si se creó en la lista de miembros 
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When Seleccionar la sección miembros
        And I wait for 2 seconds
    Then Debería tener un botón new members

    When Dar click en el botón new member
        And I wait for 2 seconds
    Then Debería tener un form para ingresar la información del member

    When Ingresar el nombre del member "Edna Conde"
        And Ingresar el email del member "e.condev@uniandes.edu.co"
        And Dar click en Save
        And I wait for 3 seconds
        And Seleccionar la sección miembros
        And Seleccionar la sección miembros
    Then Debería tener un nuevo member en la lista que coincida con los datos que ingresé "Edna Conde"
        And I wait for 3 seconds
        And Borrar el member creado

@user2 @web
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

    When Ingresar el nombre del member "Edna"
        And Ingresar el email inválido del member
        And Dar click en Save
    Then Debería tener un error de datos inválidos
        And I wait for 3 seconds
        And Volver a la sección miembros
        And I wait for 3 seconds

@user3 @web
Scenario: Como admin intento crear un nuevo member con datos de un member existente y valido que se recibe un error
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When Seleccionar la sección miembros
        And I wait for 6 seconds
        And Seleccionar la sección miembros
    Then Debería tener un botón new members

    When Dar click en el botón new member
        And I wait for 2 seconds
    Then Debería tener un form para ingresar la información del member

    When Ingresar el nombre del member "Edna Conde"
        And Ingresar el email del member "e.condev@uniandes.edu.co"
        And Dar click en Save
    Then Debería tener un error que indica que es el correo de un member existente
  