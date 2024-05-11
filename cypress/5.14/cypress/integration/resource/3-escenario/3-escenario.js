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

//--- Crear un nuevo member con datos inválidos

When(
  "Ir a crear un member con datos inválidos en la sección members y botón new member",
  () => {
    cy.wait(3000);
    members.goToMembers();
    cy.screenshot(
      "1 - Ir a crear un nuevo member"
    );
    members.goToNewMember();
  }
);

And("Ingresar el nombre del member {string}", (name) => {
  cy.wait(3000);
  members.giveMemberName(name);
});

And("Ingresar el email inválido del member", () => {
  cy.wait(2000);
  members.giveMemberEmail("e.condev");
  cy.screenshot("2 - Ingresar el email inválido");
});

And("Dar click en Save", () => {
  cy.contains("Save").click();
});

Then("Debería tener un error de datos inválidos", () => {
  cy.wait(2000);
  members.validateErrorInvalidData();
  cy.screenshot("3 - Debería tener un error de datos inválidos");
});
