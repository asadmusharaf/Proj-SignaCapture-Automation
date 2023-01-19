/// <reference types="Cypress" />
export class admin_dashboard {

    dashboard = {

        logo: () => cy.xpath("//body/div[@id='root']/div//*[name()='svg']"),
        welcome_txt: () => cy.xpath("//p[normalize-space()='Welcome Back, QA Team']"),
        notification_icon: () => cy.xpath("//button[@title='Notifications']"),
        logout_icon: () => cy.xpath("//button[@title='Logout']"),
        summary_txt: () => cy.xpath("//p[normalize-space()='summary']"),
        total_tenants_txt: () => cy.xpath("//p[normalize-space()='total tenants']"),
        total_jobs_txt: () => cy.xpath("//p[normalize-space()='total jobs']"),
        total_sales_txt: () => cy.xpath("//p[normalize-space()='Total Sales']"),
        trial_txt: () => cy.xpath("//p[normalize-space()='trial']"),
        basic_txt: () => cy.xpath("//p[normalize-space()='basic']"),
        monthly_txt: () => cy.xpath("//p[normalize-space()='monthly']"),
        arrow_icon: () => cy.xpath("//div[normalize-space()='10']//*[name()='svg']"),
        new_tenants_txt: () => cy.xpath("//p[normalize-space()='new tenants']"),
        viewalltenants_btn: () => cy.xpath("//span[normalize-space()='View All Tenants']"),
        notification_logout_tooltip: () => cy.xpath("//button[contains(@aria-describedby,'mui-')]"),
        tenant1: () => cy.xpath("//body/div[@id='root']/div/div[5]/div[1]/div[1]"),
        tenant2: () => cy.xpath("//body/div[@id='root']/div/div[5]/div[2]/div[1]"),
        tenant3: () => cy.xpath("//body/div[@id='root']/div/div[5]/div[3]/div[1]"),
    }

    //Signa Admin Tabs
    admin_tab = {

        dahboard: () => cy.xpath("//a[@href='/dashboard']"),
        tenants: () => cy.xpath("//a[@href='/tenants']"),
        templates: () => cy.xpath("//a[@href='/templates']"),
        earnings: () => cy.xpath("//a[@href='/earnings']"),
        settings: () => cy.xpath("//a[@href='/settings']"),
    }

    verifyDboardHeader() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");

        this.dashboard.logo()
            .should('have.css', 'width', '250px')
            .and('have.css', 'height', '50px');

        this.dashboard.welcome_txt()
            .should('have.text', 'Welcome Back, QA Team');

        this.dashboard.notification_icon()
            .invoke('attr', 'title')
            .should('equal', 'Notifications');

        this.dashboard.logout_icon()
            .invoke('attr', 'title')
            .should('equal', 'Logout');

        this.dashboard.notification_icon()
            .realHover();
        //.trigger('mouseover');
        this.dashboard.notification_logout_tooltip()
            .should('be.visible').and('have.attr', 'aria-describedby');

        this.dashboard.logout_icon()
            .realHover();
        //.trigger('mouseover');
        this.dashboard.notification_logout_tooltip()
            .should('be.visible').and('have.attr', 'aria-describedby');
        cy.wait(1000);
    }

    verifySidebarTabs() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");

        this.admin_tab.dahboard()
            .should('be.visible')
            .and('have.text', 'dashboard')
            .click();

        this.admin_tab.tenants()
            .should('be.visible')
            .and('have.text', 'tenants');

        this.admin_tab.templates()
            .should('be.visible')
            .and('have.text', 'templates');

        this.admin_tab.earnings()
            .should('be.visible')
            .and('have.text', 'earnings');

        this.admin_tab.settings()
            .should('be.visible')
            .and('have.text', 'settings');
    }

    verifyDboardSummary() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");

        this.admin_tab.dahboard()
            .should('be.visible')
            .click();
        cy.focused()
            .should('have.text', 'dashboard')
            .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 0px 0px 12px 0px');

        this.dashboard.summary_txt()
            .should('have.text', 'summary');

        this.dashboard.total_tenants_txt()
            .should('be.visible')
            .and('have.text', 'total tenants');

        this.dashboard.total_jobs_txt()
            .should('be.visible')
            .and('have.text', 'total jobs');

        this.dashboard.total_sales_txt()
            .should('be.visible')
            .and('have.text', 'Total Sales');

        this.dashboard.trial_txt()
            .realHover();

        // .trigger('mouseover');
        cy.wait(2000)

        this.dashboard.arrow_icon()
            .should('be.visible');

        this.dashboard.trial_txt()
            .should('be.visible')
            .and('have.text', 'trial').click();

        cy.go('back');

        this.dashboard.basic_txt()
            .should('be.visible')
            .and('have.text', 'basic')
            .click();

        cy.go('back');

        this.dashboard.monthly_txt()
            .should('be.visible')
            .and('have.text', 'monthly')
            .click();
        cy.go('back');
    }

    verifyDboardNewTenants() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");

        this.dashboard.new_tenants_txt()
            .should('be.visible')
            .and('have.text', 'new tenants');

        this.dashboard.tenant1()
            .realHover({ position: "center" })
            .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.16) 0px 6px 20px 0px')
            .and('have.css', 'cursor', 'pointer');

        this.dashboard.tenant2()
            .realHover({ position: "center" })
            .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.16) 0px 6px 20px 0px')
            .and('have.css', 'cursor', 'pointer');

        this.dashboard.tenant3()
            .realHover({ position: "center" })
            .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.16) 0px 6px 20px 0px')
            .and('have.css', 'cursor', 'pointer');

        this.dashboard.viewalltenants_btn()
            .should('be.visible')
            .and('have.text', 'View All Tenants')
            .click()
    }

}