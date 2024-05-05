const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("Ingresar el email inválido del member", async function () {
  let randomEmail = "e.condev";
  let element = await this.driver.$("#member-email");
  return await element.setValue(randomEmail);
});

Then(
    "Debería tener un error de datos inválidos",
    async function () {
      let memberNameElement = await this.driver.$(
        "div.gh-list-scrolling table.gh-list tbody tr a.ember-view h3.gh-members-list-name "
      );
      let memberName = await memberNameElement.getText();
      expect(memberName).to.include("Edna Conde");
      await memberNameElement.click();
    }
  );