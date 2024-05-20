const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require("axios");
const OLDPASSWORD = "admin-uniandes";


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
    for (let i = 0; i <= 5; i++) {
        apiData = await fetchDataFromAPI();
        data.push({
            newPassword: apiData.newPassword,
            fakeOldPassword: apiData.fakeOldPassword,
            numericPassword: apiData.numericPassword
        });
    }
}

When('Ingresar datos de contraseñas invalida y nuevas contraseñas pseudo escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(data[parseInt(scenario)-1].fakeOldPassword);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].newPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].newPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas vieja vacía y nuevas contraseñas pseudo escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue("");
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].newPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].newPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes pseudo escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(OLDPASSWORD);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].newPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].fakeOldPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas con longitud invalida pseudo escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(OLDPASSWORD);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].newPassword.substring(0, 7));
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].newPassword.substring(0, 7));
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas insegura numerica pseudo escenario {kraken-string}', async function (scenario) {
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(OLDPASSWORD);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(data[parseInt(scenario)-1].numericPassword.substring(0, 7));
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(data[parseInt(scenario)-1].numericPassword.substring(0, 7));
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});


