import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const login = require("../../../common/login");
const versionghost = Cypress.config("versionghost");
const baseUrl = Cypress.config("baseUrl");
const PASSWORD = 'admin-uniandes';
const NEWPASSWORD = 'admin-uniandes';
const FAKEOLDPASSWORD = "admin-uniandes2";
const EMPTYPASSWORD =  "";

Given("Ingresa a la pagina de inicio de sesion", () => {
    cy.visit("ghost");
});

When("Ingresa el nombre de usuario y ingresa la contraseña", () => {
    login.singIn();
});

Then("Iniciar Sesion Exitoso", () => {
    cy.wait(3000);
    login.check();
});

When('Ir a mi perfil', ()=>{
    cy.wait(1000)
    cy.get('#ember31').click();
    cy.wait(1000)
    cy.get('a[href=\"#/settings/staff/administrator/\"]').click()
})
When('Logout', ()=>{
    cy.wait(1000)
    cy.get('#ember31').click();
    cy.wait(1000)
    cy.get('a[href=\"#/signout/\"]').click()
})

Then('Validar pagina de perfil', () =>{
    cy.wait(1000)
    cy.url().should('contains', '/#/settings/staff/administrator')
});

Then('Validar pagina de logueo', () =>{
    cy.wait(1000)
    cy.url().should('contains', '/#/signin')
});

When('Ingresar datos de contraseñas vieja invalida y nueva contraseña', () =>{
    cy.get('#user-password-old').clear().type(FAKEOLDPASSWORD)
    cy.get('#user-password-new').clear().type(NEWPASSWORD)
    cy.get('#user-new-password-verification').clear().type(NEWPASSWORD)
    cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view').click()
    cy.wait(4000)
    cy.screenshot("1 - Ingreso de contraseñas vieja invalida y nueva contraseña")
});

When('Ingresar datos de contraseñas vieja vacía y nueva contraseña', () =>{
    cy.get('#user-password-old').clear()
    cy.get('#user-password-new').clear().type(NEWPASSWORD)
    cy.get('#user-new-password-verification').clear().type(NEWPASSWORD)
    cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view').click()
    cy.wait(4000)
    cy.screenshot("2 - Ingreso de contraseñas vieja vacía y nueva contraseña")
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes', () =>{
    cy.get('#user-password-old').clear().type(PASSWORD)
    cy.get('#user-password-new').clear().type(NEWPASSWORD)
    cy.get('#user-new-password-verification').clear().type(FAKEOLDPASSWORD)
    cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view').click()
    cy.wait(4000)
    cy.screenshot("3 - Ingreso de contraseñas vieja y contraseñas nuevas diferentes")
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas vacías', () =>{
    cy.get('#user-password-old').clear().type(PASSWORD)
    cy.get('#user-password-new').clear()
    cy.get('#user-new-password-verification').clear()
    cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view').click()
    cy.wait(4000)
    cy.screenshot("4 - Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas vacías")
});

When('Ingresar datos de contraseñas correctos', () =>{
    cy.get('#user-password-old').clear().type(PASSWORD)
    cy.get('#user-password-new').clear().type(NEWPASSWORD)
    cy.get('#user-new-password-verification').clear().type(NEWPASSWORD)
    cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view').click()
    cy.wait(4000)
    cy.screenshot("5 - Ingresar datos de contraseñas correctos")
});


Then('Validar cambio de contraseña {string}', (mensaje) =>{
    cy.wait(2000)
    cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view span').should('have.text', mensaje)
});

Then('Validar error en campo oldPassword', () =>{
    cy.wait(2000)
    cy.get('#user-password-old ~ p').should('have.text', '\n    Your current password is required to set a new one\n')
});

Then('Validar que las contraseñas no coincidan', () =>{
    cy.wait(2000)
    cy.get('#user-new-password-verification ~ p').should('have.text', '\n    Your new passwords do not match\n')
});

Then('Validar que no esté vacío new Password', () =>{
    cy.wait(2000)
    cy.get('#user-password-new ~ p').should('have.text', '\n    Sorry, passwords can\'t be blank\n')
});
