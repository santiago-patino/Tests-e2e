const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const axios = require('axios');
//const jsonPage = require('../data/pages.json');

async function fetchDataFromAPI() {
    try {
        const response = await axios.get("https://my.api.mockaroo.com/pages.json?key=adf0ee10");
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos del API:', error);
        throw error; // Manejar el error según sea necesario
    }
  }
  
  let data = new Array(6);
  
  async function createData(i) {
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

Given('Generate data pseudo {kraken-string}', async function (scenario) {
    await createData(scenario)
  })


When('I create a page with title and content pseudo {kraken-string}', async function (scenario) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(data[parseInt(scenario)-1].title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    await new Promise((r) => setTimeout(r, 3000));
    await takeScreenshotEveryStep(this.driver, "2 - Formulario poblado");
    return await elementContent.setValue(data[parseInt(scenario)-1].description);
});


Then('validate created or edit page with title pseudo {kraken-string}', async function (scenario) {  
        const elementContent = await this.driver.$(".gh-editor-back-button"); 
    await elementContent.click();
    
    // Espera a que la lista de páginas esté visible
    await this.driver.$(".pages-list").waitForDisplayed();
    await new Promise((r) => setTimeout(r, 3000));
    await takeScreenshotEveryStep(this.driver, "3 - Validar page existente");

    // Recuperación de títulos y verificación
    const titles = await this.driver.$$(`.gh-list .gh-list-row .gh-post-list-title h3`);
    const titlesTexts = await Promise.all(titles.map(async element => element.getText()));
    const title = data[parseInt(scenario)-1].title
    const titleFound = titlesTexts.some(text => text.trim() === title.trim());
    
    console.log(`Título encontrado: "${title}"`, titlesTexts);
    expect(titleFound, `The title "${title}" was not found in the pages list`).to.be.true;
});


Given('select page from list with title pseudo {kraken-string}', async function (scenario) {  
    const titleElements = await this.driver.$$(`.gh-list .gh-list-row .gh-post-list-title h3`);
    // Recuperación de los textos de los títulos y almacenamiento de los elementos en pares
    const titlesWithElements = await Promise.all(titleElements.map(async element => {
        return {
            text: await element.getText(),
            element: element
        };
    
    }));
    
    // Buscar el título deseado y hacer clic en él si se encuentra
    const title = data[parseInt(scenario)-1].title
    const titleToFind = title.trim();  // Asegúrate de que el título está correctamente recortado
    const foundTitle = titlesWithElements.find(t => t.text.trim() === titleToFind);
    
    if (foundTitle) {
        await foundTitle.element.click();
    } else {
        throw new Error(`The title "${titleToFind}" was not found in the pages list`);
    }
});


When('I go to publish page pseudo', async function () {

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


//FUncion para crear una url amigable y utilizar en la validación de la url de una pagina creada
function titleToUrlSlug(titleURL) {
    return titleURL.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

Then('validate url page created with title pseudo {kraken-string}', async function (scenario) {
    const urlSlug = titleToUrlSlug(data[parseInt(scenario)-1].title);
    const baseUrl = 'https://ghost-xefe.onrender.com/';
    const fullUrl = baseUrl + urlSlug;

    // Navegar a la URL construida
    await this.driver.url(fullUrl);

    //Validar si se genera un 404
    const bodyContent = await this.driver.$('body').getText();
    expect(bodyContent).include(data[parseInt(scenario)-1].title);
});


When('I go to edit page with a title pseudo {kraken-string}', async function (scenario) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(data[parseInt(scenario)-1].title);
    
    let elementSettings = await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon');
    await elementSettings.click();
    
    let elementURL = await this.driver.$(".post-setting-slug");
    await elementURL.setValue(data[parseInt(scenario)-1].title);

});

When('I go to deleted page pseudo', async function () {   
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

Then('validate deleted page with title pseudo {kraken-string}', async function (scenario) {
     // Espera a que la lista de páginas esté visible
     await this.driver.$(".pages-list").waitForDisplayed();

     // Recuperación de títulos y verificación
    const titles = await this.driver.$$('.gh-list .gh-list-row .gh-post-list-title h3');
    const titlesTexts = await Promise.all(titles.map(async element => element.getText()));
    const title = data[parseInt(scenario)-1].title
    const titleFound = titlesTexts.some(text => text.trim() === title.trim());

    console.log('Título encontrado:', titleFound ? "Sí" : "No");
    
    // Aserción para verificar que el título NO está presente en la lista
    expect(titleFound, `The title "${title}" was found in the pages list but it should have been deleted`).to.be.false;
});

Given('I go to page url with title pseudo {kraken-string}', async function (scenario) {   
    const urlSlug = titleToUrlSlug(data[parseInt(scenario)-1].title);
    const baseUrl = 'https://ghost-xefe.onrender.com/';
    const fullUrl = baseUrl + urlSlug;

    // Navegar a la URL construida
    await this.driver.url(fullUrl);
    await new Promise((r) => setTimeout(r, 2000));
    await takeScreenshotEveryStep(this.driver, "9 - Visitiar Url no accesible");
});



When('Add nav bar the URLpage with title pseudo {kraken-string}', async function (scenario) {
    const title = data[parseInt(scenario)-1].title
    
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

Then('validate acces from nav bar pseudo {kraken-string}', async function (scenario) {   
    const urlSlug = titleToUrlSlug(data[parseInt(scenario)-1].title);
    const baseUrl = 'https://ghost-xefe.onrender.com/';
    const fullUrl = baseUrl + urlSlug;

    // Navegar a la URL construida
    await this.driver.url(fullUrl);
    await new Promise((r) => setTimeout(r, 2000));
    await takeScreenshotEveryStep(this.driver, "11 - Visitiar Url accesible");
});