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

// comandos personalizados para validar login e ingreso exitoso
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


// comandos personalizados para validar carrito y compra del producto
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


// comando personalizado para registro de cuenta nueva
Cypress.Commands.add('registroCuenta', (username, password) => {
    cy.get('#signin2').click(); // se ingresa al modal Sign up
    cy.get('#signInModal').should('be.visible'); // se verifica que abra el modal
    cy.get('#sign-username').clear().type(username, { delay: 100 }); // se ingresa nuevo usuario y contraseña
    cy.get('#sign-password').clear().type(password, { delay: 100 });
    cy.contains('#signInModal .btn-primary', 'Sign up').click(); // se clickea en Sign up para registrarse
    cy.get('#signInModal').should('not.be.visible'); // se verifica que desaparezca el modal
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Sign up successful.'); // se valida que el texto del alert sea "Sign up successful."
    });
  });
