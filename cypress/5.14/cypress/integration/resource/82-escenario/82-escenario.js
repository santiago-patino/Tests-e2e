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
    login.singInWithEmptyFields();
    cy.screenshot("2");
});

Then('Validar error campos en blanco {string}', (message) => {
    pageContrasena.validateUser(message);
    cy.screenshot("3");
});
