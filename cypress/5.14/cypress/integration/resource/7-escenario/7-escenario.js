import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const pagePost = require("../../pages/pagePost");
const pagelogin = require('../../pages/pageLogin');


Given('Ingresa a la pagina de inicio de sesion', ()=> {
    cy.visit('ghost')
})

When('Ingresa el nombre de usuario y ingresa la contraseña', ()=>{
    pagelogin.singIn()
})

Then('Iniciar Sesion Exitoso', ()=>{
    cy.wait(1000)
    pagelogin.check()
})

//--- Create post

When('Hacer click en nuevo post', ()=>{
    cy.wait(1000)
    pagePost.createButton();
})

And('Ingresa el titulo del post {string}', (title)=>{
    cy.wait(1500)
    pagePost.titleEditor(title);
})

And('Ingresa la descripcion del post {string}', (descripcion)=>{
    pagePost.descriptionEditor(descripcion);
})

And('Hace click en el boton de publish post', ()=>{
    pagePost.publishButton();
})

And('Hace click en el boton de confirm post', ()=>{
    pagePost.buttonConfirmPublish1();
    cy.wait(500)
    pagePost.buttonConfirmPublish2();
});

Then('Validar que se haya creado el post {string}', (title)=>{
    cy.wait(1000)
    pagePost.confirmationPublishTitle(title);
    cy.screenshot("1 - Crear un post")
})

//-- Verificar el nuevo post publicado

Given('Ingresa al post {string} como usuario normal', (title)=> {
    let replacedString = title.replace(/\s+/g, '-');
    cy.visit('/'+replacedString, { failOnStatusCode: false });
})

Then('Validar titulo del post {string}', (title)=>{
    pagePost.userTitlePost(title)
    cy.screenshot("2 - Verificar el post")
})

//--- Eliminar post

Given('Ingresar al sitio posts', ()=>{
    cy.wait(500);
    cy.visit('ghost'+'/#/posts')
})

When('Seleccionar el post con el nombre {string}', (title)=>{
    cy.wait(1000)
    pagePost.postsTitleList(title);
})

And('Hacer click en las configuracion del post', ()=>{
    cy.wait(1500)
    pagePost.settigsPostEditor();
})

And('Hace click en el boton delete', ()=>{
    cy.wait(1500)
    pagePost.deleteButtonEditor();
})

And('Hace click en confirmar delete', ()=>{
    cy.wait(1500)
    pagePost.confirmDeleteButtonEditor();
})

Then('Validar redireccion a posts', ()=>{
    cy.wait(500)
    cy.url().should('contains', '#/posts');
    cy.screenshot("4 - Elimina post")
})
