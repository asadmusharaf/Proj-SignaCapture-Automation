/// <reference types="Cypress" />
export class admin_tenants {

    tenants = {

        title: () => cy.xpath("//p[normalize-space()='new tenants']"),
        jcard_trial_txt: () => cy.xpath("(//span[contains(text(),'trial')])[2]"),
        jcard_name: () => cy.xpath("(//span[contains(text(),'trial')])[1]"),
        jcard_signedup: () => cy.xpath("(//p[contains(text(),'Signed up on: Jun 16, 2022')])[1]"),
        jcard_expiring: () => cy.xpath("(//p[contains(text(),'Trial expiring on: Jan 01, 1970')])[2]"),
        jcard_freesign: () => cy.xpath("(//p[contains(text(),'Free SIgnature: 10')])[2]"),
        jcard_jobs_created: () => cy.xpath(""),
        jcard_signs_used: () => cy.xpath(""),
        all_tenants_txt: () => cy.xpath("//p[normalize-space()='all tenants']"),
        filter_drpdwn: () => cy.xpath("//div[@variant='medium']"),
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

    verifytable() {

        this.admin_tab.tenants()
            .click();

        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");

        cy.focused()
            .should('have.text', 'tenants')
            .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 0px 0px 12px 0px');

        cy.wait(4000)

        cy.get('table thead').within(function () {
            cy.get('th').eq(0).should('have.text', 'Tenant')
            cy.get('th').eq(1).should('have.text', 'Account Type')
            cy.get('th').eq(2).should('have.text', 'Sign up date')
            cy.get('th').eq(3).should('have.text', 'Expiry Date')
            cy.get('th').eq(4).should('have.text', 'Jobs')
            cy.get('th').eq(5).should('have.text', 'Free signatures')
            cy.get('th').eq(6).should('have.text', 'Used signatures')
            cy.get('th').eq(7).should('have.text', 'Users')
            cy.get('th').eq(8).should('have.text', 'Revenue')

        })

        cy.get('table tbody tr').contains('tr', 'Asad').within(() => {

            cy.get('td:nth-child(1) a').click()
            cy.wait(3000)
        })
    }


}