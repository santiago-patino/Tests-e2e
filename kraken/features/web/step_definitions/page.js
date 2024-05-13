const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

async function takeScreenshotEveryStep(driver, fileNamePasoEscenario) {
    const screenshot = await driver.takeScreenshot();
    const buffer = Buffer.from(screenshot, 'base64');
    
    const dirPath = path.join(__dirname, 'screenshots_page'); 
    const filePath = path.join(dirPath, `${fileNamePasoEscenario}_screenshot.png`); 
    
    // Verifica si la carpeta 'screenshots_page' existe, si no, la crea
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    
    // Guarda el screenshot en la carpeta especificada
    fs.writeFileSync(filePath, buffer, 'base64');
    console.log(`Captura de pantalla guardada como ${filePath}`);
}

Given('I go to page', async function () {
    let elementNewPage = await this.driver.$("a[href='#/pages/']");
    return await elementNewPage.click();
});
When('I go to new page form', async function () {
    let elementNewPage = await this.driver.$("a[href='#/editor/page/']");
    await new Promise((r) => setTimeout(r, 3000));
    await takeScreenshotEveryStep(this.driver, "1 - Lista de Page inicial");
    return await elementNewPage.click();
});


When('I create a page with title {kraken-string} and content {kraken-string}', async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    await new Promise((r) => setTimeout(r, 3000));
    await takeScreenshotEveryStep(this.driver, "2 - Formulario poblado");
    return await elementContent.setValue(content);
});

When('I go to back', async function () {
    const elementContent = await this.driver.$(".gh-editor-back-button"); 
    await elementContent.click();
});

Then('validate created or edit page with title {kraken-string}', async function (title) {  
        const elementContent = await this.driver.$(".gh-editor-back-button"); 
    await elementContent.click();
    
    // Espera a que la lista de páginas esté visible
    await this.driver.$(".pages-list").waitForDisplayed();
    await new Promise((r) => setTimeout(r, 3000));
    await takeScreenshotEveryStep(this.driver, "3 - Validar page existente");

    // Recuperación de títulos y verificación
    const titles = await this.driver.$$(`.gh-list .gh-list-row .gh-post-list-title h3`);
    const titlesTexts = await Promise.all(titles.map(async element => element.getText()));
    const titleFound = titlesTexts.some(text => text.trim() === title.trim());
    
    console.log(`Título encontrado: "${title}"`, titlesTexts);
    expect(titleFound, `The title "${title}" was not found in the pages list`).to.be.true;
});

When('I update page', async function () {
    let elementNewPage = await this.driver.$(".gh-editor-save-trigger");
    return await elementNewPage.click();
});

Given('select page from list with title {kraken-string}', async function (title) {  
    const titleElements = await this.driver.$$(`.gh-list .gh-list-row .gh-post-list-title h3`);
    // Recuperación de los textos de los títulos y almacenamiento de los elementos en pares
    const titlesWithElements = await Promise.all(titleElements.map(async element => {
        return {
            text: await element.getText(),
            element: element
        };
    
    }));
    
    // Buscar el título deseado y hacer clic en él si se encuentra
    const titleToFind = title.trim();  // Asegúrate de que el título está correctamente recortado
    const foundTitle = titlesWithElements.find(t => t.text.trim() === titleToFind);
    
    if (foundTitle) {
        await foundTitle.element.click();
    } else {
        throw new Error(`The title "${titleToFind}" was not found in the pages list`);
    }
});


When('I go to publish page with title {kraken-string}', async function (title) {

    //Proceso de publicación
    let elementPublish = await this.driver.$(".gh-publish-trigger");
    await elementPublish.waitForClickable({ timeout: 1500 });
    await elementPublish.click();

    let elementPublishPage = await this.driver.$(".gh-btn-black");
    await new Promise((r) => setTimeout(r, 1000));
    await takeScreenshotEveryStep(this.driver, "4 - Publicar Page");
    await elementPublishPage.click();

    let elementFinalPublish = await this.driver.$(".gh-btn-pulse");
    await elementFinalPublish.waitForClickable({ timeout: 1000 });
    await elementFinalPublish.click();
    await new Promise((r) => setTimeout(r, 3000));
    await takeScreenshotEveryStep(this.driver, "5 - Confirmar publicación");
});

When('I go to see page', async function () {  
    let elementNewPage = await this.driver.$(".gh-post-bookmark-container");
    await elementNewPage.click();
    await new Promise((r) => setTimeout(r, 3000));
    await takeScreenshotEveryStep(this.driver, "6 - Visitar pagina creada");
});

