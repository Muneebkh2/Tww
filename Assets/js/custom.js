$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.navbar').addClass('nav-fixed-top');
    } else {
        $('.navbar').removeClass('nav-fixed-top');
    }
});