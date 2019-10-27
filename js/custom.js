$(document).ready(function(){
		'use strict'

	// Trigger Nice Scroll Plugin

    $('html').niceScroll( {
        cursorcolor:'#20A16D',
        cursorwidth : 10,
        cursorborderradius:0,
        cursorborder:'1px solid #20A16D'
    });
    // Scroll To service
     $('.navbar .Services ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.service').offset().top
         },1800);
     });
     // Scroll To body
     $('.navbar .Home ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('body').offset().top
         },1800);
     });
     // Scroll To product
     $('.navbar .Product ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.product').offset().top
         },1800);
     });

	// Scroll To about
     $('.navbar .About ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.about').offset().top
         },1800);
     });
     // Scroll To choose
     $('.navbar .Contact ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.choose').offset().top
         },2000);
     });


});