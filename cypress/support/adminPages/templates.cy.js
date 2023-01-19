/// <reference types="Cypress" />
export class admin_templates {

    //Templates Page
    templates = {

        title: () => cy.xpath("//p[normalize-space()='templates']"),
        btn_create_template: () => cy.xpath("//span[normalize-space()='Create template']"),
        table: () => cy.get('table.MuiTable-root'),
        thead: () => cy.get('table.MuiTable-root thead tr th'),
        deltemp: () => cy.xpath("//div[@role='presentation']//button[1]"),

    }


    //Create Template page
    createtemp = {

        title: () => cy.xpath("//p[normalize-space()='Create Template']"),
        back_btn: () => cy.xpath("//span[normalize-space()='back']"),
        existingtemp_txt: () => cy.xpath("//p[normalize-space()='Choose an existing template']"),
        createfrmscratch_txt: () => cy.xpath("//p[normalize-space()='OR, CREATE A TEMPLATE FROM SCRATCH']"),
        startfrmscratch_btn: () => cy.xpath("//span[normalize-space()='Start from Scratch']"),

    }

    //Start from scratch page

    frmscratch = {

        title: () => cy.xpath("//p[normalize-space()='Create TEMPLATE']"),
        back_btn: () => cy.xpath("//span[normalize-space()='back']"),
        creattemp_txt: () => cy.xpath("//p[normalize-space()='Create Your Own Template by adding fields']"),
        temp_name_field: () => cy.xpath("//input[@placeholder='Template Name']"),
        add_a_field_btn: () => cy.xpath("//span[normalize-space()='Add a field']"),
        select_field_drpdwn: () => cy.xpath("//div[@role='button']"),
        drpdwn_text: () => cy.xpath("//li[@data-value='textInput']"),
        drpdwn_multiline: () => cy.xpath("//li[@data-value='multilineTextInput']"),
        drpdwn_date: () => cy.xpath("//li[@data-value='date']"),
        drpdwn_image: () => cy.xpath("//li[@data-value='file']"),
        drpdwn_draw: () => cy.xpath("//li[@data-value='draw']"),
        add_field_btn: () => cy.xpath("//span[normalize-space()='Add Field']"),
        cancel_btn: () => cy.xpath("//span[normalize-space()='Cancel']"),
        field_label: () => cy.xpath("//input[@placeholder='Field Label']"),
        required_check: () => cy.xpath("//input[@name='isRequiredField']"),
        hide_check: () => cy.xpath("//input[@name='isHideField']"),
        set_display_name_check: () => cy.xpath("//input[@name='isNameField']"),
        setemail_check: () => cy.xpath("//input[@name='isEmailField']"),
        setmsg_check: () => cy.xpath("//input[@name='isMessageField']"),
        img_crop_check: () => cy.xpath("//input[@name='enableImageCrop']"),
        aspect_check: () => cy.xpath("//input[@name='enableAspectRatio']"),
        camera_check: () => cy.xpath("//input[@name='enableCamera']"),
        save_btn_modal: () => cy.xpath("//div[@role='dialog']//div//div//span[contains(text(),'Save')]"),
        cancel_btn_modal: () => cy.xpath("//div[@role='dialog']//div//div//span[contains(text(),'Cancel')]"),

        editicon1: () => cy.xpath("//body/div[@id='root']/div/div/div/div/div//*[name()='svg']//*[name()='path' and contains(@d,'M17 3a2.82')]"),
        editicon2: () => cy.xpath("//body//div[@id='root']//div//div//div[2]//div[2]//div[1]//button[1]//span[1]//*[name()='svg']//*[name()='path' and contains(@d,'M17 3a2.82')]"),
        editicon3: () => cy.xpath("//body//div[@id='root']//div//div//div//div[3]//div[2]//div[1]//button[1]//span[1]//*[name()='svg']//*[name()='path' and contains(@d,'M17 3a2.82')]"),
        editicon4: () => cy.xpath("//div[4]//div[2]//div[1]//button[1]//span[1]//*[name()='svg']//*[name()='path' and contains(@d,'M17 3a2.82')]"),
        editicon5: () => cy.xpath("//div[5]//div[2]//div[1]//button[1]//span[1]//*[name()='svg']//*[name()='path' and contains(@d,'M17 3a2.82')]"),
        editicon6: () => cy.xpath("//div[6]//div[2]//div[1]//button[1]//span[1]//*[name()='svg']//*[name()='path' and contains(@d,'M17 3a2.82')]"),

        //TEMPLATE SETTING
        img_guidelines: () => cy.xpath("//input[@name='showImageGuideline']"),
        enable_editor: () => cy.xpath("//input[@name='enableEditor']"),

        multiple_backgrounds: () => cy.xpath("//input[@name='allowMultiBackgroundImages']"),
        show_name: () => cy.xpath("//input[@name='showName']"),
        show_message: () => cy.xpath("//input[@name='showMessage']"),
        show_images: () => cy.xpath("//input[@name='showImages']"),

        enable_preiews: () => cy.xpath("//input[@name='enablePreview']"),
        enable_client_feedback: () => cy.xpath("//input[@name='enableClientFeedback']"),
        create_sharable_link: () => cy.xpath("//input[@name='createShareableLink']"),

        save_btn: () => cy.xpath("//span[normalize-space()='Save']"),

        tempcreatedtoast: () => cy.xpath("//div[@id='notistack-snackbar']"),
        temptoastdismiss: () => cy.xpath("//span[normalize-space()='Dismiss me']"),
        tempdeletedtoast: () => cy.xpath("//div[@id='notistack-snackbar']"),


    }

