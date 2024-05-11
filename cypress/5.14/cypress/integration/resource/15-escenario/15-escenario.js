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
        cy.wait(500)
        cy.screenshot("3 - formulario poblado")
    })


    And('Hacer click en el boton de publish page', ()=>{
        pagePage.publishPageButton()
    })
    And('Hacer click en el boton de confirm page', ()=>{
        pagePage.FinalpublishPageButton()
        cy.wait(500)
        cy.screenshot("5- Publicación de page")
        pagePage.confirmPageButton()
    })

Then('Validar que se haya creado page {string}', (namepage)=>{
    pagePage.validateCreatedPage(namepage) 
    cy.screenshot("6- Page publicada")
})

//----Validar acceso de URL
function titleToUrlSlug(titleURL) {
    return titleURL.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

Given('Ingreso a la url de la pagina {string}', (namepage)=>{
    const urlSlug = titleToUrlSlug(namepage);
    const baseUrl = 'https://ghost-xefe.onrender.com/';
    const fullUrl = baseUrl + urlSlug;

    cy.visit(fullUrl, {failOnStatusCode: false});
    cy.screenshot("7 - Visualizar pagina publicada")
    cy.wait(1000)
})

Then('Validar Url correcta {string}', (namepage)=>{
    pagePage.urlPageValid(namepage)
})



//----Eliminación de Page
When('Seleccionar page con el nombre {string}', (namepage)=>{
    pagePage.selectPage(namepage)
    cy.screenshot("8- Seleccionar page")
    cy.wait(500)
})

    And('abrir menu de page', () => {
        pagePage.menuSettingsPage()
        cy.wait(500)
        cy.screenshot("9- Page settings")
    })
    And('eliminar page', () => {
        pagePage.deletePage()
        cy.wait(500)
        cy.screenshot("10- Eliminación de page")
    })
    And('confirmar eliminación', () => {
        cy.wait(500)
        pagePage.confirmDeletePage()
        cy.wait(500)
        cy.screenshot("11- confirmación de eliminación")
    })
Then('Validar eliminacion de page {string}', (namepage) => {
    pagePage.validateDeletePage(namepage)
})