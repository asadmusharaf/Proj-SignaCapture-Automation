/// <reference types="Cypress" />
export class tenant_jobs {

    //Add New job page objects
    jobs = {

        jobstab: () => cy.xpath("//h6[normalize-space()='Jobs']"),
        title: () => cy.xpath("//p[normalize-space()='Jobs']"),
        addjobbutton: () => cy.xpath("//span[normalize-space()='Add a job']"),
        jobnamefield: () => cy.xpath("//input[@placeholder='Job Name']"),
        jobdescfield: () => cy.xpath("//textarea[@placeholder='Job Description']"),
        jobemailfield: () => cy.xpath("//input[@placeholder='Enter Contacts Email']"),
        jobcontactfield: () => cy.xpath("//input[@placeholder='Enter Contacts Phone Number']"),
        jobtemplatedropdown: () => cy.xpath("//div[contains(text(),'Job Template')]"),
        signatureonly: () => cy.xpath("//div[normalize-space()='Optional Fields']"),
        addjobbtn: () => cy.xpath("//span[normalize-space()='ADD JOB']"),

        viewalljobs_drpdwn: () => cy.xpath("//div[@role='button']"),
        searchjobs_field: () => cy.xpath("//input[@placeholder='Search Jobs']"),
        alljobs_btn: () => cy.xpath("//div[contains(text(),'All jobs')]"),
        loadmore_btn: () => cy.xpath("//span[normalize-space()='Load more']"),

        //Job Details page
        edit_icon: () => cy.xpath("//button[@title='Edit']"),
        back_btn: () => cy.xpath("//p[normalize-space()='Back']"),
        alljobs_btn: () => cy.xpath("//div[contains(text(),'All jobs')]"),
        loadmore_btn: () => cy.xpath("//span[normalize-space()='Load more']"),

        //Edit Job Modal
        edit_modal_title: () => cy.xpath("//h3[normalize-space()='Edit Job']"),
        edit_upload_area: () => cy.xpath("(//div[@role='button'])[1]"),
        edit_clear_btn: () => cy.xpath("(//div[@role='button'])[1]"),
        edit_disabled_temp_field: () => cy.xpath("//div[contains(text(),'Optional Fields')]"),
        edit_save_job_btn: () => cy.xpath("//span[normalize-space()='SAVE JOB']"),
        edit_save_job_toast: () => cy.xpath("//div[contains(text(),'Job Updated Successfully')]"),
        edit_save_job_toast_close: () => cy.xpath(" (//div)[4]"),

        //delete job objects
        clicknewjobcard: () => cy.xpath("//body/div[@id='root']/main/div/div[1]/div[1]/div[1]/div[1]"),
        clickdelicon: () => cy.xpath("//button[@title='Delete']"),
        clickdelbutton: () => cy.xpath("//span[normalize-space()='Delete Job']"),

    }

    jobdetails = {
        job_title: () => cy.xpath("//h3[normalize-space()='demo job edited']"),
        created_at: () => cy.xpath("(//div)[25]"),
        expiry_date: () => cy.xpath("(//div)[26]"),
        job_template: () => cy.xpath("(//div)[27]"),
        assigned_to: () => cy.xpath("(//div)[29]"),
        contacts_email: () => cy.xpath("(//div)[30]"),
        contacts_phone: () => cy.xpath("(//div)[31]"),
        description: () => cy.xpath("//p[contains(text(),'This is sample text from cypress json fixture file')]"),
        design_chosen: () => cy.xpath("//div[contains(text(),'Design chosen')]"),
        initial_csv_txt: () => cy.xpath("//p[normalize-space()='Do you have initial CSV data to upload?']"),
        download_blank_csv: () => cy.xpath("//a[normalize-space()='(download blank csv template)']"),
        yes_radio: () => cy.xpath("(//div)[49]"),
        no_radio: () => cy.xpath("(//div)[59]"),
        yes_card: () => cy.xpath("(//div)[44]"),
        no_card: () => cy.xpath("(//div)[54]"),
        yes_card_title: () => cy.xpath("//p[normalize-space()='Upload Job CSV Data']"),
        yes_card_csv_field: () => cy.xpath("//h6[contains(text(),'Click to select or drag and drop a csv file in this area.')]"),
        yes_card_zip_field: () => cy.xpath("//h6[contains(text(),'Click to select or drag and drop a zip file in this area.')]"),
        upload_btn: () => cy.xpath("//span[normalize-space()='Upload']"),
        csv_error_close_btn: () => cy.xpath("//span[normalize-space()='CLose']"),
        no_card_getformlink_txt: () => cy.xpath("//p[normalize-space()='Get Form Link']"),
        no_card_desc_txt: () => cy.xpath("//p[contains(text(),'Obtain a form link below to share with your')]"),
        no_card_getformlink_btn: () => cy.xpath("//span[normalize-space()='Get Form Link']"),

    }


