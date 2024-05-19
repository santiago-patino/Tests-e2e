Feature: Escenario 22. Editar un member creado con un nuevo nombre a priori

    Feature Editar un member creado con un nuevo nombre a priori

    Scenario: Editar un member creado con un nuevo nombre a priori

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario e ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Editar un member creado con un nuevo nombre a priori
        When Ir a members y seleccionar el primero para editar su nombre
            And Ingresar el nombre a priori del member
            And Dar click en Save
        Then Debería ver el member actualizado 