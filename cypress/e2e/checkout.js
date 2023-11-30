describe("Test a Checkout flow", () => {
    context('1440px resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop browser with a 1440px monitor
            cy.viewport(1440, 1024)
        });
        it("Select free dates and click on the Instant book button when user is not authorized", () => {
            cy.visit(Cypress.env('url') + "/rv-rental/outback/4fe6d12b-1c8b-4b62-afc0-a41cf50499a5");
            cy.get('.departure-return__widget > :nth-child(1)').click();
            cy.get(':nth-child(1) > #campervan-availability__calendar-wrapper > .DayPicker > .DayPicker-wrapper > .DayPicker-Months > :nth-child(2) > .DayPicker-Body > :nth-child(4) > [aria-label="Sun Dec 17 2023"] > .listing_calendar__inner-cell').click();
            cy.get(':nth-child(1) > #campervan-availability__calendar-wrapper > .DayPicker > .DayPicker-wrapper > .DayPicker-Months > :nth-child(2) > .DayPicker-Body > :nth-child(4) > [aria-label="Mon Dec 18 2023"] > .listing_calendar__inner-cell').click();
            cy.get('.van-details__sticky-card-body > .ant-btn').click();
            cy.get('.ml-16 > .text-title').should('have.text', 'Secure Checkout');
            cy.get('#__next > form > div > main > div > div > div.ant-col.ant-col-lg-8 > div > div.checkout__details-main > div.checkout__details-info > div.flex-1.overflow-down-lg-hidden.ml-16.ml-lg-0.mt-lg-16 > div.d-flex.align-items-center > div:nth-child(1) > span.in-black').should('have.text', '1');
            cy.get('#__next > form > div > main > div > div > div.ant-col.ant-col-lg-8 > div > div.checkout__details-main > div.checkout__details-info > div.flex-1.overflow-down-lg-hidden.ml-16.ml-lg-0.mt-lg-16 > div.d-flex.align-items-center > div:nth-child(3) > span.in-black').should('have.text', '1');
        });
            
        it("Login during the checkout successfully", () => {
            cy.visit(Cypress.env('url') + "/rv-rental/outback/4fe6d12b-1c8b-4b62-afc0-a41cf50499a5");
            cy.get('.departure-return__widget > :nth-child(1)').click();
            cy.get(':nth-child(1) > #campervan-availability__calendar-wrapper > .DayPicker > .DayPicker-wrapper > .DayPicker-Months > :nth-child(2) > .DayPicker-Body > :nth-child(4) > [aria-label="Mon Dec 18 2023"] > .listing_calendar__inner-cell').click();
            cy.get(':nth-child(1) > #campervan-availability__calendar-wrapper > .DayPicker > .DayPicker-wrapper > .DayPicker-Months > :nth-child(2) > .DayPicker-Body > :nth-child(4) > [aria-label="Tue Dec 19 2023"] > .listing_calendar__inner-cell').click();
            cy.get('.van-details__sticky-card-body > .ant-btn').click();
            cy.get('#__next > form > div > main > div > div > div.ant-col.ant-col-lg-16 > div > div.d-md-flex.align-items-center.justify-content-space-between.mb-16.mb-md-24 > div > button').click();
            cy.get('[name="email"]').type(Cypress.env('user'));
            cy.get('[name="password"]').type(Cypress.env('password'));
            cy.get('.auth-main__btn-wrap > .ant-btn').click();
            cy.get('.checkout__form > :nth-child(2) > .text-title').should('have.text', 'Trip information');
        });

    });
})