import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/pageLogin.js';
import pageContrasena from "../../pages/pageContrasena";

import {faker} from '@faker-js/faker'

const NEWPASSWORD =  faker.internet.password({ length: 12})

Given("Ingresa a la pagina de inicio de sesion", () => {
    cy.visit("ghost");
    cy.wait(1000);
    cy.screenshot("1")
});

When("Ingresa el nombre de usuario y ingresa la contraseña", () => {
    login.singIn();
    cy.screenshot("2")
});

Then("Iniciar Sesion Exitoso", () => {
    cy.wait(1000);
    login.check();
    cy.screenshot("3")
});

When('Ir a mi perfil', () => {
    pageContrasena.goToProfile();
    cy.screenshot("5")
})

And('Ingresar datos de contraseñas vieja vacía y nueva contraseña aleatorio', () => {
    pageContrasena.clearFieldUserPasswordOld();
    pageContrasena.typeFieldUserPasswordNew(NEWPASSWORD);
    pageContrasena.typeFieldUserPasswordNewVerify(NEWPASSWORD);
    cy.screenshot("6")
    pageContrasena.changePassword();
});

Then('Validar error en campo oldPassword {string}', (message) => {
    pageContrasena.validateErrorMessageUserPasswordOldField(message)
    cy.screenshot("7");
});

