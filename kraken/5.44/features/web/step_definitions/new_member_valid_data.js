const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("Seleccionar la sección miembros", async function () {
  let element = await this.driver.$('a[href="#/members/"]');
  return await element.click();
});

Then("Debería tener un botón new members", async function () {
  let element = await this.driver.$("a[href='#/members/new/']");
  return await element;
});

When("Dar click en el botón new member", async function () {
  let element = await this.driver.$("a[href='#/members/new/");
  return await element.click();
});

Then(
  "Debería tener un form para ingresar la información del member",
  async function () {
    let element = await this.driver.$("form.member-basic-info-form");
    return await element;
  }
);

When("Ingresar el nombre del member {kraken-string}", async function (nombre) {
  const randomName = nombre;
  let element = await this.driver.$("#member-name");
  return await element.setValue(randomName);
});

When("Ingresar el email del member {kraken-string}", async function (email) {
  let randomEmail = email;
  let element = await this.driver.$("#member-email");
  return await element.setValue(randomEmail);
});

When("Dar click en Save", async function () {
  let element = await this.driver.$("section.view-actions button");
  return await element.click();
});

Then(
  "Debería tener un nuevo member en la lista que coincida con los datos que ingresé {kraken-string}",
  async function (nombre) {
    let memberNameElement = await this.driver.$(
      "div.gh-list-scrolling table.gh-list tbody tr a.ember-view h3.gh-members-list-name"
    );
    let memberName = await memberNameElement.getText();
    expect(memberName).to.include(nombre);
    await memberNameElement.click();
  }
);
