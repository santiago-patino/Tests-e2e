import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const members = require("../../members/members");
const pagelogin = require("../../pages/pageLogin");

//--- Iniciar sesión

Given("Ingresa a la pagina de inicio de sesion", () => {
  cy.visit("ghost");
});

When("Ingresa el nombre de usuario y ingresa la contraseña", () => {
  pagelogin.singIn();
});

Then("Iniciar Sesion Exitoso", () => {
  cy.wait(1000);
  pagelogin.check();
});

//--- Eliminar un member existente

When("Ir a la sección members para eliminar un member", () => {
  cy.wait(3000);
  members.goToMembers();
  cy.screenshot("1 - Ir a crear un nuevo member");
});

And("Verificar que existe el member {string}", (nombre) => {
  members.verifyExistingMember(nombre);
  cy.wait(2000);
  cy.screenshot("2 - Verificar que existe el member");
});

And("Seleccionar el miembro a eliminar", () => {
    members.selectMemberToDelete();
    cy.wait(2000);
  });
  
And("Hacer click en opciones", () => {
    cy.get(
      "button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
    ).click();
    cy.wait(2000);
    cy.screenshot("3 - Borrar el member creado dropdown");
  });
  
  And("Hacer click en eliminar", () => {
    cy.get("button.mr2 span.red").click();
    cy.wait(2000);
    cy.screenshot("4 - Borrar el member creado delete button");
  });
  
  And("Hacer click en confirmar", () => {
    cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
    cy.wait(2000);
    cy.screenshot("5 - Borrar el member creado confirm button");
  });

Then("No debería existir el member {string}", (nombre) => {
    cy.wait(2000);
  members.notExistMember(nombre);
  cy.screenshot("6 - No debería existir el member");
});
