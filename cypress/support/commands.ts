declare namespace Cypress {
    interface Chainable {
      getFormData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    }
  }
  
  Cypress.Commands.add("getFormData", (selector) => {
    return cy.get(`[name='${selector}]`)
  })