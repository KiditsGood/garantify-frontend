const swiper = new Swiper('.slider--outer', {
    pagination: {
        el: '.instruction__steps',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
})

$('.step__left-button').click(function () {
    swiper.slideNext()
})

$('.header__switch-language--visible').click(function () {
    $('.header__switch-language--hidden').slideToggle(200)

    $(this).toggleClass('active')

    $(this.lastElementChild).toggleClass('active')
})