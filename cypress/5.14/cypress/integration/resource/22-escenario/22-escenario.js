import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const members = require("../../members/members");
const pagelogin = require("../../pages/pageLogin");
const aPrioriMembers = require("../../data/members_data.json");

function random() {
  let number = Math.floor(Math.random() * 1000);
  return number;
}

let name = aPrioriMembers[random()].full_name;
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

//--- Editar un member creado con un nuevo nombre a priori

When(
  "Ir a members y seleccionar el primero para editar su nombre",
  async () => {
    cy.wait(3000);
    members.goToMembers();
    cy.screenshot("1");
    members.selectMemberToEdit();
  }
);

And("Ingresar el nombre a priori del member", () => {
  cy.wait(3000);
  members.giveMemberName(name);
  cy.screenshot("2");
});

And("Dar click en Save", () => {
  cy.contains("Save").click();
});

Then("Debería ver el member actualizado", () => {
  cy.wait(2000);
  members.validateInfoMember();
  cy.screenshot("3");
});
