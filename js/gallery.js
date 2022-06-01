

$(document).ready(function () {
    $('.wrapper_slider_gallery').slick({
        infinite: true,
        speed: 500,
        fade: true,
    });
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.slick-next').fadeIn();
        }
        else {
            $('.slick-next').fadeOut();
        }
    });

    $('.slick-next').click(function () {
        $('body,html').animate({ scrollTop: 840 }, 800);
    });
});


$('.menu_btn').on('click', function () {
    $('.header_list').show();
});