Feature: Escenario 1. Crear un member con todos los datos válidos y visualizar el listado de members para verificar que se creó

    Feature Crear un member con todos los datos válidos y visualizar el listado de members para verificar que se creó

    Scenario: Crear un member con todos los datos válidos y visualizar el listado de members para verificar que se creó
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ir a crear un nuevo member en la sección members y botón new member
            And Ingresar el nombre del member "Edna Conde"
            And Ingresar el email válido del member "e.condev@uniandes.edu.co"
            And Dar click en Save
        Then Debería ver que se actualiza la vista con la información de creación