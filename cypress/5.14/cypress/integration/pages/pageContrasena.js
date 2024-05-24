class pageContrasena {

    controls = {
        menuButton: () => cy.get('#ember31'),
        profileButton: () => cy.get('a[href=\"#/settings/staff/administrator/\"]'),
        singOutButton: () =>cy.get('a[href=\"#/signout/\"]'),
        userNameField: () =>cy.get('#user-name'),
        userLocationField: () =>cy.get('#user-location'),
        userWebsiteField: () =>cy.get('#user-website'),
        userBioField: () =>cy.get('#user-bio'),
        userPasswordOldField: () =>cy.get('#user-password-old'),
        userPasswordNewField: () => cy.get('#user-password-new'),
        userPasswordNewVerifyField: () =>cy.get('#user-new-password-verification'),
        changePasswordButton: () =>cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view span'),
        updateProfileButton: () =>cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view'),
        errorMessageUserPasswordOldField: () => cy.get('#user-password-old ~ p'),
        errorMessageUserPasswordNewField: () => cy.get('#user-password-new ~ p'),
        errorMessageUserPasswordNewVerifyField: () => cy.get('#user-new-password-verification ~ p'),
        alertSucces: () => cy.get('.gh-notification-title'),
        alertError: () => cy.get('.gh-alert.gh-alert-red .gh-alert-content'),
        saveButtonText: () => cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-green.ember-view span'),
        emailField: () => cy.get('.email'),
        passField: () => cy.get('.password'),
        submitButton: () =>cy.get('button[type="submit"]')

    }

    singIn = (username, password) =>{
        cy.wait(1000)
        this.controls.emailField().clear().type(username)
        this.controls.passField().clear().type(password)
        this.controls.submitButton().click({force: true})
    }

    goToProfile = () => {
        this.clickMenu();
        cy.screenshot("4")
        this.clickProfileButton();
        cy.url().should('contains', '/#/settings/staff/administrator');

    }

    signOut = () => {
        this.clickMenu();
        this.clickLogout();
        cy.url().should('contains', '/#/signin');
    }

    clickMenu = () =>{
        this.controls.menuButton().then(($btn) => {
            cy.wrap($btn).click({force: true});
        });
    }

    clickLogout = () => {
        this.controls.singOutButton().then(($btn) => {
            cy.wrap($btn).click({force: true});
        });
    }

    clickProfileButton = () => {
        this.controls.profileButton().then(($btn) => {
            cy.wrap($btn).click({force: true});
        });
    }

    typeFieldUserNameField = (text) => {
        this.controls.userNameField().clear().type(text, {force: true});
    }
    typeFieldUserLocationField = (text) => {
        this.controls.userLocationField().clear().type(text, {force: true});
    }
    typeFieldUserWebsiteField = (text) => {
        this.controls.userWebsiteField().clear().type(text, {force: true});
    }
    typeFieldUserBioField = (text) => {
        this.controls.userBioField().clear().type(text, {force: true});
    }

    typeFieldUserPasswordOld = (text) => {
        this.controls.userPasswordOldField().clear().type(text, {force: true});
    }

    typeFieldUserPasswordNew = (text) => {
        this.controls.userPasswordNewField().clear().type(text, { force: true});
    }

    typeFieldUserPasswordNewVerify= (text) => {
        this.controls.userPasswordNewVerifyField().clear().type(text, {force: true});
    }

    clearFieldUserPasswordOld = () => {
        this.controls.userPasswordOldField().clear({force: true});
    }

    clearFieldUserPasswordNew = () => {
        this.controls.userPasswordNewField().clear({ force: true});
    }

    clearFieldUserPasswordNewVerify= () => {
        this.controls.userPasswordNewVerifyField().clear({force: true});
    }

    changePassword = () => {
        this.controls.changePasswordButton().click({force: true});
    }

    updateProfile = () => {
        this.controls.updateProfileButton().click({force: true});
    }

    validateSuccess = (message) => {
        this.controls.alertSucces().then(($alert) => {
            expect($alert[0].innerText).to.equal(message);
        });
    }

    validateSaveprofile = (message) => {
        this.controls.saveButtonText().then(($span) => {
            expect($span[0].innerText).to.equal(message);
        });
    }

    validateError = (message) => {
        this.controls.alertError().then(($alertError) => {
            expect($alertError[0].innerText).to.equal(message);
        });
    }

    validateErrorMessageUserPasswordOldField = (message) => {
        this.controls.errorMessageUserPasswordOldField().should('contain.text', message)
    }
    validateErrorMessageUserPasswordNewField = (message) => {
        this.controls.errorMessageUserPasswordNewField().should('contain.text', message)
    }
    validateErrorMessageUserNewVerifyField = (message) => {
        this.controls.errorMessageUserPasswordNewVerifyField().should('contain.text', message)
    }
}

export default new pageContrasena();