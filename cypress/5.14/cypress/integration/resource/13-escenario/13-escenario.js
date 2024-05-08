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


    And('Hacer click en el boton de publish page', ()=>{
        pagePage.publishPageButton()
    })
    And('Hacer click en el boton de confirm page', ()=>{
        pagePage.FinalpublishPageButton()
        pagePage.confirmPageButton()
    })

Then('Validar que se haya creado page {string}', (namepage)=>{
    pagePage.validateCreatedPage(namepage)
    cy.screenshot("3- Publicación de page")
    pagePage.backEditor()
})

//--- Editar page publicado
When('Seleccionar page con el nombre {string}', (namepage)=>{
    pagePage.selectPage(namepage)
    cy.screenshot("4- Lista de pages")
})
    And('Hacer click en el boton Update', ()=>{
        pagePage.updatePage()
    })
Then('Validar notificacion de edicion', () => {
    pagePage.validateMessageUpdated()
    cy.screenshot("5- Mensaje de actualización")
})

//----Eliminación de Page
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