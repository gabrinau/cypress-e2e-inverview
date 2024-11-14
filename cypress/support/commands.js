import pantallas from '../selector/selectores'

const faker = require('faker');
const usuario = faker.internet.userName(); 
const contrasena = faker.internet.password(); 
const nombre = faker.name.findName()
const pais = faker.address.country();
const ciudad = faker.address.city();
const nroTarjeta = faker.finance.creditCardNumber('####-####-####-####'); 
const mes = faker.date.future().getMonth() 
const anio = faker.date.future().getFullYear(); 

// -- This is a parent command --
 Cypress.Commands.add('crearUsuario', ()=>{ 

    cy.get(pantallas.crearUser.popupSingUp_btn).click().wait(3000)
  
    cy.get(pantallas.crearUser.userNameSingUp_btn).type(usuario)

    cy.get(pantallas.crearUser.passSingUp_btn).type(contrasena)

    cy.get(pantallas.crearUser.singUp_btn).click()

})

 Cypress.Commands.add('login', ()=>{ 

    cy.get(pantallas.login.popupLogin_btn).click()

    
    cy.get(pantallas.login.userNameLogin_btn).type(usuario).wait(2000)
    
    cy.get(pantallas.login.passLogin_btn).type(contrasena).wait(2000)

    cy.get(pantallas.login.singUp_btn).click().wait(5000)
  
    })


 Cypress.Commands.add('agregarProducto', ()=>{ 
    cy.get(pantallas.product.selectProduct_btn).click().wait(2000)

    cy.get(pantallas.product.addCart_btn).click()


 })

 Cypress.Commands.add('finCompra', ()=>{ 

    cy.get(pantallas.product.placeOrder_btn).click()
    cy.get(pantallas.placeOrder.popUp_btn).click()
    cy.get(pantallas.placeOrder.poName_txt).type(nombre)
    cy.get(pantallas.placeOrder.poCountry_txt).type(pais)
    cy.get(pantallas.placeOrder.poCity_txt).type(ciudad)
    cy.get(pantallas.placeOrder.poCard_txt).type(nroTarjeta)
    cy.get(pantallas.placeOrder.poMonth_txt).type(mes)
    cy.get(pantallas.placeOrder.poYear_txt).type(anio)
    cy.get(pantallas.placeOrder.poPurchase_btn).click()
    cy.contains("h2", "Thank you for your purchase!").wait(2000)
    cy.get(pantallas.placeOrder.poConfirm_btn).click()


 })