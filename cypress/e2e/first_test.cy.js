describe('my first test', function () {
    it('has to contain title', function () {
        cy.visit('http://localhost:3000');
        cy.get("h1")
            .invoke('text')
            .should('equal', 'Express');
    });
});

