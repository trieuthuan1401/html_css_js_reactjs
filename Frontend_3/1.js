const selectElement =(element) => document.querySelector(element);
selectElement('.mobile-menu').addEventListener('click', () =>{
    selectElement('header').classList.toggle('active');
})
$(function(){
    $('#search').click(function (e) { 
        e.preventDefault();
        $('.a').toggleClass('hide-item');
    });
});