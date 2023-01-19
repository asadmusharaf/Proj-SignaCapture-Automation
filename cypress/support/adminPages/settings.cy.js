/// <reference types="Cypress" />
export class admin_settings {


    settings = {

        title: () => cy.xpath("//p[normalize-space()='settings']"),
        profile_tab: () => cy.xpath("//span[normalize-space()='profile']"),
        plans_tab: () => cy.xpath("//span[normalize-space()='plans']"),
        offers_tab: () => cy.xpath("//span[normalize-space()='offers']"),
        payment_tab: () => cy.xpath("//span[normalize-space()='payment settings']"),
        change_pic: () => cy.xpath("//span[normalize-space()='Change Profile']"),
        txt_under_changeprofile: () => cy.xpath("//p[contains(text(),'Here you can change your registered email address ')]"),
        email_field_txt: () => cy.xpath("//label[normalize-space()='Email Address']"),
        email_field: () => cy.xpath("//input[@placeholder='Email']"),
        chng_pswrd_txt: () => cy.xpath("//label[normalize-space()='Change Password']"),
        curr_pswrd_field: () => cy.xpath("//input[@placeholder='Current Password']"),
        new_pswrd_field: () => cy.xpath("//input[@placeholder='New Password']"),
        verify_pswrd_field: () => cy.xpath("//input[@placeholder='Verify Password']"),
        save_btn: () => cy.xpath("//span[normalize-space()='SAVE CHANGES']"),
        chng_prof_title: () => cy.xpath("//h3[normalize-space()='Change Profile Picture']"),
        chng_prof_txt: () => cy.xpath("//p[normalize-space()='Upload new profile picture below']"),
        upload_area: () => cy.xpath("//p[normalize-space()='Click or drop your profile picture here']"),
        upload_btn_disabled: () => cy.get("div[role='presentation'] button:nth-child(1)"),
        upload_btn_enabled: () => cy.xpath("//span[normalize-space()='Upload']"),
        cancel_btn: () => cy.xpath("//span[normalize-space()='Cancel']"),
        clear_btn: () => cy.xpath("//span[normalize-space()='Clear']"),

        curr_pswrd_vali: () => cy.xpath("//input[@placeholder='Current Password is required']"),
        req_pswrd_vali: () => cy.xpath("//input[@placeholder='Password is required']"),
        verify_pswrd_vali: () => cy.xpath("//input[@placeholder='Verify Password is required']"),
        pswrd_not_match_txt: () => cy.xpath("//p[normalize-space()='Password not matched']"),
        invalid_pswrd_toast: () => cy.xpath("//div[@id='notistack-snackbar']"),
        invalid_pswrd_toast_dismiss: () => cy.xpath("//span[normalize-space()='Dismiss me']"),
        profile_updated_toast: () => cy.xpath("//div[@id='notistack-snackbar']"),
        toast_dismiss: () => cy.xpath("//span[normalize-space()='Dismiss me']"),


        //Plans tab
        plans_title: () => cy.xpath("//p[normalize-space()='offered plans']"),
        plans_table1: () => cy.xpath("(//table)[1]"),
        plans_title_2: () => cy.xpath("//p[normalize-space()='CUSTOM PLANS']"),
        plans_table2: () => cy.xpath("(//table)[2]"),
        add_new_plan_btn: () => cy.xpath("//span[normalize-space()='add new plan']"),
        //offers tab
        offer_title: () => cy.xpath("//p[normalize-space()='offers']"),
        add_offer_btn: () => cy.xpath("//span[normalize-space()='add offer']"),
        offer_table: () => cy.xpath("(//table)[1]"),
        //Payment Settings 
        stripe: () => cy.xpath("//p[normalize-space()='Stripe']"),
        braintree: () => cy.xpath("//p[normalize-space()='Braintree']"),

    }
    //Signa Admin Tabs
    admin_tab = {

        dahboard: () => cy.xpath("//a[@href='/dashboard']"),
        tenants: () => cy.xpath("//a[@href='/tenants']"),
        templates: () => cy.xpath("//a[@href='/templates']"),
        earnings: () => cy.xpath("//a[@href='/earnings']"),
        settings: () => cy.xpath("//a[@href='/settings']"),

    }



    verifyProfileTab() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");

        cy.wait(6000);
        this.admin_tab.settings()
            .should('be.visible')
            .click();

        cy.focused()
            .should('have.text', 'settings')
            .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 0px 0px 12px 0px');

        this.settings.title()
            .should('have.text', 'settings');

        this.settings.profile_tab()
            .should('have.text', 'profile')
            .and('have.css', 'color', 'rgb(76, 132, 255)');

        this.settings.plans_tab()
            .should('be.visible')
            .and('have.text', 'plans');

        this.settings.offers_tab()
            .should('be.visible')
            .and('have.text', 'offers');

