import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/pageLogin.js';
import pageContrasena from "../../pages/pageContrasena";

const USERNAME = 's.patino@uniandes.edu.co';
const PASSWORD = 'admin-uniandes';
const NEWPASSWORD = 'admin-uniandes';

Given("Ingresa a la pagina de inicio de sesion", () => {
    cy.visit("ghost");
    cy.wait(1000);
    cy.screenshot("1");
});

When("Ingresa el nombre de usuario y ingresa la contraseña", () => {
    login.singIn();
    cy.screenshot("2");
});

And("Ingresa el nombre de usuario e ingresa la nueva contraseña", (message) => {
    pageContrasena.singIn(USERNAME, NEWPASSWORD);
    cy.screenshot("9")
});

Then("Iniciar Sesion Exitoso {string}", (paso) => {
    cy.wait(1000);
    login.check();
    cy.screenshot(paso);
});

When('Ir a mi perfil', (paso) => {
    pageContrasena.goToProfile();
    cy.screenshot("5")
})


And('SignOut', () => {
    pageContrasena.signOut();
    cy.screenshot("8");
});

And('Ingresar datos de contraseñas correctos', () => {
    pageContrasena.typeFieldUserPasswordOld(PASSWORD);
    pageContrasena.typeFieldUserPasswordNew(NEWPASSWORD);
    pageContrasena.typeFieldUserPasswordNewVerify(NEWPASSWORD);
    cy.screenshot("6");
    pageContrasena.changePassword();
});

Then('Validar cambio de contraseña exitoso {string}', (message) => {
    pageContrasena.validateSuccess(message);
    cy.screenshot("7");
});

