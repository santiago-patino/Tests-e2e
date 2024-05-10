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
  
    validateErrorInvalidData = () => {
      cy.get("p.response").should("contain.text", "Invalid Email.");
    };
  
   
  }
  
  export default new members();
  