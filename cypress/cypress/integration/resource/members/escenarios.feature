Feature: Escenarios: Crear member valido, Crear member datos no validos, Crear member con datos de member existente, Editar member, Eliminar member

    Feature Crear member con datos validos, Crear member con datos invalidos, Crear member con datos de member existente, Editar member, Eliminar member

    Scenario: Crear un nuevo member con datos validos
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ingresar a new member
            And Ingresar el nombre del member "Edna"
            And Ingresar el email del member "e@uniandes.edu.co"
            And Hacer click en el boton Save
            And Ingresar a members
        Then Validar que se haya creado el member "Edna"

    Scenario: Crear un nuevo member con datos invalidos
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ingresar a new member
            And Ingresar el nombre del member " "
            And Ingresar el email del member " "
            And Hacer click en el boton Save
        Then Validar que se recibe el error "Please enter an email."

        When Ingresar el email del member "e.condev"
            And Hacer click en el boton Retry
        Then Validar que se recibe el error "Invalid Email."

    Scenario: Crear un nuevo member con datos de un member existente
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ingresar a new member
            And Ingresar el nombre del member "Edna"
            And Ingresar el email del member "e@uniandes.edu.co"
            And Hacer click en el boton Save
        Then Validar que se recibe el error "Member already exists. Attempting to add member with existing email address" para datos de un member existente

    Scenario: Editar un member existente
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ingresar a members
            And Seleccionar el member a editar 
            And Ingresar el nuevo nombre del member "Edna Conde"
            And Ingresar el nuevo email del member "e.condev@uniandes.edu.co"
            And Hacer click en el boton Save
            And Ingresar a members
        Then Validar que se haya editado el member "Edna Conde"

    Scenario: Eliminar un member existente
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario y ingresa la contraseña
        Then Iniciar Sesion Exitoso

        When Ingresar a members
            And Seleccionar el member a eliminar 
            And Hacer click en opciones
            And Hacer click en eliminar
            And Hacer click en confirmar
            And Ingresar a members
        Then Validar que se haya eliminado el member "Edna Conde"