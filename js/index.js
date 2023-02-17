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
});