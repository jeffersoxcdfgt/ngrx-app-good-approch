import { LoginFunction } from './functions/utils.cy';
const  TEAMS_LINK = '/menu/teams'

describe('Teams Testing', () => {
    beforeEach(() => {
      LoginFunction('admin@admin.com','admin')
    })

    it('Adding teams row', () => {        
       cy.get('a').get(`[routerlink="${TEAMS_LINK}"]`).click();
       cy.get('a').get(`[routerlink="${TEAMS_LINK}/add"]`).click(); 
       cy.get('app-input-custom').get('input').get('[placeholder="Team Name"]').type('Team new');
       cy.get('app-input-custom').get('input').get('[placeholder="Founded"]').type('1998') ;

        // Set text to tinyMce        
       cy.window().should('have.property', 'tinymce')   
          cy.wait(1000).then(() => { 
          const win = cy.state('window')
          win.tinymce.activeEditor.setContent('About description cypress')
        }) 

        cy.get('app-logo-custom').get('input[type=file]').get('[id="logo"]').selectFile({
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'logo.png',
          lastModified: Date.now(),
        }) 

        cy.get('app-chips-select')
        .get('input')
        .get('[formcontrolname="arena"]')
        .click({multiple: true })
        .should('be.visible')
        .as('relatedArenaAutocomplete').first().within(() => {
          cy.get('input')
          .type('canada')
          .type('{downarrow}')
          .type('{enter}');
        });

        cy.get('app-chips-select')
        .get('select')
        .select('Atlantic').should('have.value', 'Atlantic')

        cy.get('[data-save="save"]').click().then(()=>{
          cy.get('table tbody tr').should('have.length', 6)
        })
  
    })

    it('Updating teams row', () => { 
      cy.get('a').get(`[routerlink="${TEAMS_LINK}"]`).click()
      cy.get('a').get(`[ng-reflect-router-link="${TEAMS_LINK}/edit/1"]`).click() 

      cy.get('app-input-custom').get('input').get('[placeholder="Team Name"]').clear().type('jeff');
      cy.get('app-input-custom').get('input').get('[placeholder="Founded"]').clear().type('2023');

         // Set text to tinyMce        
      cy.window().should('have.property', 'tinymce')   
         cy.wait(1000).then(() => { 
         const win = cy.state('window')
         win.tinymce.activeEditor.setContent('About description cypress')
      }) 

      cy.get('app-logo-custom').get('input[type=file]').get('[id="logo"]').selectFile({
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'logo.png',
        lastModified: Date.now(),
      }) 

      cy.get('app-chips-select')
      .get('input')
      .get('[formcontrolname="arena"]')
      .eq(0)
      .click({multiple: true })
      .should('be.visible')
      .as('relatedArenaAutocomplete').first().within(() => {
        cy.get('input')
        .type('{selectAll}')
        .type('{backspace}')
        .type('Amway')
        .type('{downarrow}')
        .type('{enter}');
      });

      cy.get('app-chips-select')
      .get('select')
      .select('Central').should('have.value', 'Central')

      cy.get('[data-save="save"]').click().then(()=>{
        cy.get('table')
          .contains('jeff')
          
        cy.get('table')
          .contains('2023')  
       }) 

    })
})