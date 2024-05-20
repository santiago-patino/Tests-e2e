Feature: Escenario 44. Crear un member con email inválido pseudoaleatorio y verificar que se recibe error

    Feature Crear un member con email inválido pseudoaleatorio y verificar que se recibe error

    Scenario: Crear un member con email inválido pseudoaleatorio y verificar que se recibe error

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario e ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear un member con email inválido pseudoaleatorio y verificar que se recibe error
        When Ir a crear un nuevo member con datos pseudoaleatorios
            And Ingresar el nombre pseudoaleatorio del member
            And Ingresar el email pseudoaleatorio inválido del member
            And Dar click en Save
        Then Debería recibir un error de email inválido