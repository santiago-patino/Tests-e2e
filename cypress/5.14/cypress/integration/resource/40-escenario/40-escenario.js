import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/pageLogin.js';
import pageContrasena from "../../pages/pageContrasena";

const jsonNewPassword = require('../../data/newPassword.json');

function random() {
    let number = Math.floor(Math.random() * jsonNewPassword.length);
    console.log(number)
    return number
}

let fullName = jsonNewPassword[random()].fullName;
let location = jsonNewPassword[random()].location;
let website = jsonNewPassword[random()].website;
let bio = jsonNewPassword[random()].bio;


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


And('Ingresar datos de perfil a priori', () => {
    pageContrasena.typeFieldUserNameField(fullName);
    pageContrasena.typeFieldUserLocationField(location);
    pageContrasena.typeFieldUserWebsiteField(website);
    pageContrasena.typeFieldUserBioField(bio);
    cy.screenshot("6");
    pageContrasena.updateProfile();
});

Then('Actualizacion de perfil exitoso a priori {string}', (message) => {
    pageContrasena.validateSaveprofile(message);
    cy.screenshot("7");
});

