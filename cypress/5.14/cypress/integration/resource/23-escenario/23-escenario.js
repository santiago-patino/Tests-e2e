import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const members = require("../../members/members");
const pagelogin = require("../../pages/pageLogin");

//--- Iniciar sesión

Given("Ingresa a la pagina de inicio de sesion", () => {
  cy.visit("ghost");
});

When("Ingresa el nombre de usuario e ingresa la contraseña", () => {
  pagelogin.singIn();
});

Then("Iniciar Sesion Exitoso", () => {
  cy.wait(1000);
  pagelogin.check();
});

//--- Eliminar el member creado con datos a priori

When("Ir a la sección members para eliminar el member creado", () => {
  cy.wait(3000);
  members.goToMembers();
  cy.screenshot("1");
});

And("Verificar que existe el member", () => {
  members.verifyExistingMemberToDelete();
  cy.wait(2000);
  cy.screenshot("2");
});

And("Seleccionar el member a priori creado", () => {
  members.selectMemberToDelete();
  cy.wait(2000);
});

And("Hacer click en opciones", () => {
  cy.get(
    "button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
  ).click();
  cy.wait(2000);
  cy.screenshot("3");
});

And("Hacer click en eliminar", () => {
  cy.get("button.mr2 span.red").click();
  cy.wait(2000);
  cy.screenshot("4");
});

And("Hacer click en confirmar", () => {
  cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
  cy.wait(2000);
  cy.screenshot("5");
});

Then("No debería existir el member a priori", () => {
  cy.wait(2000);
  members.goToMembers();
  cy.screenshot("6");
});
