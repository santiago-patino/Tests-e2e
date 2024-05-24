import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/pageLogin.js';
import pageContrasena from "../../pages/pageContrasena";

const newPasswordApi = Cypress.config("newPasswordApi");

async function fetchDataFromAPI() {
    try {
        const response = await fetch(newPasswordApi);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener datos del API:", error);
        throw error; // Manejar el error según sea necesario
    }
}

let fullName;
let location;
let website;
let bio;

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

When('Ir a mi perfil', async () => {
    pageContrasena.goToProfile();
    cy.screenshot("5")
    const data = await fetchDataFromAPI();
    fullName = data.fullName;
    location = data.location;
    website = data.website;
    bio = data.bio;
})


And('Ingresar datos de perfil pseudo', () => {
    pageContrasena.typeFieldUserNameField(fullName);
    pageContrasena.typeFieldUserLocationField(location);
    pageContrasena.typeFieldUserWebsiteField(website);
    pageContrasena.typeFieldUserBioField(bio);
    cy.screenshot("6");
    pageContrasena.updateProfile();
});

Then('Actualizacion de perfil exitoso pseudo {string}', (message) => {
    pageContrasena.validateSaveprofile(message);
    cy.screenshot("7");
});

