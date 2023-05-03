/// <reference types="cypress" />

describe ('Test del login', () => {
    it('Login exitoso', () => {
        cy.visit('/')
        cy.get('#user-name').type(`standard_user`)
        cy.get('#password').type(`secret_sauce`)
        cy.get('#login-button').click()
    });
});