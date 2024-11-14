const faker = require('faker');
const usuario = faker.internet.userName(); 
const contrasena = faker.internet.password(); 

describe('Pruebas de Login con Faker', () => {

  it('Generacion de usuario y compra exitosa', () => {

    cy.visit('/');

    // Creacion de usuario
    cy.get('#signin2').click().wait(2000)

    
    cy.get('#sign-username').type(usuario);

    cy.get('#sign-password').type(contrasena)
    
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    

    
    // login
    cy.get('a[data-target="#logInModal"]').click()

    
    cy.get('#loginusername').type(usuario).wait(2000)
    
    cy.get('#loginpassword').type(contrasena).wait(2000)

    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().wait(3000)
   
    
    cy.get('#nameofuser').should('include.text', `Welcome ${usuario}`)
    
    


    //Agregar producto al carro de compras
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click().wait(2000)

    cy.get('.col-sm-12 > .btn').click()
  
    cy.get('#cartur').click()

    // Finalizar compra
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('leo')
    cy.get('#country').type('Chile')
    cy.get('#city').type('Santiago')
    cy.get('#card').type('1111')
    cy.get('#month').type('09')
    cy.get('#year').type('2024')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.contains("h2", "Thank you for your purchase!").wait(2000)

    // confirmar compra 
    cy.get('.confirm').click()


});
});