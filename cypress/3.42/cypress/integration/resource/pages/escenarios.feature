Feature: Page Management

    Scenario: Crear una page con todos sus datos, publicar y Validar creación
    #Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    #Ir a pages
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page "Page 1"
            And Ingresa la descripcion de page "Description page 1"

    #Publicar y validar
        Given Hacer click en el boton de publish page
            And Hacer click en el boton de confirm page
        Then Validar que se haya creado page "Page 1"



    Scenario: Crear y editar una page con todos sus datos, actualizar y visualizar
    #Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    #Ir a pages
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page "Page 2"
            And Ingresa la descripcion de page "Description page 2"

    #Publicar y validar
        Given Hacer click en el boton de publish page
            And Hacer click en el boton de confirm page
        Then Validar que se haya creado page "Page 2"
            And volver al editor

    #Seleccionar y editar Page
        Given Ingresar al sitio pages
            When Seleccionar page con el nombre "Page 2"
            And Ingresa el titulo de page " Editado"
            And Ingresa la descripcion de page " Editado"
            And Hacer click en el boton Update
        Then Validar notificacion de confirmacion
