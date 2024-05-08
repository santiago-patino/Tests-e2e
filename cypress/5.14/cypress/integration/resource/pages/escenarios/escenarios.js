// Importación de dependencias necesarias
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../../../common/login.js';
import newPage from '../../../common/newPage.js';
import checkPage from '../../../common/checkPage.js';


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
    checkPage.PageUrl()
})
    And('Hacer click en nuevo page', ()=>{ 
        checkPage.NewPageUrl()
        cy.screenshot("1 - Creación Page")
    })
    And('Ingresa el titulo de page {string}', (namepage)=>{
        newPage.nameInput(namepage)
    })
    And('Ingresa la descripcion de page {string}', (textpage)=>{
        newPage.textInput(textpage)
    })


Given('Hacer click en el boton de publish page', ()=>{
    newPage.publishPageButton()
})
    And('Hacer click en el boton de confirm page', ()=>{
        newPage.FinalpublishPageButton()
        newPage.confirmPageButton()
    })

Then('Validar que se haya creado page {string}', (namepage)=>{
    checkPage.checkCreatedPage(namepage) 
})
    And('volver al editor', ()=>{
       newPage.backEditor()
    })


//--- Editar post publicado
When('Seleccionar page con el nombre {string}', (namepage)=>{
    newPage.selectPage(namepage)
})

And('Hacer click en el boton Update', ()=>{
    newPage.updatePage()
})

Then('Validar notificacion de confirmacion', () => {
    checkPage.checkMessageUpdated()
})

