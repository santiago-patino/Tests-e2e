import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/pageLogin.js';
import pageContrasena from "../../pages/pageContrasena";

const jsonNewPassword = require('../../data/newPassword.json');
const PASSWORD = 'admin-uniandes';

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

When('Ir a mi perfil', () => {
    pageContrasena.goToProfile();
    cy.screenshot("5")
})


And('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes a priori', () => {
    pageContrasena.typeFieldUserPasswordOld(PASSWORD);
    pageContrasena.typeFieldUserPasswordNew(newPassword);
    pageContrasena.typeFieldUserPasswordNewVerify(fakeOldPassword);
    cy.screenshot("6");
    pageContrasena.changePassword();
});

Then('Validar que las contraseñas no coincidan {string}', (message) => {
    pageContrasena.validateErrorMessageUserNewVerifyField(message);
    cy.screenshot("7");
});

