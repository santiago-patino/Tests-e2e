Feature: Escenarios: Cambiar contraseña con contraseña vieja invalida y nueva contraseña

Feature Cambiar contraseña con contraseña vieja invalida y nueva contraseña

  Background:
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Iniciar Sesion Exitoso

  Scenario: Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida
    When Ir a mi perfil
    And Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas con longitud invalida aleatorio
    Then Validar longitud contraseña "Password must be at least 10 characters long."

