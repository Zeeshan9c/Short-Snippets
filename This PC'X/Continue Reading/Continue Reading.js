$(document).ready(function() {
  let maxLength = 1774;
  let text = $('.product-long-description .rte').html(); 
  let textLength = $('.product-long-description .rte').text().length;
  let excerpt = text.slice(0, maxLength);
  if(maxLength < textLength) {
    brIndex = excerpt.indexOf('<br>', maxLength);
    if (brIndex != -1) {
      excerpt = excerpt.slice(0, brIndex);
    }
    $('.product-long-description .rte').html(excerpt);
    $('.product-long-description .rte').addClass('bottom-overlay');
    $('.product-long-description .rte.bottom-overlay').parent('.product-block').append(`
        <div class="read-more-wrapper">
          <button class="read-more">Continue Reading</button>
          <button class="read-less">Read Less</button>
        </div>
    `); 
    $('.read-more').on('click' , function() {
      $('.product-long-description .rte').html(text);
      $('.read-more-wrapper').addClass('active');
    });  
    $('.read-less').on('click' , function() {
      $('.product-long-description .rte').html(excerpt);
      $('.read-more-wrapper').removeClass('active');
    });
  }  
});