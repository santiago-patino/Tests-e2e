import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const pagePost = require("../../pages/pagePost");
const pagelogin = require('../../pages/pageLogin');
const aPrioriPosts = require('../../data/posts.json');

function random() {
    let number = Math.floor(Math.random() * 1000);
    console.log(number)
    return number
}

let title = aPrioriPosts[random()].title
let description = aPrioriPosts[random()].description

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
    cy.screenshot("1")
})

And('Ingresa el titulo del post', ()=>{
    cy.wait(1500)
    pagePost.titleEditor(title);
    cy.screenshot("2")
})

And('Ingresa la descripcion del post', ()=>{
    pagePost.descriptionEditor(description);
    cy.screenshot("3")
})

And('Hace click en el boton de publish post', ()=>{
    pagePost.publishButton();
    cy.screenshot("4")
})

And('Hace click en el boton de confirm post', ()=>{
    pagePost.buttonConfirmPublish1();
    cy.wait(500)
    pagePost.buttonConfirmPublish2();
    cy.screenshot("5")
});

Then('Validar que se haya creado el post', ()=>{
    cy.wait(1000)
    pagePost.confirmationPublishTitle(title);
    cy.screenshot("6")
})

//-- Verificar el nuevo post publicado

Given('Ingresa al post como usuario normal', ()=> {
    let replacedString = pagePost.getUrlPostPublished(title)
    cy.visit('/'+replacedString, { failOnStatusCode: false });
    cy.screenshot("7")
})

Then('Validar titulo del post', ()=>{
    pagePost.userTitlePost(title)
    cy.screenshot("8")
})

//--- Eliminar post

Given('Ingresar al sitio posts', ()=>{
    cy.wait(500);
    cy.visit('ghost'+'/#/posts')
})

When('Seleccionar el post con el nombre', ()=>{
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
