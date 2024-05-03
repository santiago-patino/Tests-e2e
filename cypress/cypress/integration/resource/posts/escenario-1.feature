Feature: Escenario 1: Crear Un Nuevo Post y Verificar Su Publicación

    Feature Crear un post y que este sea visible para el usuario
   
    Scenario: Crear un nuevo post y publicar post (vista de usuario)
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso