context("Validar Login", () => {
  it("Validar Login Satisfactorio", () => {
    cy.visit('https://www.demoblaze.com/index.html'); // se ingresa a la plataforma

    cy.get('#login2').click(); // se ingresa al login
    cy.get('#loginusername').clear().type('marti123', { delay: 100 }); // se ingresa usuario existente y contraseña (con delays para registrar cada letra)
    cy.get('#loginpassword').clear().type('marti456', { delay: 100 });
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // se clickea en el botón del modal Login
    cy.get('#logInModal').should('not.be.visible'); // verificando que desaparezca el modal
    cy.get('#nameofuser').should('contain', 'Welcome marti123'); // ingreso exitoso
  });
});
