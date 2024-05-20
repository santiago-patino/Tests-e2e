const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const axios = require("axios");
const fs = require('fs');
const path = require('path');


async function fetchDataFromAPI() {
    try {
        const response = await axios.get("https://my.api.mockaroo.com/passwords.json?key=f44f9790");
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos del API:', error);
        throw error; // Manejar el error según sea necesario
    }
}

let data = [];
createData();

async function createData() {
    apiData = await fetchDataFromAPI();

    data.fullName = apiData.fullName;
    data.location = apiData.location;
    data.website = apiData.website;
    data.bio = apiData.bio;
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

When('Ingresar datos de perfil pseudo', async function () {
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


