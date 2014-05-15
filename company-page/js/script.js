$(document).ready(function(){
     $('.one').click(function(){
         $('#main').animate('slow', function() {
             $('#main').css({'background-image': 'url(img/first-sea.jpg)'});
         });
         $('.two, .three').removeClass('current-slide');
         $(this).addClass('current-slide');
     });
     $('.two').click(function(){
         $('#main').animate('slow', function() {
             $(this).css({'background-image': 'url(img/second-sea.jpg)'});
         });
         
         $('.one, .three').removeClass('current-slide');
         $(this).addClass('current-slide');
     });
     $('.three').click(function(){
         $('#main').animate('slow', function() {
             $(this).css({'background-image': 'url(img/third-sea.jpg)'});
         });
         
         $('.one, .two').removeClass('current-slide');
         $(this).addClass('current-slide');
     });          
     
    
   $('.main-scroll, .body-scroll').click(function(){
   	$('body, html').animate({
   		scrollTop: $('body').offset().top
   	},  {
   		duration: 500,
   		easing: 'swing'
   	});
   });   
   	$('.about-scroll').click(function(){
   		$('body, html').animate({
   			scrollTop: $('#about').offset().top
   		},  {
   			duration: 500,
   			easing: 'swing'
   		});
   	});
   	$('.portfolio-scroll').click(function(){
   		$('body, html').animate({
   			scrollTop: $('#portfolio').offset().top
   		},  {
   			duration: 500,
   			easing: 'swing'
   		});
   	});
   	$('.contact-scroll').click(function(){
   		$('body, html').animate({
   			scrollTop: $('#contact').offset().top
   		},  {
   			duration: 500,
   			easing: 'swing'
   		});
   	});
});
   
/*if ($.browser.msie) {               // mozilla || wekbit || opera 
    if ($.browser.version < 9) {
        window.location.href = '';  //redirect link
    } 
}*/