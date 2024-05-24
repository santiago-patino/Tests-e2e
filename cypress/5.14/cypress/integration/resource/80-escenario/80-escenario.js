import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/pageLogin.js';
import pageContrasena from "../../pages/pageContrasena";
import {faker} from '@faker-js/faker'

Given("Ingresa a la pagina de inicio de sesion", () => {
    cy.visit("ghost");
    cy.wait(1000);
    cy.screenshot("1");
});

When("Ingresa el nombre de usuario y ingresa la contraseña", () => {
    login.singIn();
    cy.screenshot("2");
});


Then("Iniciar Sesion Exitoso", () => {
    cy.wait(1000);
    login.check();
    cy.screenshot("3");
});

When('Ir a mi perfil', (paso) => {
    pageContrasena.goToProfile();
    cy.screenshot("5")
})

And('Ingresar datos de perfil aleatorio', () => {
    pageContrasena.typeFieldUserNameField(faker.person.fullName());
    pageContrasena.typeFieldUserLocationField(faker.location.country());
    pageContrasena.typeFieldUserWebsiteField(faker.internet.url());
    pageContrasena.typeFieldUserBioField(faker.person.bio());
    cy.screenshot("6");
    pageContrasena.updateProfile();
});

Then('Actualizacion de perfil exitoso aleatorio {string}', (message) => {
    pageContrasena.validateSaveprofile(message);
    cy.screenshot("7");
});

