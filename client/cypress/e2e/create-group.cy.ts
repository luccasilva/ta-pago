describe("CreateGroup Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('input[name="email"]').type("novo_caio@gmail.com");
    cy.get('input[name="password"]').type("Teste@1234");
    cy.get("form").submit();
    cy.get("button").contains("+").click();
  });

  it("should create a new group", () => {
    cy.get("input[name='name']").type("New Group Name");
    cy.get("input[name='description']").type("New Group Description");

    cy.get("button").contains("Criar").click();

    cy.contains("Grupo criado com sucesso!").should("exist");
  });

  it("should join a group", () => {
    cy.get("input[name='name']").type("New Group Name");
    cy.get("input[name='description']").type("New Group Description");

    cy.get("button").contains("Criar").click();

    cy.get("input[name='group-code']")
      .invoke("val")
      .then((value) => {
        const groupValue = value; // Cast the value to a string
        cy.get("input[name='tag']").type(groupValue);
        cy.get("button").contains("Entrar").click();
      });

    cy.contains("Você entrou no grupo!").should("exist");
  });
});
