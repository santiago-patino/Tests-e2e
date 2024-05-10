Feature: Escenario 2. Crear un member con datos vacíos y verificar que se recibe un error

    Feature Crear un member con datos vacíos y verificar que se recibe un error

    Scenario: Crear un member con datos vacíos y verificar que se recibe un error
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ir a crear un nuevo member con datos vacíos en la sección members y botón new member
            And Dar click en Save
        Then Debería tener un error de datos vacíos