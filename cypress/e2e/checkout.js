describe("Test a Checkout flow", () => {
    context('1440px resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop browser with a 1440px monitor
            cy.viewport(1440, 1024)
        });
        it("Select free dates and click on the Instant book button", () => {
            cy.visit(Cypress.env('url') + "/rv-rental/nv/e15bac65-ea43-4bbb-87e9-439d55836099");

        })
    });
})