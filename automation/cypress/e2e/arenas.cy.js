import { LoginFunction } from './functions/utils.cy';

const  ARENAS_LINK = '/menu/arenas'
/*
Cypress.Commands.add('setTinyMceContent', () => {
  
    cy.window().should('have.property', 'tinymce')   // wait for tinyMCE

    cy.wait(1000).then(() => { 
     const win = cy.state('window')
     win.tinymce.EditorManager.get().forEach((edit) => {
         console.log(Object.getOwnPropertyNames(edit));

         edit.setContent('About description');
         edit.focus()
     })

    })
  })*/

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

    })
})