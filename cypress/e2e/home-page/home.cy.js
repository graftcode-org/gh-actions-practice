/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("/");
  });

  it("renders the App header", () => {
    cy.get(".App-header").should("have.length", 1);
  });

  it("renders the react logo", () => {
    cy.get("img.App-logo1").should("have.length", 1);
  });

  it("renders link to react documentation", () => {
    cy.get("a.App-link").should("have.length", 1);
  });
});
