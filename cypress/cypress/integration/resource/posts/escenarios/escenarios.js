import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const login = require('../../../common/login')
const versionghost = Cypress.config("versionghost")
const baseUrl = Cypress.config("baseUrl")


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

//--- Create post

When('Hacer click en nuevo post', ()=>{
    cy.wait(1000)
    cy.get('[title="New post"]').click()
})

And('Ingresa el titulo del post {string}', (namepost)=>{
    cy.wait(1500)
    cy.get('[placeholder="Post title"]').type(namepost)
})

And('Ingresa la descripcion del post {string}', (textpost)=>{
    cy.get('.koenig-editor__editor').type(textpost)
})

And('Hace click en el boton de publish post', ()=>{
    cy.get('.gh-publish-trigger').click();
})

And('Hace click en el boton de confirm post', ()=>{
    cy.get('.gh-publish-cta').click();
    cy.wait(500)
    cy.get('.gh-btn-pulse').click();
})

Then('Validar que se haya creado el post {string}', (namepost)=>{
    cy.wait(500)
    cy.get('.gh-post-bookmark-title').should('have.text', namepost);
    cy.screenshot("1 - Crear un post")
})

//-- Verificar el nuevo post publicado

Given('Ingresa al sitio como usuario normal', ()=> {
    cy.visit('/')
})

When('Hacer click al post {string}', (namepost)=>{
    cy.wait(1500)
    cy.contains('.post-card-title', namepost).click();
})

Then('Validar titulo del post {string}', (namepost)=>{
    cy.get('h1').should('have.text', namepost);
    cy.screenshot("2 - Verificar el post")
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

Given('Ingresar al sitio posts', ()=>{
    cy.wait(500)
    cy.visit('ghost'+'/#/posts')
})

When('Seleccionar el post con el nombre {string}', (namepost)=>{
    cy.wait(500)
    cy.contains('.gh-content-entry-title', namepost).click();
})

And('Hacer click en las configuracion del post', ()=>{
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

Then('Validar redireccion a posts', ()=>{
    cy.wait(500)
    cy.url().should('contains', '#/posts')
    cy.screenshot("4 - Elimina post")
})
