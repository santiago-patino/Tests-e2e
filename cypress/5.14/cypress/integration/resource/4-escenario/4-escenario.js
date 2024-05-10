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

//--- Crear un nuevo member con datos de un member existente

And("Volver a la sección members", () => {
  cy.wait(3000);
  members.goToMembers();
  members.confirmGoToMembers();
});

When(
  "Ir a crear un member con el correo de un member existente en la sección members y botón new member",
  () => {
    cy.wait(3000);
    members.goToMembers();
    cy.screenshot(
      "E4 S1 Ir a crear un member con el correo de un member existente en la sección members y botón new member"
    );
    members.goToNewMember();
  }
);

And("Ingresar el nombre del member {string}", (name) => {
  cy.wait(3000);
  members.giveMemberName(name);
});

And("Ingresar el email del member existente {string}", (email) => {
  cy.wait(2000);
  members.giveMemberEmail(email);
  cy.screenshot("E4 S2 Ingresar el email del member existente");
});

And("Dar click en Save", () => {
  cy.contains("Save").click();
});

Then(
  "Debería tener un error que indica que es el correo de un member existente",
  () => {
    cy.wait(2000);
    cy.screenshot(
      "E4 S3 Debería tener un error que indica que es el correo de un member existente"
    );
    members.validateErrorExistingMember();
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  }
);
