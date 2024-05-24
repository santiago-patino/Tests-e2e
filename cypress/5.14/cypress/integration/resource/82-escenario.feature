Feature: Escenarios: Actualizar perfil

Feature Actualizar perfil

  Scenario::
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Validar error campos en blanco "Please fill out the form to sign in. "
