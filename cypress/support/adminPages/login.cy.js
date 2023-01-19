/// <reference types="Cypress" />
export class admin_login {


    login = {

        logo: () => cy.xpath("//body/div[@id='root']/div/div//*[name()='svg']"),
        adminlogin_text: () => cy.xpath("//p[normalize-space()='Admin Login']"),
        email_field: () => cy.xpath("//input[@placeholder='Email']"),
        password_field: () => cy.xpath("//input[@placeholder='Password']"),
        btn_login: () => cy.xpath("//span[normalize-space()='Log in']"),
        email_validation: () => cy.xpath("//input[@placeholder='Email is required']"),
        password_validation: () => cy.xpath("//input[@placeholder='Password is required']"),
        invalid_email_validation: () => cy.xpath("//p[normalize-space()='Email is not valid']"),
        invalid_login_toast: () => cy.xpath("//div[@id='notistack-snackbar']"),
        toast_dismiss: () => cy.xpath("//span[normalize-space()='Dismiss me']"),
        toast_crossicon: () => cy.xpath("//div[@id='notistack-snackbar']//*[name()='svg']"),

    }



    navigateurl(url) {
        cy.visit(url)
    }


    verifylogo() {
        this.login.logo()
            .should('have.css', 'width', '250px')
            .and('have.css', 'height', '50px');
    }

    verifyadminlogintext() {
        this.login.adminlogin_text()
            .should('have.text', 'Admin Login');
    }


    emptyfieldvalidation(invaidemail) {
        this.login.btn_login()
            .should('not.be.disabled')
            .click();

        this.login.email_validation()
            .invoke('attr', 'placeholder')
            .should('equal', 'Email is required');

        this.login.password_validation()
            .invoke('attr', 'placeholder')
            .should('equal', 'Password is required');

        cy.reload();

        this.login.email_field()
            .type(invaidemail);

        this.login.btn_login()
            .should('not.be.disabled')
            .click();

        this.login.invalid_email_validation()
            .should('have.text', 'Email is not valid');

        cy.reload();
    }

    invalidpswrdverify(email, invalidpswrd) {
        this.login.email_field()
            .type(email)
            .should('have.value', email);

        this.login.password_field()
            .type(invalidpswrd)
            .should('have.value', invalidpswrd);

        this.login.btn_login()
            .should('not.be.disabled')
            .click();

        cy.wait(3000);

        this.login.invalid_login_toast()
            .invoke('text')
            .should('equal', 'Invalid email or password.');

        this.login.btn_login()
            .should('not.be.disabled')
            .click();

        cy.wait(5000);

        this.login.toast_dismiss()
            .click();

        this.login.btn_login()
            .should('not.be.disabled')
            .click();

        cy.wait(3000);

        this.login.toast_crossicon()
            .click();

        cy.wait(3000);
    }


    enterloginemail(email) {
        this.login.email_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Email');

        this.login.email_field()
            .type(email)
            .should('have.value', email);

    }

    enterloginpassword(password) {
        this.login.password_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Password');

        this.login.password_field()
            .type(password)
            .should('have.value', password);
    }

    clickloginbtn() {
        this.login.btn_login()
            .should('not.be.disabled')
            .click();

        cy.wait(5000);
    }


}