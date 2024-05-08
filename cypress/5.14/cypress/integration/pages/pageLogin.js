class pageLogin {
    
    user = 's.patino@uniandes.edu.co';
    pass = 'admin-uniandes';

    singIn = () =>{
        cy.wait(1000)
        cy.get('.email').clear().type(this.user)
        cy.get('.password').clear().type(this.pass)
        cy.get('button[type="submit"]').click()
    }

    check = () =>{
        cy.wait(1000)
        cy.url().should('contains', '/#/dashboard')
    }

}

export default new pageLogin();