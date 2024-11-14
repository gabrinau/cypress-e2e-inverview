
const faker = require('faker');

    // Generar un nombre de usuario aleatorio usando Faker
    const usuario = faker.internet.userName(); // Faker genera un nombre de usuario aleatorio

    // Generar una contraseña aleatoria usando Faker
    const contrasena = faker.internet.password(); // Faker genera una contraseña aleatoria (puedes personalizar la longitud)

describe('Pruebas de Login con Faker', () => {

  it('Debería loguearse correctamente con un usuario y contraseña aleatorios', () => {
    // Generar un nombre de usuario aleatorio usando Faker
    //const usuario = faker.internet.userName(); // Faker genera un nombre de usuario aleatorio

    // Generar una contraseña aleatoria usando Faker
    //const contrasena = faker.internet.password(); // Faker genera una contraseña aleatoria (puedes personalizar la longitud)

    // Ir a la página de login
    cy.visit('/'); // Asegúrate de que esta URL sea la de tu página de login

    // Ir a creacion de usuario
    cy.get('#signin2').click().wait(2000)

    // Ingresar el nombre de usuario aleatorio
    cy.get('#sign-username').type(usuario);
    //cy.get('input[name="username"]').type(usuario); // Suponiendo que el campo de usuario tiene el atributo 'name="username"'
    
    // Ingresar la contraseña aleatoria
    cy.get('#sign-password').type(contrasena)
    //cy.get('input[name="password"]').type(contrasena); // Suponiendo que el campo de contraseña tiene el atributo 'name="password"'
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    

    
    // Hacer clic en el botón de login
    cy.get('a[data-target="#logInModal"]').click()

    // ingreso de user y contrasenia
    cy.get('#loginusername').type(usuario);
    cy.wait(2000)
    
    cy.get('#loginpassword').type(contrasena)
    cy.wait(2000)

    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().wait(3000)
   
    // Validar que el user creadose pudo loguear exitoso
    cy.get('#nameofuser').should('include.text', `Welcome ${usuario}`)
    // Opcionalmente, puedes verificar que el nombre de usuario o alguna otra parte de la UI sea visible para confirmar que el login fue exitoso
    //cy.contains('Welcome' + usuario); // Si tienes un mensaje de bienvenida con el nombre de usuario
    


    //cargar un producto al carro de compras
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    //cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get('.col-sm-12 > .btn').click()
    //cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    //cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()

    // Place order (carga de datos)
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

  })
})
