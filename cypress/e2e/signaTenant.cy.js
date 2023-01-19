/// <reference types="Cypress" />
import { tenant_login } from "../support/tenantPages/login.cy"
import { tenant_forget_password } from "../support/tenantPages/forgetPassword.cy"
import { tenant_profile } from "../support/tenantPages/profile.cy"
import { tenant_jobs } from "../support/tenantPages/jobs.cy"
import { user_management } from "../support/tenantPages/userManagement.cy"
import { signa_editor } from "../support/tenantPages/editor.cy"
import { normal_acquisition } from "../support/tenantPages/normalAcquisition.cy"
import { csv_data } from "../support/tenantPages/csvData.cy"

const tlogin = new tenant_login();
const fpswrd = new tenant_forget_password();
const profile = new tenant_profile();
const jobs = new tenant_jobs();
const um = new user_management();
const editor = new signa_editor();
const nAcq = new normal_acquisition();
const csv = new csv_data();

describe('Signa Capture Tenant Sanity Suite',
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

        it('Verify Forget Password', function () {
            fpswrd.navigateUrl(this.data.stageURL);
            fpswrd.clickForgetPasswordButton();
            fpswrd.verifyForgetPasswordModal();
            fpswrd.verifyEmailFieldValidation();
            fpswrd.enterEmailAndCancel(this.data.forgetpasswordemail);
            fpswrd.enterForgetPasswordEmail(this.data.forgetpasswordemail);
            fpswrd.clickEmailPasswordBtn();

        });

        it('Verify Forget Password Email Sent Modal', function () {
            fpswrd.verifyEmailSentModal();
            fpswrd.clickLoginNowBtn();
        });

        it('Verify Login', function () {
            tlogin.verifyLogo();
            tlogin.verifyWelcomeText();
            tlogin.verifyEmptyFieldsValidation();
            tlogin.verifyInvalidPassword(this.data.email, this.data.invalidpswrd);
            tlogin.enterUsername(this.data.email);
            tlogin.enterLoginPassword(this.data.password);
            tlogin.clickLoginBtn();
            tlogin.verifyLoginIsSuccessful();
        });

        it('Verify Profile Page', function () {
            profile.clickProfileIcon();
            profile.verifyProfileTitle();
        });

        it('Change Profile Image', function () {
            profile.changeProfileImage();

        });

        it('Update Profile Information', function () {
            profile.enterFirstNamefield(this.data.pfirstname);
            profile.enterLastnameField(this.data.plastname);
            profile.verifyDisabledEmailField();
            profile.clickUpdateProfileBtn();

        });

        it('Verify Profile is Updated Successfully', function () {
            profile.verifyUpdatedProfileTitle(this.data.pfirstname, this.data.plastname);

        });

        it('Change Profile Password', function () {
            profile.changePassword(this.data.password);
            profile.verifyPasswordFieldValidation(this.data.password);

        });

        it('Verify Creating a new job', function () {
            jobs.createNewJob(this.data.Jobname, this.data.jobdesc,
                this.data.jobemail, this.data.jobphone);
            cy.wait(3000);

        });

        it('Verify Search Functionality of Jobs', function () {
            jobs.searchJob(this.data.Jobname);
            cy.wait(3000);

        });

        it('Verify Edit A Job', function () {
            jobs.editJob(this.data.Jobname, this.data.edit_Jobname, this.data.jobdesc, this.data.edit_jobdesc,
                this.data.jobemail, this.data.edit_jobemail, this.data.jobphone, this.data.edit_jobphone);

        });

        it('Verify Newly Created Job Details', function () {
            jobs.verifyJobDetails(this.data.edit_Jobname, this.data.addusr_firstname, this.data.edit_jobemail);

        });

        it('Verify Adding Job Data via Normal Acquisition Form', function () {
            nAcq.verifyNoCard();
            nAcq.verifyModal();
            nAcq.verifyForm();

        });

        it('Verify Job Data Added Successfully via Normal Acquisition Form', function () {
            nAcq.verifyTableData();

        });

        it('Verify Adding Job Data via CSV', function () {
            jobs.createNewJob(this.data.Jobname, this.data.jobdesc,
                this.data.jobemail, this.data.jobphone);
            csv.addJobDataViaCsv();

        });

        it('Verify Job Data Added Successfully via CSV and Zip File', function () {
            csv.verifyTableData();

        });

        it('Create a new User', function () {
            um.addusr_clickusrmanagementtab();
            um.addusr_VerifyListOfUsers();
            um.addusr_VerifyPagination();
            um.addusr_clickadduser();
            um.addusr_enterfirstname(this.data.addusr_firstname);
            um.addusr_enterlastname(this.data.addusr_lastname);
            um.addusr_enteremail();
            um.addusr_enterpassword(this.data.addusr_pswrd);
            um.addusr_entercontactno(this.data.addusr_contact);
            um.addusr_clickjobsdropdown();
            um.addusr_LoadMore();
            um.addusr_searchforjob(this.data.addusr_searchquery);
            um.addusr_clickenter();
            um.addusr_selectfirstlistitem();
            um.addusr_clickesc();
            um.addusr_clickadduserbtn();
            um.addusr_clickokaybtn();
            um.verifyJobsAssignedPage(this.data.addusr_firstname);
            cy.wait(2000);

        });

        it('Edit A User', function () {
            um.editUser(this.data.addusr_firstname, this.data.addusr_lastname);

        });

        it('Verfiy User is Created Successfully', function () {
            um.verifyNewlyCreatedUser();

        });

        it('Delete a User', function () {
            um.addusr_clickdelicon();
            um.addusr_clickdelbtn();
            cy.wait(3000);

        });

        it('Delete A Job', function () {
            jobs.clicknewjob();
            jobs.deleteicon();
            cy.wait(3000);
            jobs.confirmdel();

        });

        it('Select Job For Creating Banner with Signature', function () {
            editor.selectjob();
            editor.clickcreatebannerbtn();

        });

        it('Set Canvas Width and Height', function () {
            editor.enterwidthandheight();
            editor.clicksavebtn();

        });

        it('Change Canvas Size', function () {
            editor.changesize();

        });

        it('Upload a Background image to canvas', function () {
            editor.uploadimage();

        });

        it('Change background color', function () {
            editor.change_BG_Color();

        });

        it('Add template images to canvas', function () {
            editor.add_Signatures();

        });

        it('Add Rectangle elements to the canvas design', function () {
            editor.addRectangle();
            
        });

        it('Add Circle element to the canvas design', function () {
            editor.addCircle();

        });

        it('Add Image box to canvas design', function () {
            editor.addImage();

        });

        it('Add Text to canvas design', function () {
            editor.addText();
            editor.add2ndText();
            editor.add3rdText();

        });

        it('Add a QR code to canvas design', function () {
            editor.addBarcode();

        });


        it('Generate and Preview the Banner With Signature', function () {
            editor.previewEditorBanner();
            editor.viewGeneratedImages();
            editor.closePreview();

        });

        it('Deleted the Generated Banner', function () {
            editor.clickbackbutton();
            editor.clickdelicon();
            editor.clickdelbutton();

        });


    });