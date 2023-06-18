describe("Exercise Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('input[name="email"]').type("novo_caio@gmail.com");
    cy.get('input[name="password"]').type("Teste@1234");
    cy.get("form").submit();
    cy.get("a[href='/exercise']").click();
  });

  it("should display the exercise form", () => {
    cy.get("form").should("exist");
    cy.get('input[name="name"]').should("exist");
    cy.get('input[name="weight"]').should("exist");
    cy.get('input[name="repetitions"]').should("exist");
    cy.get('input[name="breakTime"]').should("exist");
    cy.contains("Cadastrar").should("exist");
  });

  it("should register a new exercise and display it", () => {
    const exerciseData = {
      name: "Exercise 1",
      weight: "10",
      repetitions: "5",
      breakTime: "30",
    };

    cy.get('input[name="name"]').type(exerciseData.name);
    cy.get('input[name="weight"]').type(exerciseData.weight);
    cy.get('input[name="repetitions"]').type(exerciseData.repetitions);
    cy.get('input[name="breakTime"]').type(exerciseData.breakTime);
    cy.get("form").submit();

    cy.contains("Exercicio cadastrado com sucesso!").should("exist");
  });
});
