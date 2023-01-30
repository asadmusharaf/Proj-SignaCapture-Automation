/// <reference types="Cypress" />
export class tenant_login {

    //Login Flow objects
    tlogin = {

        signalogo: () => cy.xpath("//body/div[@id='root']/div/div/div//*[name()='svg']"),
        welcometxt: () => cy.xpath("//p[contains(text(),'Welcome')]"),
        username: () => cy.xpath("//input[@placeholder='Email']"),
        password: () => cy.xpath("//input[@placeholder='Password']"),
        loginbtn: () => cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root makeStyles-root-48 MuiButton-text makeStyles-marginR20-11']"),
        email_validation: () => cy.xpath("//input[@placeholder='Email is required']"),
        pswrd_validation: () => cy.xpath("//input[@placeholder='Password is required']"),
        ivalid_email_validation: () => cy.xpath("//p[normalize-space()='Email is not valid']"),
        invalid_pswrd_toast: () => cy.xpath("//div[@class='message']"),
        welcomemsg: () => cy.xpath("//body/div[@id='root']/header/div/div[1]"),
        profile_icon: () => cy.xpath("//button[@title='Profile']"),
        logout_icon: () => cy.xpath("//button[@title='Logout']"),
        profile_logout_tooltip: () => cy.xpath("//button[contains(@aria-describedby,'mui-')]"),
 
        
    }


    //Verify login Page

    verifyLogo() {
        this.tlogin.signalogo()
            .should('have.css', 'width', '250.00001525878906px')
            //.00001525878906
            .and('have.css', 'height', '50.000003814697266px');
            //.000003814697266
    }

    verifyWelcomeText() {
        this.tlogin.welcometxt()
            .should('have.text', 'Welcome!');
    }

    verifyEmptyFieldsValidation() {
        this.tlogin.loginbtn()
            .should('be.enabled')
            .click();
        this.tlogin.email_validation()
            .invoke('attr', 'placeholder')
            .should('equal', 'Email is required');
        this.tlogin.pswrd_validation()
            .invoke('attr', 'placeholder')
            .should('equal', 'Password is required');
        cy.reload();
        this.tlogin.username()
            .type('test');
        this.tlogin.loginbtn()
            .should('be.enabled').click();
        this.tlogin.ivalid_email_validation()
            .should('have.text', 'Email is not valid');
        cy.reload();
    }

    verifyInvalidPassword(email, invalidpassword) {
        this.tlogin.username()
            .type(email)
            .should('have.value', email);
        this.tlogin.password()
            .type(invalidpassword)
            .should('have.value', invalidpassword);
        this.tlogin.loginbtn()
            .should('be.enabled')
            .click();
        cy.wait(3000);
        this.tlogin.invalid_pswrd_toast()
            .invoke('text')
            .should('equal', 'Invalid email or password.');
    }

    enterUsername(email) {
        this.tlogin.username()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Email');
        this.tlogin.username()
            .type(email)
            .should('have.value', email);
    }

    enterLoginPassword(password) {
        this.tlogin.password()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Password');
        this.tlogin.password()
            .type(password)
            .should('have.value', password);
    }

    clickLoginBtn() {
        this.tlogin.loginbtn()
            .should('be.enabled')
            .click();
        cy.wait(5000);
    }

    //Verify header objects after login
    verifyLoginIsSuccessful() {
        this.tlogin.signalogo()
            .should('have.css', 'width', '250.00001525878906px')
            .and('have.css', 'height', '50.000003814697266px');

        this.tlogin.welcomemsg()
            .should('contain.text', 'Welcome , Asad');

        this.tlogin.profile_icon()
            .invoke('attr', 'title')
            .should('equal', 'Profile');

        this.tlogin.logout_icon()
            .invoke('attr', 'title')
            .should('equal', 'Logout');

        this.tlogin.profile_icon()
            .trigger('mouseover')
        this.tlogin.profile_logout_tooltip()
            .should('be.visible').and('have.attr', 'aria-describedby')

        this.tlogin.logout_icon()
            .trigger('mouseover')
        this.tlogin.profile_logout_tooltip()
            .should('be.visible').and('have.attr', 'aria-describedby')
    }

}