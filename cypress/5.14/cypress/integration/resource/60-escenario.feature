Feature: Escenarios: Actualizar perfil

Feature Actualizar perfil

  Background:
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Iniciar Sesion Exitoso

  Scenario: Actualizar perfil pseudo

    When Ir a mi perfil
    And Ingresar datos de perfil pseudo
    Then Actualizacion de perfil exitoso pseudo "Saved"


