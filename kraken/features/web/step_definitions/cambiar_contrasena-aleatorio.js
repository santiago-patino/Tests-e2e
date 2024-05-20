const { Given, When, Then } = require('@cucumber/cucumber');
const OLDPASSWORD = "admin-uniandes";
const { faker } = require("@faker-js/faker");


When('Ingresar datos de contraseñas invalida y nuevas contraseñas aleatorio escenario', async function () {
    const fakeOldPassword = faker.internet.password(12);
    const newPassword = faker.internet.password(12);
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(fakeOldPassword);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(newPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(newPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas vieja vacía y nuevas contraseñas aleatorio escenario', async function () {
    const newPassword = faker.internet.password(12);
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue("");
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(newPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(newPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas diferentes aleatorio escenario', async function () {
    const fakeOldPassword = faker.internet.password(12);
    const newPassword = faker.internet.password(12);
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(OLDPASSWORD);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(newPassword);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(fakeOldPassword);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});

When('Ingresar datos de contraseñas con contraseña vieja y contraseñas nuevas con longitud invalida aleatorio escenario', async function () {
    const newPassword = faker.internet.password(12);
    const newPasswordSub = newPassword.substring(0, 7);
    let oldPasswordInput = await this.driver.$("#user-password-old");
    await oldPasswordInput.setValue(OLDPASSWORD);
    let newPasswordInput = await this.driver.$("#user-password-new");
    await newPasswordInput.setValue(newPasswordSub);
    let newPasswordverifyInput = await this.driver.$("#user-new-password-verification");
    await newPasswordverifyInput.setValue(newPasswordSub);
    let changePassword = await this.driver.$(".gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view");
    return await changePassword.click();
});


