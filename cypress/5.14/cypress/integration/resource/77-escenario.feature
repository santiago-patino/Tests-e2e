Feature: Escenarios: Cambiar contraseña con contraseña vieja invalida y nueva contraseña

Feature Cambiar contraseña con contraseña vieja invalida y nueva contraseña

  Background:
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Iniciar Sesion Exitoso

  Scenario: Cambiar contraseña con contraseña vieja vacía y nueva contraseña

    When Ir a mi perfil
    And Ingresar datos de contraseñas vieja vacía y nueva contraseña aleatorio
    Then Validar error en campo oldPassword "Your current password is required to set a new one"
