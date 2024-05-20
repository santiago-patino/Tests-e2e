Feature: Escenario 63. Eliminar el member creado con datos aleatorios

    Feature Eliminar el member creado con datos aleatorios

    Scenario: Eliminar el member creado con datos aleatorios

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario e ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Eliminar el member creado con datos aleatorios
        When Ir a la sección members para eliminar el member creado
            And Verificar que existe el member
            And Seleccionar el member aleatorio creado
            And Hacer click en opciones
            And Hacer click en eliminar
            And Hacer click en confirmar
        Then No debería existir el member aleatorio