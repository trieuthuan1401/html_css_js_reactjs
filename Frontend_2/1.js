$(function(){
    $('.menu-toggler').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open')        
    });
    $('.top-nav .nav-link').click(function (e) { 
        e.preventDefault();
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open')  
    });
    $('.up').click(function (e) { 
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1400);
    });
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once:true
    });
});