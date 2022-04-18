/// <reference types="Cypress" />

describe("accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });
  it("has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  it("navigates to page 2 and checks for accessibility violations", () => {
    cy.findByText(/Go to the about page/i)
      .click()
      .checkA11y();
  });
  it("focuses on the footer link and asserts its attributes", () => {
    cy.findAllByText("Gatsby").focus();

    cy.focused()
      .should("have.text", "Gatsby")
      .should("have.attr", "href", "https://www.gatsbyjs.com")
      .should("not.have.css", "outline-width", "0px");
  });
});
