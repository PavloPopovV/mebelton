
$(function () {
    $('.plugin__input_jmp').mask('+380000000000');
});

$(document).ready(function () {
    var $list = $(".card_product_box .card").hide(),
        $content;

    $(".example")
        .on("click", function () {
            var $this = $(this);
            $this.addClass("active").siblings().removeClass("active");
            $content = $list.filter("." + this.id).hide();
            $content.slice(0, 9).show(0);

            $list.not($content).hide(0);
        })
        .filter(".active")
        .click();

        $('input.example').on('change', function() {
            $('input.example').not(this).prop('checked', false);  
        });

    $("#loadMore").on("click", function () {
        $content.filter(":hidden").slice(0, 3).slideDown("slow");
        $('body,html').animate({ scrollTop: +99999 }, 800);
    });

    $(".modal").click(function () {
        $("#popup").fadeToggle("slow");
    });

});
// -----------------------------------------------------------

$('.slider_modal').slick({
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,

    slidesToShow: 2,
    slidesToScroll: 1,
});

$('form').submit(function(e) {
    var empty = $(this).parent().find("input").filter(function() {
      return this.value === "";
    });
    if (!empty.length) {
      $('.modal_window').show();
    }
    $('#popup').hide();
    e.preventDefault();
});

$(".close-btn").on("click", function(){
    $(".modal_window").hide();
});


$('.menu_btn').on('click', function () {
    $('.header_list').slideToggle();
});
$('.catalog_btn').on('click', function () {
    $('.menu').slideToggle();
});

// ------------------------------------------------------------------


$(function () {
    $('.header_list_language').click(function () {
        var lang = $(this).attr('id');

        $('.translate').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

var arrLang = {
    "ua": {
        "list1": "Головна",
        "list2": "Відгуки",
        "list3": "Галерея",
        "list4": "Контакт",
        "list5": "Каталог",
        "main": "Головна",
        "catalog": "Каталог",
        "h1": "Категорії",
        "h2": "Підкатегорії",
        "hall": "Прихожі",
        "mirrors": "Дзеркала",
        "sofa": "Дивани",
        "livin": "Вітальні",
        "child": "Дитячі",
        "bedroom": "Спальні",
        "bed": "Ліжка",
        "tables": "Столи",
        "all": "Все",
        "window_text": "Прийняли вашу завку!",
        "window_sub": "В скорому часі ми вам зателефонуємо",
        "width": "Ширина",
        "height": "Висота",
        "depth": "Глибина",
        "modal_characters": "Характеристика",
        "modal_order": "Замовити",
        "item_container": "Склад комплекту",
        "sm_inner": "см",

    },
    "en": {
        "list1": "Main",
        "list2": "Reviews",
        "list3": "Gallery",
        "list4": "Contacts",
        "list5": "Catalog",
        "main": "Main",
        "catalog": "Catalog",
        "h1": "Categories",
        "h2": "Subcategories",
        "hall": "Hallways",
        "mirrors": "Mirrors",
        "sofa": "Sofas",
        "livin": "Living rooms",  
        "child": "Children`s rooms",
        "bedroom": "Bedrooms",
        "bed": "Beds",
        "tables": "Tables",
        "all": "All products",
        "window_text": "We accept your request!",
        "window_sub": "We will call you shortly",
        "width": "Width",
        "height": "Height",
        "depth": "Depth",
        "modal_characters": "Characteristic",
        "modal_order": "Order",
        "item_container": "Kit Warehouse", 
        "sm_inner": "sm",
        "": "",
        "": "",
        "": "",
        "": "",
    }
}