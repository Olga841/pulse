$(document).ready(function(){
    $('.carousel').slick({
        speed: 1200,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.svg" alt="previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg" alt="next"></button>'
});
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i){
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });

    $('.catalog-item__back').each(function(i){
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        });
    });


    $('[data-modal="consultation"]').on('click', function(e){
        e.preventDefault();
        $('#order, #thanks').fadeOut();
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.button_catalogue').on('click', function(e){
        e.preventDefault();
        $('#consultation, #thanks').fadeOut();
        $('.overlay, #order').fadeIn('slow');
    });

    $('.modal__close').on('click', function(e){
        e.preventDefault();
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_submit').on('click', function (e) {
        e.preventDefault();
        $('.overlay, #thanks').fadeIn();
        $('#order, #consultation').fadeOut(50);

    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');


    $(window).scroll(function(){
        if($(this).scrollTop() > 1600) {
            $('.upscroll').fadeIn();
        }  else {
            $('.upscroll').fadeOut();
        }
    })
});