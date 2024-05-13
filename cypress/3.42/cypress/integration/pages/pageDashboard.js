class pageDashboard{
    // Variables para crear page
    
    elements = {
        //Pages
        listPageUrl: () => cy.get('[href="#/pages/"]'),
        createPageUrl: () => cy.get('[href="#/editor/page/"]'),

    }


    //-------------------------------------
    
    // ver listado de Page publicadas y borrador
    listPageUrl = () =>{
        cy.visit('/ghost')
        cy.wait(3000)
        this.elements.listPageUrl().first().click()
    }

    // Creación de nueva Page
    createPageUrl = () =>{
        cy.wait(1500)
        this.elements.createPageUrl().first().click()
    }


}

export default new pageDashboard();