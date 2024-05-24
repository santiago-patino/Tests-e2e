import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/pageLogin.js';
import pageContrasena from "../../pages/pageContrasena";

const jsonNewPassword = require('../../data/newPassword.json');

function random() {
    let number = Math.floor(Math.random() * jsonNewPassword.length);
    console.log(number)
    return number
}

let newPassword = jsonNewPassword[random()].newPassword
let fakeOldPassword = jsonNewPassword[random()].fakeOldPassword

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

And('Ingresar datos de contraseñas vieja invalida y nueva contraseña a priori', () => {
    pageContrasena.typeFieldUserPasswordOld(fakeOldPassword);
    pageContrasena.typeFieldUserPasswordNew(newPassword);
    pageContrasena.typeFieldUserPasswordNewVerify(newPassword);
    cy.screenshot("6")
    pageContrasena.changePassword();
});


Then('Validar cambio de contraseña {string}', (message) => {
    pageContrasena.validateError(message)
    cy.screenshot("7");
});

