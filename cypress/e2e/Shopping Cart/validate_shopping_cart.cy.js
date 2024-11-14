context("Agregar productos", () => {
    it("Agrega productos al carrito satisfactoriamente", () => {
    // verificación del login
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#login2').click(); // se ingresa al login
      cy.get('#loginusername').clear().type('marti123', { delay: 100 }); 
      cy.get('#loginpassword').clear().type('marti456', { delay: 100 });
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); 
      cy.get('#logInModal').should('not.be.visible');
      cy.get('#nameofuser').should('contain', 'Welcome marti123');

      // agregar un producto al carrito (Samsung Galaxy S6)
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click(); // se clickea en el producto
      cy.get('a[href="#"]').contains('Add to cart').click(); // se clickea en el botón que contiene add to cart
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.eq('Product added.'); // se valida que el texto del alert sea "Product added."
      }); 
    })
  })