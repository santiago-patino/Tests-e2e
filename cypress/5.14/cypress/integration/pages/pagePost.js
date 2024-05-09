class pagePost {
    
    controls = {
        createButton: () => cy.get('[title="New post"]'),
        titleEditor: () => cy.get('[placeholder="Post title"]'),
        descriptionEditor: () => cy.get('.koenig-editor__editor'),
        tagControlEditor: () => cy.get('#tag-input'),
        tagOptionEditor: () => cy.get('.ember-power-select-option'),
        publishButton: () => cy.get('.gh-publish-trigger'),
        buttonConfirmPublish1: () => cy.get('.gh-publish-cta'),
        buttonConfirmPublish2: () => cy.get('.gh-btn-pulse'),
        confirmationPublishTitle: () => cy.get('.gh-post-bookmark-title'),
        homeUserTitlePost: () => cy.get('h2.post-card-title'),
        userTitlePost: () => cy.get('.article-title'),
        updateEditorButton: () => cy.get('.gh-editor-save-trigger'),
        updateNotificationPost: () => cy.get('.gh-notification'),
        updateTextNotificationPost: () => cy.get('.gh-notification-title'),
        postsTitleList: () => cy.get('h3.gh-content-entry-title'),
        settigsPostEditor: () => cy.get('[title="Settings"]'),
        deleteButtonEditor: () => cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button'),
        confirmDeleteButtonEditor: () => cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view'),
        statusEditor: () => cy.get(".gh-editor-post-status span div"),
        errorCodeUser: () => cy.get(".error-code"),                                         
    }

    createButton = () => {
        this.controls.createButton().click();
    }

    titleEditor = (title) =>{
        this.controls.titleEditor().type(title);
    }

    descriptionEditor = (description) =>{
        this.controls.descriptionEditor().type(description);
    }

    tagControlEditor = () =>{
        this.controls.tagControlEditor().click();
    }

    tagOptionEditor = () =>{
        this.controls.tagOptionEditor().click();
    }

    publishButton = () =>{
        this.controls.publishButton().click();
    }

    buttonConfirmPublish1 = () =>{
        this.controls.buttonConfirmPublish1().click();
    }

    buttonConfirmPublish2 = () =>{
        this.controls.buttonConfirmPublish2().click();
    }

    confirmationPublishTitle = (title) =>{
        this.controls.confirmationPublishTitle().should('have.text', title);
    }

    homeUserTitlePost = (title) =>{
        cy.contains(this.controls.homeUserTitlePost(), title).click();
    }

    userTitlePost = (title) =>{
        this.controls.userTitlePost().should('have.text', title);
    }

    updateEditorButton = () =>{
        this.controls.updateEditorButton().click();
    }

    updateNotificationPost = () =>{
        this.controls.updateNotificationPost().should('exist');
        this.controls.updateTextNotificationPost().should('have.text', "Updated");
    }

    postsTitleList = (title) =>{
        cy.contains(title).click();
    }

    settigsPostEditor = () =>{
        this.controls.settigsPostEditor().click();
    }

    deleteButtonEditor = () =>{
        this.controls.deleteButtonEditor().click();
    }

    confirmDeleteButtonEditor = () =>{
        this.controls.confirmDeleteButtonEditor().click();
    }

    statusEditor = (text) => {
        cy.contains(text).should("exist");
       // this.controls.statusEditor().should('have.text', text);
    }

    errorCodeUser = (errorCode) =>{
        this.controls.errorCodeUser().should('have.text', errorCode);
    }
    

}

export default new pagePost();