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
Then('Validar draft en lista', ()=>{
    pagePage.validateDraftPage(title)
    pagePage.validateDraftStatus(title)
    cy.screenshot("4")
    cy.wait(500)
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
    cy.screenshot("5")
    cy.wait(1000)
})

Then('Validar Url 404', ()=>{
    pagePage.urlPage404()
})



//----Eliminación de Page
When('Seleccionar page con el nombre', ()=>{
    pagePage.selectPage(title)
    cy.screenshot("6 - Seleccionar page")
    cy.wait(500)
})

    And('abrir menu de page', () => {
        pagePage.menuSettingsPage()
        cy.wait(500)
        cy.screenshot("7 - Page settings")
    })
    And('eliminar page', () => {
        pagePage.deletePage()
        cy.wait(500)
        cy.screenshot("8 - Eliminación de page")
    })
    And('confirmar eliminación', () => {
        cy.wait(500)
        pagePage.confirmDeletePage()
        cy.wait(500)
        cy.screenshot("9 - confirmación de eliminación")
    })
Then('Validar eliminacion de page', () => {
    pagePage.validateDeletePage(title)
})