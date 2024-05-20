const { Given, When, Then, And } = require("@cucumber/cucumber");
const expect = require("chai").expect;
const fs = require("fs");
const path = require("path");
const { faker } = require("@faker-js/faker");

/*-----------------------------------------------------------------------------------*/
// Captura de pantalla

async function takeScreenshotEveryStep(driver, fileNamePasoEscenario) {
  const screenshot = await driver.takeScreenshot();
  const buffer = Buffer.from(screenshot, "base64");
  const dirPath = path.join(__dirname, "screenshots_members_aleatorios");
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

/*-----------------------------------------------------------------------------------*/
// Escenario #101

When("Ir a crear un nuevo member con datos aleatorios", async function () {
  await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
  let element = await this.driver.$("a.ember-view.gh-btn.gh-btn-primary");
  await takeScreenshotEveryStep(this.driver, "1 - Ir a crear un nuevo member");
  return await element.click();
});

When(
  "Ingresar el nombre aleatorio del member {kraken-string}",
  async function (nombre) {
    const randomName = nombre;
    let element = await this.driver.$("#member-name");
    await element.setValue(randomName);
  }
);

When(
  "Ingresar el email aleatorio del member {kraken-string}",
  async function (email) {
    let randomEmail = email;
    let element = await this.driver.$("#member-email");
    await element.setValue(randomEmail);
    return await takeScreenshotEveryStep(
      this.driver,
      "2 - Ingresar datos aleatorios del member"
    );
  }
);

Then("Debería ver el nuevo member creado", async function () {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  let memberCreated = await this.driver.$("div.gh-member-details-meta");
  let isExisting = await memberCreated.isExisting();
  expect(isExisting).to.be.true;
  return await takeScreenshotEveryStep(
    this.driver,
    "3 - Debería ver el nuevo member creado"
  );
});

/*-----------------------------------------------------------------------------------*/
// Escenario #102

When("Ir a la sección members para editar el member creado", async function () {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
  let elementMemberstwoChance = await this.driver.$('a[href="#/members/"]');
  await elementMemberstwoChance.click();
  await takeScreenshotEveryStep(
    this.driver,
    "4 - Ir a la sección members para editar el member creado"
  );
});

Then(
  "Verificar que existe el member {kraken-string} a editar",
  async function (nombre) {
    let memberNameElement = await this.driver.$("h3");
    let memberName = await memberNameElement.getText();
    expect(memberName).to.include(nombre);
    await memberNameElement.click();
    await takeScreenshotEveryStep(
      this.driver,
      "5 - Verificar que existe el member"
    );
  }
);

When("Dar click en Save cambios", async function () {
  let element = await this.driver.$("//button[.//span[text()='Save']]");
  return await element.click();
});

Then("Debería ver el member editado", async function () {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
  let elementMemberstwoChance = await this.driver.$('a[href="#/members/"]');
  await elementMemberstwoChance.click();
  return await takeScreenshotEveryStep(
    this.driver,
    "6 - Debería ver el member editado"
  );
});

/*-----------------------------------------------------------------------------------*/
// Escenario #103

When(
  "Ir a la sección members para eliminar el member creado",
  async function () {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
    let elementMemberstwoChance = await this.driver.$('a[href="#/members/"]');
    await elementMemberstwoChance.click();
    await takeScreenshotEveryStep(this.driver, "7 - Ir a la sección members");
  }
);

Then(
  "Verificar que existe el member {kraken-string} creado",
  async function (nombre) {
    let memberNameElement = await this.driver.$("h3");
    let memberName = await memberNameElement.getText();
    expect(memberName).to.include(nombre);
    await memberNameElement.click();
    await takeScreenshotEveryStep(
      this.driver,
      "8 - Verificar que existe el member"
    );
  }
);

When("Borrar el member aleatorio creado", async function () {
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
  await takeScreenshotEveryStep(this.driver, "9 - Borrar el member dropdown");
  await this.driver.waitUntil(async () => {
    let deleteButton = await this.driver.$("button.mr2 span.red");
    return deleteButton && (await deleteButton.isClickable());
  });
  let deleteButton = await this.driver.$("button.mr2 span.red");
  await deleteButton.click();
  await takeScreenshotEveryStep(
    this.driver,
    "10 - Borrar el member delete button"
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
    "11 - Borrar el member confirm button"
  );
  await confirmButton.click();
});

Then(
  "No debería existir el member aleatorio {kraken-string}",
  async function (nombre) {
    let memberNameElement = await this.driver.$(
      "div.gh-list-scrolling table.gh-list tbody tr a.ember-view h3.gh-members-list-name "
    );
    let memberName = await memberNameElement.getText();
    expect(memberName).to.not.include(nombre);
    await takeScreenshotEveryStep(
      this.driver,
      "12 - No debería existir el member"
    );
  }
);

/*-----------------------------------------------------------------------------------*/
// Escenario #104

When(
  "Ir a crear un nuevo member con email aleatorio inválido",
  async function () {
    await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
    let element = await this.driver.$("a.ember-view.gh-btn.gh-btn-primary");
    await takeScreenshotEveryStep(
      this.driver,
      "13 - Ir a crear un nuevo member con email inválido"
    );
    return await element.click();
  }
);

When(
  "Ingresar el email aleatorio inválido del member {kraken-string}",
  async function (email) {
    let randomEmail = email;
    let element = await this.driver.$("#member-email");
    await element.setValue(randomEmail);
    return await takeScreenshotEveryStep(
      this.driver,
      "14 - Ingresar email aleatorio inválido del member"
    );
  }
);

Then("Debería recibir un error de email inválido", async function () {
  let responseElement = await this.driver.$(
    "form.member-basic-info-form div.form-group.max-width.error.ember-view p.response"
  );
  let responseText = await responseElement.getText();
  expect(responseText).to.include("Invalid Email.");
  await takeScreenshotEveryStep(
    this.driver,
    "15 - Debería recibir un error de email inválido"
  );

  // Volver a la sección de members
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

/*-----------------------------------------------------------------------------------*/
// Escenario #105

When(
  "Ir a crear un nuevo member con nombre aleatorio inválido",
  async function () {
    await this.driver.url("https://ghost-xefe.onrender.com/ghost/#/members");
    let element = await this.driver.$("a.ember-view.gh-btn.gh-btn-primary");
    await takeScreenshotEveryStep(
      this.driver,
      "16 - Ir a crear un nuevo member con nombre inválido"
    );
    return await element.click();
  }
);

When(
  "Ingresar el nombre aleatorio inválido del member",
  async function () {
    const randomName = faker.lorem.sentence(200);
    let element = await this.driver.$("#member-name");
    await element.setValue(randomName);
  }
);

When(
  "Ingresar el email aleatorio válido del member {kraken-string}",
  async function (email) {
    let randomEmail = email;
    let element = await this.driver.$("#member-email");
    await element.setValue(randomEmail);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return await takeScreenshotEveryStep(
        this.driver,
        "17 - Ingresar nombre inválido del member"
      );
  }
);
Then("Debería recibir un error de nombre inválido", async function () {
  let responseElement = await this.driver.$(
    ".form-group.max-width.ember-view p.response"
  );
  let responseText = await responseElement.getText();
  expect(responseText).to.include("Name cannot be longer than 191 characters.");
  await takeScreenshotEveryStep(
    this.driver,
    "18 - Debería recibir un error de nombre inválido"
  );
});
