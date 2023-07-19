const URLLOGIN = 'http://localhost:4200/#/login';

export const LoginFunction = (username,password) => {
    cy.visit(URLLOGIN)    
    const usernameregex = new RegExp(username, "i");
    const passwordregex = new RegExp(password, "i");

   // cy.get("table tbody tr td:nth-child(1)").contains(usernameregex)
   // cy.get("table tbody tr td:nth-child(2)").contains(passwordregex)   

    cy.get('app-input-custom').get('[type="text"]').type(username)
    cy.get('app-input-custom').get('[type="password"]').type(password)
    cy.get('button').get('[type="submit"]').click()
}