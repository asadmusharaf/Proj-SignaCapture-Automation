/// <reference types="Cypress" />
export class client_preview {

    swc = {
        swc_btn: () => cy.xpath("//span[normalize-space()='share with client']"),
        modal_title_text: () => cy.xpath("//h3[normalize-space()='Share with Client']"),
        modal_name_field: () => cy.xpath("//input[@id='share-with-client-name']"),
        modal_email_field: () => cy.xpath("//input[@id='share-with-client-email']"),
        modal_link_field: () => cy.xpath("//input[@id='share-with-client']"),
        modal_copy_link_btn: () => cy.xpath("//button[@aria-label='copy link']"),
        modal_email_to_client_btn: () => cy.xpath("//span[normalize-space()='Email link to client']"),
        modal_cancel_btn: () => cy.xpath("//span[normalize-space()='cancel']"),
        email_sent_toast: () => cy.xpath("//div[contains(text(),'Email Successfully Sent!')]"),

        dl_modal_title: () => cy.xpath("//h3[normalize-space()='Client Detail']"),
        dl_modal_first_name: () => cy.xpath("//input[@id='client-firstName']"),
        dl_modal_last_name: () => cy.xpath("//input[@id='client-lastName']"),
        dl_modal_save_btn: () => cy.xpath("//span[normalize-space()='Save']"),
        dl_modal_cancel_btn: () => cy.xpath("//span[normalize-space()='Cancel']"),

        dl_header_title: () => cy.xpath("//h4[normalize-space()='CLIENT REVIEW']"),
        dl_header_status: () => cy.xpath("//span[normalize-space()='Pending']"),
        dl_approve_btn: () => cy.xpath("//span[normalize-space()='APPROVE Banner']"),
        dl_show_comments_btn: () => cy.xpath("//span[normalize-space()='Show comments']"),
        dl_hide_comments_btn: () => cy.xpath("//span[normalize-space()='Hide comments']"),
        dl_tooltip_icon: () => cy.xpath("//body/div[@id='root']/div/div/button[@type='button']/span[1]//*[name()='svg']"),
        dl_tooltip_open: () => cy.xpath("//span[normalize-space()='Show comments']"),

        add_comment_btn: () => cy.xpath("//button[@title='Add Comment']"),
        add_comment_field: () => cy.xpath("//input[@placeholder='Add comment...']"),
        add_reply_field: () => cy.xpath("(//input[@placeholder='Add reply...'])[1]"),
        dot_menu: () => cy.xpath("(//button[@aria-label='menu-item'])[1]"),
        dot_not_fixed: () => cy.xpath("(//li[@role='menuitem'][normalize-space()='Not Fixed'])[1]"),
        dot_resolved: () => cy.xpath("(//li[@role='menuitem'][normalize-space()='Resolved'])[1]"),
        new_label: () => cy.xpath("(//div[contains(text(),'new')])[1]"),
        not_fixed_label: () => cy.xpath("(//div[contains(text(),'Not Fixed')])[1]"),
        resolved_label: () => cy.xpath("//div[contains(text(),'Resolved')]"),




    }

    swc_email() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.swc.swc_btn()
            .click();

        this.swc.modal_title_text()
            .should('have.text', 'Share with Client')
            .click();

        this.swc.modal_name_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Name');
        this.swc.modal_name_field()
            .type('Asad');

        this.swc.modal_email_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Email');
        this.swc.modal_email_field()
            .type('asad.musharaf@devigital.com');

        this.swc.modal_email_to_client_btn()
            .should('not.be.disabled')
            .click();

        this.swc.email_sent_toast()
            .invoke('text')
            .should('equal', 'Email Successfully Sent!');

    }

    swc_link() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.swc.swc_btn()
            .click();

        this.swc.modal_link_field()
            .invoke('val')
            .then(val => {

                const inputValue = val;

                cy.log(inputValue);

                cy.forceVisit(inputValue);
            });

        this.swc.dl_modal_title()
            .should('have.text', 'Client Detail')

        this.swc.dl_modal_first_name()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'First Name');

        this.swc.dl_modal_first_name()
            .type('Asad');

        this.swc.dl_modal_last_name()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Last Name');

        this.swc.dl_modal_last_name()
            .type('Musharaf');

        this.swc.dl_modal_save_btn()
            .click();

    }

    client_review_page() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.swc.dl_header_title()
            .should('have.text', 'CLIENT REVIEW');

        this.swc.dl_header_status()
            .should('have.text', 'Pending');

        this.swc.dl_approve_btn()
            .should('have.text', 'APPROVE Banner');

        this.swc.dl_show_comments_btn()
            .should('have.text', 'Show comments')
            .click();

        this.swc.add_comment_btn()
            .click();

        this.swc.add_comment_field()
            .type('Test1{enter}');

        this.swc.add_reply_field()
            .type('reply1{enter}')

        this.swc.new_label()
            .should('have.text', 'new');

        this.swc.dot_menu()
            .click()

        this.swc.dot_not_fixed()
            .click({ force: true })

        this.swc.not_fixed_label()
            .should('have.text', 'Not Fixed')

        this.swc.dot_menu()
            .click()

        this.swc.dot_resolved()
            .click({ force: true });

        this.swc.resolved_label()
            .should('have.text', 'Resolved');

        this.swc.dl_hide_comments_btn()
            .click();

        cy.go('back');
        cy.go('back');
        cy.go('back');
        cy.reload();
    }


    clickdelicon() {

        cy.wait(3000);

        // cy.xpath(this.jd_banner_preview_area).trigger('mouseover');
        // cy.wait(3000);
        this.jd.bnr_icon_del()
            .click({ force: true });
    }

    clickdelbutton() {
        this.jd.bnr_modal_btn_del()
            .should('be.visible')
            .click();
    }





}