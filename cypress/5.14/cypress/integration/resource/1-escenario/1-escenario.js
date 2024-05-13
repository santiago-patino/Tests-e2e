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

//--- Crear un nuevo member con datos válidos

When("Ir a crear un nuevo member en la sección members y botón new member", () => {
  cy.wait(3000);
  members.goToMembers();
  cy.screenshot("1");
  members.goToNewMember();
});

And("Ingresar el nombre del member {string}", (name) => {
  cy.wait(3000);
  members.giveMemberName(name);
});

And("Ingresar el email válido del member {string}", (email) => {
  cy.wait(2000);
  members.giveMemberEmail(email);
  cy.screenshot("2");
});

And("Dar click en Save", () => {
  cy.contains("Save").click();
});

And("Ingresar a members", () => {
  cy.wait(3000);
  members.goToMembers();
});

Then("Debería ver que se actualiza la vista con la información de creación", () => {
    cy.wait(2000);
    members.validateInfoMember();
    cy.screenshot("3");
  });
