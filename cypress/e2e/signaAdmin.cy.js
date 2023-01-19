/// <reference types="Cypress" />
import { admin_login } from "../support/adminPages/login.cy"
import { admin_dashboard } from "../support/adminPages/dashboard.cy"
import { admin_tenants } from "../support/adminPages/tenants.cy"
import { admin_templates } from "../support/adminPages/templates.cy"
import { admin_earnings } from "../support/adminPages/earnings.cy"
import { admin_settings } from "../support/adminPages/settings.cy"

const alogin = new admin_login();
const dashboard = new admin_dashboard();
const tenants = new admin_tenants();
const templates = new admin_templates();
const earnings = new admin_earnings();
const settings = new admin_settings();


describe('Signa Capture Admin Sanity Suite',
    {
        viewportHeight: 900,
        viewportWidth: 1440,
    },
    () => {

        beforeEach(function () {
            cy.fixture('signaAdmin').then(function (data) {
                this.data = data

            });
        });

        //-----------------------------------------------------------------------
        //Verify Login Page

        it('Verify Signa Admin Login', function () {
            alogin.navigateurl(this.data.stageURL);
            alogin.verifylogo();
            alogin.verifyadminlogintext();
            alogin.emptyfieldvalidation(this.data.invalidEmail);
            alogin.invalidpswrdverify(this.data.email, this.data.invalidpassword);
            alogin.enterloginemail(this.data.email);
            alogin.enterloginpassword(this.data.password);
            alogin.clickloginbtn();

        })

        //-----------------------------------------------------------------------
        //Verify Dashboard Page

        it('Verify Logo And Header After Login', function () {
            dashboard.verifyDboardHeader();

        });

        it('Verify Sidebar Menu Tabs', function () {
            dashboard.verifySidebarTabs();

        });

        it('Verify Dashboard Summary Section', function () {
            dashboard.verifyDboardSummary();

        });

        it('Verify Dashboard New Tenants Section', function () {
            dashboard.verifyDboardNewTenants();

        });

        //-----------------------------------------------------------------------
        //Verify Tenants Page

        it('Signa Admin Tenants', function () {
            tenants.verifytable();

        });

        //-----------------------------------------------------------------------
        //Verify Templates Page

        it('Verify Templates page', function () {
            templates.templatespage();
        });

        it('Verify Create Template Page', function () {
            templates.createtemplatepage();
        });

        it('Create A New Template From Scratch', function () {
            templates.createtemplate(this.data.templateName, this.data.tname,
                this.data.temail, this.data.tmessage, this.data.tdate,
                this.data.tuploadimg, this.data.tdrawsign);
        });

        it('Verify Tempalate is Created Successfully', function () {
            templates.verifyTemplateToast();
        });

        it('Verify Newly Created Template', function () {
            templates.verifytable();
        });

        it('Delete Newly Created Template', function () {
            templates.deleteTemplate();
        });

        it('Verify Template is Deleted Successfully', function () {
            templates.verifyTempDeletedSuccessfully();
        });

        //-----------------------------------------------------------------------
        //Verify Earnings Page

        it('Signa Admin Earnings', function () {
            earnings.verifyearningstab();
        });

        //-----------------------------------------------------------------------
        //Verify Settings Page

        it('Verify Settings Page', function () {
            settings.verifyProfileTab();
        });

        it('Change Profile picture', function () {
            settings.changeProfilePicture();
        });

        it('Change Profile Password', function () {
            settings.changePassword();
        });

        it('Verify Plans Tab', function () {
            settings.verifyPlansTab();
        });

        it('Verify Offers Tab', function () {
            settings.verifyOffersTab();
        });

        it('Verify Payment Settings Tab', function () {
            settings.verifyPaymentTab();
        });

    });