describe('End user agreement form tests', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.get('[data-cy="char-count-span"]')
            .as('charCountSpan');

        cy.get('[data-cy="title-input"]')
            .as('titleInput');

    });

    it('should contain the correct title', () => {
        cy.get('[data-cy="app-title"]')
            .invoke('text')
            .should('equal', 'Express');
    });

    it('should display the appropriate remaining characters count', () => {
        cy.get('@charCountSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@titleInput')
            .type('testing...');

        cy.get('@charCountSpan')
            .invoke('text')
            .should('equal', '5');
    });

    it('prevents the user from typing more characters once maxium characters reached', () => {
        cy.get('@titleInput')
            .type('abcdefghijklmnopqrstuvwxyz');

        cy.get('@titleInput')
            .should('have.value', 'abcdefghijklmno');
    });
});