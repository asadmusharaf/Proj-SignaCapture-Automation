/// <reference types="Cypress" />
export class tenant_forget_password {

    //Forget Password Objects
    fpswrd = {

        btn: () => cy.xpath("//span[normalize-space()='Forget Password?']"),
        modal_title: () => cy.xpath("//h3[contains(text(),' fix this')]"),
        modal_desc: () => cy.xpath("//p[contains(text(),'Provide your registered email')]"),
        email: () => cy.xpath("//input[@class='MuiInputBase-input makeStyles-input-34 makeStyles-input-55']"),
        email_blank: () => cy.xpath("//div[@role='dialog']//div//div//div//div//input[@placeholder='Email']"),
        btn_emailpswrd: () => cy.xpath("//span[normalize-space()='Email Password']"),
        btn_cancel: () => cy.xpath("//span[normalize-space()='Cancel']"),
        email_validation: () => cy.xpath("//input[@placeholder='Email is required']"),
        email_ivalid_validation: () => cy.xpath("//div[@role='dialog']//div//div//p[contains(text(),'Email is not valid')]"),

        //Forget password confirmation modal
        confirm_title: () => cy.xpath("//h3[normalize-space()='Done! New password is on its way']"),
        confirm_desc: () => cy.xpath("//p[contains(text(),'We have emailed you a new password.')]"),
        confirm_btn_login: () => cy.xpath("//span[normalize-space()='Login Now']"),

    }

    //Forget Password flow

    navigateUrl(url) {
        cy.visit(url);
        cy.url().should('eq', 'https://stage.signacapture.com/login')
    }

    clickForgetPasswordButton() {
        this.fpswrd.btn()
            .should('be.visible')
            .click();
    }

    verifyForgetPasswordModal() {
        this.fpswrd.modal_title()
            .should('have.text', "Don't worry! We'll fix this");
        this.fpswrd.modal_desc()
            .should('contain.text', "Provide your registered email");
    }

    verifyEmailFieldValidation() {
        this.fpswrd.btn_emailpswrd()
            .should('be.visible')
            .click();
        this.fpswrd.email_validation()
            .invoke('attr', 'placeholder')
            .should('equal', 'Email is required');
        this.fpswrd.email_validation()
            .type('test');
        this.fpswrd.btn_emailpswrd()
            .should('be.visible')
            .click();
        this.fpswrd.email_ivalid_validation()
            .should('have.text', 'Email is not valid');
    }

    enterEmailAndCancel(fpswrdemail) {
        this.fpswrd.email()
            .clear()
            .type(fpswrdemail);
        this.fpswrd.btn_cancel()
            .click();
        this.fpswrd.btn()
            .should('be.visible')
            .click();
    }

    enterForgetPasswordEmail(fpswrdemail) {
        this.fpswrd.email_blank()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Email');
        this.fpswrd.email_blank()
            .type(fpswrdemail);
    }


    clickEmailPasswordBtn() {
        this.fpswrd.btn_emailpswrd()
            .should('be.visible')
            .click();
    }

    //Verify forget password confirmation modal
    verifyEmailSentModal() {
        this.fpswrd.confirm_title()
            .should('have.text', "Done! New password is on its way");
        this.fpswrd.confirm_desc()
            .should('contain.text', "We have emailed you a new password.");
    }

    clickLoginNowBtn() {
        this.fpswrd.confirm_btn_login()
            .should('be.visible')
            .click();
        cy.wait(3000);
    }

}