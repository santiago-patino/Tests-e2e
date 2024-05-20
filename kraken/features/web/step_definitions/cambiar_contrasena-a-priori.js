const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const jsonNewPassword = require("../data/newPassword.json");
const OLDPASSWORD = "admin-uniandes";

function random() {
    return Math.floor(Math.random() * 1000);
}

let data = [];

for (let i = 0; i <= 5; i++) {
    let randomNumber = random();
    data.push({
        newPassword: jsonNewPassword[randomNumber].newPassword,
        fakeOldPassword: jsonNewPassword[randomNumber].fakeOldPassword,
        numericPassword: jsonNewPassword[randomNumber].numericPassword
    });
}

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
When('Ingresar datos de contraseñas invalida y nuevas contraseñas escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(data[parseInt(scenario)-1].fakeOldPassword);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].newPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].newPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas vieja vacía y nuevas contraseñas escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue("");
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].newPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].newPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(OLDPASSWORD);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].newPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].fakeOldPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas con longitud invalida escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(OLDPASSWORD);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].newPassword.substring(0, 7));
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].newPassword.substring(0, 7));
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas insegura numerica escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(OLDPASSWORD);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].numericPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].numericPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

Then('Validar longitud nueva contraseña {kraken-string}', async function (mensaje) {
    await new Promise(r => setTimeout(r, 3000))
    let oldPasswordInput = await this.driver.$("#user-password-new ~ p");
    let oldPasswordInputText = await oldPasswordInput.getText();
    await takeScreenshotEveryStep(
        this.driver,
        "4 - Validar longitud nueva contraseña"
    );
    expect(oldPasswordInputText).to.include(mensaje);

});

Then('Validar contraseña insegura {kraken-string}', async function (mensaje) {
    await new Promise(r => setTimeout(r, 3000))
    let oldPasswordInput = await this.driver.$("#user-password-new ~ p");
    let oldPasswordInputText = await oldPasswordInput.getText();
    await takeScreenshotEveryStep(
        this.driver,
        "5 - Validar contraseña insegura"
    );
    expect(oldPasswordInputText).to.include(mensaje);

});


