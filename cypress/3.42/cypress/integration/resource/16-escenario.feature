Feature: Escenarios: Cambiar contraseña con contraseña vieja invalida y nueva contraseña

Feature Cambiar contraseña con contraseña vieja invalida y nueva contraseña

  Background:
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Iniciar Sesion Exitoso

  Scenario: Cambiar contraseña con contraseña vieja invalida y nueva contraseña

    When Ir a mi perfil
    And Ingresar datos de contraseñas vieja invalida y nueva contraseña
    Then Validar cambio de contraseña "Your password is incorrect. Your password is incorrect."
