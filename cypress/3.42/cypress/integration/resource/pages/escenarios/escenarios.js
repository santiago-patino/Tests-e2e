// Importación de dependencias necesarias
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../../../common/login';

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

When('Hacer click en nuevo page', ()=>{
    cy.wait(1000)
    cy.get("a[href='#/pages/']").click()
    cy.get("a[href='#/editor/page/']").click()
})

And('Ingresa el titulo de page {string}', (namepage)=>{
    cy.wait(1500)
    cy.get('[placeholder="Page title"]').type(namepage)
})

And('Ingresa la descripcion de page {string}', (textpage)=>{
    cy.get('.koenig-editor__editor').type(textpage)
})

And('Añadir Tag', ()=>{
    cy.get('#tag-input').click()
    cy.get(".ember-power-select-option").click()
})

And('Hacer click en las configuracion del page', ()=>{
    cy.wait(1500)
    cy.get('[title="Settings"]').click();
})

And('Hace click en el boton de publish page', ()=>{
    cy.get('.gh-publish-trigger').click();
})

And('Hace click en el boton de confirm page', ()=>{
    cy.get('.gh-publish-cta').click();
    cy.wait(500)
    cy.get('.gh-btn-pulse').click();
})

Then('Validar que se haya creado page {string}', (namepost)=>{
    cy.wait(500)
    cy.get('.gh-post-bookmark-title').should('have.text', namepost);
    cy.screenshot("1 - Crear un page")
})



//--- Editar post publicado


And('Hacer click en el boton Update', ()=>{
    cy.get('.gh-editor-save-trigger').click();
})

Then('Validar notificacion de confirmacion', () => {
    cy.wait(500)
    cy.get('.gh-notification').should('exist');
    cy.screenshot("3 - Editar post")
})

//--- Eliminar post

Given('Ingresar al sitio pages', ()=>{
    cy.wait(500)
    cy.visit('ghost'+'/#/pages')
})

When('Seleccionar page con el nombre {string}', (namepage)=>{
    cy.wait(500)
    cy.contains('.gh-content-entry-title', namepage).click();
})

And('Hacer click en las configuracion de page', ()=>{
    cy.wait(1500)
    cy.get('[title="Settings"]').click();
})

And('Hace click en el boton delete', ()=>{
    cy.wait(1500)
    cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
})

And('Hace click en confirmar delete', ()=>{
    cy.wait(1500)
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
})

Then('Validar redireccion a page', ()=>{
    cy.wait(500)
    cy.url().should('contains', '#/pages')
    cy.screenshot("4 - Elimina page")
})