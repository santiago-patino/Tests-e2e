class login {
    
    user = 's.patino@uniandes.edu.co';
    pass = 'admin-uniandes';

    singIn = () =>{
        cy.get('.email').clear().type(this.user)
        cy.get('.password').clear().type(this.pass)
        cy.get('button[type="submit"]').click()
    }

    check = () =>{
        cy.wait(1000)
        cy.url().should('contains', '/#/site')
    }

}

export default new login();