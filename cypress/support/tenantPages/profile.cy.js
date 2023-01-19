/// <reference types="Cypress" />
export class tenant_profile {


    //Profile page objects
    profile = {

        profilebtn: () => cy.get('.userIcon_svg__feather'),
        title: () => cy.xpath("//body/div[@id='root']/main/div/p[1]"),
        changepic: () => cy.xpath("//span[normalize-space()='Change Picture']"),
        change_pic_txt: () => cy.xpath("//h3[normalize-space()='Change Profile Picture']"),
        upload_new_pic_txt: () => cy.xpath("//p[normalize-space()='Upload new profile picture below']"),
        uploadimgarea: () => cy.xpath("//div[@role='button']"),
        clear_btn: () => cy.xpath("//span[contains(text(),'Clear')]"),
        upload_btn: () => cy.xpath("//span[normalize-space()='Upload']"),
        cancel_btn: () => cy.xpath("//span[normalize-space()='Cancel']"),
        dragtoplace_txt: () => cy.xpath("//p[normalize-space()='Drag to place your picture in circle']"),
        set_pic_btn: () => cy.xpath("//span[normalize-space()='Set Profile Picture']"),
        first_name_field: () => cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input'),
        last_name_field: () => cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input'),
        email_disabled: () => cy.xpath("//input[@placeholder='Email']"),
        update_profile_btn: () => cy.xpath("//span[normalize-space()='Update Profile']"),
        chng_pswrd_txt: () => cy.xpath("//label[normalize-space()='Change Password']"),
        curr_pswrd_field: () => cy.xpath("//input[@placeholder='Current Password']"),
        new_pswrd_field: () => cy.xpath("//input[@placeholder='New Password']"),
        verify_pswrd_field: () => cy.xpath("//input[@placeholder='Verify Password']"),
        save_changes_btn: () => cy.xpath("//span[normalize-space()='SAVE CHANGES']"),
        curr_pswrd_vali: () => cy.xpath("//input[@placeholder='Current Password is required']"),
        req_pswrd_vali: () => cy.xpath("//input[@placeholder='Password is required']"),
        verify_pswrd_vali: () => cy.xpath("//input[@placeholder='Verify Password is required']"),
        minchars_vali: () => cy.xpath("//p[normalize-space()='Password should contain at least 8 characters']"),
        pswrd_not_match_vali: () => cy.xpath("//p[normalize-space()='Password not matched']"),

    }


    //Profile settings flow

    clickProfileIcon() {
        this.profile.profilebtn()
            .should('be.visible')
            .click();
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
    }

    verifyProfileTitle() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.profile.title()
            .invoke('text')
            .as('welcomeName')

        cy.get('@welcomeName').then((welcomeName) => {
            //Access storedValue here
            cy.log(welcomeName)

            this.profile.title()
                .should('have.text', welcomeName);
        })
    }

    changeProfileImage() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.profile.changepic()
            .should('not.be.disabled')
            .click();

        this.profile.change_pic_txt()
            .should('have.text', 'Change Profile Picture');

        this.profile.upload_new_pic_txt()
            .should('have.text', 'Upload new profile picture below');

        this.profile.upload_btn()
            .should('not.be.enabled');

        this.profile.cancel_btn()
            .should('not.be.disabled')
            .and('have.text', 'Cancel');

        this.profile.uploadimgarea()
            .should('have.text', 'Click or drop your profile picture here')
            //.should('not.be.disabled')
            .selectFile('cypress/fixtures/image.png', {
                action: 'drag-drop'
            });
        cy.wait(2000)

        this.profile.upload_btn()
            .should('not.be.disabled');

        this.profile.clear_btn()
            .should('not.be.disabled')
            .click();
        cy.wait(2000)

        this.profile.upload_btn()
            .should('not.be.enabled');

        this.profile.uploadimgarea()
            .should('have.text', 'Click or drop your profile picture here')
            //.should('not.be.disabled')
            .selectFile('cypress/fixtures/image.png', {
                action: 'drag-drop'
            });
        cy.wait(2000)

        this.profile.upload_btn()
            .should('not.be.disabled')
            .click();

        cy.wait(2000);

        this.profile.change_pic_txt()
            .should('be.visible')
            .and('have.text', 'Change Profile Picture');

        this.profile.dragtoplace_txt()
            .should('have.text', 'Drag to place your picture in circle');

        this.profile.cancel_btn()
            .should('not.be.disabled')
            .and('have.text', 'Cancel');

        this.profile.set_pic_btn()
            .should('not.be.disabled')
            .and('have.text', 'Set Profile Picture')
            .click();
        cy.wait(2000);
    }

    enterFirstNamefield(name) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.profile.first_name_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'First Name');

        this.profile.first_name_field()
            .type(name);
    }

    enterLastnameField(lastname) {
        this.profile.last_name_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Last Name');

        this.profile.last_name_field()
            .type(lastname);
    }

    verifyDisabledEmailField() {
        this.profile.email_disabled()
            .should('be.disabled');
    }

    clickUpdateProfileBtn() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.profile.update_profile_btn()
            .should('be.visible')
            .click();
    }

    verifyUpdatedProfileTitle(name, lastname) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        
        this.profile.title()
            .should('have.text', 'Hello, ' + name + " " + lastname);
        cy.wait(2000);
    }

    changePassword(pswrd) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.profile.chng_pswrd_txt()
            .should('be.visible')
            .and('have.text', 'Change Password')

        this.profile.curr_pswrd_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Current Password');

        this.profile.curr_pswrd_field()
            .type(pswrd);

        this.profile.new_pswrd_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'New Password');

        this.profile.new_pswrd_field()
            .type(pswrd);

        this.profile.verify_pswrd_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Verify Password');

        this.profile.verify_pswrd_field()
            .type(pswrd);

        this.profile.save_changes_btn()
            .should('not.be.disabled')
            .click();
        cy.wait(1000);
    }

    verifyPasswordFieldValidation(pswrd) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.profile.save_changes_btn()
            .should('not.be.disabled')
            .click();

        this.profile.curr_pswrd_vali()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Current Password is required');

        this.profile.req_pswrd_vali()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Password is required');

        this.profile.verify_pswrd_vali()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Verify Password is required');

        this.profile.curr_pswrd_vali()
            .type(pswrd);

        this.profile.req_pswrd_vali()
            .type('123');

        this.profile.verify_pswrd_vali()
            .type('1234');

        this.profile.save_changes_btn()
            .should('not.be.disabled')
            .click();

        this.profile.pswrd_not_match_vali()
            .should('have.text', 'Password not matched');

        this.profile.minchars_vali()
            .should('have.text', 'Password should contain at least 8 characters');
    }

}