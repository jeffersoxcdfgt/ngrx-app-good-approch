import { LoginFunction } from './functions/utils.cy';
const  ARENAS_LINK = '/menu/arenas'

describe('Arenas Testing', () => {
    beforeEach(() => {
      LoginFunction('admin@admin.com','admin')
    })

    it('Adding arenas row', () => {        
       cy.get('a').get(`[routerlink="${ARENAS_LINK}"]`).click()
       cy.get('a').get(`[routerlink="${ARENAS_LINK}/add"]`).click()
       cy.get('app-input-custom').get('input').get('[placeholder="Arena title"]').type('arena1') 
       cy.get('app-input-custom').get('input').get('[placeholder="Capacity"]').type('123')       

       // Set text to tinyMce        
       cy.window().should('have.property', 'tinymce')   
       cy.wait(1000).then(() => { 
            const win = cy.state('window')
            win.tinymce.activeEditor.setContent('About description cypress')
      }) 

      /* cy.window().then(win => {
        cy.wrap(win.tinymce.activeEditor.getContent({ format: 'text'}))
          .should('eq', 'About description') 
      })*/ 

     cy.get('app-logo-custom').get('input[type=file]').get('[id="logo"]').selectFile({
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'logo.png',
        lastModified: Date.now(),
      }) 

      cy.get('app-logo-custom').get('input[type=file]').get('[id="photo"]').selectFile({
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'photo.png',
        lastModified: Date.now(),
      }) 

       cy.get('[data-save="save"]').click().then(()=>{
        cy.get('table tbody tr').should('have.length', 8)
       })  

    })
})