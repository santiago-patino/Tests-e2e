import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const members = require("../../members/members");
const pagelogin = require("../../pages/pageLogin");
const membersApi = Cypress.config("membersInvalidDataApi");

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
var email;

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

//--- Crear un member con email inválido pseudoaleatorio y verificar que se recibe error

When("Ir a crear un nuevo member con datos pseudoaleatorios", async () => {
  cy.wait(3000);
  members.goToMembers();
  cy.screenshot("1");
  members.goToNewMember();
  // Llamado a la API
  const data = await fetchDataFromAPI();
  name = data.email;
  email = data.email;
});

And("Ingresar el nombre pseudoaleatorio del member", () => {
  cy.wait(3000);
  members.giveMemberName(name);
});

And("Ingresar el email aleatorio inválido del member", () => {
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
