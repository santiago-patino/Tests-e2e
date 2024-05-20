Feature: Escenario 43. Eliminar el member creado con datos a priori

    Feature Eliminar el member creado con datos a priori

    Scenario: Eliminar el member creado con datos a priori

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario e ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Eliminar el member creado con datos a priori
        When Ir a la sección members para eliminar el member creado
            And Verificar que existe el member
            And Seleccionar el member a priori creado
            And Hacer click en opciones
            And Hacer click en eliminar
            And Hacer click en confirmar
        Then No debería existir el member a priori