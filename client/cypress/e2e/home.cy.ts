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

  it("should navigate to the user group page", () => {
    cy.get("button").contains("+").click();

    cy.get("input[name='name']").type("New Group Name");
    cy.get("input[name='description']").type("New Group Description");

    cy.get("button").contains("Criar").click();

    cy.get("input[name='group-code']")
      .invoke("val")
      .then((value) => {
        const groupValue = value;
        cy.get("input[name='tag']").type(groupValue);
        cy.get("button").contains("Entrar").click();
      });

    cy.contains("Você entrou no grupo!").should("exist");

    cy.get("a[href='/home']").click();

    cy.get('a[href^="/group/"]').eq(1).click();
    cy.get("#group-name").should("contain.text", "New Group Name");
  });
});
