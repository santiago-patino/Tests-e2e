const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const path = require('path');
const fs = require("fs");
const axios = require('axios');

async function fetchDataFromAPI() {
  try {
      const response = await axios.get("https://my.api.mockaroo.com/posts.json?key=5092dc40");
      //const data = await response.json();
      return response.data;
  } catch (error) {
      console.error('Error al obtener datos del API:', error);
      throw error; // Manejar el error según sea necesario
  }
}

let data = new Array(5);
//createData();

async function createData() {
  // for (let i = 0; i < 5; i++) {
  //   apiData = await fetchDataFromAPI();
  //   data.push({
  //       title: apiData.title.replace(/'/g, ''),
  //       description: apiData.description
  //   });
  // }

  try {
    let apiData = await fetchDataFromAPI();
    data[parseInt(i) - 1] = {
        title: apiData.title.replace(/'/g, ''),
        description: apiData.description
    };
    } catch (error) {
        console.error('Error al obtener o procesar los datos de la API:', error);
    }
  }



async function takeScreenshotEveryStep(driver, fileNamePasoEscenario) {
    const screenshot = await driver.takeScreenshot();
    const buffer = Buffer.from(screenshot, "base64");
    const dirPath = path.join(__dirname, "screenshots_post");
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

Given('Generar datos posts pseudo {kraken-string}', async function (scenario) {
  await createData(scenario)
})

When('Ingresar datos en un post con el titulo y descripcion pseudo {kraken-string}', async function (scenario) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(data[parseInt(scenario)-1].title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    await takeScreenshotEveryStep(
        this.driver,
        "2 - Ingresar datos en un post"
      );
    return await elementContent.setValue(data[parseInt(scenario)-1].description);
});

When('Ingresar datos en un post con el titulo y descripcion pseudo editado {kraken-string}', async function (scenario) {
    await createData(scenario)

    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(data[parseInt(scenario)-1].title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    await takeScreenshotEveryStep(
        this.driver,
        "2 - Ingresar datos en un post"
      );
    return await elementContent.setValue(data[parseInt(scenario)-1].description);
});

Then('Publicar y Validar el post con el titulo pseudo {kraken-string}', async function (scenario) {
    await new Promise(r => setTimeout(r, 1000))
    let publishButton = await this.driver.$(".gh-publish-trigger");
    await publishButton.click();
    await new Promise(r => setTimeout(r, 1000))
    let continueButton = await this.driver.$(".gh-publish-cta");
    await continueButton.click();
    let confirmButton = await this.driver.$(".gh-btn-pulse");
    await confirmButton.click();
    let anclaPost = await this.driver.$(".gh-post-bookmark-wrapper");
    const linkUrl = await anclaPost.getAttribute('href');
    await this.driver.url(linkUrl);
    //await new Promise(r => setTimeout(r, 3000))
    //let tag = await this.driver.$(".post-card-primary-tag").getText();
    //expect(tag).to.equal("News");
    let postTitle = await this.driver.$(".article-title").getText();
    await takeScreenshotEveryStep(
        this.driver,
        "4 - Publicar y validar post"
      );
    return expect(postTitle).to.equal(data[parseInt(scenario)-1].title);
});

When('Seleccionar post con el titulo pseudo {kraken-string}', async function (scenario) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + data[parseInt(scenario)-1].title + "']");
    await takeScreenshotEveryStep(
        this.driver,
        "5 - Seleccionar post"
      );
    return await postTitle.click();
});

Then('Validar que no existe un post pseudo {kraken-string}', async function (scenario) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + data[parseInt(scenario)-1].title + "']");
    await takeScreenshotEveryStep(
        this.driver,
        "10 - Validar que no existe post"
      );
    return expect(await postTitle.isExisting()).to.not.be.true;
});

Then('Validar que existe un post pseudo {kraken-string}', async function (scenario) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + data[parseInt(scenario)-1].title + "']");
    await takeScreenshotEveryStep(
        this.driver,
        "8 - Validar que existe post"
      );
    return expect(await postTitle.isExisting()).to.be.true;
});