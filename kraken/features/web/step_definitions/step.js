const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

Given,
  When("Ir hacia {kraken-string} {kraken-string}", async function (host, url) {
    return await this.driver.url(host + url);
  });

When(
  "Autenticarse con credenciales {kraken-string} {kraken-string}",
  async function (user, pass) {
    let elementUser = await this.driver.$("#ember6");
    await elementUser.setValue(user);
    let elementPass = await this.driver.$("#ember8");
    await elementPass.setValue(pass);
    await new Promise((r) => setTimeout(r, 300));
    let elementLoginButton = await this.driver.$("#ember10");
    return await elementLoginButton.click();
  }
);

Then("Validar inicio sesion exitoso", async function () {
  await new Promise((r) => setTimeout(r, 3000));
  const currentUrl = await this.driver.getUrl();
  return expect(currentUrl).to.contains("/#/dashboard");
});
