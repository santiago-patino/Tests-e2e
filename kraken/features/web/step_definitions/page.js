const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I go to page', async function () {
    let elementNewPage = await this.driver.$("a[href='#/pages/']");
    return await elementNewPage.click();
});

When('I go to new page form', async function () {
    let elementNewPage = await this.driver.$("a[href='#/editor/page/']");
    return await elementNewPage.click();
});


When('I create a page with title {kraken-string} and content {kraken-string}', async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    return await elementContent.setValue(content);
});

Then('validate created page with title {kraken-string}', async function (title) {
    const elementContent = await this.driver.$(".gh-editor-back-button"); 
    await elementContent.click();
    
    // Espera a que la lista de páginas esté visible
    await this.driver.$(".pages-list").waitForDisplayed();

    // Recuperación de títulos y verificación
    const titles = await this.driver.$$(`.gh-list .gh-list-row .gh-post-list-title h3`);
    const titlesTexts = await Promise.all(titles.map(async element => element.getText()));
    const titleFound = titlesTexts.some(text => text.trim() === title.trim());

    console.log(`Título encontrado: "${title}"`, titlesTexts);
    expect(titleFound, `The title "${title}" was not found in the pages list`).to.be.true;
});

When('select page from list with title {kraken-string}', async function (title) {  
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
    await elementPublish.waitForClickable({ timeout: 1000 });
    await elementPublish.click();

    let elementPublishPage = await this.driver.$(".gh-btn-black");
    await elementPublishPage.waitForClickable({ timeout: 1000 });
    await elementPublishPage.click();

    let elementFinalPublish = await this.driver.$(".gh-btn-pulse");
    await elementFinalPublish.waitForClickable({ timeout: 1000 });
    await elementFinalPublish.click();
});

When('I go to see page', async function () {
    let elementNewPage = await this.driver.$(".gh-post-bookmark-container");
    return await elementNewPage.click();
});

//FUncion para crear una url amigable y utilizar en la validación de la url de una pagina creada
function titleToUrlSlug(titleURL) {
    return titleURL.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

When('validate url page created with title {kraken-string}', async function (titleURL) {
    const urlSlug = titleToUrlSlug(titleURL);
    const baseUrl = 'https://ghost-xefe.onrender.com/';
    const fullUrl = baseUrl + urlSlug;

    // Navegar a la URL construida
    await this.driver.url(fullUrl);

    //Validar si se genera un 404
    const bodyContent = await this.driver.$('body').getText();
    expect(bodyContent).to.not.include('404');
});

