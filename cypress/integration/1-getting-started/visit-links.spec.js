/// <reference types="Cypress" />

describe("accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("navigates to about page", () => {
    cy.findByText(/Go to the about page/i).click();
    cy.contains("Go to the main page");
  });
});
