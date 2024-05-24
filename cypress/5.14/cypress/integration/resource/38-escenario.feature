Feature: Escenarios: Cambiar contraseña con contraseña vieja invalida y nueva contraseña

Feature Cambiar contraseña con contraseña vieja invalida y nueva contraseña

  Background:
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Iniciar Sesion Exitoso

  Scenario: Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes
    When Ir a mi perfil
    And Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes a priori
    Then Validar que las contraseñas no coincidan "Your new passwords do not match"

