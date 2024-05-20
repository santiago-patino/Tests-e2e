Feature: Escenario 42. Editar un member creado con un nuevo nombre pseudoaleatorio

    Feature Editar un member creado con un nuevo nombre pseudoaleatorio

    Scenario: Editar un member creado con un nuevo nombre pseudoaleatorio

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario e ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Editar un member creado con un nuevo nombre pseudoaleatorio
        When Ir a members y seleccionar el primero para editar su nombre
            And Ingresar el nombre pseudoaleatorio del member
            And Dar click en Save
        Then Debería ver el member actualizado 