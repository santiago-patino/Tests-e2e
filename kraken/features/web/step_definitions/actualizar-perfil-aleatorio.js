const {Given, When, Then} = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
const { faker } = require("@faker-js/faker");


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

When('Ingresar datos de perfil aleatorio', async function () {
    const fullName = faker.name;
    const location = faker.address.country();
    const website = faker.internet.url();
    const bio = faker.lorem.sentence(5);
    let userNameInput = await this.driver.$("#user-name");
    await userNameInput.setValue(fullName);
    let userLocationInput = await this.driver.$("#user-location");
    await userLocationInput.setValue(location);
    let userWebsiteInput = await this.driver.$("#user-website");
    await userWebsiteInput.setValue(website);
    let bioInput = await this.driver.$("#user-bio");
    await bioInput.setValue(bio);
    await takeScreenshotEveryStep(
        this.driver,
        "Ingresar datos de perfil"
    );
    let saveButton = await this.driver.$(".gh-btn.gh-btn-primary.gh-btn-icon.ember-view");
    return await saveButton.click();
});


