// Importación de dependencias necesarias
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../../pages/pageLogin.js';
import pagePage from '../../pages/pagePage.js';
import pageDashboard from '../../pages/pageDashboard.js';


// Configuraciones
const versionGhost = Cypress.config("versionGhost");
const baseUrl = Cypress.config("baseUrl");

Cypress.Screenshot.defaults({
    capture: 'viewport',
    disableTimersAndAnimations: false
})

// Inicio de sesión
Given('Ingresa a la pagina de inicio de sesion', ()=> {
    cy.visit('ghost')
})
    When('Ingresa el nombre de usuario y ingresa la contraseña', ()=>{
        login.singIn()
    })
Then('Iniciar Sesion Exitoso', ()=>{
    cy.wait(1000)
    login.check()
})

//--- Crear y que se haya validado page
Given('Ingresar al sitio pages', ()=>{
    pageDashboard.listPageUrl()
})
    And('Hacer click en nuevo page', ()=>{ 
        cy.wait(500)
        cy.screenshot("1 - Listado de page inicial")
        pageDashboard.createPageUrl()
        cy.screenshot("2 - Creación Page")
    })
    And('Ingresa el titulo de page {string}', (namepage)=>{
        pagePage.titleInput(namepage)
    })
    And('Ingresa la descripcion de page {string}', (textpage)=>{
        pagePage.descriptionInput(textpage)
    })


    And('Hacer click en el boton de publish page', ()=>{
        cy.screenshot("3 - formulario poblado")
        cy.wait(500)
        pagePage.publishPageButton()
    })
    And('Hacer click en el boton de confirm page', ()=>{
        pagePage.FinalpublishPageButton()
        cy.wait(500)
        cy.screenshot("4- Publicación de page")
        pagePage.confirmPageButton()
    })

Then('Validar que se haya creado page {string}', (namepage)=>{
    pagePage.validateCreatedPage(namepage)
    cy.screenshot("5- Page publicada")
    pagePage.backEditor()
})

//----Eliminación de Page
When('Seleccionar page con el nombre {string}', (namepage)=>{
    cy.wait(500)
    cy.screenshot("6- Lista de pages")
    pagePage.selectPage(namepage)
    cy.screenshot("7- Seleccionar page")
    cy.wait(500)
})

    And('abrir menu de page', () => {
        pagePage.menuSettingsPage()
        cy.wait(500)
        cy.screenshot("8- Page settings")
    })
    And('eliminar page', () => {
        pagePage.deletePage()
        cy.wait(500)
        cy.screenshot("9- Eliminación de page")
    })
    And('confirmar eliminación', () => {
        cy.wait(500)
        pagePage.confirmDeletePage()
        cy.wait(500)
        cy.screenshot("10- confirmación de eliminación")
    })
Then('Validar eliminacion de page {string}', (namepage) => {
    pagePage.validateDeletePage(namepage)
})