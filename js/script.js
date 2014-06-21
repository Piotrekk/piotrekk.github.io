$(document).ready(function(){

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  // If window width is > 580px set section#about height too 100%
  var divSize = $('#about-content').height();
  if (windowWidth > 580) {
    $('#about').css('height', windowHeight)
    $('#about-content').css('padding-top', (windowHeight - divSize + 100) / 2)
  }

  // Make header sticky after scroll 50px down 
  var header = document.querySelector('header');
  var origOffsetY = header.offsetTop;

  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $('header').addClass('sticky')
    } else {
      $('header').removeClass('sticky')
    }  
  }
  
  document.onscroll = scroll;

  // Scroll and nav click functions
  var openNav = false;

  function giveAuto(){
    $('body').css('overflow', 'auto')
  }

  $('#menu-icon').click(function(){
    if (openNav == false){
      $('body').transition({overflow: 'hidden'});
      $('nav').transition({marginLeft: '200px'}, 100, 'out');
      $('#main').transition({marginLeft: '200px'}, 100, 'out');
      $('#menu-icon').transition({backgroundColor: 'rgba(0, 0, 0, 0.2'})

      openNav = true;
    } else {
      $('nav').transition({marginLeft: '0px'}, 100, 'out');
      $('#main').transition({marginLeft: '0px'}, 100, 'out');
      $('#menu-icon').transition({backgroundColor: 'transparent'})

      openNav = false;

      setTimeout(giveAuto, 100)
    }
  });

  $('#nav-home-button, #footer-home-button').click(function(){
    $('nav').transition({marginLeft: '0px'}, 100, 'out');
    $('#main').transition({marginLeft: '0px'}, 100, 'out');
    $('#menu-icon').transition({backgroundColor: 'transparent'})

    openNav = false;

    setTimeout(giveAuto, 100)

    $('body, html').animate({
      scrollTop: $('html').offset().top - 50
      },  {
      duration: 500,
      easing: 'swing'
    });
  });

  $('#nav-profile-button, #footer-profile-button, #about-button').click(function(){
    console.log('ok')
    $('nav').transition({marginLeft: '0px'}, 100, 'out');
    $('#main').transition({marginLeft: '0px'}, 100, 'out');
    $('#menu-icon').transition({backgroundColor: 'transparent'})

    openNav = false;

    setTimeout(giveAuto, 100)

    $('body, html').animate({
      scrollTop: $('#profile').offset().top - 50
      },  {
      duration: 500,
      easing: 'swing'
    });
  });

  $('#nav-projects-button, #footer-projects-button').click(function(){
    $('nav').transition({marginLeft: '0px'}, 100, 'out');
    $('#main').transition({marginLeft: '0px'}, 100, 'out');
    $('#menu-icon').transition({backgroundColor: 'transparent'})

    openNav = false;

    setTimeout(giveAuto, 100)

    $('body, html').animate({
      scrollTop: $('#projects').offset().top - 50
      },  {
      duration: 500,
      easing: 'swing'
    });
  });

  $('#nav-contact-button, #footer-contact-button').click(function(){
    $('nav').transition({marginLeft: '0px'}, 100, 'out');
    $('#main').transition({marginLeft: '0px'}, 100, 'out');
    $('#menu-icon').transition({backgroundColor: 'transparent'})

    openNav = false;

    setTimeout(giveAuto, 100)

    $('body, html').animate({
      scrollTop: $('#contact').offset().top - 50
      },  {
      duration: 500,
      easing: 'swing'
    });
  });
});
