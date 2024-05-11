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

  Scenario: Cambiar contraseña con contraseña vieja vacía y nueva contraseña

    When Ir a mi perfil
    And Ingresar datos de contraseñas vieja vacía y nueva contraseña
    Then Validar error en campo oldPassword "Your current password is required to set a new one"
#
  Scenario: Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes
    When Ir a mi perfil
    And Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes
    Then Validar que las contraseñas no coincidan "Your new passwords do not match"

  Scenario: Cambio de contraseña con contraseña vieja y contraseñas nuevas vacías
    When Ir a mi perfil
    And Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas vacías
    Then Validar que no esté vacío new Password "Sorry, passwords can't be blank"

  Scenario: Cambio de contraseña exitoso

    When Ir a mi perfil
    And Ingresar datos de contraseñas correctos
    Then Validar cambio de contraseña exitoso "Password updated"
    And SignOut
    And Ingresa el nombre de usuario e ingresa la nueva contraseña
    Then Iniciar Sesion Exitoso

