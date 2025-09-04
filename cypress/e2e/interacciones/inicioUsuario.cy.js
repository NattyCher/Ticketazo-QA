
//Test Ingreso con usuario sin confirmacion de email
describe('Ingreso con usuario sin confirmacion de email', () => {
  
  it('No debe poder realizarce el login', () => {
    cy.visit('https://ticketazo.com.ar/auth/login')
    cy.fixture('inicioUsuario').then((inicio) => {
        cy.login(inicio.email,inicio.password)
    })
    cy.get('[data-cy="btn-login"]').click()
    cy.contains('Usuario no confirmado. Te reenviamos el link por correo.').should('be.visible')
  });
});

//Test Ingreso con usuario sin ingresar contraseña en el input contraseña
describe('Ingreso con usuario sin confirmacion de email', () => {
  
  it('No debe poder realizarce el login sin contraseña', () => {
    cy.visit('https://ticketazo.com.ar/auth/login')
    cy.get('[data-cy="input-email"]').type("inventado@gmail.com")
    cy.get('[data-cy="btn-login"]').click()
    cy.contains('No ha ingresado su contraseña').should('be.visible')
  });
});

//Test Ingreso solo con contraseña
describe('Ingreso solo con contraseña', () => {
  
  it('No debe poder realizarce el login sin ingreso de usuario válido', () => {
    cy.visit('https://ticketazo.com.ar/auth/login')
    cy.get('[data-cy="input-password"]').type("EmBI_176")
    cy.get('[data-cy="btn-login"]').click()
    cy.contains('Correo o contraseña incorrectos').should('be.visible')
  });
});