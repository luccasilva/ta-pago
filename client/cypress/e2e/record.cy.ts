describe("Record Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('input[name="email"]').type("novo_caio@gmail.com");
    cy.get('input[name="password"]').type("Teste@1234");
    cy.get("form").submit();
    cy.get("a[href='/record']").click();
  });

  it("should registers a new record", () => {
    cy.get("input[name='name']").type("New Record Name");
    cy.get("input[name='description']").type("New Record Description");

    cy.get("button").contains("Cadastrar").click();

    cy.contains("Ficha cadastrada com sucesso!").should("exist");
  });

  it("should deletes a record", () => {
    cy.get("input[name='name']").type("New Record Name");
    cy.get("input[name='description']").type("New Record Description");

    cy.get("button").contains("Cadastrar").click();

    cy.get("button").contains("Deletar").first().click();

    cy.contains("Ficha removida com sucesso!").should("exist");
  });
});
