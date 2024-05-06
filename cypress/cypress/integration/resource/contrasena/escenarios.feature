Feature: Escenarios: Cambiar contraseña con contraseña vieja invalida y nueva contraseña

    Feature Cambiar contraseña con contraseña vieja invalida y nueva contraseña

    Scenario: Cambiar contraseña con contraseña vieja invalida y nueva contraseña
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ir a mi perfil
        Then Validar pagina de perfil

        When Ingresar datos de contraseñas vieja invalida y nueva contraseña
        Then Validar cambio de contraseña " Retry"

    Scenario: Cambiar contraseña con contraseña vieja vacía y nueva contraseña
        Given Ingresa a la pagina de inicio de sesion
        When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ir a mi perfil
        Then Validar pagina de perfil

        When Ingresar datos de contraseñas vieja vacía y nueva contraseña
        Then Validar error en campo oldPassword
#
    Scenario: Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes
        Given Ingresa a la pagina de inicio de sesion
        When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ir a mi perfil
        Then Validar pagina de perfil

        When Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes
        Then Validar que las contraseñas no coincidan

    Scenario: Cambio de contraseña con contraseña vieja y contraseñas nuevas vacías
        Given Ingresa a la pagina de inicio de sesion
        When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ir a mi perfil
        Then Validar pagina de perfil

        When Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas vacías
        Then Validar cambio de contraseña " Retry"

    Scenario: Cambio de contraseña exitoso
        Given Ingresa a la pagina de inicio de sesion
        When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ir a mi perfil
        Then Validar pagina de perfil

        When Ingresar datos de contraseñas correctos

        When Logout
        Then Validar pagina de logueo

        Given Ingresa a la pagina de inicio de sesion
        When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso