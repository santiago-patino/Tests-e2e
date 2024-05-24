Feature: Escenarios: Actualizar perfil

Feature Actualizar perfil

  Scenario::
    Given Ingresa a la pagina de inicio de sesion
    When Ingresa el nombre de usuario y ingresa la contraseña
    Then Validar ingreso correo fake "There is no user with that email address. "
