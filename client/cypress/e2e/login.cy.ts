// login.spec.ts
/// <reference types="Cypress" />

describe("Login Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the login form", () => {
    cy.get("form").should("exist");
    cy.get('input[name="email"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.contains("Logar").should("exist");
  });

  it("should show an error message for invalid credentials", () => {
    cy.get('input[name="email"]').type("invalid@example.com");
    cy.get('input[name="password"]').type("wrongpassword");
    cy.get("form").submit();
    cy.contains("User does not exist!").should("exist");
  });

  it("should redirect to home page after successful login", () => {
    cy.get('input[name="email"]').type("caio@gmail.com");
    cy.get('input[name="password"]').type("Teste@1234");
    cy.get("form").submit();
    cy.url().should("include", "/home");
    cy.contains("Logado com sucesso!").should("exist");
  });

  it("should navigate to the registration page when 'Cadastre-se' button is clicked", () => {
    cy.contains("Cadastre-se").click();
    cy.url().should("include", "/register");
  });
});
