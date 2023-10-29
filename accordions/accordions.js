(function($){

$('.wpb-accordion-tab-title').on('click' ,function() {
  $(this).siblings(".wpb-accordion-body").slideToggle().closest('.wpb-accordion-item').toggleClass('is-active').siblings().removeClass("is-active").find(".wpb-accordion-body").slideUp()
});

$(".wpb-accordions-wrapper.wpb-first-open").find(".wpb-accordion-item").first().addClass("is-active").find(".wpb-accordion-body").slideDown();

}(jQuery));