context("Validar Login ", () => {
  it("Validar Login Satisfactorio", () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Crear una cuenta

    //login
    cy.get('a[data-target="#logInModal"]').click()
    cy.wait(2000)
    cy.get('#loginusername').type('lefedez')
    cy.wait(2000)
    cy.get('#loginpassword').type('rexmas')
    cy.wait(2000)

  it("Validar Login NO Satisfactorio", () => {});
});
