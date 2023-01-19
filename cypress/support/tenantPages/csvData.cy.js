/// <reference types="Cypress" />
export class csv_data {

    csv = {
        clicknewjobcard: () => cy.xpath("//body/div[@id='root']/main/div/div[1]/div[1]/div[1]/div[1]"),
        initial_csv_txt: () => cy.xpath("//p[normalize-space()='Do you have initial CSV data to upload?']"),
        download_blank_csv: () => cy.xpath("//a[normalize-space()='(download blank csv template)']"),
        yes_radio: () => cy.xpath("(//div)[49]"),
        yes_card: () => cy.xpath("(//div)[44]"),
        yes_card_title: () => cy.xpath("//p[normalize-space()='Upload Job CSV Data']"),
        yes_card_csv_field: () => cy.xpath("//h6[contains(text(),'Click to select or drag and drop a csv file in this area.')]"),
        yes_card_zip_field: () => cy.xpath("//h6[contains(text(),'Click to select or drag and drop a zip file in this area.')]"),
        upload_btn: () => cy.xpath("//span[normalize-space()='Upload']"),
        csv_error_close_btn: () => cy.xpath("//span[normalize-space()='CLose']"),
    }

    addJobDataViaCsv() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.wait(4000);
        this.csv.clicknewjobcard()
            .click();

        this.csv.initial_csv_txt()
            .should('contain.text', 'Do you have initial CSV data to upload?');

        this.csv.download_blank_csv()
            .should('be.visible')
            .click();

        cy.verifyDownload('job-csv-template.csv', { timeout: 6000 });

        this.csv.yes_card()
            .should('contain.text', 'CSV file upload')
            .and('contain.text', 'Yes');

        this.csv.yes_radio()
            .click();

        this.csv.yes_card_csv_field()
            .should('contain.text', 'Click to select or drag and drop a csv file in this area.')
            .selectFile('cypress/fixtures/job-csv-template .csv', {
                action: 'drag-drop'
            });

        this.csv.yes_card_zip_field()
            .should('contain.text', 'Click to select or drag and drop a zip file in this area.')
            .selectFile('cypress/fixtures/images csv.zip', {
                action: 'drag-drop'
            });

        this.csv.upload_btn()
            .click();
        cy.wait(2000)

        this.csv.csv_error_close_btn()
            .click();

        cy.wait(2000)

        this.csv.upload_btn()
            .click();

        cy.wait(2000)

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
                .should('have.text', 'lorem ipsum');

            cy.get('td:nth-child(3)')
                .should('have.text', 'Dec 19, 2022');

            cy.get('td:nth-child(4)')
                .should('have.text', 'img1.jpeg');

            cy.get('td:nth-child(5)')
                .should('have.text', 'img2.png');

            // cy.xpath("//input[@type='url']")
            //     .invoke('val')
            //     .then(val => {

            //         const inputValue = val;

            //         cy.log(inputValue);

            //         cy.forceVisit(inputValue);
            //     });

        });


    }


}