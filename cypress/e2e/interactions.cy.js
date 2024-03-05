describe('Basic page interactions', () => {
    beforeEach(() => {
        cy.visit('/interactions-test');

        cy.get('[data-cy="app-title"]')
            .as('title');

        cy.get('[data-cy="number-of-selected-checkbox"]')
            .as('selectedCheckboxCount');
    });

    it('changes the title color when double clicked the title element', () => {
        cy.get('@title')
            .dblclick();

        cy.get('@title')
            .should('have.css', 'color', 'rgb(255, 0, 0)');
    });

    it('displays the count number of selected checkbox count', () => {

        cy.get('@selectedCheckboxCount')
            .should('have.text', '0');

        cy.get('input')
            .eq(0)
            .click();

        cy.get('input')
            .eq(1)
            .click();

        cy.get('@selectedCheckboxCount')
            .should('have.text', '2');
    });

    it('selects an item and displays it', () => {
        cy.get('[data-cy="item-selection"]')
            .select('Item 2')
            .debug();

        cy.get('[data-cy="selection"]')
            .should('have.text', '2 is selected');
    });

    it('should display the name of the most recently hovered item', () => {
        cy.get('[data-cy="hovered-item"]')
            .should('have.text', '');

        cy.get('[data-cy="hover"] > :nth-child(2)')
            .trigger('mouseover');

        cy.get('[data-cy="hovered-item"]')
            .should('have.text', 'Item 2');
    });

    alert(Cypress.env('MY_VARIABLE'))
});