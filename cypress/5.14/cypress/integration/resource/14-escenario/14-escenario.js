// Importación de dependencias necesarias
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../../pages/pageLogin.js';
import pagePage from '../../pages/pagePage.js';
import pageDashboard from '../../pages/pageDashboard.js';


// Configuraciones
const versionGhost = Cypress.config("versionGhost");
const baseUrl = Cypress.config("baseUrl");

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
        pageDashboard.createPageUrl()
        cy.screenshot("1 - Creación Page")
    })
    And('Ingresa el titulo de page {string}', (namepage)=>{
        pagePage.titleInput(namepage)
    })
    And('Ingresa la descripcion de page {string}', (textpage)=>{
        pagePage.descriptionInput(textpage)
        cy.screenshot("2 - formulario poblado")
    })
Then('Validar draft {string} en lista', (namepage)=>{
    pagePage.validateDraftPage(namepage)
    pagePage.validateDraftStatus(namepage)
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
    cy.wait(1000)
})

Then('Validar Url 404', ()=>{
    pagePage.urlPage404()
})



//----Eliminación de Page
When('Seleccionar page con el nombre {string}', (namepage)=>{
    pagePage.selectPage(namepage)
    cy.screenshot("4- Lista de pages")
})
And('abrir menu de page', () => {
    pagePage.menuSettingsPage()
})
And('eliminar page', () => {
    pagePage.deletePage()
    cy.screenshot("6- Eliminación de page")
})
And('confirmar eliminación', () => {
    pagePage.confirmDeletePage()
    cy.screenshot("7- confirmación de eliminación")
})
Then('Validar eliminacion de page {string}', (namepage) => {
pagePage.validateDeletePage(namepage)
})