// Importación de dependencias necesarias
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../../pages/pageLogin.js';
import pagePage from '../../pages/pagePage.js';
import pageDashboard from '../../pages/pageDashboard.js';
import {faker} from '@faker-js/faker'

let title = faker.lorem.sentence();
let description = faker.lorem.paragraph();

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
        cy.screenshot("1")
        pageDashboard.createPageUrl()
        cy.screenshot("2")
    })
    And('Ingresa el titulo de page', ()=>{
        pagePage.titleInput(title)
    })
    And('Ingresa la descripcion de page', ()=>{
        pagePage.descriptionInput(description)
        cy.wait(500)
        cy.screenshot("3")
    })


    And('Hacer click en el boton de publish page', ()=>{
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
    cy.screenshot("5")
})

//----Validar acceso de URL
function titleToUrlSlug(titleURL) {
    return titleURL.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

Given('Ingreso a la url de la pagina', ()=>{
    const urlSlug = titleToUrlSlug(title);
    const baseUrl = 'https://ghost-xefe.onrender.com/';
    const fullUrl = baseUrl + urlSlug;

    cy.visit(fullUrl, {failOnStatusCode: false});
    cy.screenshot("6")
    cy.wait(1000)
})

Then('Validar Url correcta', ()=>{
    pagePage.urlPageValid(title)
})



//----Eliminación de Page
When('Seleccionar page con el nombre', ()=>{
    pagePage.selectPage(title)
    cy.screenshot("7")
    cy.wait(500)
})

    And('abrir menu de page', () => {
        pagePage.menuSettingsPage()
        cy.wait(500)
        cy.screenshot("8")
    })
    And('eliminar page', () => {
        pagePage.deletePage()
        cy.wait(500)
        cy.screenshot("9")
    })
    And('confirmar eliminación', () => {
        cy.wait(500)
        pagePage.confirmDeletePage()
        cy.wait(500)
        cy.screenshot("10")
    })
Then('Validar eliminacion de page', () => {
    pagePage.validateDeletePage(title)
})