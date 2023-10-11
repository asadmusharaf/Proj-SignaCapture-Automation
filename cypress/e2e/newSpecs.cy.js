/// <reference types="Cypress" />
import { tenant_login } from "../support/tenantPages/login.cy"
import { client_preview } from "../support/tenantPages/clientPreview.cy"
import { signa_editor } from "../support/tenantPages/editor.cy"

const tlogin = new tenant_login();
const swc = new client_preview();
const editor = new signa_editor();



describe('Testing of new/ongoing modules that are being automated',
    {
        viewportHeight: 900,
        viewportWidth: 1440,
    },
    () => {

        beforeEach(function () {
            cy.fixture('signaTenant').then(function (data) {
                this.data = data

            });
        });

        it('Login', function () {
            cy.visit(this.data.stageURL);
            tlogin.enterUsername(this.data.email);
            tlogin.enterLoginPassword(this.data.password);
            tlogin.clickLoginBtn();
        });


        it('Select Job For Creating Banner with Signature', function () {
            editor.selectjob();
            editor.clickcreatebannerbtn();

        });

        it('Set Canvas Width and Height', function () {
            editor.enterwidthandheight();
            editor.clicksavebtn();

        });

        it('Upload a Background image to canvas', function () {
            editor.uploadimage();

        });

        it('Generate and Preview the Banner With Signature', function () {
            editor.previewEditorBanner();

        });


        it('Share with client - verify modal and send the email', function () {
            swc.swc_email();

        });


        it('Share with client - Via direct link', function () {
            swc.swc_link();
      

        });

        it('Add Comments to banner preview', function () {
            swc. client_review_page();

        });
    
    });