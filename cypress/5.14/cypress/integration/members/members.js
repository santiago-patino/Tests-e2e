class members {
  controls = {
    buttonNewMember: () =>
      cy.get('a[href="#/members/new/"].ember-view.gh-btn.gh-btn-primary'),
    memberNameInput: () => cy.get("#member-name"),
    memberEmailInput: () => cy.get("#member-email"),
  };

  goToNewMember = () => {
    cy.visit("ghost" + "/#/members/new");
  };

  giveMemberName = (name) => {
    this.controls.memberNameInput().type(" ", { force: true });
    this.controls.memberNameInput().clear({ force: true });
    this.controls.memberNameInput().type(name, { force: true });
  };

  giveMemberEmail = (email) => {
    this.controls.memberEmailInput().type(email, { force: true });
  };

  goToMembers = () => {
    cy.visit("ghost" + "/#/members");
  };

  validateInfoMember = () => {
    cy.get("div.gh-member-details-meta").should("exist");
  };

  validateErrorEmptyData = () => {
    cy.get("p.response").should("contain.text", "Please enter an email.");
  };

  validateErrorInvalidEmail = () => {
    cy.get("p.response").should("contain.text", "Invalid Email.");
  };

  validateErrorInvalidName = () => {
    cy.get("p.response").should("contain.text", "Name cannot be longer than 191 characters.");
  };

  validateErrorInvalidData = () => {
    cy.get("p.response").should("contain.text", "Invalid Email.");
  };

  validateErrorExistingMember = () => {
    cy.get("p.response").should(
      "contain.text",
      "Member already exists. Attempting to add member with existing email address"
    );
  };

  confirmGoToMembers = () => {
    cy.get(
      "div.fullscreen-modal.fullscreen-modal-action.fullscreen-modal-wide section.modal-content.ember-view div.modal-footer button.gh-btn.gh-btn-red"
    )
      .should("be.visible")
      .and("be.enabled")
      .click();
  };

  verifyExistingMemberToDelete = () => {
    cy.get("h3.ma0.pa0.gh-members-list-name")
      .should("exist");
  };

  verifyExistingMember = (nombre) => {
    cy.get("h3.ma0.pa0.gh-members-list-name")
      .should("contain.text", nombre);
  };

  selectMemberToDelete = () => {
    cy.get(`a.ember-view.gh-list-data`).first().click();
  }

  selectMemberToEdit = () => {
    cy.get(`a.ember-view.gh-list-data`).first().click();
  }

  notExistMember = (nombre) => {
    cy.contains(nombre).should("not.exist");
  };
}

export default new members();
