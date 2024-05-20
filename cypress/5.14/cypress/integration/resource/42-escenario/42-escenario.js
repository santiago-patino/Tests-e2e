import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const members = require("../../members/members");
const pagelogin = require("../../pages/pageLogin");
const membersApi = Cypress.config("membersApi");

//---- API
async function fetchDataFromAPI() {
  try {
    const response = await fetch(membersApi);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos del API:", error);
    throw error; // Manejar el error según sea necesario
  }
}

var name;

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

//--- Editar un member creado con un nuevo nombre pseudoaleatorio

When(
  "Ir a members y seleccionar el primero para editar su nombre",
  async () => {
    cy.wait(3000);
    members.goToMembers();
    cy.screenshot("1");
    members.selectMemberToEdit();
    // Llamado a la API
    const data = await fetchDataFromAPI();
    name = data.full_name;
  }
);

And("Ingresar el nombre pseudoaleatorio del member", () => {
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
