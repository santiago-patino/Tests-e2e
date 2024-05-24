import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/pageLogin.js';
import pageContrasena from "../../pages/pageContrasena";

const NEWPASSWORD = 'admin-uniandes';

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

let newPassword;

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

When('Ir a mi perfil', async () => {
    pageContrasena.goToProfile();
    cy.screenshot("5")
    const data = await fetchDataFromAPI();
    newPassword = data.newPassword;
})

And('Ingresar datos de contraseñas vieja vacía y nueva contraseña pseudo', () => {
    pageContrasena.clearFieldUserPasswordOld();
    pageContrasena.typeFieldUserPasswordNew(newPassword);
    pageContrasena.typeFieldUserPasswordNewVerify(newPassword);
    cy.screenshot("6")
    pageContrasena.changePassword();
});

Then('Validar error en campo oldPassword {string}', (message) => {
    pageContrasena.validateErrorMessageUserPasswordOldField(message)
    cy.screenshot("7");
});

