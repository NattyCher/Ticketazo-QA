//Test usuario ya regitrado

describe('Pruebas de Ticketazo', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/login')
  });

  it('Test 1: debería mostrar el formulario de login', () => {
    cy.get('[data-cy="input-email"]').should('be.visible')
  });

  it('Test 2: debería mostrar el botón de registro', () => {
    cy.get('[data-cy="btn-register-user"]').should('be.visible')
  });
});

//Test usuario ya regitrado

describe('Registro de Usuario con usuario ya registrado', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/login')
  });

  it('No debe permitir realizar el registro', () => {
    cy.get('[data-cy="btn-register-user"]').click()
    cy.fixture('usuarioRegistrado').then((usuarior) => {
        cy.registro(usuarior.nombre,usuarior.apellido,usuarior.telefono,usuarior.dni,usuarior.provincia,usuarior.localidad,usuarior.dd,usuarior.mm,usuarior.aaaa, usuarior.email,usuarior.password)
    })
    cy.get('[data-cy="btn-registrarse"]').click()
  });
});

//Test ingreso numero menos a 10 digitos
describe('Numero de telefono menos a 10 digitos', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  });

  it('No debe permitir ingresar un numero menor a 10 digitos', () => {
    cy.get('[data-cy="input-telefono"]').type('382918373')
    cy.get('[data-cy="input-dni"]').type('56748392')
    cy.contains('Busque la coincidencia con el formato solicitado.').should('be.visible')
  });
});