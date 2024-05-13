Feature: Members

@user1 @web
Scenario: 1. Crear un member con todos los datos válidos y visualizar el listado de members para verificar que se creó, 2. Crear un member con datos vacíos y verificar que se recibe un error, 3. Crear un member con datos inválidos y verificar que se recibe un error, 4. Crear un member con datos de un member existente y verificar que se recibe un error, 5. Eliminar un member existente y verificar que ya no aparece en la lista de members

    # Escenario 1. Crear un member con todos los datos válidos y visualizar el listado de members para verificar que se creó

    Given Ir hacia "<HOST>" "ghost"
        And Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And Validar inicio sesion exitoso
    When Ir a crear un nuevo member en la sección members y botón new member
        And Ingresar el nombre del member "Edna Conde"
        And Ingresar el email válido del member "e.condev@uniandes.edu.co"
        And Dar click en Save
    Then Debería ver que se actualiza la vista con la información de creación

    # Escenario 2. Crear un member con datos vacíos y verificar que se recibe un error

    When Ir a crear un nuevo member con datos vacíos en la sección members y botón new member
        And Dar click en Save
    Then Debería tener un error de datos vacíos

    # Escenario 3. Crear un member con datos inválidos y verificar que se recibe un error

    When Ir a crear un member con datos inválidos en la sección members y botón new member
        And Ingresar el nombre del member "Edna"
        And Ingresar el email inválido del member
        And Dar click en Save
    Then Debería tener un error de datos inválidos

    # Escenario 4. Crear un member con datos de un member existente y verificar que se recibe un error

        And Volver a la sección members
    When Ir a crear un member con el correo de un member existente en la sección members y botón new member
        And Ingresar el nombre del member "Edna Conde"
        And Ingresar el email del member existente "e.condev@uniandes.edu.co"
        And Dar click en Save
    Then Debería tener un error que indica que es el correo de un member existente

    # Escenario 5. Eliminar un member existente y verificar que ya no aparece en la lista de members

        And Volver a la sección members
    When Ir a la sección members para eliminar un member
        And Verificar que existe el member "Edna Conde"
        And Borrar el member creado
    Then No debería existir el member "Edna Conde"