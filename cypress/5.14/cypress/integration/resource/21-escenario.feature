Feature: Escenario 21. Crear un member con datos a priori y verificar que se creó

    Feature Crear un member con datos a priori y verificar que se creó

    Scenario: Crear un member con datos a priori y verificar que se creó

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario e ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear un member con datos a priori y verificar que se creó
        When Ir a crear un nuevo member con datos a priori
            And Ingresar el nombre a priori del member
            And Ingresar el email a priori del member
            And Dar click en Save
        Then Debería ver el nuevo member creado