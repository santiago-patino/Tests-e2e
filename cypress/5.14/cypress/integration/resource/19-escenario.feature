Feature: Escenarios: Cambiar contraseña con contraseña vieja invalida y nueva contraseña

Feature Cambiar contraseña con contraseña vieja invalida y nueva contraseña

  Background:
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Iniciar Sesion Exitoso

  Scenario: Cambio de contraseña con contraseña vieja y contraseñas nuevas vacías
    When Ir a mi perfil
    And Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas vacías
    Then Validar que no esté vacío new Password "Sorry, passwords can't be blank"

