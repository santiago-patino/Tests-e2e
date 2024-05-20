import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const pagePost = require("../../pages/pagePost");
const pagelogin = require('../../pages/pageLogin');
const postsApi = Cypress.config("postsApi");

async function fetchDataFromAPI() {
    try {
        const response = await fetch(postsApi);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos del API:', error);
        throw error; // Manejar el error según sea necesario
    }
}

let title;
let description;

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

When('Hacer click en nuevo post', async()=>{
    cy.wait(1000)
    pagePost.createButton();
    cy.screenshot("1")
    const data = await fetchDataFromAPI();
    title = data.title;
    description = data.description;
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

And('Hacer click en las configuracion del post', ()=>{
    cy.wait(1500)
    pagePost.settigsPostEditor();
})

And('Añadir Tag', ()=>{
    pagePost.tagControlEditor();
    pagePost.tagOptionEditor();
    cy.screenshot("4")
})

And('Hace click en el boton de publish post', ()=>{
    pagePost.publishButton();
    cy.screenshot("5")
})

And('Hace click en el boton de confirm post', ()=>{
    pagePost.buttonConfirmPublish1();
    cy.wait(500)
    pagePost.buttonConfirmPublish2();
    cy.screenshot("6")
});

Then('Validar que se haya creado el post', ()=>{
    cy.wait(1000)
    pagePost.confirmationPublishTitle(title);
    cy.screenshot("7")
})

//-- Verificar el nuevo post publicado

Given('Ingresa al post como usuario normal', ()=> {
    let replacedString = pagePost.getUrlPostPublished(title)
    cy.visit('/'+replacedString, { failOnStatusCode: false });
    cy.screenshot("8")
})

Then('Validar titulo del post', ()=>{
    pagePost.userTitlePost(title)
    cy.screenshot("9")
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
