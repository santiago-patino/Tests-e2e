const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('Ir a crear nuevo post', async function () {
    let elementNewPost = await this.driver.$('[title="New post"]');
    return await elementNewPost.click();
});

When('Ingresar datos en un post con el titulo {kraken-string} y descripcion {kraken-string}', async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    return await elementContent.setValue(content);
});

Then('Añadir tag', async function () {
    let menuButton = await this.driver.$("button.settings-menu-toggle");
    await menuButton.click();
    let tagInput = await this.driver.$("#tag-input");
    await tagInput.click();
    let selectOption = await this.driver.$(".//*//li[text() = 'News']");
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
    return expect(postTitle).to.equal(title);
});

When('Volver a los posts', async function () {
    let returnButton = await this.driver.$(".gh-editor-header > .items-center > a");
    return await returnButton.click();
});

When('Seleccionar post con el titulo {kraken-string}', async function (title) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + title + "']");
    return await postTitle.click();
});

When('Actualizar post', async function () {
    await new Promise(r => setTimeout(r, 1500))
    let updateButton = await this.driver.$(".gh-editor-save-trigger");
    return await updateButton.click();
});

When('Eliminar post', async function () {
    let menuButton = await this.driver.$("button.settings-menu-toggle");
    await menuButton.click();
    await new Promise(r => setTimeout(r, 1000))
    let deleteButton = await this.driver.$("button.settings-menu-delete-button");
    await deleteButton.click();
    let modalButton = await this.driver.$(".modal-content > .modal-footer > .gh-btn-red");
    return await modalButton.click();
});

Then('Validar que no existe un post {kraken-string}', async function (title) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + title + "']");
    return expect(await postTitle.isExisting()).to.not.be.true;
});

Then('Validar que existe un post {kraken-string}', async function (title) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + title + "']");
    return expect(await postTitle.isExisting()).to.be.true;
});