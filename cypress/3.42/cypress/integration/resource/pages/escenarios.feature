Feature: Page Management

    Scenario: Crear un nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Hacer click en nuevo page
            And Ingresa el titulo de page "Page 1"
            And Ingresa la descripcion de page "Description page 1"
            And Hacer click en las configuracion del page
            And Añadir Tag
            And Hacer click en las configuracion del page
            And Hace click en el boton de publish page
            And Hace click en el boton de confirm page
        Then Validar que se haya creado page "Page 1"


    Scenario: Editar page
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        Given Ingresar al sitio pages
            When Seleccionar page con el nombre "Page 1"
            And Ingresa el titulo de page " Editado"
            And Ingresa la descripcion de page " editado"
            And Hacer click en el boton Update
        Then Validar notificacion de confirmacion
    
    Scenario: Eliminar page
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso
        
        Given Ingresar al sitio pages
            When Seleccionar page con el nombre "Page 1 Editado"
            And Hacer click en las configuracion de page
            And Hace click en el boton delete
            And Hace click en confirmar delete
        Then Validar redireccion a page

  
