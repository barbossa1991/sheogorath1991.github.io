$(".burger-menu").on('click', function (e) {
    e.preventDefault()
    $('.burger-menu__btn').toggleClass('active')
    $('.top-menu').toggleClass('active')
})