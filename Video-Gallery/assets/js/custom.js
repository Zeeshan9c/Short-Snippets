$(document).ready(function () {
  $(".videos-list video").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        const src = $(this).attr("src");
        $(".video-player video").attr("src", src);
        $('.video-player').removeClass("show-video").siblings().removeClass("active");
    });
    
  $(".video-player video").on('click' , function() {
        $('.video-player').toggleClass("show-video").siblings().addClass("active");
    });

  $('.embed-play').on('click' , function() {
        $(this).siblings().trigger('play');
        $('.video-player').toggleClass("show-video").siblings().addClass("active");
    });
});