    //Add job flow
    createNewJob(jobname, jobdesc, jobemail, jobnumber) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.jobs.jobstab()
            .should('be.visible')
            .click();

        cy.wait(1000);

        cy.focused()
            .should('have.text', 'Jobs')
            .and('have.css', 'color', 'rgb(76, 132, 255)');
        cy.wait(3000);

        this.jobs.addjobbutton()
            .should('be.visible')
            .click();

        this.jobs.jobnamefield()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Job Name');
        this.jobs.jobnamefield()
            .type(jobname);

        this.jobs.jobdescfield()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Job Description');
        this.jobs.jobdescfield()
            .type(jobdesc);

        this.jobs.jobemailfield()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Enter Contacts Email');
        this.jobs.jobemailfield()
            .type(jobemail);

        this.jobs.jobcontactfield()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Enter Contacts Phone Number');
        this.jobs.jobcontactfield()
            .type(jobnumber);

        this.jobs.jobtemplatedropdown()
            .should('have.text', 'Job Template')
            .click();

        this.jobs.signatureonly()
            .scrollIntoView()
            .should('be.visible')
            .and('have.text', 'Optional Fields')
            .click();

        this.jobs.addjobbtn()
            .should('be.visible')
            .click();
    }

    searchJob(jobname) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        
        this.jobs.viewalljobs_drpdwn()
            .should('be.visible')
            .click();

        this.jobs.searchjobs_field()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Search Jobs');

        this.jobs.searchjobs_field()
            .type(jobname)
            .type('{enter}');

        this.jobs.clicknewjobcard()
            .should('be.visible')
            .and('contain.text', 'demo job')
            .click();

        this.jobs.back_btn()
            .click();
    }

    editJob(jobname, editjobname, jobdesc, editjobdesc, jobemail, editjobemail, jobnumber, editjobnumber) {
        cy.wait(3000);
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.jobs.clicknewjobcard()
            .should('be.visible')
            .and('contain.text', 'demo job')
            .click();

        this.jobs.edit_icon()
            .should('be.visible')
            .click();

        this.jobs.edit_modal_title()
            .should('have.text', 'Edit Job');

        this.jobs.edit_upload_area()
            .should('have.text', 'Click or Drop Job Logo Here (for reference use only)')
            .selectFile('cypress/fixtures/image.png', {
                action: 'drag-drop'
            });

        this.jobs.jobnamefield()
            .should('have.value', jobname)
            .clear()
            .type(editjobname);

        this.jobs.jobdescfield()
            .should('have.value', jobdesc)
            .clear()
            .type(editjobdesc);

        this.jobs.jobemailfield()
            .should('have.value', jobemail)
            .clear()
            .type(editjobemail);

        this.jobs.jobcontactfield()
            .clear()
            .type(editjobnumber);

        this.jobs.edit_disabled_temp_field()
            .should('have.attr', 'aria-disabled', 'true')

        this.jobs.edit_save_job_btn()
            .click();

        this.jobs.edit_save_job_toast()
            .should('have.text', 'Job Updated Successfully');

        this.jobs.edit_save_job_toast_close()
            .click();
    }

    verifyJobDetails(editjobname, firstname, editjobemail) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        this.jobdetails.job_title()
            .should('contain.text', editjobname);

        this.jobdetails.created_at()
            .should('contain.text', 'Created')
            .and('contain.text', '2023');

        this.jobdetails.expiry_date()
            .should('contain.text', 'Expiry')
            .and('contain.text', 'No Expiry');

        this.jobdetails.job_template()
            .should('contain.text', 'Job Template')
            .and('contain.text', 'Optional Fields');

        this.jobdetails.assigned_to()
            .should('contain.text', 'Assigned ')
        //.and('contain.text', firstname);

        this.jobdetails.contacts_email()
            .should('contain.text', 'Contacts ')
            .and('contain.text', editjobemail);

        this.jobdetails.contacts_phone()
            .should('contain.text', 'Contacts ')
            .and('contain.text', '+1 (123) 456-7890');

        this.jobdetails.description()
            .should('contain.text', 'edited')

        this.jobdetails.design_chosen()
            .should('contain.text', 'Design chosen')
    }

    //delete newly created job
    clicknewjob() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        this.jobs.jobstab()
            .click();
        this.jobs.clicknewjobcard()
            .should('be.visible')
            .click();
    }

    deleteicon() {
        this.jobs.clickdelicon()
            .should('be.visible')
            .click();
    }

    confirmdel() {
        this.jobs.clickdelbutton()
            .should('be.visible')
            .click();
        cy.wait(2000);
    }

}