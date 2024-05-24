Feature: Escenarios: Actualizar perfil

Feature Actualizar perfil

  Background:
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Iniciar Sesion Exitoso

  Scenario: Actualizar perfil aleatorio

    When Ir a mi perfil
    And Ingresar datos de perfil aleatorio
    Then Actualizacion de perfil exitoso aleatorio "Saved"
