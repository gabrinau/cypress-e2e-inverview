context("Agregar productos", () => {
    it("Validar compra de productos Exitoso", () => {
    // agregar un producto al carrito (Samsung Galaxy S6)
      cy.visit('https://www.demoblaze.com/index.html'); // se ingresa a la página
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click(); // se clickea en el producto
      cy.get('a[href="#"]').contains('Add to cart').click(); // se clickea en el botón que contiene add to cart
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.eq('Product added.'); // se valida que el texto del alert sea "Product added."
      }); 

      // finalizar compra
      cy.get('#cartur').click(); // se clickea en el carrito
      cy.get('button[data-toggle="modal"][data-target="#orderModal"]').click(); // se clickea en colocar la orden
      cy.get('#orderModal').should('be.visible'); // se asegura de que orderModal sea visible
        // completar formulario
      cy.get('#name').type('Martina');
      cy.get('#country').type('Chile');
      cy.get('#city').type('Santiago');
      cy.get('#card').type('5224539431061072');
      cy.get('#month').type('10');
      cy.get('#year').type('25');

        // últimos pasos
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // se clickea en purchase
      cy.get('.sweet-alert').should('be.visible'); // asegurarse de que aparezca alert de confirmación
      cy.get('.confirm').click() // se clickea en el botón Ok
      //cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click() // se clickea en close para cerrar modal
      cy.reload(); // se actualiza el estado
      cy.get('tr.success').should('not.exist'); // se verifica que no hay productos en el carrito
    })
  })