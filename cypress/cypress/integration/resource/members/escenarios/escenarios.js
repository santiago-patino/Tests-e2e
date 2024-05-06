import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const login = require("../../../common/login");
const versionghost = Cypress.config("versionghost");
const baseUrl = Cypress.config("baseUrl");

Given("Ingresa a la pagina de inicio de sesion", () => {
  cy.visit("ghost");
});

When("Ingresa el nombre de usuario y ingresa la contraseña", () => {
  login.singIn();
});

Then("Iniciar Sesion Exitoso", () => {
  cy.wait(3000);
  login.check();
});

//--- Crear un nuevo member con datos validos

When("Ingresar a new member", () => {
  cy.wait(3000);
  cy.visit("ghost" + "/#/members/new");
});

And("Ingresar el nombre del member {string}", (name) => {
  cy.wait(3000);
  cy.get("#member-name").type(name, { force: true });
});

And("Ingresar el email del member {string}", (email) => {
  cy.wait(2000);
  cy.get("#member-email").type(email, { force: true });
});

And("Hacer click en el boton Save", () => {
  cy.contains("Save").click();
});

And("Ingresar a members", () => {
  cy.wait(3000);
  cy.visit("ghost" + "/#/members");
});

Then("Validar que se haya creado el member {string}", (name) => {
  cy.wait(2000);
  cy.contains(name).should("exist");
  cy.screenshot("1 - Crear un member");
});

//--- Crear un nuevo member con datos invalidos

Then("Validar que se recibe el error {string}", (error) => {
  cy.wait(2000);
  cy.get(`.form-group.max-width.error .response`).should("include.text", error);
  cy.screenshot("2 - Crear un member con datos invalidos " + error);
});

And("Hacer click en el boton Retry", () => {
  cy.contains("Retry").click();
});

//--- Crear un nuevo member con datos de un member existente

Then(
  "Validar que se recibe el error {string} para datos de un member existente",
  (error) => {
    cy.on("uncaught:exception", (err, runnable) => {
      cy.get(
        `form.member-basic-info-form div.form-group.max-width.error.ember-view p.response`
      ).should("include.text", error);
      cy.screenshot(
        "3 - Crear un nuevo member con datos de un member existente "
      );
      return false;
    });
  }
);

//--- Editar un member existente

And("Seleccionar el member a editar", () => {
  cy.get(`a.ember-view.gh-list-data`).first().click();
});

And("Ingresar el nuevo nombre del member {string}", (name) => {
  cy.wait(3000);
  cy.get("#member-name").clear();
  cy.get("#member-name").type(name, { force: true });
});

And("Ingresar el nuevo email del member {string}", (email) => {
  //cy.wait(2000);
  cy.get("#member-email").clear();
  cy.get("#member-email").type(email, { force: true });
});



Then("Validar que se haya editado el member {string}", (name) => {
  cy.wait(2000);
  cy.get('h3').should("have.text", name)
  cy.screenshot("4 - Editar un member existente");
});

//--- Eliminar un member existente

And("Seleccionar el member a eliminar", () => {
  cy.get(`a.ember-view.gh-list-data`).first().click();
});

And("Hacer click en opciones", () => {
  cy.get(
    "button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
  ).click();
  cy.wait(2000);
});

And("Hacer click en eliminar", () => {
  cy.get("button.mr2 span.red").click();
  cy.wait(2000);

});

And("Hacer click en confirmar", () => {
  cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
  cy.wait(2000);

});

Then("Validar que se haya eliminado el member {string}", (name) => {
  cy.wait(2000);
  cy.contains(name).should("not.exist");
  cy.screenshot("5 - Eliminar un member existente");
});
