/// <reference types="Cypress" />
export class normal_acquisition {

    acqjob = {
        jobstab: () => cy.xpath("//h6[normalize-space()='Jobs']"),

        no_radio: () => cy.xpath("(//div)[59]"),
        no_card: () => cy.xpath("(//div)[54]"),
        no_card_getformlink_txt: () => cy.xpath("//p[normalize-space()='Get Form Link']"),
        no_card_desc_txt: () => cy.xpath("//p[contains(text(),'Obtain a form link below to share with your')]"),
        no_card_getformlink_btn: () => cy.xpath("//span[normalize-space()='Get Form Link']"),
        modal_heading: () => cy.xpath("//h3[normalize-space()='Signature Form Link']"),
        modal_desc: () => cy.xpath("//p[contains(text(),'Share this link with job participants to collect t')]"),
        modal_link: () => cy.xpath("(//input)[3]"),
        modal_okay_btn: () => cy.xpath("//span[normalize-space()='Okay']"),

        form_link: () => cy.xpath("//input[@type='url']"),
        copy_clipboard_btn: () => cy.xpath("//button[@title='Copy Text']"),
        nojob_data_recieved_txt: () => cy.xpath("//p[normalize-space()='No Job Data Received']"),
        nodata_uploaded_txt: () => cy.xpath("//p[contains(text(),'No data uploaded yet.')]"),
        search_job_data_field: () => cy.xpath("//input[@placeholder='Search job data by name']"),
        search_btn: () => cy.xpath("//*[name()='path' and contains(@d,'M15.5 14h-')]"),
        empty_table: () => cy.xpath("//td[normalize-space()='No records to display']"),

    }

    acq_form = {

        heading: () => cy.xpath("//p[normalize-space()='Optional Fields Acquisition Form']"),
        sub_heading: () => cy.xpath("//p[normalize-space()='Please provide following information']"),
        field_0: () => cy.xpath("//input[@id='field0']"),
        field_1: () => cy.xpath("//textarea[@name='field1']"),
        field_2: () => cy.xpath("//input[@placeholder='Field 2 ']"),
        field_3: () => cy.xpath("//p[normalize-space()='Upload or Take Picture']"),
        field_3_modal_title: () => cy.xpath("//h3[normalize-space()='Upload Your Picture']"),
        field_3_upload_area: () => cy.xpath("//div[@role='button']"),
        field_3_upload_btn: () => cy.xpath("//span[normalize-space()='Upload']"),
        field_3_clear_btn: () => cy.xpath("//span[normalize-space()='Clear']"),
        filed_3_close_btn: () => cy.xpath("//span[normalize-space()='Close']"),
        field_4: () => cy.xpath("(//canvas)[1]"),
        clear_btn: () => cy.xpath("//p[normalize-space()='Clear All']"),
        terms_checkbox: () => cy.xpath("//input[@name='Agree Terms']"),
        terms_txt: () => cy.xpath("(//span)[10]"),
        submit_btn: () => cy.xpath("//span[normalize-space()='submit']"),

        submit_modal_heading: () => cy.xpath("//h3[normalize-space()='Submit Acquisition Form']"),
        submit_modal_desc: () => cy.xpath("//p[contains(text(),'Are you sure you want to submit the acquisition')]"),
        submit_modal_checkbox: () => cy.xpath("(//input[@type='checkbox'])[2]"),
        submit_modal_checkbox_txt: () => cy.xpath("//span[contains(text(),'By checking this box,')]"),
        submit_modal_submit_btn: () => cy.xpath("//span[normalize-space()='Submit']"),

        form_success_title: () => cy.xpath("//p[normalize-space()='Success !']"),
        form_success_desc1: () => cy.xpath("//p[normalize-space()='Thank you for filling out your information!']"),
        form_success_desc2: () => cy.xpath("//p[contains(text(),'Please note that your information will always')]"),
        form_success_desc3: () => cy.xpath("//p[contains(text(),'Write to us at')]"),
        form_success_sign: () => cy.xpath("//p[normalize-space()='-SignaCapture Team']"),
        form_success_ps_txt: () => cy.xpath("//p[normalize-space()='p.s.you can now close this window or tab']"),

    }

    verifyNoCard() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.acqjob.no_card()
            .should('contain.text', 'No')
            .and('contain.text', 'Generate link to capture user data and signatures');

        this.acqjob.no_radio()
            .click();

        this.acqjob.no_card_getformlink_txt()
            .should('contain.text', 'Get Form Link');

        this.acqjob.no_card_desc_txt()
            .should('contain.text', 'Obtain a form link below');

