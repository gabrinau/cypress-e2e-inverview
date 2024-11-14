context("Registrar cuenta", () => {
    it("Validar Registro de cuenta Satisfactorio", () => {
      cy.visit('https://www.demoblaze.com/index.html'); // se ingresa a la plataforma
  
      cy.get('#signin2').click(); // se ingresa al modal Sign up
      cy.get('#signInModal').should('be.visible'); // se verifica que abra el modal
      cy.get('#sign-username').clear().type('marti002', { delay: 100 }); // se ingresa nuevo usuario y contraseña
      cy.get('#sign-password').clear().type('marti456', { delay: 100 });
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // se clickea en Sign up para registrarse
      cy.get('#signInModal').should('not.be.visible'); // verificando que desaparezca el modal
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.eq('Sign up successful.'); // se valida que el texto del alert sea "Sign up successful."
      }); 
    });
  });