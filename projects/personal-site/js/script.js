$(document).ready(function(){
  
  var myApp = {};
  myApp.on = false;

  $('#about-content').click(function(){
    if(myApp.on == false){
      myApp.on = true;
      $('#about-main').transition({zIndex: '999', opacity: '1'}, 200);
    }
  });

  $('#work-content').click(function(){
    if(myApp.on == false){
      myApp.on = true;
      $('#work-main').transition({zIndex: '999', opacity: '1'});
    }
  });

  $('#portfolio-content').click(function(){
    if(myApp.on == false){
      myApp.on = true;
      $('#portfolio-main').transition({zIndex: '999', opacity: '1'});
    }
  });

  $('#contact-content').click(function(){
    if(myApp.on == false){
      myApp.on = true;
      $('#contact-main').transition({zIndex: '999', opacity: '1'});
    }
  });

  $('.icon-cancel-circled').click(function(){
    if(myApp.on == true){
      myApp.on = false;
      $('#about-main, #work-main, #portfolio-main, #contact-main').transition({zIndex: '-99', opacity: '0'});
    }
  });

});
