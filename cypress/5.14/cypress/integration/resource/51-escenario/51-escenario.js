// Importación de dependencias necesarias
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../../pages/pageLogin.js';
import pagePage from '../../pages/pagePage.js';
import pageDashboard from '../../pages/pageDashboard.js';

// Configuraciones screenshots
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
    pagePage.validateCreatedPage(apiData.title) 
    cy.screenshot("5")
    pagePage.selectPage(apiData.title)
    cy.wait(500)
    pagePage.menuSettingsPage()
    cy.wait(500)
    pagePage.deletePage()
    pagePage.confirmDeletePage()
    cy.wait(500)
    pagePage.validateDeletePage(apiData.title)
})