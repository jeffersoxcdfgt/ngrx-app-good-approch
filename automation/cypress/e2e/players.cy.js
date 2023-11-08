import { LoginFunction } from './functions/utils.cy';
const  PLAYERS_LINK = '/menu/players'

describe('Players Testing', () => {
    beforeEach(() => {
      LoginFunction('admin@admin.com','admin')
    })

    it('Adding player row', () => {    
        cy.get('a').get(`[routerlink="${PLAYERS_LINK}"]`).click()
        cy.get('a').get(`[routerlink="${PLAYERS_LINK}/add"]`).click()
        
        cy.get('app-input-custom').get('input').get('[placeholder="First name"]').type('player1') 
        cy.get('app-input-custom').get('input').get('[placeholder="Last name"]').type('last player') 

        cy.get('app-logo-custom').get('input[type=file]').get('[id="photo"]').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'player.png',
            lastModified: Date.now(),
        })

        cy.get('app-input-custom-datetime')
        .get('.icon-datetime-picker')
        .click()
        .get('button')
        .get('[class="mat-calendar-body-cell mat-calendar-body-active"]')
        .click()

        cy.get('app-input-custom').get('input').get('[placeholder="Height"]').type('111')
        cy.get('app-input-custom').get('input').get('[placeholder="Weight"]').type('222')

        cy.get('app-chips-select')
         .get('input')
         .get('[formcontrolname="team"]')
         .first().within(() => {
            cy.get('input')
            .type('Boston')
            .type('{downarrow}')
            .type('{enter}');
          });


        cy.get('app-input-custom').get('input').get('[placeholder="Number"]').type('333')

        cy.get('app-chips-select',)
        .get('input')
        .get('[formcontrolname="position"]')
        .click({multiple: true })
        .should('be.visible')
        .as('relatedPositionAutocomplete').first().within(() => {
          cy.get('input')
          .type('Center')
          .type('{downarrow}')
          .type('{enter}');
        });

        cy.get('app-chips-select',)
        .get('input')
        .get('[formcontrolname="country"]')
        .click({multiple: true })
        .should('be.visible')
        .as('relatedCountryAutocomplete').first().within(() => {
          cy.get('input')
          .type('Usa')
          .type('{downarrow}')
          .type('{enter}');
        });

        cy.get('app-chips-select',)
        .get('input')
        .get('[formcontrolname="college"]')
        .click({multiple: true })
        .should('be.visible')
        .as('relatedCollegrAutocomplete').first().within(() => {
          cy.get('input')
          .type('USC')
          .type('{downarrow}')
          .type('{enter}');
        });

        cy.get('app-input-custom').get('input').get('[placeholder="NBA Debut"]').type('1998') 

        cy.get('[data-save="save"]').click().then(()=>{
            cy.get('table tbody tr').should('have.length', 9)
        })

    })
})