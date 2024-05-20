const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const jsonNewPassword = require("../data/newPassword.json");

function random() {
    return Math.floor(Math.random() * 1000);
}

let randomNumber = random();
let data = {
    fullName: jsonNewPassword[randomNumber].fullName,
    location: jsonNewPassword[randomNumber].location,
    website: jsonNewPassword[randomNumber].website,
    facebookProfile: jsonNewPassword[randomNumber].facebookProfile,
    twitterProfile: jsonNewPassword[randomNumber].twitterProfile,
    bio: jsonNewPassword[randomNumber].bio
};

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

When('Ingresar datos de perfil a priori', async function () {
    let userNameInput = await this.driver.$("#user-name");
    await userNameInput.setValue(data.fullName);
    let userLocationInput = await this.driver.$("#user-location");
    await userLocationInput.setValue(data.location);
    let userWebsiteInput = await this.driver.$("#user-website");
    await userWebsiteInput.setValue(data.website);
    let bioInput = await this.driver.$("#user-bio");
    await bioInput.setValue(data.bio);
    await takeScreenshotEveryStep(
        this.driver,
        "Ingresar datos de perfil"
    );
    let saveButton = await this.driver.$(".gh-btn.gh-btn-primary.gh-btn-icon.ember-view");
    return await saveButton.click();
});

Then('Validar actualizacion perfil {kraken-string}', async function (mensaje) {
    await new Promise(r => setTimeout(r, 1000))
    let changePasswordSpan = await this.driver.$(".gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-green.ember-view span");
    let changePasswordText = await changePasswordSpan.getText();
    await takeScreenshotEveryStep(
        this.driver,
        "Validar actualizacion de perfil"
    );
    expect(changePasswordText).to.include(mensaje);
});

