import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const members = require("../../members/members");
const pagelogin = require("../../pages/pageLogin");
const aPrioriMembers = require("../../data/members_invalidad_data.json");

function random() {
  let number = Math.floor(Math.random() * 1000);
  return number;
}

let name = aPrioriMembers[random()].full_name;
let email = "apriori@gmail.com";

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

//--- Crear un member con nombre inválido a priori y verificar que se recibe error

When("Ir a crear un nuevo member con datos a priori", async () => {
  cy.wait(3000);
  members.goToMembers();
  cy.screenshot("1");
  members.goToNewMember();
});

And("Ingresar el nombre inválido a priori del member", () => {
  cy.wait(3000);
  members.giveMemberName(name);
});

And("Ingresar el email del member", () => {
  cy.wait(2000);
  members.giveMemberEmail(email);
  cy.screenshot("2");
});

And("Dar click en Save", () => {
  cy.contains("Save").click();
});

Then("Debería recibir un error de nombre inválido", () => {
  cy.wait(2000);
  members.validateErrorInvalidName();
  cy.screenshot("3");
});
