Feature: Members [Pseudoaleatorios]

@user1 @web
Scenario: Crear un member con datos pseudoaleatorios

    Given Ir hacia "<HOST>" "ghost"
        And Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And Validar inicio sesion exitoso

# Escenario #81 Crear un member con datos pseudoaleatorios y verificar que se creó

    When Ir a crear un nuevo member con datos pseudoaleatorios
        And Ingresar el nombre pseudoaleatorio del member
        And Ingresar el email pseudoaleatorio del member
        And Dar click en Save
    Then Debería ver el nuevo member pseudoaleatorio creado

# Escenario #82 Editar el member creado con un nuevo nombre pseudoaleatorio

    When Ir a la sección members para editar el member pseudoaleatorio creado
        And Verificar que existe el member a editar
        And Ingresar el nombre pseudoaleatorio del member
        And Dar click en Save cambios
    Then Debería ver el member pseudoaleatorio editado

# Escenario #83 Eliminar el member creado con datos pseudoaleatorios

    When Ir a la sección members para eliminar el member pseudoaleatorio creado
        And Verificar que existe el member creado
        And Borrar el member pseudoaleatorio creado
    Then No debería existir el member pseudoaleatorio

# Escenario # 84 Crear un member con email inválido pseudoaleatorio y verificar que se recibe error

    When Ir a crear un nuevo member con email pseudoaleatorio inválido
        And Ingresar el email pseudoaleatorio inválido del member
        And Dar click en Save
    Then Debería recibir un error de email inválido pseudoaleatorio

# Escenario # 85 Crear un member con nombre inválido pseudoaleatorio y verificar que se recibe error

    When Ir a crear un nuevo member con nombre pseudoaleatorio inválido
        And Ingresar el nombre pseudoaleatorio inválido del member
        And Ingresar el email pseudoaleatorio válido del member
        And Dar click en Save
    Then Debería recibir un error de nombre inválido pseudoaleatorio