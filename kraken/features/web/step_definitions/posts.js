const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const path = require('path');

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

When('Ir a crear nuevo post', async function () {
    let elementNewPost = await this.driver.$('[title="New post"]');
    await takeScreenshotEveryStep(
        this.driver,
        "1 - Crear nuevo post"
      );
    return await elementNewPost.click();
});

When('Ingresar datos en un post con el titulo {kraken-string} y descripcion {kraken-string}', async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    await takeScreenshotEveryStep(
        this.driver,
        "2 - Ingresar datos en un post"
      );
    return await elementContent.setValue(content);
});

Then('Añadir tag', async function () {
    let menuButton = await this.driver.$("button.settings-menu-toggle");
    await menuButton.click();
    let tagInput = await this.driver.$("#tag-input");
    await tagInput.click();
    let selectOption = await this.driver.$(".//*//li[text() = 'News']");
    await takeScreenshotEveryStep(
        this.driver,
        "3 - Añadir tag"
      );
    return await selectOption.click();
    //let selectOption = await this.driver.$("li.ember-power-select-option");
});

Then('Publicar y Validar el post con el titulo {kraken-string}', async function (title) {
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
    await new Promise(r => setTimeout(r, 3000))
    let tag = await this.driver.$(".post-card-primary-tag").getText();
    expect(tag).to.equal("News");
    let postTitle = await this.driver.$(".article-title").getText();
    await takeScreenshotEveryStep(
        this.driver,
        "4 - Publicar y validar post"
      );
    return expect(postTitle).to.equal(title);
});

When('Volver a los posts', async function () {
    let returnButton = await this.driver.$(".gh-editor-header > .items-center > a");
    await takeScreenshotEveryStep(
        this.driver,
        "7 - Volver a los posts"
      );
    return await returnButton.click();
});

When('Seleccionar post con el titulo {kraken-string}', async function (title) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + title + "']");
    await takeScreenshotEveryStep(
        this.driver,
        "5 - Seleccionar post"
      );
    return await postTitle.click();
});

When('Actualizar post', async function () {
    await new Promise(r => setTimeout(r, 1500))
    let updateButton = await this.driver.$(".gh-editor-save-trigger");
    await takeScreenshotEveryStep(
        this.driver,
        "6 - Actualizar post"
      );
    return await updateButton.click();
});

When('Eliminar post', async function () {
    let menuButton = await this.driver.$("button.settings-menu-toggle");
    await menuButton.click();
    await new Promise(r => setTimeout(r, 1000))
    let deleteButton = await this.driver.$("button.settings-menu-delete-button");
    await deleteButton.click();
    let modalButton = await this.driver.$(".modal-content > .modal-footer > .gh-btn-red");
    await takeScreenshotEveryStep(
        this.driver,
        "9 - Eliminar post"
      );
    return await modalButton.click();
});

Then('Validar que no existe un post {kraken-string}', async function (title) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + title + "']");
    await takeScreenshotEveryStep(
        this.driver,
        "10 - Validar que no existe post"
      );
    return expect(await postTitle.isExisting()).to.not.be.true;
});

Then('Validar que existe un post {kraken-string}', async function (title) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + title + "']");
    await takeScreenshotEveryStep(
        this.driver,
        "8 - Validar que existe post"
      );
    return expect(await postTitle.isExisting()).to.be.true;
});