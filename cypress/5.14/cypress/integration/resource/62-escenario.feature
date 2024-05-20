Feature: Escenario 62. Editar un member creado con un nuevo nombre aleatorio

    Feature Editar un member creado con un nuevo nombre aleatorio

    Scenario: Editar un member creado con un nuevo nombre aleatorio

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario e ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Editar un member creado con un nuevo nombre aleatorio
        When Ir a members y seleccionar el primero para editar su nombre
            And Ingresar el nombre aleatorio del member
            And Dar click en Save
        Then Debería ver el member actualizado 