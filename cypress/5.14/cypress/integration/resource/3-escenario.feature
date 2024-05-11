Feature: Escenario 3. Crear un member con datos inválidos y verificar que se recibe un error

    Feature Crear un member con datos inválidos

    Scenario: Crear un member con datos inválidos

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear member y verificar que se recibe un error de datos inválidos
        When Ir a crear un member con datos inválidos en la sección members y botón new member
            And Ingresar el nombre del member "Edna"
            And Ingresar el email inválido del member
            And Dar click en Save
        Then Debería tener un error de datos inválidos