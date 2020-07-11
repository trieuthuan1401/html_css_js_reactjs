$(function () {
    new WOW().init();
    $(window).scroll(function () {
        var vitri = $('html').scrollTop()
        // console.log(vitri)
        if (vitri >= 180) {
            $('.menu').addClass('scrollFunction');
            $('.menu-left ul li a').addClass('scroll');
            $('.btn-timkiem').addClass('scrollSearch');
            $('.top.float-right').addClass('active');
            $('.btn-timkiem.float-right').addClass('active');
        } else if (vitri < 180) {
            $('.menu').removeClass('scrollFunction');
            $('.menu-left ul li a').removeClass('scroll');
            $('.btn-timkiem').removeClass('scrollSearch');
            $('.top.float-right').removeClass('active');
            $('.btn-timkiem.float-right').removeClass('active');
        }
    });
    $(document).ready(function () {
        $("#testimonial-slider").owlCarousel({
            items: 3,
            itemsDesktop: [1000, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile: [650, 1],
            pagination: true,
            autoPlay: true
        });
    });
});


// window.addEventListener('scroll', function () {
//     this.console.log(this.window.pageYOffset)
// })