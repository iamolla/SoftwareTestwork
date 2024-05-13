

describe('example to-do app', () => {
    
    before('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to login', () => {
      cy.contains('My Account').click()
      cy.contains('Login').click()  
      cy.get('#input-email').should('be.visible').type('codelanguage101@gmail.com') 
      cy.get('#input-password').should('be.visible').type('@olabak0805') 
      cy.get('[value="Login"]').click()
    })
 })