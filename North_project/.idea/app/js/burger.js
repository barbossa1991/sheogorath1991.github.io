$(document).ready(function () {
    $('.roof__burger').click(function(event) {
        $('.roof__burger, .roof-menu').toggleClass('active');
        $('body').toggleClass('lock')
    })
});