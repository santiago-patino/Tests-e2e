const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const path = require('path');

async function takeScreenshotEveryStep(driver, fileNamePasoEscenario) {
    const screenshot = await driver.takeScreenshot();
    const buffer = Buffer.from(screenshot, "base64");
    const dirPath = path.join(__dirname, "screenshots_password");
    const filePath = path.join(
      dirPath,
      `${fileNamePasoEscenario}_screenshot.png`
    );
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    fs.writeFileSync(filePath, buffer, "base64");
    console.log(`Captura de pantalla guardada como ${filePath}`);
  }

When('Ir a mi perfil', async function () {
    let buttonMenuAdministrador1 = await this.driver.$("#ember31");
    await buttonMenuAdministrador1.click();
    let profilePage = await this.driver.$("a[href=\"#/settings/staff/administrator/\"]");
    await profilePage.waitForClickable({ timeout: 1000 });
    return await profilePage.click();
});

When('Logout', async function () {
    let buttonMenuAdministrador = await this.driver.$("#ember31");
    await buttonMenuAdministrador.click();
    let logoutPage = await this.driver.$("a[href=\"#/signout/\"]");
    await takeScreenshotEveryStep(
        this.driver,
        "6 - Logout"
      );
    return await logoutPage.click();
});

When('Ingresar datos de contraseñas {kraken-string}, {kraken-string} y {kraken-string}', async function (oldPass, newPass, newPassVerify) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(oldPass);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(newPass);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(newPassVerify);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

Then('Validar cambio de contraseña {kraken-string}', async function (mensaje) {
    await new Promise(r => setTimeout(r, 3000))
    let changePasswordSpan = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view span");
    let changePasswordText = await changePasswordSpan.getText();
    await takeScreenshotEveryStep(
        this.driver,
        "1 - Validar cambio de contraseña"
      );
    expect(changePasswordText).to.include(mensaje);
});

Then('Validar error en campo oldPassword {kraken-string}', async function (mensaje) {
    await new Promise(r => setTimeout(r, 3000))
    let oldPasswordInput = await this.driver.$("#user-password-old ~ p");
    let oldPasswordInputText = await oldPasswordInput.getText();
    await takeScreenshotEveryStep(
        this.driver,
        "2 - Validar campo de oldPassword"
      );
    expect(oldPasswordInputText).to.include(mensaje);

});

Then('Validar que no esté vacío new Password {kraken-string}', async function (mensaje) {
    await new Promise(r => setTimeout(r, 3000))
    let oldPasswordInput = await this.driver.$("#user-password-new ~ p");
    let oldPasswordInputText = await oldPasswordInput.getText();
    await takeScreenshotEveryStep(
        this.driver,
        "4 - Validar que no esté vacío new password"
      );
    expect(oldPasswordInputText).to.include(mensaje);

});

Then('Validar que las contraseñas coincidan {kraken-string}', async function (mensaje) {
    await new Promise(r => setTimeout(r, 3000))
    let oldPasswordInput = await this.driver.$("#user-new-password-verification ~ p");
    let oldPasswordInputText = await oldPasswordInput.getText();
    await takeScreenshotEveryStep(
        this.driver,
        "3 - Validar que las contraseñas coincidan"
      );
    expect(oldPasswordInputText).to.include(mensaje);

});

Then('Validar pagina de perfil', async function () {
    await new Promise(r => setTimeout(r, 4000))
    const currentUrl1 = await this.driver.getUrl();
    return expect(currentUrl1).to.contains('/#/settings/staff/administrator');
});

Then('Validar pagina de logueo', async function () {
    await new Promise(r => setTimeout(r, 4000))
    const currentUrl2 = await this.driver.getUrl();
    await takeScreenshotEveryStep(
        this.driver,
        "7 - Validar pagina de logueo"
      );
    return expect(currentUrl2).to.contains('/#/signin');
});

