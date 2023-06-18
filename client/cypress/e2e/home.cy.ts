describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('input[name="email"]').type("novo_caio@gmail.com");
    cy.get('input[name="password"]').type("Teste@1234");
    cy.get("form").submit();
  });

  it("displays user's name", () => {
    cy.get("h3").should("contain.text", "Olá John Doe!");
  });

  it("navigates to Exercise page when 'Meus Exercícios' card is clicked", () => {
    cy.get("a[href='/exercise']").click();
    cy.url().should("include", "/exercise");
  });

  it("navigates to Record page when 'Minhas Fichas' card is clicked", () => {
    cy.get("a[href='/record']").click();
    cy.url().should("include", "/record");
  });

  it("navigates to Create Group page when '+' button is clicked", () => {
    cy.get("button").contains("+").click();
    cy.url().should("include", "/group/create");
  });
});
