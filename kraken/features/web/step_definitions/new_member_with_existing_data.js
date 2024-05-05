const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

Then(
  "Debería tener un error que indica que es el correo de un member existente",
  async function () {
    let responseElement = await this.driver.$(
      "form.member-basic-info-form div.form-group.max-width.error.ember-view p.response"
    );
    let responseText = await responseElement.getText();
    expect(responseText).to.include(
      "Member already exists. Attempting to add member with existing email address"
    );
  }
);