        this.settings.payment_tab()
            .should('be.visible')
            .and('have.text', 'payment settings');
    }

    changeProfilePicture() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");
        this.settings.change_pic()
            .should('be.visible')
            .and('have.text', 'Change Profile')
            .click();

        this.settings.chng_prof_title()
            .should('have.text', 'Change Profile Picture');

        this.settings.chng_prof_txt()
            .should('have.text', 'Upload new profile picture below');

        this.settings.upload_btn_disabled()
            .should('be.disabled');

        this.settings.upload_area()
            .should('have.text', 'Click or drop your profile picture here')
            .selectFile('cypress/fixtures/image.png', {
                action: 'drag-drop'
            });

        this.settings.clear_btn()
            .should('be.visible')
            .click();

        this.settings.cancel_btn()
            .should('not.be.disabled')
            .click();

        this.settings.change_pic()
            .should('be.visible')
            .and('have.text', 'Change Profile')
            .click();

        this.settings.upload_area()
            .should('have.text', 'Click or drop your profile picture here')
            .selectFile('cypress/fixtures/image.png', {
                action: 'drag-drop'
            });

        this.settings.upload_btn_enabled()
            .should('not.be.disabled')
            .click();

        this.settings.toast_dismiss()
            .click();
    }

    changePassword() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");
        this.settings.txt_under_changeprofile()
            .should('have.text', 'Here you can change your registered email address and password.');

        this.settings.email_field_txt()
            .should('have.text', 'Email Address');

        this.settings.email_field()
            .should('be.disabled')
            .and('have.value', 'qaadmin@signa.com');

        this.settings.chng_pswrd_txt()
            .should('have.text', 'Change Password');

        this.settings.curr_pswrd_field()
            .invoke('attr', 'placeholder')
            .should('equal', 'Current Password');

        this.settings.new_pswrd_field()
            .invoke('attr', 'placeholder')
            .should('equal', 'New Password');

        this.settings.verify_pswrd_field()
            .invoke('attr', 'placeholder')
            .should('equal', 'Verify Password');

        this.settings.curr_pswrd_field()
            .type('12345678');

        this.settings.new_pswrd_field()
            .type('12345678');

        this.settings.verify_pswrd_field()
            .type('12345678');

        this.settings.save_btn()
            .click();

        //cy.wait(2000)

        this.settings.profile_updated_toast()
            .invoke('text')
            .should('equal', 'Profile Updated Successfully');

        this.settings.toast_dismiss()
            .click();

        cy.wait(3000);

        this.settings.save_btn()
            .click();

        this.settings.curr_pswrd_vali()
            .invoke('attr', 'placeholder')
            .should('equal', 'Current Password is required');

        this.settings.req_pswrd_vali()
            .invoke('attr', 'placeholder')
            .should('equal', 'Password is required');

        this.settings.verify_pswrd_vali()
            .invoke('attr', 'placeholder')
            .should('equal', 'Verify Password is required');

        this.settings.curr_pswrd_vali()
            .type('1234');

        this.settings.req_pswrd_vali()
            .type('123');

        this.settings.verify_pswrd_vali()
            .type('12');

        this.settings.save_btn()
            .click();

        this.settings.pswrd_not_match_txt()
            .should('have.text', 'Password not matched');

        this.settings.new_pswrd_field()
            .clear()
            .type('1234');

        this.settings.verify_pswrd_field()
            .clear()
            .type('1234');

        this.settings.save_btn()
            .click();

        cy.wait(2000);

        this.settings.invalid_pswrd_toast()
            .invoke('text')
            .should('equal', 'Your Current Password is not valid');

        this.settings.invalid_pswrd_toast_dismiss()
            .should('be.visible')
            .click();

        this.settings.invalid_pswrd_toast()
            .should('not.be.visible');

    }

    verifyPlansTab() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");
        this.settings.plans_tab()
            .should('be.visible')
            .click();

        cy.focused()
            .should('have.text', 'plans')
            .and('have.css', 'color', 'rgb(76, 132, 255)');

        this.settings.plans_title()
            .should('have.text', 'offered plans');


        this.settings.plans_table1().within(function () {
            cy.get('th').eq(0).should('have.text', 'Plan Label')
            cy.get('th').eq(1).should('have.text', 'Plan Price')
            cy.get('th').eq(2).should('have.text', 'Free Signature')
            cy.get('th').eq(3).should('have.text', 'Extra Signature')
            cy.get('th').eq(4).should('have.text', 'Jobs Quota')

        });

        this.settings.plans_title_2()
            .should('have.text', 'CUSTOM PLANS');


        this.settings.plans_table2().within(function () {
            cy.get('th').eq(0).should('have.text', 'Plan Label')
            cy.get('th').eq(1).should('have.text', 'Tenant')
            cy.get('th').eq(2).should('have.text', 'Plan Price')
            cy.get('th').eq(3).should('have.text', 'Plan Frequency')
            cy.get('th').eq(4).should('have.text', 'Plan StartDate')
            cy.get('th').eq(5).should('have.text', 'Plan ExpiryDate')

        });

        this.settings.add_new_plan_btn()
            .should('be.visible');

    }

    verifyOffersTab() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");
        this.settings.offers_tab()
            .should('be.visible')
            .click();

        cy.focused()
            .should('have.text', 'offers')
            .and('have.css', 'color', 'rgb(76, 132, 255)');

        this.settings.offer_title()
            .should('have.text', 'offers');

        this.settings.add_offer_btn()
            .should('be.visible');

        this.settings.offer_table().within(function () {
            cy.get('th').eq(0).should('have.text', 'Offer Label')
            cy.get('th').eq(1).should('have.text', 'Description')
            cy.get('th').eq(2).should('have.text', 'Offer Code')
            cy.get('th').eq(3).should('have.text', 'Offer Value')
            cy.get('th').eq(4).should('have.text', 'Status')

        });

    }
    verifyPaymentTab() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");
        this.settings.payment_tab()
            .should('be.visible')
            .click();

        cy.focused()
            .should('have.text', 'payment settings')
            .and('have.css', 'color', 'rgb(76, 132, 255)');

        this.settings.stripe()
            .should('be.visible')
            .and('have.text', 'Stripe');

        this.settings.braintree()
            .should('be.visible')
            .and('have.text', 'Braintree');


    }


}
