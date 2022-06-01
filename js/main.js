$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }

        ]
    });
});

$(function () {
    $('.plugin__input_jmp').mask('+380000000000');
});
$(document).ready(function () {
    $('.slider_reviews').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        
        autoplay: true,
        autoplaySpeed: 2000,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             dots:false,
        //         }
        //     }

        // ]
    });
});

$('.slider_modal').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,

    slidesToShow: 2,
    slidesToScroll: 1,
});

$(function () {
    $(".modal").click(function (e) {
        $("#popup").fadeToggle("slow");
        e.preventDefault();
    });

});

$('.modal-form').submit(function (e) {
    var empty = $(this).parent().find("input").filter(function () {
        return this.value === "";
    });
    if (!empty.length) {
        $('.modal_window').show();
    }
    $('#popup').hide();
    e.preventDefault();
});
$(".close-btn").on("click", function () {
    $(".modal_window").hide();
});

$('.contact_input').submit(function (e) {
    var empty = $(this).parent().find("input").filter(function () {
        return this.value === "";
    });
    if (!empty.length) {
        $('.inner_modal_window').show();
    }
    e.preventDefault();
});
$(".close-btn").on("click", function () {
    $(".inner_modal_window").hide();
});

$('.menu_btn').on('click', function () {
    $('.header_list').slideToggle();
});


$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        }
        else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});

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
        "list1": "Переваги",
        "list2": "Відгуки",
        "list3": "Галерея",
        "list4": "Контакт",
        "list5": "Каталог",
        "header_title": "ЗРОБИ ДІМ СВОЄЇ МРІЇ",
        "header_descr": "Магазин мебелі з чудовими цінами стильні меблі і декор для дому",
        "header_btn": "Оглянути",
        "hall": "Прихожі",
        "mirrors": "Дзеркала",
        "sofa": "Дивани",
        "living": "Гостинна",
        "catalog": "Каталог",
        "child": "Дитячі",
        "bedroom": "Спальні",
        "bed": "Ліжка",
        "tables": "Столи",
        "slider_descr": "Нові товари",
        "slider_title": "Щойно прибули",
        "benefits_title_main": "Переваги",
        "benefits_title1": "Виcока якість.",
        "benefits_text1": "Ми надаємо гарантію на деякі товари з нашого асортименту. Ми забезбечимо ваш дім не тільки красивим зовнішнім виглядом, але і якісними продуктами.",
        "benefits_title2": "Оригінальний стиль.",
        "benefits_title3": "Практичність.",
        "benefits_title4": "Індивідуальність.",
        "benefits_title5": "Широкий асортимент.",
        "benefits_text2": "Ми підберемо унікальні елементи нашого асортименту під ваш інтер’єр. Практично, зручно та комфортно",
        "benefits_text3": "Всі наші меблі зручні, надійні та прослужать вам далеко не декілька років",
        "benefits_text4": "Індивідуальний підхід до кожного клієнта. Ви можете прийти до нас з фотографією товару, а ми знайдемо постачальників та приємно здивуємо вас ціною",
        "benefits_text5": " Дизайнерські меблі для інтер’єру будь-якої кімнати",
        "reviews_title": "Відгуки",
        "gallery_title": "Галерея",
        "contact_title": "Контакти",
        "contact_question": "Залишились питання?",
        "contact_text": "Ми вам зателефонуємо, допоможемо у виборі товару та відповімо на всі ваші питання",
        "contact_submit": "Зателефонуйте мені",
        "window_text": "Прийняли вашу завку!",
        "window_sub": "В скорому часі ми вам зателефонуємо",
        "mail_title": "Пошта.",
        "tell_title": "Телефон.",
        "gallery_title": "Галерея",
        "list6": "Головна",
        "gallery_text": "Красота в простоті.",
        "gallery_text_inner": "Спробуй щось нове",
        "gallery_btn": "Більше",
        "header_descr_gallery": "Стильні меблі і декор для дому Дивись нижче.",
        
        "width": "Ширина",
        "height": "Висота",
        "depth": "Глибина",
        "modal_characters": "Характеристика",
        "modal_order": "Замовити",
        "item_container": "Склад комплекту",
        "sm_inner": "см",
        
    },
    "en": {
        "list1": "Benefits",
        "list2": "Reviews",
        "list3": "Gallery",
        "list4": "Contacts",
        "list5": "Catalog",
        "header_title": "MAKE YOUR DREAM HOUSE",
        "header_descr": "Shop furniture online for great prices, stylish furnishing and home decor",
        "header_btn": "Discover",
        "hall": "Hallway",
        "mirrors": "Mirrors",
        "sofa": "Sofa",
        "living": "Living room",
        "catalog": "Catalog",
        "child": "Child room",
        "bedroom": "Bedroom",
        "bed": "Bed",
        "tables": "Tables",
        "slider_descr": "New products",
        "slider_title": "Just arrived",
        "benefits_title_main": "Benefits",
        "benefits_title1": "High quality.",
        "benefits_text1": "We provide a guarantee on some products from our assortment. We provide your home not only with beautiful appearance but also with quality products.",
        "benefits_title2": "Original style.",
        "benefits_title3": "Practicality.",
        "benefits_title4": "Individuality.",
        "benefits_title5": "Wide assortment.",
        "benefits_text2": "We will select unique elements of the assortment according to your interior. Practical, convenient and comfortable",
        "benefits_text3": "All our furniture is comfortable, reliable and will serve you for many years.",
        "benefits_text4": "An individual approach to each customer. You can come to us with a photo of the product, and we will know the suppliers and pleasantly surprise you with the price",
        "benefits_text5": "Designer furnishings for the interior of any room",
        "reviews_title": "Reviews",
        "gallery_title": "Gallery",
        "contact_title": "Contacts",
        "contact_question": "Still have questions?",
        "contact_text": "We will call you, help with the selection of goods, and answer all your questions",
        "contact_submit": "Call me",
        "window_text": "We accept your request!",
        "window_sub": "We will call you shortly",
        "mail_title": "Mail.",
        "tell_title": "Phone.",
        "gallery_title": "Gallery",
        "list6": "Main",
        "gallery_text": "Beauty in simplicity.",
        "gallery_text_inner": "Try something new",
        "gallery_btn": "More",
        "header_descr_gallery": "Stylish furniture and home decor See below.",
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
        "": "",
    }
}
