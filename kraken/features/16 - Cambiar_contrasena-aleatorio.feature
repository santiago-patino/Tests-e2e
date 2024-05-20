Feature: Cambiar contraseña administrador

@user1 @web
Scenario: Cambiar contraseña con contraseña vieja invalida y nuevas contraseñas
    Given Ir hacia "<HOST>" "ghost"
        When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When Ir a mi perfil
    Then Validar pagina de perfil

    When Ingresar datos de contraseñas invalida y nuevas contraseñas aleatorio escenario
    Then Validar cambio de contraseña "Retry"

@user2 @web
Scenario: Cambiar contraseña con contraseña vieja vacía y nueva contraseña
    Given Ir hacia "<HOST>" "ghost"
    When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When Ir a mi perfil
    Then Validar pagina de perfil

    When Ingresar datos de contraseñas vieja vacía y nuevas contraseñas aleatorio escenario
    Then Validar error en campo oldPassword "Your current password is required to set a new one"

@user3 @web
Scenario: Cambiar contraseña con contraseña vieja y contraseñas nuevas diferentes
    Given Ir hacia "<HOST>" "ghost"
    When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When Ir a mi perfil
    Then Validar pagina de perfil

    When Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes aleatorio escenario
    Then Validar que las contraseñas no coincidan "Your new passwords do not match"

@user4 @web
Scenario: Cambiar contraseña con contraseña vieja y contraseñas nuevas con longitud invalida
    Given Ir hacia "<HOST>" "ghost"
    When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
    Then Validar inicio sesion exitoso

    When Ir a mi perfil
    Then Validar pagina de perfil

    When Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas con longitud invalida aleatorio escenario
    Then Validar longitud nueva contraseña "Password must be at least 10 characters long."

#@user5 @web
#Scenario: Cambio de contraseña exitoso
#    Given Ir hacia "<HOST>" "ghost"
#    When Autenticarse con credenciales "<USERNAME>" "<PASSWORD>"
#    Then Validar inicio sesion exitoso
#
#    When Ir a mi perfil
#    Then Validar pagina de perfil
#
#    When Ingresar datos de contraseñas "<PASSWORD>", "<NEWPASSWORD>" y "<NEWPASSWORD>"
#
#
#    When Logout
#    Then Validar pagina de logueo
#
#    When Autenticarse con credenciales "<USERNAME>" "<NEWPASSWORD>"
#    Then Validar inicio sesion exitoso


    
