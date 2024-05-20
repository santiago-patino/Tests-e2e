import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const members = require("../../members/members");
const pagelogin = require("../../pages/pageLogin");
import {faker} from '@faker-js/faker'

let name = faker.person.fullName();
let email = faker.internet.email();

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

//--- Crear un member con datos aleatorios y verificar que se creó

When("Ir a crear un nuevo member con datos aleatorios", () => {
  cy.wait(3000);
  members.goToMembers();
  cy.screenshot("1");
  members.goToNewMember();
});

And("Ingresar el nombre aleatorio del member", () => {
  cy.wait(3000);
  members.giveMemberName(name);
});

And("Ingresar el email aleatorio del member", () => {
  cy.wait(2000);
  members.giveMemberEmail(email);
  cy.screenshot("2");
});

And("Dar click en Save", () => {
  cy.contains("Save").click();
});

Then("Debería ver el nuevo member creado", () => {
    cy.wait(2000);
    members.validateInfoMember();
    cy.screenshot("3");
  });
