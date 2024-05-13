const { Given, When, Then, And } = require("@cucumber/cucumber");
const expect = require("chai").expect;
const fs = require("fs");
const path = require('path');

async function takeScreenshotEveryStep(driver, fileNamePasoEscenario) {
  const screenshot = await driver.takeScreenshot();
  const buffer = Buffer.from(screenshot, "base64");
  const dirPath = path.join(__dirname, "screenshots_members");
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

When(
  "Ir a crear un nuevo member en la sección members y botón new member",
  async function () {
    await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
    let element = await this.driver.$("a.ember-view.gh-btn.gh-btn-primary");
    await takeScreenshotEveryStep(
      this.driver,
      "1 - Ir a crear un nuevo member"
    );
    return await element.click();
  }
);

When(
  "Ir a crear un nuevo member con datos vacíos en la sección members y botón new member",
  async function () {
    await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
    let element = await this.driver.$("a.ember-view.gh-btn.gh-btn-primary");
    await takeScreenshotEveryStep(
      this.driver,
      "4 - Ir a crear un nuevo member"
    );
    return await element.click();
  }
);

When(
  "Ir a crear un member con datos inválidos en la sección members y botón new member",
  async function () {
    await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
    let element = await this.driver.$("a.ember-view.gh-btn.gh-btn-primary");
    await takeScreenshotEveryStep(this.driver, "6 - Ir a crear un member");
    return await element.click();
  }
);

When(
  "Ir a crear un member con el correo de un member existente en la sección members y botón new member",
  async function () {
    await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
    let element = await this.driver.$("a.ember-view.gh-btn.gh-btn-primary");
    await takeScreenshotEveryStep(this.driver, "9 - Ir a crear un member");
    return await element.click();
  }
);

When("Ingresar el nombre del member {kraken-string}", async function (nombre) {
  const randomName = nombre;
  let element = await this.driver.$("#member-name");
  await element.setValue(randomName);
});

When(
  "Ingresar el email válido del member {kraken-string}",
  async function (email) {
    let randomEmail = email;
    let element = await this.driver.$("#member-email");
    await element.setValue(randomEmail);
    return await takeScreenshotEveryStep(
      this.driver,
      "2 - Ingresar el email válido"
    );
  }
);

When(
  "Ingresar el email del member existente {kraken-string}",
  async function (email) {
    let randomEmail = email;
    let element = await this.driver.$("#member-email");
    await element.setValue(randomEmail);
    return await takeScreenshotEveryStep(
      this.driver,
      "10 - Ingresar el email de un member existente"
    );
  }
);

When("Dar click en Save", async function () {
  let element = await this.driver.$("section.view-actions button");
  return await element.click();
});

Then(
  "Debería ver que se actualiza la vista con la información de creación",
  async function () {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let memberCreated = await this.driver.$("div.gh-member-details-meta");
    let isExisting = await memberCreated.isExisting();
    expect(isExisting).to.be.true;
    return await takeScreenshotEveryStep(
      this.driver,
      "3 - Debería ver que se actualiza la vista"
    );
  }
);

Then("Verificar que existe el member {kraken-string}", async function (nombre) {
  let memberNameElement = await this.driver.$("h3");
  let memberName = await memberNameElement.getText();
  expect(memberName).to.include(nombre);
  await memberNameElement.click();
  await takeScreenshotEveryStep(
    this.driver,
    "13 - Verificar que existe el member"
  );
});

Then("Debería tener un error de datos vacíos", async function () {
  let responseElement = await this.driver.$(
    "form.member-basic-info-form div.form-group.max-width.error.ember-view p.response"
  );
  let responseText = await responseElement.getText();
  expect(responseText).to.include("Please enter an email.");
  await takeScreenshotEveryStep(
    this.driver,
    "5 - Debería tener un error de datos vacíos"
  );
});

When("Ingresar el email inválido del member", async function () {
  let randomEmail = "e.condev";
  let element = await this.driver.$("#member-email");
  await element.setValue(randomEmail);
  return await takeScreenshotEveryStep(
    this.driver,
    "7 - Ingresar el email inválido del member"
  );
});

Then("Debería tener un error de datos inválidos", async function () {
  let responseElement = await this.driver.$(
    "form.member-basic-info-form div.form-group.max-width.error.ember-view p.response"
  );
  let responseText = await responseElement.getText();
  expect(responseText).to.include("Invalid Email.");
  await takeScreenshotEveryStep(
    this.driver,
    "8 - Debería tener un error de datos inválidos"
  );
});

When("Volver a la sección members", async function () {
  let element = await this.driver.$('a[href="#/members/"]');
  await element.click();
  await this.driver.waitUntil(async () => {
    let confirmButton = await this.driver.$(
      "div.fullscreen-modal.fullscreen-modal-action.fullscreen-modal-wide section.modal-content.ember-view div.modal-footer button.gh-btn.gh-btn-red"
    );
    return confirmButton && (await confirmButton.isClickable());
  });
  let confirmButton = await this.driver.$(
    "div.fullscreen-modal.fullscreen-modal-action.fullscreen-modal-wide section.modal-content.ember-view div.modal-footer button.gh-btn.gh-btn-red"
  );
  await confirmButton.click();
});

Then(
  "Debería tener un error que indica que es el correo de un member existente",
  async function () {
    let responseElement = await this.driver.$(
      "form.member-basic-info-form div.form-group.max-width.error.ember-view p.response"
    );
    let responseText = await responseElement.getText();
    expect(responseText).to.include(
      "Member already exists. Attempting to add member with existing email address"
    );
    await takeScreenshotEveryStep(
      this.driver,
      "11 - Debería tener un error de correo de un member existente"
    );
  }
);

When("Ir a la sección members", async function () {
  let elementMembers = await this.driver.$('a[href="#/members/"]');
  await elementMembers.click();
});

When("Ir a la sección members para eliminar un member", async function () {
  let elementMembers = await this.driver.$('a[href="#/members/"]');
  await elementMembers.click();
  await takeScreenshotEveryStep(this.driver, "12 - Ir a la sección members");
});

When("Borrar el member creado", async function () {
  await this.driver.waitUntil(async () => {
    let deleteOption = await this.driver.$(
      "button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
    );
    return deleteOption && (await deleteOption.isClickable());
  });
  let deleteOption = await this.driver.$(
    "button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
  );
  await deleteOption.click();
  await takeScreenshotEveryStep(
    this.driver,
    "14 - Borrar el member creado P1 dropdown"
  );
  await this.driver.waitUntil(async () => {
    let deleteButton = await this.driver.$("button.mr2 span.red");
    return deleteButton && (await deleteButton.isClickable());
  });
  let deleteButton = await this.driver.$("button.mr2 span.red");
  await deleteButton.click();
  await takeScreenshotEveryStep(
    this.driver,
    "15 - Borrar el member creado P2 delete button"
  );
  await this.driver.waitUntil(async () => {
    let confirmButton = await this.driver.$(
      "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
    );
    return confirmButton && (await confirmButton.isClickable());
  });
  let confirmButton = await this.driver.$(
    "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
  );
  await takeScreenshotEveryStep(
    this.driver,
    "16 - Borrar el member creado P3 confirm button"
  );
  await confirmButton.click();
});

Then("No debería existir el member {kraken-string}", async function (nombre) {
  let memberNameElement = await this.driver.$(
    "div.gh-list-scrolling table.gh-list tbody tr a.ember-view h3.gh-members-list-name "
  );
  let memberName = await memberNameElement.getText();
  expect(memberName).to.not.include(nombre);
  await takeScreenshotEveryStep(
    this.driver,
    "17 - No debería existir el member"
  );
});
