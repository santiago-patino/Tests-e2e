import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const pagePost = require("../../pages/pagePost");
const pagelogin = require('../../pages/pageLogin');
import {faker} from '@faker-js/faker'

let count = 0;


let title = faker.lorem.sentence();
let titleUrl = title;
let description = faker.lorem.paragraph();

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
    let replacedString = pagePost.getUrlPostPublished(titleUrl)
    cy.visit('/'+replacedString, { failOnStatusCode: false });
    cy.screenshot(`${++count}`)
})

Then('Validar titulo del post', ()=>{
    pagePost.userTitlePost(title)
    cy.screenshot(`${++count}`)
})

//--- Editar post publicado

And('Editar titulo del post', async()=>{
    cy.wait(1500)
    pagePost.clearTitleEditor()
    title = faker.lorem.sentence();
    pagePost.titleEditor(title);
    cy.screenshot(`${++count}`)
})

And('Editar la descripcion del post', async()=>{
    pagePost.clearDescriptionEditor()
    pagePost.descriptionEditor(faker.lorem.paragraph());
    cy.screenshot(`${++count}`)
})

And('Hacer click en el boton Update', ()=>{
    pagePost.updateEditorButton();
    cy.screenshot(`${++count}`)
})

Then('Validar notificacion de confirmacion', () => {
    cy.wait(500)
    pagePost.updateNotificationPost();
    cy.screenshot(`${++count}`)
})

//--- Eliminar post

Given('Ingresar al sitio posts', ()=>{
    cy.wait(500);
    cy.visit('ghost'+'/#/posts')
    cy.screenshot(`${++count}`)
})

When('Seleccionar el post con el nombre', ()=>{
    cy.wait(1000)
    pagePost.postsTitleList(title);
    cy.screenshot(`${++count}`)
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
