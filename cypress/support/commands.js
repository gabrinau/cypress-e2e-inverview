// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// comando personalizado para validar login e ingreso exitoso
Cypress.Commands.add('loginUsuario', (username, password) => {
    cy.get('#login2').click(); // se ingresa al login
    cy.get('#loginusername').clear().type(username, { delay: 100 }); // se ingresa usuario existente y contraseña (con delays para registrar cada letra)
    cy.get('#loginpassword').clear().type(password, { delay: 100 });
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('#logInModal').should('not.be.visible'); // verificando que desaparezca el modal
  });

Cypress.Commands.add('ingresoExitoso', (username) => {
    cy.get('#nameofuser').should('contain', `Welcome ${username}`);
  });


// comando personalizado para validar carrito y compras
Cypress.Commands.add('agregarProducto', (productName) => {
    cy.contains('.hrefch', productName).click(); // se clickea en el producto
    cy.contains('a', 'Add to cart').click(); // se clickea en el botón 'Add to cart'
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Product added.'); // se valida que el texto del alert sea "Product added."
    });
  });

Cypress.Commands.add('finalizarCompra', (name, country, city, card, month, year) => {
    cy.get('#cartur').click(); // se clickea en el carrito
    cy.contains('button', 'Place Order').click(); // se clickea en colocar orden
    cy.get('#orderModal').should('be.visible'); // se asegura de que orderModal sea visible
    // completar formulario
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
    cy.contains('button', 'Purchase').click(); // se clickea en purchase
    cy.get('.sweet-alert').should('be.visible'); // asegurarse de que aparezca alert de confirmación
    cy.get('.confirm').click(); // se clickea en el botón Ok
});
