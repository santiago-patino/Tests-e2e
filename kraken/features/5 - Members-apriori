Feature: Members [A priori]

@user1 @web
Scenario: Crear un member con datos a priori

    Given Ir hacia "<HOST>" "ghost"
        And Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And Validar inicio sesion exitoso

# Escenario #61 Crear un member con datos a priori y verificar que se creó

    When Ir a crear un nuevo member con datos a priori
        And Ingresar el nombre a priori del member
        And Ingresar el email a priori del member
        And Dar click en Save
    Then Debería ver el nuevo member a priori creado

# Escenario #62 Editar el member creado con un nuevo nombre a priori

    When Ir a la sección members para editar el member a priori creado
        And Verificar que existe el member a priori a editar
        And Ingresar el nombre a priori del member
        And Dar click en Save cambios
    Then Debería ver el member a priori editado

# Escenario #63 Eliminar el member creado con datos a priori

    When Ir a la sección members para eliminar el member a priori creado
        And Verificar que existe el member a priori creado
        And Borrar el member a priori creado
    Then No debería existir el member a priori

# Escenario # 64 Crear un member con email inválido a priori y verificar que se recibe error

    When Ir a crear un nuevo member con email a priori inválido
        And Ingresar el email a priori inválido del member
        And Dar click en Save
    Then Debería recibir un error de email inválido a priori

# Escenario # 65 Crear un member con nombre inválido a priori y verificar que se recibe error

    When Ir a crear un nuevo member con nombre a priori inválido
        And Ingresar el nombre a priori inválido del member
        And Ingresar el email a priori válido del member
        And Dar click en Save
    Then Debería recibir un error de nombre inválido a priori