        this.acqjob.no_card_getformlink_btn()
            .click();
    }


    verifyModal() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.acqjob.modal_heading()
            .should('have.text', 'Signature Form Link');

        this.acqjob.modal_desc()
            .should('contain.text', 'Share this link with job participants')

        this.acqjob.modal_link()
            .should('have.attr', 'type', 'url');

        this.acqjob.modal_okay_btn()
            .click();

    }

    verifyForm() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.acqjob.form_link()
            .invoke('val')
            .then(val => {

                const inputValue = val;

                cy.log(inputValue);

                cy.forceVisit(inputValue);
            });

        this.acq_form.heading()
            .should('have.text', 'Optional Fields Acquisition Form');

        this.acq_form.sub_heading()
            .should('have.text', 'Please provide following information');

        this.acq_form.field_0()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Field 0 ');

        this.acq_form.field_0()
            .type('Asad')

        this.acq_form.field_1()
            .invoke('attr', 'name')
            .should('equal', 'field1');

        this.acq_form.field_1()
            .type('Lorem Ipsum')


        this.acq_form.field_2()
            .invoke('attr', 'placeholder')
            .should('equal', 'Field 2 ');

        this.acq_form.field_2()
            .clear()
            .type('28122022')

        this.acq_form.field_3()
            .should('have.text', 'Upload or Take Picture')
            .click();

        this.acq_form.field_3_modal_title()
            .should('have.text', 'Upload Your Picture');

        this.acq_form.field_3_upload_area()
            .should('have.text', 'Upload Picture')
            .selectFile('cypress/fixtures/image.png', {
                action: 'drag-drop'
            });

        this.acq_form.field_3_upload_btn()
            .click();

        cy.wait(3000);

        this.acq_form.field_4()
            .invoke('attr', 'width')
            .should('equal', '520');

        // this.acq_form.field_4()
        //     .trigger('mousedown', 'center')
        //     .click({ release: false })
        //     .trigger('mousemove', { clientX: 200, clientY: 300 })
        //     .trigger('mouseup', 5, 5)
        //     .trigger('mouseleave');


        this.acq_form.field_4()
            .should('exist')
            .trigger('mousedown', {
                x: 50,
                y: 100,
                force: true,
                eventConstructor: 'MouseEvent',
            })
            .trigger('mousemove', {
                x: 110,
                y: 140,
                force: true,
                eventConstructor: 'MouseEvent',
            })
        // .trigger('mouseup', {
        //     x: 110,
        //     y: 140,
        //     force: true,
        //     eventConstructor: 'MouseEvent',
        // });

        this.acq_form.terms_txt()
            .should('contain.text', 'terms of service.');

        this.acq_form.terms_checkbox()
            .click();

        this.acq_form.submit_btn()
            .click();


        this.acq_form.submit_modal_heading()
            .should('contain.text', 'Submit Acquisition Form');

        this.acq_form.submit_modal_desc()
            .should('contain.text', 'Are you sure you want to submit');

        this.acq_form.submit_modal_checkbox()
            .click();

        this.acq_form.submit_modal_checkbox_txt()
            .should('contain.text', 'By checking this box');

        this.acq_form.submit_modal_submit_btn()
            .click();


        this.acq_form.form_success_title()
            .should('contain.text', 'Success !');

        this.acq_form.form_success_desc1()
            .should('contain.text', 'Thank you for filling out your information!');

        this.acq_form.form_success_desc2()
            .should('contain.text', 'Please note that your information');

        this.acq_form.form_success_desc3()
            .should('contain.text', 'Write to us at')
            .and('contain.text', 'imageart411@gmail.com');

        this.acq_form.form_success_sign()
            .should('contain.text', '-SignaCapture Team');

        this.acq_form.form_success_ps_txt()
            .should('contain.text', 'p.s.you can now close this window or tab');

        cy.go('back');
        cy.wait(2000);
        cy.go('back');
        cy.wait(2000);

    }

    verifyTableData() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.get('table thead').within(function () {
            cy.get('th').eq(0).should('have.text', 'Field 0')
            cy.get('th').eq(1).should('have.text', 'Field 1')
            cy.get('th').eq(2).should('have.text', 'Field 2')
            cy.get('th').eq(3).should('have.text', 'Field 3')
            cy.get('th').eq(4).should('have.text', 'Field 4')

        })

        cy.get('table tbody tr:nth-child(1)').within(() => {
            cy.get('td:nth-child(1)')
                .should('have.text', 'Asad');

            cy.get('td:nth-child(2)')
                .should('have.text', 'Lorem Ipsum');

            cy.get('td:nth-child(3)')
                .should('have.text', 'Dec 27, 2022');

            cy.get('td:nth-child(4)')
                .should('contain.text', '.png');

            cy.get('td:nth-child(5)')
                .should('contain.text', '.png');

        });

        this.acqjob.jobstab()
            .click();

    }


}