const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I go to new post form', async function () {
    let elementNewPost = await this.driver.$(".gh-nav-new-post");
    return await elementNewPost.click();
});

When('I create a post with title {kraken-string} and content {kraken-string}', async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    return await elementContent.setValue(content);
});

When('I return to posts list', async function () {
    let returnButton = await this.driver.$(".gh-editor-header > .items-center > a");
    return await returnButton.click();
});

When('I go to drafts', async function () {
    let elementPostsButton = await this.driver.$("a[href='#/posts/?type=draft']");
    return await elementPostsButton.click();
});

Then('I check the post with name {kraken-string} is listed', async function (name) {
    let postTitle = await this.driver.$(".posts-list").$(".//*//h3[text() = '" + name + "']");
    return expect(postTitle).to.exist;
});

Then('I check the post with name {kraken-string} is not listed', async function (name) {
    let posts = await this.driver.$$("h3.gh-content-entry-title");
    const postItems = await Promise.all(posts.map(option => option.getText()));
    return expect(postItems).not.contain(name);
});

When('I select the listed post with name {kraken-string}', async function (name) {
    let publishedPosts = await this.driver.$$("h3[class$='gh-content-entry-title']");
    for (let post of publishedPosts) {
        if (await post.getText() === name) {
            await post.click();
            break;
        }
    }
});

When('I delete the post', async function () {
    let menuButton = await this.driver.$("button.settings-menu-toggle");
    await menuButton.click();
    await new Promise(r => setTimeout(r, 3000))
    let deleteButton = await this.driver.$("button.settings-menu-delete-button");
    await deleteButton.click();
    let modalButton = await this.driver.$(".modal-content > .modal-footer > .gh-btn-red");
    return await modalButton.click();
});