
Cypress.Commands.add('registro', (nombre,apellido,telefono,dni,provincia,localidad,dd,mm,aaaa,email, password) => {

cy.get('[data-cy="input-nombres"]').type(nombre)
cy.get('[data-cy="input-apellido"]').type(apellido)
cy.get('[data-cy="input-telefono"]').type(telefono)
cy.get('[data-cy="input-dni"]').type(dni)
cy.get('input[data-cy="select-provincia"]').type(provincia)
cy.contains(provincia).click()
cy.get('input[data-cy="select-localidad"]').type(localidad)
cy.contains(localidad).click()
cy.contains('dd').type(dd)
cy.contains('mm').type(mm)
cy.contains('aaaa').type(aaaa)
cy.get('[data-cy="input-email"]').type(email)
cy.get('[data-cy="input-confirmar-email"]').type(email)
cy.get('[data-cy="input-password"]').type(password)
cy.get('[data-cy="input-repetir-password"]').type(password)
})

Cypress.Commands.add('login', (email, password) => {

cy.get('[data-cy="input-email"]').type(email)
cy.get('[data-cy="input-password"]').type(password)
})
