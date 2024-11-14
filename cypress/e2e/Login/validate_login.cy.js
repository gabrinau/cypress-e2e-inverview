context("Validar Registro", () => {

  it("Validar Registro Satisfactorio", () => {
    cy.visit('https://www.demoblaze.com/index.html') 
    cy.get('#signin2').click()
    cy.get('#sign-username').type('cristianmpm12')
    cy.get('#sign-password').click()
    cy.get('#sign-password').type('123456')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(1000)
    cy.on('window:alert',(t)=>{
      expect(t).to.equal('Sign up successful.')
    })
  });

});

context("Validar Login", () => {

  it("Validar login Satisfactorio", () => {
    stepsLogin()
    cy.wait(3000)
    cy.get('#nameofuser').should('contain', 'Welcome')
  });

  it("Validar Login NO Satisfactorio", () => {});
});

function stepsLogin() {
  cy.visit('https://www.demoblaze.com/index.html') 
  cy.get('#login2').click()
  cy.wait(1000)
  cy.get('#loginusername').type("cristianmpm")
  cy.get('#loginpassword').type('123456')
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
}

context("Validar Agregar producto", () => {

  it("Validar producto agregado al carro exitoso con usuario logeado", () => {
    stepsLogin()
    cy.wait(3000)
    stepsAddProduct()
    cy.wait(3000)
    cy.on('window:alert',(t)=>{
      expect(t).to.equal('Product added.')
    })
  });
});

function stepsAddProduct() {
  cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
  cy.wait(3000)
  cy.get('.col-sm-12 > .btn').click()
}

context("Validar Proceso de compra", () => {

  it("Validar producto agregado al carro exitoso con usuario logeado", () => {
    stepsLogin()
    cy.wait(3000)
    stepsAddProduct()
    cy.wait(3000)
    cy.on('window:alert',(t)=>{
      expect(t).to.equal('Product added.')
    })
    cy.get('#cartur').click()
    cy.wait(3000)
    cy.get('.col-lg-1 > .btn').click()
    cy.wait(1000)
    cy.get('#name').type('Cristian Peñaloza')
    cy.get('#country').type('Chile')
    cy.get('#city').type('Santiago')
    cy.get('#card').type('1234123412341234')
    cy.get('#month').type('03')
    cy.get('#year').type("2024")
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(3000)
    cy.get('.sweet-alert > h2').should('contain', 'Thank you for your purchase!')
    cy.get('.lead').should('contain', 'Id')
    cy.get('.lead').should('contain', 'Amount')
    cy.get('.lead').should('contain', 'Card Number')
    cy.get('.lead').should('contain', 'Name')
    cy.get('.lead').should('contain', 'Date')
  });
});
