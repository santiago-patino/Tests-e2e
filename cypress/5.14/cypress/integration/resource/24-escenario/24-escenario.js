import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const members = require("../../members/members");
const pagelogin = require("../../pages/pageLogin");
const aPrioriMembers = require("../../data/members_invalidad_data.json");

function random() {
  let number = Math.floor(Math.random() * 1000);
  return number;
}

let name = aPrioriMembers[random()].email;
let email = aPrioriMembers[random()].email;

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

//--- Crear un member con email inválido a priori y verificar que se recibe error

When("Ir a crear un nuevo member con datos a priori", async () => {
  cy.wait(3000);
  members.goToMembers();
  cy.screenshot("1");
  members.goToNewMember();
});

And("Ingresar el nombre a priori del member", () => {
  cy.wait(3000);
  members.giveMemberName(name);
});

And("Ingresar el email a priori inválido del member", () => {
  cy.wait(2000);
  members.giveMemberEmail(email);
  cy.screenshot("2");
});

And("Dar click en Save", () => {
  cy.contains("Save").click();
});

Then("Debería recibir un error de email inválido", () => {
  cy.wait(2000);
  members.validateErrorInvalidEmail();
  cy.screenshot("3");
});
