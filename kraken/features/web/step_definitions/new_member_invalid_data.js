const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("Ingresar el email inválido del member", async function () {
  let randomEmail = "e.condev";
  let element = await this.driver.$("#member-email");
  return await element.setValue(randomEmail);
});

Then("Debería tener un error de datos vacíos", async function () {
  let responseElement = await this.driver.$(
    "form.member-basic-info-form div.form-group.max-width.error.ember-view p.response"
  );
  let responseText = await responseElement.getText();
  expect(responseText).to.include("Please enter an email.");
});

Then("Debería tener un error de datos inválidos", async function () {
  let responseElement = await this.driver.$(
    "form.member-basic-info-form div.form-group.max-width.error.ember-view p.response"
  );
  let responseText = await responseElement.getText();
  expect(responseText).to.include("Invalid Email.");
});

When("Volver a la sección miembros", async function () {
  let element = await this.driver.$('a[href="#/members/"]');
  await element.click();
  await this.driver.waitUntil(async () => {
    let confirmButton = await this.driver.$(
      "div.fullscreen-modal.fullscreen-modal-action.fullscreen-modal-wide section.modal-content.ember-view div.modal-footer button.gh-btn.gh-btn-red"
    );
    return confirmButton && (await confirmButton.isClickable());
  });
  let confirmButton = await this.driver.$(
    "div.fullscreen-modal.fullscreen-modal-action.fullscreen-modal-wide section.modal-content.ember-view div.modal-footer button.gh-btn.gh-btn-red"
  );
  await confirmButton.click();
});
