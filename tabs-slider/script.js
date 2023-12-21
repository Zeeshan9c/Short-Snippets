var tabsSlider = new Swiper(".tabs-slider", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var contentBlockSlider = new Swiper(".content-block-slider", {
    slidesPerView: 1,
    allowTouchMove: false,
});

var contentImageSlider = new Swiper(".content-img-slider", {
    slidesPerView: 1,
    allowTouchMove: false,
});

// Function to handle class toggling for tabsSlider
function toggleActiveClass(index) {
    var tabsSlides = document.querySelectorAll('.tabs-slider .swiper-slide');

    tabsSlides.forEach(function (slide, i) {
        if (i === index) {
            slide.classList.add('swiper-slide-active');
        } else {
            slide.classList.remove('swiper-slide-active');
        }
    });
}

// Click event on tabsSlider slides to navigate contentBlockSlider and contentImageSlider
tabsSlider.on('click', function () {
    var activeIndex = tabsSlider.clickedIndex;
    contentBlockSlider.slideTo(activeIndex);
    contentImageSlider.slideTo(activeIndex);
    toggleActiveClass(activeIndex);
});