//FUncion para crear una url amigable y utilizar en la validación de la url de una pagina creada
function titleToUrlSlug(titleURL) {
    return titleURL.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

Then('validate url page created with title {kraken-string}', async function (namepage) {
    const urlSlug = titleToUrlSlug(namepage);
    const baseUrl = 'https://ghost-xefe.onrender.com/';
    const fullUrl = baseUrl + urlSlug;

    // Navegar a la URL construida
    await this.driver.url(fullUrl);

    //Validar si se genera un 404
    const bodyContent = await this.driver.$('body').getText();
    expect(bodyContent).include(namepage);
});


When('I go to edit page with a title {kraken-string}', async function (title) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    
    let elementSettings = await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon');
    await elementSettings.click();
    
    let elementURL = await this.driver.$(".post-setting-slug");
    await elementURL.setValue(title);

});

When('I go to deleted page with title {kraken-string}', async function (title) {   
    let elementSettings = await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon');
    await elementSettings.click();
    await new Promise((r) => setTimeout(r, 2000));
    await takeScreenshotEveryStep(this.driver, "7 - Configuración de Page");
    
    let elementDelete = await this.driver.$(".settings-menu-delete-button");
    await elementDelete.click();
    await new Promise((r) => setTimeout(r, 2000));
    await takeScreenshotEveryStep(this.driver, "8 - Confirmación de delete");

    let elementDeleteConfirm = await this.driver.$(".gh-btn-red");
    await elementDeleteConfirm.click();

});

Then('validate deleted page with title {kraken-string}', async function (title) {
     // Espera a que la lista de páginas esté visible
     await this.driver.$(".pages-list").waitForDisplayed();

     // Recuperación de títulos y verificación
    const titles = await this.driver.$$('.gh-list .gh-list-row .gh-post-list-title h3');
    const titlesTexts = await Promise.all(titles.map(async element => element.getText()));
    const titleFound = titlesTexts.some(text => text.trim() === title.trim());

    console.log('Título encontrado:', titleFound ? "Sí" : "No");
    
    // Aserción para verificar que el título NO está presente en la lista
    expect(titleFound, `The title "${title}" was found in the pages list but it should have been deleted`).to.be.false;
});

Given('I go to page url with title {kraken-string}', async function (titleURL) {   
    const urlSlug = titleToUrlSlug(titleURL);
    const baseUrl = 'https://ghost-xefe.onrender.com/';
    const fullUrl = baseUrl + urlSlug;

    // Navegar a la URL construida
    await this.driver.url(fullUrl);
    await new Promise((r) => setTimeout(r, 2000));
    await takeScreenshotEveryStep(this.driver, "9 - Visitiar Url no accesible");
});

Then('validate 404 in url', async function () {   
    const bodyContent = await this.driver.$('body').getText();
    expect(bodyContent).to.include('404');
});


When('Add nav bar the URLpage with title {kraken-string}', async function (title) {
    let Settings = await this.driver.$("a[href='#/settings/']");
    await Settings.click();

    let elementSettingsNavigation = await this.driver.$("a[href='#/settings/navigation/']");
    await elementSettingsNavigation.click();

    // Selecciona específicamente el último elemento de navegación primaria
    let elementLabel = await this.driver.$(".gh-main-section-content .gh-blognav .gh-blognav-item .gh-blognav-line .gh-blognav-label input");
    await elementLabel.setValue(title);

    let elementURL = await this.driver.$(".gh-main-section-content .gh-blognav .gh-blognav-item .gh-blognav-line .gh-blognav-url input");
    await elementURL.setValue("https://ghost-xefe.onrender.com/" + title);

    await new Promise((r) => setTimeout(r, 2000));
    await takeScreenshotEveryStep(this.driver, "10 - Configuración Nav bar");

    // Guardar los cambios
    let saveButton = await this.driver.$(".gh-btn-primary");
    await saveButton.click();
});

Then('validate acces from nav bar {kraken-string}', async function (titleURL) {   
    const urlSlug = titleToUrlSlug(titleURL);
    const baseUrl = 'https://ghost-xefe.onrender.com/';
    const fullUrl = baseUrl + urlSlug;

    // Navegar a la URL construida
    await this.driver.url(fullUrl);
    await new Promise((r) => setTimeout(r, 2000));
    await takeScreenshotEveryStep(this.driver, "11 - Visitiar Url accesible");
});