import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const pagePost = require("../../pages/pagePost");
const pagelogin = require('../../pages/pageLogin');


Given('Ingresa a la pagina de inicio de sesion', ()=> {
    cy.visit('ghost')
    cy.wait(1000);
    cy.screenshot("1")
})

When('Ingresa el nombre de usuario y ingresa la contraseña', ()=>{
    pagelogin.singIn()
    cy.screenshot("2")
})

Then('Iniciar Sesion Exitoso', ()=>{
    cy.wait(1000)
    pagelogin.check()
    cy.screenshot("3")
})

//--- Create post

When('Hacer click en nuevo post', ()=>{
    cy.wait(1000)
    pagePost.createButton();
    cy.screenshot("4")
})

And('Ingresa el titulo del post {string}', (title)=>{
    cy.wait(1500)
    pagePost.titleEditor(title);
    cy.screenshot("5")
})

And('Ingresa la descripcion del post {string}', (descripcion)=>{
    pagePost.descriptionEditor(descripcion);
    cy.screenshot("6")
})

Then('Validar que se haya creado como borrador {string}', (text)=>{
    cy.wait(3000)
    pagePost.statusEditor(text);
    cy.screenshot("7")
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
})

