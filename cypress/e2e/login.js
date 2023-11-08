/// <reference types="Cypress" />

describe("Test a login form", () => {
    context('1440px resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop browser with a 1440px monitor
            cy.viewport(1440, 1024)
        });

        it("Go to the Login page from the Homepage", () => {
            cy.visit(Cypress.env('url'));
            cy.get('#__next > header > div:nth-child(6) > span').click();
            cy.get('.main-title').should('exist').contains("Welcome back!");
        });

        context('Set url = Login page', () => {
            beforeEach(() => {
                // set url for the tests
                cy.visit(Cypress.env('url') + "/log_in");
            });

            it("Click on the Sign Up button on the Login page", () => {
                cy.get('.auth-main__header > .ant-btn').click();
                cy.get('.text-display-jumbo').should('have.text', 'Sign Up');
            });

            it("Login with the valid email and password", () => {
                cy.get('[name="email"]').type(Cypress.env('user'));
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('#main-account-header__user').should('have.class', "ant-dropdown-trigger");
            });

            it("Login with the valid email and password + spaces", () => {
                cy.get('[name="email"]').type(Cypress.env('user') + " ");
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('#main-account-header__user').should('have.class', "ant-dropdown-trigger");
            });

            it("Login with the empty email", () => {
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('[type="submit"]').contains("Log In").click();
                cy.get('[class="main-input__message"]').should('exist').contains("Email is required")
            });

            it("Login with the empty password", () => {
                cy.get('[name="email"]').type(Cypress.env('user'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('[class="main-input__message"]').should('exist').contains("Password is required")
            });

            it("Login with the email and password = spaces entered", () => {
                cy.get('[name="email"]').type(" ");
                cy.get('[name="password"]').type(" ");
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('[class="main-input__message"]').should('exist').contains("Email is required");
                cy.get('[class="main-input__message"]').should('exist').contains("Password is required")
            });

            it.only("Login with the wrong password", () => {
                cy.get('[name="email"]').type(Cypress.env('user'));
                cy.get('[name="password"]').type("qwert");
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('.ant-alert-message').should('exist').contains("Invalid email or password");
            });

            it("Login with the wrong email", () => {
                cy.get('[name="email"]').type("kateryna.sessa+owner@rubygarage.or");
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('.ant-alert-message').should('have.text', 'Invalid email or password');
            });

            it("Click on the eye icon - password is visible", () => {
                cy.get('[name="email"]').type(Cypress.env('user'));
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.ant-input-password-icon > .icon').click();
                cy.get('.ant-input-password-icon > .icon').should('have.class', 'icon icon-eye-crossed');
                cy.get('.ant-input-affix-wrapper > .ant-input').should('have.text', 'qwerty');
            });

            it("Click on the eye icon - password is hidden", () => {
                cy.get('[name="email"]').type(Cypress.env('user'));
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.ant-input-password-icon > .icon').click();
                cy.get('.ant-input-password-icon > .icon').click();
                cy.get('.ant-input-password-icon > .icon').should('have.class', 'icon icon-eye');
                cy.get('.ant-input-affix-wrapper > .ant-input').should('have.text', '');
            });

            it("Login with the valid email and password but account is deactivated", () => {
                cy.get('[name="email"]').type("kateryna.sessa+ownergqqq@rubygarage.org");
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('.ant-alert').should('have.text', 'Your account is blocked by admin')
            });
        })
    })
})