// Importación de dependencias necesarias
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../../pages/pageLogin.js';
import pagePage from '../../pages/pagePage.js';
import pageDashboard from '../../pages/pageDashboard.js';

//Configuración para obtener datos apriori
const jsonPage = require('../../data/pages.json');

function random() {
    let number = Math.floor(Math.random() * jsonPage.length);
    console.log(number)
    return number
}

let title = jsonPage[random()].title
let description = jsonPage[random()].description

let title2 = jsonPage[random()].title
let description2 = jsonPage[random()].description

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
    })
    
    
    And('Hacer click en el boton de publish page', ()=>{
        cy.screenshot("3")
        cy.wait(500)
        pagePage.publishPageButton()
    })
    And('Hacer click en el boton de confirm page', ()=>{
        pagePage.FinalpublishPageButton()
        cy.wait(500)
        cy.screenshot("4")
        pagePage.confirmPageButton()
    })
Then('Validar que se haya creado page', ()=>{
    pagePage.validateCreatedPage(title) 
    cy.wait(500)
    cy.screenshot("5")
})


//--- Editar page publicado
When('Seleccionar page', ()=>{
    pagePage.selectPage(title)
})
    And('Modificar el titulo de page', ()=>{
        pagePage.titleInput(title2)
    })
    And('Modificar la descripcion de page', ()=>{
        pagePage.descriptionInput(description2)
    })
    And('Hacer click en el boton Update', ()=>{
        cy.screenshot("6")
        cy.wait(500)
        pagePage.updatePage()
    })


Then('Validar notificacion de edicion', () => {
    pagePage.validateMessageUpdated()
    cy.wait(500)
    cy.screenshot("7")
    pageDashboard.listPageUrl()
    pagePage.selectPage(title2)
    cy.wait(500)
    pagePage.menuSettingsPage()
    cy.wait(500)
    pagePage.deletePage()
    pagePage.confirmDeletePage()
    cy.wait(500)
    pagePage.validateDeletePage(title2)
})