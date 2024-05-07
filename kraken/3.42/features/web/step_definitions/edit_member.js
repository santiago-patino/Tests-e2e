const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("Dar click en Save para actualizar", async function () {
    let element = await this.driver.$("header.gh-canvas-header-content section.view-actions button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view");
    return await element.click();
  });