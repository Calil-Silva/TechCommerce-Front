/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Login", () => {

	it("should login failed and an alert message appears because email field is blank", () => {
		cy.visit("http://localhost:3000/");
		cy.wait(2000);
		cy.visit("http://localhost:3000/signin");
		cy.get("input[type=password").type("123456Aa1!");
		cy.get("input[type=submit").click();

		cy.contains('Insira um e-mail válido!').should('exist');
		cy.contains('A senha é obrigatória.').should('not.exist');
	});

	it("should login failed and an alert message appears because password field is blank", () => {
		cy.visit("http://localhost:3000/");
		cy.wait(2000);
		cy.visit("http://localhost:3000/signin");
		cy.get("input[type=email]").type("roseno@driven.com");
		cy.get("input[type=submit").click();
		cy.contains('Insira um e-mail válido!').should('not.exist');
		cy.contains('A senha é obrigatória.').should('exist');
	});

	it("should return status code 404 in Login request if user not exist", () => {
		// eslint-disable-next-line jest/valid-expect-in-promise
		cy.request({
		method: 'POST',
		url: 'http://localhost:4000/signin',
		body: {email:"arlindo@gmail.com",
    		   password: "1234567"},
		failOnStatusCode: false
		})
		.then(response => {
			// eslint-disable-next-line jest/valid-expect
			expect(response.status).to.equal(404);
		})
	});

	it("should return status code 200 in login request is successful.", () => {
		// eslint-disable-next-line jest/valid-expect-in-promise
		cy.request({
		method: 'POST',
		url: 'http://localhost:4000/signin',
		body: {email:"roseno@driven.com",
    		   password: "123456Aa1!"},
		failOnStatusCode: false
		})
		.then(response => {
			// eslint-disable-next-line jest/valid-expect
			expect(response.status).to.equal(200);
		})
	});


	it("should go back to the previous page if the login request is successful.", () => {
		const previousPage = "http://localhost:3000";
		cy.visit(previousPage); //previous page
		cy.wait(2000);
		cy.visit("http://localhost:3000/signin");
		cy.get("input[type=email]").type("roseno@driven.com");
		cy.get("input[type=password").type("123456Aa1!");
		cy.get("input[type=submit]").click();

		
		cy.url("equal", "previousPage");
	});
});