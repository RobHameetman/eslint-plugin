/// <reference types="cypress" />

describe('Homepage Tests', () => {
  it('successfully loads', () => {
    cy.visit('https://www.example.com');
    cy.get('h1').contains('Welcome');
  });
});
