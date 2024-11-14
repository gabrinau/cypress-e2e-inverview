// La prueba conciste en generar un usuario con credenciales random creadas por la libreria faker, y con el mismo generar un flujo de compra exitoso


context('Generacion de usuario y compra exitosa', () => {


  beforeEach(() => {

    cy.visit('/') 

  })
  
    
it('Crear usuario', () =>{    
    

  cy.crearUsuario()

  });

  it('Login exitoso', () => {

    cy.login()

  });

  it('Agregar producto al carro de compras', () => {

  cy.agregarProducto()

  });
  
  it('Finalizar compra', () => {

    cy.finCompra()

    })
})