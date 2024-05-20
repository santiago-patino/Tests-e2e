Feature: Members [Aleatorios]

@user1 @web
Scenario: Crear un member con datos aleatorios

    Given Ir hacia "<HOST>" "ghost"
        And Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
        And Validar inicio sesion exitoso

# Escenario #101 Crear un member con datos aleatorios y verificar que se creó

    When Ir a crear un nuevo member con datos aleatorios
        And Ingresar el nombre aleatorio del member "$name_1"
        And Ingresar el email aleatorio del member "$email_1"
        And Dar click en Save
    Then Debería ver el nuevo member creado

# Escenario #102 Editar el member creado con un nuevo nombre aleatorio

    When Ir a la sección members para editar el member creado
        And Verificar que existe el member "$$name_1" a editar
        And Ingresar el nombre aleatorio del member "$name_2"
        And Dar click en Save cambios
    Then Debería ver el member editado

# Escenario #103 Eliminar el member creado con datos aleatorios

    When Ir a la sección members para eliminar el member creado
        And Verificar que existe el member "$$name_2" creado
        And Borrar el member aleatorio creado
    Then No debería existir el member aleatorio "$$name_2"

# Escenario # 104 Crear un member con email inválido aleatorio y verificar que se recibe error

    When Ir a crear un nuevo member con email aleatorio inválido
        And Ingresar el email aleatorio inválido del member "$name_3"
        And Dar click en Save
    Then Debería recibir un error de email inválido

# Escenario # 105 Crear un member con nombre inválido aleatorio y verificar que se recibe error

    When Ir a crear un nuevo member con nombre aleatorio inválido
        And Ingresar el nombre aleatorio inválido del member
        And Ingresar el email aleatorio válido del member "$email_2"
        And Dar click en Save
    Then Debería recibir un error de nombre inválido