class pagePage{
    // Variables para crear page
    
    elements = {
    
        //Validaciones
        validateCreatedPage: () => cy.get('.gh-post-bookmark-title'),
        validateMessageUpdated : () => cy.get('.gh-notification-title'),
        validateDeletePage : () => cy.get('h3.gh-content-entry-title'),

        //Management
        titleInput: () => cy.get('[placeholder="Page title"]'),
        descriptionInput: () => cy.get('.koenig-editor__editor'),        
        publishPageButton: () => cy.get('.gh-publish-trigger'),
        FinalpublishPageButton: () => cy.get('.gh-publish-cta'),
        confirmPageButton: () => cy.get('.gh-btn-pulse'),        
        selectPage: () => cy.get('.gh-content-entry-title'),
        backEditor: () => cy.get('.gh-back-to-editor'),

        updatePage: () => cy.get('.gh-editor-save-trigger'),

        menuSettingsPage: () => cy.get('[title="Settings"]'),
        deletePage: () => cy.get('.settings-menu-delete-button'),
        confirmDeletePage: () => cy.get('.gh-btn-red'),

    }


    //-------------------------------------
    
    // Validar la creación de page
    validateCreatedPage = (namepage) =>{
        cy.wait(500)
        this.elements.validateCreatedPage().should('have.text', namepage);
    }

    // Validar mensaje de modificado
    validateMessageUpdated = () =>{
        cy.wait(500)
        this.elements.validateMessageUpdated().should('have.text', 'Updated');
    } 

    // Validar page eliminada
    validateDeletePage = (namepage) =>{
        cy.wait(500)
        this.elements.validateDeletePage().each(($el) => {
            const text = $el.text().trim(); 
            expect(text).not.to.contain(namepage);
        });
    }


    
    // Ingresar el titulo del page
    titleInput = (namepage) =>{
        cy.wait(1500)
        this.elements.titleInput().type(namepage)
    }
    
    // Ingresar la descripción del page
    descriptionInput = (textpage) =>{
        cy.wait(1500)
        this.elements.descriptionInput().type(textpage)
        cy.wait(3000)
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