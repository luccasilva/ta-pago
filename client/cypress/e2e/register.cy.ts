describe("Register Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });

  it("should display the registration form", () => {
    cy.get("form").should("exist");
    cy.get('input[name="name"]').should("exist");
    cy.get('input[name="email"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.contains("Cadastrar").should("exist");
  });

  it("should redirect to login page after successful registration", () => {
    cy.get('input[name="name"]').type("John Doe");
    cy.get('input[name="email"]').type("novo_caio@gmail.com");
    cy.get('input[name="password"]').type("Teste@1234");
    cy.get("form").submit();
    cy.url().should("include", "/");
    cy.contains("Cadastro realizado com sucesso!").should("exist");
  });
});
