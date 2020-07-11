$(function(){
    $('#search').click(function (e) { 
        e.preventDefault();
        $('.nav-link').addClass('hide-item');
        $('.search-form').addClass('active');
        $('.close').addClass('active');
    });  
    $('.close').click(function (e) { 
        e.preventDefault();
        $('.nav-link').removeClass('hide-item');
        $('.search-form').removeClass('active');
        $('.close').removeClass('active');
    });
})  
