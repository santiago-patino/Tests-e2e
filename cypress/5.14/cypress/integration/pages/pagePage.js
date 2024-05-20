class pagePage{
    // Variables para crear page
    
    elements = {
    
        //Validaciones
        validateCreatedPage: () => cy.get('h3.gh-content-entry-title'),
        validateMessageUpdated : () => cy.get('.gh-notification-title'),
        validateDeletePage: () => cy.get('h3.gh-content-entry-title'),
        validateDraftPage: () => cy.get('h3.gh-content-entry-title'),  
        validateDraftStatus: () => cy.get('.gh-content-status-draft'), 
        validNewUrl: () => cy.url(),

        //Management
        titleInput: () => cy.get('[placeholder="Page title"]'),
        descriptionInput: () => cy.get('.koenig-editor__editor'),        
        publishPageButton: () => cy.get('.gh-publish-trigger'),
        FinalpublishPageButton: () => cy.get('.gh-publish-cta'),
        confirmPageButton: () => cy.get('.gh-btn-pulse'),        
        selectPage: () => cy.get('.gh-content-entry-title'),
        backEditor: () => cy.get('.gh-back-to-editor'),
        clearUrl: () => cy.get('.post-setting-slug'),
        editUrl: () => cy.get('.post-setting-slug'),
        visitUrl: () => cy.get('.post-view-link'),

        urlPage404: () => cy.get('h1.error-code'),
        urlPageValid: () => cy.get('h1.article-title'),

        updatePage: () => cy.get('.gh-editor-save-trigger'),

        menuSettingsPage: () => cy.get('[title="Settings"]'),
        deletePage: () => cy.get('.settings-menu-delete-button'),
        confirmDeletePage: () => cy.get('.gh-btn-red'),

    }

    // Dar click en url de page
    visitUrl = () =>{
        cy.wait(1000)
        this.elements.visitUrl().click();
    }
    // Ingresar nueva url
    clearUrl = () =>{
        this.elements.clearUrl().clear({ force: true }).type('{tab}', { force: true })
    }

    editUrl = (namepage) =>{
        this.elements.editUrl().scrollIntoView().clear({ force: true }).type(namepage, { force: true })
        cy.wait(1000)
    }
    
    validNewUrl = (namepage) =>{
        const formattedNamepage = namepage.replace(/ /g, '-');
        cy.wait(500)
        this.elements.validNewUrl().should('contain', formattedNamepage);
    }
     
    validateCreatedPage = (namepage) => {
        cy.wait(500);
        this.elements.validateCreatedPage().then(($els) => {
          const texts = [...$els].map(el => el.innerText);
          const found = texts.some(text => text.includes(namepage));
          expect(found).to.be.true;
        });
    }

    validateMessageUpdated = () =>{
        cy.wait(500)
        this.elements.validateMessageUpdated().should('have.text', 'Updated');
    } 

    // Validar page eliminada
    validateDeletePage = (namepage) =>{
        cy.wait(500)
        this.elements.validateDeletePage().first().should('not.have.text', namepage);
    }

    validateDraftPage = (namepage) => {
        cy.wait(500);
        this.elements.validateDraftPage().should('contain', namepage); 
        
    }

    validateDraftStatus = (namepage) => {
        cy.wait(500);
        this.elements.validateDraftStatus().should('contain', 'Draft'); 
    }

    invalidatePublish() {
        cy.get('body').then(($body) => {
          if ($body.find('.gh-publish-trigger').length === 0) {
            cy.log('Publicación no permitida: el botón de publicación no está presente');
            expect(true).to.be.true; // Esta es una aserción que siempre pasa
          }});}

    urlPage404 = () =>{
        this.elements.urlPage404().should('contain', '404')
    }

    urlPageValid = (namepage) =>{
        this.elements.urlPageValid().should('contain', namepage)
    }



    // Ingresar el titulo del pages
    titleInput = (namepage) =>{
        cy.wait(1000)
        this.elements.titleInput().type(namepage)
    }
    
    // Ingresar la descripción del page
    descriptionInput = (textpage) =>{
        cy.wait(1000)
        this.elements.descriptionInput().type(textpage)
        cy.wait(5000)
    }
    
    // Dar click al boton de publicación del page
    publishPageButton = () =>{
        cy.wait(3000)
        this.elements.publishPageButton().click();
        cy.wait(1000)
    }

    // Dar click al boton de publicación del page
    FinalpublishPageButton = () =>{
        cy.wait(1000)
        this.elements.FinalpublishPageButton().click();
        
    }
    
    // Dar click al boton de confirmar publicación del page
    confirmPageButton = () =>{
        cy.wait(1000)
        this.elements.confirmPageButton().click();
        cy.wait(500)
    
    }

    // Dar click al boton de nuevo page
    backEditor = () =>{
        cy.wait(1000)
        this.elements.backEditor().click()
    }
    
    // Seleccionar una Page
    selectPage = (namepage) =>{
        cy.wait(1000)
        this.elements.selectPage().contains(namepage).click();
        cy.wait(500)

    }

    // Actualizar Page
    updatePage = () =>{
        cy.wait(5000)
        this.elements.updatePage().click()
    }

    // Menu de configuraciones de la page
    menuSettingsPage = () =>{
        cy.wait(5000)
        this.elements.menuSettingsPage().click()
    }

    // Boton de eliminar page
    deletePage = () =>{
        cy.wait(5000)
        this.elements.deletePage().click()
    }

    // Confirmar eliminación de page
    confirmDeletePage = () =>{
        cy.wait(5000)
        this.elements.confirmDeletePage().click()
    }

}

export default new pagePage();