    //Signa Admin Tabs
    admin_tab = {

        dahboard: () => cy.xpath("//a[@href='/dashboard']"),
        tenants: () => cy.xpath("//a[@href='/tenants']"),
        templates: () => cy.xpath("//a[@href='/templates']"),
        earnings: () => cy.xpath("//a[@href='/earnings']"),
        settings: () => cy.xpath("//a[@href='/settings']"),

    }

    templatespage() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");

        this.admin_tab.templates()
            .click();

        cy.focused()
            .should('have.text', 'templates')
            .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 0px 0px 12px 0px');

        cy.wait(4000);

        this.templates.title()
            .should('be.visible')
            .and('have.text', 'templates');

        cy.get('table thead').within(function () {
            cy.get('th').eq(0).should('have.text', 'Template Name')
            cy.get('th').eq(1).should('have.text', 'Created By')
            cy.get('th').eq(2).should('have.text', 'Added On')
            cy.get('th').eq(3).should('have.text', 'Updated On')
            cy.get('th').eq(4).should('have.text', 'Jobs')
            cy.get('th').eq(5).should('have.text', 'Status')

        })

        this.templates.btn_create_template()
            .should('be.visible')
            .and('have.text', 'Create template')
            .click();

        cy.wait(6000);
    }

    createtemplatepage() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");
        this.createtemp.title()
            .should('be.visible')
            .and('have.text', 'Create Template');

        this.createtemp.back_btn()
            .should('be.visible')
            .and('have.text', 'back');

        this.createtemp.existingtemp_txt()
            .should('be.visible')
            .and('have.text', 'Choose an existing template');

        this.createtemp.createfrmscratch_txt()
            .should('be.visible')
            .and('have.text', 'OR, CREATE A TEMPLATE FROM SCRATCH');

        this.createtemp.startfrmscratch_btn()
            .should('have.text', 'Start from Scratch')
            .click();

        cy.wait(3000);
    }

    createtemplate(tempname, name, email, message, date, img, sign) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");
        this.frmscratch.title()
            .should('be.visible')
            .and('have.text', 'Create TEMPLATE');

        this.frmscratch.back_btn()
            .should('be.visible')
            .and('have.text', 'back');

        this.frmscratch.creattemp_txt()
            .should('be.visible')
            .and('have.text', 'Create Your Own Template by adding fields');

        this.frmscratch.temp_name_field()
            .type(tempname);

        this.frmscratch.add_a_field_btn()
            .click();
        this.frmscratch.select_field_drpdwn()
            .click();
        this.frmscratch.drpdwn_text()
            .click();
        this.frmscratch.add_field_btn()
            .click();

        this.frmscratch.add_a_field_btn()
            .click();
        this.frmscratch.select_field_drpdwn()
            .click();
        this.frmscratch.drpdwn_text()
            .click();
        this.frmscratch.add_field_btn()
            .click();

        this.frmscratch.add_a_field_btn()
            .click();
        this.frmscratch.select_field_drpdwn()
            .click();
        this.frmscratch.drpdwn_multiline()
            .click();
        this.frmscratch.add_field_btn()
            .click();

        this.frmscratch.add_a_field_btn()
            .click();
        this.frmscratch.select_field_drpdwn()
            .click();
        this.frmscratch.drpdwn_date()
            .click();
        this.frmscratch.add_field_btn()
            .click();

        this.frmscratch.add_a_field_btn()
            .click();
        this.frmscratch.select_field_drpdwn()
            .click();
        this.frmscratch.drpdwn_image()
            .click();
        this.frmscratch.add_field_btn()
            .click();

        this.frmscratch.add_a_field_btn()
            .click();
        this.frmscratch.select_field_drpdwn()
            .click();
        this.frmscratch.drpdwn_draw()
            .click();
        this.frmscratch.add_field_btn()
            .click();


        this.frmscratch.editicon1()
            .eq(0)
            .click({ force: true });
        this.frmscratch.field_label()
            .clear()
            .type(name);
        this.frmscratch.required_check()
            .click();
        this.frmscratch.set_display_name_check()
            .click();
        this.frmscratch.save_btn_modal()
            .click();


        this.frmscratch.editicon2()
            .click({ force: true });
        this.frmscratch.field_label()
            .clear()
            .type(email);
        this.frmscratch.required_check()
            .click();
        this.frmscratch.setemail_check()
            .click();
        this.frmscratch.save_btn_modal()
            .click();


        this.frmscratch.editicon3()
            .click({ force: true });
        this.frmscratch.field_label()
            .clear()
            .type(message);
        this.frmscratch.setmsg_check()
            .click();
        this.frmscratch.save_btn_modal()
            .click();

        this.frmscratch.editicon4()
            .click({ force: true });
        this.frmscratch.field_label()
            .clear()
            .type(date);
        this.frmscratch.save_btn_modal()
            .click();

        this.frmscratch.editicon5()
            .click({ force: true });
        this.frmscratch.field_label()
            .clear()
            .type(img);
        this.frmscratch.img_crop_check()
            .click();
        this.frmscratch.aspect_check()
            .click();
        this.frmscratch.camera_check()
            .click();
        this.frmscratch.save_btn_modal()
            .click();

        this.frmscratch.editicon6()
            .click({ force: true });
        this.frmscratch.field_label()
            .clear()
            .type(sign);
        this.frmscratch.save_btn_modal()
            .click();

        this.frmscratch.img_guidelines()
            .click();

        this.frmscratch.enable_editor()
            .click();
        this.frmscratch.multiple_backgrounds()
            .click();
        this.frmscratch.show_name()
            .click();
        this.frmscratch.show_message()
            .click();
        this.frmscratch.show_images()
            .click();

        this.frmscratch.enable_preiews()
            .click();
        this.frmscratch.enable_client_feedback()
            .click();
        this.frmscratch.create_sharable_link()
            .click();

        this.frmscratch.save_btn()
            .click();

    }

    verifyTemplateToast() {
        this.frmscratch.tempcreatedtoast()
            .should('have.text', 'Template Created Successfully');

        this.frmscratch.temptoastdismiss()
            .click();
    }

    verifytable() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");

        cy.get('table tbody tr').contains('tr', 'Automation').within(() => {

            const dayjs = require("dayjs");
            const todaysDate = dayjs().format("MMM DD, YYYY");

            cy.get('td').eq(0).should('have.text', 'Automation Template')
            cy.get('td').eq(1).should('have.text', 'QA Team')
            cy.get('td').eq(2).should('have.text', todaysDate)
            cy.get('td').eq(3).should('have.text', todaysDate)
            cy.get('td').eq(4).should('have.text', '0')
            cy.get('td').eq(5).should('have.text', 'unpublish')
        })

        // cy.get('table tbody tr').each(($row) => {
        //     cy.wrap($row).within(() => {
        //         cy.get('td').each(($col) => {

        //             if ($col.text() == 'Automation Template') {

        //                 cy.get('td:nth-child(7) button:nth-child(2)').click()
        //             }


        //         })

        //     })
        //     cy.wait(3000);

        //     this.templates.deltemp().click();


        // })

        // this.templates.table()
        // .contains('td', 'Automation Template')
        // .should('be.visible');

        // this.templates.thead().should('have.length', '7')

        // this.templates.thead().each(($el) => {
        //     cy.wrap($el).invoke('text').then((text) => {
        //         cy.log(text)
        //     })
        // })
    }

    deleteTemplate() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.OQ.b2vqRHqMnkyyQtYz4IsQ29cE5rUVeo5yAEP5CD30TFE");

        cy.get('table tbody tr').contains('tr', 'Automation').within(() => {

            cy.get('td:nth-child(7) button:nth-child(2)').click()
        });

        this.templates.deltemp().click();

    }

    verifyTempDeletedSuccessfully() {
        this.frmscratch.tempdeletedtoast()
            .should('have.text', 'Template Deleted Successfully');

        this.frmscratch.temptoastdismiss()
            .click();
    }



}