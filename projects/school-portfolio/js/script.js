$(document).ready(function(){

   $('#title').hover(function() {
       $('.title-content').toggleClass('slide-title');
   });

   $('#school').hover(function() {
       $('.school-content').toggleClass('slide-school');
   });

   $('#projects').hover(function() {
      $('.projects-content').toggleClass('slide-projects'); 
   });

   $('#contact').hover(function() {
      $('.contact-content').toggleClass('slide-contact'); 
   });

});