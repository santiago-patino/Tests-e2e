Feature: Crear, eliminar y validar

Scenario: Crear, eliminar page y validar que no se encuentre page
    #Autenticarse
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

    #Ir a pages
        Given Ingresar al sitio pages
            And Hacer click en nuevo page
            And Ingresa el titulo de page "Page 3"
            And Ingresa la descripcion de page "Description page 3"

    #Publicar y validar
            And Hacer click en el boton de publish page
            And Hacer click en el boton de confirm page
        Then Validar que se haya creado page "Page 3"

    #Seleccionar y eliminar Page
        Given Ingresar al sitio pages
            When Seleccionar page con el nombre "Page 3"
            And abrir menu de page
            And eliminar page
            And confirmar eliminación
        Then Validar eliminacion de page "Page 3"
