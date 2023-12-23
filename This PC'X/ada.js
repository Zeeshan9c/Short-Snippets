// Code for change simple element to button
$('.elementor-search-form__toggle, .dialog-close-button').attr({
    'tabindex': '0',
    'role': 'button'
});

// Code for change a tag to button
$('a[href="#"],a[href=""],[href="javascript:void(0)"]').attr({
    'role': 'button'
});

// Code for message for screen reader
$('[href="#move-down" ]').attr('aria-label', 'Go to next section');

// Code for open link in new tab
$('a[target="_blank"]').append('<span class="elementor-screen-only">(Open Link in new window)</span>');

// role none for elements
$('svg, .last, #elementor-device-mode').attr('role', 'none');

// Code for search label
$('.elementor-search-form__input').attr('aria-label', 'Enter Text for Search');

// Code for change menu to nav
$('.main-menu').attr('role', 'navigation');

// Code for figure element
$('figure').each(function(){
    if($(this).find('img').length>0){
        var label = $(this).find('img').attr('alt');
        $(this).attr({'role': 'none', 'alt': label})
    }
});

// Code for change p tag to heading
$('.large-text, .subscribe-wrp .elementor-text-editor p').attr({
    "role": "heading",
    "aria-level": "3"
});

// Code for main role
$('main').attr({
    "id": "main",
    "tabindex": "-1"
});

// Code for overlay image
$('.elementor-cta__bg').attr({
    'role': 'none' 
});

$('.fab').attr('role', 'presentation');
$('.sub-arrow').attr('role', 'none');

// if alt attribute empty or not exist.
$('img[alt=""], img:not([alt])').attr('alt', 'image with no alt attributes');

// for changing heading level
$('.latest-content-wrapper h5').attr('aria-level', '3');

//MCC ADA
$(window).on('load', function(){
    //code for Form CheckBox
    $('.gchoice input[type=checkbox]').attr({
        'tabindex': '-1',
        'role': 'button'
    });
    $(document).ready(function(){
        $(".gchoice").focus(function(){               
            document.body.onkeyup = function(e) {
                if (e.key == " " ||
                    e.code == "Space" ||      
                    e.keyCode == 32      
                ) {
                    var chk = $(this).find("input[type='checkbox']");
                    if(chk.is(":checked") == false)
                    {
                        chk.prop("checked", true);
                    }
                    else
                    {
                        chk.prop("checked", false);
                    }
                }
            }
        });
    });

    /* open the drop down list of select box */
    /* we can use "on-focus, keydown" function, this is depend on the situation */
    /* Mostly we use this function in Ready state, this is also depend on the situation*/

    $(".gform-body .styledSelect").bind("focus keydown", function(e) {
        if (e.key == " " || e.code == "Space") {
            e.preventDefault();
           $(this).addClass('active');
           $(this).next('ul.options').css('display', 'flex');
        }else{
            $(this).removeClass('active')
            $(this).next('ul.options').css('display', 'none');
        }
    });

    // Code for change a tag to button
    $('a[href="#"], a[href=""], .styledSelect, .gchoice label, .gchoice' ).attr({
        'tabindex': '0',
        'role': 'button'
    });

    // Code for change p tag to heading
    $('.large-text, .home-banner .elementor-text-editor p, .subhead-accent .elementor-heading-title').attr({
        "role": "heading",
        "aria-level": "3"
    });
   
    // Code for change heading hierarchy
    $(' .subhead-accent .elementor-heading-title').attr({
        "aria-level": "5"
    });

    // Code for overlay image
    $('.elementor-column-wrap').attr({
        'role': 'img' 
    });
    
    // role none for elements
    $('svg, .last, #elementor-device-mode,  .schema_code, .postalCode').attr('role', 'presentation');

});

$(window).on('load', function(){
    $(".gform-body .styledSelect").bind("focus keydown", function(e) {
        if (e.key == " " || e.code == "Space") {
            e.preventDefault();
           $(this).addClass('active');
           $(this).next('ul.options').css('display', 'flex');
        }else{
            $(this).removeClass('active')
            $(this).next('ul.options').css('display', 'none');
        }
    });
})

// ada issue fixings  Popup
    $(document).on("elementor/popup/show", function(){
        $(".dialog-close-button, .elementor-tab-title, .video-thumbnail, .styledSelect, .text-ellipses").attr({
            'role': 'button',
            'aria-label': 'Close',
            'tabindex': '0'
        });
        
        $('.elementor-popup-modal .elementor-text-editor p,.dialog-widget .elementor-text-editor p').attr({
            "role": "heading",
            "aria-level": "3"
        });
    
    });
    $(window).on('load', function(){
        $('.gchoice input[type=checkbox]').attr({
            'tabindex': '-1',
        });
        $(document).ready(function(){
            $(".gchoice").focus(function(){               
                document.body.onkeyup = function(e) {
                    if (e.key == " " ||
                        e.code == "Space" ||      
                        e.keyCode == 32      
                    ) {
                        var chk = $(this).find("input[type='checkbox']");
                        if(chk.is(":checked") == false)
                        {
                            chk.prop("checked", true);
                        }
                        else
                        {
                            chk.prop("checked", false);
                        }
                    }
                    }
            });
    });
    
});
    // end of ada issue fixings


