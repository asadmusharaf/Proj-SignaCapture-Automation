/// <reference types="Cypress" />
export class user_management {


    //User Management Tab objects
    um = {

        usermanagementtab: () => cy.xpath("//h6[normalize-space()='User Management']"),
        adduserbutton: () => cy.xpath("//span[@class='MuiButton-label']"),
        adduser_firstname_field: () => cy.xpath("//input[@placeholder='First Name']"),
        adduser_lastname_field: () => cy.xpath("//input[@placeholder='Last Name']"),
        adduser_email_field: () => cy.xpath("//input[@placeholder='Enter Contacts Email']"),
        adduser_password_field: () => cy.xpath("//input[@placeholder='Password']"),
        adduser_contactno_field: () => cy.xpath("//input[@placeholder='Enter Contacts Phone Number']"),
        adduser_jobs_dropdown: () => cy.xpath("//div[@role='button']"),
        adduser_search: () => cy.xpath("//input[@placeholder='Search Jobs']"),
        adduser_1stlist: () => cy.xpath("//div[@id='menu-']//li[1]"),
        adduser_popup_adduserbtn: () => cy.xpath("(//span[@class='MuiButton-label'][normalize-space()='Add User'])[2]"),
        adduser_cancel_btn: () => cy.xpath("//span[normalize-space()='Cancel']"),
        adduser_emptyclick: () => cy.xpath("//body"),
        adduser_okaybtn: () => cy.xpath("//span[normalize-space()='OKAY']"),
        adduser_delicon: () => cy.xpath("//tbody/tr[1]/td[5]/div[1]/button[2]/span[1]//*[name()='svg']"),
        adduser_delbutton: () => cy.xpath("//span[normalize-space()='Delete']"),
        adduser_page2: () => cy.xpath("//button[normalize-space()='2']"),
        adduser_pagination_text: () => cy.xpath("//p[contains(text(),'Showing 10 of')]"),
        adduser_loadmore_btn: () => cy.xpath("//span[normalize-space()='Load more']"),
        adduser_radio_btns: () => cy.get("div[role='radiogroup']"),
        adduser_save_changes_btn: () => cy.xpath("//span[normalize-space()='Save Changes']"),
        adduser_auto_generate_pswrd: () => cy.xpath("//span[normalize-space()='Auto-generate a password']"),
        editusr_modal_title: () => cy.xpath("//h3[normalize-space()='Edit User']"),
        editusr_save_changes_btn: () => cy.xpath("//span[normalize-space()='Save Changes']"),
        cancel_btn: () => cy.xpath("//span[normalize-space()='Cancel']"),

        //Jobs Assigned Page
        aj_back_btn: () => cy.xpath("//span[normalize-space()='Back']"),
        aj_title: () => cy.xpath("(//div)[19]"),
        aj_2nd_title: () => cy.xpath("//p[normalize-space()='Jobs Assigned']"),


        //delete job objects
        clicknewjobcard: () => cy.xpath("//body/div[@id='root']/main/div/div[1]/div[1]/div[1]/div[1]"),
        clickdelicon: () => cy.xpath("//button[@title='Delete']"),
        clickdelbutton: () => cy.xpath("//span[normalize-space()='Delete Job']"),

        //unassign user when deleting and delete user toast validation objects
        delusr_validation_toast: () => cy.xpath("//div[contains(text(),'User cannot be deleted,Unassign jobs first')]"),


    }


