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
})
