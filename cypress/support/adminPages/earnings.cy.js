/// <reference types="Cypress" />
export class admin_earnings {

    earnings = {

        title: () => cy.xpath("//p[normalize-space()='earnings']"),
        summary_txt: () => cy.xpath("//p[normalize-space()='summary']"),
        total_earnings_txt1: () => cy.xpath("(//p[contains(text(),'TOTAL EARNINGS')])[1]"),
        this_year_txt: () => cy.xpath("//p[normalize-space()='This Year']"),
        basic_acc_txt: () => cy.xpath("//p[normalize-space()='basic accounts']"),
        monthly_sub_txt: () => cy.xpath("//p[normalize-space()='monthly sub.']"),
        yearly_sub_txt: () => cy.xpath("//p[normalize-space()='yearly sub.']"),
        total_earnings_txt2: () => cy.xpath("(//p[contains(text(),'TOTAL EARNINGS')])[2]"),
        next_icon_year: () => cy.xpath("(//*[name()='circle'])[4]"),
        prev_icon_year: () => cy.xpath("(//*[name()='circle'])[3]"),
        last_30_days_txt: () => cy.xpath("//p[normalize-space()='last 30 days']"),
        tenants_singed_txt: () => cy.xpath("//p[normalize-space()='tenants signed up']"),
        jobs_created_txt: () => cy.xpath("//p[normalize-space()='jobs were created']"),
        revenue_generated_txt: () => cy.xpath("//p[normalize-space()='revenue generated']"),
        acc_conversion_txt: () => cy.xpath("//p[normalize-space()='account conversion']"),
        regular_basic_txt: () => cy.xpath("//p[normalize-space()='regular > basic']"),
        basic_subscriptions_txt: () => cy.xpath("//p[normalize-space()='basic > subscriptions']"),
        monthly_yearly_txt: () => cy.xpath("//p[normalize-space()='monthly > yearly']")

    }

    //Signa Admin Tabs
    admin_tab = {

        dahboard: () => cy.xpath("//a[@href='/dashboard']"),
        tenants: () => cy.xpath("//a[@href='/tenants']"),
        templates: () => cy.xpath("//a[@href='/templates']"),
        earnings: () => cy.xpath("//a[@href='/earnings']"),
        settings: () => cy.xpath("//a[@href='/settings']"),

    }


    verifyearningstab() {

        this.admin_tab.earnings()
            .click();

        cy.focused()
            .should('have.text', 'earnings')
            .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 0px 0px 12px 0px');

        this.earnings.title()
            .should('be.visible')
            .and('have.text', 'earnings');
        this.earnings.summary_txt()
            .should('be.visible')
            .and('have.text', 'summary');
        this.earnings.total_earnings_txt1()
            .should('be.visible')
            .and('have.text', 'TOTAL EARNINGS');
        this.earnings.this_year_txt()
            .should('be.visible')
            .and('have.text', 'This Year');
        this.earnings.basic_acc_txt()
            .should('be.visible')
            .and('have.text', 'basic accounts');
        this.earnings.monthly_sub_txt()
            .should('be.visible')
            .and('have.text', 'monthly sub.');
        this.earnings.yearly_sub_txt()
            .should('be.visible')
            .and('have.text', 'yearly sub.');
        this.earnings.total_earnings_txt2()
            .should('be.visible')
            .and('have.text', 'TOTAL EARNINGS');
        // this.earnings.next_icon_year().click()
        // this.earnings.prev_icon_year().click()
        this.earnings.last_30_days_txt()
            .should('be.visible')
            .and('have.text', 'last 30 days');
        this.earnings.tenants_singed_txt()
            .should('be.visible')
            .and('have.text', 'tenants signed up');
        this.earnings.jobs_created_txt()
            .should('be.visible')
            .and('have.text', 'jobs were created');
        this.earnings.revenue_generated_txt()
            .should('be.visible')
            .and('have.text', 'revenue generated');
        this.earnings.acc_conversion_txt()
            .should('be.visible')
            .and('have.text', 'account conversion');
        this.earnings.regular_basic_txt()
            .should('be.visible')
            .and('have.text', 'regular > basic');
        this.earnings.basic_subscriptions_txt()
            .should('be.visible')
            .and('have.text', 'basic > subscriptions');
        this.earnings.monthly_yearly_txt()
            .should('be.visible')
            .and('have.text', 'monthly > yearly');

    }

}