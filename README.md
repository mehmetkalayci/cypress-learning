# Cypress Learning

- Use describe to describe the test file's goal
- Use beforeEach to not repeat yourself
- Use baseUrl in cypress.config.json
- Use [data-cy] attribute to test a DOM element. The purpose of using data-cy attr is to be minimally affected from renaming the elements(don't use selector which is changeable in some time instead use data-cy attr).
- Be carefull while checking string values. Example:
    ```
    cy.get('@title').should('have.css', 'color', 'rgb(255, 0, 0)');
    is not equal to
    cy.get('@title').should('have.css', 'color', 'rgb(255,0,0)');
    ```
- Trigger can be used for events. Example:
- 
  HTML
  ```
  <div class="section">
    <h1 data-cy="hovered-item"></h1>
    <ul data-cy="hover">
      <li onmouseover="listHover(this)">Item 1</li>
      <li onmouseover="listHover(this)">Item 2</li>
      <li onmouseover="listHover(this)">Item 3</li>
      <li onmouseover="listHover(this)">Item 4</li>
      <li onmouseover="listHover(this)">Item 5</li>
    </ul>
  </div>
  ```
  TEST
  ```
  it('should display the name of the most recently hovered item', () => {
      cy.get('[data-cy="hovered-item"]')
          .should('have.text', '');

      cy.get('[data-cy="hover"] > :nth-child(2)')
          .trigger('mouseover');

      cy.get('[data-cy="hovered-item"]')
          .should('have.text', 'Item 2');
  });
  ```
- Some common assertions are given bellow:
  ```
  .should('equal', 'some val')
  .should('have.length', '4')
  .should('exist')
  .should('not.exist')
  .should('be.visible')
  .should('not.be.visible')
  .should('have.class', 'item-selected)
  .should('have.css', 'color', 'green')
  .should('contain')
  .should('not.contain')
  .invoke('text')
  ```
- To set environment variable:
  ```
  npx cypress open --env MY_VARIABLE=hello
  ```
  2nd Method:
  ```
  Define variables like bellow in the cypress.config.js file.
  ```
  env: {
      "MY_VARIABLE": "Test"
  }
  ```
  Usage of variables to display its value:
  ```
  alert(Cypress.env('MY_VARIABLE'))
  ```
  3rd Method of defining an environment variable is creating a cypress.env.json file then create and object in the file.
  ```
  {
      "MY_VARIABLE": "Test"
  }
  ```

- For more information [Cypress Documentation](https://docs.cypress.io/)
