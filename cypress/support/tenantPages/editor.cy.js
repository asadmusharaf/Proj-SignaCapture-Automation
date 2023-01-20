/// <reference types="Cypress" />
export class signa_editor {

    editor = {

        jobstab: () => cy.xpath("//h6[normalize-space()='Jobs']"),
        selectjobobj: () => cy.xpath("//p[normalize-space()='Automation Editor Job']"),
        verifynobannercreated: () => cy.xpath("//p[contains(text(),'No banner created yet. Click the button below to g')]"),
        createbannerbtn: () => cy.xpath("//span[normalize-space()='create banner']"),

        //Canvas Size page
        canvassizepagetitle: () => cy.xpath("//h3[normalize-space()='Enter Canvas Size']"),
        widthfield: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        heightfield: () => cy.xpath("//input[@id='editor-rectangle-height']"),
        savebtn: () => cy.xpath("//span[normalize-space()='Save']"),

        //upload background image page
        settingsicon1: () => cy.xpath("//div[@id='root']//span[1]//*[name()='svg']"),
        changecanvassize1: () => cy.xpath("//span[normalize-space()='Change Canvas Size']"),


        //change canvas size modal
        chng_canvas_modal_title: () => cy.xpath("//h3[normalize-space()='Change Canvas Size']"),
        chng_canvas_modal_width: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        chng_canvas_modal_height: () => cy.xpath("//input[@id='editor-rectangle-height']"),
        chng_canvas_modal_save_btn: () => cy.xpath("//span[normalize-space()='Save']"),
        chng_canvas_modal_cancel_btn: () => cy.xpath("//span[normalize-space()='cancel']"),

        //Editor Menu
        menu_background: () => cy.xpath("//div[@value='background']//*[name()='svg']"),
        bg_change_color: () => cy.xpath("//span[normalize-space()='Change Background Color']"),
        palette_title: () => cy.xpath("//h3[normalize-space()='Change Color']"),
        palette_color_bar: () => cy.xpath("//div[@class='hue-horizontal']"),
        palette_change_btn: () => cy.xpath("//span[normalize-space()='Change']"),
        bg_change_image: () => cy.xpath("//span[normalize-space()='Change Background Image']"),
        bg_upload_modal_title: () => cy.xpath("//h3[normalize-space()='Upload Image']"),
        bg_uploadimagearea: () => cy.xpath("//h6[normalize-space()='Click or Drop Background Image Here']"),
        bg_image_upload_btn: () => cy.xpath("//span[normalize-space()='Upload']"),
        menu_select: () => cy.xpath("//div[@value='selectTool']//*[name()='svg']"),
        select_box: () => cy.xpath("//body/div[@id='root']/div/main/div/div/div/div[1]"),
        select_properties_tab: () => cy.xpath("//span[normalize-space()='properties']"),
        select_properties_txt: () => cy.xpath("//p[normalize-space()='transform']"),
        select_width: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        select_height: () => cy.xpath("//input[@id='editor-rectangle-height']"),
        select_xposition: () => cy.xpath("//input[@id='editor-rectangle-xPosition']"),
        select_yposition: () => cy.xpath("//input[@id='editor-rectangle-yPosition']"),
        select_del_btn: () => cy.xpath("//span[normalize-space()='delete selection']"),
        select_data_tab: () => cy.xpath("//span[normalize-space()='data']"),
        select_data_tempfiles_txt: () => cy.xpath("//span[contains(text(),'Select Template Files')]"),
        select_tempfiles_dropdown: () => cy.xpath("//div[contains(text(),'Select Data File')]"),
        tempfiles_dropdown_upload: () => cy.xpath("//div[normalize-space()='Image Upload']"),
        tempfiles_dropdown_sign: () => cy.xpath("//div[normalize-space()='sign']"),
        select_msgfield_txt: () => cy.xpath("//span[contains(text(),'Select Message Fields')]"),
        select_msgfield_dropdown: () => cy.xpath("//div[contains(text(),'Select Message Fields')]"),
        msgfield_dropdown_desc: () => cy.xpath("//div[contains(text(),'desc')]"),
        select_preview_txt: () => cy.xpath("//span[contains(text(),'Preview')]"),
        select_data_txt: () => cy.xpath("//span[contains(text(),'Select Data')]"),
        select_data_dropdown: () => cy.xpath("//div[contains(text(),'Select Job Data')]"),
        data_dropdown_printall: () => cy.xpath("//div[normalize-space()='Print all job data']"),
        select_data_next_btn: () => cy.xpath("//span[normalize-space()='Next']"),
        select_data_finish_btn: () => cy.xpath("//span[normalize-space()='Finish']"),
        select_data_modal_yes_btn: () => cy.xpath("//div[@role='none presentation']//button[1]//span[1]"),
        menu_elements: () => cy.xpath("//div[@value='elementsTool']"),
        element_rectangle: () => cy.xpath("//span[normalize-space()='Rectangle']"),

        rectangle: () => cy.xpath("//div[@id='rectangleElement0']"),
        rectangle2: () => cy.xpath("//div[@id='rectangleElement1']"),
        rectangle_properties_txt: () => cy.xpath("//p[normalize-space()='Element PROPERTIES']"),
        rect_properties_close_icon: () => cy.xpath("//*[name()='path' and contains(@d,'M19 6.41L1')]"),
        rect_width: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        rect_height: () => cy.xpath("//input[@id='editor-rectangle-height']"),
        rect_xposition: () => cy.xpath("//input[@id='editor-rectangle-xPosition']"),
        rect_yposition: () => cy.xpath("//input[@id='editor-rectangle-yPosition']"),
        rect_setbg_txt: () => cy.xpath("//p[normalize-space()='Set Background Color']"),
        rect_setbg: () => cy.xpath("//body/div[@role='presentation']/div/ul/div[2]/div[1]"),
        rect_bg_color_input: () => cy.xpath("//input[@id='rc-editable-input-42']"),
        rect_bg_color_red: () => cy.xpath("//div[@title='#D0021B']"),
        rect_setcorner_radius_txt: () => cy.xpath("//p[normalize-space()='Set Corner Radius']"),
        rect_setcorner_radius_slider: () => cy.xpath("//body/div[@role='presentation']/div/ul/div/span[1]"),
        rect_lock_aspect_ratio: () => cy.xpath("//span[normalize-space()='Lock Aspect Ratio']"),
        rect_del_btn: () => cy.xpath("//span[normalize-space()='delete selection']"),

        element_circle: () => cy.xpath("//span[normalize-space()='Circle']"),
        circle: () => cy.xpath("//div[@id='circleElement0']"),
        circle_properties_txt: () => cy.xpath("//p[normalize-space()='Element PROPERTIES']"),
        circle_width: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        circle_height: () => cy.xpath("//input[@id='editor-rectangle-height']"),
        circle_xposition: () => cy.xpath("//input[@id='editor-rectangle-xPosition']"),
        circle_yposition: () => cy.xpath("//input[@id='editor-rectangle-yPosition']"),
        circle_setbg_txt: () => cy.xpath("//p[normalize-space()='Set Background Color']"),
        circle_setbg: () => cy.xpath("//body/div[@role='presentation']/div/ul/div[2]/div[1]"),
        circle_del_btn: () => cy.xpath("//span[normalize-space()='delete selection']"),



        menu_image: () => cy.xpath("//div[@value='imageTool']//*[name()='svg']"),
        image: () => cy.xpath("//img[@id='imageTool0']"),
        image_properties_tab: () => cy.xpath("//span[normalize-space()='properties']"),
        image_width: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        image_height: () => cy.xpath("//input[@id='editor-rectangle-height']"),
        image_xposition: () => cy.xpath("//input[@id='editor-rectangle-xPosition']"),
        image_yposition: () => cy.xpath("//input[@id='editor-rectangle-yPosition']"),
        image_upload_btn: () => cy.xpath("//span[normalize-space()='Upload Image']"),
        img_upload_modal_title: () => cy.xpath("//h3[normalize-space()='Upload Image']"),
        img_upload_modal_uploadarea: () => cy.xpath("//h6[normalize-space()='Upload New Image']"),
        img_upload_modal_upload_btn: () => cy.xpath("//span[normalize-space()='Upload']"),
        image_template_field: () => cy.xpath("//span[normalize-space()='Template Field']"),
        image_del_btn: () => cy.xpath("//span[normalize-space()='delete selection']"),
        image_edit_styles_tab: () => cy.xpath("//span[normalize-space()='Edit styles']"),
        image_styles_img_container_txt: () => cy.xpath("//p[normalize-space()='Image Container']"),
        img_container_rectangle: () => cy.xpath("//span[normalize-space()='Rectangle']"),
        img_container_circle: () => cy.xpath("//span[normalize-space()='Circle']"),
        img_lock_aspect_ratio: () => cy.xpath("//span[normalize-space()='Lock Aspect Ratio']"),
        img_set_radius_txt: () => cy.xpath("//p[normalize-space()='Set Corner Radius']"),
        img_set_radius_slider: () => cy.xpath("//body[1]/div[4]/div[3]/ul[1]/div[3]/span[1]"),
        img_set_border_txt: () => cy.xpath("//p[normalize-space()='Set Border Width']"),
        img_set_border_slider: () => cy.xpath("//body[1]/div[4]/div[3]/ul[1]/div[4]/span[1]"),
        img_bgcolor_txt: () => cy.xpath("//p[normalize-space()='Set Border Color']"),
        img_bgcolor: () => cy.xpath("//body[1]/div[4]/div[3]/ul[1]/div[5]/div[1]"),
        img_object_fit_txt: () => cy.xpath("//p[normalize-space()='Object Fit']"),
        img_obj_fit_unset: () => cy.xpath("//span[normalize-space()='Unset']"),
        img_obj_fit_contain: () => cy.xpath("//span[normalize-space()='Contain']"),
        img_obj_fit_fill: () => cy.xpath("//span[normalize-space()='Fill']"),
        img_obj_fit_scale_down: () => cy.xpath("//span[normalize-space()='Scale-down']"),
        img_obj_fit_cover: () => cy.xpath("//span[normalize-space()='Cover']"),
        img_final_image: () => cy.xpath("(//img[@draggable='false'])[2]"),
        img_final_image_remove_btn: () => cy.xpath("//p[normalize-space()='Remove']"),

        menu_text: () => cy.xpath("//div[@title='Text']//*[name()='svg']"),
        text: () => cy.xpath("//p[@id='textToolElement0']"),
        text2: () => cy.xpath("//p[@id='textToolElement1']"),
        text3: () => cy.xpath("//p[@id='textToolElement2']"),
        text_data_tab: () => cy.xpath("//span[normalize-space()='Data']"),
        text_data_field: () => cy.xpath("//textarea[@name='text']"),
        text_template_field: () => cy.xpath("//span[normalize-space()='Template Field']"),
        text_template_dropdown: () => cy.xpath("//div[contains(text(),'Select Template Field Type')]"),
        text_template_dropdown2: () => cy.xpath("//div[contains(text(),'Select Template Field')]"),
        text_template_first_name: () => cy.xpath("//div[normalize-space()='First Name']"),
        text_template_name: () => cy.xpath("//div[normalize-space()='Name Field']"),
        text_edit_styles_tab: () => cy.xpath("//span[normalize-space()='Edit Styles']"),
        text_font_family_txt: () => cy.xpath("//p[normalize-space()='Select Font Family']"),
        text_font_dropdown: () => cy.xpath("//p[normalize-space()='SourceSansPro-Regular']"),
        text_font_monts_bold: () => cy.xpath("//li[normalize-space()='Montserrat-Bold']"),
        text_font_size_txt: () => cy.xpath("//p[normalize-space()='Adjust Font Size']"),
        text_font_size_slider: () => cy.xpath("//body/div[@role='presentation']/div/div/ul/div/span[1]"),
        text_font_style_txt: () => cy.xpath("//p[normalize-space()='Font Style']"),
        text_font_style_bold: () => cy.xpath("//button[@value='bold']"),
        text_font_style_italic: () => cy.xpath("//button[@value='italic']"),
        text_font_style_underline: () => cy.xpath("//button[@value='underlined']"),
        text_alignment_txt: () => cy.xpath("//p[normalize-space()='Text Alignment']"),
        text_alignment_left: () => cy.xpath("//button[@value='left']"),
        text_alignment_center: () => cy.xpath("//button[@value='center']"),
        text_alignment_right: () => cy.xpath("//button[@value='right']"),
        text_font_color_txt: () => cy.xpath("//p[normalize-space()='Set Font Color']"),
        text_font_color: () => cy.xpath("//body[1]/div[4]/div[3]/div[2]/ul[1]/div[3]/div[1]"),
        text_font_color_white: () => cy.xpath("//div[@title='#FFFFFF']"),
        text_font_color_black: () => cy.xpath("//div[@title='#000000']"),
        text_properties_tab: () => cy.xpath("//span[normalize-space()='properties']"),
        text_width: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        text_height: () => cy.xpath("//input[@id='editor-rectangle-height']"),
        text_xposition: () => cy.xpath("//input[@id='editor-rectangle-xPosition']"),
        text_yposition: () => cy.xpath("//input[@id='editor-rectangle-yPosition']"),
        text_del_btn: () => cy.xpath("//span[normalize-space()='delete selection']"),



        menu_qr: () => cy.xpath("//div[@title='QR Code']//img"),
        qr_code: () => cy.xpath("//canvas[@id='editor-qrCodeTool']"),
        qr_properties_tab: () => cy.xpath("//span[normalize-space()='properties']"),
        qr_width: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        qr_height: () => cy.xpath("//input[@id='editor-rectangle-height']"),
        qr_xposition: () => cy.xpath("//input[@id='editor-rectangle-xPosition']"),
        qr_yposition: () => cy.xpath("//input[@id='editor-rectangle-yPosition']"),
        qr_value: () => cy.xpath("//body/div[@role='presentation']/div/ul/div/div/div/input[1]"),
        qr_template_field: () => cy.xpath("//span[normalize-space()='Template Field']"),
        qr_template_dropdown: () => cy.xpath("//div[contains(text(),'Select Template Field')]"),
        qr_template_dropdown_firstname: () => cy.xpath("//div[contains(text(),'First Name')]"),
        qr_del_btn: () => cy.xpath("//span[normalize-space()='delete selection']"),
        qr_edit_styles_tab: () => cy.xpath("//span[normalize-space()='Edit styles']"),
        qr_error_resistance_txt: () => cy.xpath("//p[normalize-space()='Error resistance Level']"),
        qr_error_dropdown: () => cy.xpath("//div[contains(text(),'Low ~7%')]"),
        qr_dropdown_low: () => cy.xpath("//li[@role='option']//div[contains(text(),'Low ~7%')]"),
        qr_dropdown_medium: () => cy.xpath("//div[normalize-space()='Medium ~15%']"),
        qr_dropdown_quartile: () => cy.xpath("//div[normalize-space()='Quartile ~25%']"),
        qr_dropdown_high: () => cy.xpath("//div[normalize-space()='High ~30%']"),
        qr_enable_margin: () => cy.xpath("//span[normalize-space()='Enable margin']"),
        qr_set_bgcolor_txt: () => cy.xpath("//p[normalize-space()='Set Background Color']"),
        qr_set_bgcolor: () => cy.xpath("//body[1]/div[4]/div[3]/ul[1]/div[3]/div[1]"),


        menu_barcode: () => cy.xpath("//div[@title='Bar Code']//img"),

        menu_clear: () => cy.xpath("//div[@title='Clear']//*[name()='svg']"),
        clear_modal_title: () => cy.xpath("//h3[normalize-space()='Whoa! Be careful']"),
        clear_modal_desc_txt: () => cy.xpath("//h5[contains(text(),'If you clear, you will lose the changes you have m')]"),
        clear_modal_desc_txt2: () => cy.xpath("//h5[normalize-space()='Are you sure you want to clear?']"),
        clear_modal_yes_btn: () => cy.xpath("//span[normalize-space()='yes']"),
        clear_modal_no_btn: () => cy.xpath("//span[normalize-space()='No']"),

        menu_startover: () => cy.xpath("//div[@value='startOver']//*[name()='svg']"),
        startover_modal_title: () => cy.xpath("//h3[normalize-space()='Wait a sec.']"),
        startover_modal_desc: () => cy.xpath("//h5[contains(text(),'Are you sure you want to start over? You will lose')]"),
        startover_modal_yes_btn: () => cy.xpath("//div[@role='presentation']//button[1]"),
        startover_modal_goback_btn: () => cy.xpath("//span[normalize-space()='go back to canvas']"),

        editor_preview_btn: () => cy.xpath("//span[normalize-space()='preview']"),



        //Editor page
        settingsicon2: () => cy.xpath("//body/div[@id='root']/div/header/div/div/button[1]"),
        changecanvassize2: () => cy.xpath("//span[normalize-space()='Change Canvas Size']"),
        changemainbanner: () => cy.xpath("//span[normalize-space()='Change Main Banner Image']"),
        btn_addanotherbackground: () => cy.xpath("//span[normalize-space()='add another background']"),
        rectangle_icon: () => cy.xpath("//button[@value='rectangle']"),
        studentname_icon: () => cy.xpath("//button[@value='studentName']"),
        startover_icon: () => cy.xpath("//button[@value='startOver']"),
        question_icon: () => cy.xpath("//div[3]//div[1]"),
        signature_dropdown: () => cy.xpath("//p[normalize-space()='Select signatures to print']"),
        drpdwn_printallsignatures: () => cy.xpath("//span[contains(text(),'Print all signatures')]"),
        btn_removesignatures: () => cy.xpath("//span[normalize-space()='Remove Signatures']"),
        btn_preview: () => cy.xpath("//span[normalize-space()='preview']"),
        empty_rectangle: () => cy.xpath("//body/div[@id='root']/div/main/div/div/div/div[1]"),
        signature_remove_btn: () => cy.xpath("//h6[normalize-space()='Remove']"),
    }

