Feature: Escenario 4. Crear un member con datos de un member existente y verificar que se recibe un error

    Feature Crear un member con datos de un member existente

    Scenario: Crear un member con datos de un member existente

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Crear member con datos de un member existente y verificar que se recibe un error
        When Ir a crear un member con el correo de un member existente en la sección members y botón new member
            And Ingresar el nombre del member "Edna Conde"
            And Ingresar el email del member existente "e.condev@uniandes.edu.co"
            And Dar click en Save
        Then Debería tener un error que indica que es el correo de un member existente