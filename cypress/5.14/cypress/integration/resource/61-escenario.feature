Feature: Escenario 61. Crear un member con datos aleatorios y verificar que se creó

    Feature Crear un member con datos aleatorios y verificar que se creó

    Scenario: Crear un member con datos aleatorios y verificar que se creó

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario e ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear un member con datos aleatorios y verificar que se creó
        When Ir a crear un nuevo member con datos aleatorios
            And Ingresar el nombre aleatorio del member
            And Ingresar el email aleatorio del member
            And Dar click en Save
        Then Debería ver el nuevo member creado