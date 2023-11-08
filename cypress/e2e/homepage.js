/// <reference types="Cypress" />

describe("Test a Homepage", () => {
    context('1440px resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop browser with a 1440px monitor
            cy.viewport(1440, 1024)
        });

        it("Go to the Login page from the Homepage", () => {
            cy.visit(Cypress.env('url'));
            cy.get('.home-title').contains("Hop in and go");
            cy.get('.home-title-highlighted').contains("Camping");
        });

        context('Set url = Homepage', () => {
            beforeEach(() => {
                // set url for the tests
                cy.visit(Cypress.env('url'));
            });

            it("The header search bar is displayed", () => {
                cy.get('.ant-select-selection-placeholder').contains("Where are you going?");
                cy.get('.ant-select-selection-placeholder').contains("When is your trip?");
                cy.get('#choose-destination-home-wrapper > .choose-destination__search-section > .choose-destination > .choose-destination__search_btn').contains("Find Your Van");
            });


        })
    })
})