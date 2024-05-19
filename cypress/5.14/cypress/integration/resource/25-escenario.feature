Feature: Escenario 25. Crear un member con nombre inválido a priori y verificar que se recibe error

    Feature Crear un member con nombre inválido a priori y verificar que se recibe error

    Scenario: Crear un member con nombre inválido a priori y verificar que se recibe error

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario e ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear un member con nombre inválido a priori y verificar que se recibe error
        When Ir a crear un nuevo member con datos a priori
            And Ingresar el nombre inválido a priori del member
            And Ingresar el email del member
            And Dar click en Save
        Then Debería recibir un error de nombre inválido