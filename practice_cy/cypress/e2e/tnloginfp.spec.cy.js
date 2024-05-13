

describe('example to-do app', () => {
    
    before('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to reset password', () => {
      cy.contains('My Account').click()
      cy.contains('Login').click()  
      cy.get('#input-email').type('codelanguage101@gmail.com') 
      cy.get('#input-password').type('@olabak')   
      cy.contains('Forgotten Password').click()
      cy.get('#input-email').type('codelanguage101@gmail.com')
      cy.get('[value="Continue"]').click()
     })
 })