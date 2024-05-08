class newPage{
    // Variables para crear page
    
    elements = {
        nameInput: () => cy.get('[placeholder="Page title"]'),
        textInput: () => cy.get('.koenig-editor__editor'),        
        publishPageButton: () => cy.get('.gh-publish-trigger'),
        FinalpublishPageButton: () => cy.get('.gh-publish-cta'),
        confirmPageButton: () => cy.get('.gh-btn-pulse'),        
        selectPage: () => cy.get('.gh-content-entry-title'),
        backEditor: () => cy.get('.gh-back-to-editor'),

        updatePage: () => cy.get('.gh-editor-save-trigger'),
    }


    //-------------------------------------
    
    
    // Ingresar el titulo del page
    nameInput = (namepage) =>{
        cy.wait(1500)
        this.elements.nameInput().type(namepage)
    }
    
    // Ingresar la descripción del page
    textInput = (textpage) =>{
        cy.wait(1500)
        this.elements.textInput().type(textpage)
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


}

export default new newPage();