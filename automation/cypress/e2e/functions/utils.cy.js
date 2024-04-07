import { SERVER } from "../constants/const";

const URLLOGIN = `${SERVER}:4200/#/login`;

export const LoginFunction = (username,password) => {
    cy.visit(URLLOGIN)
    cy.get('app-input-custom').get('[type="text"]').type(username)
    cy.get('app-input-custom').get('[type="password"]').type(password)
    cy.get('button').get('[type="submit"]').click()
}