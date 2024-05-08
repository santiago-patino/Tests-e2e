class checkPage{
    // Variables para crear Page
    
    elements = {
        NewPageUrl: () => cy.get('[href="#/editor/page/"]'),
        PageUrl: () => cy.get('[href="#/pages/"]'),
        checkCreatedPage: () => cy.get('.gh-post-bookmark-title'),
        checkMessageUpdated : () => cy.get('.gh-notification-title'),
    }

     // ver lista de Page
    PageUrl = () =>{
        cy.wait(1500)
        this.elements.PageUrl().click()
    }

    // Hace click al Page 'New-Page'
    NewPageUrl = () =>{
        cy.wait(1500)
        this.elements.NewPageUrl().click()
    }

    // Validar creación de page
    checkCreatedPage = (namepage) =>{
        cy.wait(500)
        this.elements.checkCreatedPage().should('have.text', namepage);
    }

   // Validar mensaje de modificado
    checkMessageUpdated = () =>{
        cy.wait(500)
        this.elements.checkMessageUpdated().should('have.text', 'Updated');
    } 

}

export default new checkPage();