    //Add a new user
    addusr_clickusrmanagementtab() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        this.um.usermanagementtab()
            .click();
        cy.focused()
            .should('have.text', 'User Management');
    }

    addusr_VerifyListOfUsers() {
        cy.get('table tbody')
            .find('tr')
            .its('length')
            .should('be.gte', 10)
    }

    addusr_VerifyPagination() {
        this.um.adduser_page2()
            .should('be.visible')
            .and('have.text', '2')

        this.um.adduser_pagination_text()
            .should('contain.text', 'Showing 10 of')
    }

    addusr_clickadduser() {
        this.um.adduserbutton()
            .should('be.visible')
            .click();
    }

    addusr_enterfirstname(fname) {
        this.um.adduser_firstname_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'First Name');
        this.um.adduser_firstname_field()
            .type(fname);
    }

    addusr_enterlastname(lname) {
        this.um.adduser_lastname_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Last Name');
        this.um.adduser_lastname_field()
            .type(lname);
    }

    addusr_enteremail() {
        const timestamp = new Date().getTime(); //1642080371822

        //cy.get('#e_mail').type(`mpataz.tsc+${timestamp}@gmail.com`)

        this.um.adduser_email_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Enter Contacts Email');
        this.um.adduser_email_field()
            .type(`signa+${timestamp}@gmail.com`);
    }

    addusr_enterpassword(paswrd) {
        this.um.adduser_password_field()
            .clear().invoke('attr', 'placeholder')
            .should('equal', 'Password');
        this.um.adduser_password_field()
            .type(paswrd);
    }

    addusr_entercontactno(contact) {
        this.um.adduser_contactno_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Enter Contacts Phone Number');
        this.um.adduser_contactno_field()
            .type(contact);
    }

    addusr_clickjobsdropdown() {
        this.um.adduser_jobs_dropdown()
            .should('have.text', 'Assign jobs to this user')
            .click();
    }

    addusr_searchforjob(searchquery) {
        this.um.adduser_search()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Search Jobs');
        this.um.adduser_search()
            .type(searchquery)
            .should('have.value', searchquery);
    }

    addusr_clickenter() {
        this.um.adduser_search()
            .type('{enter}');
        cy.wait(3000);
    }

    addusr_selectfirstlistitem() {
        this.um.adduser_1stlist()
            .should('be.visible')
            .click();
    }

    addusr_clickesc() {
        this.um.adduser_emptyclick()
            .type('{esc}');
    }

    addusr_clickadduserbtn() {
        this.um.adduser_popup_adduserbtn()
            .should('be.visible')
            .click();
    }

    addusr_clickokaybtn() {
        this.um.adduser_okaybtn()
            .should('be.visible')
            .click();
    }

    addusr_clickdelicon() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        this.um.adduser_delicon()
            .should('be.visible')
            .click({ force: true });
    }

    addusr_clickdelbtn() {
        this.um.adduser_delbutton()
            .should('be.visible')
            .click();
    }

    deluser_validation() {

    }

    verifyNewlyCreatedUser() {

        cy.wait(3000);

        cy.get('table thead').within(function () {
            cy.get('th').eq(0).should('have.text', 'User')
            cy.get('th').eq(1).should('have.text', 'Jobs Assigned')
            cy.get('th').eq(2).should('have.text', 'Member Since')
            cy.get('th').eq(3).should('have.text', 'Account Status')

        })

        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.get('td:nth-child(1) a')
                .should('have.text', 'Automation Test user 1');

            cy.get('td:nth-child(2)')
                .should('contain.text', 'demo job');

            const dayjs = require("dayjs");
            const todaysDate = dayjs().format("MMM DD, YYYY");
            cy.log(todaysDate);

            cy.get('td:nth-child(3)')
                .should('have.text', todaysDate);

            cy.get('td:nth-child(4)')
                .should('have.text', 'active');
        })
    }

    verifyJobsAssignedPage(fname) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.wait(4000);

        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.get('td:nth-child(1) a')
                .should('have.text', 'Automation Test user 1')
                .click();
        });

        cy.go('back');
        cy.wait(3000);

        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.get('td:nth-child(2) p')
                .click();
        });

        this.um.aj_title()
            .should('contain.text', fname)
            .and('contain.text', 'signa+')
            .and('contain.text', '+1 (123) 456-7890');

        this.um.aj_2nd_title()
            .should('be.visible')
            .and('have.text', 'Jobs Assigned')

        cy.go('back');

    }

    addusr_LoadMore() {
        cy.xpath("//ul[@role='listbox']")
            .find('li')
            .its('length')
            .should('be.gte', 8);

        this.um.adduser_loadmore_btn()
            .click();
        cy.wait(2000);

        cy.xpath("//ul[@role='listbox']")
            .find('li')
            .its('length')
            .should('be.gte', 16);

    }

    adduser_ChangeAccStatus() {
        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.get('td:nth-child(5) button:nth-child(1)')
                .click();
        });

        this.um.adduser_radio_btns().within(() => {
            cy.get('label:nth-child(1)')
                .should('have.attr', 'active');
        });

        this.um.adduser_radio_btns().within(() => {
            cy.get('label:nth-child(2)')
                .should('have.attr', 'disabled')
                .click();
        });

        this.um.adduser_auto_generate_pswrd()
            .click();

        this.um.adduser_save_changes_btn()
            .click();

        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.get('td:nth-child(4)')
                .should('have.text', 'disabled')
                .click();
        });

    }

    editUser(fname, lname,) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.get('td:nth-child(5) button:nth-child(1)')
                .click();
        });

        cy.wait(2000);

        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.um.adduser_firstname_field()
            .should('have.value', fname)
            .clear()
            .type(fname);

        this.um.adduser_lastname_field()
            .should('have.value', lname)
            .clear()
            .type(lname);

        this.um.adduser_email_field()
            .should('contain.value', 'signa')

        this.um.adduser_password_field()
            .should('have.value', '');

        this.um.adduser_auto_generate_pswrd()
            .click();

        this.um.adduser_contactno_field()
            .should('have.value', '+1 (123) 456-7890');

        this.um.adduser_jobs_dropdown()
            .should('have.text', 'demo job');

        // this.um.adduser_radio_btns().within(() => {
        //     cy.get('label:nth-child(1)')
        //         .should('have.attr','value','active');
        // });

        this.um.editusr_save_changes_btn()
            .click();

        cy.wait(3000);


    }

    unAssignJobFromUser() {

        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.get('td:nth-child(5) button:nth-child(1)')
                .click();
        });

        cy.wait(2000);

        this.um.adduser_jobs_dropdown()
            .should('have.text', 'demo job')
            .click();

        this.um.adduser_1stlist()
            .should('be.visible')
            .click();

        this.um.adduser_emptyclick()
            .type('{esc}');

        this.um.adduser_auto_generate_pswrd()
            .click();

        this.um.adduser_save_changes_btn()
            .click();
    }







}