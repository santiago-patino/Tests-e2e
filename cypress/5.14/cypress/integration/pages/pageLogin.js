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

    singInWithUserNameAndPassword = (username, password) =>{
        cy.wait(1000)
        cy.get('.email').clear().type(username)
        cy.get('.password').clear().type(password)
        cy.get('button[type="submit"]').click()
    }

    singInWithEmptyFields = () =>{
        cy.wait(1000)
        cy.get('.email').clear()
        cy.get('.password').clear()
        cy.get('button[type="submit"]').click()
    }

}

export default new pageLogin();