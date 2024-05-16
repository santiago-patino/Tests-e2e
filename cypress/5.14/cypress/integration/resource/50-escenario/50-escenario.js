import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const pagePost = require("../../pages/pagePost");
const pagelogin = require('../../pages/pageLogin');
const postsApi = Cypress.config("postsApi");

let count = 0;

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
    cy.screenshot(`${++count}`)
    const data = await fetchDataFromAPI();
    title = data.title;
    description = data.description;
})

And('Ingresa el titulo del post', ()=>{
    cy.wait(1500)
    pagePost.titleEditor(title);
    cy.screenshot(`${++count}`)
})

And('Ingresa la descripcion del post', ()=>{
    pagePost.descriptionEditor(description);
    cy.screenshot(`${++count}`)
})

And('Hace click en el boton de publish post', ()=>{
    pagePost.publishButton();
    cy.screenshot(`${++count}`)
})

And('Hace click en el boton de confirm post', ()=>{
    pagePost.buttonConfirmPublish1();
    cy.wait(500)
    pagePost.buttonConfirmPublish2();
    cy.screenshot(`${++count}`)
});

Then('Validar que se haya creado el post', ()=>{
    cy.wait(1000)
    pagePost.confirmationPublishTitle(title);
    cy.screenshot(`${++count}`)
})

//-- Verificar el nuevo post publicado

Given('Ingresa al post como usuario normal', ()=> {
    let replacedString = pagePost.getUrlPostPublished(title)
    cy.visit('/'+replacedString.toLowerCase(), { failOnStatusCode: false });
    cy.screenshot(`${++count}`)
})

Then('Validar titulo del post', ()=>{
    pagePost.userTitlePost(title)
    cy.screenshot(`${++count}`)
})

//--- Eliminar post

Given('Ingresar al sitio posts', ()=>{
    cy.wait(500);
    cy.visit('ghost'+'/#/posts')
    cy.wait(1000);
    cy.screenshot(`${++count}`)
})

When('Seleccionar el post con el nombre', ()=>{
    pagePost.postsTitleList(title);
    cy.wait(1000)
    cy.screenshot(`${++count}`)
})

And('Hacer click en las configuracion del post', ()=>{
    pagePost.settigsPostEditor();
    cy.screenshot(`${++count}`)
})

And('Hace click en el boton delete', ()=>{
    cy.wait(500)
    pagePost.deleteButtonEditor();
    cy.screenshot(`${++count}`)
})

And('Hace click en confirmar delete', ()=>{
    cy.wait(500)
    cy.screenshot(`${++count}`)
    pagePost.confirmDeleteButtonEditor();
})

Then('Validar redireccion a posts', ()=>{
    cy.wait(500)
    cy.url().should('contains', '#/posts');
    cy.screenshot(`${++count}`)
})

Then('Validar error {string}', (errorCode)=>{
    cy.wait(500)
    pagePost.errorCodeUser(errorCode)
    cy.screenshot(`${++count}`)
})