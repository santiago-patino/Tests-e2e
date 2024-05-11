class pageContrasena {

    controls = {
        menuButton: () => cy.get('.gh-nav-bottom').children('div[role=button]'),
        profileButton: () => cy.get('a[href=\"#/staff/administrator/\"]'),
        singOutButton: () =>cy.get('a[href=\"#/signout/\"]'),
        userPasswordOldField: () =>cy.get('#user-password-old'),
        userPasswordNewField: () => cy.get('#user-password-new'),
        userPasswordNewVerifyField: () =>cy.get('#user-new-password-verification'),
        changePasswordButton: () =>cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view span'),
        errorMessageUserPasswordOldField: () => cy.get('#user-password-old ~ p'),
        errorMessageUserPasswordNewField: () => cy.get('#user-password-new ~ p'),
        errorMessageUserPasswordNewVerifyField: () => cy.get('#user-new-password-verification ~ p'),
        alertSucces: () => cy.get('.gh-notification-title'),
        alertError: () => cy.get('.gh-alert.gh-alert-red .gh-alert-content'),
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
        cy.screenshot("4");
        this.clickProfileButton();
        cy.url().should('contains', '/#/staff/administrator');

    }

    signOut = () => {
        this.clickMenu();
        this.clickLogout();
        cy.url().should('contains', '/#/signin');
    }

    clickMenu = () =>{
        this.controls.menuButton().then(($btn) => {
            cy.wrap($btn).click({force: true});
            Cypress.on('uncaught:exception', () => false);
         });
    }

    clickLogout = () => {
        this.controls.singOutButton().then(($btn) => {
            cy.wrap($btn).click({force: true});
            Cypress.on('uncaught:exception', () => false);
        });
    }

    clickProfileButton = () => {
        this.controls.profileButton().then(($btn) => {
            cy.wrap($btn).click({force: true});
            Cypress.on('uncaught:exception', () => false);
        });
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


    validateSuccess = (message) => {
        this.controls.alertSucces().then(($alert) => {
            expect($alert[0].innerText).to.equal(message);
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