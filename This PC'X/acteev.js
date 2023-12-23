    $(document).ready(function() {
        setTimeout(function() {
            var $tabsWrapper = $('.application-tabs .elementor-tabs-wrapper');
            $tabsWrapper.children('div').wrapAll('<div class="scroller"></div>');
          
            var tabScroll = new IScroll(".application-tabs .elementor-tabs-wrapper", {
                eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false,  mouseWheel: true,
            });
        }, 500);

        $('.header-main-section .main-nav-new .elementor-nav-menu li a[href*="#"]').on('click', function(event) {
            $(this).parent('li').siblings().removeClass('wp-active');
            $(this).parent('li').addClass('wp-active');
            
            var goto = $(this)[0].hash;

            if($(goto).length > 0){
                event.stopPropagation();
                
                $('html, body').animate({
                    scrollTop: $(goto).offset().top - $('header[data-elementor-type="header"]').height() + 20
                }, 500);
            }
        });

        $('.mobile-nav-section #menu-main-menu-new > li a[href*="#"]').on('click', function(event) {
            $(this).parent('li').siblings().removeClass('wp-active');
            $(this).parent('li').addClass('wp-active');
            var goto = $(this)[0].hash;

            if($(goto).length > 0){
                event.stopPropagation();
                
                $('html, body').animate({
                    scrollTop: $(goto).offset().top - $('header[data-elementor-type="header"]').height() + 20
                }, 500);
            }
        });
        
        $('.mobile-nav-section #menu-main-menu-new > li > a').on('click', function(event) {
            var linkhref = $(this).attr('href');
            if (linkhref.includes('#')) {
              $('.mobile-nav-section').slideUp();
                $('html').removeClass('menu-opened');
            }
        });
    });
    const $sections = $("section[id]");

$(window).on("scroll", function() {
  let scrollY = $(window).scrollTop();

  $sections.each(function() {
    const $current = $(this);
    const sectionHeight = $current.outerHeight();
    const sectionTop = $current.offset().top - $('header[data-elementor-type="header"]').height();
    const sectionId = $current.attr("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      // Add the "wp-active" class to the parent <li> element
      $(".header-main-section .main-nav-new .elementor-nav-menu li:has(a[href*=" + sectionId + "])").addClass("wp-active");
    } else {
      // Remove the "wp-active" class from the parent <li> element
      $(".header-main-section .main-nav-new .elementor-nav-menu li:has(a[href*=" + sectionId + "])").removeClass("wp-active");
    }
  });
});
    $(window).on('load',function() {
        
        setTimeout(function(){
            if($(window.location.hash).length > 0) {
                $('.mobile-nav-section #menu-main-menu-new > li a[href*="'+ window.location.hash +'"],.header-main-section .main-nav-new .elementor-nav-menu--main [href*="'+ window.location.hash +'"]').parent().addClass('wp-active');
                
                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top - $('header[data-elementor-type="header"]').height() + 20
                  }, 500);
                  
                 
            }
        },500);
        
    })
    $(document).on('click', '.products-tabs .elementor-tab-title, .application-tabs .elementor-tab-title', function (e) {
        e.stopPropagation();
        let closestParent = $(this);
        if (window.matchMedia("(max-width: 767px)").matches == true) {
          setTimeout(function () {
            $('html, body').animate({
              scrollTop: closestParent.offset().top - 90
            }, 500);
          }, 500);
        }
      });