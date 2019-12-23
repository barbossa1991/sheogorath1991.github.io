$(".burger-menu").on('click', function (e) {
    e.preventDefault()
    $('.burger-menu__btn').toggleClass('active')
    $('.top-menu').toggleClass('active')
    $('.burger-menu__btn span::before').toggleClass('active')
    $('.burger-menu__btn span::after').toggleClass('active')

})