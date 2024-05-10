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

//--- Crear un nuevo member con datos vacíos

When(
  "Ir a crear un nuevo member con datos vacíos en la sección members y botón new member",
  () => {
    cy.wait(3000);
    members.goToMembers();
    cy.screenshot(
      "E2 S1 Ir a crear un nuevo member con datos vacíos en la sección members y botón new member"
    );
    members.goToNewMember();
  }
);

And("Dar click en Save", () => {
  cy.contains("Save").click();
});

Then("Debería tener un error de datos vacíos", () => {
  cy.wait(2000);
  members.validateErrorEmptyData();
  cy.screenshot("E2 S2 Debería tener un error de datos vacíos");
});
