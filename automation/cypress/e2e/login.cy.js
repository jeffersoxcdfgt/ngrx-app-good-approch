//Setting data to be able log In

const URLLOGIN = 'http://localhost:4200/#/login'
const USERNAME ='admin@admin.com'
const PASSWORD = 'admin'

describe('Login process Succesfully', () => {
  it('Login user with right data', () => {
    cy.visit(URLLOGIN)
    
    const usernameregex = new RegExp(USERNAME, "i");
    const passwordregex = new RegExp("admin", "i");

    cy.get("table tbody tr td:nth-child(1)").contains(usernameregex)
    cy.get("table tbody tr td:nth-child(2)").contains(passwordregex)   

    cy.get('app-input-custom').get('[type="text"]').type(USERNAME)
    cy.get('app-input-custom').get('[type="password"]').type(PASSWORD)
    cy.get('button').get('[type="submit"]').click()
  })
})