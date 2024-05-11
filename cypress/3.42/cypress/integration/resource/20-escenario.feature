Feature: Escenarios: Cambiar contraseña con contraseña vieja invalida y nueva contraseña

Feature Cambiar contraseña con contraseña vieja invalida y nueva contraseña

  Background:
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Iniciar Sesion Exitoso "3"

  Scenario: Cambio de contraseña exitoso

    When Ir a mi perfil
    And Ingresar datos de contraseñas correctos
    Then Validar cambio de contraseña exitoso "Password updated"
    And SignOut
    And Ingresa el nombre de usuario e ingresa la nueva contraseña
    Then Iniciar Sesion Exitoso "9"

