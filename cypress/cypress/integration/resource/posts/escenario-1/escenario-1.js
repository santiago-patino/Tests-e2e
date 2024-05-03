import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const login = require('../../../common/login')
const versionghost = Cypress.config("versionghost")
const baseUrl = Cypress.config("baseUrl")

//Inicio de sesión
Given('Ingresa a la pagina de inicio de sesion', ()=> {
    cy.visit('ghost')
})

    When('Ingresa el nombre de usuario {string} e ingresa la contraseña {string}', (username,password)=>{
        login.singIn()
    })

Then('Iniciar Sesion Exitoso', ()=>{
    login.check()
})