const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("Borrar el member creado", async function () {
    await this.driver.waitUntil(async () => {
      let deleteOption = await this.driver.$(
        "button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
      );
      return deleteOption && (await deleteOption.isClickable());
    });
    let deleteOption = await this.driver.$(
      "button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
    );
    await deleteOption.click();
    await this.driver.waitUntil(async () => {
      let deleteButton = await this.driver.$("button.mr2 span.red");
      return deleteButton && (await deleteButton.isClickable());
    });
    let deleteButton = await this.driver.$("button.mr2 span.red");
    await deleteButton.click();
    await this.driver.waitUntil(async () => {
      let confirmButton = await this.driver.$(
        "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
      );
      return confirmButton && (await confirmButton.isClickable());
    });
    let confirmButton = await this.driver.$(
      "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
    );
    await confirmButton.click();
  });
  
  Then("No debería estar el member en la lista", async function () {
    let memberNameElement = await this.driver.$(
      "div.gh-list-scrolling table.gh-list tbody tr a.ember-view h3.gh-members-list-name "
    );
    let memberName = await memberNameElement.getText();
    expect(memberName).to.not.include("Edna Conde");
  });
  