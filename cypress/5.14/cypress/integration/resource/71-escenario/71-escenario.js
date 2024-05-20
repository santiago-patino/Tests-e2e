// Importación de dependencias necesarias
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../../pages/pageLogin.js';
import pagePage from '../../pages/pagePage.js';
import pageDashboard from '../../pages/pageDashboard.js';
import {faker} from '@faker-js/faker'

let title = faker.lorem.sentence();
let description = faker.lorem.paragraph();

// Configuraciones screenshots
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
        cy.screenshot("1")
        pageDashboard.createPageUrl()
        cy.screenshot("2")
    })
    And('Ingresa el titulo de page', ()=>{
        pagePage.titleInput(title)
    })
    And('Ingresa la descripcion de page', ()=>{
        pagePage.descriptionInput(description)
        cy.screenshot("3")
    })

    And('Hacer click en el boton de publish page', ()=>{
        pagePage.publishPageButton()
    })
    And('Hacer click en el boton de confirm page', ()=>{
        pagePage.FinalpublishPageButton()
        cy.screenshot("4")
        pagePage.confirmPageButton()
    })

Then('Validar que se haya creado page', ()=>{
    cy.wait(1000)
    pagePage.validateCreatedPage(title) 
    cy.screenshot("5")
    pagePage.selectPage(title)
    cy.wait(500)
    pagePage.menuSettingsPage()
    cy.wait(500)
    pagePage.deletePage()
    pagePage.confirmDeletePage()
    cy.wait(500)
    pagePage.validateDeletePage(title)
})