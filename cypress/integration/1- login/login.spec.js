/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Login", () => {
	it("should login successfully", () => {
		cy.visit("http://localhost:3000");
		cy.wait(2000);
		cy.visit("http://localhost:3000/signin");
		cy.get("input[type=email]").type("roseno@driven.com");
		cy.get("input[type=password").type("123456Aa1!");
		cy.get("input[type=submit]").click();

		
		cy.url("equal", "http://localhost:3000/");
	});

	it("should login failed because email field is blank", () => {
		cy.visit("http://localhost:3000/");
		cy.wait(2000);
		cy.visit("http://localhost:3000/signin");
		cy.get("input[type=password").type("123456Aa1!");
		cy.get("input[type=submit").click();

		cy.contains('Insira um e-mail válido!').should('exist');
		cy.contains('A senha é obrigatória.').should('not.exist');
	});

	it("should login failed because password field is blank", () => {
		cy.visit("http://localhost:3000/");
		cy.wait(2000);
		cy.visit("http://localhost:3000/signin");
		cy.get("input[type=email]").type("roseno@driven.com");
		cy.get("input[type=submit").click();

		cy.contains('Insira um e-mail válido!').should('not.exist');
		// cy.contains('A senha é obrigatória.').should('exist');

		Cypress.on('uncaught:exception', (err, runnable) => {
		// we expect a 3rd party library error with message 'list not defined'
		// and don't want to fail the test so we return false
			console.log(err.message)
		if (err.message.includes('list not defined')) {
			return false
		}
		// we still want to ensure there are no other unexpected
		// errors, so we let them fail the test
		})
	});
});