/// <reference types="Cypress" />

describe("Test a registration form", () => {
    context('1440px resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop browser with a 1440px monitor
            cy.viewport(1440, 1024)
        });

        it("Go to the Sign Up page from the Homepage", () => {
            cy.visit(Cypress.env('url'));
            cy.get('#__next > header > div:nth-child(5) > span').click();
            cy.get('.text-display-jumbo').should('have.text', 'Sign Up');
        });

        context('Set url = Sign up page', () => {
            beforeEach(() => {
                // set url for the tests
                cy.visit(Cypress.env('url') + "/sign_up");
            });

            it("Click on the Login button on the Sign Up page", () => {
                cy.get('.auth-main__header > .ant-btn').click();
                cy.get('.main-title').should('have.text', 'Welcome back!');
            });

            it("The subscribe checkbox exists and checked by default", () => {
                cy.get('[class=auth-main__container]').find('input').should('have.class', "ant-checkbox-input");
                cy.get('[class=auth-main__container]').find('span').contains('Add me to your newsletter and keep me updated.')
            });            
            
            it.only("Uncheck the marketing checkbox", () => {

                cy.get('[class=auth-main__container] > div.ant-row.ant-row-center > div.ant-col.ant-col-24.ant-col-md-23.ant-col-lg-16 > div > form > div > div:nth-child(6) > div > label > span > input').uncheck();
     //          cy.get('#__next > div > div.auth-main > div > div.auth-main__container > div.ant-row.ant-row-center > div.ant-col.ant-col-24.ant-col-md-23.ant-col-lg-16 > div > form > div > div:nth-child(6) > div > label').should('have.class', 'ant-checkbox-wrapper')
            });

            it("Register with the valid data", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");
                cy.get('[type="tel"]').type("1234567890");            
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

            it("Register with the First name and Last name = 255 chars", () => {
                cy.get('[name="firstName"]').type(Cypress.env('255charslength'));
                cy.get('[name="lastName"]').type(Cypress.env('255charslength'));
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");
                cy.get('[type="tel"]').type("1234567890");            
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('#main-account-header__user').should('have.class', "ant-dropdown-trigger");
            });

            it("Register with the Password = 72 chars", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");        
                cy.get('[type="tel"]').type("1234567890");         
                cy.get('[name="password"]').type(Cypress.env('72charslength'));   
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('#main-account-header__user').should('have.class', "ant-dropdown-trigger");
            }); 

            it("Register with the empty First name", () => {
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");
                cy.get('[type="tel"]').type("1234567890");            
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("First Name is required");
            }); 

            it("Register with the First name = 255 chars", () => {
                cy.get('[name="firstName"]').type(Cypress.env('255charslength') + "a");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");
                cy.get('[type="tel"]').type("1234567890");            
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("First Name must be equal or less than 255 characters");
            });

            it("Register with the empty Last name", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");
                cy.get('[type="tel"]').type("1234567890");            
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("Last Name is required");
            });

            it("Register with the Last name = 256 chars", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type(Cypress.env('255charslength') + "a");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");
                cy.get('[type="tel"]').type("1234567890");            
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("Last Name must be equal or less than 255 characters");
            });            

            it("Register with the empty Email", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[type="tel"]').type("1234567890");            
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("Email is required");
            });

            it("Register with the invalid format Email", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "rubygarage.org");
                cy.get('[type="tel"]').type("1234567890");            
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("Email has a wrong format");
            });

            it("Register with the already existing Email", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+owner@rubygarage.org");
                cy.get('[type="tel"]').type("1234567890");            
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("Email is already taken");
            });

            it("Register with the empty Phone number", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");        
                cy.get('[name="password"]').type(Cypress.env('password'));
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get('.d-flex > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should('have.length.at.least', 1);
            });   
            
            it("Register with the empty Password", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");        
                cy.get('[type="tel"]').type("1234567890");            
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("Password is required");
            });

            it("Register with the Password = 5 chars", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");        
                cy.get('[type="tel"]').type("1234567890");         
                cy.get('[name="password"]').type("12345");   
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("Use a minimum password length of 6 or more characters");
            });  
            
            it("Register with the Password = 73 chars", () => {
                cy.get('[name="firstName"]').type("Vi");
                cy.get('[name="lastName"]').type("Jackie");
                cy.get('[name="email"]').type("kateryna.sessa+cy" + "1" + "@rubygarage.org");        
                cy.get('[type="tel"]').type("1234567890");         
                cy.get('[name="password"]').type(Cypress.env('72charslength') + "a");   
                cy.get('.auth-main__btn-wrap > .ant-btn').click();
                cy.get(':nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error > .main-input__message').should("exist").contains("Password must be equal or less than 72 characters");
            });         
            
        });
    })
})