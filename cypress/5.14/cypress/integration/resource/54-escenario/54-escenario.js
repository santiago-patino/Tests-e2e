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

// Configurar y traer datos del Api
const pageApi = Cypress.config("pageApi");

Cypress.Commands.add('fetchPageApi', () => {
    cy.request('GET', pageApi).then((response) => {
      expect(response.status).to.eq(200);
      return response.body;
    });
  });

let apiData = {};

before(() => {
  cy.fetchPageApi().then((data) => {
    apiData = data;
  });
});

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
        pagePage.titleInput(apiData.title)
    })
    And('Ingresa la descripcion de page', ()=>{
        pagePage.descriptionInput(apiData.description)
        cy.wait(500)
        cy.screenshot("3")
    })
Then('Validar draft en lista', ()=>{
    pagePage.validateDraftPage(apiData.title)
    pagePage.validateDraftStatus(apiData.title)
    cy.screenshot("4")
    cy.wait(500)
    })

//----Validar acceso de URL
function titleToUrlSlug(titleURL) {
    return titleURL.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

Given('Ingreso a la url de la pagina', ()=>{
    const urlSlug = titleToUrlSlug(apiData.title);
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
    pagePage.selectPage(apiData.title)
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
    pagePage.validateDeletePage(apiData.title)
})