    rect = {
        //Rectangle box perperties sidebar
        rect_prop_title: () => cy.xpath("//h6[normalize-space()='PROPERTIES']"),
        rect_prop_transformtxt: () => cy.xpath("//h6[normalize-space()='transform']"),
        rect_width_field: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        rect_height_field: () => cy.xpath("//input[@id='editor-rectangle-width']"),
        rect_xposition_field: () => cy.xpath("//input[@id='editor-rectangle-xPosition']"),
        rect_yposition_field: () => cy.xpath("//input[@id='editor-rectangle-yPosition']"),
        rect_btn_delselection: () => cy.xpath("//span[normalize-space()='delete selection']"),
        rect_cross_icon: () => cy.xpath("//div[@role='presentation']//div[1]//button[1]//span[1]//*[name()='svg']"),
    }


    prv = {
        //Banner preview page
        preview_page_title: () => cy.xpath("//p[normalize-space()='PREVIEW']"),
        images_generatedt_oast: () => cy.xpath("//div[contains(text(),'Images are generated')]"),
        btn_back: () => cy.xpath("//span[normalize-space()='Back']"),
        btn_share_with_client: () => cy.xpath("//span[normalize-space()='share with client']"),
        link_view_images: () => cy.xpath("//span[normalize-space()='VIEW IMAGES']"),
        icon_cross: () => cy.xpath("//div[@role='dialog']//div//button[@type='button']"),
    }

