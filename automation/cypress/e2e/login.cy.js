import { SERVER } from './constants/const';
import { LoginFunction } from './functions/utils.cy';

const apiUrl = `${SERVER}:1337/api/login`

describe('Login process Succesfully', () => {

  beforeEach(() => {
    cy.intercept(`${apiUrl}`)
    .as('loginProcess');
  })

  it('Login user with right data', () => {
    LoginFunction('admin@admin.com','admin')
    cy.wait('@loginProcess').its('response.statusCode').should((resp)=>{
      expect(resp).to.eq(200);
    });
  })

  it('Login user with wrong data', () => {
    LoginFunction('admin@admin.com','admin111')
    cy.wait('@loginProcess').its('response.statusCode').should((resp)=>{
      expect(resp).to.eq(400);
    });
  })

})