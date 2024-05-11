import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/pageLogin.js';
import pageContrasena from "../../pages/pageContrasena";

const USERNAME = 's.patino@uniandes.edu.co';
const PASSWORD = 'admin-uniandes';
const NEWPASSWORD = 'admin-uniandes';
const FAKEOLDPASSWORD = "admin-uniandes2";

Given("Ingresa a la pagina de inicio de sesion", () => {
    cy.visit("ghost");
});

When("Ingresa el nombre de usuario y ingresa la contraseña", () => {
    login.singIn();
});

And("Ingresa el nombre de usuario e ingresa la nueva contraseña", (message) => {
    pageContrasena.singIn(USERNAME, NEWPASSWORD);
});

Then("Iniciar Sesion Exitoso", () => {
    cy.wait(1000);
    login.check();
});

When('Ir a mi perfil', () => {
    pageContrasena.goToProfile();
})


And('SignOut', () => {
    pageContrasena.signOut();
    cy.screenshot("Logout");
});

And('Ingresar datos de contraseñas vieja invalida y nueva contraseña', () => {
    pageContrasena.typeFieldUserPasswordOld(FAKEOLDPASSWORD);
    pageContrasena.typeFieldUserPasswordNew(NEWPASSWORD);
    pageContrasena.typeFieldUserPasswordNewVerify(NEWPASSWORD);
    pageContrasena.changePassword();
    cy.wait(1000)
    cy.screenshot("Ingreso de contraseñas vieja invalida y nueva contraseña")
});

And('Ingresar datos de contraseñas vieja vacía y nueva contraseña', () => {
    pageContrasena.clearFieldUserPasswordOld();
    pageContrasena.typeFieldUserPasswordNew(NEWPASSWORD);
    pageContrasena.typeFieldUserPasswordNewVerify(NEWPASSWORD);
    pageContrasena.changePassword();
    cy.wait(1000)
    cy.screenshot("Ingreso de contraseñas vieja vacía y nueva contraseña")
});

And('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes', () => {
    pageContrasena.typeFieldUserPasswordOld(PASSWORD);
    pageContrasena.typeFieldUserPasswordNew(NEWPASSWORD);
    pageContrasena.typeFieldUserPasswordNewVerify(FAKEOLDPASSWORD);
    pageContrasena.changePassword();
    cy.wait(1000)
    cy.screenshot("Ingreso de contraseñas vieja y contraseñas nuevas diferentes")
});

And('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas vacías', () => {
    pageContrasena.typeFieldUserPasswordOld(PASSWORD);
    pageContrasena.clearFieldUserPasswordNew();
    pageContrasena.clearFieldUserPasswordNewVerify();
    pageContrasena.changePassword();
    cy.wait(1000)
    cy.screenshot("Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas vacías")
});

And('Ingresar datos de contraseñas correctos', () => {
    pageContrasena.typeFieldUserPasswordOld(PASSWORD);
    pageContrasena.typeFieldUserPasswordNew(NEWPASSWORD);
    pageContrasena.typeFieldUserPasswordNewVerify(NEWPASSWORD);
    pageContrasena.changePassword();
    cy.wait(1000);
    cy.screenshot("Ingresar datos de contraseñas correctos");
});


Then('Validar cambio de contraseña {string}', (message) => {
    pageContrasena.validateError(message)
    cy.screenshot("Validar mensaje cambio de contraseña");
});

Then('Validar cambio de contraseña exitoso {string}', (message) => {
    pageContrasena.validateSuccess(message);
    cy.screenshot("Validar cambio de contraseña exitoso");
});

Then('Validar error en campo oldPassword {string}', (message) => {
    pageContrasena.validateErrorMessageUserPasswordOldField(message)
    cy.screenshot("Validar error en campo oldPassword");
});

Then('Validar que no esté vacío new Password {string}', (message) => {
    pageContrasena.validateErrorMessageUserPasswordNewField(message);
    cy.screenshot("Validar que no esté vacío campo new Password");
});

Then('Validar que las contraseñas no coincidan {string}', (message) => {
    pageContrasena.validateErrorMessageUserNewVerifyField(message);
    cy.screenshot("Validar que las contraseñas no coincidan");
});