    jd = {
        //Job details banner preview 
        bnr_icon_del: () => cy.xpath("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-3']//button[2]"),
        bnr_modal_btn_del: () => cy.xpath("//span[normalize-space()='Delete']"),
        banner_preview_area: () => cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/img[1]"),
    }


    selectjob() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        this.editor.selectjobobj()
            .scrollIntoView()
            .should('be.visible')
            .click();
    }

    clickcreatebannerbtn() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        cy.url().then(url => {
            const currentURL = url.split('/');
            const id = currentURL[4]
            cy.log(id);
            cy.wait(3000);
            cy.forceVisit('https://stage.signacapture.com/job/' + id + '/editor')
        })
        // cy.xpath(this.createbannerbtn).invoke('removeAttr', 'target').click();
        // cy.url().then(url => {
        //     cy.visit('https://stage.signacapture.com/job/' + id + '/editor')
        // });
        // cy.go('back')
    }

    enterwidthandheight() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.editor.canvassizepagetitle()
            .should('be.visible')
            .and('have.text', 'Enter Canvas Size');
        this.editor.widthfield()
            .invoke('attr', 'placeholder')
            .should('equal', 'Width (px)');
        this.editor.widthfield()
            .type('1200');
        cy.wait(2000);
        this.editor.heightfield()
            .invoke('attr', 'placeholder')
            .should('equal', 'Height (px)');
        this.editor.heightfield()
            .type('700');
        cy.wait(2000);
    }

    clicksavebtn() {
        this.editor.savebtn()
            .should('not.be.disabled')
            .click();
    }

    changesize() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.editor.settingsicon1()
            .click()
            .should('not.be.disabled')
            .click({ force: true });
        this.editor.changecanvassize1()
            .should('have.text', "Change Canvas Size")
            .click();

        this.editor.chng_canvas_modal_title()
            .should('be.visible')
            .and('have.text', 'Change Canvas Size');
        this.editor.chng_canvas_modal_width()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Width (px)');
        this.editor.widthfield()
            .type('305');

        cy.wait(2000);

        this.editor.chng_canvas_modal_height()
            .clear()
            .invoke('attr', 'placeholder')
            .should('equal', 'Height (px)');
        this.editor.chng_canvas_modal_height()
            .type('520');

        this.editor.chng_canvas_modal_cancel_btn()
            .should('have.text', 'cancel');
        this.editor.chng_canvas_modal_save_btn()
            .should('not.be.disabled')
            .click();
    }


    uploadimage() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.wait(3000)

        this.editor.menu_background()
            .click();

        this.editor.bg_change_image()
            .click();

        this.editor.bg_upload_modal_title()
            .should('have.text', 'Upload Image');

        this.editor.bg_uploadimagearea()
            .selectFile('cypress/fixtures/image.png', {
                action: 'drag-drop'
            });

        this.editor.bg_image_upload_btn()
            .click();
    }
    change_BG_Color() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.editor.menu_background()
            .click();

        this.editor.bg_change_color()
            .click();

        this.editor.palette_color_bar()
            .click();

        this.editor.palette_change_btn()
            .click();

    }

    add_Signatures() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.wait(3000);
        this.editor.menu_select()
            .should('be.visible')
            .click();

        this.editor.select_box()
            .dblclick();

        this.editor.select_xposition()
            .clear()
            .type('12')

        this.editor.select_yposition()
            .clear()
            .type('280')

        this.editor.select_data_tab()
            .click();

        this.editor.select_tempfiles_dropdown()
            .click();

        this.editor.tempfiles_dropdown_upload()
            .click();

        this.editor.select_data_next_btn()
            .click();
        cy.wait(2000)
        this.editor.select_data_next_btn()
            .click();
        cy.wait(2000)

        this.editor.select_data_next_btn()
            .click();

        this.editor.select_data_dropdown()
            .click();

        this.editor.data_dropdown_printall()
            .click();

        cy.get('body')
            .click(0, 0);

        this.editor.select_data_finish_btn()
            .click();

        this.editor.select_data_modal_yes_btn()
            .click();

        cy.wait(2000)
    }

    addRectangle() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.editor.menu_elements()
            .click();

        this.editor.element_rectangle()
            .click()

        this.editor.rectangle()
            .dblclick();

        this.editor.rect_xposition()
            .clear()
            .type('0');

        this.editor.rect_yposition()
            .clear()
            .type('0');

        this.editor.rect_width()
            .clear()
            .type('305');

        this.editor.rect_height()
            .clear()
            .type('89');

        this.editor.rect_setbg()
            .click()

        this.editor.rect_bg_color_red()
            .click();

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)

        this.editor.menu_elements()
            .click();

        this.editor.element_rectangle()
            .click();

        this.editor.rectangle2()
            .dblclick();

        this.editor.rect_xposition()
            .clear()
            .type('0');

        this.editor.rect_yposition()
            .clear()
            .type('478');

        this.editor.rect_width()
            .clear()
            .type('305');

        this.editor.rect_height()
            .clear()
            .type('42');

        this.editor.rect_setbg()
            .click()

        this.editor.rect_bg_color_red()
            .click();

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)
    }

    addCircle() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        this.editor.menu_elements()
            .click();

        this.editor.element_circle()
            .click();

        this.editor.circle()
            .dblclick();

        this.editor.circle_xposition()
            .clear()
            .type('0');

        this.editor.circle_yposition()
            .clear()
            .type('0');

        this.editor.circle_width()
            .clear()
            .type('42')

        // this.editor.circle_height()
        //     .clear()
        //     .type('42');

        this.editor.circle_xposition()
            .clear()
            .type('0')

        this.editor.circle_yposition()
            .clear()
            .type('478');

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)
    }
    addImage() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");
        this.editor.menu_image()
            .click();

        this.editor.image()
            .dblclick();

        this.editor.image_xposition()
            .clear()
            .type('0');

        this.editor.image_yposition()
            .clear()
            .type('0');

        this.editor.image_width()
            .clear()
            .type('206');

        this.editor.image_height()
            .clear()
            .type('269');

        this.editor.image_xposition()
            .clear()
            .type('49');

        this.editor.image_yposition()
            .clear()
            .type('108');

        this.editor.image_upload_btn()
            .click();

        this.editor.img_upload_modal_uploadarea()
            .selectFile('cypress/fixtures/image.png', {
                action: 'drag-drop'
            });

        this.editor.img_upload_modal_upload_btn()
            .click();

        cy.wait(2000)

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)


    }

    addText() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.editor.menu_text()
            .click();

        this.editor.text()
            .dblclick();

        this.editor.text_data_field()
            .clear()
            .type('Organization Name');

        this.editor.text_properties_tab()
            .click();

        this.editor.text_xposition()
            .clear()
            .type('0');

        this.editor.text_yposition()
            .clear()
            .type('0');

        this.editor.text_width()
            .clear()
            .type('277')

        this.editor.text_height()
            .clear()
            .type('50')

        this.editor.text_xposition()
            .clear()
            .type('22');

        this.editor.text_yposition()
            .clear()
            .type('13');

        this.editor.text_edit_styles_tab()
            .click();

        this.editor.text_font_dropdown()
            .click();

        this.editor.text_font_monts_bold()
            .click();

        this.editor.text_font_size_slider()
            .click();

        this.editor.text_font_color()
            .click();

        this.editor.text_font_color_white()
            .click();

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)

    }

    add2ndText() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.editor.menu_text()
            .click();

        this.editor.text2()
            .dblclick();

        this.editor.text_data_field()
            .clear()
            .type('Organization Address');

        this.editor.text_properties_tab()
            .click();

        this.editor.text_xposition()
            .clear()
            .type('0');

        this.editor.text_yposition()
            .clear()
            .type('0');

        this.editor.text_width()
            .clear()
            .type('198')

        this.editor.text_height()
            .clear()
            .type('24')

        this.editor.text_xposition()
            .clear()
            .type('70');

        this.editor.text_yposition()
            .clear()
            .type('54');

        this.editor.text_edit_styles_tab()
            .click();

        this.editor.text_font_dropdown()
            .click();

        this.editor.text_font_monts_bold()
            .click();

        this.editor.text_font_size_slider()
            .click();

        this.editor.text_font_color()
            .click();

        this.editor.text_font_color_white()
            .click();

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)
    }

    add3rdText() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.editor.menu_text()
            .click();

        this.editor.text3()
            .dblclick();

        this.editor.text_template_field()
            .click();

        this.editor.text_template_dropdown()
            .click()

        this.editor.text_template_name()
            .click();

        this.editor.text_template_dropdown2()
            .click();

        this.editor.text_template_first_name()
            .click();

        cy.get('body')
            .click(0, 0);

        this.editor.text_properties_tab()
            .click();

        this.editor.text_xposition()
            .clear()
            .type('0');

        this.editor.text_yposition()
            .clear()
            .type('0');

        this.editor.text_width()
            .clear()
            .type('141')

        this.editor.text_height()
            .clear()
            .type('49')

        this.editor.text_xposition()
            .clear()
            .type('81');

        this.editor.text_yposition()
            .clear()
            .type('397');

        this.editor.text_edit_styles_tab()
            .click();

        this.editor.text_font_dropdown()
            .click();

        this.editor.text_font_monts_bold()
            .click();

        this.editor.text_font_size_slider()
            .click();

        this.editor.text_font_color()
            .click();

        this.editor.text_font_color_black()
            .click();

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)


    }

    addBarcode() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.editor.menu_qr()
            .click();

        this.editor.qr_code()
            .dblclick();

        this.editor.qr_xposition()
            .clear()
            .type('0');

        this.editor.qr_yposition()
            .clear()
            .type('0');

        this.editor.qr_width()
            .clear()
            .type('35');

        this.editor.qr_xposition()
            .clear()
            .type('266');

        this.editor.qr_yposition()
            .clear()
            .type('416');

        cy.get('body')
            .click(0, 0);

        cy.wait(2000);

        this.editor.qr_code()
            .dblclick();

        this.editor.qr_template_field()
            .click();

        this.editor.qr_template_dropdown()
            .click();

        this.editor.qr_template_dropdown_firstname()
            .click();

        cy.wait(2000);

        cy.get('body')
            .click(0, 0);

        cy.wait(2000)

        this.editor.img_final_image()
            .dblclick();

        this.editor.img_final_image_remove_btn()
            .click();
    }

    previewEditorBanner() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        this.editor.editor_preview_btn()
            .click();
    }

    viewGeneratedImages() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.wait(2000);
        this.prv.link_view_images()
            .should('be.visible')
            .click();
    }

    closePreview() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.wait(2000);
        this.prv.icon_cross()
            .should('be.visible')
            .click();
    }

    clickbackbutton() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.MTg.8iwvGM7bscGDj5D9DoNKtO4vwEYS4W6CU2xOQr1P-Vg");

        cy.wait(2000);
        this.prv.btn_back()
            .should('be.visible')
            .click();
        cy.go('back');
        cy.go('back');
        cy.reload();

    }

    clickdelicon() {
        // cy.xpath(this.jd_banner_preview_area).trigger('mouseover');
        // cy.wait(3000);
        this.jd.bnr_icon_del()
            .click({ force: true });
    }

    clickdelbutton() {
        this.jd.bnr_modal_btn_del()
            .should('be.visible')
            .click();
    }


}
