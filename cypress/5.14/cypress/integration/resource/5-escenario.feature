Feature: Escenario 5. Eliminar un member existente y verificar que ya no aparece en la lista de members

    Feature Eliminar un member existente 

    Scenario: Eliminar un member existente 

    ## Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    ## Eliminar un member existente y verificar que se eliminó
        When Ir a la sección members para eliminar un member
            And Verificar que existe el member "Edna Conde"
            And Seleccionar el miembro a eliminar
            And Hacer click en opciones
            And Hacer click en eliminar
            And Hacer click en confirmar
        Then No debería existir el member "Edna Conde"